import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';
import { assign } from 'lodash';
import {Select} from "../ui/Dropdown";

export default class NodeEditPanel extends React.Component<any, any> {
	constructor() {
 		super();
	    this.state = {node:{}}
    }

    show = (node) => {
    	this.setState({node:node})
    	this.forceUpdate();
    	const model = ReactDOM.findDOMNode(this);
    	$(model).modal({
    		closable: false,
    		onHidden:(e)=>{this.setState({node:{}})}
    	}).modal('show')
    }

    private reset =() => {
    	this.setState({node:{}})
    }

    hide = () => {
    	const model = ReactDOM.findDOMNode(this);
    	$(model).modal('hide')
    	this.reset()
    }

    handleChange = (value, text, element) => {
    	const node = assign({}, this.state.node, {resId:value, label:text}) 
    	this.setState({node:node})
    }

    onSave = () => {
    	const {onSave} = this.props;
    	onSave(this.state.node);
    	this.reset()
    }

    onCancel = () => {
    	const {onCancel} = this.props;
    	onCancel();
    	this.reset()
    }

	render() {
		const {node, show} = this.state;
		const {res} = this.props;
		return (
			  <div className={classNames("ui", "small", "modal")}>
			    <div className="header">
			      编辑节点信息
			    </div>
			    <div className="content">
			      <form className="ui form">
			      	<div className="field">
			      		<label>关联资源</label>
			      		<Select data={res} onChange={this.handleChange} defaultValue={node["resId"]}/>
			      	</div>
			      </form>
			    </div>
			    <div className="actions">
			      <div className="ui negative button" onClick={this.onCancel}>
			        取 消
			      </div>
			      <div className="ui positive right button" onClick={this.onSave}>
			        保 存
			      </div>
			    </div>
			  </div>
		)
	}
}