<!DOCTYPE html>
<html>
    <head>
        <title>{{title}}</title>
        <link rel='stylesheet' href='/stylesheets/style.css' />
    </head>
    <body>
        {% if userInfo %}
            <a href="/logout">退出</a>
        {% else %}
            <a href="/login">登录</a>
        {% endif %}
        <h1>{{title}}</h1>
        <p>Welcome to {{title}}</p>
    </body>
</html>