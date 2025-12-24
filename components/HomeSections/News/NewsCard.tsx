import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Image from "next/image"
import Link from 'next/link'
type News = {
    id: number
    title: string
    description: string
    image: string
}

export default function NewsCard({ news }: { news: News }) {
    return (
        <div className="grid md:grid-cols-2 gap-8 bg-bg2 rounded-2xl max-md:pt-4" >
            <div className="flex flex-col justify-center px-6 md:py-8 lg:py-12 ">
                <h3 className="text-2xl font-bold mb-2">
                    {news.title}
                </h3>
                <p className="text-text mb-2 text-sm sm:text-base sm:mb-6 leading-relaxed">
                    {news.description}
                </p>
                <div className='flex gap-2 sm:gap-10 flex-col'>
                    <Button asChild variant={'outline'} className=' w-25! rounded-full border-text hover:scale-95 group size-15'>
                        <Link href='#'>
                            <ArrowLeft className='size-8 rotate-45 group-hover:rotate-0 transition-all duration-300' />
                        </Link>
                    </Button>
                    <Button asChild variant={'outline'} className=' w-35! rounded-full border-text hover:scale-95 group size-15'>
                        <Link href='#'>
                            شراكة                        
                        </Link>
                    </Button>
                </div>
            </div>
            <div className='w-full lg:h-100'>
                <Image
                    src={news.image}
                    width={400}
                    height={400}
                    alt={news.title}
                    className="object-cover rounded-xl w-full h-full "
                />
            </div>
        </div>
    )
}
