import React from 'react'
import { Container, ListGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faHouse } from '@awesome.me/kit-KIT_CODE/icons'

function Sidebar() {
    return (
        <>
            <Container>
                <ListGroup>
                    <Link className='list-group-item list-group-item-action' tag="a" to='/' action>
                        Home
                    </Link>
                    <Link className='list-group-item list-group-item-action' tag="a" to='/all-blogs' action>
                        All Blogs
                    </Link>
                    <Link className='list-group-item list-group-item-action' tag="a" to='/add-blog' action>
                        Add Blog
                    </Link>
                    <Link className='list-group-item list-group-item-action' tag="a" to='/achievement' action>
                        Achievement
                    </Link>
                    <Link className='list-group-item list-group-item-action' tag="a" to='/connect' action>
                        Connect With Us
                    </Link>
                </ListGroup>
            </Container>

        </>
    );
}

export default Sidebar;
