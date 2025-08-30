"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="OrangeCode Logo" width={40} height={40} />
          <h1 className="font-bold text-brand-orange text-lg">ORANGECODE</h1>
        </div>
        <ul className="flex gap-6 text-brand-dark font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/courses">Courses</Link>
          </li>
          <li>
            <Link href="/galleries">Galleries</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
