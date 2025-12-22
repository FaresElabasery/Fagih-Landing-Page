import { Input } from '@/components/ui/input';
import facebook from '@images/icons/facebook-solid.svg';
import instagram from '@images/icons/instagram-solid.svg';
import mail from '@images/icons/mail.svg';
import whatsapp from '@images/icons/whatsapp-solid.svg';
import youtube from '@images/icons/youtube-solid.svg';
import logo from '@images/logo.svg';
import { ArrowLeft, ChevronLeft, CircleArrowLeft, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='bg-text text-text1 pt-12 rounded-t-2xl'>
            <div className="container">
                <div className='grid  grid-cols-2 lg:grid-cols-4 lg:pe-20'>
                    <div className='flex flex-col gap-4 w-full col-span-2 lg:pe-40'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center gap-2 '>
                                <Image src={logo} alt="logo" width={110} height={30} />
                            </div>
                            <p className='text-base mt-2 leading-6'>في مكتب حسن محمد فقيه للاستشارات الهندسية، نقدم سنوات من الخبرة في تقديم الحلول الهندسية المتكاملة، من الدراسات والتصاميم إلى الإشراف والتنفيذ.</p>
                            <Link href='/' className=' flex items-center gap-2 mt-4 group w-fit'>
                                <p className='navbarLink text-text1/75 font-bold! text-xl p-0!'>المزيد عنا</p>
                                <CircleArrowLeft className='rotate-45 group-hover:rotate-0 duration-200' size={20} />
                            </Link>
                            <div className='flex gap-4 mt-6'>
                                <Link href={'https://www.facebook.com/fagih.eng'}><Image src={whatsapp} className='size-10 p-2 rounded-full hover:bg-white/20 duration-200' alt='whatsapp icon' /></Link>
                                <Link href={'https://www.facebook.com/fagih.eng'}><Image src={youtube} className='size-10 p-2 rounded-full hover:bg-white/20 duration-200' alt='youtube icon' /></Link>
                                <Link href={'https://www.facebook.com/fagih.eng'}><Image src={instagram} className='size-10 p-2 rounded-full hover:bg-white/20 duration-200' alt='instagram icon' /></Link>
                                <Link href={'https://www.facebook.com/fagih.eng'}><Image src={facebook} className='size-10 p-2 rounded-full hover:bg-white/20 duration-200' alt='facebook icon' /></Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-start w-full mt-8 gap-y-2 sm:gap-4 lg:col-span-1'>
                        <h2 className='font-bold text-lg'>روابط سريعة</h2>
                        <div className='flex gap-1'>
                            <ChevronLeft />
                            <Link href={'/'} className='  text-sm navbarLink p-0!'>الصفحه الرئيسية</Link>
                        </div>
                        <div className='flex gap-1'>
                            <ChevronLeft />
                            <Link href={'/'} className='  text-sm navbarLink p-0!'>من نحن</Link>
                        </div>
                        <div className='flex gap-1'>
                            <ChevronLeft />
                            <Link href={'/'} className='  text-sm navbarLink p-0!'>مشاريعنا</Link>
                        </div>
                        <div className='flex gap-1'>
                            <ChevronLeft />
                            <Link href={'/'} className='  text-sm navbarLink p-0!'>خدماتنا</Link>
                        </div>
                        <div className='flex gap-1'>
                            <ChevronLeft />
                            <Link href={'/'} className='  text-sm navbarLink p-0!'>الوظائف</Link>
                        </div>
                        <div className='flex gap-1'>
                            <ChevronLeft />
                            <Link href={'/'} className='  text-sm navbarLink p-0!'>المدونة</Link>
                        </div>
                        <div className='flex gap-1'>
                            <ChevronLeft />
                            <Link href={'/'} className='  text-sm navbarLink p-0!'>اتصل بنا</Link>
                        </div>
                    </div>
                    <div className='flex flex-col items-start justify-between w-full mt-8 gap-y-2 sm:gap-4 lg:col-span-1'>
                        <h2 className='font-bold text-lg'>مشاريعنا</h2>
                        <div className='flex gap-1'>
                            <ChevronLeft />
                            <Link href={'/'} className='  text-sm navbarLink p-0!'>مدينة جيزان</Link>
                        </div>
                        <div className='flex gap-1'>
                            <ChevronLeft />
                            <Link href={'/'} className='  text-sm navbarLink p-0!'>الضاحية الجنوبية</Link>
                        </div>
                        <div className='flex gap-1'>
                            <ChevronLeft />
                            <Link href={'/'} className='  text-sm navbarLink p-0!'>حى الخالديه</Link>
                        </div>
                        <div className='flex gap-1'>
                            <ChevronLeft />
                            <Link href={'/'} className='  text-sm navbarLink p-0!'>شاطئ الشقيق</Link>
                        </div>
                        <div className='flex gap-1'>
                            <ChevronLeft />
                            <Link href={'/'} className='  text-sm navbarLink p-0!'>شاطئ جزيرة المرجان</Link>
                        </div>
                        <div className='flex gap-1'>
                            <ChevronLeft />
                            <Link href={'/'} className='  text-sm navbarLink p-0!'>سوق البلد</Link>
                        </div>
                    </div>
                </div>
                <div className='flex lg:gap-20 mt-10 flex-wrap lg:flex-nowrap'>
                    <div className='flex flex-col mt-8 sm:mt-0 gap-4 w-full '>
                        <p className='font-semibold text-lg'>اشترك في القائمة البريدية لدينا </p>
                        <div className='flex gap-2 w-full sm:max-w-90 flex-col sm:flex-row relative group '>
                            <Input type="email" placeholder="البريد الالكتروني" className="w-full  px-4 py-8 rounded-full bg-bg" />
                            <span className="absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 sm:w-fit font-semibold  rounded-full text-text1 bg-text px-8 py-2 group-hover:bg-text1 group-hover:text-text hover:text-text1 hover:bg-text duration-200" >
                                <ArrowLeft size={30} />
                            </span>
                        </div>
                        <p className='text-xs text-text1/75'>سيتم الحفاظ على سرية عنوان بريدك الإلكتروني ولن يتم استخدامه إلا لإرسال النشرة الإخبارية أو الرد على أي استفسارات.</p>
                    </div>
                    <div className='flex flex-col items-start justify-between w-full mt-8 gap-y-2 sm:gap-4 '>
                        <h2 className='font-bold text-lg'>تواصل معنا</h2>
                        <div className='flex gap-2'>
                            <MapPin strokeWidth={1} />
                            <Link href={'/'} className='  text-sm navbarLink p-0!'>جازان - حي الصفا - شارع الملك فيصل</Link>
                        </div>
                        <div className='flex gap-2'>
                            <p className='navbarLink text-text1/75 font-bold! text-sm p-0!'>الحصول على الاتجاهات</p>
                            <CircleArrowLeft className='rotate-45 group-hover:rotate-0 duration-200' size={20} />
                        </div>
                        <div className='flex gap-2'>
                            <Image src={mail} alt='mail icon' width={22} />
                            <Link href={'/'} className='  text-sm navbarLink p-0!'>info@hmfaqih.com</Link>
                        </div>
                        <div className='flex gap-2'>
                            <Phone size={22} strokeWidth={1} />
                            <Link href={'/'} className='  text-sm navbarLink p-0!'>+966 505 933 440</Link>
                        </div>
                    </div>
                </div>
                <div className=' mt-8 pb-3 text-xs text-text/75'>
                    <p className='text-xs text-text1'>جميع الحقوق محفوظة لشركة حسن محمد فقيه للاستشارات الهندسية © 2025 تم تطويره بواسطة  AL Master</p>
                </div>
            </div>
        </footer>
    )
}
