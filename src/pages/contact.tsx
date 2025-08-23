import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>お問い合わせ - にじライフ</title>
        <meta name="description" content="にじライフへのお問い合わせ・ご相談はこちらから" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                お問い合わせ
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                にじライフへのお問い合わせ・ご相談はこちらから
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                お気軽にお問い合わせください
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                アンケート調査への参加、インタビュー協力、その他のご質問など、
                お気軽にお問い合わせください。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="text-center mb-8">
                <p className="text-gray-600 mb-4">
                  以下のGoogleフォームからお問い合わせください。
                </p>
              </div>

              {/* Googleフォームの埋め込み */}
              <div className="w-full h-[800px] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg shadow-lg overflow-hidden">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfAYp7Ts4hUKGQyuoLzMxxcDVSZ8c01UZIj0ZYduaiY-iBU2g/viewform?embedded=true"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="にじライフお問い合わせフォーム"
                    className="rounded-lg"
                    style={{
                      background: 'transparent',
                      border: 'none',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    読み込んでいます...
                  </iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Alternative Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                その他のお問い合わせ方法
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                フォーム以外でもお気軽にお問い合わせください
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">メール</h3>
                <p className="text-gray-600 mb-4">inclusivehealth.app@gmail.com</p>
                <a href="mailto:inclusivehealth.app@gmail.com" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  メールを送信
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">アンケート調査</h3>
                <p className="text-gray-600 mb-4">LGBTQ+当事者の医療アクセス調査</p>
                <a href="https://forms.gle/m19kXWTwAdCjk1hi9" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  アンケートに参加
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage; 