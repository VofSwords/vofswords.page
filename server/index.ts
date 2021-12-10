//  *******************************************
//  * VofSwords' personal portfolio website   *
//  * Copyright (C) 2021-present VofSwords    *
//  *******************************************

import express, { NextFunction, Response, Request } from "express";
import { join } from "path";

const app = express();

const PORT = process.env.PORT || 8080;

export const notFoundMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.sendFile(join(process.cwd(), "dist/client/index.html"));
};
  
export const errorMiddleware  = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.statusCode = 505;
    res.send("505");
};

app.use(express.static('dist/client'));
app.use(notFoundMiddleware);

app.listen(PORT, () => 
    console.log(`server is now up on port ${PORT}`));