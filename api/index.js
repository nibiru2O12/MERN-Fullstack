import express from 'express';

import conn from '../config-db';

const router = express.Router();

router.get('/contests',(req,res)=>{

    const sql = 'select * from tblcontests';
    conn.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({contests : (result)});
    });

});

router.get('/contest/:id',(req,res)=>{

    const {id} = req.params;

    const sql = `select * from tblcontests where id=${id}`;
    conn.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({
            contest : {...result[0]}
        });
    });

});

router.get('/contest/:id/names',(req,res)=>{

    const {id} = req.params;
    const sql = `select * from tblnames where contestId=${id}`;
    conn.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({
            names : result 
        });
    });

});

router.post('/contest/:contestID/:name',(req)=>{
    const {contestID,name} = req.params;

    const sql = 'insert into tblnames (name,contestId) values(?,?)';
    conn.query(sql,[name,contestID],(err)=>{
        if(err) throw err;
        return true;
    });
});

router.delete('/name/:nameID',(req)=>{
    const {nameID} = req.params;
    const sql ='delete from tblnames where id=?';
    conn.query(sql,[nameID],(err)=>{
        if(err) throw err;
        return true;
    });
});

export default router;