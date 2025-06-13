import Link from "next/link"
import styles from "@/app/page.module.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <nav className={styles.sidebar}>
                    <Link className={styles.sideLink} href="/dashboard">Dashboard</Link>
                    <Link className={styles.sideLink} href="/dashboard/products">Products</Link>
                    <Link className={styles.sideLink} href="/dashboard/user">Account</Link>
                </nav>
            </header>
            <main className={styles.screen}>
                {children}
            </main>
        </div>
    )
}