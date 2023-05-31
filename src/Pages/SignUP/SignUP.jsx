import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth"
import { AuthContext } from '../LogIn/providers/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const SignUP = () => {
    const {createUser}=useContext(AuthContext)
   

    const handleSignUp=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password);
        createUser(email,password)
        .then((result)=>{
            const user=result.user;
            console.log(user)
        })
        .then((error)=>{
            console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row py-5">
            <div className="text-center lg:text-left w-1/2 mr-8">
                <img src={img} alt="" />

            </div>
            <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100 ml-5">

                <div className="card-body">
                    <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                    <form onSubmit={handleSignUp}>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6 bg-[#FF3811] text-white py-2 rounded-xl">
                            <input type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p>Already have an account  ? <Link className='text-[#FF3811] font-semibold' to="/login">Log In</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUP;