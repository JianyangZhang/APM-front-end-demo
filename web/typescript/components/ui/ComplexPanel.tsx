import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';
import {PanelWrapper, Panel, PanelTitle, ContentBox} from "./Panel";
import {TextTagBox, TextTag} from "./TextTagBox"
import {TextBoxContainer, TextBox, BigTextBox} from "./TextBox"
import EChart from  './EChart'

export class OneChartComplexPanel extends React.Component<any, any> {
	public static defaultProps: Partial<any> = {
        showLoader:false
    };

	render() {
		const {title, height, width, tags, mainTagValue, mainTagUnit, mainTagDesc,
				contentHeight, chartHeight, chartWidth, chartOption, showLoader} = this.props
		return (
			<PanelWrapper width={width} height={height} showLoader={showLoader}>
				<Panel>		
					<PanelTitle text={title} />
					<ContentBox height={contentHeight}>
						<TextBoxContainer styleList={{width:"50%"}}>
						{tags.map((item, index)=>{
							return <TextBox key={index} label={item.label} value={item.value} icon={item.icon} iconColor={item.iconColor}/>
						})}
						</TextBoxContainer>
						<BigTextBox value={mainTagValue} unit={mainTagUnit} desc={mainTagDesc} styleList={{height:contentHeight, width:"50%"}}/>
					</ContentBox>
					<EChart height={chartHeight} width={chartWidth} option={chartOption}/>
				</Panel>
			</PanelWrapper>			
		)
	}
}

export class TowChartsComplexPanel extends React.Component<any, any> {
	public static defaultProps: Partial<any> = {
        showLoader:false
    };

	render() {
		const {title, height, width, tags, contentHeight,textTagBoxWidth, 
				topChartHeight, topChartWidth, topChartOption,showLoader,
				bottomChartHeight, bottomChartWidth, bottomChartOption} = this.props
		return (
			<PanelWrapper width={width} height={height} showLoader={showLoader}>
				<Panel>
					<PanelTitle text={title} />
					<ContentBox height={contentHeight}>
						<TextTagBox styleList={{width:textTagBoxWidth}}>
						{
							tags.map((item, index)=>{
								return <TextTag key={index} value={item.value} label={item.label} />
							})
						}
						</TextTagBox>
						<EChart height={topChartHeight} width={topChartWidth} option={topChartOption}/>
					</ContentBox>
					<EChart height={bottomChartHeight} width={bottomChartWidth} option={bottomChartOption}/>
				</Panel>
			</PanelWrapper>
		)
	}
}