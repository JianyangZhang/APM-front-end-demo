import 'isomorphic-fetch'
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
	MONITOR_CLEAR_DATA } from "./ActionTypes"
import { getBreadcrumbRes } from "./NavigatorActions";

import {monitor} from "./UrlMapping"


//载入Monitor数据
export function loadMonitorData(resId, resType) {
	return function(dispatch, getState) {
		dispatch(getBreadcrumbRes(resId, resType));
		dispatch(getClearDataAction());
		dispatch(getResInfoAction([resId, resType]))
		dispatch(loadBasicInfoAysnAction(resId));
		dispatch(loadCpuUsageAysnAction(resId));
		dispatch(loadMemUsageAysnAction(resId));
		dispatch(loadFileSysAysnAction(resId));
		dispatch(loadDiskIoAysnAction(resId));
		dispatch(loadNetworkIoAysnAction(resId));
		dispatch(loadProcessAysnAction(resId));
	}
}

//载入基本信息 
export function loadBasicInfoAysnAction(resId) {
	return function(dispatch, getState) {
		dispatch(getBasicInfoLoaderAction(true))
		const url = monitor.server.basicInfo + resId;

		return fetch(url).then(res=>{
		 	return  res.json();
		}).then(json=>{
			dispatch(getBasicInfoAction(json))
			dispatch(getBasicInfoLoaderAction(false))
		}).catch(error => { 
			dispatch(getBasicInfoAction(null))
			dispatch(getBasicInfoLoaderAction(false))
		});
	}
}

//载入CPU利用率 
export function loadCpuUsageAysnAction(resId) {
	return function(dispatch, getState) {
		dispatch(getCpuUsageLoaderAction(true))
		const url = monitor.server.cpuUsage + resId;

		return fetch(url).then(res=>{
		 	return  res.json();
		}).then(json=>{
			dispatch(getCpuUsageAction(json))
			dispatch(getCpuUsageLoaderAction(false))
		}).catch(error => { 
			dispatch(getCpuUsageAction(null))
			dispatch(getCpuUsageLoaderAction(false))
		});
	}
}

//载入Mem利用率 
export function loadMemUsageAysnAction(resId) {
	return function(dispatch, getState) {
		dispatch(getMemUsageLoaderAction(true))
		const url = monitor.server.memUsage + resId;

		return fetch(url).then(res=>{
		 	return  res.json();
		}).then(json=>{
			dispatch(getMemUsageAction(json))
			dispatch(getMemUsageLoaderAction(false))
		}).catch(error => { 
			dispatch(getMemUsageAction(null))
			dispatch(getMemUsageLoaderAction(false))
		});
	}
}

//载入分区利用率 
export function loadFileSysAysnAction(resId) {
	return function(dispatch, getState) {
		dispatch(getFileSysUsageLoaderAction(true))
		const url = monitor.server.fileSysUsage + resId;

		return fetch(url).then(res=>{
		 	return  res.json();
		}).then(json=>{
			dispatch(getFileSysUsageAction(json))
			dispatch(getFileSysUsageLoaderAction(false))
		}).catch(error => { 
			dispatch(getFileSysUsageAction(null))
			dispatch(getFileSysUsageLoaderAction(false))
		});
	}
}

//载入磁盘IO 
export function loadDiskIoAysnAction(resId) {
	return function(dispatch, getState) {
		dispatch(getDiskIoLoaderAction(true))
		const url = monitor.server.diskIO + resId;

		return fetch(url).then(res=>{
		 	return  res.json();
		}).then(json=>{
			dispatch(getDiskIoAction(json))
			dispatch(getDiskIoLoaderAction(false))
		}).catch(error => { 
			dispatch(getDiskIoAction(null))
			dispatch(getDiskIoLoaderAction(false))
		});
	}
}

//载入网络IO 
export function loadNetworkIoAysnAction(resId) {
	return function(dispatch, getState) {
		dispatch(getNetworkIoLoaderAction(true))
		const url = monitor.server.networkIO + resId;

		return fetch(url).then(res=>{
		 	return  res.json();
		}).then(json=>{
			dispatch(getNetworkIoAction(json))
			dispatch(getNetworkIoLoaderAction(false))
		}).catch(error => { 
			dispatch(getNetworkIoAction(null))
			dispatch(getNetworkIoLoaderAction(false))
		});
	}
}

//载入进程
export function loadProcessAysnAction(resId) {
	return function(dispatch, getState) {
		dispatch(getProcessLoaderAction(true))
		const url = monitor.server.procinfo + resId;

		return fetch(url).then(res=>{
		 	return  res.json();
		}).then(json=>{
			dispatch(getProcessAction(json))
			dispatch(getProcessLoaderAction(false))
		}).catch(error => { 
			dispatch(getProcessAction(null))
			dispatch(getProcessLoaderAction(false))
		});
	}
}


export function getResIdAction(data) {
	return {
		type: MONITOR_RES_ID,
		payload:data
	}
}

export function getResInfoAction(data) {
	return {
		type: MONITOR_RES_INFO,
		payload:data
	}
}

export function getBasicInfoAction(data) {
	return {
		type: MONITOR_SERVER_BASIC_INFO,
		payload:data
	}
}

export function getCpuUsageAction(data) {
	return {
		type: MONITOR_SERVER_CPU_USAGE,
		payload:data
	}
}

export function getMemUsageAction(data) {
	return {
		type: MONITOR_SERVER_MEM_USAGE,
		payload:data
	}
}

export function getFileSysUsageAction(data) {
	return {
		type: MONITOR_SERVER_FILE_SYSTEM_USAGE,
		payload:data
	}
}

export function getDiskIoAction(data) {
	return {
		type: MONITOR_SERVER_DISK_IO,
		payload:data
	}
}

export function getNetworkIoAction(data) {
	return {
		type: MONITOR_SERVER_NETWORK_IO,
		payload:data
	}
}

export function getProcessAction(data) {
	return {
		type: MONITOR_SERVER_PROCESS,
		payload:data
	}
}

export function getBasicInfoLoaderAction(data) {
	return {
		type: MONITOR_SERVER_BASIC_INFO_LOADER,
		payload:data
	}
}

export function getCpuUsageLoaderAction(data) {
	return {
		type: MONITOR_SERVER_CPU_USAGE_LOADER,
		payload:data
	}
}

export function getMemUsageLoaderAction(data) {
	return {
		type: MONITOR_SERVER_MEM_USAGE_LOADER,
		payload:data
	}
}

export function getFileSysUsageLoaderAction(data) {
	return {
		type: MONITOR_SERVER_FILE_SYSTEM_USAGE_LOADER,
		payload:data
	}
}

export function getDiskIoLoaderAction(data) {
	return {
		type: MONITOR_SERVER_DISK_IO_LOADER,
		payload:data
	}
}

export function getNetworkIoLoaderAction(data) {
	return {
		type: MONITOR_SERVER_NETWORK_IO_LOADER,
		payload:data
	}
}

export function getProcessLoaderAction(data) {
	return {
		type: MONITOR_SERVER_PROCESS_LOADER,
		payload:data
	}
}

export function getClearDataAction() {
	return {
		type: MONITOR_CLEAR_DATA
	}
}



