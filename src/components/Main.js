import { NavLink } from 'react-router-dom';

function Main() {
    return (
        <div>
        
            <section className="hero is-small has-text-centered">
                
                <div className="hero-body">

                    <p className="title">FOSS-List</p>

                    <p className="subtitle">A curated list of free and open source software.</p>

                </div>

            </section>

            <section className="section">

                <div className="content">

                    <ul>
                        <li>
                            <NavLink to='/ContentTest'>ContentTest</NavLink>
                        </li>
                    </ul>

                </div>

            </section>

        </div>
    )
}

export default Main
