//首页进行渲染的模块
define([], function() {
    return {
        init: function() {
            const $list = $('.main_day_left ');
            $.ajax({
                    url: 'http://192.168.13.65/fengqu/php/fengqu.php',
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
                                    <a href="indexs.html?sid=${value.sid}">
                                        <img class="imgs" data-original="${value.url}" width="200" height="200" />
                                        <p>${value.title}</p>
                                        <span>￥${value.price}</span>
                                    </a>
                            </li>
                            `;
                        }
                    });
                    $list.html($strhtml);
                    //懒加载效果
                    // $("img.lazy").lazyload({
                    //     effect: "fadeIn" //图片显示方式
                    // });
                });
        }
    }
});