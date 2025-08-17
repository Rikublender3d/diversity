import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              生理ケア
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/')
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-blue-600'
                  }`}
              >
                ホーム
              </Link>
              <Link
                href="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/about')
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-blue-600'
                  }`}
              >
                アプリについて
              </Link>
              <Link
                href="/for-professionals"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/for-professionals')
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-blue-600'
                  }`}
              >
                医療従事者・投資家向け
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 