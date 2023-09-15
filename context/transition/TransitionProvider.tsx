import { AnimatePresence } from 'framer-motion';
import { Router } from 'next/router';
import { useEffect } from 'react';

const TransitionProvider: React.FC<React.PropsWithChildren> = props => {

    return <AnimatePresence
        mode="sync"
        initial={false}
    >{props.children}</AnimatePresence>
}

export default TransitionProvider;