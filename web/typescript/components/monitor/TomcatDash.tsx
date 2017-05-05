import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';
import  {MiddlewareContainer,
		MiddlewareLeftBox,
		MiddlewareRightBox,
		MiddlewareLeftBoxHeader,
		MiddlewareLeftBoxHeaderRight,
		MiddlewareLeftBoxTitle  } from "./ui/LayoutBox";

import {HexagonContainer, HexagonRow, Hexagon} from "../ui/Hexagon"
import {Tab, TabMenu, TabMenuButton, TabPanel} from "./ui/Tab"
import {Panel, PanelHeader, PanelContent} from "./ui/Panel"
import EChart from  '../ui/EChart'

//tomcat临时测试数据
import {memoryOption, sessionOption, threadOption, requestOption, networkIoOption, cacheOption } 
		from "../../constants/TomcatTempData";

export default class TomcatDash extends React.Component<any, any> {
	public static defaultProps: Partial<any> = {
		matrixData:{
			heap:0.00,
			activeSessions:0.00,
			sessions:0.00,
			threads:0.00,
			busyThreads:0.00,
			requests: 0.00,
			errorRequests : 0.00,
			servletRequests: 0.00,
			requestTime: 0.00
		}
	}

	componentDidUpdate() {
        
    }

    getMatrixData = () => {
    	const {matrixData} = this.props;
    	let dataset = {};
    	
    	const heap = matrixData["heap"].toFixed(2).toString().split(".")
    	dataset["heap"] = {title:"堆内存", desc:"使用率", text:heap[0], subText:heap[1], color:"blue"}


    	//session
    	const activeSessions = matrixData["activeSessions"].toFixed(2).toString().split(".")
    	dataset["activeSessions"] = {title:"会话数", desc:"active", text:activeSessions[0], subText:activeSessions[1], color:"light blue"}

    	let sessionsNum = '0.0';
    	let subText = '';
		if (matrixData["sessions"] > 1000) {
			sessionsNum = (matrixData["sessions"]/1000).toFixed(1);
			subText = 'k'
		} else {
			sessionsNum = matrixData["sessions"]
		}

    	dataset["sessions"] = {title:"会话数", desc:"count", text:sessionsNum, subText:subText, color:"light blue"}

    	//threads
    	dataset["threads"] = {title:"线程数", desc:"count", text:matrixData["threads"], subText:'00', color:"green"}
    	dataset["busyThreads"] = {title:"线程数", desc:"busy", text:matrixData["busyThreads"], subText:'00', color:"green"}

    	//request
    	const requests = matrixData["requests"].toFixed(2).toString().split(".")
    	dataset["requests"] = {title:"每秒请求", desc:"count", text:requests[0], subText:requests[1], color:"light green"}
    	const errorRequests = matrixData["errorRequests"].toFixed(2).toString().split(".")
    	dataset["errorRequests"] = {title:"每秒请求", desc:"error", text:errorRequests[0], subText:errorRequests[1], color:"light green"}
    	const servletRequests = matrixData["servletRequests"].toFixed(2).toString().split(".")
    	dataset["servletRequests"] = {title:"每秒请求", desc:"servlet", text:servletRequests[0], subText:servletRequests[1], color:"light green"}
    	
    	const requestTime = matrixData["requestTime"].toFixed(2).toString().split(".")
    	dataset["requestTime"] = {title:"请求时间", desc:"count/s", text:requestTime[0], subText:'s', color:"blue"}

    	return dataset
    }

	render() {
		const matrixData = this.getMatrixData();

		return (
			<MiddlewareContainer>
				<MiddlewareLeftBox>
					<MiddlewareLeftBoxHeader>
						<MiddlewareLeftBoxTitle text="Tomcat 性能实时监控" logo="img/tomcat-dark.svg"/>
						<MiddlewareLeftBoxHeaderRight>
							<button className="mini ui teal basic button">隐藏</button>
						</MiddlewareLeftBoxHeaderRight>
					</MiddlewareLeftBoxHeader>

					<div className="ui inverted divider"></div>

					<HexagonContainer styleList={{backgroundColor:'#f2f2f2', height: '245px', transition:'2s all'}}>
						<HexagonRow>
							<Hexagon {...matrixData["heap"]}/>
							<Hexagon {...matrixData["activeSessions"]}/>
							<Hexagon {...matrixData["sessions"]}/>
							<Hexagon {...matrixData["threads"]}/>
						</HexagonRow>

						<HexagonRow>
							<Hexagon {...matrixData["busyThreads"]}/>
							<Hexagon {...matrixData["requests"]}/>
							<Hexagon {...matrixData["errorRequests"]}/>
							<Hexagon {...matrixData["servletRequests"]}/>
							<Hexagon {...matrixData["requestTime"]}/>
						</HexagonRow>
					</HexagonContainer>


					<Tab>
						<TabMenu>
							<TabMenuButton text="内 存" active={true} tabIndex="memory"/>
							<TabMenuButton text="会 话" tabIndex="session"/>
							<TabMenuButton text="线 程" tabIndex="thread"/>
							<TabMenuButton text="请 求" tabIndex="request"/>
						</TabMenu>

						<TabPanel tabIndex="memory" active={true}>
							<EChart width="100%" height="100%" option={memoryOption}/>
						</TabPanel>

						<TabPanel tabIndex="session">
							<EChart width="100%" height="100%" option={sessionOption}/>
						</TabPanel>

						<TabPanel tabIndex="thread">
							<EChart width="100%" height="100%" option={threadOption}/>
						</TabPanel>

						<TabPanel tabIndex="request">
							<EChart width="100%" height="100%" option={requestOption}/>
						</TabPanel>
					</Tab>

				</MiddlewareLeftBox>

				<MiddlewareRightBox>
					<div className="title-line">其他重点性能指标</div>

					<Panel>
						<PanelHeader title="每秒收发字节数" icon="wait" />
						<PanelContent>
							<EChart width="100%" height="140px" option={networkIoOption} />
						</PanelContent>
					</Panel>

					<Panel>
						<PanelHeader title="每秒缓存访问" icon="wait" />
						<PanelContent>
							<EChart width="100%" height="140px" option={cacheOption} />
						</PanelContent>
					</Panel>
					
				</MiddlewareRightBox>
			</MiddlewareContainer>
		)
	}
}