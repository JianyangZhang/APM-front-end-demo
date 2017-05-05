import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';
import {PanelWrapper, Panel, PanelTitle, ContentBox} from "./Panel";
import EChart from  './EChart'

export default class MultiChartsPanel extends React.Component<any, any> {
	public static defaultProps: Partial<any> = {
        showLoader:false
    };

	render() {
		const {title, height, width, charts, contentHeight, showLoader} = this.props
		return (
			<PanelWrapper width={width} height={height} showLoader={showLoader}>
				<Panel>
					<PanelTitle text={title} />
					<ContentBox height={contentHeight}>
					{
						charts.map((item, index)=>{
							return <EChart key={index} height={item.height} width={item.width} option={item.option}/>
						})
					}
					</ContentBox>
				</Panel>
			</PanelWrapper>
		)
	}
}