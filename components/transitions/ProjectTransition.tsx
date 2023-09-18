import React, { forwardRef, useMemo } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type PageTransitionProps = HTMLMotionProps<'div'>
export type PageTransitionRef = React.ForwardedRef<HTMLDivElement>

function ProjectTransition({ children, ...rest }: PageTransitionProps, ref: PageTransitionRef) {

	const transition = { duration: .5, ease: 'easeInOut' }

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, scale: .7, position: "absolute", top: 0 }}
			animate={{ opacity: 1, scale: 1, position: "relative" }}
			exit={{ opacity: 0, scale: .7, position: "absolute" }}
			transition={transition}
			{...rest}
		>
			{children}
		</motion.div>
	)
}

export default forwardRef(ProjectTransition)