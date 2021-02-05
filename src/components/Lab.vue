<template>
    <div class="container">
        <el-card class="box-card">
            <!-- 顶部select -->
            <el-select class="topSel" v-model="value" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <!-- table -->
            <el-table :data="tableData" :cell-class-name="rowClass" style="width:100%">
			
			  <el-table-column
			      prop="date"
			      label="日期"
			      width="180">
			    </el-table-column>
				
				        <el-table-column v-for="(item,index) in tableHead" :key="index" :label="item.label" :property="item.property" align="center">
				              <template slot-scope="scope">{{scope.row[scope.column.property]}}</template>
				         </el-table-column>
				
				
				
            </el-table>
        </el-card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                options: [],
                value: '',
                tableDate: []
            }
        },
        created() {
        },
        methods: {
        }
    }
</script>
<style lang="scss" scoped>
    * {
        padding: 0;
        margin: 0;
    }
    .box-card{
        width: 100%
    }
    .container .topSel{
        width: 600px;
        margin-bottom: 30px
    }
</style>
