define(['jquery'], function() {
    return {
        init: function() {
            const $list = $('.list');
            //获取元素来渲染数据
            $.ajax({
                    url: 'http://localhost/fengqu/php/fengqu.php',
                    dataType: 'json',
                })
                //得到数据进行渲染
                .done((data) => {
                    let $renderdata = data;
                    console.log(data);
                    let $strhtml = ''; //拼接字符串
                    $.each($renderdata, function(index, value) {
                        //拼接渲染

                        $strhtml += `
                            <li >
                                    <a href="indexs.html?sid=${value.sid}">
                                        <img class="lazy" data-original="${value.url}" width="200" height="200" />
                                        <p>${value.title}</p>
                                        <span>￥${value.price}</span>
                                    </a>
                            </li>
                            `;

                    });
                    // 将渲染的数据追加
                    $list.html($strhtml);
                    // 懒加载效果
                    $("img.lazy").lazyload({
                        effect: "fadeIn" //图片显示方式
                    });
                    array_default = []; //排序前的li数组
                    array = []; //排序中的数组
                    prev = null; //排序前的价格
                    next = null; //排序后的价格
                    //将li元素加到数组中去，遍历来实现，因为排序的过程是需要数据的所以要写在done的方法里面的
                    $('.list li').each(function(index, element) {
                        array[index] = $(this);
                        array_default[index] = $(this);
                    });
                })
                //分页
            $('.page').pagination({
                pageCount: 3, //总的页数
                jump: true, //是否开启跳转到指定的页数，布尔值。
                coping: true, //是否开启首页和尾页，布尔值。
                prevContent: '上一页',
                nextContent: '下一页',
                homePage: '首页',
                endPage: '尾页',
                callback: function(api) {
                    console.log(api.getCurrent()); //获取的页码给后端
                    $.ajax({
                        url: 'http://localhost/fengqu/php/listdata.php',
                        data: {
                            page: api.getCurrent()
                        },
                        dataType: 'json'
                    }).done(function(data) {
                        //拼接渲染
                        let $strhtml = '<ul>';
                        $.each(data, function(index, value) {
                            $strhtml += `
                            <li>
                                <a href="detail.html?sid=${value.sid}" target="_blank">
                                    <img src="${value.url}"/>
                                    <p>${value.sid}${value.title}</p>
                                    <span class="price">￥${value.price}</span>
                                    <span>${value.sailnumber}</span>
                                </a>
                            </li>
                        `;
                        });
                        $strhtml += '</ul>';
                        $list.html($strhtml);

                        array_default = []; //排序前的li数组
                        array = []; //排序中的数组
                        prev = null;
                        next = null;

                        //将页面的li元素加载到两个数组中
                        $('.list li').each(function(index, element) {
                            array[index] = $(this);
                            array_default[index] = $(this);
                        });
                    })
                }
            });
            //点击按钮进行排顺序，但是每次排的时候是需要获取数据的
            $('button').eq(0).on('click', function() {
                $.each(array_default, function(index, value) {
                    $('.list ul').append(value);
                });
                return;
            });
            $('button').eq(1).on('click', function() {
                for (let i = 0; i < array.length - 1; i++) {
                    for (let j = 0; j < array.length - i - 1; j++) {
                        prev = parseFloat(array[j].find('.price').html().substring(1));
                        next = parseFloat(array[j + 1].find('.price').html().substring(1));
                        //通过价格的判断，改变的是li的位置。
                        if (prev > next) {
                            let temp = array[j];
                            array[j] = array[j + 1];
                            array[j + 1] = temp;
                        }
                    }
                }
                //清空原来的列表，将排序后的数据添加上去。
                //empty() : 删除匹配的元素集合中所有的子节点。
                // $('.list ul').empty();//清空原来的列表
                //这里能够省略empty
                //append在追加的时候，如果追加的是jquery的元素对象，而jquery元素对象在你追加的元素中存在，直接取出存在的元素，从后面追加。
                //如果追加的是内容结构，依然和appendChild一样，后面继续追加。
                $.each(array, function(index, value) {
                    console.log(value); //n.fn.init [li, context: li]
                    $('.list ul').append(value);
                });
            });
            $('button').eq(2).on('click', function() {
                for (let i = 0; i < array.length - 1; i++) {
                    for (let j = 0; j < array.length - i - 1; j++) {
                        prev = parseFloat(array[j].find('.price').html().substring(1));
                        next = parseFloat(array[j + 1].find('.price').html().substring(1));
                        //通过价格的判断，改变的是li的位置。
                        if (prev < next) {
                            let temp = array[j];
                            array[j] = array[j + 1];
                            array[j + 1] = temp;
                        }
                    }
                }
                //清空原来的列表，将排序后的数据添加上去。
                //empty() : 删除匹配的元素集合中所有的子节点。
                // $('.list ul').empty();//清空原来的列表
                $.each(array, function(index, value) {
                    console.log(value);
                    $('.list ul').append(value);
                });
            })


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
})