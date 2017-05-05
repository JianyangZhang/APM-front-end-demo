import * as React from "react";
import * as ReactDOM from "react-dom";

export default class Breadcrumb extends React.Component<any, any> {

	render() {
		const {path} = this.props;
		return (
			<ul className="breadcrumb">
			  {
			  	path.map((item, index)=>{
			  		return (
			  			<li key={index}><a href="#">{item.text}</a></li>
			  		)
			  	})
			  }
			</ul>
		)
	}
}