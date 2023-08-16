import axios from "axios";
import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const userUrl = `https://crudcrud.com/api/67ed723164274b83ac7250832a654081`;

  const getData = () => {
    axios.get(`${userUrl}/addCart`).then((res) => {
      setCart(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  let total = 0;
  return (
    <div className="container ">
      <h1>Cart</h1>
      <div className="row">
        <div className="col-md-8">
          <table className="table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Shoe Name</th>
                <th>Size</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, i) => {
                total = total + +item.price;
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item.shoeName}</td>
                    <td>{item.size}</td>
                    <td>{item.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>total {total}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;