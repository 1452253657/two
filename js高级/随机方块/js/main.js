//生成10个方块，随机生成颜色

//获取容器
var container = document.getElementById('container')

    //
    var array = []
for (var i = 0; i < 10; i++) {
    var r = Tools.getRandom(0, 255)
    var g = Tools.getRandom(0, 255)
    var b = Tools.getRandom(0, 255)

    var box = new Box(container, {
                         // rgb(0,0,0)
        backgroundColor: `rgb(${r},${g},${b})`
    }) 
        
        array.push(box)
}
//设置随机位置，开启定时器
setInterval(function(){
    for(var i = 0; i< array.length;i++){
       var box1 =array[i]
        box1.random()
    }
},500)