<template>
	<div class="tab-control">
		<div v-for="(item,index) in titles" class="tab-control-item" :class="{active:index==currentIndex}" :key="index"
		@click="itemClick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	//文字不一样的时候使用props插入
	export default{
		name:'TabControl',
		props:{
			titles:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return{
				currentIndex:0
			}
		},
		methods:{
			itemClick(index){
				this.currentIndex = index
				//向外部传递一个事件
				this.$emit('tabClick',index);
			}
		}
		
	}
</script>

<style scoped>
	.tab-control{
		display: flex;
		text-align: center;
		/* padding: 5px; */
		background-color: #FFFFFF;
		
	}
	.tab-control-item{
		flex: 1;
	    height: 40px;
		line-height: 40px;
	}
	.active{
		color: red;
	}
	.active span{
		border-bottom: 3px solid red
	}
</style>
