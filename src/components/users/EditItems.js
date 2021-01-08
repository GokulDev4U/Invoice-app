import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";


const EditItems = () => {
    let history = useHistory();
    const { id } = useParams();
    const [item, setItem] = useState({
        name: "",
        description: "",
        noofunits: "",
        quantity: "",
        unitprice: "",
        discount: "",
        tax: ""
    });

    const { name, description, noofunits, quantity, unitprice, discount, tax } = item;
    const onInputChange = e => {
        setItem({ ...item, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadItem();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/items/${id}`, item);
        history.push("/general");
    };

    const loadItem = async () => {
        const result = await axios.get(`http://localhost:3003/items/${id}`);
        setItem(result.data);
    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit A item</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Description"
                            name="description"
                            value={description}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your No of Units"
                            name="noofunits"
                            value={noofunits}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Quality"
                            name="quantity"
                            value={quantity}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Discount"
                            name="discount"
                            value={discount}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Unit Price"
                            name="unitprice"
                            value={unitprice}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Tax"
                            name="tax"
                            value={tax}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    
                    <button className="btn btn-warning btn-block">Update item</button>
                </form>
            </div>
        </div>
    );
};

export default EditItems;
