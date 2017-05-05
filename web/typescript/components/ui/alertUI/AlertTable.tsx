import * as React from "react";
import * as ReactDOM from "react-dom";

export class AlertTable extends React.Component<any, any> {
    private alert_table: any;
    constructor(props, context) {
        super(props, context);
        this.state = this.initState();
    }

    private initState = () => {
        return {
            items_per_page: 15,
            current_page: 0,
            total_pages: 1, // 鸡肋
            keyword: ""
        }
    }

    convertLevelToClassName = (level: string) => {
        switch (level) {
            case "一般":
                return "warning";
            case "严重":
                return "negative";
            case "恢复":
                return "positive";
            default:
                return "";
        }
    }

    getPropName = (word: string) => {
        switch (word) {
            case "严重":
                return "filter_high";
            case "一般":
                return "filter_normal";
            case "恢复":
                return "filter_recover";
            case "硬件":
                return "filter_hardware";
            case "软件":
                return "filter_software";
            default:
                return "";
        }
    }

    tableConfig = () => {
        const that = this;
        // 初始化表格配置
        this.alert_table = $('#alert_table').DataTable({
            "lengthMenu": [[15, 25, 35, 50], [15, 25, 35, 50]],
            "columns": [
                { "orderable": false },
                { "orderable": false },
                { "orderable": false },
                { "orderable": true },
                { "orderable": false },
            ],
            "bDestroy": true
        });

        // 初始化表格显示
        const pageInfo = this.alert_table.page.info();
        this.alert_table.search(this.state.keyword);
        this.alert_table.column('3').order('des');
        this.alert_table.page.len(this.state.items_per_page);
        $("#alert_table_length .text").html(this.state.items_per_page.toString());
        $("#alert_table_filter input").attr("placeholder", "请输入关键词");
        this.state.total_page = pageInfo.pages;
        if (this.state.current_page + 1 <= this.state.total_page) {
            this.alert_table.page(this.state.current_page).draw(false) // false: redraw the table without changing current paging position
        } else {
            this.alert_table.page(this.state.total_page - 1).draw(false)
            this.state.current_page = this.state.total_page - 1;
        }

        // 表格事件
        // $('#alert_table').on('page.dt', function() {
        //     that.state.current_page = that.alert_table.page.info().page;
        //     that.props.updateAlerts(); // 异步action
        // });
        $('#alert_table').on('length.dt', function(e, settings, len) {
            that.state.items_per_page = len;
        });
        $('#alert_table').on('search.dt', function() {
            that.state.keyword = that.alert_table.search();
        });
    }

    componentWillUpdate() {
        this.alert_table.destroy();
    }

    componentDidMount() {
        // this.props.updateAlerts();
        this.tableConfig();
    }

    componentDidUpdate() {
        this.tableConfig();
    }

    render() {
        const that = this;
        const trs = [];
        let tr_key: number = 0;
        Object.keys(that.props.data).forEach(function(key) {
            let item = that.props.data[key];
            if (that.props.filters[that.getPropName(item.level)] && that.props.filters[that.getPropName(item.type)]) {
                trs.push(
                    <tr key={++tr_key} className={that.convertLevelToClassName(item.level)}>
                        <td>{item.name}</td>
                        <td className="indicator">{item.level}</td>
                        <td>{item.type}</td>
                        <td>{item.time}</td>
                        <td className="left aligned">{item.log}</td>
                    </tr>
                );
            }
        })

        return (
            <div className="column">
                <table className="ui sortable selectable celled table edgy" id="alert_table">
                    <thead className="center aligned">
                        <tr>
                            <th className="edgy dark-gray-bg">资源名</th>
                            <th className="edgy one wide dark-gray-bg">告警级别</th>
                            <th className="edgy dark-gray-bg">资源类型</th>
                            <th className="edgy four wide dark-gray-bg">告警时间<i className="sort icon"></i></th>
                            <th className="edgy six wide dark-gray-bg">告警内容</th>
                        </tr>
                    </thead>
                    <tbody className="center aligned">
                        {trs}
                    </tbody>
                </table>
            </div>
        )
    }
}
