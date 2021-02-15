<template>
	<nav-bar class="navbar">
		<div slot="center">宝贝分类</div>
	</nav-bar>
</template>

<script>
	import NavBar from '../../../components/common/navbar/NavBar.vue'
	export default{
	     name:'CategoryNavbar',
		 components:{
			 NavBar
		 }
		 
	}
</script>

<style scoped>
	.navbar{
		background-color: pink;
	}
</style>
