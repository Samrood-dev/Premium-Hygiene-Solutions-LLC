import { Menu, X, Sparkles, } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Sparkles className="h-8 w-8 text-blue-600" />
                        <span className="ml-2 text-xl font-bold text-gray-800">Premium Hygiene Solutions LLC</span>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="/#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
                        <a href="/#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
                        <a href="/#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
                        <a href="/#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
                        <a href="/booking" className="px-3 py-2 font-bold text-white rounded-md bg-blue-600 hover:bg-blue-700 hover:text-white transition">Book Now</a>
                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                        {isOpen ? <X className="h-6 w-6" /> : <Menu  className="h-6 w-6 text-black" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="/#home" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Home</a>
                        <a href="/#about" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">About</a>
                        <a href="/#services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Services</a>
                        <a href="/#contact" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
};


export default Navbar;