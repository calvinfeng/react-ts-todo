"use strict";
/**
 * @author Calvin Feng
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const todoItems = {
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
};
router.get('/', (req, res) => {
    res.send({
        count: 0,
        results: []
    });
});
router.get('/:id', (req, res) => {
    let { id } = req.params;
    res.send(todoItems[id]);
});
exports.TodoController = router;
//# sourceMappingURL=todo.controller.js.map