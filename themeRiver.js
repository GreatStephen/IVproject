dom = document.getElementById("themeRiver");
myChart = echarts.init(dom, 'light');
var app = {};
option = null;
option = {
    title: {
        text: '河流图',
        left: 'center',
        top: 15,
        textStyle: {
            color: '#000000'
        }
    },


    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: 'rgba(0,0,0,0.2)',
                width: 1,
                type: 'solid'
            }
        }
    },

    legend: {
        top:50,
        data: ['办证发票','假冒身份','色情服务','地产广告','其他']
    },

    singleAxis: {
        top: 50,
        bottom: 50,
        axisTick: {},
        axisLabel: {},
        type: 'category',
        data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        axisPointer: {
            animation: true,
            label: {
                show: true
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                opacity: 0.2
            }
        }
    },
    backgroundColor:"#f9f7e8",

    series: [
        {
            type: 'themeRiver',
            itemStyle: {
                color:'#501c2d',
                emphasis: {
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.8)'
                }
            },
            lable:{
                normal:{
                    show:false,
                    position:'inside'
                }
            },
            data: [[0, 12324, '办证发票'],
                [1, 7915, '办证发票'],
                [2, 6241, '办证发票'],
                [3, 5548, '办证发票'],
                [4, 7418, '办证发票'],
                [5, 16964, '办证发票'],
                [6, 63681, '办证发票'],
                [7, 134177, '办证发票'],
                [8, 177883, '办证发票'],
                [9, 164201, '办证发票'],
                [10, 139521, '办证发票'],
                [11, 112786, '办证发票'],
                [12, 95779, '办证发票'],
                [13, 85387, '办证发票'],
                [14, 86273, '办证发票'],
                [15, 93378, '办证发票'],
                [16, 126210, '办证发票'],
                [17, 166922, '办证发票'],
                [18, 169499, '办证发票'],
                [19, 121962, '办证发票'],
                [20, 63333, '办证发票'],
                [21, 33557, '办证发票'],
                [22, 21475, '办证发票'],
                [23, 15980, '办证发票'],
                [0, 1405, '假冒身份'],
                [1, 1044, '假冒身份'],
                [2, 888, '假冒身份'],
                [3, 679, '假冒身份'],
                [4, 1063, '假冒身份'],
                [5, 1703, '假冒身份'],
                [6, 4807, '假冒身份'],
                [7, 9238, '假冒身份'],
                [8, 19071, '假冒身份'],
                [9, 41408, '假冒身份'],
                [10, 77999, '假冒身份'],
                [11, 79607, '假冒身份'],
                [12, 70511, '假冒身份'],
                [13, 65973, '假冒身份'],
                [14, 67852, '假冒身份'],
                [15, 69694, '假冒身份'],
                [16, 61892, '假冒身份'],
                [17, 56081, '假冒身份'],
                [18, 45975, '假冒身份'],
                [19, 22988, '假冒身份'],
                [20, 5736, '假冒身份'],
                [21, 3553, '假冒身份'],
                [22, 2885, '假冒身份'],
                [23, 1791, '假冒身份'],
                [0, 17790, '色情服务'],
                [1, 6213, '色情服务'],
                [2, 224, '色情服务'],
                [3, 143, '色情服务'],
                [4, 127, '色情服务'],
                [5, 137, '色情服务'],
                [6, 283, '色情服务'],
                [7, 549, '色情服务'],
                [8, 884, '色情服务'],
                [9, 986, '色情服务'],
                [10, 1184, '色情服务'],
                [11, 1392, '色情服务'],
                [12, 1898, '色情服务'],
                [13, 2257, '色情服务'],
                [14, 3616, '色情服务'],
                [15, 4438, '色情服务'],
                [16, 7454, '色情服务'],
                [17, 13589, '色情服务'],
                [18, 34178, '色情服务'],
                [19, 60687, '色情服务'],
                [20, 60606, '色情服务'],
                [21, 48493, '色情服务'],
                [22, 41948, '色情服务'],
                [23, 27488, '色情服务'],
                [0, 311, '地产广告'],
                [1, 330, '地产广告'],
                [2, 346, '地产广告'],
                [3, 293, '地产广告'],
                [4, 310, '地产广告'],
                [5, 397, '地产广告'],
                [6, 1269, '地产广告'],
                [7, 3012, '地产广告'],
                [8, 7173, '地产广告'],
                [9, 18195, '地产广告'],
                [10, 18032, '地产广告'],
                [11, 15621, '地产广告'],
                [12, 16216, '地产广告'],
                [13, 13812, '地产广告'],
                [14, 9373, '地产广告'],
                [15, 7650, '地产广告'],
                [16, 4443, '地产广告'],
                [17, 3140, '地产广告'],
                [18, 2772, '地产广告'],
                [19, 1392, '地产广告'],
                [20, 990, '地产广告'],
                [21, 655, '地产广告'],
                [22, 655, '地产广告'],
                [23, 643, '地产广告'],
                [0, 2100, '其他'],
                [1, 947, '其他'],
                [2, 437, '其他'],
                [3, 460, '其他'],
                [4, 532, '其他'],
                [5, 1040, '其他'],
                [6, 3514, '其他'],
                [7, 7093, '其他'],
                [8, 12893, '其他'],
                [9, 19665, '其他'],
                [10, 21694, '其他'],
                [11, 20599, '其他'],
                [12, 18898, '其他'],
                [13, 18907, '其他'],
                [14, 16947, '其他'],
                [15, 16883, '其他'],
                [16, 16727, '其他'],
                [17, 18469, '其他'],
                [18, 17290, '其他'],
                [19, 14344, '其他'],
                [20, 9889, '其他'],
                [21, 6648, '其他'],
                [22, 4229, '其他'],
                [23, 2896, '其他']]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}