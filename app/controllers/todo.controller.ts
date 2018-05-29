/**
 * @author Calvin Feng
 */

import { Router, Request, Response } from 'express';

const router: Router = Router();

const todoItems:any = {
    1: {
        id: 1,
        name: 'Bench Press',
        description: '5 sets of 8 reps for 160 pounds'
    },
    2: {
        id: 2,
        name: 'Military Press',
        description: '5 sets of 5 reps at 125 pounds'
    },
    3: {
        id: 3,
        name: 'Blitaral Raise',
        description: '5 sets of 10 reps at 25 lbs on each arm'
    }
}

router.get('/', (req: Request, res: Response) => {
    res.send({
        count: 0,
        results: []
    });
});

router.get('/:id', (req: Request, res: Response) => {
    let { id } = req.params;

    res.send(todoItems[id]);
});

export const TodoController: Router = router;