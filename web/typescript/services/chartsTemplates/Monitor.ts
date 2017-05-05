export function createBarOption(dataset, xAxisData, color="#4b90e3") {
	return {
	    textStyle: {
	        fontSize: 10
	    },
	    grid: {
	        left: '-7%',
	        right: '1%',
	        top:'10%',
	        bottom: '1%',
	        containLabel: true
	    },

	    xAxis: {
	        type : 'category',
	        boundaryGap : false,
	        data: xAxisData,
	        axisLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        },
	        splitLine: {
	            show: false
	        },
	        axisLabel: {
	            show: true,
	            interval:11,
	            textStyle:{
	                fontSize:10
	            }
	        }
	    },
	    yAxis: {
	        type: "value",
	        axisLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        },
	        splitLine: {
	            show: false
	        },
	        axisLabel: {
	            show:false
	        }
	    },
	    series: [{
	        type:'bar',
	        data: dataset,
	        itemStyle:{
	            normal:{
	                color:color
	            }
	        }
	    }]
	}
};

export function createGaugeOption(title, usage, color="#4b90e3") {
	const floatUsage = ( usage / 100 ).toFixed(2);

 	return {
	 	tooltip: {
	        formatter: "{a} <br/>{b} : {c}%"
	    },

	    graphic: {
	            type: 'text',
	            left: '50%', // 相对父元素居中
	            top: '30%',  // 相对父元素居中
	            cursor:'default',
	            style: {
	                fill: '#666666',
	                text: usage + "%",
	                font: 'bolder 16px Microsoft YaHei'
	            },
	            z:20
	    },
	    series: [{
	        name: '',
	        type: 'gauge',
	        center: ['60%', '50%'], // 默认全局居中
	        radius: '100%',
	        axisLine: {
	            show: false,
	            lineStyle: { // 属性lineStyle控制线条样式
	                color: [
	                    [floatUsage, color],
	                    [1, 'rgba(39, 40, 34, 0.3)']
	                ],
	                width: 10
	            }
	        },
	        splitLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        },
	        axisLabel: {
	            show: false
	        },
	        pointer: {
	            show: true,
	            length: '0',
	            width: '0'
	        },
	        detail: {
	            formatter: title,
	            offsetCenter: [0, '20%'],
	            textStyle: {
	                    color:'#666666',
	                    fontWeight:'bolder',
	                    fontSize:10
	            }
	        },
	        data: [{
	            value: usage,
	            name:''
	        }]
	    }]
	}
}

export function createDiskUsageBarOption(fileSystem, usage, colorIndex=0) {
	const colorList = ['#cbe882', '#4B90E3','#713da5','#8fc36e','#8080e3','#b2ca74','#afdee5']
	const color = colorList[colorIndex%colorList.length]
	return {
	    grid: {
	        left: '3%',
	        right: '4%',
	        top:'3%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: {
	        //type:'category',
	        data: [fileSystem],
	        splitLine: {
	            show: false
	        },
	        axisLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        },
	        axisLabel: {
	            show: true,
	            textStyle:{
	                fontSize:10
	            }
	        }
	    },
	    yAxis: {
	        type: 'value',
	        splitArea: {
	            show: true
	        },
	        axisLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        },
	        splitLine: {
	            show: false
	        },
	        axisLabel: {
	            show: true,
	            textStyle:{
	                fontSize:10
	            }
	        }
	    },
	    series: [{ 
	        name: 'value',
	        type: 'bar',
	        stack: 'total',
	        barCategoryGap: '0',
	        itemStyle: {
	            normal: {
	                barBorderColor: '#EAEAEA',
	                color: color
	            },
	            emphasis:{
	                barBorderColor: '#EAEAEA',
	                color: color
	            }
	        },
	        data: [usage]

	    },{ 
	        type: 'bar',
	        stack: 'total',
	        barCategoryGap: '0',
	        itemStyle: {
	            normal: {
	                barBorderColor: '#EAEAEA',
	                color: '#f8f8f8'
	            },
	            emphasis:{
	                barBorderColor: '#EAEAEA',
	                color: '#f8f8f8'
	            }
	        },
	        data: [100-usage]
	    }]
	}
}

export function createDiskIOLineOption(dataset, xAxisData) {
	return {
	    textStyle: {
	        fontSize: 10
	    },
	    grid: {
	        left: '-10%',
	        right: '1%',
	        top:'1%',
	        bottom: '1%',
	        containLabel: true
	    },

	    xAxis: {
	        type : 'category',
	        boundaryGap : false,
	        data: xAxisData,
	        axisLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        },
	        splitLine: {
	            show: false
	        },
	        axisLabel: {
	            show: true,
	            interval:11,
	            textStyle:{
	                fontSize:10
	            }
	        }
	    },
	    yAxis: {
	        type: "value",
	        axisLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        },
	        splitLine: {
	            show: false
	        },
	        axisLabel: {
	            show:false
	        }
	    },
	    series: [{
	        type: 'line',
	        showSymbol: false,
	        hoverAnimation: false,
	        data: dataset,
	        smooth:true,
	        itemStyle: {
	            normal: {
	                color: '#9355b7'
	            }
	        },
	        lineStyle: {
	            normal: {
	                width: 2,
	            }
	        },
	        markLine: {
	            silent: true,
	            symbol: false,
	            animation: false,
	            label: {
	                normal: {
	                    show: false
	                }
	            },
	            data: [{
	                yAxis: 50
	            }],
	            lineStyle: {
	                normal: {
	                    type: "dotted",
	                    color: "#E6E6E6"
	                }
	            }
	        }
	    }]
	};
}

export function createNetworkIOLineOption(dataset) {
	let option = {
		color:['#4890e3', '#29b06e','#8d43b3','#ee5b11','#5a71c1','#72ce90','#c195de','#ffe11c'],
	    grid: {
	        left: '3%',
	        right: '3%',
	        bottom: '13%',
	        top:'7%',
	        containLabel: true
	    },

	    legend: {
	        data: [],
	        bottom: '1%',
	        textStyle: {
	            fontSize: 12,
	            color: '#000'
	        }
	    },

	    xAxis: [{
	        type: 'category',
	        boundaryGap: false,
	        axisLine: {
	            lineStyle: {
	                color: '#c0c0c0'
	            }
	        },
	        axisLabel: {
	            margin: 10,
	            textStyle: {
	                color:'#666666',
	                fontSize: 12
	            }
	        },
	        data:[]
	    }],

	    yAxis: [{
	        type: 'value',
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	            show:true,
	            lineStyle: {
	                color: '#c0c0c0'
	            }
	        },
	        axisLabel: {
	            // margin: 10,
	            textStyle: {
	                color:'#666666',
	                fontSize: 12
	            }
	        },
	        splitLine: {
	            show:true,
	            lineStyle: {
	                color: '#e6e6e6'
	            }
	        }
	    }],

	    series: []
	}
	let ds = JSON.parse(JSON.stringify(dataset));
	delete ds["time"];
	const cols = Object.keys(ds)
	option.legend.data = cols
	option.xAxis[0].data = dataset["time"]

	let series = cols.map((item, index)=>{
		return {
            name: item,
            smooth: true,
            type: 'line',
            lineStyle: {
            normal: {
                    width: 2
                }
            },
            data:ds[item]
        }
	})

	option.series = series

	return option
}