"use client"
import PrimaryBtn from '@/components/shared/PrimaryBtn/PrimaryBtn';
import hero1 from '@images/hero1.svg';
import hero2 from '@images/hero2.svg';
import youtube from '@images/icons/youtube-hero.svg';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import CountUp from "react-countup";
import styles from './HeroSection.module.css';
const heroBackgrounds = [
    hero1,
    hero2,
];
export default function HeroSection() {
    const [activeBg, setActiveBg] = useState(0);

    return (
        <main id="home" className="relative lg:h-screen max-lg:-mt-30  max-lg:pt-30 h-full overflow-hidden m-0 p-0">
            <AnimatePresence mode="sync">
                <motion.div
                    key={activeBg}
                    className={`${styles.heroSection}`}
                    style={{
                        backgroundImage: `url(${heroBackgrounds[activeBg].src})`,
                    }}
                    initial={{
                        y: "100%",
                        scale: 1.3
                    }}
                    animate={{
                        y: "0%",
                        scale: [1.3, 1.3, 1],
                    }}
                    exit={{
                        y: "-100%"
                    }}
                    transition={{
                        y: {
                            duration: 0.8,
                            ease: "easeInOut",
                        },
                        scale: {
                            duration: 1,
                            delay: 0.2,
                            ease: "easeOut",
                            times: [0, 0.2, 1]
                        }
                    }}
                />
            </AnimatePresence>
            <div className="relative z-10 h-full">

                <div className="container h-full">
                    <div className="flex items-center flex-wrap justify-between lg:h-screen">
                        <div className='flex flex-wrap justify-between mt-30'>
                            <div className="w-full space-y-4 lg:w-2/3">
                                <Link href='https://www.youtube.com/' target='_blank' >
                                    <Image src={youtube} alt='youtube icon' className='mb-10 hover:bg-red-600 rounded-full duration-200' />
                                </Link>
                                <h1 className="text-3xl lg:text-[40px] font-bold text-text1" data-aos="fade-right">
                                    نحو مستقبل عمراني متكامل
                                </h1>
                                <p className="text-text1 text-lg lg:text-xl mt-4 leading-8" data-aos="fade-right">
                                    نقدم في مكتب حسن محمد فقيه للاستشارات الهندسية مجموعة متكاملة من الخدمات الهندسية تشمل التصميم المعماري، الإشراف الهندسي، وإدارة المشاريع، مع التزام كامل بتطبيق أعلى معايير الجودة والابتكار. نعمل على تنفيذ المشاريع في منطقة الباحة وخارجها بكفاءة عالية، ونسعى دائمًا إلى تقديم حلول مخصصة تلبي تطلعات عملائنا وتسهم في تحسين البنية التحتية وتحقيق التنمية المستدامة.
                                </p>
                                <PrimaryBtn to='who-we-are' title='من نحن' variant={true} />
                            </div>
                            <div className="w-full flex flex-col items-center justify-end md:flex-row md:py-4 lg:flex-col lg:py-0 lg:w-1/3 " data-aos="fade-left">
                                <Image
                                    src={hero1}
                                    alt="Building 1"
                                    onClick={() => setActiveBg(0)}
                                    className={`mb-10 cursor-pointer w-full md:w-fit transition-all duration-300
                                ${activeBg === 0 ? "scale-105 opacity-100" : "opacity-70"}
                            `}
                                />
                                <Image
                                    src={hero2}
                                    alt="Building 2"
                                    onClick={() => setActiveBg(1)}
                                    className={`mb-10 cursor-pointer w-full md:w-fit transition-all duration-300
                                ${activeBg === 1 ? "scale-105 opacity-100" : "opacity-70"}
                            `}
                                />
                            </div>
                        </div>
                        <div className='flex justify-between w-full flex-col sm:flex-row text-center gap-6 mx-auto lg:w-10/12'>
                            <h2 className='text-2xl text-text1'>العملاء <CountUp end={1200} duration={2} />+</h2>
                            <h2 className='text-2xl text-text1'>المشاريع <CountUp end={350} duration={2} />+</h2>
                            <h2 className='text-2xl text-text1'>الموظفين <CountUp end={150} duration={2} />+</h2>
                            <h2 className='text-2xl text-text1'>سنوات الخبره <CountUp end={25} duration={2} />+</h2>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
