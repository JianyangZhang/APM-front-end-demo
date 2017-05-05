import * as React from "react";
import * as ReactDOM from "react-dom";
import { assign } from 'lodash';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateAlerts } from "../actions/AlertActions";
import { StatisticsPanel } from "../components/ui/alertUI/StatisticsPanel";
import { FiltersPanel } from "../components/ui/alertUI/FiltersPanel";
import { AlertTable } from "../components/ui/alertUI/AlertTable";
import { getBreadcrumbModuleAction } from "../actions/NavigatorActions";

export class Alert extends React.Component<any, any> {
    private filter_items: any;
    public static defaultProps: Partial<any> = {
        data:{}, 
        statistics:{
           hardware:{
            link: {
                online: 0,
                offline: 0,
                recover: 0
            },
            load: {
                high: 0,
                normal: 0,
                recover: 0
            }
        },software: {
            link: {
                online: 0,
                offline: 0,
                recover: 0
            },
            load: {
                high: 0,
                normal: 0,
                recover: 0
            }
        }}
    };
    constructor(props, context) {
        super(props, context);
        this.state = this.initState();
        this.filter_items = [
            { name: "严重", id: "filter_high", callback: () => { this.setState({ filters: assign({}, this.state.filters, { filter_high: !this.state.filters.filter_high }) }) } },
            { name: "一般", id: "filter_normal", callback: () => { this.setState({ filters: assign({}, this.state.filters, { filter_normal: !this.state.filters.filter_normal }) }) } },
            { name: "恢复", id: "filter_recover", callback: () => { this.setState({ filters: assign({}, this.state.filters, { filter_recover: !this.state.filters.filter_recover }) }) } },
            { name: "硬件", id: "filter_hardware", callback: () => { this.setState({ filters: assign({}, this.state.filters, { filter_hardware: !this.state.filters.filter_hardware }) }) } },
            { name: "软件", id: "filter_software", callback: () => { this.setState({ filters: assign({}, this.state.filters, { filter_software: !this.state.filters.filter_software }) }) } },
        ];
    }

    private initState = () => {
        return {
            filters: {
                filter_high: true,
                filter_normal: true,
                filter_recover: true,
                filter_software: true,
                filter_hardware: true,
            }
        };
    }

    componentDidMount() {
        this.props.updateAlerts();
        this.props.getBreadcrumbModuleAction(["告警管理","实时告警"])
    }

    render() {
        return (
            <div style={{marginTop:"20px"}} id="alert">
                <div className="ui two column divided grid container">
                    <div className="column">
                        <StatisticsPanel title={"硬件告警"} data={this.props.statistics.hardware} ></StatisticsPanel>
                    </div>
                    <div className="column">
                        <StatisticsPanel title={"软件告警"} data={this.props.statistics.software} ></StatisticsPanel>
                    </div>
                </div>
                <div className="ui container" id="search_row">
                    <FiltersPanel items={this.filter_items} status={this.state.filters} ></FiltersPanel>
                </div>
                <div className="ui one column grid container">
                    <AlertTable data={this.props.data} filters={this.state.filters} updateAlerts={this.props.updateAlerts}></AlertTable>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (storeState) => {
    return {
        data: storeState.alertReducer.alert.data,
        statistics: storeState.alertReducer.alert.statistics
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateAlerts,
        getBreadcrumbModuleAction
    }, dispatch);
}

const AlertApp = connect(mapStateToProps, mapDispatchToProps)(Alert);

export default AlertApp;
