
import axios from "axios";
import React, { useRef } from "react";

const Form = () => {
  const nameRef = useRef();
  const decRef = useRef();
  const priceRef = useRef();
  const lRef = useRef();
  const mRef = useRef();
  const sRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const obj = {
      shoeName: nameRef.current.value,
      description: decRef.current.value,
      price: priceRef.current.value,
      large: lRef.current.value,
      medium: mRef.current.value,
      small: sRef.current.value,
    };
    const url = "https://crudcrud.com/api/67ed723164274b83ac7250832a654081";
    console.log(obj);
    axios.post(`${url}/cart`, obj);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="row">
        <div className="col-md-2 form-group ">
          <label className="bg-primary p-2 text-white mb-2 mt-4 d-grid">
            Shoes Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Shoes Name"
            ref={nameRef}
          />
        </div>
        <div className="col-md-2 form-group ">
          <label className="bg-success p-2 text-white mb-2 mt-4 d-grid">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            ref={decRef}
          />
        </div>
        <div className="col-md-2 form-group ">
          <label className="bg-primary p-2 text-white mb-2 mt-4 d-grid">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            ref={priceRef}
          />
        </div>
        <div className="col-md-1 form-group ">
          <label className="bg-danger p-2 text-white mb-2 mt-4 d-grid">L</label>
          <input
            type="number"
            className="form-control"
            placeholder="Quantity"
            ref={lRef}
          />
        </div>
        <div className="col-md-1 form-group ">
          <label className="bg-warning p-2 text-white mb-2 mt-4 d-grid">
            M
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Quantity"
            ref={mRef}
          />
        </div>
        <div className="col-md-1 form-group ">
          <label className="bg-danger p-2 text-white mb-2 mt-4 d-grid">S</label>
          <input
            type="number"
            className="form-control"
            placeholder="Quantity"
            ref={sRef}
          />
        </div>
        <div className="col-md-2 form-group ">
          <button className="mt-5 p-3 btn btn-primary" type="submit">
            Add To Cart
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;