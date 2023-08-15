/* eslint-disable react/prop-types */
import styles from './Avatar.module.css';

export function Avatar({src, hasBorder}){
    return (
        <img 
            src={src} 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        />
    )
}
// Default values
Avatar.defaultProps = {
    src: "",
    hasBorder: true
}
