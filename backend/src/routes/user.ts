import { Router, Request, Response } from "express";
import { updateUser, createUser, getUser } from "../db/user";
const router = Router();

router.get("/allusers", (req: Request, res: Response) => {
  res.json([
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Jane Smith",
    },
  ]);
});
interface User {
  username:string;
  password:string;
  firstName:string;
  lastName:string;
}
router.post("/signup", (req: Request, res: Response) => {
  try {
    const { username, password, firstName, lastName } = req.body;
    const exsistingUser: any = getUser(username);
    if (exsistingUser) {
      res.json({
        msg: "user already exsisted",
      });
    }
    createUser(username, password, firstName, lastName);
  } catch (error) {
    console.log(error);
    res.json({msg:"Internal Error"})
  }
});

router.post("/signin",  async (req: Request, res: Response) => {
  try {
    const {username,password}=req.body;
    const exsistingUser:any= getUser(username);
    if(!exsistingUser){
      res.json({
        msg: "User is not registered/does not exsist"
      })
    }
    console.log("hello world 1");
    console.log(exsistingUser);
    console.log(password);
    const macthPassword:boolean = exsistingUser.password === password;
    console.log(macthPassword);
  if(!macthPassword) {
    res.json({
      msg:"Given user inputs is wrong"
    })
  }
  res.json({msg:"Welcome again"})
   } catch (error) {
    console.log(error);
    res.json({msg:"Internal Error"})
    
  }
});

router.get("/profile", (req: Request, res: Response) => {});

router.put("/profile", (req: Request, res: Response) => {});

export default router;
