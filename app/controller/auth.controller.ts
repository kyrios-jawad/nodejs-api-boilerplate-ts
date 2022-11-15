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
export const signUp = async (req: Request, res: Response, next: NextFunction) => {
  throw new Error("Abc")
  res.send('testing');
};
/**
   * @api { post } auth/sign-in Sign In
   * @apiName Sign In
   * @apiGroup auth
   * @apiBody  {String} email Email of the user
   * @apiBody  {String} password Password of the user
   * @apiSuccess {String} login User Login Succesfully
   * @apiSuccess {String} session Session logged in database Succesfully
   * @apiError  UserNotFound The <code>email or password</code> of the User is not valid.
   */
export const signIn = async (req: Request, res: Response, next: NextFunction) => {
  res.send('signIn');
};
/**
   * @api { post } auth/sign-out Sign Out 
   * @apiName Sign Out 
   * @apiGroup auth
   * @apiSuccess {String} logout User logout Succesfully
   * @apiSuccess {String} session Session Deleted from database Succesfully
   * @apiError  UserNotFound User is not logged
   */
export const signOut = async (req: Request, res: Response, next: NextFunction) => {
  res.send('signOut');
};
/**
   * @api { post } auth/forgot-password forgot Password
   * @apiName forgot Password 
   * @apiGroup auth
   * @apiSuccess {String} success password reset link successfully sent
   * @apiSuccess {String} session Session Deleted from database Succesfully
   * @apiError  UserNotFound User is not logged
   */
export const forgotPassword = async (req: Request, res: Response, next: NextFunction) => {
  res.send('forgotPassword');
};
/**
   * @api { post } auth/forgot-password forgot Password
   * @apiName forgot Password 
   * @apiGroup auth
   * @apiSuccess {String} success password reset link successfully sent
   * @apiSuccess {String} session Session Deleted from database Succesfully
   * @apiError  UserNotFound User is not logged
   */
export const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
  res.send('resetPassword');
};