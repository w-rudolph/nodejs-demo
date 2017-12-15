$(document).ready(function () {
    // init editor
    $('#post_content').summernote({
        height: 300,
        lang: 'zh-CN',
        callbacks: {
            onInit: function(){
                $('.note-image-input').attr('accept', 'image/jpeg, image/jpg, image/png, image/gif');
            }
        }
    });

    // form submit
    $submitBtn = $('#post_submit');
    $errDisplay = $('#error_message');
    $submitBtn.on('click', function () {
        var postData = {
            id: $('#post_id').val(),
            title: $('#post_title').val(),
            summary: $('#post_summary').val(),
            content: $('#post_content').summernote('code')
        };
        var errMessage = [];
        if (!postData.title) {
            errMessage.push('请输入标题');
        }
        if (postData.summary.length < 20) {
            errMessage.push('摘要至少20个字');
        }
        if (postData.content.length < 20) {
            errMessage.push('内容至少20个字');
        }

        if (errMessage.length) {
            $errDisplay.html(errMessage.map(function (err) {
                return '<li>' + err + '</li>'
            }));
            return;
        }
        $errDisplay.html('');
        $.post('/admin/post/update', postData)
            .then(function (res) {
                if(res.error === 0){
                    location.href = '/admin/post/list';
                }
            })
    })
});