import express, { Application, Request, Response, NextFunction } from "express";
import asyncHandler from 'express-async-handler';
import HttpStatus from 'http-status-codes';

const app: Application = express();
const port = process.env.PORT || 5000;

const numPieces = 7;

app.get('/api/hello', (req: Request, res: Response, next: NextFunction) => {
    console.log('reached server');
    res.send({ express: 'Hello From Express' });
});

app.get('/new/tetromino', asyncHandler((req: Request, res: Response) => {
    console.log('getting new tetromino');
    const number = Math.floor(numPieces * Math.random());
    console.log(number);
    res.status(HttpStatus.OK)
        .type('text')
        .send(number.toString());
}));

app.post('/api/world', (req: Request, res: Response) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));