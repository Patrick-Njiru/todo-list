import express, { type Express } from "express";
import { fileURLToPath } from "url";

const app: Express = express();
const PORT: number = 3000;
const webDistPath = fileURLToPath(new URL("../../web/dist", import.meta.url));

app.listen(PORT, () => {
	console.log(`TODO List app listening on port ${PORT}`);
});

app.use("/", express.static(webDistPath));

// app.use((_req: Request, res: Response, _next: NextFunction) => {
// 	res.status(404).send("Sorry can't find that");
// });
