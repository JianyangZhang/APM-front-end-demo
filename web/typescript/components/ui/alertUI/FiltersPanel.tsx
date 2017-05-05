import * as React from "react";
import * as ReactDOM from "react-dom";

export class FiltersPanel extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const labelStyle = {
            paddingLeft: "1.8em",
            paddingRight: "1em"
        }
        return (
            <div id="filter_items">
                {
                    this.props.items.map((item, index) => {
                        return (
                            <div key={index} className="ui checkbox inline">
                                <input type="checkbox" checked={this.props.status[item.id] ? true : false} onChange={item.callback} />
                                <label style={labelStyle}>{item.name}</label>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
