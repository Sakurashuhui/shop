<template>
	<div id="Detail">
		<detail-nav-bar></detail-nav-bar>
		<detail-swiper :top-images="topImages"></detail-swiper>
	</div>
</template>

<script>
	import DetailNavBar from './childComps/DetailNavBar.vue'
	import {getDetail,Goods} from '../../network/detail.js'
	import detailSwiper from './childComps/DetailSwiper.vue'
    export default{		
		name:'Detail',
		components:{
			DetailNavBar ,
			detailSwiper
		},
		data(){
			return{
				iid:null,
				topImages:[],
				goodsInfo:{}
			}
		},
		created(){
			//console.log(this.$route.params)
		this.iid =this.$route.params.iid
			getDetail(this.iid).then(res =>{
				//console.log(res)
				//console.log(res.result.itemInfo.topImages)
				const data = res.result;
				this.topImages = data.itemInfo.topImages
				//3 创建商品的对象
			      //console.log('hdjsahd',data.itemInfo)
				this.goodsInfo = new Goods(data.itemInfo,data.columns,data.shopInfo.service)
				
			})
		}
	}
</script>

<style scode>
</style>
