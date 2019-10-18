var category = {
    getCate: function (options) {
        $.ajax({
            url: CATEGORY_SEARCH,
            success: options.success
        });
    },
    addCate: function (options) {
        $.ajax({
            url: CATEGORY_ADD,
            type: 'post',
            data: options.data,
            success: options.success
        });
    },
    editCate: function (options) {
        $.ajax({
            url: CATEGORY_EDIT,
            type: 'post',
            data: options.data,
            success: options.success
        });
    },
    delCate: function (options) {
        $.ajax({
            type: 'post',
            url: CATEGORY_DEL,
            data : options.data,
            success : options.success
        });
    },
    
};