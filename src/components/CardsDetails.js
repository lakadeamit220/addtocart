import React from 'react'
import { Table } from 'react-bootstrap';

const CardsDetails = () => {
  return (
    <>
      <div className='container mt-2'>
      <h2 className='text-center' style={{ color: 'black', fontSize: '24px', marginBottom: '20px', textDecoration: 'none' }}>Items Details</h2>
      <section className='container mt-3'>
        <div className='iteamsdetails'>
          <div className='items_img'>
            <img src='https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp' alt='itemsimage'/>
          </div>
          <div className='details'>
            <Table>
              <tr>
                <td>
                  <p><strong>Restaurant : </strong> sdfghj</p>
                  <p><strong>Price : </strong> ₹ 500</p>
                  <p><strong>Details : </strong>sdfg</p>
                  <p><strong>Total : </strong> ₹ 500</p>
                </td>
                <td>
                <p><strong>Rating : </strong> <span style={{background:'green', color:'white', padding:'2px 5px', borderRadius:'5px'}}>5 ★</span></p>
                <p><strong>Order Review : </strong>dfghjsdfghszdxfcgvbsdfg</p>
                <p><strong>Remove : </strong><i className='fas fa-trash' style={{color:'red', fontSize:'20px', cursor:'pointer'}}></i></p>
                </td>
              </tr>
            </Table>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default CardsDetails
