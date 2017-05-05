import * as React from "react";
import * as ReactDOM from "react-dom";
// import * as classNames from 'classnames';

export default class EChart extends React.Component<any, any> {
    private echart;

	// constructor(props) {
	//     super(props);
 //    }

    componentDidUpdate(){
        const {option} = this.props;
        this.echart.setOption(option)
        this.echart.resize();
    }

    componentDidMount() {	
    	let node = ReactDOM.findDOMNode(this);
    	this.createChart(node);
    }


    createChart = (node) => {
    	const {option, theme} = this.props;
    	// this.echart = echarts.init($(node)[0], theme);
        this.echart = echarts.init($(node)[0]);
   		this.echart.setOption(option)
    }

	render() {
		const {height, width} = this.props;
		return (
			<div style={{width:width, height:height}}></div>
		)
	}
}