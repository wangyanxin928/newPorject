define(function (require) {
    "use strict";
    var tpl = require('text!tpl/putong_content.html'),
        template = _.template(tpl), _this;
    var MyValidate = require('validate');
    return Backbone.View.extend({
      	className:"page-content",
        initialize: function () {
            _this = this;
            this.render();
            this.validateFormTextLable();
        },
        render: function () {
            this.$el.html(template(this.model));
            return this;
        },
        events: {
            "click .btn.blue": "alertTitle",
            "click .btn.default": "alertConfirm",
            "click [data-target='#text_lable']": "alertTextLable"
        },
        //验证表单【文本+lable】
        validateFormTextLable: function () {
            /*http://www.runoob.com/jquery/jquery-plugin-validate.html
             默认校验规则
             序号	规则	描述
             1	required:true	必须输入的字段。
             2	remote:"check.php"	使用 ajax 方法调用 check.php 验证输入值。
             3	email:true	必须输入正确格式的电子邮件。
             4	url:true	必须输入正确格式的网址。
             5	date:true	必须输入正确格式的日期。日期校验 ie6 出错，慎用。
             6	dateISO:true	必须输入正确格式的日期（ISO），例如：2009-06-23，1998/01/22。只验证格式，不验证有效性。
             7	number:true	必须输入合法的数字（负数，小数）。
             8	digits:true	必须输入整数。
             9	creditcard:	必须输入合法的信用卡号。
             10	equalTo:"#field"	输入值必须和 #field 相同。
             11	accept:	输入拥有合法后缀名的字符串（上传文件的后缀）。
             12	maxlength:5	输入长度最多是 5 的字符串（汉字算一个字符）。
             13	minlength:10	输入长度最小是 10 的字符串（汉字算一个字符）。
             14	rangelength:[5,10]	输入长度必须介于 5 和 10 之间的字符串（汉字算一个字符）。
             15	range:[5,10]	输入值必须介于 5 和 10 之间。
             16	max:5	输入值不能大于 5。
             17	min:10	输入值不能小于 10。*/
            var me = this;
            var formId = "schoolBaseForm";
            var opration = {
                rules: {
                    schoolName: {
                        required: true,
                        minlength: 5,
                        maxlength: 20
                    },
                    agree: "required"
                },
                messages: {
                    schoolName: {
                        required: "请输入学校名称`111",
                        minlength: "学校名称最少5个文字",
                        maxlength: "学校名称最多20个文字"
                    },
                    agree: "请选择两个主题"
                }
            };
            BasePluginsUTIL.ValidateForm(me, formId, opration);
        },
        //弹出提示
        alertTitle: function (e) {
            //执行验证
            $("#schoolBaseForm").submit();
            if (!$("#schoolBaseForm").valid()) {
                return;
            }
            Pace.restart();
//            Success
//            Info
//            Warning
//            Error
            BasePluginsUTIL.toastrAlert('error', '提32示', '信息保存成功！');
        },
        //取消按钮调用提示框
        alertConfirm: function () {
            //弹出层弹出之前的事件
            /*
             show.bs.modal	在调用 show 方法后触发。
             shown.bs.modal	当模态框对用户可见时触发（将等待 CSS 过渡效果完成）。
             hide.bs.modal	当调用 hide 实例方法时触发。
             hidden.bs.modal	当模态框完全对用户隐藏时触发。*/
            $('#confirm').on('shown.bs.modal', function () {
                //点击确定按钮事件
                $("#yesCheck").unbind('click').bind("click", function () {
                    BasePluginsUTIL.toastrAlert('success', '提示', '您点击了“是”！');
                });
                //点击取消按钮事件
                $("#noCheck").unbind('click').bind("click", function () {
                    BasePluginsUTIL.toastrAlert('success', '提示', '您点击了“否”！');
                });
            })

        },
        //关于文本+lable的弹出层
        alertTextLable: function () {
            //弹出层弹出之前的事件
            $('#text_lable').bind('shown.bs.modal', function () {
                $("#text_lable_content").html("关于文本+lable的弹出层");
                //点击确定按钮事件
                $("#yesLook1").unbind('click').bind("click", function () {
                    BasePluginsUTIL.toastrAlert('success', '提示', '您点击了“不看了”！');
                });
                //点击取消按钮事件
                $("#noLook1").unbind('click').bind("click", function () {
                    BasePluginsUTIL.toastrAlert('success', '提示', '您点击了“再看看”！');
                });
            })

        }


    });
});