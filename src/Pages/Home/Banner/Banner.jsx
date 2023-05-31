import React from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    const bannerContent = <div className="rounded-xl absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className='text-white space-y-7 w-2/5 pl-12'>
            <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
                <button className="btn btn-primary border-none bg-[#FF3811]">Discover More</button>
                <button className="btn btn-outline btn-secondary text-white ml-5">Latest Project</button>
            </div>
        </div>
    </div>
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl " />
                <>
                    {bannerContent}
                </>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 ">
                    <a href="#slide6" className="btn btn-circle bg-purple-950 hover:bg-[#FF3811] text-white"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide2" className="btn btn-circle ml-5 bg-purple-950 mr-8 hover:bg-[#FF3811] text-white"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <>
                {bannerContent}
                </>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 ">
                    <a href="#slide1" className="btn btn-circle bg-purple-950 hover:bg-[#FF3811] text-white"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide3" className="btn btn-circle ml-5 bg-purple-950 mr-8 hover:bg-[#FF3811] text-white"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <>
                {bannerContent}
                </>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 ">
                    <a href="#slide2" className="btn btn-circle bg-purple-950 hover:bg-[#FF3811] text-white"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide4" className="btn btn-circle ml-5 bg-purple-950 mr-8 hover:bg-[#FF3811] text-white"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <>
                {bannerContent}
                </>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 ">
                    <a href="#slide3" className="btn btn-circle bg-purple-950 hover:bg-[#FF3811] text-white"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide5" className="btn btn-circle ml-5 bg-purple-950 mr-8 hover:bg-[#FF3811] text-white"><FaArrowRight></FaArrowRight></a>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={img5} className="w-full rounded-xl" />
                    <>
                    {bannerContent}
                    </>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 ">
                        <a href="#slide4" className="btn btn-circle bg-purple-950 hover:bg-[#FF3811] text-white"><FaArrowLeft></FaArrowLeft></a>
                        <a href="#slide6" className="btn btn-circle ml-5 bg-purple-950 mr-8 hover:bg-[#FF3811] text-white"><FaArrowRight></FaArrowRight></a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={img6} className="w-full rounded-xl" />
                    <>
                    {bannerContent}
                    </>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 ">
                        <a href="#slide5" className="btn btn-circle bg-purple-950 hover:bg-[#FF3811] text-white"><FaArrowLeft></FaArrowLeft></a>
                        <a href="#slide1" className="btn btn-circle ml-5 bg-purple-950 mr-8 hover:bg-[#FF3811] text-white"><FaArrowRight></FaArrowRight></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;