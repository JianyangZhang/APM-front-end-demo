import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';
import {PanelWrapper, Panel, PanelTitle} from "./Panel";

export class PorcessContent extends React.Component<any, any> {
	render() {
		return (
			<div className="process-content">
				{this.props.children}
			</div>
		)
	}
}

export class TextCellBar extends React.Component<any, any> {
	public static defaultProps: Partial<any> = {
		value:0,
		color:"red"
    };

	componentDidMount() {	
    	let node = ReactDOM.findDOMNode(this);
    	$(node).progress();
    }

	render() {
		const {value , color} = this.props;
		return (
			<div className={classNames("ui", "small", [`${color}`] ,"progress")} 
					data-percent={value} style={{width:"90%", marginBottom:"5px"}}>
              <div className="bar"></div>
            </div>
		)
	}
}

export class TextCell extends React.Component<any, any> {
	public static defaultProps: Partial<any> = {
		showBar:false,
		barColor:"red"
    };
	render() {
		const {label, value, showBar, barColor} = this.props;
		return (
			<div className="text-cell">
				<div>{label}</div>
				<div className="text-cell-value">{value}</div>
				{showBar ? <TextCellBar value={value} color={barColor}/> : null}
			</div>
		)
	}
}


export default class ProcessPanel extends React.Component<any, any> {
	public static defaultProps: Partial<any> = {
		color:"purple",
		showLoader:false
    };

	render() {
		const {title, color, cpu, mem, rss, vsz, iord, iowr, showLoader} = this.props;
		return (
			<PanelWrapper colored={true} color={color} showLoader={showLoader}>
				<Panel>
					<PanelTitle colored={true} text={title}/>
					<PorcessContent>
						<TextCell label="CPU利用率" value={cpu + ' %'} showBar={true} barColor={color}/>
						<TextCell label="内存利用率" value={mem + ' %'} showBar={true} barColor={color}/>
						<TextCell label="物理内存" value={rss + ' Mb'}/>
						<TextCell label="虚拟内存" value={vsz + ' Mb'}/>
						<TextCell label="磁盘读" value={iord + ' Mb/s'}/>
						<TextCell label="磁盘写" value={iowr + ' Mb/s'}/>
					</PorcessContent>
				</Panel>
			</PanelWrapper>
		)
	}
}