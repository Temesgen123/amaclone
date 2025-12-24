import { z } from 'zod';
import { ProductInputSchema } from '@/lib/validator';

export type IProductInput = z.infer<typeof ProductInputSchema>;

export type Data = {
  products: IProductInput[];
  headerMenu: {
    name: string;
    href: string;
  }[];
  carousels: {
    image: string;
    title: string;
    url: string;
    buttonCaption: string;
    isPublished: boolean;
  }[];
};
