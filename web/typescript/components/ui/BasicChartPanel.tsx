import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';
import {PanelWrapper, Panel, PanelTitle} from "./Panel";
import EChart from  './EChart'

export default class BasicChartPanel extends React.Component<any, any> {
	public static defaultProps: Partial<any> = {
        showLoader:false
    };

    componentDidUpdate(){
        // console.log("basic chart panel update")
    }

	render() {
		const {title, height, width, chartOption, chartHeight, chartWidth, showLoader} = this.props
		return (
			<PanelWrapper width={width} height={height} showLoader={showLoader}>
				<Panel>
					<PanelTitle text={title} />
					<EChart width={chartWidth} height={chartHeight} option={chartOption}/>
				</Panel>
			</PanelWrapper>
		)
	}
}