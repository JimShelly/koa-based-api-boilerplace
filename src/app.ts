import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

// import our config that has application
// specific information like port number.
// Here you'll notice that I'm importing
// the folder 'config' and 'routes' respectively
// and not the file.  That is
// because the file is index.ts and that is
// implied if left out in the import.
import { config } from './config';
// import our routes.
import { routes } from './routes';

// instantiate the app.
const app: Koa = new Koa();

// add the body parser middleware
app.use(bodyParser());

// add the routes middleware
app.use(routes);

// Now start listening.
app.listen(config.port);

console.log(`Server running on port ${config.port}`);