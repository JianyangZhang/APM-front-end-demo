import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';

export class ViewContainer extends React.Component<any, any> {

	render() {
		const {styleList} = this.props;
		return (
			<div className="view" style={styleList}>
				{this.props.children}
			</div>
		)
	}
}


export class HBox extends React.Component<any, any> {

	render() {
		const styleList = {
			marginTop: "0px"
		}
		return (
			<div className="ui horizontal segments box" style={styleList}>
				{this.props.children}
			</div>
		)
	}
}

export class ToggleButton extends React.Component<any, any> {

	constructor(props, context) {
	    super(props, context);
	    this.state = {show:false}
    }

	componentDidMount() {
		let node = ReactDOM.findDOMNode(this);
		$(node).mouseover((e)=>{
			this.setState({show:true})
		}).mouseleave((e)=>{
			this.setState({show:false})
		})
	}


	render() {
		const {hidden, handleClick} = this.props
		return (
			<div className={classNames("rc-menu-btn", {"active":this.state.show, "hidden":hidden})}>
		       <button className="ui mini icon olive button" onClick={handleClick}>
		       	 <i className="list layout icon"></i>
		       </button>
		    </div>
		)
	}
}

export class LeftBox extends React.Component<any, any> {

	render() {
		const {show} = this.props;
		return (
			<div className={classNames("ui", "inverted", "segment", "left", "box", {"deactive":!show})}>
				{this.props.children}
			</div>
		)
	}
}

export class RightBox extends React.Component<any, any> {
	render() {
		const {show, background} = this.props;
		return (
			<div className="ui segment right box" style={{backgroundColor:background}}>
				{this.props.children}
			</div>
		)
	}
}