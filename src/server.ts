import kernel from './kernel';

const DEFAULT_PORT = 8080;

kernel.app.listen(Number(process.env.HTTP_PORT || DEFAULT_PORT), () => {
    /* tslint:disable:no-console */
    console.log('Server is listening on port ' + (process.env.HTTP_PORT || DEFAULT_PORT));
});
