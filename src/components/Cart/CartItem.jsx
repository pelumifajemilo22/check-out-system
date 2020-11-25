import React from 'react';
import {FaTrash} from 'react-icons/fa'

export default function CartItem({ item, value }) {
  const { id, title, image, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className='row my-2 text-capitalize text-center'>
      <div className='col-10 mx-auto col-lg-2'>
        <img
          src={image}
          alt=''
          style={{ width: '5rem', height: '5rem' }}
          className='img-fluid'
        />
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d lg-none'>product : </span>
        {title}
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d lg-none'>price : </span>
        ${price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          <div className="d-flex justify-contents-center">

          </div>
          <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-</span>
          <span className="btn btn-black mx-1">{count}</span>
          <span className="btn btn-black mx-1" onClick={()=>increment(id)}>+</span>
      </div>
      {/* icons */}
      <div className='col-10 mx-auto col-lg-2'>
      <div className="cart-icon" onClick={()=>removeItem(id)}>
      <FaTrash/>
      </div>
        
      </div>
      {/* icons end */}
      <div className='col-10 mx-auto col-lg-2'>
        <strong> item total : ${total}</strong>
        
      </div>
    </div>
  );
}
