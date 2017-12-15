{% extends './layout.swig' %}

{% block content %}
<div id="login" class="container">
    <div class="title">登录</div>
    <form class="form-horizontal" role="form" method="post" action="/login">
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
            <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-primary">登录</button> <a href="/register" class="btn btn-link">还没有账号？去注册</a>
            </div>
        </div>
    </form>
</div>
<style>
   #login{
       width: 550px;
       border: 1px solid #ddd;
       border-radius: 5px;
       margin-top: 50px;
       background: #fff;
       box-shadow: 2px 2px 3px #d2cece;
   }
   #login .title{
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