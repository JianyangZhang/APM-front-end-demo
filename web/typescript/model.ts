export interface IMonitor {
	resId:string;
	resType:string;
	data:any;
	loaders:any;
}

export interface IResource {
	devices:{[key:string]:any};
	services:{[key:string]:any};
	groups:{[key:string]:any};
	topologys:{[key:string]:any};
}

export interface ITopology {
	id:string;
	groupId:string;
	type:string;
	nodes:{[key:string]:any};
	edges:{[key:string]:any};
	loaders:any;
}

export interface IAlart {
	data:any;
	statistics:any;
}


export interface IState {
	monitor:IMonitor;
	resource:IResource;
	breadcrumb:{[key:string]:any};
	topology:ITopology;
	alert:IAlart;
}