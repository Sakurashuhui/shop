<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive"><slot name="item-icon" ></slot></div>
		<div v-else><slot name="item-icon-active" ></slot></div>
	    <div :style="activeStyle"><slot name="item-text"></slot></div>
	</div>
</template>

<script>
	export default{
		name:'TabBarItem',
		//使用这个组件将传递进来一个对应的值
		props:{
			path:String ,
			activecolor:{
				type:String,
				default:'red'
			}
			
		},
		data(){
			return{
				// isActive,
			}
		},
		methods:{
			itemClick(){
				 //跳转到对应的路由
				 // console.log('wdoe ')
				 // console.log(this.path)
				 this.$router.replace(this.path).catch(err=>err);
			}
		},
		computed:{
			isActive(){
				// $route是属于哪个活跃的路由中是否包含这个路由
				return this.$route.path.indexOf(this.path) !== -1
			},
			activeStyle(){
				return this.isActive ? {color:this.activecolor} :{}
			}
			
		}
		
	}
</script>

<style >
	.tab-bar-item{
	    flex: 1;
		text-align: center;
		height: 49px;
	
	}
	.tab-bar-item img{
		width: 24px;
		height: 24px;
	}
/* 	.active{
	  color: red;	
	} */
</style>
