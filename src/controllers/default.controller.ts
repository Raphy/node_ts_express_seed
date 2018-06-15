import { Request, Response } from 'express';

export class DefaultController {
    public static getIndex(request: Request, response: Response): void {
        response.send(`It works! Host: ${request.header('host')}`);
    }
}
