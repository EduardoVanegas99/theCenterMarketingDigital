import { Router, Request, Response } from "express";

const usuarioRutas  = Router();


usuarioRutas.post('/crear', (req: Request, res: Response)=>{

    const usuario = {
        nombre: req.body.nombre,
        password: req.body.password
    }

    res.json({
        ok:true
    })
});

export default usuarioRutas;

