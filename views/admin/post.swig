{% extends './layout.swig' %}

{% block title %} 管理后台 {% endblock %}

{% block content %}
    <div class="container" id="posts">
        {% for post in posts %}
            <div class="post-item">
                {{ post.title }} - {{ post.user.name }} {{ post.createTime | date('Y/m/d H:i:s', -480) }} - {{ post.updateTime | date('Y/m/d H:i:s', -480) }}
                <a class="btn btn-link" href="/admin/post?id={{post._id.toString()}}">编辑</a>
            </div>
        {% endfor %}
    </div>
{% endblock %}