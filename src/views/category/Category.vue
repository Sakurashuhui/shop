<template>
	<div>
		<Category-navbar></Category-navbar>
		 <scroll class="cate-box" ref = "scrollLeft">
		 <Category-boxs :category="category" @changeindex="loadimg"></Category-boxs>
		 </scroll>
		 <Scroll  ref = "scrollRight" class="items-box ">
		       <div v-for="item in currentCate">
				   <a :href="item.link">
				   <img :src="item.image" alt="">
				   </a>
			   </div>
		 </Scroll>
	</div>
</template>

<script>
	import Scroll from '../../components/common/scroll/Scroll.vue'
	import CategoryNavbar from './childrenCom/CategoryNavbar.vue'
	import CategoryBoxs from './childrenCom/CategoryBoxs.vue'
	import GoodsList from '../../components/content/Goods/GoodsList.vue'
	//网络请求
    import {getCategory,getSubcategory} from '../../network/Category.js'
	export default{
		name:'Category',
		components:{
			CategoryNavbar,
			CategoryBoxs,
			Scroll,
			GoodsList
		},
		data(){
			return{
				currentIndex:0,
				category:[],
				currentCate:[]
			}
		},
		created(){
			getCategory().then(res =>{
				//console.log(res) 
				this.category = res.data.category.list
			})
		},
		methods:{
		  leftLoaded() {
			this.$refs.scrollLeft.refresh()
		 },
		  loadimg(index) {
		         //index改变
		    this.currentIndex = index;
			this.changeCate()
           },
		    changeCate() {
		      getSubcategory(this.category[this.currentIndex].maitKey).then(res => {
				  console.log(res)
		       this.currentCate = res.data.list;
		      // this.$refs.scrollRight.backTop()
		       })
		   }
		}
	}
</script>

<style>
	.cate-box{
	 position: absolute;
	    top: 44px;
	    left: 0;
	    height: calc(100vh - 44px - 49px);
	    width: 70px;
	    background-color: #f4f4f4;
	    overflow: hidden;
	}
	 .items-box {
	    position: absolute;
	    top: 44px;
	    left: 70px;
	    width: calc(100vw - 70px);
	    height: calc(100vh - 44px - 49px);
	    overflow: hidden;
	  }
</style>
