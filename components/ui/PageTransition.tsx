import React, { forwardRef, useMemo } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type PageTransitionProps = HTMLMotionProps<'div'>
export type PageTransitionRef = React.ForwardedRef<HTMLDivElement>

function PageTransition({ children, ...rest }: PageTransitionProps, ref: PageTransitionRef) {
	const initial = { opacity: 0, y: "100vh" }
	const animate = { opacity: 1, y: 0 }
	const exit = { opacity: 0, y: "-100vh" }

	const transition = { duration: 0.6, ease: 'easeInOut' }

	return (
		<motion.div
			ref={ref}
			initial={initial}
			animate={animate}
			exit={exit}
			transition={transition}
			{...rest}
		>
			{children}
		</motion.div>
	)
}

export default forwardRef(PageTransition)