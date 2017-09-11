// ================================================================
//  author:w王燕欣
//  createDate: 2017/07/14
//  description: 基础组件——弹框提示
//  ===============================================================
define(function (require) {
    "use strict";
    var tpl = require('text!tpl/instructions.html'),
        template = _.template(tpl), _this;
    var Cropper = require('cropper');
    return Backbone.View.extend({
        className: "page-content",//如果不添加会document中多一级div
        initialize: function () {
            _this = this;
            this.render();
        },
        render: function () {
            this.$el.html(template(this.model));
            return this;
        },
        afterRender: function () {

        },
        events: {


        }

    });
});
