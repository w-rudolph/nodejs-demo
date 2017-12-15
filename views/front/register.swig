{% extends './layout.swig' %}

{% block content %}
<div id="register" class="container">
    <div class="title">注册</div>
    <form class="form-horizontal" role="form" method="post" action="/register">
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label error"></label>
            <div class="col-sm-10" style="color:#f00;">{{ message }}</div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label">用户名</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" name="name" value="{{ name }}" placeholder="请输入用户名">
            </div>
        </div>
        <div class="form-group">
            <label for="lastname" class="col-sm-2 control-label">密码</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" name="password" value="{{ password }}" placeholder="请输入密码">
            </div>
        </div>
        <div class="form-group">
            <label for="lastname" class="col-sm-2 control-label">重复密码</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" name="repassword" value="{{ repassword }}" placeholder="请再次输入密码">
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-primary">注册</button> <a href="/login" class="btn btn-link">已有账号？去登录</a>
            </div>
        </div>
    </form>
</div>
<style>
   #register{
       width: 550px;
       border: 1px solid #ddd;
       border-radius: 5px;
       margin-top: 50px;
       background: #fff;
       box-shadow: 2px 2px 3px #d2cece;
   }
   #register .title{
       text-align: center;
       font-weight: bold;
       font-size: 20px;
       padding: 10px;
   }
   body{
       background: #ddd;
   }
</style>
{% endblock %}