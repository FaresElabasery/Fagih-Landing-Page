import PrimaryBtn from "@/components/shared/PrimaryBtn/PrimaryBtn";
import ServiceCard from "@/components/shared/ServiceCard/ServiceCard";
import { Badge } from "@components/ui/badge";
import service1 from '@images/service1.svg';
import service2 from '@images/service2.svg';
import service3 from '@images/service3.svg';
import service4 from '@images/service4.svg';
import service5 from '@images/service5.svg';
import service6 from '@images/service6.svg';

export default function Services() {
    return (
        <section id="who-we-are" className="lg:min-h-screen h-full">
            <div className="container">
                <div className="flex flex-wrap items-start">
                    <div className="flex flex-col w-full md:w-1/3 md:pe-4 lg:pt-10">
                        <Badge >
                            خدماتنا
                        </Badge>
                        <h2 className="text-6xl my-4 font-bold">خدماتنا الهندسية
                            المتكاملة</h2>
                        <p className="leading-8 text-text/60 mb-4">
                            نقدّم خدمات فنية واستشارية متكاملة تغطي مراحل المشاريع من الدراسات والتصميم حتى الإشراف والتنفيذ، وفق أعلى معايير الجودة والسلامة.
                        </p>
                        <PrimaryBtn title="شاهد المزيد" to="/"  />
                    </div>
                    <div className=" w-full md:w-2/3 my-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <ServiceCard title="تصميم العمراني" image={service1} description="في شركة الفقيه، نؤمن أن التخطيط " />
                            <ServiceCard title="تصميم العمراني" image={service2} description="في مكتب فقيه، لا نقدم مجرد تصميمات " />
                            <ServiceCard title="تصميم العمراني" image={service3} description="منصة إحكام هي بوابة إلكترونية أُنشئت " />
                            <ServiceCard title="تصميم العمراني" image={service4} description="في شركة الفقيه، نُقدّم تقارير ومخططات " />
                            <ServiceCard title="تصميم العمراني" image={service5} description="في شركة الفقيه، نقدم خدمات مساحية " />
                            <ServiceCard title="تصميم العمراني" image={service6} description="في شركة الفقيه، نؤمن أن نجاح أي مشروع " />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
