/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { enGB } from 'date-fns/locale';
import { useState } from 'react';

// Component Post (author, content, publishedAt)
export function Post({author, content, publishedAt}){
    // Date Format (using JavaScript API)
    // const publishedDateFormatted = new Intl.DateTimeFormat('en-GB', {
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit'
    // }).format(publishedAt);

    // Date Format using library date-fns
    const publishedDateFormatted = format(publishedAt, "d LLLL HH:mm");
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: enGB, // tipo de data
        addSuffix: true, // adiciona prefixo automatico
    });

    // Estado => variaveis que eu quero que o componente monitore
    const [comments, setComments] = useState(['Post muito bacana, hein?'])
    const [newCommentText, setNewCommentText] = useState('')

    // Functions
    function handleNewCommentChange(event){
        event.target.setCustomValidity(''); // set default input error (clean error validity message)
        setNewCommentText(event.target.value);
    }
    function handleCreateNewComment(event){
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText(''); // clear textarea
    }
    function deleteComment(commentToDelete){
        // Imutabilidade -> as variaveis nao sofrem mutacao (nao referencia um valor antigo), nao se copia ou altera o valor, apenas cria um novo.
        const commentsWithoutDeletedOne = comments.filter(comment => {
            // filter = true (mantem na lista) - false (remove da lista)
            return comment !== commentToDelete;
        });
        setComments(commentsWithoutDeletedOne);
    }
    function handleNewCommentInvalid(){
        event.target.setCustomValidity('This field must be filled.'); // or change to another language (portuguese)
    }
    const isNewCommentEmpty = newCommentText.length === 0; // hide button if textarea is Empty

    return(
        <article className={styles.post}>
            {/* Header */}
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                {/* Date Formatted */}
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time> {/* Always camelCase (even HTML attribute)*/}
            </header>
            {/* Body */}
            <div className={styles.content}>
                {/* Run the array each line ... */}
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>;
                    }else if (line.type === 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>
            {/* Form */}
            <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
                <strong>Leave your feedback</strong>
                <textarea
                    name='commentTextarea'
                    placeholder='Leave a comment' 
                    value={newCommentText} 
                    onChange={handleNewCommentChange} // toda mudanca ira executar a funcao
                    onInvalid={handleNewCommentInvalid} // text invalid will execute this function
                    required // form validation
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Comment</button>
                </footer>
            </form>
            {/* Comment List */}
            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return (
                            <Comment 
                                content={comment} 
                                key={comment} 
                                onDeleteComment={deleteComment} // use function as props to communicate with another component child (Comment)
                            />
                        )
                    })
                }
            </div>
        </article>
    ) 
}