import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';


export  class HexagonContainer extends React.Component<any, any> {
	render() {
		const {styleList} = this.props;
		return <div className="hex-container" style={styleList}>{this.props.children}</div>
	}
}

export  class HexagonRow extends React.Component<any, any> {
	render() {
		return <div className="hex-row">{this.props.children}</div>
	}
}

export  class Hexagon extends React.Component<any, any> {
	public static defaultProps: Partial<any> = {
        color: "blue",
        title:"",
        desc:"",
        text:"0",
        subText:""
    };
	render() {
		const {color, title, desc, text, subText} = this.props;
		return (
			<div className={classNames("hexagon", [`${color}`])}>
				<div className="content">
	                <div className="title">{title}</div>
	                <div className="value">
	                  <span className="integer">{text}</span>
	                  <span className="decimal">{subText}</span>
	                </div>
	                <div className="desc">{desc}</div>
                </div>
			
			</div>
		)
	}
}