import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';
import * as vis from "vis";
import { assign } from 'lodash';
import {options, defaultOptions} from "./VisNetworkOption"
import {MenuBar, ToolBar} from "./Toolbar"
import Loader from "../ui/Loader"
import VisNetworkModel from "./VisNetworkModel"
import NodeEditPanel from "./NodeEditPanel"
import * as uuidV1 from 'uuid/v1';

export default class VisNetwork extends React.Component<any, any> {
	private network;
	private model;
	private nodeEditPanel;
	private menuBar;

 	constructor() {
 		super();
	    this.state = {addNodeMode:false, addEdgeMode:false, editMode:false, 
	    				deleteMode:false, viewScale:1, viewLocked:false}
    }

    private initialize = () => {
        console.log("initialize topo")
    	const {data} = this.props;
    	this.model = new VisNetworkModel(data.nodes, data.edges);
    	const node = ReactDOM.findDOMNode(this);
    	const container = $(node).find("#topoContainer")[0]
    	this.network = new vis.Network(container, this.model.getData(), options);

    	//绑定network事件
    	this.network.on("selectNode", this.nodeSelectListenser);
    	this.network.on("deselectNode", this.nodeDeselectListener);
    	this.network.on("selectEdge", this.edgeSelectListener);
    	this.network.on("deselectEdge", this.edgeDeselectListener);
    	this.network.on("dragEnd",this.nodeDragEndListener)
    }

    componentDidUpdate() {
    	const {data} = this.props;
    	this.network.body.view.scale = this.state.viewScale;
    	// console.log("update and reset model")
    	// this.model.setNodes(data.nodes);
    	// this.model.setEdges(data.edges);
    	this.model = new VisNetworkModel(data.nodes, data.edges);
    	//绑定model事件
    	this.model.addNodesListener("update", this.nodesUpdateListener);
    	this.model.addNodesListener("remove", this.nodesDeleteListener);
    	this.model.addEdgesListener("remove", this.edgesDeleteListener);
        this.model.addEdgesListener("add", this.edgesAddListener);
    	this.network.setData(this.model.getData())

        if (data['type'] == 'network') {
            this.network.setOptions({nodes:{color:{background: "#5e5e5e"}}})
        } else {
            this.network.setOptions({nodes:{color:{background: "#ffffff"}}})
        }
    }

    shouldComponentUpdate(nextProps, nextState) {

    	if (this.state.viewScale != nextState.viewScale) {
    		return true;
    	}
    	const {data, res} = this.props;
    	if (res != nextProps["res"]) {
    		return true;
    	}
    	//当拓扑数据对象Ref不变化时，不渲染
    	const nextData  = nextProps["data"];
    	if (data == nextData) {
    		console.log("not update")
    		return false;
    	}
    	console.log("update")
    	return true;
    }

    componentDidMount() {
    	this.initialize();
    }

    //######################### Toolbar按钮回调函数定义开始##############################
    handleZoomIn = () => {
    	this.setState({viewScale:(this.state.viewScale + 0.1)})
    }

    handleZoomOut = () => {
    	this.setState({viewScale:(this.state.viewScale - 0.1)})
    }

    handleViewLock = () => {
    	const status = !this.state.viewLocked;
    	this.setState({viewLocked:status})
    	const config = {
    		interaction:{
    			dragNodes:!status,
    			dragView: !status,
    			selectable:!status
    		}}
    	const options = assign({}, defaultOptions.interaction, config)
    	this.network.setOptions(options);
    	return status;
    }
    //######################### Toolbar按钮回调函数定义结束##############################


    //######################### Menubar按钮回调函数定义开始##############################
  	//添加节点按钮回调函数
    handleAddNode = () => {
    	const status = !this.state.addNodeMode
    	this.setState({addNodeMode:status});
    	if (status) {
    		this.enableAddNodeMode()
    	} else {
            this.disableAddNodeMode()
    	}
    	return status;
    }
    //添加连线按钮回调函数
    handleAddEdge = () => {
    	const status = !this.state.addEdgeMode;
    	this.setState({addEdgeMode:status});

    	if (status){
    		this.enableAddEdgeMode();
    	} else {
            this.disableAddEdgeMode();
    	}
    	
    	return status;
    }

    //编辑节点按钮回调函数
    handleEditNode =  () => {
    	const selected = this.network.getSelectedNodes();
    	let node = this.model.getNode(selected[0]);
    	this.nodeEditPanel.show(node);
    }

    //删除按钮回调函数
    handleDelete = () => {
    	const dataset = this.network.getSelection();
    	this.model.remove(dataset);
    	this.menuBar.disableEditNodeMode();
    	this.menuBar.disableDeleteMode();
    }

    handleSave = () => {
    	const {saveTopo} = this.props;
    	saveTopo()
    }
    //打开添加节点模式
    private enableAddNodeMode = () => {
    	this.network.addNodeMode();
    	//点击拓扑，创建新节点，打开编辑面板
    	this.model.addNodesListener("add", this.nodeCreateListener)
		this.network.on('release', this.addNodeModeReleaseListener)
    }

    //关闭添加节点模式
    private disableAddNodeMode = ()=> {
    	this.network.disableEditMode();
    	this.model.removeNodesListener("add", this.nodeCreateListener)
        this.network.off('release', this.addNodeModeReleaseListener) 
    }

