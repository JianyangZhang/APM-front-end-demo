import * as React from "react";
import * as ReactDOM from "react-dom";

export class StatisticsPanel extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const tdStyle = {
            // padding:"5px", fontSize:"12px"
        }
        return (
            <div>
                <table className="ui celled table edgy unstackable">
                    <thead className="center aligned">
                        <tr>
                            <th className="edgy dark-gray-bg"  colSpan={12}>{this.props.title}</th>
                        </tr>
                        <tr>
                            <th className="gray-bg" colSpan={6} >脱网告警</th>
                            <th className="gray-bg" colSpan={6} >阈值告警</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="online no-right-border" style={tdStyle}>
                                <i className="icon checkmark"></i>在线:</td>
                            <td className="online no-left-border" style={tdStyle}>{this.props.data.link.online}</td>
                            <td className="negative no-right-border" style={tdStyle}>
                                <i className="icon close"></i>离线:</td>
                            <td className="negative no-left-border" style={tdStyle}>{this.props.data.link.offline}</td>
                            <td className="positive no-right-border" style={tdStyle}>恢复:</td>
                            <td className="positive no-left-border" style={tdStyle}>{this.props.data.link.recover}</td>
                            <td className="negative no-right-border" style={tdStyle}>
                                <i className="attention icon"></i>严重:</td>
                            <td className="negative no-left-border" style={tdStyle}>{this.props.data.load.high}</td>
                            <td className="warning no-right-border" style={tdStyle}>
                                <i className="attention icon"></i>一般:</td>
                            <td className="warning no-left-border" style={tdStyle}>{this.props.data.load.normal}</td>
                            <td className="positive no-right-border" style={tdStyle}>恢复:</td>
                            <td className="positive no-left-border"style={tdStyle}>{this.props.data.load.recover}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
