import { useState } from "react";

function StateArray() {
    const [cities, setCities] = useState(["İstanbul", "Ankara", "İzmir"]);

    return (
        <div>
            <h1>State Array</h1>
            <hr />
            <ul>
                {
                    cities.map((city, i) => <li key={i}>{city}</li>)
                }
            </ul>
            <br />
            <br />
            <button onClick={() => setCities([...cities, "Adana"])}>Add New City</button>
        </div>
    );
}

export default StateArray;