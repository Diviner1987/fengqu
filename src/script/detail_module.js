define([], function() {
    return {
        init: function() {
            //鼠标移入移出左边渲染li的效果
            $(function() {
                //左边的li的效果
                const $list_left = $('.main_day_left ');
                $list_left.on('mouseover', 'li', function() {
                    $(this).css({
                        borderBottom: '1px solid  red'
                    });
                });
                //鼠标移出左边渲染li的效果
                $list_left.on('mouseout', 'li', function() {
                    $(this).css({
                        borderBottom: '1px solid #ccc'
                    });
                });
            })

            //鼠标移入移出右边的的li的渲染效果
            $(function() {
                    const $list_right = $('.main_digital_right');
                    //右边的li的效果
                    //鼠标移入右边渲染li的效果
                    $list_right.on('mouseover', 'li p', function() {
                        $(this).css({
                            textDecoration: "underline"
                        });
                    });
                    //鼠标移出右边渲染li的效果
                    $list_right.on('mouseout', 'li p', function() {
                        $(this).css({
                            textDecoration: "white"
                        });
                    });
                }, )
                //主内容导航栏的效果
            $(function() {
                const $main_nav = $('.main_top_nav_r ');
                //鼠标移入主内容导航栏的效果
                $main_nav.on('mouseover', 'a', function() {
                    $(this).css({
                        textDecoration: "underline"
                    })
                });
                //鼠标移出主内容导航栏的效果
                $main_nav.on('mouseout', 'a', function() {
                    $(this).css({
                        textDecoration: "none"
                    })
                });
            }, )

            //鼠标移入在头部的效果
            $(function() {
                    ////头部导航栏效果
                    const $header_nav = $('.headermidleft');
                    //鼠标移入在头部的效果
                    $header_nav.on('mouseover', ' li a', function() {
                        $(this).css({
                            color: '#eee'
                        })
                    });
                    //鼠标移出在头部的效果
                    $header_nav.on('mouseout', ' li a', function() {
                        $(this).css({
                            color: '#ccc'
                        })
                    });
                })
                //主内容导航栏右边移入的效果
            $(function() {
                    //主内容导航栏右边的效果
                    const $top_nav_right = $('.top_nav_right');
                    //主内容导航栏右边移入的效果
                    $top_nav_right.on('mouseover', ' li a', function() {
                        $(this).css({
                            color: '#888'
                        })
                    });
                    //主内容导航栏右边移出的效果
                    $top_nav_right.on('mouseover', ' li a', function() {
                        $(this).css({
                            color: '#999'
                        })
                    });

                })
                //主内容导航栏右边移入的效果
            $(function() {
                //主内容导航栏右边的效果
                const $top_nav_right = $('.top_nav_right');
                //主内容导航栏右边移入的效果
                $top_nav_right.on('mouseover', ' li a', function() {
                    $(this).css({
                        color: '#888'
                    })
                });
                //主内容导航栏右边移出的效果
                $top_nav_right.on('mouseover', ' li a', function() {
                    $(this).css({
                        color: '#999'
                    })
                });

            })

            //tab切换
            $(function() {
                    //取到需要加效果的元素
                    const $top_nav_left_li = $('.top_nav_left li ');
                    $top_nav_left_li.on('mouseover', function() {
                        $(this).addClass('active').siblings('.top_nav_left li ').removeClass('active');
                    })
                })
                //鼠标移入显示二维码盒子
            $(function() {
                    const $app = $('.app');
                    //鼠标移入显示盒子
                    $app.on('mouseover', function() {
                            $('.erwei').css({
                                display: 'block'
                            })
                        })
                        //移出盒子隐藏
                    $app.on('mouseout', function() {
                        $('.erwei').css({
                            display: 'none'
                        })
                    })
                })
                //滚轮触发事件产生效果
            $(function() {
                //取到会发生事件的元素,对于发生这个事情是因为滚轴发生的触发来使元素发生运动,出现效果
                const $float_nav = $('.animate_nav');
                // const $float_mask = $('.mask');
                $(window).on('scroll', function() {
                    //取到滚动条的top值
                    let $top = $(window).scrollTop();
                    //当top值大于移出去的高度的时候就将要运动的元素显示效果出来
                    if ($top >= 400) {
                        $float_nav.stop(true).animate({
                            top: 0
                        });
                    }
                    //当小于的时候就将元素运动隐藏,值是不要加单位的
                    else {
                        $float_nav.stop(true).animate({
                            top: -54
                        });
                    }
                })
            })
        }
    }
});