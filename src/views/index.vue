<template>
	<el-container>
		<el-header>
			<span style="margin-left:20px;">
				<img ref='logo_bigdata' src="../assets/image/bigdata.png" width="35px;" />
				<img src="../assets/image/dataanalysis.png" width="200px;" style="margin-left:20px;" />
			</span>
		</el-header>
		<!-- 		<el-main>
			<MenuTree></MenuTree>
		</el-main> -->
		<el-container>
			<el-aside width="auto">
				<MenuTree></MenuTree>
			</el-aside>
			<el-main>el-main
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import SqlCombination from '../components/SqlCombination.vue'
	import MenuTree from '../components/MenuTree.vue'
	export default {
		data() {
			return {

			}
		},
		components: {
			SqlCombination,
			MenuTree
		},
		methods: {
			//核心代码定时器
			rotate() {
				var rotateval = 0
				var img = this.$refs.logo_bigdata

				setInterval(() => {
					rotateval === 360 ? rotateval = 0 : rotateval += 1;
					img.style.transform = 'rotate(' + rotateval + 'deg)'
					img.style.transition = '0.1s linear'
				}, 100)
			}

		},
		mounted() {
			this.rotate()
		}
	}
</script>

<style>
	.el-header {
		background-color: #001529;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #fff;
		font-size: 19px;
		padding-left: 0px;
	}

	.el-aside {
		background-color: #001529;
	}

	.el-main {
		background-color: #eaedf1;
	}

	.el-container {
		height: 100%;
	}
</style>
