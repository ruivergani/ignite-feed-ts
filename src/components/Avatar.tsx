import styles from './Avatar.module.css';

interface AvatarProps {
    hasBorder?: boolean;
    src?: string;
    alt?: string; // ? => makes the property optional to the component (either use or not)
}

export function Avatar({src, hasBorder = true, alt} : AvatarProps){
    return (
        <img 
            src={src} 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            alt={alt}
        />
    )
}
// Default values
Avatar.defaultProps = {
    src: "",
    hasBorder: true
}
