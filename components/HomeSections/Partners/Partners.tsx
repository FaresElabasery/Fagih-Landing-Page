import PartnersCard from "@/components/shared/PartnersCard/PartnersCard";
import { Slider } from "@/components/shared/Slider/Slider";
import { Badge } from "@/components/ui/badge";
import { CarouselItem } from "@/components/ui/carousel";

const partners = [
    {
        id: 1,
        image: "/images/partner1.svg",
        description:
            "جهة استراتيجية تعمل على دعم التنمية الإقليمية وتعزيز المبادرات الاقتصادية المستدامة بما يحقق رؤية المملكة المستقبلية.",
    },
    {
        id: 2,
        image: "/images/partner2.svg",
        description:
            "هيئة حكومية مسؤولة عن التخطيط والتطوير الحضري، وتهدف إلى تحسين جودة الحياة وخلق بيئة حضرية متكاملة.",
    },
    {
        id: 3,
        image: "/images/partner3.svg",
        description:
            "مكتب استراتيجي يركز على تطوير المناطق ودعم الابتكار والمشاريع التنموية لتحقيق نمو متوازن ومستدام.",
    },
    {
        id: 4,
        image: "/images/partner1.svg",
        description:
            "شريك تنموي يساهم في وضع الخطط الاستراتيجية وتنفيذ المبادرات التي تدعم الاقتصاد المحلي.",
    },
    {
        id: 5,
        image: "/images/partner2.svg",
        description:
            "جهة داعمة للمشاريع الوطنية الكبرى، تعمل على تمكين القطاعات المختلفة وتحقيق التكامل بين الجهات.",
    },
    {
        id: 6,
        image: "/images/partner3.svg",
        description:
            "مؤسسة استراتيجية تهدف إلى تطوير المناطق ورفع كفاءة الأداء المؤسسي بما يتماشى مع مستهدفات التنمية.",
    },
];

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
                        <CarouselItem key={item.id} className="basis-full md:basis-1/2 lg:basis-1/3 pl-0!">
                            <PartnersCard index={index} partners={partners} item={item} />
                        </CarouselItem>
                    ))}
                </Slider>
            </div>
        </section>
    )
}
