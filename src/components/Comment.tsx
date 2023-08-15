/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({content, onDeleteComment}){
    // Estado para like management
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }
    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }
    return (
        <div className={styles.comment}>
            {/* Props to remove the border from this component */}
            <Avatar hasBorder={false} src="https://github.com/ruivergani.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rui Vergani Neto</strong>
                            <time title='11 May - 11AM' dateTime="2022-05-11 08:13:30">Commented 1 hour ago</time>
                        </div>
                        <button title='Delete Comment' onClick={handleDeleteComment}>
                            <Trash size={24}></Trash>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}