<template>
	<div>
		<el-row type="flex" justify="start" class="row-bg">
			<el-col :span="1">
				<el-select style='width:260px' @change='change_time' v-model="time_id" placeholder="请选择查询第几次导入的数据">
					<el-option v-for="item in options_times" :key="item.value" :label="'第 '+item.label+' 次'" :value="item.value">
					</el-option>
				</el-select>
			</el-col>
		</el-row>
		<el-row type="flex" class="row-bg">

			<el-col :span="24">

				<el-button v-for="item in options_FieldName" :label="item.label" :key="item.value" style="margin-bottom: 20px;"
				 @click="drawerEject(item.value)" type="primary">
					{{item.label}}
				</el-button>

			</el-col>

		</el-row>

		<el-drawer size='50%' :visible.sync="drawer" :with-header="false">

			<div>请选择您需要的分类</div>
			<el-select style='margin-top: 20px;width:80% ' v-model="checked_FieldNames" multiple placeholder="请选择">
				<el-option v-for="item in options_Field_Category" :key="item.val" :label="item.val" :value="item.val">
				</el-option>
			</el-select>

			<!-- 		<el-checkbox-group v-model="checked_FieldNames" size="medium" <el-checkbox-button v-for="item in options_Field_Category"
				 :key="item.val" :label="item.val">{{item.val}}</el-checkbox-button>
				</el-checkbox-group> -->


		</el-drawer>

	</div>
</template>

<script>
	export default {
		name: 'SqlCombination',
		data() {
			return {
				options_times: [{
					"label": "1",
					"value": '1'
				}],
				options_FieldName: [],
				time_id: '',
				checked_FieldNames: [],
				drawer: false,
				options_Field_Category: [],
				checked_Field_Category_vals: []


			}
		},
		methods: {
			drawerEject(value_Field_id) {

				if (parseInt(value_Field_id) > 0) {
					this.getCategory(value_Field_id)
				}
				setTimeout(() => {
					this.drawer = true
				}, 500)

			},
			handleCheckedCitiesChange(value) {
				console.log(value)
				console.log(this.checked_FieldNames)
				// let checkedCount = value.length;
				// this.checkAll = checkedCount === this.cities.length;
				// this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
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
			}
		},
		created() {

		}

	}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.row-bg {
		padding: 10px 0;
	}
</style>
