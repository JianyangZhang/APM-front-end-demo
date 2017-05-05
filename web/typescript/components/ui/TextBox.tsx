import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';


export class BigTextBox extends React.Component<any, any> {
	render() {
		const {styleList, value, unit, desc} = this.props;

		return (
			<div className="big-text-box" style={styleList}>
				<span className="value">{value}</span>
                <span className="unit">{unit}</span>
                <span className="desc">{desc}</span>
			</div>
		)
	}
}

export class TextBoxContainer extends React.Component<any, any> {
	render() {
		const {styleList} = this.props;

		return (
			<div className="text-box-container" style={styleList}>
				{this.props.children}
			</div>
		)
	}
}


export class TextBox extends React.Component<any, any> {
	render() {
		const {label, value, icon, iconColor} = this.props;
		let labelContent;
		let iconStyle;

		if (iconColor) {
			iconStyle = {color: iconColor}
		}

		return (
			 <div className="text-box">
                <span className="label-line">
                {icon ? <i className={classNames(icon, "icon")} style={iconColor}></i> : null}
                {label}
                </span>
                <span className="text-value">{value}</span>
             </div>
		)
	}	
}