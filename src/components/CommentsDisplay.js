import {useEffect, useState} from 'react';

function CommentsDisplay(props) {
/*    
    useEffect(() => {

    fetch("http://localhost:3001/comments")
    .then(response => response.json())
    .then(data => setTemp(data))
    }, [])
  */
    const CommentArea = props.comments?.map((item) => {
        return(
            <article className="media" key={item.comment_id}>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{item.user_handle}</strong>
                            <br />
                            {item.comment_body}
                            <br />
                        </p>
                    </div>
                </div>
            </article>
        )
    })

    return (
        <section className="section is-small">
            {CommentArea}
        </section>
    )
}

export default CommentsDisplay
