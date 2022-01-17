import { useState } from "react";

function UsingState() {
    const [name, setName] = useState("Murat");
    const [surname, setSurname] = useState("Başeren");

    return (
        <div>
            <h1>Using State</h1>
            <hr />
            <div>
                {name} {surname}
            </div>
            <br />
            <br />
            <br />
            <button onClick={() => setName("Kadir Murat")}>Change Name</button>
            <button onClick={() => setSurname("BAŞEREN")}>Change Surname</button>
        </div>
    );
}

export default UsingState;