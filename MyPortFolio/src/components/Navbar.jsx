import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-amber-900 via-yellow-600 to-orange-500 text-white">
      <header className="fixed inset-x-0 top-0 z-50 shadow-md backdrop-blur-md">
        <nav className="flex items-center justify-between p-4 lg:px-12">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <a href="#" className="text-2xl font-bold tracking-wider">
              Ravikumar Sura
            </a>
          </motion.div>
          <div className="hidden lg:flex lg:gap-10">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-lg font-medium hover:text-yellow-300 transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.1, color: "#FFD700" }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6 sm:ring-1 sm:ring-gray-700">
            <motion.div
              className="flex items-center justify-between mb-6"
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <a href="#" className="text-xl font-bold">
                MyPortfolio
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </motion.div>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-lg font-medium hover:text-yellow-300 transition-transform transform hover:scale-105"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero Section */}
      <motion.div
        id="home"
        className="relative isolate px-6 pt-24 pb-32 lg:px-12 bg-gradient-to-br from-indigo-700 via-purple-700 to-purple-900 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute -z-10 inset-0 bg-gradient-to-r from-indigo-500 via-transparent to-purple-500 opacity-60 blur-2xl"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            className="text-6xl font-extrabold sm:text-7xl text-yellow-300 tracking-wide"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.p
            className="mt-6 text-xl font-medium text-gray-200 sm:mt-8 sm:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Explore my projects, skills, and more. Let’s build something
            amazing together!
          </motion.p>
          <motion.div
            className="mt-10 flex justify-center gap-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="#projects"
              className="rounded-md bg-yellow-400 px-6 py-3 text-lg font-semibold text-black hover:bg-yellow-500 shadow-lg transform hover:scale-105 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-yellow-300 px-6 py-3 text-lg font-semibold hover:bg-yellow-500 hover:text-black transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
