const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {

    const server = express();

    server.get("/iletisim", (req, res) => {
        return app.render(req, res, "/about");
    });

    server.get("/urunler", (req, res) => {
        return app.render(req, res, "/products");
    });

    server.get("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, err => {
        if (err) throw err;
        console.log("Ready on http://localhost:3000");
    });

});