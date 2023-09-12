import { AnimatePresence } from 'framer-motion';

const TransitionProvider: React.FC<React.PropsWithChildren> = props => {
    return <AnimatePresence
        mode="popLayout"
        initial={false}
    >{props.children}</AnimatePresence>
}

export default TransitionProvider;