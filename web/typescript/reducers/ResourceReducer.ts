import { assign } from 'lodash';
import { IState } from '../model'
import {
	RES_DEVICE_LIST,
  RES_SERVICE_LIST,
  RES_GROUP_LIST,
  RES_TOPOLOGY_LIST } from "../actions/ActionTypes"
import initialState from '../constants/state';

export default (state, action)  => {
  let previousState = (state ? state : initialState());
  switch (action.type) {
    case RES_GROUP_LIST:
      return setGroupList(previousState, action);
    case RES_DEVICE_LIST:
      return setDeviceList(previousState, action);
    case RES_SERVICE_LIST:
      return setServiceList(previousState, action);
    case RES_TOPOLOGY_LIST:
      return setTopologyList(previousState, action);
    default:
      return previousState;
  }
}

function setTopologyList(state, action) {
  const topoList = {}
  for (let item of action.payload) {
    topoList[item.id] = item;
  }
  return assign({}, state, {resource:{...state.resource, topologys:topoList}});
}

function setServiceList(state, action) {
  const serviceList = {}
  for (let item of action.payload) {
    serviceList[item.id] = item;
  }
  return assign({}, state, {resource:{...state.resource, services:serviceList}});
}

function setGroupList(state, action) {
  const groupList = {}
  for (let item of action.payload) {
    groupList[item.id] = item;
  }
  return assign({}, state, {resource:{...state.resource, groups:groupList}});
}

function setDeviceList(state, action) {
  const deviceList = {}
  for (let item of action.payload) {
    deviceList[item.id] = item;
  }
	return assign({}, state, {resource:{...state.resource, devices:deviceList}});
}
