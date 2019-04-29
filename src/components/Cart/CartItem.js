import React from 'react';

export default function CartItem({item,value}) {
    const {id,title,img,price,total,count} = item;
    const {increment,decrement,removeItem} = value;
    return (

            <div className="row my-2 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-2">
                    <img
                        src={img}
                        alt="comic"
                        style={{width:'5rem', height:'7rem'}}
                        className="img-fluid"
                    />
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none mainText">Name : </span>{title}
                </div>
                <div className="col-10 mx-auto col-lg-2 mainText">
                    <span className="d-lg-none">Price : </span>${price}
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <div>
                            <span className="btn btn-block mx-1" onClick={()=>increment(id)}>+</span>
                            <span className='btn btn-block mx-1'>{count}</span>
                            <span className="btn btn-block mx-1" onClick={()=>decrement(id)}>-</span>
                        </div>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="trash-icon" onClick={()=>removeItem(id)}>
                        <i className="fas fa-trash"/>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <strong> Item total : $ {total}</strong>
                </div>

            </div>

    )
}
