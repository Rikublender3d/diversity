import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">にじライフ</h3>
            <p className="text-gray-400">
              LGBTQ+当事者の医療アクセス改善を目指す任意団体
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">About Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">団体概要</Link></li>
              <li><Link href="/for-professionals" className="hover:text-white transition-colors">医療従事者・外部の方へ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">お問い合わせ</Link></li>
              <li><a href="https://forms.gle/m19kXWTwAdCjk1hi9" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">アンケート調査</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">お問い合わせ</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:inclusivehealth.app@gmail.com" className="hover:text-white transition-colors">メール</a></li>
              <li><a href="https://chill-beet-530.notion.site/LGBTQ-25743d323893801ba69fda6fe11049f8" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">詳細情報</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">法的情報</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://chill-beet-530.notion.site/LGBTQ-25743d323893801ba69fda6fe11049f8" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
              <li><a href="https://chill-beet-530.notion.site/LGBTQ-25743d323893801ba69fda6fe11049f8" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">団体概要</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 任意団体にじライフ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 