    //打开添加连线模式
    private enableAddEdgeMode = () => {
    	this.network.addEdgeMode();
    	this.network.on("release", this.addEdgeModeReleaseListener)
    }

    //关闭添加连线模式
    private disableAddEdgeMode = () => {
    	 this.network.disableEditMode();
    	 this.network.off("release", this.addEdgeModeReleaseListener)
    }
    //######################### Menubar按钮回调函数定义结束##############################

    //弹出窗口，编辑节点按钮回调函数
    handleCancel= () => {
    	const {editMode} = this.state;
    	if(!editMode)
    		this.model.removeNode();
    }

    handleSaveNode = (node) => {
    	this.model.updateNode(node)
    }
    //弹出窗口，编辑节点按钮回调函数结束

    //#################################监听函数开始#####################################
    private addEdgeModeReleaseListener = () => {
    	this.network.addEdgeMode();
    }

    private addNodeModeReleaseListener = () => {
    	this.network.addNodeMode();
    }

  	//节点拖拽事件
  	private nodeDragEndListener = () => {
  		const nodes = this.network.getSelectedNodes();
  		if (nodes.length > 0) {
  			const positions = this.network.getPositions(nodes)
  			const updateList = Object.keys(positions).map((id)=>{
  				return {id:id, x:positions[id].x, y:positions[id].y}
  			})
  			this.model.updateNode(updateList)
  		}
  	}

    private nodeCreateListener = () => {
        const {data} = this.props;
        const {type} = data;
        const image = (type == "network") ? "./img/server.svg" : "./img/app.svg";

    	const node = {
            label:"新建",
            shape:"circularImage",
            image:image,
            resId:null
        }
        const lastNode = this.model.getLastNode();
		let newNode = assign({}, lastNode, node);
		this.model.updateNode(newNode);
		this.nodeEditPanel.show(this.model.getLastNode());
    }

    private nodeSelectListenser = () => {
    	this.setState({editMode:true, deleteMode:true});
    	this.menuBar.enableEditNodeMode();
    	this.menuBar.enableDeleteMode();
    }

    private nodeDeselectListener = () =>{
    	this.setState({editMode:false, deleteMode:false});
    	this.menuBar.disableEditNodeMode();
    	this.menuBar.disableDeleteMode();
    }

    private edgeSelectListener = () => {
    	this.setState({deleteMode:true});
    	this.menuBar.enableDeleteMode();
    	
    }

    private edgeDeselectListener = () => {
    	this.setState({deleteMode:false});
    	this.menuBar.disableDeleteMode();	
    }

    //拓扑更新同步到Store 开始

    //添加、编辑、拖拽node信息更新
    private nodesUpdateListener = (event, properties, senderId) => {
    	const {data, oldData} = properties
    	const {updateNodes} = this.props;
    	let nodeList = []
    	for (let i in data) {
    		const node = assign({}, oldData[i], data[i]);
    		nodeList.push(node)
    	}
    	updateNodes(nodeList)
    }

    private nodesDeleteListener = (event, properties, senderId) => {
    	const {deleteNodes} = this.props;
    	deleteNodes(properties.items)
    }

    private edgesDeleteListener = (event, properties, senderId) => {
    	const {deleteEdges} = this.props;
    	deleteEdges(properties.items)
    }

    private edgesAddListener = (event, properties, senderId) => {
        const {updateEdges} = this.props;
        const edgeList = properties.items.map((id, index)=>{
            return this.model.getEdge(id)
        })
        updateEdges(edgeList)
    }

    //拓扑更新同步到Store 结束
    //#################################监听函数结束#####################################

    private getResList = () => {
    	const {res, data} = this.props;
    	const {type, groupId} = data;
    	const resList = (type == "network") ? res.devices : res.services;

    	const result = Object.keys(resList).map(id=>resList[id])
    									   .filter(item=>item.groupId == groupId)
    									   .map((item)=>{return {name:item.name, value:item.id}})
    	return result
    }

	render() {
		const res = this.getResList()
		const {editMode, deleteMode} = this.state;
		const {loaders} = this.props.data;
		const loaderText = loaders.saving ? "正在保存拓扑信息..." : "正在努力加载拓扑图...";
		return (
			<div id="topoView" style={{width:"100%",height:"100%",minHeight:"500px",position:"relative"}}>
				<Loader show={loaders.loadding || loaders.saving} text={loaderText}/>
				<MenuBar ref={(menuBar)=>{this.menuBar = menuBar}} 
						 onAddNode={this.handleAddNode}
						 onAddEdge={this.handleAddEdge}
						 onEditNode={this.handleEditNode}
						 onDelete={this.handleDelete}
						 onSave={this.handleSave}
						 />

				<ToolBar onZoomIn={this.handleZoomIn}
						 onZoomOut={this.handleZoomOut}
						 onLock={this.handleViewLock}/>

				<NodeEditPanel ref={(panel)=>{this.nodeEditPanel = panel}} 
							   onSave={this.handleSaveNode}
							   onCancel={this.handleCancel}
							   res={res}/>
				<div id="topoContainer" style={{width:"100%",height:"100%"}}></div>
			</div>
		)
	}
}