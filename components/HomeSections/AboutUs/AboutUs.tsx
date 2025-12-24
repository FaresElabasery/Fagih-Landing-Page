import AboutCard from "@/components/shared/AboutCard/AboutCard";
import PrimaryBtn from "@/components/shared/PrimaryBtn/PrimaryBtn";
import SwipPhoto from "@/components/shared/SwipPhoto/SwipPhoto";
import { Badge } from "@/components/ui/badge";
import icon1 from '@images/icons/about-icon1.svg';
import icon2 from '@images/icons/about-icon2.svg';
import icon3 from '@images/icons/about-icon3.svg';


export default function AboutUs() {
    return (
        <section id="who-we-are" data-aos="fade-up">
            <div className="container">
                <div className="flex flex-wrap items-center">
                    <div className="flex flex-col w-full md:w-1/2 lg:pe-40 pt-4">
                        <Badge >
                            معلومات عنا
                        </Badge>
                        <h2 className="text-4xl my-4 font-bold ">عن شركة
                            حسن فقيه للاستشارات الهندسية</h2>
                        <p className="leading-8 mb-4">
                            متخصصة في تقديم الخدمات الفنية والهندسية للمشاريع والبنى التحتية منذ عام 2010. نعمل على توفير حلول مبتكرة تضمن نجاح المشاريع وتلبي احتياجات عملائنا من الجهات الحكومية والخاصة بكفاءة واحترافية، بدعم من فريق متمرس يستخدم أحدث التقنيات ويطبق أعلى المعايير العالمية.
                        </p>
                        <PrimaryBtn title="شاهد المزيد" to="/"  />
                    </div>
                    <div className=" w-full md:w-1/2 lg:ps-20 my-10">
                        <SwipPhoto />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 md:mt-4">
                        <AboutCard icon={icon1} title="حلول هندسية متكاملة" description="تصميم وإدارة مشاريع البنية التحتية بمختلف أنواعها، من الدراسات الأولية حتى التنفيذ والإشراف." />
                        <AboutCard icon={icon2} title="استشارات فنية متخصصة" description="تقديم دراسات وتحاليل فنية وهيدرولوجية وجيولوجية تدعم اتخاذ القرار وتضمن سلامة المشروع." />
                        <AboutCard icon={icon3} title="فريق عمل مؤهل" description="نخبة من المهندسين والخبراء يقدمون حلولًا مبتكرة ومستدامة باستخدام أفضل التقنيات والممارسات العالمية." />
                    </div>
                </div>
            </div>
        </section>
    )
}
