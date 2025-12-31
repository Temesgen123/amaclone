import { Button } from '@/components/ui/button';
import { IProduct } from '@/lib/db/models/product.model';
import Link from 'next/link';

export default function SelectVaraint({
  product,
  size,
  color,
}: {
  product: IProduct;
  size: string;
  color: string;
}) {
  const selectedColor = color || product.colors[0];
  const selectedSize = size || product.sizes[0];
  return (
    <>
      {product.colors.length > 0 && (
        <div className="space-x-2 space-y-2">
          <div>Color: </div>
          {product.colors.map((x: string) => (
            <Button
              key={x}
              asChild
              variant="outline"
              className={
                selectedColor === x ? 'border-2 border-primary' : 'border-2'
              }
            >
              <Link
                replace
                scroll={false}
                href={`?${new URLSearchParams({
                  color: x,
                  size: selectedSize,
                })}`}
                key={x}
              >
                <div
                  style={{ background: x }}
                  className="h-6 w-6 rounded-full border border-b-muted-foreground"
                ></div>
                <div>
                  <span>{x}</span>
                </div>
              </Link>
            </Button>
          ))}
        </div>
      )}
      {product.sizes.length > 0 && (
        <div className="space-x-2 spopace-y-2 mt-2">
          <div>Size:</div>
          {product.sizes.map((x: string) => (
            <Button
              asChild
              variant="outline"
              key={x}
              className={
                selectedSize === x ? 'border-2 border-primary' : 'border-2'
              }
            >
              <Link
                replace
                scroll={false}
                href={`?${new URLSearchParams({
                  color: selectedColor,
                  size: x,
                })}`}
              >
                {x}
              </Link>
            </Button>
          ))}
        </div>
      )}
    </>
  );
}
