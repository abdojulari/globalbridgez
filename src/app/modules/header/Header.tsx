'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faUserPlus, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';

export const Header = () => {
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMegaMenu = () => {
        setIsMegaMenuOpen(!isMegaMenuOpen);
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const isHomePage = pathname === '/';

    return (
        <header className="p-4 bg-gray-50 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">GlobalBridgez</div>
            <nav className="hidden md:flex space-x-8 items-center">
              <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
              <div onMouseEnter={toggleMegaMenu} onMouseLeave={toggleMegaMenu} className="relative">
                <Link href="/resources" className="text-gray-700 hover:text-gray-900 relative group">
                  Resources
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
                </Link>
                {isMegaMenuOpen && (
                  <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg w-full z-50 p-8">
                    <div className="flex">
                      <div className="w-1/4 mr-8">
                        <img src="https://via.placeholder.com/150" alt="Placeholder" className="w-full h-auto" />
                      </div>
                      <div className="grid grid-cols-3 gap-8 w-3/4">
                        {Array.from({ length: 15 }, (_, i) => (
                          <div key={i} className="space-y-2">
                            <h3 className="font-bold text-lg">Link {i + 1}</h3>
                            <p className="text-gray-600">Description for link {i + 1} goes here.</p>
                            <Link href={`/resources/link${i + 1}`} className="text-blue-600 hover:text-blue-800">
                              Learn More →
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link href="/info" className="text-gray-700 hover:text-gray-900">Info</Link>
              <Link href="/mentorship" className="text-gray-700 hover:text-gray-900">Mentorship</Link>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/about" className="flex items-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                About
              </Link>
              <Link href="/signup" className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                Sign up
              </Link>
            </div>
            <button className="md:hidden" onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 bg-gray-100 p-4 rounded shadow-lg">
              <Link href="/" className="block text-gray-700 hover:text-gray-900 mb-2">Home</Link>
              <Link href="/resources" className="block text-gray-700 hover:text-gray-900 mb-2">Resources</Link>
              <Link href="/info" className="block text-gray-700 hover:text-gray-900 mb-2">Info</Link>
              <Link href="/mentorship" className="block text-gray-700 hover:text-gray-900 mb-2">Mentorship</Link>
              <Link href="/about" className="block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 mb-2">
                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                About
              </Link>
              <Link href="/signup" className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                Sign up
              </Link>
            </div>
          )}
          {isHomePage && (
            <div className="flex justify-between items-center mt-4 p-4 bg-gray-100 rounded">
              <div>
                <h1 className="text-3xl font-bold">Welcome to GlobalBridgez</h1>
                <p className="mt-2">Making migration simple...</p>
              </div>
              <div className="flex items-center space-x-2">
                <input type="text" placeholder="Find Province..." className="border rounded px-2 py-1" />
                <button className="bg-gray-800 text-white px-4 py-2 rounded">Search</button>
              </div>
            </div>
          )}
        </header>
    );
}