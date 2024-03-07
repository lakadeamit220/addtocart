import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for routing

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="border-bottom border-body" style={{ height: "60px" }}>
            <div className="container">
                <Link to="/" className="navbar-brand">AddToCart</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Badge badgeContent={4} color="primary"
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <i className="fa fa-shopping-cart text-light" style={{ fontSize: 30, cursor: 'pointer' }}></i>
                </Badge>
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                    <i className='fas fa-close smallclose'
                        onClick={handleClose} style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                    <p style={{ fontSize: 22 }}>Your cart is empty</p>
                    <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                </div>

            </Menu>
        </Navbar>
    );
}

export default Header;
