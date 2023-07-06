import 'dotenv/config';
import path from 'path';
import cors from 'cors';
import logger from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
// import { engine } from 'express-handlebars';
// import * as hbsHelpers from './helpers/hbs_helpers';

import * as configs from '@/config';
import { authenticationMiddleware } from '@/middleware';

const { NODE_ENV } = process.env;

const app = express();

/*
app.engine('.hbs', engine({
  extname: '.hbs',
  helpers: hbsHelpers,
  partialsDir: [
    "views/partials/",
  ]
}));
app.set('view engine', '.hbs');
app.set("views", path.resolve(__dirname, "./views"));
*/

app.use('/static', express.static(path.join(__dirname,'../public')));

app.use(compression());
app.use(express.urlencoded({extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Required middleware list
app.use(logger('dev'));

app.use(cors(configs.corsConfig));
app.use(compression(configs.compressionConfig));
app.use(cookieParser());
global.BASE_URL=process.env.BASE_URL;
global.BASE_DIR=path.join(__dirname, '../public');


// Custom middleware list
app.use(authenticationMiddleware);

// Load router paths
configs.routerConfig(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars

app.use((err, req, res, next) => {
  console.log(err);
  // redirect page not found errors to error template
  // if(err.status === 404) {
  //   return res.render('errors/not_found.hbs');
  // }

  res.status(err.status || 500).json(err);
});

export default app;
