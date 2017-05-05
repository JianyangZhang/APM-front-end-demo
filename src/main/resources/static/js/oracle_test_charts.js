var mem_x = ['']
var sga_data = [];
var pga_data = [];
var mem_date = 12;
var mem_time = 0;
var mem_max = 100;
var mem_min = 10;
for (i=0; i<48; i++) {
    if (mem_time == 55) {
        mem_time = 0;
        mem_date += 1;
    } else {
        mem_time +=5;
    }

    if (mem_time < 10)
        var strtime = '0' + mem_time;

    mem_x.push(mem_date +":" + strtime);
    sga_data.push(parseInt(Math.random()*(mem_max-mem_min+1)+mem_min,10));
    pga_data.push(parseInt(Math.random()*(mem_max-mem_min+1)+mem_min,10));
}

var mem_bar_opt = {
        textStyle: {
        fontSize: 10
    },

    legend: {
        // icon: 'rect',
        data: ['SGA使用率', 'PGA使用率'],
        bottom: '1%',
        textStyle: {
            fontSize: 12,
            color: '#666666'
        }
    },
    grid: {
        left: '2%',
        right: '2%',
        top:'10%',
        bottom: '16%',
        containLabel: true
    },

    xAxis: {
        type : 'category',
        boundaryGap : false,
        data: mem_x,
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
            show:true
        }
    },
    series: [
    {
        type:'bar',
        name:'PGA使用率',
        data:pga_data,
        itemStyle:{
            normal:{
                color:'#bdc9ff'
            }
        }
    },

    {
            name: 'SGA使用率',
            smooth: true,
            type: 'line',
            lineStyle: {
            normal: {
                    width: 1
                }
            },
            itemStyle: {
                normal: {
                    color: '#105398'
                }
            },
            data:sga_data
        },
    ]
};

var hit_x = ['']
var buffer_data = [];
var lib_data = [];
var redo_data = [];
var cursor_data = [];
var row_data = [];
var pga_data = [];

var hit_date = 12;
var hit_time = 0;
var hit_max = 89;
var hit_min = 60;
for (i=0; i<48; i++) {
    if (hit_time == 55) {
        hit_time = 0;
        hit_date += 1;
    } else {
        hit_time +=5;
    }

    if (hit_time < 10)
        var strtime = '0' + hit_time;

    hit_x.push(hit_date +":" + strtime);
    buffer_data.push(parseInt(Math.random()*(hit_max-hit_min+1)+hit_min,10));
    lib_data.push(parseInt(Math.random()*(hit_max-hit_min+1)+hit_min,10));
    redo_data.push(parseInt(Math.random()*(hit_max-hit_min+1)+hit_min,10));
    cursor_data.push(parseInt(Math.random()*(hit_max-hit_min+1)+hit_min,10));
    row_data.push(parseInt(Math.random()*(hit_max-hit_min+1)+hit_min,10));
    pga_data.push(parseInt(Math.random()*(hit_max-hit_min+1)+hit_min,10));
}

var hits_opt = {
        textStyle: {
        fontSize: 10
    },

    legend: {
        // icon: 'rect',
        // orient:'vertical',
        data: ['Buffer cache', 'Redo Allocation', 'Cursor Cache', 'Row Cache','Library Cache','PGA Cache'],
        bottom: '1%',
        textStyle: {
            fontSize: 12,
            color: '#666666'
        }
    },
    grid: {
        left: '2%',
        right: '2%',
        top:'10%',
        bottom: '30%',
        containLabel: true
    },

    xAxis: {
        type : 'category',
        boundaryGap : false,
        data: hit_x,
        axisLine: {
            show: true,
            lineStyle:{
                color:'#f6f6f6'
            }
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
                fontSize:10,
                color:"#666666"
            }
        }
    },
    yAxis: {
        type: "value",
        axisLine: {
            show: true,
            lineStyle:{
                color:'#f6f6f6'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle:{
                color:'#f6f6f6'
            }
        },
        axisLabel: {
            textStyle:{
                fontSize:10,
                color:"#666666"
            }
        }
    },
    series: [
       {
            name: 'Buffer cache',
            smooth: true,
            type: 'line',
            lineStyle: {
            normal: {
                    width: 1
                }
            },
            data:buffer_data
        },

        {
            name: 'Redo Allocation',
            smooth: true,
            type: 'line',
            lineStyle: {
            normal: {
                    width: 1
                }
            },
            data:redo_data
        },

        {
            name: 'Cursor Cache',
            smooth: true,
            type: 'line',
            lineStyle: {
            normal: {
                    width: 1
                }
            },
            data:cursor_data
        },

        {
            name: 'Row Cache',
            smooth: true,
            type: 'line',
            lineStyle: {
            normal: {
                    width: 1
                }
            },
            data:row_data
        },

        {
            name: 'Library Cache',
            smooth: true,
            type: 'line',
            lineStyle: {
            normal: {
                    width: 1
                }
            },
            data:lib_data
        },

        {
            name: 'PGA Cache',
            smooth: true,
            type: 'line',
            lineStyle: {
            normal: {
                    width: 1
                }
            },
            data:pga_data
        },
    ]
}

