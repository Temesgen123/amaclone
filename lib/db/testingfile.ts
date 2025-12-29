import { connectToDatabase } from '.';
import Product, { IProduct } from './models/product.model';
import { cwd, exit } from 'process';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(cwd());

const getProductByTag = async ({
  tag,
  limit = 10,
}: {
  tag: string;
  limit?: number;
}) => {
  await connectToDatabase(process.env.MONGODB_URI);
  const products = await Product.find({
    tag: { $in: [tag] },
    isPublished: true,
  })
    .sort({ createdAt: 'desc' })
    .limit(limit);
  return JSON.parse(JSON.stringify(products)) as IProduct[];
};

const main = async () => {
  const products = await getProductByTag({ tag: 'new-arrival' });
  console.log('The result : ', products);
  process.exit(0);
};
main();
