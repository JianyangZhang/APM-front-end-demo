import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';

export class Button extends React.Component<any, any> {
	public static defaultProps: Partial<any> = {
        onClick: ()=>{},
        disabled: false
    };
	render() {
		const {text, icon, color, outline, styleList, size, onClick, disabled} = this.props;
		return (
			<button className={classNames("ui", {"icon":icon, [`${color}`]:color, [`${size}`]:size, "basic":outline},"button")} 
				style={styleList} onClick={onClick} disabled={disabled}>
				{icon ? <i className={classNames({[`${icon}`]:icon},"icon")}></i> :null }
				{text}
			</button>
		)
	}
}


export class ButtonGroup extends React.Component<any, any> {
	render() {
		const {icon, outline, vertical, size, styleList} = this.props;
		return (
			<div className={classNames("ui", {"basic":outline, "vertical":vertical,[`${size}`]:size} ,"buttons")} style={styleList}>
				{this.props.children}
			</div>
		)
	}
}