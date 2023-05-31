import React, { useContext } from 'react';
import { AuthContext } from '../../LogIn/providers/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn}=useContext(AuthContext);
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then((result)=>{
            const loggedUser=result.user;
            console.log('google log in user', loggedUser)
        })
        .catch((error)=>{
            console.log(error)
        })

    }
    return (
        <div>
            <div className="divider">OR sign with</div>
            <div className='text-center'>
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                   G
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;