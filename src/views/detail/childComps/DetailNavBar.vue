<template>
	<div>
		<nav-bar>
			<div slot="left" class="imgslot" @click="backimg">
				<img src="../../../assets/img/common/back.svg" alt="">
			</div>
		<div slot="center" class="title">
			<div v-for="(item,index) in titles" class="title-item"
			  :class="{active:index=== currentIndex}" @click="activeClick(index)"
			>
				{{item}}
			</div>
		</div>
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from '../../../components/common/navbar/NavBar.vue'
	export default{
		name:'DetailNavBar',
		components:{
			NavBar
		},
		data(){
			return{
				titles:['商品','参数','评论','推荐'],
				currentIndex:0
			}
		},
		methods:{
			activeClick(index){
				this.currentIndex = index
			},
			backimg(){
				this.$router.back()
			}
		}
	}
</script>

<style scoped>
	.title{
		display: flex;
	}
	.title-item{
		flex: 1;
	}
	.active{
	  color: red;	
	}
	.imgslot img{
		margin-top: 12px;
		
	}
</style>
