import { useState } from 'react';
/*
function Post(user_handle, comment_body) {
    fetch(`http://localhost:3001/comment?user_handle=${user_handle}&comment_body=${comment_body}`)
}
*/
function Comments() {
    const [form, setForm] = useState({
        user_handle: '',
        comment_body: ''
    })
    console.log(form)
/*
    fetch('http://localhost:3001/comments')
    .then(response => response.json())
    .then(result => console.log(result))
*/
    const post = e => {
        e.preventDefault()
        fetch("http://localhost:3001/comment", {
            method: 'POST',
            body: JSON.stringify(form),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .catch(error => console.log(error))
    }

    return(
        <form onSubmit={post}>
            <input
                type="text"
                name='user_handle'
            
                value={form.user_handle}
                onChange={e => setForm({ ...form, user_handle: e.target.value})}
            />

            <input 
                type="body"
                name="comment_body"
                value={form.comment_body}
                onChange={e => setForm({ ...form, comment_body: e.target.value })}
            />

            <input type="submit" name="Submit" />
        </form>
    )
}

export default Comments
