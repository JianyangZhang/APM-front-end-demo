import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';
import {PanelGroup, PanelWrapper, Panel, PanelTitle} from "../ui/Panel"
import BasicTextPanel from "../ui/BasicTextPanel";
import MultiChartsPanel from "../ui/MultiChartsPanel";
import BasicChartPanel from "../ui/BasicChartPanel";
import ProcessPanel from "../ui/ProcessPanel";
import {TowChartsComplexPanel, OneChartComplexPanel} from "../ui/ComplexPanel";
import {createGaugeOption, 
		createBarOption ,
		createNetworkIOLineOption,
		createDiskUsageBarOption, 
		createDiskIOLineOption} from "../../services/chartsTemplates/Monitor";


export default class ServerDash extends React.Component<any, any> {
	public static defaultProps: Partial<any> = {
		basicInfo:{"alias":"unknown","hostname":"unknown", "ipadder":"unknown", "os":"unknown", "cpu":"unknown", "mem":"unknown","disk":"unknown", "uptime":"unknown"},
		cpuUsage: {"%user":0,"%sys":0,"%iowait":0,"%usage":0,"%steal":0, "dataset":{"time":[], "data":[]}},
		memUsage: {"gbbuffers":0,"gbcached":0,"%swpused":0,"%usage":0,"gbswpcad":0,"dataset":{"time":[], "data":[]}},
		fileSysUsage:[],
		diskIO:{"tps":0,"rtps":0,"wtps":0,"bread/s":0,"bwrtn/s":0,"dataset":{"time":[], "data":[]}},
		networkIO:{"time":['00:00'], "":[0]},
        procInfo:[],
        loaders:{basicInfo:false, cpuUsage:false, memUsage:false, fileSysUsage:false,diskIO:false, networkIO:false,procInfo:false}
    };


	render() {
		const {procInfo, basicInfo, cpuUsage, memUsage, fileSysUsage , diskIO, networkIO, loaders} = this.props;
		//预处理basicInfo
		const basicInfoData = Object.keys(basicInfo).map((key)=>{
			return {label:key, value:basicInfo[key], icon:"desktop"}
		})

		//预处理CPU
		const cpuGaugeOpt = createGaugeOption("CPU利用率", cpuUsage["%usage"]);
		const cpuBarOpt = createBarOption(cpuUsage["dataset"]["data"], cpuUsage["dataset"]["time"]);

		let cpuUsageForTag = JSON.parse(JSON.stringify(cpuUsage));
		delete cpuUsageForTag["%usage"];
		delete cpuUsageForTag["dataset"];
		const cpuTags = Object.keys(cpuUsageForTag).map((key)=>{
			return {label:key, value:cpuUsageForTag[key]}
		})		

		//预处理Mem
		const memGaugeOpt = createGaugeOption("内存利用率", memUsage["%usage"], "#703da4");
		const memBarOpt = createBarOption(memUsage["dataset"]["data"], memUsage["dataset"]["time"], "#9355b7");

		let memUsageForTag = JSON.parse(JSON.stringify(memUsage));
		delete memUsageForTag["%usage"]
		delete memUsageForTag["dataset"]
		const memTags = Object.keys(memUsageForTag).map((key)=>{
			return {label:key, value:memUsageForTag[key]}
		})

		//预处理分区利用率
		let barWidth;
		if (fileSysUsage.length > 0)
			barWidth = 100/fileSysUsage.length + '%';
		const fileSysCharts = fileSysUsage.map((item, index)=>{
			const opt = createDiskUsageBarOption(item.filesystem, item.usage, index);
			return {height:"230px", width:barWidth, option:opt}
		})
		
		//预处理磁盘IO
		let diskIOForTag = JSON.parse(JSON.stringify(diskIO));
		delete diskIOForTag["tps"]
		delete diskIOForTag["dataset"]
		const diskIOTags = Object.keys(diskIOForTag).map((key)=>{
			return {label:key, value:diskIOForTag[key], icon:"square"}
		})
		const diskIOLineOpt = createDiskIOLineOption(diskIO["dataset"]["data"],diskIO["dataset"]["time"])

		//网络IO
		let networkIOLineOpt = createNetworkIOLineOption(networkIO)
		const portNum = (Object.keys(networkIO).length - 1) /2;
		const networkIOPanelHeight =  240 + Math.ceil(portNum/4)*(30 + (Math.ceil(portNum/4)-1)*10) ;
		const networkIOPanelChartHeight = networkIOPanelHeight - 30;
		networkIOLineOpt.grid.bottom = 13 + Math.ceil(portNum/4)*2 + '%';
		// console.log("networkIOPanelHeight:" + networkIOPanelHeight)
		// console.log("networkIOPanelChartHeight:" + networkIOPanelChartHeight)


		return (
			<div>
				<PanelGroup>
					<BasicTextPanel title="基本信息" width="280px" height="270px" 
						data={basicInfoData} showLoader={loaders.basicInfo}/>

					<TowChartsComplexPanel title="CPU 运行情况" height="270px" width="300px"  tags={cpuTags}
						contentHeight="80px" topChartWidth="55%" topChartHeight="100px" topChartOption={cpuGaugeOpt}
						bottomChartWidth="100%" bottomChartHeight="120px" bottomChartOption={cpuBarOpt } 
						textTagBoxWidth="45%" showLoader={loaders.cpuUsage}/>

					<TowChartsComplexPanel title="内存使用情况" height="270px" width="300px"  tags={memTags}
						contentHeight="80px" topChartWidth="50%" topChartHeight="100px" topChartOption={memGaugeOpt}
						bottomChartWidth="100%" bottomChartHeight="120px" bottomChartOption={memBarOpt } 
						textTagBoxWidth="50%" showLoader={loaders.memUsage}/>
				
					<MultiChartsPanel title="磁盘分区利用率" height="270px" width="400px" 
						charts={fileSysCharts} showLoader={loaders.fileSysUsage}/>

					<OneChartComplexPanel title="磁盘 IO" width="350px" height="270px" mainTagValue={diskIO["tps"]}
						mainTagUnit="tps" mainTagDesc="实时数据" contentHeight="80px" tags={diskIOTags}
						chartOption={diskIOLineOpt} chartHeight="120px" chartWidth="100%" showLoader={loaders.diskIO}/>

					<BasicChartPanel title="网络IO-接收发送字节数" width="950px" height={networkIOPanelHeight+"px"}
						chartWidth="100%" chartHeight={networkIOPanelChartHeight} chartOption={networkIOLineOpt} showLoader={loaders.networkIO}/>
					
				</PanelGroup>

				{(procInfo.length>0) ? <h4 className="ui horizontal divider header"> 进程监控 </h4> : null }

				<PanelGroup wide="five">
				{
					procInfo.map((item, index)=>{
						return <ProcessPanel key={index} title={item.name} color="blue" mem={item.mem} cpu={item.cpu} 
							rss={item.rss} vsz={item.vsz} iord={item.iord} iowr={item.iowr} showLoader={loaders.procInfo}/>
					})	
				}
				</PanelGroup>
			</div>
		)
	}
}
