import { Request, Response } from 'express';

const express = require('express');

const app = express();

app.get('/', (req: Request, res: Response) => res.send('<h1>Backend reporting for duty, sir!</h1>'));

app.listen(9000, () => console.log("HTTP REST API Server running on port 9000"));

