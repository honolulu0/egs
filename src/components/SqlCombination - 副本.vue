<template>
	<el-container>
		<el-header>
			<el-row type="flex" justify="start" class="row-bg">
				<el-col :span="1">
					<el-select style='width:260px' @change='change_time' v-model="time_id" placeholder="请选择查询第几次导入的数据">
						<el-option v-for="item in options_times" :key="item.value" :label="'第 '+item.label+' 次'" :value="item.value">
						</el-option>
					</el-select>
				</el-col>
			</el-row>
		</el-header>
		<el-container>

			<el-main>

				<el-row type="flex" class="row-bg">
					<el-col :span="12">
						<el-row type="flex" justify="center">
							<el-col :span="20">
								可以选择的属性标签
								<el-divider content-position="left">{{tabs_label}}</el-divider>
							</el-col>
						</el-row>
						<el-row type="flex" justify="center">
							<el-col :span="20">
								<el-button v-for="item in options_FieldName" :label="item.label" :key="item.value" style="margin-bottom: 20px;"
								 @click="click_fieldname(item)" type="primary">
									{{item.label}}
								</el-button>
							</el-col>
						</el-row>
					</el-col>
					<!-- 	<el-col :span="1" style='border-left:#909399 1px solid; '>
					</el-col> -->
					<el-col :span="12" style='border-left:#909399 1px solid; '>
						<!-- ------------------------------------------ -->
						<div id='ccc'>
							<el-row type="flex" justify="center">
								<el-col :span="20">
									<el-tabs style="height: 100%;">
										<el-tab-pane label="组合筛选查询">

											<el-tabs @tab-click='tabClick' type="border-card" style="height: 100%;">
												<el-tab-pane label="选择想要呈现的标签">
													<el-card class="box-card">
														<div slot="header" class="clearfix">
															<span>选择想要呈现的标签</span>
														</div>
														<div class="text item">
															<el-tag @close="handleDelete(tag)" v-for="tag in tags_select" :key="tag" closable>
																{{tag}}
															</el-tag>
														</div>
													</el-card>
												</el-tab-pane>

												<el-tab-pane label="设置特定筛选条件">
													<el-card class="box-card">
														<div slot="header" class="clearfix">
															<span>设置特定筛选条件</span>

														</div>
														<div class="text item">
															<el-tag @close="handleDelete(tag)" v-for="tag in tags_where" :key="tag" closable>
																{{tag}}
															</el-tag>
														</div>
													</el-card>
												</el-tab-pane>

												<el-tab-pane label="设置相同属性分组">
													<el-card class="box-card">
														<div slot="header" class="clearfix">
															<span>把相同属性合并成一组</span>
														</div>
														<div class="text item">
															<el-tag @close="handleDelete(tag)" v-for="tag in tags_group" :key="tag" closable>
																{{tag}}
															</el-tag>
														</div>
													</el-card>

												</el-tab-pane>

												<el-tab-pane label="设置分组内的统计与计算">

													<el-card class="box-card">
														<div slot="header" class="clearfix">
															<span>对每一个分组内进行统计计算</span>
														</div>
														<div class="text item">
															<el-tag @close="handleDelete(tag)" v-for="tag in tags_group" :key="tag" closable>
																{{tag}}
															</el-tag>
														</div>
													</el-card>
												</el-tab-pane>

												<el-tab-pane label="设置结果排序方式">
													<el-card class="box-card">
														<div slot="header" class="clearfix">
															<span>设置排序方式</span>

														</div>
														<div class="text item">
															<el-tag @close="handleDelete(tag)" v-for="tag in tags_where" :key="tag" closable>
																{{tag}}
															</el-tag>
														</div>
													</el-card>
												</el-tab-pane>

												<el-button type="primary" round size="medium">submit</el-button>
											</el-tabs>

										</el-tab-pane>
										<el-tab-pane label="SQL语句查询">
											<el-card class="box-card">
												<div slot="header" class="clearfix">
													<span>填写SQL查询</span>
													<el-button style="float: right; padding: 3px 5px" size="medium">submit</el-button>
												</div>
												<div class="text item">
													<el-input type="textarea" :autosize="{ minRows: 2}" placeholder="请输入内容" v-model="textarea_SET_SQL">
													</el-input>
												</div>
											</el-card>
										</el-tab-pane>
									</el-tabs>
								</el-col>
							</el-row>
						</div>
						<!-- ------------------------------------------ -->
					</el-col>
				</el-row>




				<el-drawer size='50%' @close='drawerBeforeClose' :visible.sync="drawer" :with-header="false">

					<div>请选择您想指定的值</div>
					<el-select style='margin-top: 20px;width:80% ' v-model="checked_FieldNames" multiple placeholder="请选择">
						<el-option v-for="item in options_Field_Category" :key="item.val" :label="item.val" :value="item.val">
						</el-option>
					</el-select>

					<!-- 		<el-checkbox-group v-model="checked_FieldNames" size="medium" <el-checkbox-button v-for="item in options_Field_Category"
	  				 :key="item.val" :label="item.val">{{item.val}}</el-checkbox-button>
	  				</el-checkbox-group> -->


				</el-drawer>

			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import CATEGORYCONSTANT from '../constant/categoryConstant.js'
	export default {
		name: 'SqlCombination',
		data() {
			return {
				options_times: [{
					"label": "1",
					"value": '1'
				}],
				algorithms: [{
						"label": "同一分组内求和",
						"value": 'sum'
					}, {
						"label": "同一分组内求最大值",
						"value": 'max'
					}, {
						"label": "同一分组内求最小值",
						"value": 'min'
					},
					{
						"label": "同一分组内求平均值",
						"value": 'avg'
					}
				],
				options_FieldName: [],
				time_id: '',
				checked_FieldNames: [],
				drawer: false,
				fieldname_id: '',
				options_Field_Category: [],
				checked_Field_Category_vals: [],
				whereMap: new Map(),
				textarea_SET_SQL: '',
				tabs_index: 0,
				tabs_label: '选择想要呈现的标签',
				tags_select: new Map(),
				tags_where: new Map(),
				tags_group: new Map(),

			}
		},
		methods: {
			tabClick(e) {
				this.tabs_index = e.index
				this.tabs_label = e.label

			},
			click_fieldname(item) {
				console.log(this.tabs_index)
				// if (this.tabs_index === 0) { 
				// } else if (this.tabs_index === 1) {
				// 	this.drawerEject(item.value)
				// } else if (this.tabs_index === 2) { 
				// }
				this.fieldname_id = item.value
				this.addTagList(item)
			},
			handleDelete(tag) {
				if (this.tabs_index == 0) {
					this.dynamicTags = this.tags_select
				} else if (this.tabs_index == 1) {
					this.dynamicTags = this.tags_where
					this.whereMap.delete (this.fieldname_id) 
				} else if (this.tabs_index == 2) {
					this.dynamicTags = this.tags_group
				} else {
					this.warningMessage('未知错误')
				}
				this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
			},
			addTagList(item) {
				var tags_map = new Map()
				if (this.tabs_index == 0) {
					tags_map = this.tags_select
				} else if (this.tabs_index == 1) {
					this.drawerEject()
					tags_map = this.tags_where
				} else if (this.tabs_index == 2) {
					tags_map = this.tags_group
				} else {
					this.warningMessage('未知错误')
				}
				if (tags_map.has(item.value) ) {
					tags_map.set(item.value,item)
				}

				console.log(tags_map)
			},
			drawerBeforeClose() {
				console.log(this.checked_FieldNames)
				if (this.checked_FieldNames.length > 0) {
					this.whereMap.set(this.fieldname_id, this.checked_FieldNames)
				}

				this.checked_FieldNames = [] //清空上次选择
			},
			drawerEject() {

				if (parseInt(this.fieldname_id) < 1) {
					return
				}
				if (this.whereMap.has(this.fieldname_id)) {
					this.checked_FieldNames = this.whereMap.get(this.fieldname_id)
				}
				this.getCategory(this.fieldname_id)
				console.log(this.whereMap)
				console.log(this.fieldname_id)
				setTimeout(() => {
					this.drawer = true
				}, 500)

			},


			change_time() {
				if (parseInt(this.time_id) > 0) {
					this.getFieldName(this.time_id)
				}
			},

			getFieldName(time_id) {
				this.$api.queryFieldName({
					'time_id': time_id
				}).then(res => {
					if (res.code == 1) {
						this.options_FieldName = res.data
					}
					// 执行某些操作      
				}).catch(err => {
					// 错误
				})
			},
			getCategory(value_Field_id) {
				this.$api.queryCategory({
					'value_Field_name': this.options_FieldName[value_Field_id - 1].label,
					'value_Field_id': value_Field_id
				}).then(res => {
					console.log(res)
					if (res.code == 1) {
						this.options_Field_Category = res.data
					}
					// 执行某些操作      
				}).catch(err => {
					// 错误
				})
			},
			successMessage(message) {
				this.$message({
					message: message,
					type: 'success'
				});
			},

			warningMessage(message) {
				this.$message({
					message: message,
					type: 'warning'
				});
			},

		},
		created() {

		}

	}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.row-bg {
		padding: 10px 0;
	}

	.text {
		font-size: 14px;
	}

	.item {
		margin-bottom: 18px;
	}

	.text.item {
		min-height: 100px;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}

	.clearfix span {
		float: left;
	}

	.box-card {
		margin-bottom: 20px;
	}

	#ccc .el-row.is-justify-center.el-row--flex {
		margin-top: 6px;
	}
</style>
