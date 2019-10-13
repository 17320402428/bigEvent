//关于用户的入口
var user = {
    login: function (options) {
        $.ajax({
            type: 'post',
            url: USER_LOGIN,
            data: options.data,
            success: options.successs
        });
    },
    logout: function (options) {
        $.ajax({
            type: 'post',
            url: USER_LOGOUT,
            success: options.success
        });
    },
    getInfo: function (options) {
        $.ajax({
            url: USER_GETINFO,
            success: options.success
        });
    },
    info_get: function (options) {
        $.ajax({
            url: USER_GETXINXI,
            success : options.success
        })
    },
    info_edit: function (options) {
        $.ajax({
            type: 'post',
            data : options.data,
            url: USER_INFOEDIT,
            contentType: false,
            processData: false,
        })
    }
}