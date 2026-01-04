"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { blogPosts } from "@/lib/placeholder-data";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag } from "lucide-react";

export default function BlogListing() {
    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Transmissions
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Thoughts, theories, and logs from the void.
                </motion.p>
            </div>

            <div className={styles.grid}>
                {blogPosts.map((post, index) => (
                    <motion.article
                        key={post.slug}
                        className={styles.card}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
                            <div className={styles.cardHeader}>
                                <span className={`${styles.category} ${styles[post.category.toLowerCase()]}`}>
                                    {post.category}
                                </span>
                                <span className={styles.date}>
                                    <Calendar size={14} /> {post.date}
                                </span>
                            </div>
                            <h2 className={styles.title}>{post.title}</h2>
                            <p className={styles.excerpt}>{post.excerpt}</p>
                            <div className={styles.cardFooter}>
                                <span className={styles.readTime}>
                                    <Clock size={14} /> {post.readTime}
                                </span>
                                <span className={styles.readMore}>Read Entry &rarr;</span>
                            </div>
                        </Link>
                    </motion.article>
                ))}
            </div>
        </main>
    );
}
