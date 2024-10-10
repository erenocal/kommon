import React from 'react';
import Link from 'next/link';
import Button from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-black">StudentStay</Link>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li><Link href="/" className="text-gray-600 hover:text-black">Home</Link></li>
            <li><Link href="/create-listing" className="text-gray-600 hover:text-black">Create Listing</Link></li>
            <li><Link href="/messages" className="text-gray-600 hover:text-black">Messages</Link></li>
            <li><Button variant="outline">Log out</Button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}