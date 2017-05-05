import * as vis from "vis";
// import { assign } from 'lodash';


export default class VisNetworkModel {
	private nodes;
	private edges;

	constructor(nodes, edges) {
		this.nodes = new vis.DataSet(Object.keys(nodes).map((id)=>nodes[id]));
		this.edges = new vis.DataSet(Object.keys(edges).map((id)=>edges[id]));
	}

	getData = () => {
		return {nodes:this.nodes, edges:this.edges};
	}

	setNodes = (nodes) => {
		this.nodes.clear();
		this.nodes.add(Object.keys(nodes).map((id)=>nodes[id]));
	}

	setEdges = (edges) => {
		this.edges.clear();
		this.edges.add(Object.keys(edges).map((id)=>edges[id]));
	}

	getNodes = () => {
		return this.nodes;
	}

	getEdges = () => {
		return this.edges;
	}

	getNode = (id) => {
		return this.nodes.get(id)
	}

	getEdge = (id) => {
		return this.edges.get(id)
	}

	getLastNode = () => {
		return this.nodes.get()[this.nodes.length - 1]
	}

	getLastEdge = () => {
		return this.edges.get()[this.edges.length - 1]
	}

	removeNode = (ids=null) => {
		if(!ids)
			ids = this.getLastNode().id
		this.nodes.remove(ids)
	}

	removeEdge = (ids=null) => {
		if(!ids)
			ids = this.getLastEdge().id
		this.edges.remove(ids)
	}

	remove = (dataset) => {
		this.removeNode(dataset.nodes);
		this.removeEdge(dataset.edges);
	}

	updateNode = (nodeInfo) => {
		this.nodes.update(nodeInfo);
	}

	addEdgesListener = (type, callback) =>{
		this.edges.on(type, callback);
	}

	removeEdgesListener = (type, callback) =>{
		this.edges.off(type, callback);
	}

	addNodesListener = (type, callback) =>{
		this.nodes.on(type, callback);
	}

	removeNodesListener = (type, callback) =>{
		this.nodes.off(type, callback);
	}
}