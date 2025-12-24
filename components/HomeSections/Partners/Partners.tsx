import { Slider } from "@/components/shared/Slider/Slider";
import { Badge } from "@/components/ui/badge";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

const partners = [
    {
        id: 1,
        image: "/images/partner1.svg",
    },
    {
        id: 2,
        image: "/images/partner2.svg",
    },
    {
        id: 3,
        image: "/images/partner3.svg",
    },
    {
        id: 4,
        image: "/images/partner1.svg",
    },
    {
        id: 5,
        image: "/images/partner2.svg",
    },
    {
        id: 6,
        image: "/images/partner3.svg",
    },
]
export default function Partners() {
    return (
        <section id="partners" className="mt-20 mb-40" data-aos="fade-up">
            <div className="flex flex-col items-center">
                <Badge >
                    شركائنا
                </Badge>
                <h2 className="text-4xl my-4 font-bold"> شركاؤنا في النجاح</h2>
                <p className="leading-8 text-text/60 mb-4">نفخر بتعاوننا مع مؤسسات وشركات رائدة تشاركنا التزامنا بالجودة والابتكار والتميز. معًا، نبني قيمة مستدامة ونُنجز مشاريع ناجحة في مختلف القطاعات.</p>
            </div>
            <div className="container mt-5">
                <Slider>
                    {partners.map((item, index) => (
                        <CarouselItem key={item.id} className="basis-full md:basis-1/2 lg:basis-1/3 flex justify-center bg-bg2  h-100 items-center w-full relative ">
                            {index !== partners.length - 1 && <span className="absolute left-0 h-full w-px bg-text" />}
                            <div className="px-2">
                                <Image src={item.image} alt={item.image} width={400} height={50} className="w-full h-20 object-cover" />
                            </div>
                        </CarouselItem>
                    ))}
                </Slider>
            </div>
        </section>
    )
}
