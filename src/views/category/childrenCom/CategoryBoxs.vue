<template>
	<div>
	<div class="cate-item" v-for="(item,index) in category" :key="index" @click="tabClick(index)"
	     :class="{active:index === currentindex}"
	>
		{{item.title}}
	</div>
	
	</div>
</template>

<script>
	export default{
		name:'CategoryBoxs',
		props:{
			category:{
				type:Array,
				default:[]
			}
		},
		data(){
			return{
				currentindex:0
			}
		},
		methods:{
			tabClick(index){
				//console.log('惦记我'+index);
				this.currentindex = index
				//发出一个点击事件
				this.$emit('changeindex',index)
			}
		}
	}
</script>

<style scoped>
	.cate-item{
	  display: block;
	    height: 35px;
	    line-height: 35px;
	    font-size: 16px;
	    margin-top: 2px;
	    text-align: center;
	    background-color: #fff;
	}
	.active{
		background-color: #bcbad6;
	}
</style>
