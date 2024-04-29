import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {
    const [product, setProduct] = useState([]);
    const [viewer, setViewer] = useState(0);
    const [viewingOne, setViewingOne] = useState(false);
    const [viewingAll, setViewingAll] = useState(false);
    const [oneProduct, setOneProduct] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
        rating: ""
    });

    useEffect(() => {
        getAllProducts();
    }, []);

    function getAllProducts() {
        fetch("http://127.0.0.1:8081/products")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => {
                console.error("Error fetching catalog:", error);
            });
    }

    function getOneProduct(id) {
      setViewingOne(true)
        if (id >= 1 && id <= 20) {
            fetch(`http://127.0.0.1:8081/products/${id}`)
                .then((response) => response.json())
                .then((data) => {
                  data = [data]
                  console.log(data);
                    setOneProduct(data);
                });
        } else {
            console.log("Wrong number of Product id.");
        }
    }

    function handleInputChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function createProduct() {
        fetch("http://127.0.0.1:8081/addProduct", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            console.log("Product created:", data);
            getAllProducts(); 
        })
        .catch((error) => {
            console.error("Error creating product:", error);
        });
    }

    function updateProduct(id) {
        fetch(`http://127.0.0.1:8081/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            console.log("Product updated:", data);
            getAllProducts();
            getOneProduct(id); 
        })
        .catch((error) => {
            console.error("Error updating product:", error);
        });
    }

    function deleteProduct(id) {
        fetch(`http://127.0.0.1:8081/delete/${id}`, {
            method: "DELETE"
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            getAllProducts();
            setViewingOne(false);
            return response.json();
        })     
        .catch((error) => {
            console.error("Error deleting product:", error);
        });
    }

    const showOneItem = oneProduct.map((el) => (
           <div>
              <img src={el.image} width={150} alt="images" /> <br />
              ID: {el.id} <br />
              Title: {el.title} <br />
              Category: {el.category} <br />
              Price: {el.price} <br />
              Rating: {el.rating.rate} ({el.rating.count} reviews)
        </div>
    ));

    const showAllItems = product.map((el) => (
        <div key={el.id}>
            <img src={el.image} width={150} alt="images" /> <br />
            ID: {el.id} <br />
            Title: {el.title} <br />
            Category: {el.category} <br />
            Price: {el.price} <br />
            Rating: {el.rating.rate} ({el.rating.count} reviews)
        </div>
    ));

    return (
        <div>
        <div>
        <div>
    <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Product App</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className={`nav-link ${viewer==0 ? 'active' : ''}`} style={{ cursor: 'pointer' }} onClick={() => { setViewer(0); setViewingOne(false) }}>All Products</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${viewer==1 ? 'active' : ''}`} style={{ cursor: 'pointer' }} onClick={() => { setViewer(1); setViewingOne(false) }}>Add Product</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${viewer==2 ? 'active' : ''}`} style={{ cursor: 'pointer' }} onClick={() => { setViewer(2); setViewingOne(false) }}>Update Product</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${viewer==2 ? 'active' : ''}`} style={{ cursor: 'pointer' }} onClick={() => { setViewer(3); setViewingOne(false) }}>Delete Product</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${viewer==2 ? 'active' : ''}`} style={{ cursor: 'pointer' }} onClick={() => { setViewer(4); setViewingOne(false)}}>Student Information</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <h1>Catalog of Products</h1>
</div>
        </div>
            {viewer==0 && (
              <div>
                <h3>Show all available Products. Or enter a product ID to view.</h3>
                <button onClick={() => { setViewingOne(false); setViewingAll(true); getAllProducts(); }}>Show All ...</button>
                <input
                    type="text" id="message" name="message" placeholder="id" onChange={(e) => { setViewingOne(true); setViewingAll(false); getOneProduct(e.target.value); }} />
                {viewingOne && showOneItem}
                {viewingAll && showAllItems}
                </div>
            )}
            {viewer==1 && (
                <div>
                    <h3>Input product data to create:</h3>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        createProduct();
                    }}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title:</label>
                        <input type="text" className="form-control" id="title" name="title" placeholder="Title" onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price:</label>
                        <input type="text" className="form-control" id="price" name="price" placeholder="Price" onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description:</label>
                        <input type="text" className="form-control" id="description" name="description" placeholder="Description" onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category:</label>
                        <input type="text" className="form-control" id="category" name="category" placeholder="Category" onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image URL:</label>
                        <input type="text" className="form-control" id="image" name="imageUrl" placeholder="Image URL" onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="rating" className="form-label">Rating:</label>
                        <input type="text" className="form-control" id="rating" name="rating" placeholder="Rating" onChange={handleInputChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Create Product</button>
                    </form>
                </div>
            )}
            {viewer==2 && (
                <div>
                    <h3>Select an item to update:</h3>
                    <input
                        type="text" id="message" name="message" placeholder="id" onChange={(e) => getOneProduct(e.target.value)} />
                    {viewingOne && showOneItem}
                    {viewingOne && (
                      <div>
                           <form onSubmit={(e) => {
                        e.preventDefault();
                        updateProduct(oneProduct[0].id);
                    }}>
                      <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price:</label>
                        <input type="text" className="form-control" id="price" name="price" placeholder="Price" onChange={handleInputChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Update Price</button>
                    </form>
                      </div>
                    )}
                </div>
            )}
            {viewer==3 && (
              <div>
                <h3>Select an item's id to delete:</h3>
                    <input
                        type="text" id="message" name="message" placeholder="id" onChange={(e) => getOneProduct(e.target.value)} />
                    {viewingOne && showOneItem}
                    {viewingOne && (
                        <button
                            type="submit"
                            className="btn btn-danger"
                            onClick={() => deleteProduct(oneProduct[0].id)}
                        >
                            Delete Product
                        </button>
                    )}

              </div>
            )}
            {viewer==4 && (
                <div>
                <h3>Student Information:</h3>
                <p><strong>Dhairya Kachalia</strong> (dhairyak), </p><br></br>
                <p><strong>Haad Cheema</strong> (Haad756), </p><br></br>
                
                <p><strong>COM S 319, Construction of User Interfaces</strong> Assignment 3</p><br></br>
                <p>Professor Abraham Aldaco</p><br></br>
                <p>We’ve developed an interactive product catalog that allows users to perform essential operations: create, read, update, and delete products. The backend is powered by a MongoDB connection through Node.js, while the frontend leverages React, Tailwind CSS, and Bootstrap</p>

            </div>
            )}
        </div>
    );
}

export default App;