import { assign } from 'lodash';
import { IState } from '../model'

import {
  TOPO_LOAD_DATA,
  TOPO_UPDATE_NODES,
  TOPO_UPDATE_EDGES,
  TOPO_DELETE_NODES,
  TOPO_DELETE_EDGES,
  TOPO_SAVE_STATUS,
  TOPO_LOAD_STATUS } from "../actions/ActionTypes"
import initialState from '../constants/state';

export default (state, action)  => {
  let previousState = (state ? state : initialState());
  switch (action.type) {
    case TOPO_LOAD_DATA:
      return setTopoData(previousState, action);
    case TOPO_UPDATE_NODES:
      return updateNodes(previousState, action);
    case TOPO_UPDATE_EDGES:
      return updateEdges(previousState, action);
    case TOPO_DELETE_NODES:
      return deleteNodes(previousState, action);
    case TOPO_DELETE_EDGES:
      return deleteEdges(previousState, action);
    case TOPO_SAVE_STATUS:
      return setSaveStatus(previousState, action);
    case TOPO_LOAD_STATUS:
      return setLoadStatus(previousState, action);
    default:
      return previousState;
  }
}

function setSaveStatus(state, action) {
    const loaders = {...state.topology.loaders, saving: action.payload}
    return assign({}, state, {topology:{...state.topology, loaders:loaders}});
}

function setLoadStatus(state, action) {
  const loaders = {...state.topology.loaders, loadding: action.payload}
    return assign({}, state, {topology:{...state.topology, loaders:loaders}});
}

function updateNodes(state, action) {
  for (let node of action.payload) {
     state.topology.nodes[node.id] = node;
  }
  return state;
}

function updateEdges(state, action) {
  for (let edge of action.payload) {
     state.topology.edges[edge.id] = edge;
  }
  return state;
}

function deleteNodes(state, action) {
  for (let id of action.payload) {
     delete state.topology.nodes[id]
  }
  return state;
}

function deleteEdges(state, action) {
  for (let id of action.payload) {
     delete state.topology.edges[id]
  }
  return state;
}

function setTopoData(state, action) {
  const {nodes, edges, id, type, groupId} = action.payload;
  let nodeList={}, edgeList={};
  for (let item of nodes) {
    nodeList[item.id] = item;
  }

  for (let item of edges) {
    edgeList[item.id] = item;
  }
  return assign({}, state, {topology:{...state.topology, id:id, type:type, groupId:groupId, nodes:nodeList, edges:edgeList}});
}




