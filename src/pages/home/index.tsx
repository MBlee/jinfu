import React from 'react'
import MBTop from './components/MBTop'
import MBHeader from './components/MBHeader'
import MBBanner from './components/MBBanner'

import Styles from './index.module.scss'
export default function HomePage() {
	return (
		<div>
			<div className={Styles.fixTop}>
				<MBTop />
				<MBHeader />
			</div>
			<MBBanner />
		</div>
	)
}