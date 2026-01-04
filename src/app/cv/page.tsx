"use client";

import styles from "./page.module.css";
import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Code } from "lucide-react";

export default function CV() {
    const experiences = [
        {
            role: "Physics Researcher",
            company: "University of Science",
            period: "2023 - Present",
            description: "Researching quantum entanglement and computational physics simulations.",
        },
        {
            role: "Frontend Developer",
            company: "Tech Corp",
            period: "2021 - 2023",
            description: "Built performant web applications using React and Next.js.",
        },
    ];

    const education = [
        {
            degree: "M.S. in Physics",
            school: "National University",
            period: "2021 - 2023",
        },
        {
            degree: "B.S. in Physics",
            school: "National University",
            period: "2017 - 2021",
        },
    ];

    return (
        <main className={styles.main}>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className={styles.header}>
                    <h1>Curriculum Vitae</h1>
                    <button className={styles.downloadBtn}>
                        <Download size={18} /> Download PDF
                    </button>
                </div>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <Briefcase className={styles.icon} /> Experience
                    </h2>
                    <div className={styles.timeline}>
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className={styles.card}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                            >
                                <div className={styles.cardHeader}>
                                    <h3>{exp.role}</h3>
                                    <span className={styles.period}>{exp.period}</span>
                                </div>
                                <h4 className={styles.company}>{exp.company}</h4>
                                <p className={styles.description}>{exp.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <GraduationCap className={styles.icon} /> Education
                    </h2>
                    <div className={styles.timeline}>
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                className={styles.card}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                            >
                                <div className={styles.cardHeader}>
                                    <h3>{edu.degree}</h3>
                                    <span className={styles.period}>{edu.period}</span>
                                </div>
                                <h4 className={styles.company}>{edu.school}</h4>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <Code className={styles.icon} /> Skills
                    </h2>
                    <motion.div
                        className={styles.skillsGrid}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        {["Quantum Mechanics", "Computational Physics", "Python", "JavaScript", "React", "Next.js", "TypeScript"].map((skill) => (
                            <span key={skill} className={styles.skillTag}>{skill}</span>
                        ))}
                    </motion.div>
                </section>
            </motion.div>
        </main>
    );
}
