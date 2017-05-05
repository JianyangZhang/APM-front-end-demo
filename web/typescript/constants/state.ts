import { IState } from '../model'

export  default function  initialState() {
	let state:IState = {
		monitor:{resId:null, resType:null, data:{}, loaders:{}},
		resource:{devices:[], services:[], groups:[], topologys:[]},
		breadcrumb:{module:[], res:[]},
		topology:{id:null, groupId:null, type:"network", nodes:[], edges:[], loaders:{saving:false, loadding:false}},
		alert:{data:{}, statistics:{
           hardware:{
			link: {
                online: 0,
                offline: 0,
                recover: 0
            },
            load: {
                high: 0,
                normal: 0,
                recover: 0
            }
		},software: {
			link: {
                online: 0,
                offline: 0,
                recover: 0
            },
            load: {
                high: 0,
                normal: 0,
                recover: 0
            }
		}}}
	}
	return state;
}