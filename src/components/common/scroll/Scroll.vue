<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
		<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		name:"Scroll",
		props:{
			probeType:{
				type:Number,
				default:0
			},
			pullUpLoad:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return {
				scroll:null,
			}
		},
		mounted(){
			//创建BScroll对象
			this.scroll = new BScroll(this.$refs.wrapper,{
				   click:true,  
				   probeType:this.probeType,
				   pullUpLoad:this.pullUpLoad
			})
			//this.scroll.scrollTo(0,0)
			//2 监听滚动的区域
			this.scroll.on('scroll',(position)=>{
				this.$emit('scroll',position)
			})
			//监听上拉加载更多的事件
			if (this.pullUpLoad) {
			  this.scroll.on("pullingUp", () => {
			    this.$emit("pullingUp");
			    setTimeout(() => {
			      this.scroll.finishPullUp()
			    }, 2000)
			  })
			}
			// this.scroll.on('pullingUp',()=>{
			// 	//console.log('shd');
			// 	this.$emit('pullingUp');
			// })
		},
		methods:{
			scrollTo(x,y,time=300){
				this.scroll.scrollTo(x,y,time)
			},
			refresh(){
				this.scroll && this.scroll.refresh()
			}
			
		}
	}
</script>

<style scoped>
</style>
