"use client";

import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className={styles.title}>
                        Hello, I am <span className={styles.gradientText}>Suawiu.</span>
                    </h1>
                </motion.div>

                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    This blog serves as a personal research notebook dedicated to documenting my journey and expertise in physics and other interesting fields.
                    <br />
                    I aim to systematically archive my academic growth and share meaningful insights with peers in both academia and industry.
                </motion.p>

                <motion.div
                    className={styles.actions}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <Link href="/blog" className={styles.primaryButton}>
                        Read Blog <ArrowRight size={18} />
                    </Link>
                    <Link href="/about" className={styles.secondaryButton}>
                        About Me <FileText size={18} />
                    </Link>
                </motion.div>
            </div>

            {/* Background Graphic Element */}
            <motion.div
                className={styles.orb}
                animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </section>
    );
}
