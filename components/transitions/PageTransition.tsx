import React, { forwardRef, useMemo } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type PageTransitionProps = HTMLMotionProps<'div'>
export type PageTransitionRef = React.ForwardedRef<HTMLDivElement>

function PageTransition({ children, ...rest }: PageTransitionProps, ref: PageTransitionRef) {

	const transition = { duration: .5, ease: 'easeInOut' }

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: "50vh", position: "absolute", top: 0, width: "100%" }}
			animate={{ opacity: 1, y: "0vh", position: "relative" }}
			transition={transition}
			{...rest}
		>
			{children}
		</motion.div>
	)
}

export default forwardRef(PageTransition)