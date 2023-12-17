import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const style = {
    heading: {
        color: 'rgb(72, 202, 228)',
        fontFamily: 'open sans',
    }

}

const HeadingAnimation = ({ label, classH }) => {

    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const variants = {
        hidden: { opacity: 0, },
        show: { opacity: 1,  transition: { duration: 2 }
    },
    };

    return (
        <motion.h1
            style={style.heading}
            className={classH}
            ref={ref}
            variants={variants}
            initial='hidden'
            animate= {inView ? 'show' : 'hidden'}
            
        >
            {label}
        </motion.h1>
    )
};

export default HeadingAnimation;