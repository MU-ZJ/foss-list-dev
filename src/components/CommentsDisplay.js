import {useEffect} from 'react';

function CommentsDisplay() {
    
    useEffect(() => {

    fetch("http://localhost:3001/comments")
    .then(response => response.json)
    .then(data => console.log(data))
    }, [])
    return(
        <div>Test</div>
    )
}

export default CommentsDisplay
