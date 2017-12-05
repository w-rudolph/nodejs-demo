<h3>注册</h3>
{% if message %}
<span style="color:#f00;">{{ message }}</span>
{% endif %}
<form action="/register" method="post">
    用户名: <input name="name" type="text" value="{{name}}"><br>
    密码: <input name="password" type="text" value="{{password}}"><br>
    重复密码: <input name="repassword" type="text" value="{{repassword}}"><br>
    <button type="submit">提交</button>
</form>