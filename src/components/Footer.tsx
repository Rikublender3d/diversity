import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">生理ケア</h3>
            <p className="text-gray-400">
              すべての生理を持つ人々に寄り添う包括的生理管理アプリ
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">アプリ</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">アプリについて</Link></li>
              <li><Link href="/features" className="hover:text-white transition-colors">機能</Link></li>
              <li><Link href="/download" className="hover:text-white transition-colors">ダウンロード</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">サポート</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/help" className="hover:text-white transition-colors">ヘルプ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">お問い合わせ</Link></li>
              <li><Link href="/community" className="hover:text-white transition-colors">コミュニティ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">法的情報</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">利用規約</Link></li>
              <li><Link href="/company" className="hover:text-white transition-colors">会社概要</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 生理ケア. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 