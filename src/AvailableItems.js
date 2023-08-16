import axios from "axios";
import React, { useEffect, useState } from "react";
import Cart from "./Cart";

const AvailableItems = () => {
  const [cartData, setCartData] = useState([]);

  const url = "https://crudcrud.com/api/67ed723164274b83ac7250832a654081";
  const userUrl = `https://crudcrud.com/api/67ed723164274b83ac7250832a654081`;

  const getData = () => {
    axios.get(`${url}/cart`).then((res) => {
      setCartData(res.data);
    });
  };

  const largeHandler = (id, item) => {
    const existingItemIndex = cartData.findIndex((el) => id === el._id);
    const existingItem = cartData[existingItemIndex];
    const newItem = { ...existingItem, large: +existingItem.large - 1 };
    const updatedItems = [...cartData];
    updatedItems[existingItemIndex] = newItem;
    setCartData(updatedItems);

    axios
      .post(`${userUrl}/addCart`, {
        shoeName: item.shoeName,
        size: "Large",
        price: item.price,
      })
      .then(<Cart />);
  };
  const mediumHandler = (id, item) => {
    const existingItemIndex = cartData.findIndex((el) => id === el._id);
    const existingItem = cartData[existingItemIndex];
    const newItem = { ...existingItem, medium: +existingItem.medium - 1 };
    const updatedItems = [...cartData];
    updatedItems[existingItemIndex] = newItem;
    setCartData(updatedItems);

    axios.post(`${userUrl}/addCart`, {
      shoeName: item.shoeName,
      size: "Medium",
      price: item.price,
    });
  };
  const smallHandler = (id, item) => {
    const existingItemIndex = cartData.findIndex((el) => id === el._id);
    const existingItem = cartData[existingItemIndex];
    const newItem = { ...existingItem, small: +existingItem.small - 1 };
    const updatedItems = [...cartData];
    updatedItems[existingItemIndex] = newItem;
    setCartData(updatedItems);

    axios.post(`${userUrl}/addCart`, {
      shoeName: item.shoeName,
      size: "Small",
      price: item.price,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mt-5">
      <h3>Available Shoes</h3>
      <div className="row ">
        <div className="com-md-12">
          <table className="table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Shoe Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Large</th>
                <th>Medium</th>
                <th>Small</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item, i) => {
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item.shoeName}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>

                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => largeHandler(item._id, item)}
                      >
                        Buy Large({item.large})
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => mediumHandler(item._id, item)}
                      >
                        Buy Medium({item.medium})
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => smallHandler(item._id, item)}
                      >
                        Buy Small({item.small})
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AvailableItems;