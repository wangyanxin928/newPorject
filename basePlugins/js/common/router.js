// ================================================================
//  author:wyx
//  createDate: 2017/08/31
//  description: 基础组件 路由定义
//  ===============================================================
define(function (require) {
    "use strict";
    return Backbone.Router.extend({
        routes: {
            "": "instructions",
            /*wyx-项目是用说明书，项目完成后删除此 start*/
            "instructions":"instructions",
            /*wyx-项目是用说明书，项目完成后删除此 end*/

            // 添加模块请在此添加 start

            /*wyx-添加模块dome*/
            "baseDome":"baseDome",

            // 添加模块请在此添加 end
        },
        /*wyx-项目是用说明书，项目完成后删除此 start*/
        instructions:function(){
            require(["pages/instructions"], function (view) {
                var _view = new view({
                    model: {
                        ruleinfo: ""
                    }
                });
                $('.page-content-wrapper').html(_view.$el);
                _view.afterRender();
            })
        },
        /*wyx-项目是用说明书，项目完成后删除此 end*/

        // 添加任务请在此添加 start
        /*模块分块*/
        baseDome:function(){
            require(["pages/baseDome"], function (view) {
                var _view = new view({
                    model: {
                        ruleinfo: ""
                    }
                });
                $('.page-content-wrapper').html(_view.$el);
                _view.afterRender();
            })
        }
    })
})