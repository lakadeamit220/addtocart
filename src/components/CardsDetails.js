import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CardsDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const getdata = useSelector((state) => state.cartreducer.carts);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id
    });
    setData(comparedata);
  }

  useEffect(() => {
    compare();
  }, [id])

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
                            <p><strong>Total : </strong> ₹ 300</p>
                          </td>
                          <td>
                            <p><strong>Rating : </strong> <span style={{ background: 'green', color: 'white', padding: '2px 5px', borderRadius: '5px' }}>{ele.rating} ★</span></p>
                            <p><strong>Order Review : </strong>{ele.somedata}</p>
                            <p><strong>Remove : </strong><i className='fas fa-trash' style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }}></i></p>
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
