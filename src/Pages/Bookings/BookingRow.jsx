import React from 'react';


const BookingRow = ({ booking ,handleDelete,handleConfirm}) => {
    const {_id, img, customerName, email, date, service, phone } = booking;

    

   
    return (
        <tr className=' border-4'>
            <td>
                <button onClick={()=>{handleDelete(_id)}} className="btn btn-circle ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>{service}</h1>
                    </div>
                </div>
            </td>
            <td>
                <p className='text-xl font-semibold my-0 py-0'>{customerName}</p>
                <br />
                <span className="badge badge-ghost badge-sm">{phone}</span>
            </td>
            <td>{email}</td>
            <th>
               {
                phone==='confirm'? <span className='text-xl font-semibold text-blue-800'>confirmed</span>:
                <button onClick={()=>{handleConfirm(_id)}} className="btn btn-ghost btn-xs bg-[#FF3811] text-white"> please confirm</button>
               }
            </th>
        </tr>
    );
};

export default BookingRow;