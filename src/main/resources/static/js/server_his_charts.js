function getValue(datetime) {
    var result = 0;
    if (datetime > 9) 
        result = datetime + '';
    else 
        result = '0' + datetime;
    return result;
}

function getTime(hour, min) {
    return getValue(hour) + ':' + getValue(min);
}

function createTimeRange(start, step, range) {
    var result = [];
    minute = 0;
    hour = start;
    result.push(getTime(hour, minute));
    for (var i =0 ; i < ((range * (60/step)) -1 ); i++ ) {
        if (minute == 55) {
            minute = 0;
            if (hour == 23)
                hour = 0;
            else
                hour += 1;
        } else {
            minute += step;
        }
        // console.log(i)
        result.push(getTime(hour, minute));
    }
    return result;
}

function createNumberRange(max, min, range) {
    var result = [];
    for (var i=0; i < range; i++) {
        var num = Math.random()*(max-min+1)+min;
        result.push(parseInt(num + ''));
    }
    return result
}

var xData = createTimeRange(0, 5, 24)
xData[0] = ''
////////////////////////////////////////////////////////////////////
function createLineOption(title, xData, data, color, yMax, yMin, ySplit) {
    var result = {
         textStyle: {
            fontSize: 10
        },

        title:{
            text:title,
            left:'center',
            textStyle:{
                color:'#666666',
                fontSize:10
            }
        },

        legend : {
            show:false
        },
    	
        grid: {
            show:true,
            borderColor:'#dfdfdf',
            left: '0%',
            right: '0%',
            top:'20%',
            bottom: '0%',
            containLabel: true
        },

        xAxis: {
            type : 'category',
            boundaryGap : true,
            data: xData,
            axisLine: {
                show: true,
                lineStyle:{
                    color:'#f6f6f6'
                }
            },
            axisTick: {
                show: true
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: true,
                // showMinLabel:true,
                interval:71,
                // minInterval: 1,
                textStyle:{
                    fontSize:10,
                    color:"#666666"
                }
            }
        },
        yAxis: {
            max:yMax,
            min:yMin,
            interval:ySplit,
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
                smooth: true,
                symbolSize:0,
                type: 'line',
                lineStyle: {
                normal: {
                        width: 1
                    }
                },
                itemStyle: {
                    normal: {
                        color: color
                    }
                },
                areaStyle:{
                    normal:{
                        color:color,
                        opacity:0.1
                    }
                },
                data:data
            }
        ]
    };
    return result;
}

function createNetworkLineOption(title, data1, data2) {
        var result = {
         textStyle: {
            fontSize: 10
        },

        legend: {
            data: ['流入', '流出'],
            bottom: '1%',
            textStyle: {
                fontSize: 12,
                color: '#666666'
            }
        },

        title:{
            text:title,
            left:'center',
            textStyle:{
                color:'#666666',
                fontSize:10
            }
        },
        
        grid: {
            show:true,
            borderColor:'#dfdfdf',
            left: '0%',
            right: '0%',
            top:'20%',
            bottom: '15%',
            containLabel: true
        },

        xAxis: {
            type : 'category',
            boundaryGap : true,
            data: xData,
            axisLine: {
                show: true,
                lineStyle:{
                    color:'#f6f6f6'
                }
            },
            axisTick: {
                show: true
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: true,
                // showMinLabel:true,
                interval:71,
                // minInterval: 1,
                textStyle:{
                    fontSize:10,
                    color:"#666666"
                }
            }
        },
        yAxis: {
            // interval:ySplit,
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
                name:'流入',
                smooth: true,
                symbolSize:0,
                type: 'line',
                lineStyle: {
                normal: {
                        width: 1
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#1879CD'
                    }
                },
                data:data1
            },
            {
                name:'流出',
                smooth: true,
                symbolSize:0,
                type: 'line',
                lineStyle: {
                normal: {
                        width: 0
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#A1E2FA'
                    }
                },
                areaStyle:{
                    normal:{
                        color:'#A1E2FA',
                        opacity:0.9
                    }
                },
                data:data2
            }
        ]
    };
    return result;
}

///////////////////////////////////////////////////////////////////////////
var purple = '#985dba';
var blue = '#06abfb';
var green = '#86c94d';


var cpu1_data = createNumberRange(15, 5, xData.length);
var cpu2_data = createNumberRange(25, 10, xData.length);
var cpu3_data = createNumberRange(35, 28, xData.length);
var cpu4_data = createNumberRange(15, 5, xData.length);
var cpu5_data = createNumberRange(15, 5, xData.length);
var cpu6_data = createNumberRange(80, 60, xData.length);
var cpu7_data = createNumberRange(64, 30, xData.length);

