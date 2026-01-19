'use client';
import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.2, duration: 0.8 },
    },
};

interface MotionContainerProps {
    children: ReactNode;
    className?: string;
}

const MotionContainer: FC<MotionContainerProps> = ({
    children,
    className = '',
}) => {
    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default MotionContainer;
