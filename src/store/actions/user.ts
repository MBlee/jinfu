import {UserSetTokenInt} from '@store/typings'

// const setToken = (token:string):UserSetTokenInt =>{
// 	return {
// 		type:'SET_TOKEN',
// 		token
// 	}
// }

const setToken = (token:string):any =>{
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch({
				type:'SET_TOKEN',
				token
			})
		},2000)
	}
}

export {
	setToken
}