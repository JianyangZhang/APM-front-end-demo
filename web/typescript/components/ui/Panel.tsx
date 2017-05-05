import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';

export class PanelGroup extends React.Component<any, any> {
	public static defaultProps: Partial<any> = {
        wide: ""
    };

	render() {
		const {wide} = this.props;

		return (
			<div className={classNames("ui", wide, "cards")}>
				{this.props.children}
			</div>
		)
	}
}

// PanelGroup.defaultProps = {
// 	wide = "";
// }

export class PanelLoader extends React.Component<any, any> {
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

export class PanelWrapper extends React.Component<any, any> {
	public static defaultProps: Partial<any> = {
        // width:"300px",
        // height:"100px"
        showLoader:false,
        colored:false,
        color:"purple"
    };


	render() {
		const {width, height, colored, color, showLoader} = this.props;

		return (
			<div className={classNames("ui", "card", {"colored":colored, [`${color}`]:colored})} 
				 style={{width:width, height:height}}>
				 <PanelLoader show={showLoader}/>
				{this.props.children}
			</div>
		)
	}
}

export class PanelTitle extends React.Component<any, any> {
	public static defaultProps: Partial<any> = {
        colored:false
    };

	render() {
		const {text, colored} = this.props;

		return (
			<div className={classNames({"title-line":!colored, "title":colored})}>
				{text}
			</div>
		)
	}
}

export class ContentBox extends React.Component<any, any> {

	render() {
		const {height} = this.props;
		return (
			<div className="content-box" style={{height:height}}>
				{this.props.children}
			</div>
		)
	}
}

export class Panel extends React.Component<any, any> {

	render() {
		return (
			<div className="content">
				{this.props.children}
			</div>
		)
	}
}
