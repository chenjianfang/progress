function Progress(){
    this.init();
    this.resources = [
        'http://p2.qhimg.com/t01ed1438874f940dc0.jpg',
        'http://p9.qhimg.com/t01b4ff03b72c7dc6c7.jpg',
        'http://p2.qhimg.com/t01dd90dfbec92074d0.jpg',
        'http://p7.qhimg.com/t01cfec6d87cde457c5.jpg',
        'http://p9.qhimg.com/t01943ced462da67833.jpg',
        'http://p0.qhimg.com/t01943ced462da67833.jpg',
        'http://p6.qhimg.com/t01aa15a7ba7ccb49a7.jpg',
        'http://p8.qhimg.com/t010f1e8badf1134376.jpg',
        'http://p8.qhimg.com/t01cf37ea915533a032.jpg',
        'http://p3.qhimg.com/t0193d8a3963e1803e9.jpg',
        'http://p3.qhimg.com/t01cd6a4d4b4bd4457b.jpg'
    ];
    this.backpack= new Image();
}
Progress.prototype.init = function(){
    var that = this;
    $("#myClick").click(function(){
        that.Load();
    });
}
Progress.prototype.Load = function(){
    var _this = this;
    var firstImg , count=0;
    var L = this.resources.length;
    $.each(this.resources , function(index,element){
        _this.backpack.src = element;
        ++count;
        $(".statusBar").css({
            width : 300/L*count+'px'
        });
    });
}