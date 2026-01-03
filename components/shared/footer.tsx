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
      <div className="flex justify-between px-16 py-8">
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-lg py-2">Get To Know Us</h1>
          <Link href={''}>About Amaclone</Link>
          <Link href={''}>Careers</Link>
          <Link href={''}>Press Releases</Link>
          <Link href={''}>Contact</Link>
        </div>
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-lg py-2">Connect With Us</h1>
          <Link href={''}>Facebook</Link>
          <Link href={''}>Twitter/X</Link>
          <Link href={''}>Instagram</Link>
        </div>
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-lg py-2">Make Money With Us</h1>
          <Link href={''}>Sell On Amaclone</Link>
          <Link href={''}>Build Your Brand</Link>
          <Link href={''}>Advertise Your Products</Link>
        </div>
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-lg py-2">Let Us Help You</h1>
          <Link href={''}>Your Account</Link>
          <Link href={''}>Returns Centre</Link>
          <Link href={''}>Recalls and Product Safety Alerts</Link>
          <Link href={''}>Help</Link>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-center gap-3 text-sm">
          <Link href="/page/conditions-of-use">Conditions of Use</Link>
          <Link href="/page/privacy-policy">Privacy Notice</Link>
          <Link href="/page/help">Help</Link>
        </div>
        <div className="flex justify-center text-sm">
          <p>&copy; 2011 - 2025, {APP_NAME}, Inc. or its affiliates</p>
        </div>
        <div className="mt-4 flex justify-center text-sm text-gray-400">
          123 Main St., Houston, TX 77081 | +1 (281) 777-9999
        </div>
      </div>
    </footer>
  );
}
