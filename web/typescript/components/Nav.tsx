import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from 'react-router';
// import * as moment from "moment";

export class Dropdown extends React.Component<any, any> {

	componentDidMount() {
		let node = ReactDOM.findDOMNode(this);
		$(node).dropdown();
	}

	// handleMenuItemClick = (url) => {
	// 	console.log(url)
	// }

	render() {
		const { context } = this.props;
		return (
		  <div className="ui dropdown item">
		    <i className="content icon"></i>
		    <div className="menu">
		      {
		      	context.map((item, index)=>{
		      		return (
		      			<div className="item" key={item.id}>
		      				<i className="block layout icon"></i><Link to={item.url}> {item.text}</Link>
		      			</div>
		      		)
		      	})
		      }
		    </div>
		  </div>
		)
	}
}

export class SearchInput extends React.Component<any, any> {

	render() {
		return (
			<div className="ui category search item">
			    <div className="ui inverted transparent left icon  input">
			      <input className="prompt" type="text" placeholder="Search..." />
			      <i className="search link icon"></i>
			    </div>
			    <div className="results"></div>
			</div>
		)
	}
}

export class RightMenu extends React.Component<any, any> {
	private currentTime:string;
	constructor(props, context) {
	    super(props, context);
	    this.currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
	}

	render() {
		return (
			<div className="right menu">
			   <div className="item"><i className="wait icon"></i>{this.currentTime}</div>
   			   <a className="item"><i className="setting icon"></i></a>
               <a className="item"><i className="user icon"></i></a>
			</div>
		)
	}
}


export default class Nav extends React.Component<any, any> {
	render() {
		const styleList = {
			marginBottom: "0px"
		}
		const {menuList} = this.props;

		return (
			<div className="ui inverted menu" style={styleList}>
				<Dropdown context={menuList}/>
				<SearchInput />
				<RightMenu />
			</div>
		)
	}
}