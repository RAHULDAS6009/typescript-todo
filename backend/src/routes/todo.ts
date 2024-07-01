import express, { Application, Request, Response } from "express";
const app: Application = express();

//create
app.post("/todo", (req, res) => {
  
});
//all todos
app.get("/alltodos", (req: Request, res: Response) => {
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
app.delete("/completed", (req: Request, res: Response) => {});
//update todo
app.put("/update", (req: Request, res: Response) => {});

export default app;
