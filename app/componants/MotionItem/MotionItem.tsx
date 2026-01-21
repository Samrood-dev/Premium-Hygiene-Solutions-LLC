'use client';
import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface MotionItemProps {
    children: ReactNode;
    className?: string;
}

const MotionItem: FC<MotionItemProps> = ({ children, className = '' }) => {
    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
};

export default MotionItem;
