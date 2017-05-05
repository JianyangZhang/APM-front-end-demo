import 'isomorphic-fetch'
// import {Promise} from 'es6-promise';

import {
	NAV_BREADCRUMB_MODULE,
	NAV_BREADCRUMB_RES } from "./ActionTypes"
import {resource} from "./UrlMapping"

export function getBreadcrumbRes(resId, resType) {
  return function(dispatch, getState) {
  	 if (resId == '-1') {
  	 	setResByAsyn(resType, dispatch)
  	 } else {
  	 	setResByState(resId, resType, dispatch, getState)
  	 }
  }
}

function setResByAsyn(resType, dispatch) {
  let url;
  if (resType == "topology") 
    url = resource.default.toplogy;
  else 
    url = resource.default.server;

  return fetch(url).then(res=>{
     return  res.json();
  }).then(json=>{
    dispatch(getBreadcrumbResAction([{text:json["groupName"]}, {text:json["resName"]}])) 
  }).catch(error => { 
    dispatch(getBreadcrumbResAction([{text:"未知分组"}, {text:"未知资源"}]));
  });
}

function setResByState(resId, resType, dispatch, getState) {
	const res = getState().resourceReducer.resource;
	let resList = []
  let ids = []
  let dataset = {}

  switch(resType) {
    case "topology":
        ids = Object.keys(res.topologys);
        dataset = res.topologys
        break;
    case "server":
        ids =  Object.keys(res.devices);
        dataset = res.devices
        break;
    case "switch":
        ids =  Object.keys(res.devices);
        dataset = res.devices
        break;
    case "firewall":
        ids =  Object.keys(res.devices);
        dataset = res.devices
        break;
    case "router":
        ids =  Object.keys(res.devices);
        dataset = res.devices
        break;
    default:
        ids =  Object.keys(res.services);
        dataset = res.services
  }

  if (ids.length > 0) {
    const item = dataset[resId]
    resList[1] = {text:item.name}
    resList[0] = {text:res.groups[item.groupId].name}
  } else {
    resList[0] = {text:"未知资源"}
  }
  
  dispatch(getBreadcrumbResAction(resList));
}

// function setResByState(resId, resType, dispatch, getState) {
//     const promise = new Promise((resolve, reject)=>{
//     	const res = getState().resourceReducer.resource;
//     	let resList = []
// 	    if (resType == "topology") {
// 	      const topoIds =  Object.keys(res.topologys);
// 	      if (topoIds.length > 0) {
// 	        const item = res.topologys[resId]
// 	        resList[1] = {text:item.name}
// 	        resList[0] = {text:res.groups[item.groupId].name}
// 	      } else {
// 	        resList[1] = {text:""}
// 	      }
// 	    } else {
// 	      const deviceIds =  Object.keys(res.devices);
// 	      if (deviceIds.length > 0) {
// 	        const item = res.devices[resId]
// 	        resList[1] = {text:item.name}
// 	        resList[0] = {text:res.groups[item.groupId].name}
// 	      } else {
// 	        resList[0] = {text:"未知资源"}
// 	      }
// 	    }
// 	    console.log(resList)
//     	resolve(resList)
//     })
//     return promise.then(result=> dispatch(getBreadcrumbResAction(result)));
// }

export function getBreadcrumbModuleAction(data) {
	return {
		type: NAV_BREADCRUMB_MODULE,
		payload:data
	}
}

export function getBreadcrumbResAction(data) {
	return {
		type: NAV_BREADCRUMB_RES,
		payload:data
	}
}