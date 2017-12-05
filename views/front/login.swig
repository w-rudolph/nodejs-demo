<h2>登录</h2>
{% if message %}
<span style="color:#f00;">{{ message }}</span>
{% endif %}
<form action="/login" method="post">
    用户名: <input name="name" type="text" value="{{name}}"><br>
    密码: <input name="password" type="text" value="{{password}}"><br>

    <button type="submit">提交</button> 还没有账号？去<a href="/register">注册</a>
</form>