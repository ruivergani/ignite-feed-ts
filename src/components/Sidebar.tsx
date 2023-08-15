import styles from './Sidebar.module.css';

// Images
import coverImage from '../assets/cover-image.jpg';

// Import Phosphor React Library (icons)
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img src={coverImage} className={styles.cover}/>
            <div className={styles.profile}>
                <Avatar src="https://github.com/ruivergani.png"></Avatar>
                <strong>Rui Vergani Neto</strong>
                <span>Front-end Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={24} />
                    Edit your profile
                </a>
            </footer>
        </aside>
    )
}