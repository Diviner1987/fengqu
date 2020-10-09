<?php
include "conn.php";


//检测用户名是否重名
if (isset($_POST['phone'])) {
    $user = $_POST['phone'];
    $result = $conn->query("select * from registry where phone='$user'");
    if ($result->fetch_assoc()) { //存在
        echo true; //1
    } else {
        echo false; //空
    }
}

//接收前端表单提交的数据
if (isset($_POST['submit'])) {
    $username = $_POST['phone'];
    $password = sha1($_POST['password']);
    $conn->query("insert registry values(null,'$username','$password',NOW())");
    header('location:http://localhost/fengqu/src/login.html');
}
