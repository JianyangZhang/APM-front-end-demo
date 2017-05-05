import { assign } from 'lodash';
import { IState } from '../model'
import {
	MONITOR_RES_ID,
	MONITOR_RES_INFO,
	MONITOR_SERVER_BASIC_INFO,
	MONITOR_SERVER_CPU_USAGE,
	MONITOR_SERVER_MEM_USAGE,
	MONITOR_SERVER_FILE_SYSTEM_USAGE,
	MONITOR_SERVER_DISK_IO,
	MONITOR_SERVER_NETWORK_IO,
	MONITOR_SERVER_PROCESS,
  MONITOR_SERVER_BASIC_INFO_LOADER,
  MONITOR_SERVER_CPU_USAGE_LOADER,
  MONITOR_SERVER_MEM_USAGE_LOADER,
  MONITOR_SERVER_FILE_SYSTEM_USAGE_LOADER,
  MONITOR_SERVER_DISK_IO_LOADER,
  MONITOR_SERVER_NETWORK_IO_LOADER,
  MONITOR_SERVER_PROCESS_LOADER,
  MONITOR_CLEAR_DATA } from "../actions/ActionTypes"
import initialState from '../constants/state';

export default (state, action)  => {
  let previousState = (state ? state : initialState());
  switch (action.type) {
    case MONITOR_RES_ID:
      return setResId(previousState, action);
    case MONITOR_RES_INFO:
       return setResInfo(previousState, action);
    case MONITOR_SERVER_BASIC_INFO:
      return setBasicInfo(previousState, action);
    case MONITOR_SERVER_CPU_USAGE:
      return setCpuUsage(previousState, action);
    case MONITOR_SERVER_MEM_USAGE:
      return setMemUsage(previousState, action);
    case MONITOR_SERVER_FILE_SYSTEM_USAGE:
      return setFileSysUsage(previousState, action);
    case MONITOR_SERVER_DISK_IO:
      return setDiskIo(previousState, action);
    case MONITOR_SERVER_NETWORK_IO:
      return setNetworkIo(previousState, action);
    case MONITOR_SERVER_PROCESS:
      return setProcess(previousState, action);
    case MONITOR_SERVER_BASIC_INFO_LOADER:
      return setBasicInfoLoader(previousState, action);
    case MONITOR_SERVER_CPU_USAGE_LOADER:
      return setCpuUsageLoader(previousState, action);
    case MONITOR_SERVER_MEM_USAGE_LOADER:
      return setMemUsageLoader(previousState, action);
    case MONITOR_SERVER_FILE_SYSTEM_USAGE_LOADER:
      return setFileSysUsageLoader(previousState, action);
    case MONITOR_SERVER_DISK_IO_LOADER:
      return setDiskIoLoader(previousState, action);
    case MONITOR_SERVER_NETWORK_IO_LOADER:
      return setNetworkIoLoader(previousState, action);
    case MONITOR_SERVER_PROCESS_LOADER:
      return setProcessLoader(previousState, action);
    case MONITOR_CLEAR_DATA:
      return resetData(previousState, action);
    default:
      return previousState;
  }
}

function resetData(state, action) {
  return assign({}, state, {monitor:{...state.monitor, data:{} }});
}

function setBasicInfo(state, action) {
	return assign({}, state, {monitor:{...state.monitor, data:{...state.monitor.data,basicInfo:action.payload}}});
}

function setCpuUsage(state, action) {
	return assign({}, state, {monitor:{...state.monitor, data:{...state.monitor.data,cpuUsage:action.payload}}});
}

function setMemUsage(state, action) {
	return assign({}, state, {monitor:{...state.monitor, data:{...state.monitor.data,memUsage:action.payload}}});
}

function setFileSysUsage(state, action) {
	return assign({}, state, {monitor:{...state.monitor, data:{...state.monitor.data,fileSysUsage:action.payload}}});
}

function setDiskIo(state, action) {
	return assign({}, state, {monitor:{...state.monitor, data:{...state.monitor.data,diskIO:action.payload}}});
}

function setNetworkIo(state, action) {
	return assign({}, state, {monitor:{...state.monitor, data:{...state.monitor.data,networkIO:action.payload}}});
}

function setProcess(state, action) {
	return assign({}, state, {monitor:{...state.monitor, data:{...state.monitor.data,process:action.payload}}});
}

function setResId(state, action) {
	return assign({}, state, {monitor:{...state.monitor, resId:action.payload}});
}

function setResInfo(state, action) {
  return assign({}, state, {monitor:{...state.monitor, resId:action.payload[0], resType:action.payload[1]}});
}

//loader
function setBasicInfoLoader(state, action) {
  return assign({}, state, {monitor:{...state.monitor, loaders:{...state.monitor.loaders,basicInfo:action.payload}}});
}

function setCpuUsageLoader(state, action) {
  return assign({}, state, {monitor:{...state.monitor, loaders:{...state.monitor.loaders,cpuUsage:action.payload}}});
}

function setMemUsageLoader(state, action) {
  return assign({}, state, {monitor:{...state.monitor, loaders:{...state.monitor.loaders,memUsage:action.payload}}});
}

function setFileSysUsageLoader(state, action) {
  return assign({}, state, {monitor:{...state.monitor, loaders:{...state.monitor.loaders,fileSysUsage:action.payload}}});
}

function setDiskIoLoader(state, action) {
  return assign({}, state, {monitor:{...state.monitor, loaders:{...state.monitor.loaders,diskIO:action.payload}}});
}

function setNetworkIoLoader(state, action) {
  return assign({}, state, {monitor:{...state.monitor, loaders:{...state.monitor.loaders,networkIO:action.payload}}});
}

function setProcessLoader(state, action) {
  return assign({}, state, {monitor:{...state.monitor, loaders:{...state.monitor.loaders,procInfo:action.payload}}});
}

