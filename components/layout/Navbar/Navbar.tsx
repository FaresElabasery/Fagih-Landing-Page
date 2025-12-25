'use client'
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import { useScrollSpy } from '@/hooks/useScrollSpy';
import mail from '@images/icons/mail.svg';
import menu from '@images/icons/menu.svg';
import search from '@images/icons/search.svg';
import whatsapp from '@images/icons/whatsapp.svg';
import logoDark from '@images/logo-dark.svg';
import logo from '@images/logo.svg';
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function Navbar() {
    const [isOpenNav, setisOpenNav] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const activeSection = useScrollSpy()


    const handleCloseMenu = () => {
        setisOpenNav(false)
    }
    const servicesLinks = [
        { title: "التصاميم المعمارية", link: "#services" },
        { title: "التخطيط العمراني", link: "#services" },
        { title: "إدارة المشاريع", link: "#services" },
    ]

    const projectsLinks = [
        { title: "أمان جازان", link: "#projects" },
        { title: "شاطئ الشقيق", link: "#projects" },
        { title: "الكورنيش الجنوبي", link: "#projects" },
    ]
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`z-30 text-text1 bg-black/40   ${!isScrolled ? 'bg-transparent!' : 'backdrop-blur-2xl'} duration-500 w-full fixed top-0   py-4`}>
            <div className='mx-auto px-4 sm:px-2 lg:px-15'>
                <div className='flex items-center gap-2 justify-between h-18'>
                    {/* Brand */}
                    <Link href={'/'} className='flex items-center gap-2'>
                        <span className='sr-only'>مكتب حسن محمد فقيه للاستشارات الهندسية</span>
                        <Image src={logo} alt='logo' width={110} height={50}></Image>
                    </Link>
                    {/* nav Links */}
                    <nav className="hidden md:flex items-center gap-4 border py-2 px-8 rounded-full">

                        <Link
                            href="/"
                            className={`navbarLink text-[clamp(12px,1.5vw,20px)] text-nowrap ${activeSection === "" || activeSection === "hero" ? "active" : ""}`}
                        >
                            الصفحه الرئيسية
                        </Link>

                        <Link
                            href="#who-we-are"
                            className={`navbarLink text-[clamp(12px,1.5vw,20px)] text-nowrap ${activeSection === "who-we-are" ? "active" : ""}`}
                        >
                            من نحن
                        </Link>

                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className={`navbarLink flex flex-row-reverse gap-2 hover:bg-transparent! hover:text-text1! text-[clamp(12px,1.5vw,20px)] text-nowrap bg-transparent px-0 py-6! ${activeSection === "services" ? "active" : ""}`}>
                                        خدماتنا
                                    </NavigationMenuTrigger>

                                    <NavigationMenuContent>
                                        <ul className="w-56 p-2">
                                            {servicesLinks.map((item) => (
                                                <li key={item.link}>
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            href={item.link}
                                                            className="block px-3 py-2 rounded-md hover:bg-muted"
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className={`navbarLink flex flex-row-reverse gap-2 hover:bg-transparent! hover:text-text1! text-[clamp(12px,1.5vw,20px)] text-nowrap bg-transparent px-0 py-6! ${activeSection === "projects" ? "active" : ""}`}>
                                        مشاريعنا
                                    </NavigationMenuTrigger>

                                    <NavigationMenuContent>
                                        <ul className="w-56 p-2">
                                            {projectsLinks.map((item) => (
                                                <li key={item.link}>
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            href={item.link}
                                                            className="block px-3 py-2 rounded-md hover:bg-muted"
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <Link href="#news" className={`navbarLink text-[clamp(12px,1.5vw,20px)] text-nowrap ${activeSection === "news" ? "active" : ""}`}>المدونة</Link>
                        <Link href="#partners" className={`navbarLink text-[clamp(12px,1.5vw,20px)] text-nowrap ${activeSection === "partners" ? "active" : ""}`}>الوظائف</Link>
                        <Link href="#contact" className={`navbarLink text-[clamp(12px,1.5vw,20px)] text-nowrap ${activeSection === "contact" ? "active" : ""}`}>تواصل معنا</Link>
                    </nav>

                    {/* actions btns in desktop */}
                    <div className='hidden md:flex items-center gap-4 border px-8 rounded-full overflow-hidden'>
                        <Image src={menu} alt='menu icon' width={30} className='py-4' onClick={() => setisOpenNav(!isOpenNav)}></Image>
                        <div className='flex items-center sm:gap-2 lg:gap-4 border-r pr-4 max-xl:hidden'>
                            <div className='hover:scale-110 duration-200'>
                                <Image src={search} alt='search icon' width={30} className='py-4 cursor-pointer'></Image>
                            </div>
                            <a target='_blank' href="https://wa.me/+201207286573" className='hover:scale-110 duration-200'>
                                <Image src={whatsapp} alt='whatsapp icon' width={30} className='py-4 cursor-pointer  '></Image>
                            </a>
                            <a target='_blank' href="mailto:fareselabasery@outlook.com" className='hover:scale-110 duration-200'>
                                <Image src={mail} alt='mail icon' width={30} className='py-4 cursor-pointer  '></Image>
                            </a>
                        </div>
                    </div>
                    {/* mobile menu */}
                    <Sheet open={isOpenNav} onOpenChange={setisOpenNav}>
                        <SheetTrigger asChild>
                            <Button variant={'ghost'} className='md:hidden p-6 border rounded-full'>
                                <Menu className=' size-7' />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side='left'>
                            <VisuallyHidden>
                                <SheetTitle>القائمة الرئيسية</SheetTitle>
                                <SheetDescription>
                                    روابط التنقل الرئيسية بالموقع
                                </SheetDescription>
                            </VisuallyHidden>
                            <SheetHeader>
                                <Link href={'/'} className='w-full'>
                                    <span className='sr-only'>مكتب حسن محمد فقيه للاستشارات الهندسية </span>
                                    <Image src={logoDark} alt='logo' className='ms-auto' width={130} height={50}></Image>
                                </Link>
                            </SheetHeader>
                            <nav className='flex flex-col items-center gap-6  '>
                                <Link
                                    href="#"
                                    className={`text-md text-gray-400 hover:text-gray-900 font-medium `}
                                    onClick={handleCloseMenu}
                                >
                                    الصفحه الرئيسية
                                </Link>

                                <Link
                                    href="#who-we-are"
                                    className={`text-md text-gray-400 hover:text-gray-900 font-medium `}
                                    onClick={handleCloseMenu}
                                >
                                    من نحن
                                </Link>

                                <NavigationMenu>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger className="text-md text-gray-400 hover:text-gray-900! font-medium flex gap-2 hover:bg-transparent! bg-transparent">
                                                خدماتنا
                                            </NavigationMenuTrigger>

                                            <NavigationMenuContent>
                                                <ul className="w-56 p-2">
                                                    {servicesLinks.map((item) => (
                                                        <li key={item.link}>
                                                            <NavigationMenuLink asChild>
                                                                <Link
                                                                    href={item.link}
                                                                    className="block px-3 py-2 rounded-md hover:bg-muted"
                                                                    onClick={handleCloseMenu}
                                                                >
                                                                    {item.title}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>

                                <NavigationMenu>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger className="text-md text-gray-400 hover:text-gray-900! font-medium flex gap-2 hover:bg-transparent! bg-transparent">
                                                مشاريعنا
                                            </NavigationMenuTrigger>

                                            <NavigationMenuContent>
                                                <ul className="w-56 p-2">
                                                    {projectsLinks.map((item) => (
                                                        <li key={item.link}>
                                                            <NavigationMenuLink asChild>
                                                                <Link
                                                                    href={item.link}
                                                                    className="block px-3 py-2 rounded-md hover:bg-muted"
                                                                    onClick={handleCloseMenu}
                                                                >
                                                                    {item.title}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>

                                <Link href="#news" onClick={handleCloseMenu} className="text-md text-gray-400 hover:text-gray-900 font-medium">المدونة</Link>
                                <Link href="#partners" onClick={handleCloseMenu} className="text-md text-gray-400 hover:text-gray-900 font-medium">الوظائف</Link>
                                <Link href="#contact" onClick={handleCloseMenu} className="text-md text-gray-400 hover:text-gray-900 font-medium">تواصل معنا</Link>

                            </nav>
                            <SheetFooter>
                                <div className='flex items-center gap-8 rounded-4xl bg-text justify-center'>
                                    <div className='hover:scale-110 duration-200'>
                                        <Image src={search} alt='search icon' width={30} className='py-4 cursor-pointer'></Image>
                                    </div>
                                    <a target='_blank' href="https://wa.me/+201207286573" className='hover:scale-110 duration-200'>
                                        <Image src={whatsapp} alt='whatsapp icon' width={30} className='py-4 cursor-pointer  '></Image>
                                    </a>
                                    <a target='_blank' href="mailto:fareselabasery@outlook.com" className='hover:scale-110 duration-200'>
                                        <Image src={mail} alt='mail icon' width={30} className='py-4 cursor-pointer  '></Image>
                                    </a>
                                </div>
                                <SheetClose asChild>
                                    <Button variant="outline">Close</Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header >
    )
}

