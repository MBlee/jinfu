import { useState, useReducer, useRef,useEffect, useMemo, useCallback } from 'react'
import cn from 'classnames'
import Styles from './MBHeader.module.scss'

import MBSubnav from './MBSubnav'
const model = {}
const MBHeader = () => {
    const liRef = useRef(null)
    const titleRef = useRef(null)
    const [offsetLeft, setOffsetLeft] = useState('100px')
    const updateOffset = ()=>{
        const liEle = liRef.current! as HTMLElement
        const left = liEle.offsetLeft + (liEle.offsetWidth/2 - 68/2)
        setOffsetLeft(left+ 'px')         
    }
    useEffect(() => {
        updateOffset()
        window.onresize = updateOffset
        return ()=>{
            window.onresize = null
        }
    }, [])
    const clickHandler = (key)=>{
        if (!key) return
        console.log(key);
    }
    return (
    	<div className={cn([Styles.MBHeader,{
            [Styles.transparent]:true
        }])}>
    		<div className={Styles.MBHeaderBox}>
    			<div className={Styles.left}>
    				<a href="javascript:;" >
    					<img src={require('@assets/logo_white.png')} alt="logo" className={Styles.logo} />
    					<img src={require('@assets/logo_en_white.png')} alt="logo" className={Styles.logo} />
    				</a>
    			</div>
    			<div className={Styles.right}>
    				<ul className={Styles.navs}>
    					<li className={cn([Styles.navItem,{[Styles.select]:true}])}>
    						<a href="javascript:;" >首页</a>
                            
    					</li>
    					<li className={Styles.navItem} ref={liRef}>
    						<a href="javascript:;" >关于平安金服</a>
    						<div className={Styles.subNav}>
                                <MBSubnav 
                                    model={model} 
                                    offsetLeft={offsetLeft}
                                    clickHandler={clickHandler}
                                />
                            </div>

    					</li>
    					<li className={Styles.navItem}>
    						<a href="javascript:;" >解决方案</a>
    						<div className={Styles.subNav}>
                            </div>

    					</li>
    					<li className={Styles.navItem}>
    						<a href="javascript:;" >产品和服务</a>
    						<div className={Styles.subNav}>
                            </div>

    					</li>
    					<li className={Styles.navItem}>
    						<a href="javascript:;" >新闻和品牌资料</a>
    						<div className={Styles.subNav}>
                            </div>

    					</li>
    					<li className={Styles.navItem}>
    						<a href="javascript:;" >联系我们</a>
    						<div className={Styles.subNav}>
                            </div>

    					</li>
    				</ul>
    			</div>
				</div>
			</div>
    )
}

export default MBHeader;