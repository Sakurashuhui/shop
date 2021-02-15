<template>
	<div id="RecommendView">
		<div v-for="(item,index) in recommend"  :key="index" class="recommed-item">
			<a :href="item.link">
			<img :src="item.image" alt="">
			<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:'RecommendView',
		props:{
			recommend:{
				type:Array,
				default(){
					 []
				}
			}
			
		}
	}
</script>

<style scoped>
	#RecommendView{
	    display: flex;
		width: 100%;
	     text-align: center;
		/* background-color: #FF69B4; */
		margin-top: 4px;
		font-size: 16px;
		padding: 10px 0px;
		border-bottom: 8px solid #eee;
	}
	.recommed-item{
	  flex: 1;	
	}
	.recommed-item img{
		width: 65px;
		height: 65px;
	}
	
</style>
