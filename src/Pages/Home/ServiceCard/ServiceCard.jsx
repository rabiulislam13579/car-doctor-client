import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const {_id, title, img, price } = service;
    return (
        <div className="card  bg-base-100 shadow-xl space-y-2">
            <figure className="px-10 pt-10">
                <img src={img} alt="" className="rounded-xl w-80 h-52" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title text-2xl font-semibold">{title}</h2>

                <div className="card-actions flex justify-between">
                    <p className='text-[#FF3811] font-semibold'> price : ${price}</p>
                    <Link to={`bookService/${_id}`}>
                        <button className="text-[#FF3811]"><FaArrowRight></FaArrowRight></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;