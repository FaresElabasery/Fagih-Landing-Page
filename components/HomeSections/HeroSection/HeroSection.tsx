import PrimaryBtn from '@/components/shared/PrimaryBtn/PrimaryBtn'
import hero1 from '@images/hero1.svg'
import hero2 from '@images/hero2.svg'
import youtube from '@images/icons/youtube-hero.svg'
import Image from 'next/image'
import Link from 'next/link'
import styles from './HeroSection.module.css'
export default function HeroSection() {
    return (
        <main id='home' className={`${styles.heroSection} bg-cover bg-center  lg:h-screen h-full pb-4`}>
            <div className="container">
                <div className="flex items-center flex-wrap justify-between lg:h-screen">
                    <div className='flex flex-wrap justify-between mt-30'>
                        <div className="w-full space-y-4 lg:w-2/3">
                            <Link href='https://youtu.be/dxr8h7ON03I?si=SZPF_Y2SXUpOq3Vi' >
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
                        <div className="w-full flex flex-col items-end md:flex-row md:py-4 lg:flex-col lg:py-0 lg:w-1/3 " data-aos="fade-left">
                            <Image src={hero1} alt=' Building 1' className='mb-10 w-full sm:w-fit bg-cover' />
                            <Image src={hero2} alt=' Building 2' className='mb-10 w-full sm:w-fit bg-cover' />
                        </div>
                    </div>
                    <div className='flex justify-between w-full sm:w-10/12' data-aos="fade-top">
                        <h2 className='text-lg sm:text-2xl text-text1'>العملاء</h2>
                        <h2 className='text-lg sm:text-2xl text-text1'>المشاريع</h2>
                        <h2 className='text-lg sm:text-2xl text-text1'>الموظفين</h2>
                        <h2 className='text-lg sm:text-2xl text-text1'>سنوات الخبره</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}
