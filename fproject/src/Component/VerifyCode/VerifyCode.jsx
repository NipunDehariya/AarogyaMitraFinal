import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function VerifyCode() {
    const [code, setCode] = useState('');

    useEffect(() => {
        generateCode();
    }, []);

    const generateCode = () => {
        const newCode = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
        setCode(newCode);
    };

    return <>
        <div className="d-flex justify-content-center align-items-center py-3">
            <img src="7076594691537356148.svg" alt="" className="w-25" />
        </div>
        <div className='d-flex justify-content-center align-items-center'>
            <h1>Your verification code:</h1>
           <h2> <p className='mb-4 text-xxl-center'>{code}</p></h2>
        </div>

        <div>
            <Link to='/Home'>
            <button className='mt-3 d-grid gap-2 col-6 mx-auto my-32 btn btn-outline-success'>
                
                    GO TO Home
            </button>
            </Link> 
        </div>
    </>
}

export default VerifyCode;
