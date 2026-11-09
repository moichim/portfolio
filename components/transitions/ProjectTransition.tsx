import React, { forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type PageTransitionProps = HTMLMotionProps<'div'>
export type PageTransitionRef = React.ForwardedRef<HTMLDivElement>

function ProjectTransition({ children, ...rest }: PageTransitionProps, ref: PageTransitionRef) {

	const transition = { duration: .5, ease: 'easeInOut' as const }

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, scale: .7 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: .7 }}
			transition={transition}
			{...rest}
		>
			{children}
		</motion.div>
	)
}

export default forwardRef(ProjectTransition)