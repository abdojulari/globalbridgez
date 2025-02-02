import Link from 'next/link';
import { useState } from 'react';

export const Header = () => {
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

    const toggleMegaMenu = () => {
        setIsMegaMenuOpen(!isMegaMenuOpen);
    }

    return (
        <header className="flex justify-between items-center p-4 bg-gray-50 border-b border-gray-200">
          <div className="text-2xl font-bold">GlobalBridgez</div>
          <nav className="relative">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
              </li>
              <li onMouseEnter={toggleMegaMenu} onMouseLeave={toggleMegaMenu}>
                <Link href="/resources" className="text-gray-700 hover:text-gray-900">Resources</Link>
                {isMegaMenuOpen && (
                  <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg w-96 z-50">
                    <div className="grid grid-cols-2 gap-4 p-4">
                      <div>
                        <h4 className="font-semibold mb-2">Category 1</h4>
                        <ul className="space-y-2">
                          <li><Link href="/resources/link1" className="text-gray-600 hover:text-gray-900">Link 1</Link></li>
                          <li><Link href="/resources/link2" className="text-gray-600 hover:text-gray-900">Link 2</Link></li>
                          <li><Link href="/resources/link3" className="text-gray-600 hover:text-gray-900">Link 3</Link></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Category 2</h4>
                        <ul className="space-y-2">
                          <li><Link href="/resources/link4" className="text-gray-600 hover:text-gray-900">Link 4</Link></li>
                          <li><Link href="/resources/link5" className="text-gray-600 hover:text-gray-900">Link 5</Link></li>
                          <li><Link href="/resources/link6" className="text-gray-600 hover:text-gray-900">Link 6</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <Link href="/info" className="text-gray-700 hover:text-gray-900">Info</Link>
              </li>
              <li>
                <Link href="/mentorship" className="text-gray-700 hover:text-gray-900">Mentorship</Link>
              </li>
            </ul>
          </nav>
          <div>
            <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign up</Link>
          </div>
        </header>
      );
}