var heap_x = ['']
var heap_data = [];
var nonheap_data = [];
var perm_data = [];
var heap_date = 12;
var heap_time = 0;
var heap_max = 100;
var heap_min = 10;
for (i=0; i<48; i++) {
    if (heap_time == 55) {
        heap_time = 0;
        heap_date += 1;
    } else {
        heap_time +=5;
    }

    if (heap_time < 10)
        var strtime = '0' + heap_time;

    heap_x.push(heap_date +":" + strtime);
    heap_data.push(parseInt(Math.random()*(heap_max-heap_min+1)+heap_min,10));
    nonheap_data.push(parseInt(Math.random()*(heap_max-heap_min+1)+heap_min,10));
    perm_data.push(parseInt(Math.random()*(75-55+1)+55,10));
}

var heap_bar_opt = {
        textStyle: {
        fontSize: 10
    },

    legend: {
        // icon: 'rect',
        data: ['堆内存', '非堆内存', '永久代'],
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
        data: heap_x,
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
        name:'堆内存',
        data:heap_data,
        itemStyle:{
            normal:{
                color:'#bdc9ff'
            }
        }
    },

    {
        type:'bar',
        name:'非堆内存',
        data:nonheap_data,
        itemStyle:{
            normal:{
                color:'#02a5fe'
            }
        }
    },

    {
            name: '永久代',
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
            data:perm_data
        },
    ]
};




var bytes_x = ['']
var s_data = [];
var r_data = [];
var bytes_date = 12;
var bytes_time = 0;
var bytes_max = 42020;
var bytes_min = 12304;
for (i=0; i<48; i++) {
    if (bytes_time == 55) {
        bytes_time = 0;
        bytes_date += 1;
    } else {
        bytes_time +=5;
    }

    if (bytes_time < 10)
        var strtime = '0' + bytes_time;

    bytes_x.push(bytes_date +":" + strtime);
    r_data.push(parseInt(Math.random()*(10000-3000+1)+3000,10));
    s_data.push(parseInt(Math.random()*(bytes_max-bytes_min+1)+bytes_min,10));
}

var send_and_recv_opt = {
        textStyle: {
        fontSize: 10
    },

    legend: {
        // icon: 'rect',
        orient:'vertical',
        data: ['每秒收', '每秒发'],
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
        data: bytes_x,
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
            name: '每秒收',
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
            data:r_data
        },

    {
            name: '每秒发',
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
            data:s_data
        },
    ]
}


var cache_x = ['']
var v_data = [];
var m_data = [];
var cache_date = 12;
var cache_time = 0;
var cache_max = 200;
var cache_min = 20;
for (i=0; i<48; i++) {
    if (cache_time == 55) {
        cache_time = 0;
        cache_date += 1;
    } else {
        cache_time +=5;
    }

    if (cache_time < 10)
        var strtime = '0' + cache_time;

    cache_x.push(cache_date +":" + strtime);
    v_data.push(parseInt(Math.random()*(cache_max-cache_min+1)+cache_min,10));
    m_data.push(parseInt(Math.random()*(150-40+1)+40,10));
}

var cache_opt = {
        textStyle: {
        fontSize: 10
    },

    legend: {
        // icon: 'rect',
        orient:'vertical',
        data: ['访问次数', '命中次数'],
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
        data: cache_x,
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
            name: '访问次数',
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
            data:v_data
        },

    {
            name: '命中次数',
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
            data:m_data
        },
    ]
}