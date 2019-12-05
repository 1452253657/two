var datas = [
    { name: 'xio', id: 1, age: '88' },
    { name: 'xio', id: 2, age: '88' },
    { name: 'xio', id: 3, age: '88' },
    { name: 'xio', id: 4, age: '88' },
    { name: 'xio', id: 5, age: '88' },
    { name: 'xio', id: 6, age: '88' },
]
//表头数据
var headDatas = ['姓名', 'id', '年龄']

var box = document.getElementById('box')
var btn = document.getElementById('btn')
//1创建table元素
var table = bb('table') //..document.createElement('table')
table.border = '1px'
var thead = bb('create', 'thead')
var tr = crt('tr')

function bb(dom) {
    return document.createElement(dom)
}
box.appendChild(table)
table.appendChild(thead)
thead.appendChild(tr)

function crt(str) {
    return document.createElement(str)
}

for (var i = 0; i < headDatas.length; i++) {
    var th = document.createElement('th')
    tr.appendChild(th)
    th.innerHTML = headDatas[i];
}
var tbody = document.createElement('tbody')
table.appendChild(tbody)

function addContent() {
    for (var i = 0; i < datas.length; i++) {
        var tr = document.createElement('tr')
        tbody.appendChild(tr)
        for (var prop in datas[i]) {//循环对象
            var td = document.createElement('td')
            tr.appendChild(td)
            td.innerHTML = datas[i][prop]
        }
        var td = document.createElement('td')
        tr.appendChild(td)
        td.innerHTML = `<span  class="del" value='${i}'>删除${i}</span>`
    }
}
addContent()
// 2创建表头
var dels = document.querySelectorAll('.del');
box.onclick = function (event) {
    var value = +event.target.innerHTML.slice(-1)
    console.log(value);
    datas.splice(value, 1)
    tbody.innerHTML = null

    addContent()
}
var tr = crt('tr')
function crt(str) {
    return document.createElement(str)
}