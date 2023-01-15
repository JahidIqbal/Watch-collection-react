import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./MyOrders.css";
//added
const MyOrders = () => {
  const { user } = useAuth();
  const [myOrder, setMyOrder] = useState([]);
  useEffect(() => {
    const url = `https://watch-server-pied.vercel.app/orders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://watch-server-pied.vercel.app/orders/${id}`;
    const isReady = window.confirm(
      "are you sure you want to delete this order?"
    );
    if (isReady) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Order deleted succssfully");
            const remaining = myOrder.filter((order) => order._id !== id);
            setMyOrder(remaining);
          }
        });
    }
  };

  return (
    <div
      className="tab"
      style={{ background: `linear-gradient(to right, #606c88, #3f4c6b)` }}
    >
      <div>
        <table className="table table-borderless  text-white ">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          {myOrder?.map((pd) => (
            <tbody key={pd._id}>
              <tr>
                <td>{pd?.name}</td>
                <td>{pd?.email}</td>
                <td>{pd?.Address}</td>

                <td>
                  <button
                    onClick={() => handleDelete(pd._id)}
                    className="btn btn-danger btn-sm mx-2"
                  >
                    <i className="fas fa-trash text-danger"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
