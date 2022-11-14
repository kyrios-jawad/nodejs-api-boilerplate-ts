import { Request, Response, NextFunction } from "express";
/**
    * @api { post } auth/sign-up Sign Up
    * @apiName Sign Up
    * @apiGroup auth
    * @apiBody  {String} username Username of the user
    * @apiBody  {String} email Email of the user
    * @apiBody  {String} password Password of the user
    * @apiSuccess {String} account User created Succesfully
    * @apiSuccess {String} session Session logged in database Succesfully
    */
export const health = async (req: Request,res: Response,next: NextFunction) => {
  throw new Error("Abc")
  res.send('testing');
};