var cpu1Opt = createLineOption("%user", xData, cpu1_data, purple, 100, 0, 20);
var cpu2Opt = createLineOption("%nice", xData, cpu2_data, green, 100, 0, 20);
var cpu3Opt = createLineOption("%system", xData, cpu3_data, blue, 100, 0, 20);
var cpu4Opt = createLineOption("%iowait", xData, cpu4_data, blue, 100, 0, 20);
var cpu5Opt = createLineOption("%steal", xData, cpu5_data, purple, 100, 0, 20);
var cpu6Opt = createLineOption("%idle", xData, cpu6_data, green, 100, 0, 20);
var cpu7Opt = createLineOption("%used", xData, cpu7_data, blue, 100, 0, 20);


var mem1_data = createNumberRange(14*1024, 4*1024, xData.length);
var mem2_data = createNumberRange(70, 40, xData.length);
var mem3_data = createNumberRange(4*1025, 1.5*1024, xData.length);
var mem4_data = createNumberRange(4*1024, 1.5*1024, xData.length);
var mem5_data = createNumberRange(8*1024, 6*1024, xData.length);
var mem6_data = createNumberRange(12*1024, 8*1024, xData.length);
var mem7_data = createNumberRange(60, 50, xData.length);
var mem8_data = createNumberRange(30, 10, xData.length);

var mem1Opt = createLineOption("used/mb", xData, mem1_data, purple, 16*1024, 0, 4*1024);
var mem2Opt = createLineOption("%used", xData, mem2_data, green, 100, 0, 20);
var mem3Opt = createLineOption("buffers/mb", xData, mem3_data, blue, 16*1024,0, 4*1024);
var mem4Opt = createLineOption("cached/mb", xData, mem4_data, blue, 16*1024, 0, 4*1024);
var mem5Opt = createLineOption("swap free/mb", xData, mem5_data, purple, 16*1024, 0,4*1024);
var mem6Opt = createLineOption("swap used/mb", xData, mem6_data, green, 16*1024, 0,4*1024);
var mem7Opt = createLineOption("%swap", xData, mem7_data, blue, 100, 0, 20);
var mem8Opt = createLineOption("%swpcad", xData, mem8_data, blue, 100, 0, 20);

var disk1_data = createNumberRange(1500, 600, xData.length);
var disk2_data = createNumberRange(500, 0, xData.length);
var disk3_data = createNumberRange(1100, 300, xData.length);
var disk4_data = createNumberRange(100, 20, xData.length);
var disk5_data = createNumberRange(200, 100, xData.length);

var disk1Opt = createLineOption("tps", xData, disk1_data, purple, null, null, 300);
var disk2Opt = createLineOption("rpts", xData, disk2_data, green, null, null, 300);
var disk3Opt = createLineOption("wpts", xData, disk3_data, blue, null, null, 300);
var disk4Opt = createLineOption("bread/s", xData, disk4_data, blue, null, null, 50);
var disk5Opt = createLineOption("bwrtn/s", xData, disk5_data, purple, null, null, 50);


var eth0_bytes_data1 = createNumberRange(12992, 0, xData.length);
var eth0_bytes_data2 = createNumberRange(54102, 0, xData.length);
var eth0_pkt_data1 = createNumberRange(490, 0, xData.length);
var eth0_pkt_data2 = createNumberRange(3712, 0, xData.length);
var eth0_error_data1 = createNumberRange(0, 0, xData.length);
var eth0_error_data2 = createNumberRange(5, 0, xData.length);
var eth0_drop_data1 = createNumberRange(2, 0, xData.length);
var eth0_drop_data2 = createNumberRange(10, 0, xData.length);

var eth0ByteOpt = createNetworkLineOption("eth0 收发字节数", eth0_bytes_data1, eth0_bytes_data2)
var eth0PktOpt = createNetworkLineOption("eth0 收发报文数", eth0_pkt_data1, eth0_pkt_data2)
var eth0ErrorOpt = createNetworkLineOption("eth0 收发错包数", eth0_error_data1, eth0_error_data2)
var eth0DropOpt = createNetworkLineOption("eth0 收发丢包数", eth0_drop_data1, eth0_drop_data2)


var eth1_bytes_data1 = createNumberRange(992, 0, xData.length);
var eth1_bytes_data2 = createNumberRange(4102, 0, xData.length);
var eth1_pkt_data1 = createNumberRange(290, 0, xData.length);
var eth1_pkt_data2 = createNumberRange(2712, 0, xData.length);
var eth1_error_data1 = createNumberRange(0, 0, xData.length);
var eth1_error_data2 = createNumberRange(5, 0, xData.length);
var eth1_drop_data1 = createNumberRange(2, 0, xData.length);
var eth1_drop_data2 = createNumberRange(10, 0, xData.length);

var eth1ByteOpt = createNetworkLineOption("eth1 收发字节数", eth1_bytes_data1, eth1_bytes_data2)
var eth1PktOpt = createNetworkLineOption("eth1 收发报文数", eth1_pkt_data1, eth1_pkt_data2)
var eth1ErrorOpt = createNetworkLineOption("eth1 收发错包数", eth1_error_data1, eth1_error_data2)
var eth1DropOpt = createNetworkLineOption("eth1 收发丢包数", eth1_drop_data1, eth1_drop_data2)