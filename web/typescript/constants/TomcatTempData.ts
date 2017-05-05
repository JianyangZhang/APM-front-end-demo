export const tomcatData = {
	heap:50.14,
	activeSessions:90.00,
	sessions:12000,
	threads:56.00,
	busyThreads:24.00,
	requests: 120,
	errorRequests : 0.00,
	servletRequests: 80.00,
	requestTime: 120,
}

var heap_x = ['']
var heap_data = [];
var nonheap_data = [];
var perm_data = [];
var heap_date = 12;
var heap_time = 0;
var heap_max = 100;
var heap_min = 10;
for (let i=0; i<48; i++) {
    if (heap_time == 55) {
        heap_time = 0;
        heap_date += 1;
    } else {
        heap_time +=5;
    }

    if (heap_time < 10)
        var strtime = '0' + heap_time;

    heap_x.push(heap_date +":" + strtime);
    heap_data.push(parseInt((Math.random()*(heap_max-heap_min+1)+heap_min)+'',10));
    nonheap_data.push(parseInt((Math.random()*(heap_max-heap_min+1)+heap_min)+'',10));
    perm_data.push(parseInt((Math.random()*(75-55+1)+55)+'',10));
}

export const memoryOption = {
        textStyle: {
        fontSize: 10
    },

    legend: {
        // icon: 'rect',
        data: ['堆内存', '非堆内存', '永久代'],
        bottom: '1%',
        // padding: [10, 10],
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

var session_x = ['']
var count_data = [];
var active_data = [];
var session_date = 12;
var session_time = 0;
var session_max = 300;
var session_min = 120;
for (let i=0; i<48; i++) {
    if (session_time == 55) {
        session_time = 0;
        session_date += 1;
    } else {
        session_time +=5;
    }

    if (session_time < 10)
        var strtime = '0' + session_time;

    session_x.push(session_date +":" + strtime);
    count_data.push(parseInt((Math.random()*(session_max-session_min+1)+session_min)+'',10));
    active_data.push(parseInt((Math.random()*(110-50+1)+50)+'',10));
}

export const sessionOption = {
        textStyle: {
        fontSize: 10
    },

    legend: {
        // icon: 'rect',
        data: ['会话总数', '激活会话数', ],
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
        data: session_x,
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
        name:'激活会话数',
        data:active_data,
        itemStyle:{
            normal:{
                color:'#bdc9ff'
            }
        }
    },

    {
            name: '会话总数',
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
            data:count_data
        },
    ]
};

var thread_x = ['']
var count_data = [];
var busy_data = [];
var thread_date = 12;
var thread_time = 0;
var thread_max = 150;
var thread_min = 80;
for (let i=0; i<48; i++) {
    if (thread_time == 55) {
        thread_time = 0;
        thread_date += 1;
    } else {
        thread_time +=5;
    }

    if (thread_time < 10)
        var strtime = '0' + thread_time;

    thread_x.push(thread_date +":" + strtime);
    count_data.push(parseInt((Math.random()*(thread_max-thread_min+1)+thread_min)+'',10));
    busy_data.push(parseInt((Math.random()*(60-20+1)+20)+'',10));
}

export const threadOption = {
        textStyle: {
        fontSize: 10
    },

    legend: {
        // icon: 'rect',
        data: ['线程总数', '繁忙线程数', ],
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
        data: thread_x,
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
        name:'繁忙线程数',
        data:busy_data,
        itemStyle:{
            normal:{
                color:'#bdc9ff'
            }
        }
    },

    {
            name: '线程总数',
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
            data:count_data
        },
    ]
};


var request_x = ['']
var count_data = [];
var error_data = [];
var servlet_data = [];
var request_date = 12;
var request_time = 0;
var request_max = 150;
var request_min = 80;
for (let i=0; i<48; i++) {
    if (request_time == 55) {
        request_time = 0;
        request_date += 1;
    } else {
        request_time +=5;
    }

    if (request_time < 10)
        var strtime = '0' + request_time;

    request_x.push(request_date +":" + strtime);
    count_data.push(parseInt((Math.random()*(request_max-request_min+1)+request_min)+'',10));
    error_data.push(parseInt((Math.random()*(5-0+1)+0)+'',10));
	servlet_data.push(parseInt((Math.random()*(request_max-request_min+1)+request_min)+'',10));
}

export const requestOption = {
        textStyle: {
        fontSize: 10
    },

    legend: {
        // icon: 'rect',
        data: ['请求总数', '错误请求数', 'Servlet请求数'],
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
        data: request_x,
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
        name:'Servlet请求数',
        data:servlet_data,
        itemStyle:{
            normal:{
                color:'#bdc9ff'
            }
        }
    },
	
	{
        type:'bar',
        name:'错误请求数',
        data:error_data,
        itemStyle:{
            normal:{
                color:'#02a5fe'
            }
        }
    },

    {
            name: '请求总数',
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
            data:count_data
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
for (let i=0; i<48; i++) {
    if (bytes_time == 55) {
        bytes_time = 0;
        bytes_date += 1;
    } else {
        bytes_time +=5;
    }

    if (bytes_time < 10)
        var strtime = '0' + bytes_time;

    bytes_x.push(bytes_date +":" + strtime);
    r_data.push(parseInt((Math.random()*(10000-3000+1)+3000)+'',10));
    s_data.push(parseInt((Math.random()*(bytes_max-bytes_min+1)+bytes_min)+'',10));
}

export const networkIoOption = {
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
for (let i=0; i<48; i++) {
    if (cache_time == 55) {
        cache_time = 0;
        cache_date += 1;
    } else {
        cache_time +=5;
    }

    if (cache_time < 10)
        var strtime = '0' + cache_time;

    cache_x.push(cache_date +":" + strtime);
    v_data.push(parseInt((Math.random()*(cache_max-cache_min+1)+cache_min)+'',10));
    m_data.push(parseInt((Math.random()*(150-40+1)+40)+'',10));
}

export const cacheOption = {
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