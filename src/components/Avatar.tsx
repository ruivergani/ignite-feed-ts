import styles from './Avatar.module.css';
import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{ // extende todas as propriedades do Img HTML <passa como default generics o elemento HTML>
    hasBorder?: boolean;
    src?: string;
    alt?: string; // ? => makes the property optional to the component (either use or not)
}
// Quando voce quer que o componente tenha as propriedades que criamos e tambem as nativas do HTML (no caso da imagem sao varias) = tem que usar as extensao de interfaces (ImgHTMLAttributes)
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
