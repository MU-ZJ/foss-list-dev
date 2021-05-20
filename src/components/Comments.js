import { useState, useEffect } from 'react';
import CommentsDisplay from './CommentsDisplay';

function Comments() {
    const [form, setForm] = useState({
        user_handle: '',
        comment_body: ''
    })
    const [comments, setComments] = useState([])
    const post = e => {
        e.preventDefault()
        fetch("http://localhost:3001/comment", {
            method: 'POST',
            body: JSON.stringify(form),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then((result) => {
            console.log(result)
            fetch('http://localhost:3001/comments')
            .then(response => response.json())
            .then(data => setComments(data))
        })
        .catch(error => console.log(error))

    }

    useEffect(() => {

    fetch("http://localhost:3001/comments")
    .then(response => response.json())
    .then(data => setComments(data))
    }, [])

    return(
        <div>
            <CommentsDisplay comments={comments} />
            <form id="commentForm" className="is-flex is-flex-direction-column" onSubmit={post}>
                <input
                    type="text"
                    name='user_handle'
                    placeholder="Name" 
                    value={form.user_handle}
                    onChange={e => setForm({ ...form, user_handle: e.target.value})}
                />

                <textarea 
                    type="body"
                    name="comment_body"
                    placeholder="Enter a comment."
                    value={form.comment_body}
                    onChange={e => setForm({ ...form, comment_body: e.target.value })}
                />

                <input type="submit" name="Submit" />
            </form>
        </div>
    )
}

export default Comments
