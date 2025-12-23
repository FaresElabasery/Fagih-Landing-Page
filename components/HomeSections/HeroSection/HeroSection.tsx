import { Button } from '@/components/ui/button'
import hero1 from '@images/hero1.svg'
import hero2 from '@images/hero2.svg'
import youtube from '@images/icons/youtube-hero.svg'
import { ChevronsLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './HeroSection.module.css'
export default function HeroSection() {
    return (
        <div id='hero' className={`${styles.heroSection} bg-cover bg-center  lg:h-screen h-full pb-4`}>
            <div className="container">
                <div className="flex items-center flex-wrap justify-between lg:h-screen">
                    <div className='flex flex-wrap justify-between mt-30'>
                        <div className="w-full space-y-4 lg:w-2/3">
                            <Link href='https://youtu.be/dxr8h7ON03I?si=SZPF_Y2SXUpOq3Vi' >
                                <Image src={youtube} alt='youtube icon' className='mb-10 hover:bg-red-600 rounded-full duration-200' />
                            </Link>
                            <h1 className="text-3xl lg:text-[40px] font-bold text-text1">
                                نحو مستقبل عمراني متكامل
                            </h1>
                            <p className="text-text1 text-lg lg:text-xl mt-4 leading-8">
                                نقدم في مكتب حسن محمد فقيه للاستشارات الهندسية مجموعة متكاملة من الخدمات الهندسية تشمل التصميم المعماري، الإشراف الهندسي، وإدارة المشاريع، مع التزام كامل بتطبيق أعلى معايير الجودة والابتكار. نعمل على تنفيذ المشاريع في منطقة الباحة وخارجها بكفاءة عالية، ونسعى دائمًا إلى تقديم حلول مخصصة تلبي تطلعات عملائنا وتسهم في تحسين البنية التحتية وتحقيق التنمية المستدامة.
                            </p>
                            <Button asChild className='primary-btn mt-4'>
                                <Link href={'#who-we-are'}>
                                    من نحن <ChevronsLeft />
                                </Link>
                            </Button>
                        </div>
                        <div className="w-full flex flex-col items-end md:flex-row md:py-4 lg:flex-col lg:py-0 lg:w-1/3 ">
                            <Image src={hero1} alt=' Building 1' className='mb-10 w-full sm:w-fit bg-cover' />
                            <Image src={hero2} alt=' Building 2' className='mb-10 w-full sm:w-fit bg-cover' />
                        </div>
                    </div>
                    <div className='flex justify-between w-full sm:w-10/12'>
                        <h3 className='text-lg sm:text-2xl text-text1'>العملاء</h3>
                        <h3 className='text-lg sm:text-2xl text-text1'>المشاريع</h3>
                        <h3 className='text-lg sm:text-2xl text-text1'>الموظفين</h3>
                        <h3 className='text-lg sm:text-2xl text-text1'>سنوات الخبره</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
