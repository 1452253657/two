function Box(options){
     options = options || {};
    //设置对象的属性
    this.backgroundColor =options.backgroundColor ||'red'
    this.windth = options.windth || '20 '
    this.height = options.height || '20 '
    this.x  = options.x ||0
    this.y  = options.y ||0

}