var hits_opt2 = {
        textStyle: {
        fontSize: 10
    },

    // legend: {
    //     data: ['Buffer cache', 'Redo Allocation', 'Cursor Cache', 'Row Cache','Library Cache','PGA Cache'],
    //     bottom: '1%',
    //     textStyle: {
    //         fontSize: 12,
    //         color: '#666666'
    //     }
    // },
    grid: {
        left: '3%',
        right: '3%',
        top:'10%',
        bottom: '10%',
        containLabel: true
    },

    xAxis: {
        type : 'category',
        // boundaryGap : false,
        data: ['Buffer cache', 'Redo Allocation', 'Cursor Cache', 'Row Cache','Library Cache','PGA Cache'],
        axisLine: {
            show: true,
            lineStyle:{
                color:'#f6f6f6'
            }
        },
       axisTick: {
                alignWithLabel: true
            },
        splitLine: {
            show: false
        },
        axisLabel: {
            interval:0,
            textStyle:{
                fontSize:10,
                color:"#666666"
            }
        }
    },
    yAxis: {
        type: "value",
        axisLine: {
            show: true,
            lineStyle:{
                color:'#f6f6f6'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle:{
                color:'#f6f6f6'
            }
        },
        axisLabel: {
            textStyle:{
                fontSize:10,
                color:"#666666"
            }
        }
    },
    series: [
       {
            name:'',
            type: 'bar',
            barWidth: '50%',
            itemStyle:{
                normal:{
                    color:'#00a6fb'
                }
            },
            data:[80.5, 65.3, 78.3, 81.3, 67.5,77.1]
        }
    ]
}


var cnn_x = ['']
var count_data = [];
var active_data = [];
var cnn_date = 12;
var cnn_time = 0;
var cnn_max = 50;
var cnn_min = 10;
for (i=0; i<48; i++) {
    if (cnn_time == 55) {
        cnn_time = 0;
        cnn_date += 1;
    } else {
        cnn_time +=5;
    }

    if (cnn_time < 10)
        var strtime = '0' + cnn_time;

    cnn_x.push(cnn_date +":" + strtime);
    count_data.push(parseInt(Math.random()*(500-200+1)+200,10));
    active_data.push(parseInt(Math.random()*(cnn_max-cnn_min+1)+cnn_min,10));
}

var cnn_opt = {
        textStyle: {
        fontSize: 10
    },

    legend: {
        // icon: 'rect',
        orient:'vertical',
        data: ['count', 'active'],
        right: '1%',
        textStyle: {
            fontSize: 12,
            color: '#666666'
        }
    },
    grid: {
        left: '2%',
        right: '15%',
        top:'10%',
        bottom: '3%',
        containLabel: true
    },

    xAxis: {
        type : 'category',
        boundaryGap : false,
        data: cnn_x,
        axisLine: {
            show: true,
            lineStyle:{
                color:'#f6f6f6'
            }
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
                fontSize:10,
                color:"#666666"
            }
        }
    },
    yAxis: {
        type: "value",
        axisLine: {
            show: true,
            lineStyle:{
                color:'#f6f6f6'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle:{
                color:'#f6f6f6'
            }
        },
        axisLabel: {
            textStyle:{
                fontSize:10,
                color:"#666666"
            }
        }
    },
    series: [
    {
            name: 'active',
            smooth: true,
            type: 'line',
            stack:'总量',
            lineStyle: {
            normal: {
                    width: 1
                }
            },
            itemStyle: {
                normal: {
                    color: '#c1c2c2'
                }
            },
            areaStyle:{
                normal:{
                    color:'#c1c2c2',
                    opacity:0.1
                }
            },
            data:active_data
        },

            {
            name: 'count',
            smooth: true,
            type: 'line',
            stack:'总量',
            lineStyle: {
            normal: {
                    width: 1
                }
            },
            itemStyle: {
                normal: {
                    color: '#02a5fe'
                }
            },
            areaStyle:{
                normal:{
                    color:'#02a5fe',
                    opacity:0.1
                }
            },
            data:count_data
        },
    ]
}