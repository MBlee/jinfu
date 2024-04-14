import { useState, useReducer, useEffect, useMemo, useCallback } from 'react'
import Styles from './MBTop.module.scss'
import cn from 'classnames'
const MBTop = () => {

    return (
    	<div className={cn([
    		Styles.MBTop,
    		{[Styles.transparent]:true}
    		])
    	}>
    		<div className={Styles.MBTopBox}>
					<div className={Styles.left}>
						<span>平安金服官网</span>
						<span>|</span>
						<span>平安集团旗下业务
						</span>
					</div>
					<div className={Styles.right}>
						<a href="javascript:;">
							<span className={Styles.preIcon}>☏</span>
							<span>95511客服</span>
						</a>
					</div>
				</div>
			</div>
    )
}

export default MBTop;