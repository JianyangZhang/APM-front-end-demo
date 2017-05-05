import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';
import * as charts from '../../constants/ServerHistTempData';
import {HisDashContainer, HisDashRow, HisDashPanel} from './ui/Panel';
import EChart from  '../ui/EChart'

export default class ServerHis extends React.Component<any, any> {
	render() {
		const panelStyle = {
			height:"150px",
			width:"295px"
		}

		return (
			<HisDashContainer>
				<div className="ui inverted divider"></div>
				<HisDashRow title="处理器" icon="img/cpu.svg">
					<HisDashPanel>
						<EChart width="100%" height="100%" option={charts.cpu1Opt}/>
					</HisDashPanel>
					<HisDashPanel>
						<EChart width="100%" height="100%" option={charts.cpu2Opt}/>
					</HisDashPanel>
					<HisDashPanel>
						<EChart width="100%" height="100%" option={charts.cpu3Opt}/>
					</HisDashPanel>
					<HisDashPanel>
						<EChart width="100%" height="100%" option={charts.cpu4Opt}/>
					</HisDashPanel>
					<HisDashPanel>
						<EChart width="100%" height="100%" option={charts.cpu5Opt}/>
					</HisDashPanel>
					<HisDashPanel>
						<EChart width="100%" height="100%" option={charts.cpu6Opt}/>
					</HisDashPanel>
					<HisDashPanel>
						<EChart width="100%" height="100%" option={charts.cpu7Opt}/>
					</HisDashPanel>
				</HisDashRow>

				<div className="ui inverted divider"></div>

				<HisDashRow title="内存" icon="img/memory.svg">
					<HisDashPanel>
						<EChart width="100%" height="100%" option={charts.mem1Opt}/>
					</HisDashPanel>
					<HisDashPanel>
						<EChart width="100%" height="100%" option={charts.mem2Opt}/>
					</HisDashPanel>
					<HisDashPanel>
						<EChart width="100%" height="100%" option={charts.mem3Opt}/>
					</HisDashPanel>
					<HisDashPanel>
						<EChart width="100%" height="100%" option={charts.mem4Opt}/>
					</HisDashPanel>
					<HisDashPanel>
						<EChart width="100%" height="100%" option={charts.mem5Opt}/>
					</HisDashPanel>
					<HisDashPanel>
						<EChart width="100%" height="100%" option={charts.mem6Opt}/>
					</HisDashPanel>
					<HisDashPanel>
						<EChart width="100%" height="100%" option={charts.mem7Opt}/>
					</HisDashPanel>
					<HisDashPanel>
						<EChart width="100%" height="100%" option={charts.mem8Opt}/>
					</HisDashPanel>
				</HisDashRow>

				<div className="ui inverted divider"></div>

				<HisDashRow title="磁盘" icon="img/disk.svg">
					<HisDashPanel>
						<EChart width="100%" height="100%" option={charts.disk1Opt}/>
					</HisDashPanel>
					<HisDashPanel>
						<EChart width="100%" height="100%" option={charts.disk2Opt}/>
					</HisDashPanel>
					<HisDashPanel>
						<EChart width="100%" height="100%" option={charts.disk3Opt}/>
					</HisDashPanel>
					<HisDashPanel>
						<EChart width="100%" height="100%" option={charts.disk4Opt}/>
					</HisDashPanel>
					<HisDashPanel>
						<EChart width="100%" height="100%" option={charts.disk5Opt}/>
					</HisDashPanel>
				</HisDashRow>

				<div className="ui inverted divider"></div>

				<HisDashRow title="网络" icon="img/networkif_circle.svg">
					<HisDashPanel styleList={panelStyle}> 
						<EChart width="100%" height="100%" option={charts.eth0ByteOpt}/>
					</HisDashPanel>
					<HisDashPanel styleList={panelStyle}>
						<EChart width="100%" height="100%" option={charts.eth0PktOpt}/>
					</HisDashPanel>
					<HisDashPanel styleList={panelStyle}>
						<EChart width="100%" height="100%" option={charts.eth0ErrorOpt}/>
					</HisDashPanel>
					<HisDashPanel styleList={panelStyle}>
						<EChart width="100%" height="100%" option={charts.eth0DropOpt}/>
					</HisDashPanel>
					<HisDashPanel styleList={panelStyle}>
						<EChart width="100%" height="100%" option={charts.eth1ByteOpt}/>
					</HisDashPanel>
					<HisDashPanel styleList={panelStyle}>
						<EChart width="100%" height="100%" option={charts.eth1PktOpt}/>
					</HisDashPanel>
					<HisDashPanel styleList={panelStyle}>
						<EChart width="100%" height="100%" option={charts.eth1ErrorOpt}/>
					</HisDashPanel>
					<HisDashPanel styleList={panelStyle}>
						<EChart width="100%" height="100%" option={charts.eth1DropOpt}/>
					</HisDashPanel>
				</HisDashRow>
			</HisDashContainer>
		)
	}
}