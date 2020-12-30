import {Router, Request, Response } from 'express';

export const router = Router();

router.get('/mensajes/:id', (req:Request, res:Response) => {
   
    let id = req.params.id;
    console.log(`El ID ingresado es ${id}`);
    
    res.json({ 
        status: 'OK',
        mensaje:'Get Todo Esta Bien'
    });

    
});


router.post('/mensajes', (req:Request, res:Response) => {

    let body = req.body.cuerpo;

    console.log(body);

    res.json({ 
        status: 'OK',
        mensaje:'Post Todo Esta Bien'
    });

    
});