{% extends './layout.swig' %}

{% block title %} 管理后台 {% endblock %}

{% block content %}
    <div id="app">
        <h4>Hello {{ userInfo.name}}</h4>
        {% if userInfo %}
            <a href="/logout">退出登录</a>
        {% endif %}
        <p>Welcome to 管理后台</p>
        <el-button>Hello</el-button>
        <span v-text="message"></span>
    </div>
{% endblock %}