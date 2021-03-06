/**
 * the main entry point
 */
require.config({
    baseUrl: "../js",
    paths: {
        common: 'common',
        code: 'common/code',
        //路径
        pages: '../basePlugins/js/pages',
        tpl: '../basePlugins/tpl',
        btcommon: '../basePlugins/js/common',

        //第三方js
        // jQuery
        jquery: 'jquery.min',
        jquerymigrate: 'plugins/jquery-migrate.min',
        jqslimscroll: 'plugins/jquery-slimscroll/jquery.slimscroll.min',

        //text
        text: 'lib/text',
        // underscore
        underscore: 'lib/underscore-1.6.0.min',
        understr: 'lib/underscore.string',

        // Backbone
        backbone: 'lib/backbone-1.1.2.min',

        // BootStrap
        bootstrap: 'plugins/bootstrap/js/bootstrap.min',

        app: "lib/app",
        layout: "plugins/layout/scripts/layout",
        metronic: "plugins/layout/scripts/metronic",
        quicksidebar: "plugins/layout/scripts/quick-sidebar",


        //---------------------------组件---------------------------------------
        // 选择日期
        bootstrapdatepicker: 'plugins/bootstrap-datepicker/js/bootstrap-datepicker.min',
        'daterangepicker_cn': 'plugins/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        //单选复选
        icheck: 'plugins/icheck/icheck.min',
        //下拉选择框
        bootstrapselect: 'plugins/bootstrap-select/bootstrap-select.min',
        //提示框弹出
        toastr: 'plugins/bootstrap-toastr/toastr.min',
        //提示框弹出 弹出框
        modalmanager: 'plugins/bootstrap-modal/js/bootstrap-modalmanager',
        modal: 'plugins/bootstrap-modal/js/bootstrap-modal',
        // 进度条
        pace: 'plugins/pace/pace',

        // charts  加载
        jqueryflot: 'plugins/flot/jquery.flot.min',  //charts
        jqueryflotresize: 'plugins/flot/jquery.flot.resize.min',  //charts
        jqueryknob: 'plugins/jquery-knob/js/jquery.knob',  //charts
        flotcharts: 'lib/charts-flotcharts',  //flotcharts
        //表单验证
        validate: 'plugins/jquery-validation/js/jquery.validate',
        'bootstrap-switch': 'plugins/bootstrap-switch/js/bootstrap-switch',
        'cubeportfolio': 'plugins/cubeportfolio/js/jquery.cubeportfolio.min',

        // 图片剪切
		cropper:"plugins/cropper/js/cropper",

        //文件上传插件 by wenxia
        plupload:'plugins/ossupload/plupload-2.1.2/js/plupload.full.min',
        base64:'plugins/ossupload/base64',
        myossupload:'plugins/ossupload/myossupload',

    //    复制页面代码功能
        Clipboard: 'plugins/clipboard/clipboard.min',

    },
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        jquerymigrate: {
            deps: ['jquery']
        },
        pulsate: {
            deps: ['jquery']
        },
        jqslimscroll: {
            deps: ['jquery']
        },
        bootstrap: {
            deps: ['jquery']
        },
        app: {
            deps: ['jqslimscroll']
        },
        layout: {
            deps: ['app']
        },
        daterangepicker_cn: {
            deps: ['bootstrapdatepicker']
        },
        toastr: {
            deps: ['jquery']
        },
        flotcharts: {
            deps: ['jqueryflot', 'jqueryflotresize', 'jqueryknob']
        },
        cubeportfolio: {
            deps: ['jquery']
        }
    }
});
require(['common/util'], function () {

    require(['backbone', 'jquery', 'underscore', 'jquerymigrate', 'bootstrap', 'jqslimscroll', 'layout', 'metronic', 'quicksidebar', 'code'],
        function (Backbone, $, _) {
            //初始化所有组件依赖
            require([ 'toastr', 'bootstrapdatepicker', 'daterangepicker_cn', 'icheck', 'bootstrapselect', 'modalmanager', 'modal', 'pace', 'validate',
                'bootstrap-switch', 'bootstrapdatepicker', 'daterangepicker_cn','Clipboard'], function (Toastr) {
                require(['btcommon/router', 'btcommon/util','btcommon/ajax'], function (Router) {
                    BasePluginsUTIL.handleInit();//用于初始化isRTL变量(从右到左显示)，下面初始化datepicker时用到
                    BasePluginsUTIL.handleOnResize();//在窗口大小调整之后初始化布局
                    BasePluginsUTIL.initValidate();//初始化所有验证规则
                    BasePluginsUTIL.initMenu();//初始化首页左侧菜单事件
//                  //初始化弹出提示
                    BasePluginsUTIL.toastr = Toastr;
                    //初始化进度条
                    /*
                     Pace.start：开始显示进度条，如果你不是使用AMD或者Browserify来加载模块的话，这个会默认执行。
                     Pace.restart：进度条重新加载以及显示。
                     Pace.stop：隐藏进度条以及停止加载。
                     Pace.track：监测一个或者多个请求任务。
                     Pace.ignore：忽略一个或者多个请求任务。*/
					Pace.start();
                    Metronic.init(); // init metronic core components
                    Layout.init(); // init current layout
                    QuickSidebar.init(); // init quick sidebar

					BasePluginsUTIL.FC.router = new Router();
                    Backbone.history.start();
                    
                })
            })

        });
    // }
})