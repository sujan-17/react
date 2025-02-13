const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '20060617Sujan',
    database: 'demo 1'
    });

app.get('/',(req,res) => {
    const sql = 'SELECT * FROM data';
    db.query(sql,(err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post('/create',(req,res) => {
    const sql = "INSERT INTO data (name,email,phone) VALUES (?)";
    const data = [req.body.name,req.body.email,req.body.phone];
    db.query(sql,[data],(err,data) => {
        if(err) return res.json(err);
        return res.json("created");

})
})
app.put('/update/:id',(req,res) => {
    const sql = "UPDATE data SET name = ?, email = ?, phone = ? WHERE id = ?";
    const id = req.params.id;
    const data = [req.body.name,req.body.email,req.body.phone];
    db.query(sql,[...data,id],(err,data) => {
        if(err) return res.json(err);
        return res.json("Updated");

})
})

app.delete('/delete/:id',(req,res) => {
    const sql = "DELETE FROM data WHERE id = ?";
    const id = req.params.id;
    db.query(sql,[id],(err,data) => {
        if(err) return res.json(err);
        return res.json("Deleted");
})
})


app.listen(8017,() => {
    console.log('server is running on port 8017');
})
