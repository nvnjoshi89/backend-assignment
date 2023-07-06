import authRouter from '@/routes/auth';
import userRouter from '@/routes/user';
import productRouter from '@/routes/product';
import orderRouter from '@/routes/order';
import salesReportRouter from '@/routes/salesReport';

export default function (app) {
  app.use('/auth', authRouter);
  app.use('/users', userRouter);
  app.use('/products', productRouter);
  app.use('/orders', orderRouter);
  app.use('/sales', salesReportRouter);
}