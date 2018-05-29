"use strict";
/**
 * @author Calvin Feng
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.send({
        count: 0,
        results: []
    });
});
router.get('/:id', (req, res) => {
    let { id } = req.params;
    res.send({
        id: id,
        title: 'Upper Chest Day',
        todo_list: ['bench press', 'military press', 'bilateral raise']
    });
});
exports.TodoController = router;
//# sourceMappingURL=todo.controller.js.map