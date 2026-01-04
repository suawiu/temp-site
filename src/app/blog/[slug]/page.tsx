import { blogPosts, BlogPost } from "@/lib/placeholder-data";
import { notFound } from "next/navigation";
import styles from "./post.module.css";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className={styles.container}>
            <Link href="/blog" className={styles.backLink}>
                <ArrowLeft size={16} /> Back to Transmission Log
            </Link>

            <header className={styles.header}>
                <div className={styles.meta}>
                    <span className={`${styles.category} ${styles[post.category.toLowerCase()]}`}>
                        {post.category}
                    </span>
                    <span className={styles.date}>
                        <Calendar size={14} /> {post.date}
                    </span>
                    <span className={styles.readTime}>
                        <Clock size={14} /> {post.readTime}
                    </span>
                </div>
                <h1 className={styles.title}>{post.title}</h1>
            </header>

            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className={styles.footer}>
                <p>End of Transmission.</p>
            </div>
        </article>
    );
}
