import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css'

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrder(data));
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/orders/${id}`;
        const isReady = window.confirm('are you sure you want to delete this order?');
        if (isReady) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Order deleted succssfully')
                        const remaining = myOrder.filter(order => order._id !== id);
                        setMyOrder(remaining);

                    }
                })
        }
    }



    return (

        <div className="container mb-4">
            <div>
                <table className="table table-bordered "  >
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>


                    {
                        myOrder?.map((pd) =>

                            <tbody>
                                <tr>
                                    <td>{pd?.name}</td>
                                    <td>{pd?.email}</td>
                                    <td>{pd?.Address}</td>

                                    <td><button type="button" className="btn btn-info btn-sm mb-2" >Pending</button>

                                        <button onClick={() => handleDelete(pd._id)} className="btn btn-danger btn-sm mx-2">Delete</button>

                                    </td>


                                </tr>
                            </tbody>

                        )

                    }




                </table>

            </div>

        </div>

    );
};

export default MyOrders;