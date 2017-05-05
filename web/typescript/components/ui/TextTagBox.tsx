import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';

export class TextTagBox extends React.Component<any, any> {
	render() {
		const {styleList} = this.props;

		return (
			<div className="text-tag-box" style={styleList}>
				{this.props.children}
			</div>
		)
	}
}

export class TextTag extends React.Component<any, any> {
	render() {
		const {value, label} = this.props;

		return (
			<div className="text-tag">
              <div className="text-tag-value">{value}</div>
              <div className="text-tag-label">{label}</div>
            </div>
		)
	}
}