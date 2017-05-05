import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';
import {PanelWrapper, Panel, PanelTitle} from "./Panel";
import {TextBox} from "./TextBox";

export default class BasicTextPanel extends React.Component<any, any> {
	public static defaultProps: Partial<any> = {
        showLoader:false
    };

	render() {
		const {title, height, width, data, showLoader} = this.props
		return (
			<PanelWrapper width={width} height={height} showLoader={showLoader}>
				<Panel>
					<PanelTitle text={title} />
					{
						data.map((item, index)=>{
							return <TextBox key={index} label={item.label} value={item.value} icon={item.icon} />
						})
					}
				</Panel>
			</PanelWrapper>
		)
	}
}