import {request} from './request.js'
export function getDetail(iid){
	return request({
		url:'api/m5/detail',
		params:{
			iid
		}
	})
	
}
export class Goods{
	constructor(itemInfo,columns,service) {
		this.desc = itemInfo.desc;
		this.price = itemInfo.price;
		this.oldPrice =itemInfo.oldPrice;;
		this.discount = itemInfo.discountDesc
		this.columns= columns
		this.service = service 
	}
}
