import PageTransition from '@madeinhaus/nextjs-page-transition';
import { AnimatePresence } from 'framer-motion';

import '@madeinhaus/nextjs-page-transition/dist/index.css';

import styles from "./TransitionProvider.module.scss";

const TransitionProvider: React.FC<React.PropsWithChildren> = props => {

    return <AnimatePresence
        mode="sync"
        initial={false}
    >
        <PageTransition
          as="div"
          outPhaseDuration={300}
          inPhaseDuration={100}
          className={styles.container}
        >
            {props.children}
            </PageTransition>
        </AnimatePresence>
}

export default TransitionProvider;