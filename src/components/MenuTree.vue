<template>
	<div id='menu'>
		<!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
	<el-radio-button :label="false">展开</el-radio-button>
	<el-radio-button :label="true">收起</el-radio-button>
</el-radio-group> -->
		<div :class='icon' class="toggle-menu" @click="toggleMenu"></div>
		<el-menu default-active="1-4-1" class="el-menu-vertical" @select="handleSelect" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
		text-color="#dedede" background-color="#001529">


			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-folder"></i>
					<span slot="title">项目管理</span>
				</template>
				<el-menu-item index="1-1">创建新项目</el-menu-item>
				<el-menu-item index="1-2">选择已经创建的项目</el-menu-item>
			</el-submenu>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-edit-outline"></i>
					<span slot="title">数据管理</span>
				</template>
				<el-menu-item index="2-1">导入新数据</el-menu-item>
				<el-menu-item index="2-2">选择已经导入的数据</el-menu-item>
			</el-submenu>
			<el-submenu index="3">
				<template slot="title">
					<i class="el-icon-setting"></i>
					<span slot="title">数据分析设置</span>
				</template>
				<el-menu-item index="3-1">通过组合标签设置筛选</el-menu-item>
				<el-menu-item index="3-2">通过SQL语句设置筛选</el-menu-item>
			</el-submenu>
			<el-submenu index="4">
				<template slot="title">
					<i class="el-icon-s-data"></i>
					<span slot="title">数据分析呈现</span>
				</template>
				<el-menu-item index="4-1">选择筛选</el-menu-item>
				<el-menu-item index="4-2">分析与计算</el-menu-item>
			</el-submenu>
		</el-menu>
	</div>
</template>
<style>
	.el-menu-vertical:not(.el-menu--collapse) {
		width: 200px;
		min-height: 80%;
	}

	.el-menu {
		border-right: none;
	}

	#menu {
		height: 100%;
		background-color: #001529;
	}

	.toggle-menu {
		margin-left: 25px;
		color: #0542ab;
	}
</style>

<script>
	export default {
		name: 'MenuTree',
		data() {
			return {
				isCollapse: true,
				icon: 'el-icon-d-arrow-left'
			};
		},
		methods: {
			toggleMenu() {
				this.isCollapse ? (this.isCollapse = false, this.icon = 'el-icon-d-arrow-left') : (this.isCollapse = true, this.icon =
					'el-icon-d-arrow-right')
			},
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>
