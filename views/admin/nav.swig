<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">Express Demo</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li class="active">
                    <a href="/admin">管理面板
                        <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li>
                    <a href="/admin/post/list">我的文章</a>
                </li>
                <li>
                    <a href="/admin/post/add">添加文章</a>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    {% if userInfo %}
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        你好
                        <span style="color:#337ab7">{{userInfo.name}}</span>
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="/logout">退出</a>
                        </li>
                    </ul>
                    {% else %}
                    <a href="/login" class="btn btn-link" style="color:#337ab7">登录</a>
                    {% endif %}
                </li>
            </ul>
        </div>
    </div>
</nav>