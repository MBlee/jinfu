import { useState, useReducer, useEffect, useMemo, useCallback } from 'react'
import Styles from './MBBanner.module.scss'
const MBBanner = () => {

    return (
    	<div className={Styles.MBBanner}>
    		<div className={Styles.MBBannerBox}>
    			<video 
    				className={Styles.bannerVideo}
    				autoPlay muted loop
    			 	src="back.mp4">
    			</video>
    			<div className={Styles.bannerInfo}>
    			  <div className={Styles.playBtn}>
    			  	<div className={Styles.circle}></div>
    			  	<div className={Styles.triangle}></div>
    				</div>
    				<h1>
    					持续向中国领先的综合金融
    					<br/>
    					服务公司目标迈进
    				</h1>
    				<div className={Styles.progress}>
    					<div className={Styles.currentProgress}></div>
    				</div>

    			</div>
				</div>
			</div>
    )
}

export default MBBanner;