import { NextFunction } from "express";
import jwt from "jsonwebtoken"
function auth(next: NextFunction): any {

  next();
}

export default auth;
