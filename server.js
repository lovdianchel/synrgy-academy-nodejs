const Express = require('express')
const App = Express()
const PORT = 7777

App.set("view engine", "ejs")

App.listen(PORT, function() {
    console.log("Server is running in port: " + PORT)
})


App.use(Express.static('public'));
App.use('/css', Express.static(__dirname + '/node_modules/bootstrap/dist/css'));


App.get("/", (req, res) => {
    res.render('home')
})

App.get("/articles", (req, res) => {
    res.render('articles')
})

App.get("/product", (req, res) => {
    res.render('product')
})