define([], function() {
    return {
        init: function() {
            let $user = $('.phone');
            let $usernameflag = true;
            $user.on('blur', function() {
                $.ajax({
                    type: 'post',
                    url: 'http://localhost/fengqu/php/registry.php',
                    data: {
                        phone: $user.val()
                    }
                }).done(function(result) {
                    if (!result) { //不存在
                        $('span').html('√').css('color', 'green');
                        $usernameflag = true;
                    } else {
                        $('span').html('该手机号已经存在').css('color', 'red');
                        $usernameflag = false;
                    }
                })
            });

            $('.registry').on('submit', function() {
                if ($user.val() == '') {
                    $('span').html('密码或手机号不能为空').css('color', 'red');
                    $usernameflag = false;
                }
                if (!$usernameflag) {
                    return false; //阻止提交
                }
            });
        }
    }
})