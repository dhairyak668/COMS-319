import React, { useState } from "react";

function Cart({ onSubmit, dataF }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    creditCard: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const calculateTotal = (data) => {
    let total = 0;
    data.forEach((item) => {
      total += item.price;
    });
    return total.toFixed(2);;
  };

  const handleClick = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    const zipRegex = /^\d{5}$/;
    if (!zipRegex.test(formData.zip)) {
      alert('Please enter a 5-digit zip code.');
      return;
    }
    
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.creditCard ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.zip
    ) {
      alert('Please fill out all required fields.');
      return;
    }
  
    dataF.formData = formData;
    dataF.total = calculateTotal(dataF);
    onSubmit(dataF);
  };

  return (
    <div className="container">
          <div className="d-flex flex-wrap">
          {dataF.map((item) => (
            <div className="card mb-3" key={item.id} style={{ maxWidth: '200px', flex: '0 0 auto' }}>
              <img className="card-img-top img-thumbnail" src={item.image} alt={item.title} style={{ width: '150px', height: '150px' }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '16px' }}>{item.title}</h5>
                <p className="card-text" style={{ fontSize: '14px' }}>${item.price*item.quantity}</p>
                <p className="card-text" style={{ fontSize: '14px' }}>{item.quantity}x for ${item.price} each</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-4">
        <div className="col">
          <h4>Total:</h4>
          <p className="lead">${calculateTotal(dataF)}</p>
        </div>
      </div>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="creditCard"
            value={formData.creditCard}
            onChange={handleChange}
            placeholder="Credit Card"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
            placeholder="Address 2"
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              required
            />
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="text"
              className="form-control"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              required
            />
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="text"
              className="form-control"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder="Zip"
              required
            />
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Order
        </button>
      </form>
    </div>
  );
}

export default Cart;