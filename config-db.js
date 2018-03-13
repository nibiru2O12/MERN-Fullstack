import mysql from 'mysql';

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'dbContest'
});


conn.connect((err)=>{
    if(err) throw err;
    console.log('connected on database');
});

export default conn;

