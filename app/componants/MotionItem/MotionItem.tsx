'use client';
import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface MotionItemProps {
    children: ReactNode;
    classNames?: string;
}

const MotionItem: FC<MotionItemProps> = ({ children, classNames = '' }) => {
    return (
        <motion.div variants={itemVariants} className={classNames}>
            {children}
        </motion.div>
    );
};

export default MotionItem;
