import { Request, Response, Router } from "express";

const router = Router();


router.get('/projects', (req: Request, res: Response) => {
    res.send({ data: "esto es el dato que retorna"});

});

export { router }