import express, { type Express, type NextFunction, type Request, type Response } from "express";

const app: Express = express();
const PORT: number = 3000;




app.use("/", express.static("../../web/"))








// // load middleware
// app.all("/dashboard", (_req: Request, _res: Response, next: NextFunction) => {
// 	console.log("Accessing a page requiring authentication...");
// 	next();
// });

// app.get("/", (_req: Request, res: Response) => {
// 	res.send("Hello world");
// });

// app.listen(PORT, () => {
// 	console.log(`TODO List app listening on port ${PORT}`);
// });

// app.use("/static", express.static("public"));

// app.use((_req: Request, res: Response, _next: NextFunction) => {
// 	res.status(404).send("Sorry can't find that");
// });
