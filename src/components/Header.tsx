"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { Atom } from "lucide-react";

export default function Header() {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: "CV", path: "/cv" },
    ];

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Atom className={styles.logoIcon} size={24} />
                    <span>Antigravity</span>
                </Link>
                <nav className={styles.nav}>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`${styles.navItem} ${pathname === item.path ? styles.active : ""
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
