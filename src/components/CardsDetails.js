import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ADD, REMOVE, RMV } from '../redux/actions/action';


const CardsDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const getdata = useSelector((state) => state.cartreducer.carts);

  const history = useNavigate();

  const dispatch = useDispatch();
  const rmv = (id) => {
    dispatch(RMV(id));
    history("/");
  }

  const remove = (item) => {
    dispatch(REMOVE(item))
  }

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id
    });
    setData(comparedata);
  }

  useEffect(() => {
    compare();
  }, [id])

  const send = (e) => {
    dispatch(ADD(e))
  }

  return (
    <>
      <div className='container mt-2'>
        <h2 className='text-center' style={{ color: 'black', fontSize: '24px', marginBottom: '20px', textDecoration: 'none' }}>Items Details</h2>
        <section className='container mt-3'>
          <div className='iteamsdetails'>
            {
              data.map((ele) => {
                return (
                  <>
                    <div className='items_img'>
                      <img src={ele.imgdata} alt='itemsimage' />
                    </div>
                    <div className='details'>
                      <Table>
                        <tr>
                          <td>
                            <p><strong>Restaurant : </strong> {ele.rname}</p>
                            <p><strong>Price : </strong> ₹ {ele.price}</p>
                            <p><strong>Details : </strong>{ele.address}</p>
                            <p><strong>Total : </strong> ₹ {ele.price * ele.qnty}</p>
                            <div className="mt-5 d-flex justify-content-between align-items-center" style={{ width: "100px", cursor: "pointer", background: "#ddd", color: "#111" }}>
                              <span style={{ fontSize: 24 }} onClick={ele.qnty <= 1 ? () => rmv(ele.id) : () => remove(ele)}>-</span>
                              <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                              <span style={{ fontSize: 24 }} onClick={() => send(ele)}>+</span>
                            </div>

                          </td>
                          <td>
                            <p><strong>Rating : </strong> <span style={{ background: 'green', color: 'white', padding: '2px 5px', borderRadius: '5px' }}>{ele.rating} ★</span></p>
                            <p><strong>Order Review : </strong>{ele.somedata}</p>
                            <p><strong>Remove : </strong><i className='fas fa-trash' style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }} onClick={() => rmv(ele.id)}></i></p>
                          </td>
                        </tr>
                      </Table>
                    </div>
                  </>
                )
              })
            }

          </div>
        </section>
      </div>
    </>
  )
}

export default CardsDetails
