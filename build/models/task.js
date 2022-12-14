"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    description: {
        type: String,
    },
    completed: {
        type: Boolean
    },
});
exports.Task = (0, mongoose_1.model)('task', taskSchema);
