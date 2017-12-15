{% extends './layout.swig' %}

{% block title %} 管理后台 {% endblock %}

{% block head %} 
    <script type="text/javascript">
        var Config = {
            users: {{JSON.stringify(users)}}
        };
    </script>
{% endblock %}

{% block content %}
    <div id="app">
        <h1>管理后台</h1>
            <h4>Hello {{ userInfo.name }}</h4>
            {% if userInfo %}
                <a href="/logout">退出登录</a>
            {% endif %}
            <p>Welcome to 管理后台</p>

            {% for user in  users %}
                <h5>{{ user.name }} - {{ user.createTime | date('Y/m/d H:i:s', -480) }} - {{ user.updateTime | date('Y/m/d H:i:s', -480) }}</h5>
            {% endfor %}
    </div>
{% endblock %}