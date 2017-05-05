import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';

export  class Panel extends React.Component<any, any> {
	render() {
		return <div className="basic-panel">{this.props.children}</div>
	}
}


export  class PanelHeader extends React.Component<any, any> {
	render() {
		const {icon, title} = this.props;
		return (
			<div className="basic-panel-header">
		        <div className="image">
		            <i className={classNames([`${icon}`], "icon")}></i>
		        </div>
		        <div className="title">
		            {title}
		        </div>
		    </div>
		)
	}
}

export  class PanelContent extends React.Component<any, any> {
	render() {
		return <div className="basic-panel-content">{this.props.children}</div>
	}
}
