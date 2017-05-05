import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';
import { connect } from 'react-redux';
import VisNetwork from "../components/topology/VisNetwork"
import {ViewContainer, ToggleButton } from "../components/View.tsx";
import {TreeView} from  "../components/TreeView2.tsx";
import { getBreadcrumbModuleAction } from "../actions/NavigatorActions";
import { loadTopoData, 
         saveTopoData,
         getUpdateNodesAction,
         getUpdateEdgesAction,
         getDeleteNodesAction,
         getDeleteEdgesAction } from "../actions/TopologyActions";

export class Topology extends React.Component<any, any> {
    public static defaultProps: Partial<any> = {
        data:{id:null, groupId:null, type:"network", nodes:{}, edges:{}, loaders:{saving:false, loadding:false}}
    };
    constructor(props, context) {
        super(props, context);
        this.state = {treeViewShow:false, toggleButtonShow:true}
    }

    componentDidMount() {
       const {setBreadcrumbModule, loadTopoData} = this.props;
       //加载默认
       setBreadcrumbModule(["拓扑管理"]);
       loadTopoData("-1");
    }

	handleToggleButtonClick = () => {
		this.setState({treeViewShow:true, toggleButtonShow:false})
	}

	handleTreeViewCloseButtonClick = () => {
		this.setState({treeViewShow:false, toggleButtonShow:true})
	}

    handleTreeItemClick = (itemInfo) => {
        const {loadTopoData} = this.props;
        loadTopoData(itemInfo.id)
        // loadTopoData(itemInfo.id, itemInfo.resType)
    }

    createResTreeModel = () => {
        const {resource} = this.props;
        const groupList = Object.keys(resource.groups)
                                .map(key=>resource.groups[key])
        const topologyIdList = Object.keys(resource.topologys);

        const result = groupList.map((group)=>{
            let groupItem = {id:group.id, name:group.name, type:"folder", itemList:[]};
            let netSubGroupItem = {id:group.id + '_device', name:"网络拓扑", type:"folder", itemList:[]};
            let servSubGroupItem = {id:group.id + '_service', name:"业务拓扑", type:"folder", itemList:[]};

            netSubGroupItem.itemList = topologyIdList.map(key=>resource.topologys[key])
                                                .filter(topo=>((topo.groupId == group.id) && (topo.type == "network")))
                                                .map(topo=>{return {id:topo.id, name:topo.name, type:"file", resType:topo.type}})

            servSubGroupItem.itemList = topologyIdList.map(key=>resource.topologys[key])
                                                .filter(topo=>((topo.groupId == group.id) && (topo.type == "service")))
                                                .map(topo=>{return {id:topo.id, name:topo.name, type:"file", resType:topo.type}})


            groupItem.itemList.push(netSubGroupItem)
            groupItem.itemList.push(servSubGroupItem)
            return groupItem;
        })
        return result;
    }

    render() {
    	const treeModel = this.createResTreeModel();
        const {topoData, resource, updateNodes, updateEdges, deleteNodes, deleteEdges, saveTopoData} = this.props;
        return (
        	<ViewContainer>
                <ToggleButton handleClick={this.handleToggleButtonClick} 
                              hidden={!this.state.toggleButtonShow}/>
                <TreeView show={this.state.treeViewShow} itemList={treeModel} handleClick={this.handleTreeItemClick} handleClose={this.handleTreeViewCloseButtonClick}/>
        		<VisNetwork data={topoData} res={resource} updateNodes={updateNodes}
                    deleteNodes={deleteNodes} deleteEdges={deleteEdges} updateEdges={updateEdges}
                    saveTopo={saveTopoData}/>
        	</ViewContainer>   	
        	  	
        )
    }
}

const mapStateToProps = state => ({
    resource:state.resourceReducer.resource,
    topoData:state.topologyReducer.topology
});

const mapDispatchToProps = dispatch  => ({
    loadTopoData:(resId) => dispatch(loadTopoData(resId)),
    saveTopoData:() => dispatch(saveTopoData()),
    updateNodes:(nodes) => dispatch(getUpdateNodesAction(nodes)),
    updateEdges:(edges) => dispatch(getUpdateEdgesAction(edges)),
    deleteNodes:(nodeIds) => dispatch(getDeleteNodesAction(nodeIds)),
    deleteEdges:(edgeIds) => dispatch(getDeleteEdgesAction(edgeIds)),
    setBreadcrumbModule:(data) => dispatch(getBreadcrumbModuleAction(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Topology);

