"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Galleries", href: "/galleries" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto grid grid-cols-3 items-center px-6 py-4">
        {/* Logo Left */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Image
            src="/logo.jpg"
            alt="OrangeCode Logo"
            width={70}
            height={0} // dummy value, required by Next.js
            className="h-auto w-20"
          />

          {/* <h1 className="font-bold text-brand-orange text-lg">ORANGECODE</h1> */}
        </motion.div>

        {/* Menu Center */}
        <motion.ul
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-8 font-medium text-brand-dark"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded mx-2 py-2 px-3 transition-colors duration-300 text-brand-orange bg-stone-50 hover:text-brand-orange hover:bg-stone-50`}
            >
              {item.name}
              {/* underline animation */}
              <span
                className={`absolute left-0 bottom-0 h-[2px] w-full bg-brand-orange transform origin-left scale-x-0 transition-transform duration-300 ${
                  pathname === item.href ? "scale-x-100" : "hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
        </motion.ul>

        {/* Right: Social + Phone */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-end items-center gap-6"
        >
          {/* Instagram */}
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-brand-dark hover:text-brand-orange transition-colors"
          >
            <Instagram size={20} />
          </a>

          {/* Phone */}
          <a
            href="tel:+6281234567890"
            className="flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-orange transition-colors"
          >
            <Phone size={18} />
            +62 812-3456-7890
          </a>
        </motion.div>
      </div>
    </nav>
  );
}
