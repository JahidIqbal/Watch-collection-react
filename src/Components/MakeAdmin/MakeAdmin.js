import React, { useState } from 'react';
import admin from '../../images/admin.jpg'

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);


    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://glacial-temple-59647.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>


            <h3 className="text-dark fw-bolder ">ADMIN</h3>
            <form onSubmit={handleAdminSubmit}>
                <input
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    placeholder="Email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <button type="submit" className=" btn-info">Make Admin</button>
            </form>
            {success && <div className="alert alert-success" role="alert">
                Admin created successFully!
            </div>}

            <img className="img-fluid" src={admin} alt="" />
        </div>
    );
};

export default MakeAdmin;