import { useState, useEffect } from "react";

function MountUnmount() {

    const [number, setNumber] = useState(10);
    const [text, setText] = useState("Lorem");

    useEffect(() => {
        // mount olayı için yapılacak işlemleri döndürdüğümüz metot.
        console.log("MountUnmount component DOM 'a eklendi.");

        return () => {
            // unmount olayı için yapılacak işlemleri döndürdüğümüz metot.
            console.log("MountUnmount component DOM dan kaldırıldı.");
        };
    }, []);

    // useEffect(() => {
    //     console.log("useEffect çalıştı.");
    // });

    return (
        <div>
            <h1>Using Mount/Unmount</h1>
            <hr />

            <div>
                <h2>{number}</h2>
                <button onClick={() => setNumber(number + 1)}>Arttır</button>
            </div>
            <br />
            <br />
            <div>
                <h2>{text}</h2>
                <button onClick={() => setText("ipsum")}>Yazı Değiştir</button>
            </div>
        </div>
    );
}

export default MountUnmount;