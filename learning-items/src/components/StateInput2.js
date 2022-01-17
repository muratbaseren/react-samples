import { useState } from "react";

function StateInput2() {
    const [user, setUser] = useState({ name: "Murat", surname: "Başeren", age: 30 });

    const onChangeValue = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h1>State Input</h1>
            <hr />
            <div>
                {user.name} {user.surname} ({user.age})
            </div>
            <br />
            <div>
                <input name="name" type="text" placeholder="name" value={user.name} onChange={onChangeValue} />
                <input name="surname" type="text" placeholder="surname" value={user.surname} onChange={onChangeValue} />
                <input name="age" type="number" placeholder="age" value={user.age} onChange={onChangeValue} />
            </div>
            <br />

        </div>
    );
}

export default StateInput2;