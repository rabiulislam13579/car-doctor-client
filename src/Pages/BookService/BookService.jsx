import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../LogIn/providers/AuthProvider';
import Swal from 'sweetalert2';

const BookService = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData();
    const { title, _id, price, description, img } = service;
    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = user?.email;

        const booking = {
            customerName: name,
            img,
            email,
            date,
            price,
            service: title,
            service_id: _id,
            phone
        }
        console.log(booking)
        fetch('https://car-doctor-server-sooty-five.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){

                    Swal.fire({
                        icon: 'success',
                        title: 'success',
                        text: 'service booking successfully',
                        footer: '<a href="">do you want to more booking service?</a>'
                    })
                }
                console.log(data)
            })




    }
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center text-purple-950 mt-5 mb-5'>Book Service for : {title}</h1>
            <form onSubmit={handleBookService} className='bg-[#F3F3F3] rounded-lg'>
                <div className="card-body p-24">
                    <div className=' grid lg:grid-cols-2 gap-6'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" placeholder="date" name='date' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your phone Number</span>
                            </label>
                            <input type="number" placeholder="your phone number" name='phone' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" placeholder="your email " name='email' defaultValue={user?.email} className="input input-bordered" />
                        </div>
                    </div>

                    <div>
                        <div className="form-control mt-6 ">
                            <input type="text" name="message" placeholder='your message' id="" className="input input-bordered h-[200px]" />
                        </div>

                        <div className="form-control mt-8">
                            <input type="submit" value="Order Confirm" className='bg-[#FF3811] input input-bordered text-white' />
                        </div>

                    </div>

                </div>


            </form>

        </div>
    );
};

export default BookService;