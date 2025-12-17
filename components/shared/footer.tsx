'use client';

import { ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { APP_NAME } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#010733] text-white underline-link">
      <div className="w-full">
        <Button
          variant="ghost"
          className="bg-[#010c51] w-full rounded-none"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className="mr-2 h-4 w-4" />
          Back To Top
        </Button>
      </div>
      <div className="p-4">
        <div className="flex justify-center gap-3 text-sm">
          <Link href="/page/conditions-of-use">Conditions of Use</Link>
          <Link href="/page/privacy-policy">Privacy Notice</Link>
          <Link href="/page/help">Help</Link>
        </div>
        <div className="flex justify-center text-sm">
          <p>&copy;2011 - 20025, {APP_NAME}, Inc. or its affiliates</p>
        </div>
        <div className="mt-4 flex justify-center text-sm text-gray-400">
          123 Main St., Houston, TX 77081 | +1 (281) 777-9999
        </div>
      </div>
    </footer>
  );
}
