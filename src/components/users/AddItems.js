import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddItems = () => {
    let history = useHistory();
    const [item, setItems] = useState({
        name: "",
        description: "",
        noofunits: "",
        quantity: "",
        unitprice: "",
        discount: "",
        tax: ""
    });

    const { name, description, noofunits, quantity, unitprice, discount, tax  } = item;
    const onInputChange = e => {
        setItems({ ...item, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/items", item);
        history.push("/general");
    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A item</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Items Name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Items Description"
                            name="description"
                            value={description}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Items No of Units"
                            name="noofunits"
                            value={noofunits}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Items Quality"
                            name="quantity"
                            value={quantity}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Items Discount"
                            name="discount"
                            value={discount}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Items Unit Price"
                            name="unitprice"
                            value={unitprice}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Items Tax"
                            name="tax"
                            value={tax}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block">Add item</button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;