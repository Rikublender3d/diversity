import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ForProfessionalsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: '',
    type: 'healthcare'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理
    console.log('Form submitted:', formData);
    alert('お問い合わせありがとうございます。後日ご連絡いたします。');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Head>
        <title>医療従事者・外部の方へ - にじライフ</title>
        <meta name="description" content="医療従事者や外部の方へ向けたにじライフの活動紹介" />
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
                医療従事者・外部の方へ
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                にじライフの活動と社会的意義をご紹介します
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why This Project Matters Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                なぜこのプロジェクトが重要か
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                性的少数者の医療アクセス問題の深刻さをデータや統計を交えて解説します
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500"
              >
                <div className="text-3xl font-bold text-red-600 mb-2">81.3%</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">医療関係者に話せない</h3>
                <p className="text-gray-600">
                  LGBTQの81.3%が医療関係者にセクシュアリティについて安心して話せない
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500"
              >
                <div className="text-3xl font-bold text-orange-600 mb-2">66.1%</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">過去10年の困難経験</h3>
                <p className="text-gray-600">
                  LGBTQの66.1%が過去10年で医療サービス利用時にセクシュアリティ関連の困難を経験
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500"
              >
                <div className="text-3xl font-bold text-purple-600 mb-2">77.8%</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">トランスジェンダーの困難</h3>
                <p className="text-gray-600">
                  トランスジェンダー男性・女性の77.8%が医療サービス利用時に困難を経験
                </p>
              </motion.div>
            </div>
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500 italic">
                （認定NPO法人ReBitの「LGBTQ医療福祉調査2023」より引用）
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4">社会的インパクト</h3>
              <p className="text-lg">
                このプロジェクトは、LGBTQ+当事者の医療アクセス問題を解決し、
                すべての人々が安心して医療ケアを受けられる社会の実現を目指しています。
                医療の質の向上と社会的包摂の促進に大きく貢献します。
              </p>
            </motion.div>

            {/* Additional Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="mt-8 bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">深刻な医療問題の実態</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">トランスジェンダーが直面する問題</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">75.9%</span>
                      <span>セクシュアリティ関連の困難により問題が深刻化</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">42.0%</span>
                      <span>体調が悪くても病院に行けなくなった</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">25.9%</span>
                      <span>自殺を考えた/自殺未遂を経験</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">障害・難病があるLGBTQの状況</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">71.4%</span>
                      <span>セクシュアリティ関連の困難を医療で経験</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">34.7%</span>
                      <span>体調不良でも病院に行けなくなった</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">30.9%</span>
                      <span>自殺念慮・未遂を経験</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">26.0%</span>
                      <span>体調不良・病状悪化に直結</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-6">
                <p className="text-sm text-gray-500 italic">
                  （認定NPO法人ReBitの「LGBTQ医療福祉調査2023」より引用）
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Healthcare Issues Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                具体的な医療現場での問題例
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                認定NPO法人ReBitの調査から明らかになった、医療現場での具体的な問題をご紹介します
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-red-50 p-8 rounded-lg border-l-4 border-red-500"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">医療者の無理解による困難</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>トランスジェンダーであることを理由に適切な診断を受けられない</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>ホルモン投与を理由に専門外として診療を拒否される</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>医療者からの差別的な発言や視線</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-orange-50 p-8 rounded-lg border-l-4 border-orange-500"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">医療システム上の問題</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>診察券や受付票での戸籍上の性別表示による苦痛</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>入院時の部屋割りやシャワー利用での配慮不足</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>同性パートナーが家族として認められない（面会、説明、保証人等）</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500 italic">
                （認定NPO法人ReBitの「LGBTQ医療福祉調査2023」より引用）
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Benefits Section */}
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
                提携のメリット
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                医療機関と投資家それぞれにとってのメリットをご紹介します
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Healthcare Providers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">医療機関向け</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">患者層の拡大</h4>
                      <p className="text-gray-600">性的少数者の患者さんが安心して受診できる環境を提供</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">DEI推進</h4>
                      <p className="text-gray-600">ダイバーシティ、エクイティ、インクルージョンの推進</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">ブランド価値の向上</h4>
                      <p className="text-gray-600">包括的な医療サービスを提供する機関としての認知向上</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">専門知識の共有</h4>
                      <p className="text-gray-600">性的少数者の医療に関する専門知識やベストプラクティスの共有</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* Investors */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">投資家向け</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">社会的インパクト投資</h4>
                      <p className="text-gray-600">社会的課題の解決と経済的リターンの両立</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">成長市場</h4>
                      <p className="text-gray-600">デジタルヘルスケア市場の急成長とLGBTQ+市場の拡大</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">差別化要因</h4>
                      <p className="text-gray-600">他社にはない包括的なアプローチによる競合優位性</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">ESG投資</h4>
                      <p className="text-gray-600">環境・社会・ガバナンスに配慮した投資機会</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>





        <Footer />
      </div>
    </>
  );
};

export default ForProfessionalsPage; 