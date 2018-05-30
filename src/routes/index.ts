import { Context } from 'koa';
import Router from 'koa-router';

const router: Router = new Router();

// Get a list of all devices
router.get('/', async (ctx: Context) => {
   ctx.body = 'List of all devices!';
});

// Get a list of all devices
router.get('/devices', async (ctx: Context) => {
   ctx.status = 201;
   ctx.body = 'List of all devices';
});

// Get a single device based on id.
// Note the different in singl quotes here.
// We are using the tic ` vs the single quote '
// This is because we can inline our id in the string.
router.get('/devices/:id', async (ctx: Context) => {
   ctx.status = 201;
   ctx.body = `List of device ${ctx.params.id}`;
});

// Use post to insert a new device.  A post expects
// the data to be saved to be put in the header of the 
// request.
router.post('/devices', async (ctx: Context) => {
   ctx.status = 201;
   ctx.body = 'insert succeeded';
});

// Use a put to update an existing device.  Along with 
//
router.put('/devices/:id', async (ctx: Context) => {
   ctx.status = 201;
   ctx.body = `update succeeded for id: ${ctx.params.id}`;
});

router.delete('/devices/:id', (ctx: Context) => {
   ctx.status = 201;
   ctx.body = `delete succeeded for id: ${ctx.params.id}`;
});

export const routes: Router.IMiddleware = router.routes();