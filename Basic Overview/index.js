const path = require('path');
const express = require('express');

let app = express();

//
app.set('views', path.join(__dirname,"views"));
app.set('view engine', 'ejs');



// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));


// Homepage Route
app.get('/', (req,res)=>{
	res.render('index')
})

// Server Start
app.listen(3000, ()=>{
	console.log(`Server started on port 3000`);
})

