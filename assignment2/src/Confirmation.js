import React from "react";

function Confirmation({ dataF, updateHooks }) {
  
  const calculateTotal = (data) => {
    let total = 0;
    data.forEach((item) => {
      total += item.price;
    });
    return total.toFixed(2);
  };

  return (
<div className="container">
  <div className="row">
    <div className="col">
      <h1 className="mb-4">Payment summary:</h1>
      <h3>{dataF.formData.fullName}</h3>
      <p>{dataF.formData.email}</p>
      <p>{dataF.formData.city}, {dataF.formData.state} {dataF.formData.zip}</p>
      <div className="row mt-4">
        <div className="col">
          <h4>Total:</h4>
          <p className="lead">${calculateTotal(dataF)}</p>
        </div>
      </div>
      <button className="btn btn-primary" onClick={updateHooks}>Return to browsing</button>
    </div>
    <div className="col">
      {dataF.map((item) => (
        <div className="card mb-3" key={item.id} style={{ maxWidth: '200px' }}>
          <img className="card-img-top img-thumbnail" src={item.image} alt={item.title} style={{ width: '150px', height: '150px' }} />
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: '16px' }}>{item.title}</h5>
            <p className="card-text" style={{ fontSize: '14px' }}>${item.price*item.quantity}</p>
            <p className="card-text" style={{ fontSize: '14px' }}>{item.quantity}x for ${item.price} each</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
}

export default Confirmation;