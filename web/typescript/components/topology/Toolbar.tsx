import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';
import {Button, ButtonGroup} from "../ui/Button"

export  class MenuBar extends React.Component<any, any> {
	constructor() {
 		super();
	    this.state = {addNodeMode:false, addEdgeMode:false, editNodeMode:false,deleteMode:false }
    }

	handleAddNode = () => {
		const {onAddNode} = this.props;
		const status = onAddNode();
		this.setState({addNodeMode:status})
	}

	handleAddEdge = () => {
		const {onAddEdge} = this.props;
		const status = onAddEdge();
		this.setState({addEdgeMode:status})
	}

	handleEditNode = () => {
		const {onEditNode} = this.props;
		onEditNode();
	}

	handleDelete = () =>{
		const {onDelete} = this.props;
		onDelete()
	}

	handleSave = () => {
		const {onSave} = this.props;
		onSave()
	}

	componentWillReceiveProps(nextProps) {

	}

	enableEditNodeMode = () => {
		this.setState({editNodeMode:true})
	}

	disableEditNodeMode = () => {
		this.setState({editNodeMode:false})
	}

	enableDeleteMode  = () =>{
		this.setState({deleteMode:true})
	}

	disableDeleteMode  = () =>{
		this.setState({deleteMode:false})
	}


	render() {
		const {onAddNode, onAddEdge} = this.props;
		const {addNodeMode, addEdgeMode, editNodeMode, deleteMode} = this.state;
		const addNodeIcon = addNodeMode ? "reply" : "plus"
		const addEdgeIcon = addEdgeMode ? "reply" : "compress"

		return (
			<ButtonGroup size="mini" styleList={{position:"absolute",left:5, top:0, zIndex:3}}>
				<Button color="teal" 
						outline={true} 
						icon={addNodeIcon} 
						disabled={addEdgeMode}
						onClick={this.handleAddNode}/>

				<Button color="teal" 
						outline={true} 
						icon="minus" 
						onClick={this.handleDelete}
						disabled={!deleteMode || addNodeMode || addEdgeMode}/>

				<Button color="teal" 
						outline={true} 
						icon={addEdgeIcon} 
						disabled={addNodeMode}
						onClick={this.handleAddEdge}/>

				<Button color="teal" 
						outline={true} 
						icon="edit" 
						onClick={this.handleEditNode}
						disabled={!editNodeMode || addNodeMode || addEdgeMode}/>
						
				<Button color="teal" 
						outline={true} 
						icon="save" 
						onClick={this.handleSave}
						disabled={addNodeMode || addEdgeMode}/>
			</ButtonGroup>
		)
	}
}

export  class ToolBar extends React.Component<any, any> {
	constructor() {
 		super();
	    this.state = {viewLocked:false}
    }

	handleViewLock = () => {
		const {onLock} = this.props;
		const status = onLock();
		this.setState({viewLocked:status})
	}

	render() {
		const {onZoomIn, onZoomOut} = this.props;
		const lockIcon = this.state.viewLocked ? "lock" : "unlock"
		return (
			<ButtonGroup vertical={true} size="mini" styleList={{position:"absolute",right:5, bottom:10, zIndex:3}}>
				<Button color="violet" outline={true} icon="zoom" onClick={onZoomIn}/>
				<Button color="violet" outline={true} icon="zoom out" onClick={onZoomOut}/>
				<Button color="violet" outline={true} icon={lockIcon} onClick={this.handleViewLock}/>
			</ButtonGroup>
		)
	}
}