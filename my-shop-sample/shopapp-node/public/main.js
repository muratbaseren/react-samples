function update(id) {
    // console.log("_id", id);

    fetch("http://localhost:3001/update", {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            _id: id,
            name: "Murat",
            surname: "Başeren"
        })
    })
        .then(res => res.ok && res.json())
        .then(result => {
            if (result === "success")
                window.location.reload(true);
        });
}

function remove(id) {
    // console.log("_id", id);

    fetch("http://localhost:3001/remove", {
        method: "delete",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            _id : id
        })
    })
        .then(res => res.ok && res.json())
        .then(result => {
            if (result === "deleted")
            {
                window.location.reload(true);
            }
            else {
                alert(result);
            }
        });
}