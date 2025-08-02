// src/components/FadeSection.jsx
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const FadeSection = ({ children, fullScreen = false, className = "" }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true, // hanya trigger 1x
        threshold: 0.2,     // hanya aktif kalau minimal 20% masuk layar
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
            }}
            className={`transition-opacity duration-700 ${className} ${fullScreen ? "min-h-screen" : ""
                }`}
        >
            {children}
        </motion.section>
    );
};

export default FadeSection;
