/**
 * @author Calvin Feng
 */

import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send({
        count: 0,
        results: []
    });
});

router.get('/:id', (req: Request, res: Response) => {
    let { id } = req.params;

    res.send({
        id: id,
        title: 'Upper Chest Day',
        todo_list: ['bench press', 'military press', 'bilateral raise']
    });
});

export const TodoController: Router = router;