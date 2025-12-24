"use client"
import { Slider } from "@/components/shared/Slider/Slider"
import { CarouselItem } from "@/components/ui/carousel"
import { useState } from "react"
import NewsCard from "./NewsCard"
import NewsTabs from "./NewsTab"

const news = [
    {
        id: 1,
        title: "مشروع الباحة",
        description: "يُعد مركز الباحة التابع لمحافظة الدرب الواقع على بعد 100 كيلو مترا جنوب مدينة جيزان واحد من أهم المواقع السياحية والترفيهية التي تشهد توافد الزوار خاصة خلال فصلي الربيع والشتاء من كل عام.",
        image: "/images/news2.svg",
    },
    {
        id: 2,
        title: "مكتب فقيه يوقع عقدًا استشاريًا مع جامعة الإمام عبدالرحمن بن فيصل",
        description: "MIP تعلن توقيعها عقد شراكة مع مكتب فقيه للاستشارات الهندسية لتقديم خدمات استشارية في التخطيط الحضري والإقليمي لهيئة تطوير المنطقة الشرقية.",
        image: "/images/news1.svg",
    },
]
const events = [
    {
        id: 1,
        title: "افتتاح معرض الابتكار الهندسي",
        description: "شهدت المدينة افتتاح معرض الابتكار الهندسي الذي جمع نخبة من المهندسين والمبدعين لعرض أحدث المشاريع والتقنيات الحديثة في مجال الهندسة.",
        image: "/images/news1.svg",
    },
    {
        id: 2,
        title: "مؤتمر تطوير المدن الذكية",
        description: "انطلق مؤتمر تطوير المدن الذكية بمشاركة خبراء من مختلف الدول، حيث تم مناقشة حلول مستدامة لتحسين جودة الحياة باستخدام التكنولوجيا الحديثة.",
        image: "/images/news2.svg",
    },
]

export default function News() {
    const [activetab, setActivetab] = useState("الاخبار")

    const filtered = activetab === "الاخبار" ? news : events

    return (
        <section id="news" className="container " data-aos="fade-up">
            <div className="md:grid md:grid-cols-3 md:items-center md:gap-4">
                <h2 className="text-xl font-bold text-right ">
                    الاخبار <br />&أنشطتنا وفعالياتنا
                </h2>
                <div className="flex justify-center max-sm:mt-6">
                    <NewsTabs
                        activetab={activetab}
                        onChange={setActivetab}
                    />
                </div>
                <div />
            </div>
            <div className=" mx-auto mt-6 sm:mt-12 space-y-12">
                <Slider>
                    {filtered.map((item) => (
                        <CarouselItem key={item.id} className="basis-full lg:basis-[85%]">
                            <NewsCard news={item} />
                        </CarouselItem>
                    ))}
                </Slider>

            </div>
        </section>
    )
}
