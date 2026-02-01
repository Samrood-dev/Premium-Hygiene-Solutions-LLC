"use client"
import { useState } from 'react';
import MotionContainer from './MotionContainer/MotionContainer';
import MotionItem from './MotionItem/MotionItem';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '../Icons/Menu';
import Close from '../Icons/Close';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full top-0 z-50 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    <MotionContainer>
                        <MotionItem className='flex gap-4 items-center'>
                            <Image
                                src="/logo.svg"
                                alt="Premium Hygiene Solutions LLC logo"
                                width={60}
                                height={60}
                            />
                            <span className="hidden md:block text-2xl font-bold text-gray-800">Premium Hygiene Solutions LLC</span>
                            <span className="md:hidden text-xl font-bold text-gray-800">Premium Hygiene <br /> Solutions LLC</span>
                        </MotionItem>
                    </MotionContainer>

                    <MotionContainer as={"ul"} aria-label="Primary navigation" className="hidden md:flex space-x-8 items-center">
                        <MotionItem as={"li"}>
                            <Link href="/" className="text-gray-700 text-xl hover:text-primary transition">Home</Link>
                        </MotionItem>
                        <MotionItem as={"li"}>
                            <Link href="/#about" className="text-gray-700 text-xl hover:text-primary transition">About</Link>
                        </MotionItem>
                        <MotionItem as={"li"}>
                            <Link href="/#services" className="text-gray-700 text-xl hover:text-primary transition">Services</Link>
                        </MotionItem>
                        <MotionItem as={"li"}>
                            <Link href="/#contact" className="text-gray-700 text-xl hover:text-primary transition">Contact</Link>
                        </MotionItem>
                        <MotionItem as={"li"}>
                            <Link href="/booking" className="px-3 py-2 text-xl font-bold text-white rounded-md bg-primary hover:bg-primary-dark hover:text-white whitespace-nowrap transition">Book Now</Link>
                        </MotionItem>
                    </MotionContainer>

                    <button
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                        {isOpen ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6 text-black" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div onClick={() => setIsOpen(false)} className="md:hidden bg-white border-t">
                    <MotionContainer
                        aria-label="Primary navigation"
                        as={"ul"}
                        className="px-2 pt-2 pb-3 space-y-1">
                        <MotionItem as={"li"}>
                            <Link href="/" className="block px-3 py-2 text-xl text-gray-700 hover:bg-blue-50">Home</Link>
                        </MotionItem>
                        <MotionItem as={"li"}>
                            <Link href="/#about" className="block px-3 py-2 text-xl text-gray-700 hover:bg-blue-50">About</Link>
                        </MotionItem>
                        <MotionItem as={"li"}>
                            <Link href="/#services" className="block px-3 py-2 text-xl text-gray-700 hover:bg-blue-50">Services</Link>
                        </MotionItem>
                        <MotionItem as={"li"}>
                            <Link href="/#contact" className="block px-3 py-2 text-xl text-gray-700 hover:bg-blue-50">Contact</Link>
                        </MotionItem>
                        <MotionItem as={"li"} className='px-3 py-2'>
                            <Link href="/booking" className="px-3 py-2 text-xl font-bold text-white rounded-md bg-primary hover:bg-primary-dark hover:text-white whitespace-nowrap transition">Book Now</Link>
                        </MotionItem>
                    </MotionContainer>
                </div>
            )}
        </nav>
    );
};


export default Navbar;