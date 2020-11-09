const { query } = require("express");
const express = require("express");
const helmet = require("helmet");
const app = express();
const fetch = require('node-fetch');
const PORT = process.env.PORT || 8080;
app.use(
    helmet({
        contentSecurityPolicy: false,
    })
);

app.get('/media', function (req, res) {
    fetch(`https://itunes.apple.com/search?term=${req.query.artist}&limit=25&entity=${req.query.radioValue}`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            res.send(json)
        });

});



const path = require("path");
if (process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    });
}


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});



