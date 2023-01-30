import styles from './Layout.module.scss'

export default function Layout({ children }) {
    return (
        <div>
            <header className={styles.appHeader}>
                <div className={styles.container}>{children}</div>
            </header>
        </div>
    )
}
