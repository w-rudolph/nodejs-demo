{% extends './layout.swig' %} 
{% block title %} 添加文章 {% endblock %}
{% block content %}
<div class="container">
    <input type="hidden" id="post_id" value="{{post._id.toString()}}">
    <form>
        <ul class="text-danger" id="error_message" style="padding-left:15px; list-style-type: decimal;"></ul>
        <div class="form-group">
            <label for="post_title">标题</label>
            <input type="text" class="form-control" id="post_title" value="{{post.title}}" placeholder="标题">
        </div>
        <div class="form-group">
            <label for="post_summary">摘要(至少20个字)</label>
            <textarea class="form-control" id="post_summary" placeholder="摘要">{{post.summary}}</textarea>
        </div>
        <div class="form-group">
            <label for="post_content">内容(至少20个字)</label>
            <div id="post_content">{% autoescape %}{{post.content}}{% endautoescape %}</div>
        </div>
        <button id="post_submit" type="button" class="btn btn-default">提交</button>
    </form>
</div>
{% endblock %} 
{% block footer %} 
    {% include './summernote-editor.swig' %}
    <script src="/javascripts/admin/post-add.js"></script>
{% endblock %}