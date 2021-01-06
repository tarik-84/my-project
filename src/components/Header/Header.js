import React            from 'react';
import lambda           from '../../asset/lambda1.png';
import {Link, useHistory} from 'react-router-dom';
import {
    Navbar,
    Nav,
   
} from 'reactstrap';
import './Header.css';

// Passing Props from APP
function Header(props) {

    const history = useHistory();
    const logout = e => {
        e.preventDefault();
        localStorage.removeItem('token');
        history.push('/')
    }

    return (
        <div className="header-main">
            <Navbar color='light' light fluid='true' expand='md'>
                <Link className='logo' to='/protected'>
                    <img className='logo' src={lambda} alt='lambda'/>
                </Link>
                {/* Added this to make other links push right */}
                <Nav className='mr-auto' navbar></Nav>
                {/* Right side of Navbar */}
                <Nav className='pullRight'>
                   <Link to='/search' className='NavLink'>Search</Link>
                   {/* <Link to='/' className='NavLink'>Login</Link> */}
                   <Link to='/add-guide' className='NavLink'>Add New Item</Link>
                   <Link onClick={logout}   className='NavLink'>Logout</Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Header;