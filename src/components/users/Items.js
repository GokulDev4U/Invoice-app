import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
    const [item, setItem] = useState({
        name: "",
        description: "",
        noofunits: "",
        quantity: "",
        unitprice: "",
        discount: "",
        tax: ""
    });
    const { id } = useParams();

    useEffect(() => {
        loadItem();
    }, []);

    const loadItem = async () => {
        const res = await axios.get(`http://localhost:3003/items/${id}`);
        setItem(res.data);
    };
    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/general">
                back to Home
      </Link>
            <h1 className="display-4">Item Id: {id}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">name: {item.name}</li>
                <li className="list-group-item">item name: {item.description}</li>
                <li className="list-group-item">noofunits: {item.noofunits}</li>
                <li className="list-group-item">quantity: {item.quantity}</li>
                <li className="list-group-item">unitprice: {item.unitprice}</li>
                <li className="list-group-item">discount: {item.discount}</li>
                <li className="list-group-item">tax: {item.tax}</li>
            </ul>
        </div>
    );
};


export default User;