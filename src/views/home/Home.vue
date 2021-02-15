<template>
	 <div id="home">
		 <nav-bar class="home-bar">
			 <div slot="center">商品首页</div>
		 </nav-bar>
		 <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"
		     ref="tabControl" v-show="isTabfixed" class="tab-controll"
		 ></tab-control>
		 <scroll class="content"  ref="scroll" :probeType="3" 
		   :pull-up-load="true"
		   @scroll="contentScroll" @pullingUp ="loadMore">
		 <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
		 <recommend-view :recommend="recommend"></recommend-view>
		 <feature-view>
			 
		 </feature-view>
		 <tab-control class="tab-controll" :titles="['流行','新款','精选']" @tabClick="tabClick"
		     ref="tabControl" :class="{fixed:isTabfixed}"
		 ></tab-control>
		<goods-list :goods="showGoods"></goods-list>
		
		</scroll>
	      <back-top @click.native="backClick" v-show="isShow" ></back-top>
		  <!-- <el-carousel :interval="5000" arrow="always" height="195.1px">
		     <el-carousel-item v-for="(item,index) in banners" :key="index" >
		      <a :href="item.link">
				 <img :src="item.image" alt="" style="display:inline-block;width: 100%; max-width: 100%; height: auto;">
			  </a>
		     </el-carousel-item>
		   </el-carousel> -->
	 </div>
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar.vue'
	//import {getHomeMultidata} from '../../network/request.js'
	import{getHomeMultidata,getHomeGoods} from '../../network/home.js'
	import HomeSwiper from './childComps/HomeSwiper.vue'
	import RecommendView from './childComps/RecommendView.vue'
	import FeatureView from './childComps/FeatureView.vue'
	import TabControl from   '../../components/content/tabControl/TabControl.vue'
	import GoodsList from '../../components/content/Goods/GoodsList.vue'
	import Scroll from '../../components/common/scroll/Scroll.vue'
	import BackTop from '../../components/content/backTop/BackTop.vue'
	
	export default{
		name:'Home',
		components:{
			NavBar,
			HomeSwiper,
			RecommendView,
			FeatureView,
			TabControl,
			GoodsList,
			Scroll,
			BackTop
		},
		//保存数据
		data(){
			return{
				banners:[],
				recommend:[],
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]},
				},
				currentType:'pop',
				isShow:false,
				taboffsetTop:0,
				isTabfixed:true
			}
		},
		computed:{
			showGoods(){
				return this.goods[this.currentType].list
			}
		},
		created(){
			// getHomeMultidata().then(res=>{
			// 	//console.log(res)
			// 	this.banners = res.data.banner.list
			// 	this.recommend = res.data.recommend.list
			// }),
			
		   
			this.getHomeMultidata();
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
			//3.监听item中的图片加载完成
			// console.log(this.$refs)
			// const refreshr = this.debounce(this.$refs.scroll.refresh,500)
			// this.$bus.$on('itemImageLoad',()=>{
			// 	//this.$refs.scroll.scroll.refresh()
			// 	refreshr()
			// })
		},
		mounted(){
			//console.log(this.$refs)
			
			const refreshr = this.debounce(this.$refs.scroll.refresh,500)
			this.$bus.$on('itemImageLoad',()=>{
				//this.$refs.scroll.scroll.refresh()
				refreshr()
			})
			
		},
		methods:{
			/*
			事件点击事件
			*/
		   //防抖
		   
		   debounce(func,delay){
			  let timer = null;
			 // console.log('9999')
			  return function(...args){
				if(timer) clearTimeout(timer)
				timer = setTimeout(()=>{
					func.apply(this,args)
				},delay)
			  }
		   },
		   tabClick(index){
			   console.log(index)
			   switch(index){
				   case 0:
				   this.currentType = 'pop'
				   break
				   case 1:
				   this.currentType = 'new'
				   break
				   case 2:
				   this.currentType ='sell'
				   break
			   }
		   },
		    backClick(){
				//console.log('11232')
				//this.$refs.scroll.scroll.scrollTo(0,0,500);
				//this.$refs.scroll.scrollTo(0,0)
				console.log(this.$refs);
				 this.$refs.scroll.scrollTo(0,0,500);
				
			},
			contentScroll(position){
				//
				this.isShow = (-position.y>1000)
				this.isTabfixed = (-position.y)>this.taboffsetTop
			},
			//上拉加载更多
			loadMore(){
				console.log('上拉加载更多')
				this.getHomeGoods(this.currentType)
				// this.$refs.scroll.scroll.finisPullUp()
			},
			getHomeMultidata(){
			getHomeMultidata().then(res=>{
				//console.log(res)
				this.banners = res.data.banner.list
				this.recommend = res.data.recommend.list
			})
			},
			getHomeGoods(type){
				//为了更好的加载更多的数据
			const page = this.goods[type].page+1;
			getHomeGoods(type,page).then(res=>{
				console.log(res)
				this.goods[type].list.push(...res.data.list)
				this.goods[type].page += 1
				//上拉加载更多
				//console.log($refs.scroll)
				
			})
			},
			swiperImageLoad(){
				this.taboffsetTop = this.$refs.tabControl.$el.offsetTop;
				//console.log(this.$refs.tabControl.$el.offsetTop);
			}
			
		}
	}
</script>

<style scoped>
	#home{
		padding-top: 44px;
		height: 100vh;
		position: relative;
	}
    .home-bar{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		z-index: 100;
	   background-color: hotpink;
   }
   .tab-controll{
	   position: sticky;
	   top: 44px;
	   z-index: 9;
   }
   .content{
	/* height: calc(100% - 93px);
	 overflow: hidden;
	 margin-top: 47px; */
	 overflow: hidden;
	 position: absolute;
	  top: 44px;
	  bottom: 49px;
	  left: 0;
	  right: 0;  
   }


</style>
