'use client';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useCartStore from '@/hooks/use-cart-store';
import { OrderItem } from '@/types';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function AddToCart({
  item,
  minimal = false,
}: {
  item: OrderItem;
  minimal?: boolean;
}) {
  const router = useRouter();
  const { addItem } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  return minimal ? (
    <Button
      className="rounded-full w-auto"
      onClick={() => {
        try {
          addItem(item, 1);
          toast('Item Added to Cart', {
            description: 'Add to Cart.',
            action: (
              <Button
                onClick={() => {
                  router.push('/cart');
                }}
              >
                Go To Cart
              </Button>
            ),
          });
          //eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          toast('Error : Something went wrong', {
            description: error.message,
          });
        }
      }}
    ></Button>
  ) : (
    <div className="w-full space-y-2">
      <Select
        value={quantity.toString()}
        onValueChange={(i) => setQuantity(Number(i))}
      >
        <SelectTrigger className="">
          <SelectValue>Quantity : {quantity}</SelectValue>
        </SelectTrigger>
        <SelectContent position="popper">
          {Array.from({ length: item.countInStock }).map((_, i) => (
            <SelectItem key={i + 1} value={`${i + 1}`}>
              {i + 1}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        className="rounded-full w-full"
        type="button"
        onClick={async () => {
          try {
            const itemId = await addItem(item, quantity);
            router.push(`/cart/${itemId}`);
            //eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (error: any) {
            toast('Erro : Something went wrong.', {
              description: error.message,
            });
          }
        }}
      >
        Add To Cart
      </Button>
      <Button
        className="w-full rounded-full"
        variant="secondary"
        onClick={() => {
          try {
            addItem(item, quantity);
            router.push('/checkout');
            //eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (error: any) {
            toast('Error : Something went wrong.', {
              description: error.message,
            });
          }
        }}
      >
        Buy Now
      </Button>
    </div>
  );
}
