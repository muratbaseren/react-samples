const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const { ObjectId } = require("mongodb");
const mongodb_conn_str = "mongodb://localhost:27017";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

MongoClient.connect(mongodb_conn_str, {
    useUnifiedTopology: true
})
    .then(client => {
        const db = client.db("my-shop-app-db");
        console.log('Connected to Database');

        app.get("/", (req, res) => {
            // console.log("Hello world!");
            // res.send("Response completed.");

            const cursor = db.collection("users").find().toArray()
                .then(users => {
                    res.render('index.ejs', { "users": users });
                });

            // res.sendFile(__dirname + "/index.html");
        });

        app.post("/create", (req, res) => {
            // console.log(req.body);
            const users = db.collection("users");
            users.insertOne(req.body)
                .then(result => {
                    res.redirect("/");
                })
                .catch(error => console.error(error));
        });

        app.put("/update", (req, res) => {
            // console.log("update", req.body);

            db.collection("users").findOneAndUpdate(
                { _id: new ObjectId(req.body._id) },
                {
                    $set: {
                        name: req.body.name,
                        surname: req.body.surname
                    }
                },
                { upsert: true })
                .then(result => {
                    console.log("update result", result);
                    res.json("success");
                })
                .catch(err => console.error(err));
        });

        app.delete("/remove", (req, res) => {
            // console.log("update", req.body);

            db.collection("users").deleteOne(
                {
                    _id: new ObjectId(req.body._id)
                })
                .then(result => {
                    if (result.deletedCount === 0) {
                        return res.json('User does not exists. id :' + id);
                    }
                    res.json("deleted");
                })
                .catch(err => console.error(err));
        });

        app.listen(port, () => {
            console.log("listening on " + port);
        });
    })
    .catch(error => console.error(error))