import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../LogIn/providers/AuthProvider';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);

    const navigate=useNavigate();
    const url = `https://car-doctor-server-sooty-five.vercel.app/bookings?email=${user.email}`;
    useEffect(() => {
        
        fetch(url,{
            method:'GET',
            headers:{
                authorization:`Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setBookings(data)
                }
                else{
                    navigate('/');

                }
            })

    }, [url,navigate])

    const handleDelete=(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`https://car-doctor-server-sooty-five.vercel.app/bookings/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                  Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remaining=bookings.filter(booking=>booking._id!=id)
              setBookings(remaining)
            })
            }
          })
    }

    const handleConfirm=id=>{
        fetch(`https://car-doctor-server-sooty-five.vercel.app/bookings/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({phone:'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire(
                    'success',
                    'Your booking has been updated',
                    'success'
                  )
                const remaining=bookings.filter(booking=>booking._id!==id)
                const updated=bookings.find(booking=>booking._id==id)
                updated.phone='confirm';
                const newBooking=[updated, ...remaining];
                setBookings(newBooking)
            }

        })

        
    }
    return (
        <div>
            <h1 className='text-4xl font-semibold text-center my-5'>
                Booking Items :{bookings.length}

            </h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <tbody>
                        {
                            bookings.map(booking=><BookingRow 
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                            handleConfirm={handleConfirm}
                            ></BookingRow>)
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Bookings;