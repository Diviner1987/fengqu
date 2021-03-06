//首页进行渲染的模块
define(['jlazyload', 'jquery'], function() {
    return {
        //ajax获取数据
        init: function() {
            const $list_left = $('.main_day_left ');
            $.ajax({
                    url: 'http://localhost/fengqu/php/fengqu.php',
                    dataType: 'json' //设置json格式的对象。
                })
                .done((data) => {
                    let $renderdata = data;
                    console.log(data);
                    let $strhtml = ''; //拼接字符串
                    $.each($renderdata, function(index, value) {
                        //拼接渲染
                        if (index <= 5) {
                            $strhtml += `
                            <li >
                                    <a href="indexs.html?sid=${value.sid}"></a>
                                    <img class="lazy" data-original="${value.url}"width="200" height="200" />
                                        <p>${value.title}</p>
                                        <span>￥${value.price}</span>
                            </li>
                            `;
                        }
                    });
                    // 将渲染的数据追加
                    $list_left.html($strhtml);
                    // 懒加载效果
                    $("img.lazy").lazyload({
                        effect: "fadeIn" //图片显示方式
                    });
                });
            //鼠标移入移出左边渲染li的效果
            //鼠标移入移出左边渲染li的效果
            $(function() {
                //左边的li的效果
                const $list_left = $('.main_day_left ');
                $list_left.on('mouseover', 'li', function() {
                    $(this).css({
                        borderBottom: '2px solid  #e73736'
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
                    const $top_nav_left_li = $('.top_nav_left li a');
                    $top_nav_left_li.on('mouseover', function() {
                        $top_nav_left_li.removeClass('active')
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
            });
            // 注册的效果
            $(function() {
                const $registrys = $('.registry-s');
                const $mask = $('.registry-mask-zhuce'); //出现遮罩层
                const $registry = $('.registry'); //出现注册框
                const $close = $('.close'); //点击按钮的事件
                //点击注册的效果
                $registrys.on('click', function() {
                        $mask.css({
                            display: 'block'
                        });
                        $registry.css({
                            display: 'block'
                        });

                    })
                    // 点击叉号消失
                $close.on('click', function() {
                    $mask.css({
                        display: 'none'
                    });
                    $registry.css({
                        display: 'none'
                    });
                })
            });
            // 登录的效果
            $(function() {
                const $mask = $('.login-mask-zhuce');
                // const $close = $('.close'); //点击按钮的事件
                const $logins = $('.login-s'); //点击登录的事件
                const $login = $('.login');
                const $close = $('.close');
                console.log($close);
                // 点击登录的效果
                $logins.on('click', function() {
                        $mask.css({
                            display: 'block'
                        });
                        $login.css({
                            display: 'block'
                        });
                    })
                    // 点击叉号的效果
                $close.on('click', function() {
                    $mask.css({
                        display: 'none'
                    });
                    $login.css({
                        display: 'none'
                    });
                })
            });
            // $(function() {
            //     const $mask = $('.login-mask-zhuce');
            // })
        }
    }
})