<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{% block title %}{% endblock %}</title>
    <link rel="stylesheet" href="https://cdn.bootcss.com/element-ui/2.0.5/theme-chalk/index.css"> 
    {% block head %}{% endblock %}
</head>

<body>
    {% block content %}{% endblock  %}
    <script src="https://cdn.bootcss.com/axios/0.17.1/axios.min.js"></script>
    <script src="https://cdn.bootcss.com/vue/2.4.4/vue.min.js"></script>
    <script src="https://cdn.bootcss.com/element-ui/2.0.5/index.js"></script>
    <script src="https://cdn.bootcss.com/element-ui/2.0.5/locale/zh-CN.min.js"></script>
    {% block footer %}{% endblock %}
</body>

</html>