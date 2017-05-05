import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';

export  class MiddlewareContainer extends React.Component<any, any> {
	render() {
		return <div className="middleware-box">{this.props.children}</div>
	}
}

export  class MiddlewareLeftBox extends React.Component<any, any> {
	render() {
		return <div className="left-mid-box">{this.props.children}</div>
	}
}

export  class MiddlewareRightBox extends React.Component<any, any> {
	render() {
		return <div className="right-mid-box">{this.props.children}</div>
	}
}

export  class MiddlewareLeftBoxHeader extends React.Component<any, any> {
	render() {
		return <div className="left-mid-box-header">{this.props.children}</div>
	}
}

export  class MiddlewareLeftBoxHeaderRight extends React.Component<any, any> {
	render() {
		return <div className="right">{this.props.children}</div>
	}
}


export  class MiddlewareLeftBoxTitle extends React.Component<any, any> {
	render() {
		const {logo, text} = this.props;
		return (
			 <div className="title">
                  <img className="logo" src={logo}/>
                  <div className="desc">  
                    {text}
                  </div>
              </div>
		)
	}
}