import React, { useState } from 'react';
import Cardsdata from './CardsData';
import { Button } from 'react-bootstrap'; // Import Button from React Bootstrap
import '../components/style.css';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';

const Cards = () => {
    const [data, setData] = useState(Cardsdata);

    const dispatch = useDispatch();

    const send = (e) => {
        dispatch(ADD(e))
    }

    return (
        <div className='container mt-3'>
            <h2 className='text-center' style={{ color: 'black', fontSize: '24px', marginBottom: '20px', textDecoration: 'none' }}>Fill Your Cart</h2>
            <div className='row justify-content-center align-items-center'>
                {data.map((element, id) => (
                    <div key={id} className="card mx-2 my-2 card_style" style={{ width: "22rem", border: 'none', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', borderRadius: '8px' }} >
                        <img className="card-img-top" src={element.imgdata} alt={element.rname} style={{ height: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: 'blue' }}>{element.rname}</h5>
                            <p className="card-text">{element.address}</p>
                            <p className='card-text'>Price: ₹ {element.price}</p>
                            <div className="button_div d-flex justify-content-center">
                                <Button variant="primary" onClick={() => send(element)} className='col-lg-12'>Add to Cart</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;
