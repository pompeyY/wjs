$(function () {

    function resize() {


    //2.判断什么时候用哪个背景图片
        //1.获取浏览器宽度
        var $scrollWidth = $(window).width();
        var isScrollWidth = $scrollWidth < 768;
        $("#main_lb > .carousel-inner > .item").each(function (index,ele) {
            var $item = $(ele);
            var imgBg= isScrollWidth ? $item.data("img-xs") : $item.data("img-lg");
            $item.css("backgroundImage",'url("'+imgBg+'")');
            if(isScrollWidth)
            {
                $item.html('<img src = "'+ imgBg +'"  />');
            }else
            {
                $item.empty();
            }
        })
    }
    $(window).on("resize",function () {
        resize();
    }).trigger("resize");


    // var $ulContainer = $(".nav-tabs");
    // var width = 40;
    // $ulContainer.children().each(function (index, ele) {
    //     width += ele.clientWidth;
    // });
    // if (width>$(window).width()){
    //     $ulContainer
    //         .css("width",width)
    //         .parent().css("overflow-x","scroll");
    // }
    var $ulContainer = $('.nav-tabs');
    // 获取所有子元素的宽度和
    var width = 30; // 因为原本ul上有padding-left
    // 遍历子元素
    $ulContainer.children().each(function(index, element) {
        // console.log(element.clientWidth);
        // console.log($(element).width());
        width += element.clientWidth;
    });
    // 此时width等于所有LI的宽度总和
    // 判断当前UL的宽度是否超出屏幕，如果超出就显示横向滚动条
    if (width > $(window).width()) {

        $ulContainer
            .css('width', width)
            .parent().css('overflow-x', 'scroll');
    }


    var $carousels = $(".carousel");
    var startX,endX;
    var offset = 50;

    $carousels.on("touchstart",function (e) {
        startX = e.originalEvent.touches[0].clientX;
        // startX = e.originalEvent.touches[0].clientX;
        // console.log(startX);
    })
    $carousels.on("touchmove",function (e) {
        endX = e.originalEvent.touches[0].clientX;
        // startX = e.originalEvent.touches[0].clientX;
    })
    $carousels.on("touchend",function () {
        var distance = Math.abs(startX-endX);
        if (distance>offset)
        {
            $(this).carousel(startX-endX>0?'next':'prev');
        }
    })


});