// ================================================================
//  author:文霞
//  createDate: 2016/09/06
//  description: 基础组件——dataTable大列表
//  ===============================================================
define(function (require) {
    "use strict";
    var tpl = require('text!tpl/baseDataTableNew.html'),
        template = _.template(tpl), _this;
    var DataTableNew = require('plugins/DataTableView_new/DataTable');
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
        afterRender:function(){
        	//加载datatable中数据
            this.initDataTableData();
            //初始化删除数据弹层
            this.initDeleteModal();
            //待删除的id
            this.needDeleteId="";
            //编辑的主键id,编辑和详情
            this.editID="";
        },
        events: {
            
        },
        initDataTableData:function(){
        	var me=this;
			var options = {
				// 数据来源方法
				data : {
					// 异步数据源
					sync : function(syncOptions, callback) {
						//下面注释的是获取异步数据方法
			            /*var PAGEJSON={PageIndex: syncOptions.data.page, PageSize: syncOptions.data.rows};
			           
			        	require(['btcommon/ajax'], function (_ajax) {
	                        _ajax.ajaxForList(TeacherUTIL.CONFIG.getWorkloadList, "PAGEJSON=" + JSON.stringify(PAGEJSON), function (_d) {
			                    callback && callback({rows:_d.ResultData,total:_d.PageCount});
	                        })
	                    });*/
	                    setTimeout(function(){
	                    	var dataList=[{ID:'8787367361',XM:'张月月',XB:2,ZW:'技术人员'},
		                    {ID:'8787367362',XM:'王廷羲',XB:1,ZW:'技术人员'},
		                    {ID:'8787367363',XM:'李文霞',XB:2,ZW:'技术人员'},
		                    {ID:'8787367364',XM:'白宇熙',XB:1,ZW:'技术人员'},
		                    {ID:'8787367364',XM:'白宇熙',XB:1,ZW:'技术人员'}
		                    ];
		                    var dataCount=4;
		                    callback && callback({rows:dataList,total:dataCount});
	                    },200);
	                    
					},
					// 数据列表的索引
					dataArrayIndex : 'rows',
					// 分页参数
					paging : {
						enable : true,
						// 每页数据条数
						pageSize : 5
					},
					collection : Backbone.Collection//DataSourceCollection
				},
				//显示序号列
				displayIndex:true,
				//列显示循序：
				columns : [
							{
								text : "编号",
								dataIndex : "ID"
							},
							{
								text : "姓名",
								dataIndex : "XM"
							},
							{
								text : "性别",
								dataIndex : "XB",
								render:function(value, row){//将类型转为文字									
									return value==1?"男":"女";
								}
							},
							{
								text : "职位",
								dataIndex : "ZW"
							},
							{
								text : "操作",
								render:function(value, row){
									return "<a data-id='"+ row["ID"] +"' data-name='"+ row["XM"] +"' class='editData btn btn-outline btn btn-xs green' style='width:50px;'>编辑 </a> <a data-id='"+ row["ID"] +"'href='javascript:;' class='btn btn-outline btn btn-xs red deleteData' style='width:50px;' data-target='#confirm' data-toggle='modal'>删除 </a>";
								}
							}],
				// 默认多选模式
				"selModel" : {
					// single/multi,为空则不显示
					mode :  "multi",
					// 是否显示行的checkbox
					checkbox : true,
					//定义选中的数据列表
					selectData:{
						keyword:"XM",
						selectDataValue:["张月月","白宇熙"]//["1","232423","232424","232432","232435"]
					},
					keepCheckState:{//保持勾选状态才能获取全部的勾选数据
						keepCheck:true,
						keepStateKeyword:"XM"
					}
				},
				//表头、表数据初始化完成后调用  
				initTableEventsCall : function(){
					//为table中的删除按钮添加事件：
					me.$(".deleteData").click(function(_event){
                        _event.stopPropagation();
						var _event = _event || event;
                        var row = _event.srcElement?_event.srcElement:_event.target;
                        var $this=$(row);
                        me.needDeleteId=$this.attr("data-id");
                        _this.$('#confirm').modal('show');
					});
                    //为table中的编辑按钮添加事件：
                    me.$(".editData").click(function(_event){
                        _event.stopPropagation();
                        var _event = _event || event;
                        var row = _event.srcElement?_event.srcElement:_event.target;
                        var $this=$(row);
                        me.editID=$this.attr("data-id");
//                      location.href="#workLoadContent/2/"+ me.editID;
						BasePluginsUTIL.toastrAlert('success', '提示', "可以跳转到编辑页了："+me.editID);
                    });
                    me.$(".table-responsive").find("tbody").find("tr").click(function(_event){
                        _event.stopPropagation();
                        var currentTr=event.target;
                        while(currentTr.tagName!="TR"){
                        	currentTr=currentTr.parentNode;
                        }
                        var $this=$(currentTr);

//                      if($this.find(".editData").length>0){
//                          me.editID=$this.find(".editData").attr("data-id");
//                      }else{
//                          me.editID=$this.parents("tr").find(".editTeacher").attr("data-id");
//                      }
//                      location.href="#workLoadContent/0/"+ me.editID;

                        if($this.find(".editData").length>0){
                            var editName=$this.find(".editData").attr("data-name");
                            BasePluginsUTIL.toastrAlert('success', '提示', "选中行："+editName);
                        }
                    });
				}
			};
			this.dataTable = new DataTableNew(options);
			// 渲染至页面
			this.$("#dataTableWrapper").html(this.dataTable.$el);
       },
       initDeleteModal:function(){
       		var me=this;
       		this.$('#confirm').on('shown.bs.modal', function () {
                //点击确定按钮事件
                $("#yesCheck").unbind('click').bind("click", function () {
                	
                	BasePluginsUTIL.toastrAlert('success', '提示', "执行删除："+me.needDeleteId);
					//执行删除
//					require(['btcommon/ajax'], function (_ajax) {
//		                _ajax.ajaxFunc(TeacherUTIL.CONFIG.deleteWorkload, "ID=" + me.needDeleteId, function (_d) {
//		                    var data = _d;
//		
//		                    TeacherUTIL.toastrAlert('success', '提示', '信息删除成功！');
//		                    me.needDeleteId="";
//		                    me.dataTable.render();
//		                })
//		            });

                });
            })
       }
    });
});