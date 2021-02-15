<template>
	
	<el-carousel :interval="5000" arrow="always" height="166.4px">
	  <el-carousel-item v-for="(item,index) in banners" :key="index" 

	  >
	   <a :href="item.link">
					 <img :src="item.image" alt="" style="display:inline-block;width: 100%; max-width: 100%; height: auto;"
					  @load="imageLoad"
					 >
				  </a>
	  </el-carousel-item>
	</el-carousel>
	
</template>
  
<script>
	export default{
		name:'HomeSwiper',
		props:{
			banners:{
				type:Array,
			    default(){
					return []
				}
			}
		},
		data(){
			return{
				isLoad:false
			}
		},
		methods:{
			imageLoad(){
				//console.log('---')
				if(!this.isLoad){
				this.$emit('swiperImageLoad')
				this.isLoad = true
				}
			}
		}
	}
</script>

<style>
	
</style>
