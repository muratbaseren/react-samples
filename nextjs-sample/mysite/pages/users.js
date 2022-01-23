import { useState } from "react";
import Layout from "../components/Layout";
import fetch from "isomorphic-fetch";

export default () => {

    const [users, setUsers] = useState([]);

    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }

            return response.json();
        })
        .then((users) => setUsers(users));

    return (
        <Layout>
            <div>
                <h4>Users</h4>
                <hr />
            </div>

            <ul className="list-group">
                {
                    users.map((user) => {
                        return <li key={user.id} className="list-group-item">{user.name}</li>
                    })
                }
            </ul>
        </Layout>
    );
}