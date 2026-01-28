"use client"
import { Menu, X, Sparkles, } from 'lucide-react';
import { useState } from 'react';
import MotionContainer from './MotionContainer/MotionContainer';
import MotionItem from './MotionItem/MotionItem';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full top-0 z-50 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    <MotionContainer className="flex items-center">
                        <MotionItem>
                            <Image className='-ml-14 ' alt='' src={'/logo.png'} width={250} height={250} />
                        </MotionItem>
                        <MotionItem className='-ml-24'>
                            <span className="hidden md:block text-xl md:text-2xl font-bold text-gray-800">Premium Hygiene Solutions LLC</span>
                            <span className="md:hidden text-xl md:text-2xl font-bold text-gray-800">Premium Hygiene <br/> Solutions LLC</span>
                        </MotionItem>
                    </MotionContainer>

                    <MotionContainer className="hidden md:flex space-x-8 items-center">
                        <MotionItem>
                            <a href="/" className="text-gray-700 text-xl hover:text-primary transition">Home</a>
                        </MotionItem>
                        <MotionItem>
                            <a href="/#about" className="text-gray-700 text-xl hover:text-primary transition">About</a>
                        </MotionItem>
                        <MotionItem>
                            <a href="/#services" className="text-gray-700 text-xl hover:text-primary transition">Services</a>
                        </MotionItem>
                        <MotionItem>
                            <a href="/#contact" className="text-gray-700 text-xl hover:text-primary transition">Contact</a>
                        </MotionItem>
                        <MotionItem>
                            <a href="/booking" className="px-3 py-2 text-xl font-bold text-white rounded-md bg-primary hover:bg-primary-dark hover:text-white whitespace-nowrap transition">Book Now</a>
                        </MotionItem>
                    </MotionContainer>

                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 text-black" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div onClick={() => setIsOpen(false)} className="md:hidden bg-white border-t">
                    <MotionContainer className="px-2 pt-2 pb-3 space-y-1">
                        <MotionItem>
                            <a href="/" className="block px-3 py-2 text-xl text-gray-700 hover:bg-blue-50">Home</a>
                        </MotionItem>
                        <MotionItem>

                            <a href="/#about" className="block px-3 py-2 text-xl text-gray-700 hover:bg-blue-50">About</a>
                        </MotionItem>
                        <MotionItem>

                            <a href="/#services" className="block px-3 py-2 text-xl text-gray-700 hover:bg-blue-50">Services</a>
                        </MotionItem>
                        <MotionItem>

                            <a href="/#contact" className="block px-3 py-2 text-xl text-gray-700 hover:bg-blue-50">Contact</a>
                        </MotionItem>
                        <MotionItem className='px-3 py-2'>
                            <a href="/booking" className="px-3 py-2 text-xl font-bold text-white rounded-md bg-primary hover:bg-primary-dark hover:text-white whitespace-nowrap transition">Book Now</a>
                        </MotionItem>
                    </MotionContainer>
                </div>
            )}
        </nav>
    );
};


export default Navbar;