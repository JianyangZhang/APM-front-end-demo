export const defaultOptions = {
 interaction : {
      interaction:{
        dragNodes:true,
        dragView: true,
        hideEdgesOnDrag: false,
        hideNodesOnDrag: false,
        hover: false,
        hoverConnectedEdges: true,
        keyboard: {
          enabled: false,
          speed: {x: 10, y: 10, zoom: 0.02},
          bindToWindow: true
        },
        multiselect: false,
        navigationButtons: false,
        selectable: true,
        selectConnectedEdges: true,
        tooltipDelay: 300,
        zoomView: true
      }
    }
}

export let options = {
    locale: "en",
    autoResize: true,
    clickToUse: false,
    height:"500px",
    interaction: {
        multiselect: true
    },
    nodes: {
        shape: 'circularImage',
        shapeProperties:{
            useImageSize:true,
            borderDashes:false,
            borderRadius:6,
            interpolation:true,
            useBorderWithImage:false
        },
        brokenImage: "./img/server.svg",
        image: "./img/server.svg",
        size: 15,
        physics: false,
        shadow: false,
        labelHighlightBold: true,
        // borderWidth:4,
        font: {
            face: "Microsoft YaHei, Arial, sans-serif",
            size:12
        },
        color: {
            border: "#5e5e5e",
            background: "#5e5e5e",
            highlight: {
                border: "#58BB12",
                background: "#58BB12",
            },
            hover: {
                border: "#00ff00",
                background: "#ffffff",
            }
        },
        fixed: {
            x: false,
            y: false
        }
    },
    edges: {
        width:1,
        color: {
            color: "#c1c1c1",
            highlight: "#58BB12",
            hover: "#66ff66"
        },
        arrows: {
            to: {
                enabled: true,
                scaleFactor: 0,
                type: 'arrow'
            },
            middle: {
                enabled: false,
                scaleFactor: 1,
                type: 'arrow'
            },
            from: {
                enabled: false,
                scaleFactor: 0.01,
                type: 'circle'
            }
        },
        smooth: {
            enabled: true,
            type: "cubicBezier",
            forceDirection: "horizontal",
            roundness: 0.5
        }
    },
    manipulation: {
        enabled: true,
        initiallyActive: true,
        addNode:true,
        editNode:function(data, callback){},
        addEdge: true,
        editEdge: true,
        deleteNode: true,
        deleteEdge: true
       }
}