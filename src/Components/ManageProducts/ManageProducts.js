import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [manageProducts, setManageProducts] = useState([])
    useEffect(() => {
        fetch('https://glacial-temple-59647.herokuapp.com/manageProducts')
            .then(res => res.json())
            .then(data => setManageProducts(data))
    }, [])

    const handleRemove = id => {
        const url = `https://glacial-temple-59647.herokuapp.com/manageProducts/${id}`;
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
                        const remaining = manageProducts.filter(order => order._id !== id);
                        setManageProducts(remaining);

                    }
                })
        }
    }

    return (
        <div className=" ">
            <div>
                <table className="table table-bordered "  >
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>


                    {
                        manageProducts?.map((pd) =>

                            <tbody key={pd._id}>
                                <tr>
                                    <td>{pd?.name}</td>
                                    <td>{pd?.price}</td>

                                    <td>
                                        <button onClick={() => handleRemove(pd._id)} className="btn btn-danger btn-sm mx-2">Remove</button>

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

export default ManageProducts;