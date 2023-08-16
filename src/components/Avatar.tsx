import styles from './Avatar.module.css';
import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{ // extende todas as propriedades do Img HTML <passa como default generics o elemento HTML>
    hasBorder?: boolean; // ? => makes the property optional to the component (either use or not)
}
// Quando voce quer que o componente tenha as propriedades que criamos e tambem as nativas do HTML (no caso da imagem sao varias) = tem que usar as extensao de interfaces (ImgHTMLAttributes)
export function Avatar({hasBorder = true,...props} : AvatarProps){
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props} // usando o spread operator para usar todos valores dentro do props e passando como propriedade para tag image (nao precisa passar src, alt ou outra propriedade - sera automatico o valor)
        />
    )
}
// Default values
Avatar.defaultProps = {
    src: "",
    hasBorder: true
}
