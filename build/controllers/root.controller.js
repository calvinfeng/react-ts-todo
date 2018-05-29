"use strict";
/**
 * @author Calvin Feng
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Path = __importStar(require("path"));
const router = express_1.Router();
router.get('/', (req, res) => {
    res.sendFile(Path.join(__dirname, '../../public/index.html'));
});
exports.RootController = router;
//# sourceMappingURL=root.controller.js.map