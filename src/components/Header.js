import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import { Link, NavLink } from 'react-router-dom'; // Assuming you're using React Router for routing
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { RMV } from '../redux/actions/action';


const Header = () => {

    const [price, setPrice] = useState(0);
    const total = () => {
        let price = 0;
        getdata.map((ele, k) => {
            price = ele.price + price
        });
        setPrice(price);
    }
    useEffect(()=>{
        total()
    },[total])

    const getdata = useSelector((state) => state.cartreducer.carts);

    const dispatch = useDispatch();

    const rmv = (id) => {
        dispatch(RMV(id));
    }

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
                <Badge badgeContent={getdata.length} color="primary"
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
                {
                    getdata.length ?
                        <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                            <Table>
                                <thead>
                                    <th>Photo</th>
                                    <th>Restaurant Name</th>
                                </thead>
                                <tbody>
                                    {
                                        getdata.map((e) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                                                <img src={e.imgdata} alt='Image' style={{ width: '5rem', height: '5rem' }} />
                                                            </NavLink>
                                                        </td>
                                                        <td>
                                                            <p>{e.rname}</p>
                                                            <p>Price: ₹ {e.price}</p>
                                                            <p>Quentity: {e.qnty}</p>
                                                            <p onClick={() => rmv(e.id)}><i className='fas fa-trash smalltrash' style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }}></i></p>
                                                        </td>
                                                        <td>
                                                            <p onClick={() => rmv(e.id)}><i className='fas fa-trash largetrash' style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }}></i></p>
                                                        </td>
                                                    </tr >
                                                </>
                                            )
                                        })
                                    }
                                    <p className='text-center'>Total: ₹ {price}</p>
                                </tbody>
                            </Table>
                        </div> : <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                            <i className='fas fa-close smallclose'
                                onClick={handleClose} style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                            <p style={{ fontSize: 22 }}>Your cart is empty</p>
                            <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                        </div>
                }
            </Menu>
        </Navbar >
    );
}

export default Header;
