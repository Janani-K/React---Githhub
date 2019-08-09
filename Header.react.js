import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {

    return (
        <div>
            <div id="header">
                <h1 id="title">Github Search</h1>
                <hr></hr>
            </div>
            <nav >
                <p >
                    <span className="btn-group">
                        <span id="link" className="spanPosition" ><Link className="btn btn-secondary " to='/user'>User</Link></span>           
                        <span id="link" className="spanPosition"><Link className="btn btn-secondary" to='/repo'>Repository</Link></span>
                    </span>
                </p>
            </nav>
        </div>
    );

}

export default Header;