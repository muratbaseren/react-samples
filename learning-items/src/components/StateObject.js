import { useState } from "react";

function StateObject() {

    const [user, setUser] = useState({ name: "Murat", surname: "Başeren", age: 30 });

    return (
        <div>
            <h1>State Object</h1>
            <hr />
            <div>
                {user.name} {user.surname} ({user.age})
            </div>
            <br />
            <br />
            <button onClick={() => setUser({ ...user, age: 33 })}>Change Age</button>
            <button onClick={() => setUser({ ...user, name: "Kadir Murat", surname: "BAŞEREN", age: 33 })}>Change User Info</button>
        </div>
    );
}

export default StateObject;