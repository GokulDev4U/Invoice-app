import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [Items, setItems] = useState([]);

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = async () => {
        const result = await axios.get("http://localhost:3003/items");
        setItems(result.data.reverse());
    };

    const deleteItems = async id => {
        await axios.delete(`http://localhost:3003/items/${id}`);
        loadItems();
    };

    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">No Of Units</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Discount</th>
                            <th scope="col">Tax</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Items.map((item, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.noofunits}</td>
                                <td>{item.quantity}</td>
                                <td>{item.unitprice}</td>
                                <td>{item.discount}</td>
                                <td>{item.tax}</td>
                                <td>
                                    <Link class="btn btn-primary mr-2" to={`/items/${item.id}`}>
                                        View
                  </Link>
                                    <Link
                                        class="btn btn-outline-primary mr-2"
                                        to={`/items/edit/${item.id}`}
                                    >
                                        Edit
                  </Link>
                                    <Link
                                        class="btn btn-danger"
                                        onClick={() => deleteItems(item.id)}
                                    >
                                        Delete
                  </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;