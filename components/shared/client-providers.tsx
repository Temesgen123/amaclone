'use client';
import React, { ReactNode } from 'react';
import useCartSideBar from '@/hooks/use-cart-sidebar';
import CartSidebar from './cart-sidebar';
import { Toaster } from '../ui/sonner';

export default function ClientProvider({ children }: { children: ReactNode }) {
  const isCartSidebarOpen = useCartSideBar();
  return (
    <>
      {isCartSidebarOpen ? (
        <div className="flex min-h-screen">
          <div className="flex-1 overflow-hidden">{children}</div>
          <CartSidebar />
        </div>
      ) : (
        <div>{children}</div>
      )}
      <Toaster />
    </>
  );
}
