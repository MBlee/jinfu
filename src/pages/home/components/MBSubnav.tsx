import { useState, useReducer, useEffect, useMemo, useCallback } from 'react'
import Styles from './MBSubnav.module.scss'
import cn from 'classnames'
interface MBSubnavProps{
	model:any,
	offsetLeft:string,
	clickHandler:(key:string)=>void
}
interface modelType{
	title:string,
	key:string,
	children?:{
		title:string,
		key:string,
		children?:any
	}[]
}
const defaultModel = [
	{
		title:'平安金服',
		key:'1',
		children:[
			{
				title:'公司简介',
				key:'1-1'
			},{
				title:'发展历程',
				key:'1-2'
			},{
				title:'荣誉奖项',
				key:'1-3'
			},{
				title:'机构分布',
				key:'1-4'
			}
		]
	},
	{
		title:'社会责任',
		key:'2',
		children:[
			{
				title:'音服计划',
				key:'2-1'
			},{
				title:'志愿者协会',
				key:'2-2'
			},{
				title:'三村工程',
				key:'2-3'
			}
		]
	}
]

// const defaultModel:modelType[] = [
// 	{
// 		title:'',
// 		key:'',
// 		children:[
// 			{
// 				title:'智慧客服解决方案',
// 				key:'1'
// 			},
// 			{
// 				title:'金融风险解决方案',
// 				key:'2'
// 			},
// 			{
// 				title:'智慧财务解决方案',
// 				key:'3'
// 			},
// 			{
// 				title:'智慧人事解决方案',
// 				key:'4'
// 			}
// 		]
// 	}
	
// ]

const MBSubnav = (props:MBSubnavProps) => {
		const [model, setModel] = useState(defaultModel)
		const clickHandler = (e)=>{
			props.clickHandler(e.target.dataset.key)
		}
    return (
    	<div className={cn([
    			Styles.MBSubnav,
    			{
    				[Styles.transparent]:true
    			}
    		])}>
    		<div className={Styles.indicator} style={{marginLeft:props.offsetLeft}}></div>
    		<div className={Styles.MBSubnavBox} style={{marginLeft:props.offsetLeft}}>
    			<ul className={Styles.firstStageBox} onClick={clickHandler}>
    				{
    					model.map((m,i)=>{
    						return (
    							<li key={i} className={Styles.firstStageItem}>
    								{
    									!!m.title?
    									<h2 data-key={m.key}>{m.title}</h2>
    									:null
    								}
    								
    								{
    									m.children?
    									(
    										<>
			    								{
			    									!!m.title?
	    											<div className={Styles.splitLine}></div>
	    											:null
			    								}

	    										<ul className={Styles.secondStageBox}>
	    											{
	    												m.children.map((m,i)=>(
	    														<li key={i} className={Styles.secondStageItem}>
	    																<h3 data-key={m.key}>{m.title}
	    																	<span className={Styles.icon}>&#62;</span>
	    																</h3>
	    														</li>
	    												))
	    											}
	    										</ul>
    										</>
    									)
    									:null
    								}
    							</li>
    						)
    					})
    				}
    			</ul>
				</div>
			</div>
    )
}

export default MBSubnav;