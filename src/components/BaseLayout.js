import Nav from './Nav';
import Comments from './Comments';
import Footer from './Footer';

function BaseLayout(props) {
    return (
        <div>
            <Nav />
            {props.children}
            <Comments />
            <Footer />
        </div>
    )
}

export default BaseLayout
