// Import CSS Modules
import styles from './Header.module.css'

import igniteLogo from '../assets/logos/ignite-logo.svg';

// Header Component
export function Header(){
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt='Logo Ignite'></img>
            <h1 className={styles.title}>Ignite Feed</h1>
        </header>
    )
}