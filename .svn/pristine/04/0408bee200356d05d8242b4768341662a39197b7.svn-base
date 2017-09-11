// ================================================================
//  author:文霞
//  createDate: 2017/07/14
//  description: 基础组件——文件上传
//  ===============================================================
define(function (require) {
    "use strict";
    var tpl = require('text!tpl/baseUploadFile.html'),
        template = _.template(tpl), _this;
    return Backbone.View.extend({
        className:"page-content",//如果不添加会document中多一级div
        initialize: function () {
            _this = this;
            this.render();
        },
        render: function () {
            this.$el.html(template(this.model));
            return this;
        },
        events: {
            "change #fileUpload":"fileSelect"
        },
        afterRender:function(){
            $("#fileListWrapper ul").delegate("a>i","click",function(e){
                e.stopPropagation();
                if($("#fileListWrapper ul>li").length==1){
                    $("#fileListWrapper").hide();
                }
                $(e.target).closest("li").remove();
            });
        },
        fileSelect:function(e){
            BasePluginsUTIL.UploadFile(e,function(result,file){
                var currLi=$('<li>');
                var currA=$('<a>');
                currA.attr("src",result);
                currA.html(file.name+'<i class="fa fa-times"></i>');
                currLi.html(currA);
                $("#fileListWrapper ul").append(currLi);
                if($("#fileListWrapper ul>li").length==1){
                    $("#fileListWrapper").show();
                }
            });
        }
    });
});
