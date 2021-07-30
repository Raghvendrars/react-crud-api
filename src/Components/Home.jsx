import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {

    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/data");
        setUser(result.data.reverse());
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/data/${id}`);
        loadUsers();
    };
    return (
        <div className="container mt-3">
            <h2 className="mt-4 mb-4">API Call</h2>
            <div className="row">
                <div className="col">
                    <a href="/adddata"><button className="btn btn-lg btn-primary mt-2 mb-2" style={{ float: "right" }}>Add Employee</button></a>
                </div>
            </div>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Age</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{user.employee_name}</td>
                            <td>{user.employee_salary}</td>
                            <td>{user.employee_age}</td>
                            <td>
                                <Link
                                    class="btn btn-outline-primary mr-2 ml-3"
                                    to={`/editdata/${user.id}`}
                                >
                                    Edit
                                </Link>
                                <Link
                                    class="btn btn-danger ml-3"
                                    onClick={() => deleteUser(user.id)}
                                >
                                    Delete
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home;

