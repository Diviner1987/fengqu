//一些通过jquery和tool生成实例对象来用那些tool里面的函数方法来形成渲染，数组里面嘚的参数是tool和jquery，函数里面的参数是tool
! function() {
    //Ajax获取数据
    const $list = $('.main_day_left ');
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
                    <li>
                            <a href="indexs.html?sid=${value.sid}">
                                <img class="lazy" data-original="${value.url}" width="200" height="200" />
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
}()