import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';
import  {MiddlewareContainer,
		MiddlewareLeftBox,
		MiddlewareRightBox,
		MiddlewareLeftBoxHeader,
		MiddlewareLeftBoxHeaderRight,
		MiddlewareLeftBoxTitle  } from "./ui/LayoutBox";

import {Card} from "../ui/Card"
import {Tab, TabMenu, TabMenuButton, TabPanel} from "./ui/Tab"
import {Panel, PanelHeader, PanelContent} from "./ui/Panel"
import EChart from  '../ui/EChart'

//Oracle临时测试数据
import {sessionOption, threadOption, requestOption, networkIoOption, cacheOption } 
		from "../../constants/TomcatTempData";

import {memoryOption, hitsOption2, connectionOption, logicioOption, physicalioOption ,tbsOption} 
		from "../../constants/OracleTempData";

export default class OracleDash extends React.Component<any, any> {
	public static defaultProps: Partial<any> = {
		matrixData:{
			sharedPool:0,
			javaPool:0,
			largePool:0,
			streamPool:0,
			defaultBuffer:0,
			recycleBuffer:0,
			keepBuffer:0,
			asmBuffer:0
		}
	}

	componentDidUpdate() {
        
    }

    getMatrixData = () => {
    	const {matrixData} = this.props;
    	let dataset = {};
    	dataset['sharedPool'] = {title:"shared pool", size:"middle", color:"light blue", text:matrixData["sharedPool"], subText:"Mb"}
    	dataset['javaPool'] = {title:"java pool", size:"middle", color:"purple", text:matrixData["javaPool"], subText:"Mb"}
    	dataset['largePool'] = {title:"large pool", size:"middle", color:"red", text:matrixData["largePool"], subText:"Mb"}
    	dataset['streamPool'] = {title:"streams pool", size:"middle", color:"teal", text:matrixData["streamPool"], subText:"Mb"}
    	dataset['defaultBuffer'] = {title:"DEFAULT buffer cache", size:"big", color:"violet", text:matrixData["defaultBuffer"], subText:"Mb"}
    	dataset['recycleBuffer'] = {title:"RECYCLE buffer cache", size:"big", color:"claret", text:matrixData["recycleBuffer"], subText:"Mb"}
    	dataset['keepBuffer'] = {title:"KEEP buffer cache", size:"big", color:"green", text:matrixData["keepBuffer"], subText:"Mb"}
    	dataset['asmBuffer'] = {title:"ASM buffer cache", size:"big", color:"dark blue", text:matrixData["asmBuffer"], subText:"Mb"}


    	return dataset
    }

	render() {
		const matrixData = this.getMatrixData();

		return (
			<MiddlewareContainer>
				<MiddlewareLeftBox>
					<MiddlewareLeftBoxHeader>
						<MiddlewareLeftBoxTitle text="Oracle 性能实时监控" logo="img/oracle-dark.svg"/>
						<MiddlewareLeftBoxHeaderRight>
							<button className="mini ui teal basic button">隐藏</button>
						</MiddlewareLeftBoxHeaderRight>
					</MiddlewareLeftBoxHeader>

					<div className="ui inverted divider"></div>

					<div style={{width: "100%",backgroundColor: "#f1f1f1", padding: "10px"}}>
						<div style={{display: "flex", flexFlow: "row nowrap",color:"#fff"}}>
							<div style={{width:"30%"}}>
								<Card {...matrixData["defaultBuffer"]} />
								<Card {...matrixData["keepBuffer"]} />
							</div>
							<div style={{width:"20%", marginLeft: "8px"}}>
								<Card {...matrixData["sharedPool"]} />
								<Card {...matrixData["largePool"]} />
							</div>
							<div style={{width:"20%", marginLeft: "8px"}}>
								<Card {...matrixData["javaPool"]} />
								<Card {...matrixData["streamPool"]} />
							</div>
							<div style={{width:"30%", marginLeft: "8px"}}>
								<Card {...matrixData["recycleBuffer"]} />
								<Card {...matrixData["asmBuffer"]} />
							</div>
						</div>
					</div>


					<Tab>
						<TabMenu>
							<TabMenuButton text="内 存" active={true} tabIndex="memory"/>
							<TabMenuButton text="逻辑IO" tabIndex="logicio"/>
							<TabMenuButton text="物理IO" tabIndex="physicalio"/>
							<TabMenuButton text="表空间" tabIndex="tablespace"/>
						</TabMenu>

						<TabPanel tabIndex="memory" active={true}>
							<EChart width="100%" height="100%" option={memoryOption}/>
						</TabPanel>

						<TabPanel tabIndex="logicio" >
							<EChart width="100%" height="100%" option={logicioOption}/>
						</TabPanel>

						<TabPanel tabIndex="physicalio">
							<EChart width="100%" height="100%" option={physicalioOption}/>
						</TabPanel>

						<TabPanel tabIndex="tablespace">
							<EChart width="100%" height="100%" option={tbsOption}/>
						</TabPanel>
					</Tab>

				</MiddlewareLeftBox>

				<MiddlewareRightBox>
					<div className="title-line">其他重点性能指标</div>

					<Panel>
						<PanelHeader title="缓存命中率" icon="wait" />
						<PanelContent>
							<EChart width="100%" height="140px" option={hitsOption2} />
						</PanelContent>
					</Panel>

					<Panel>
						<PanelHeader title="连接数" icon="wait" />
						<PanelContent>
							<EChart width="100%" height="140px" option={connectionOption} />
						</PanelContent>
					</Panel>
					
				</MiddlewareRightBox>
			</MiddlewareContainer>
		)
	}
}