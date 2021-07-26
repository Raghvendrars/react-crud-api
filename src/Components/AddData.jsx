import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./Styles.css";

const AddData = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        employee_name: "",
        employee_salary: "",
        employee_age: "",
    });

    const { employee_name, employee_salary, employee_age} = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/data", user);
        history.push("/");
    };
    return (
        <div className="container">
            <h1>This is add data</h1>
            <div className="add-form-row">
                <div className="row">
                    <div className="col">
                        <a href="/"><button className="btn btn-md btn-primary mt-2 mb-2" style={{ float: "right" }}>Back To Home</button></a>
                    </div>
                </div>
                <form onSubmit={e => onSubmit(e)}>
                    <div class="form-group mb-3">
                        <label for="exampleInputPassword1">Employee Name</label>
                        <input type="text" name="employee_name" class="form-control" id="exampleInputPassword1" value={employee_name} onChange={e => onInputChange(e)} />
                    </div>
                    <div class="form-group mb-3">
                        <label for="exampleInputPassword1">Employee Salary</label>
                        <input type="text" name="employee_salary" class="form-control" id="exampleInputPassword1" value={employee_salary} onChange={e => onInputChange(e)} />
                    </div>
                    <div class="form-group mb-3">
                        <label for="exampleInputPassword1">Employee Age</label>
                        <input type="text" name="employee_age" class="form-control" id="exampleInputPassword1" value={employee_age} onChange={e => onInputChange(e)} />
                    </div>
                    <button type="submit" class="btn btn-primary">Add Employee</button>
                </form>
            </div>
        </div>
    )
}

export default AddData;
