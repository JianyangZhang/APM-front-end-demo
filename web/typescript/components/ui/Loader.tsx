import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';

export default class Loader extends React.Component<any, any> {
	public static defaultProps: Partial<any> = {
        text:"数据载入中...",
        show:false
    };

	render() {
		const {text, show} = this.props;
		return (
			 <div className={classNames("ui", {"active":show}, "dimmer")}>
			    <div className="ui text loader">{text}</div>
			 </div>
		)
	}
}