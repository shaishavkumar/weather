const express = require('express');
const path = require('path');
const hbs = require('hbs');
const App = express();
const port = process.env.PORT || 8000;

//public static path
const static_path= path.join(__dirname,"../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


App.set('view engine', 'hbs');
App.set('views', template_path);
hbs.registerPartials(partials_path);

App.use(express.static(static_path));


//routing

App.get("/", (req, res) => {
    res.render('index');
});

// App.get("/about", (req, res) => {
//     res.render('about');
// });

App.get("/weather", (req, res) => {
    res.render('weather');
});

App.get("*", (req, res) =>{
    res.render("404error", {
        errorMsg: 'Oops! Page Not Found'
    });
  });

App.listen(port, (error) => {
    if (!error) {
        console.log(`Listening to the port at ${port}`);
    } else {
        console.log(error);
    }
})