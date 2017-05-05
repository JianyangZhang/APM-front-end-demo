import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';

export  class HisDashContainer extends React.Component<any, any> {
	render() {
		return <div className="his-dash-container">{this.props.children}</div>
	}
}

export  class HisDashRow extends React.Component<any, any> {
	render() {
		const {icon, title} = this.props;
		return (
			<div className="his-dash-row">
				<div className="brand">
                  <img src={icon} className="icon"/>
                  <div className="text">{title}</div>
                </div>
                <div className="content">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export  class HisDashPanel extends React.Component<any, any> {
	render() {
		const {styleList} = this.props;
		return <div className="card panel" style={styleList}>{this.props.children}</div>
	}
}