'use client';
import { ElementType, FC, ReactNode } from 'react';
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
    as?: ElementType
}

const MotionContainer: FC<MotionContainerProps> = ({
    children,
    className = '',
    as: Component = 'div'
}) => {
    const MotionComponent = motion(Component);

    return (
        <MotionComponent
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className={className}
        >
            {children}
        </MotionComponent>
    );


};

export default MotionContainer;
