export const monitor = {
	server: {
		basicInfo:"/monitor/basicinfo/",
		cpuUsage:"/monitor/cpu/",
		memUsage:"/monitor/mem/",
		fileSysUsage:"/monitor/filesys/",
		diskIO:"/monitor/diskio/",
		networkIO:"/monitor/networkio/",
		procinfo:"/monitor/process/"
	}
}

export const alert = {
	list:"/alert/list"
}

export const resource = {
	default:{
		server:'/res/default/server',
		toplogy:'/res/default/topo'
	},
	device:{
		list:"/res/dev/list"
	},
	service:{
		list:"/res/serv/list"
	},
	group:{
		list:"/res/group/list"
	},
	topology:{
		list:"/res/topo/list",
		get:"/topo/get/",
		save:"/topo/save/"
	}
}