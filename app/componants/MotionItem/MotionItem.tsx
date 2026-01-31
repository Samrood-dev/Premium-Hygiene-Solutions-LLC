'use client';
import { ElementType, FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface MotionItemProps {
    children: ReactNode;
    className?: string;
    as?: ElementType;

}

const MotionItem: FC<MotionItemProps> = ({ children, className = '', as:Component = 'div' }) => {
    const MotionComponent = motion(Component);

    return (
        <MotionComponent variants={itemVariants} className={className}>
            {children}
        </MotionComponent>
    );
};

export default MotionItem;
