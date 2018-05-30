"use strict";
/**
 * @author Calvin Feng
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const todoStore = new Map([
    [1, { id: 1, name: 'Bench Press', description: '5 sets of 8 reps for 160 pounds' }],
    [2, { id: 2, name: 'Military Press', description: '5 sets of 5 reps at 125 pounds' }],
    [3, { id: 3, name: 'Blitaral Raise', description: '5 sets of 10 reps at 25 lbs on each arm' }]
]);
router.post('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const name = req.body['name'];
    const description = req.body['description'];
    if ((name === undefined || name === "") || (description === undefined || description === "")) {
        res.status(400);
        res.send({ error: `name and description are required for creating a todo` });
        return;
    }
    const newTodo = {
        id: todoStore.size + 1,
        name,
        description
    };
    todoStore.set(newTodo.id, newTodo);
    res.status(201);
    res.send(newTodo);
});
router.get('/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let { id } = req.params;
    if (!todoStore.get(parseInt(id, 10))) {
        res.status(404);
        res.send({ error: `todo ${id} is not found` });
        return;
    }
    res.send(todoStore.get(parseInt(id)));
});
exports.TodoController = router;
//# sourceMappingURL=todo.controller.js.map