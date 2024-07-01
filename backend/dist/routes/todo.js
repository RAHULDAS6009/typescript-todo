"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//create
app.post("/todo", (req, res) => {
});
//all todos
app.get("/alltodos", (req, res) => {
    res.json([
        {
            id: 1,
            title: "Buy groceries",
            description: "Milk, Bread, Cheese, Eggs, Fruits",
            completed: false,
        },
        {
            id: 2,
            title: "Call plumber",
            description: "Fix the kitchen sink leak",
            completed: false,
        },
        {
            id: 3,
            title: "Finish report",
            description: "Complete the financial report for Q2",
            completed: true,
        },
    ]);
});
//delete todo or completed todo
app.delete("/completed", (req, res) => { });
//update todo
app.put("/update", (req, res) => { });
exports.default = app;
