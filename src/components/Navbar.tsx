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
      <div className="container mx-auto flex justify-between items-center px-6 py-3 relative">
        {/* Logo Left */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Image src="/logo.png" alt="OrangeCode Logo" width={40} height={40} />
          <h1 className="font-bold text-brand-orange text-lg">ORANGECODE</h1>
        </motion.div>

        {/* Menu Center */}
        <motion.ul
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute left-1/2 -translate-x-1/2 flex gap-6 text-brand-dark font-medium"
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`relative pb-1 ${
                  pathname === item.href
                    ? "text-brand-orange"
                    : "hover:text-brand-orange"
                }`}
              >
                {item.name}
                {/* underline animation */}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-full bg-brand-orange transform origin-left scale-x-0 transition-transform duration-300 ${
                    pathname === item.href ? "scale-x-100" : "hover:scale-x-100"
                  }`}
                />
              </Link>
            </li>
          ))}
        </motion.ul>

        {/* Social + Contact Right */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-4"
        >
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-orange hover:scale-110 transition flex items-center"
          >
            <Instagram size={20} />
          </a>
          <a
            href="tel:+6281234567890"
            className="text-sm font-semibold text-brand-dark flex items-center gap-1 hover:text-brand-orange"
          >
            <Phone size={18} className="text-brand-orange" />
            +62 812-3456-7890
          </a>
        </motion.div>
      </div>
    </nav>
  );
}
