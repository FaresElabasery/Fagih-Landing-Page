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
        <section id="services" data-aos="fade-up">
            <div className="container">
                <div className="flex flex-wrap items-start">
                    <div className="flex flex-col w-full md:w-1/3 md:pe-4 lg:pt-10 md:sticky top-18">
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
                            <ServiceCard title="تصميم العمراني" image={service1} description="في شركة الفقيه، نؤمن أن التخطيط العمراني هو الأساس لبناء مجتمعات متكاملة ومستدامة. نعمل على دراسة الموقع وتحليل احتياجاته الحالية والمستقبلية، مع مراعاة الجوانب البيئية والاقتصادية والاجتماعية، لنقدم حلولًا تخطيطية تواكب رؤية التنمية الحديثة وتحقق أعلى كفاءة استخدام للأراضي. " />
                            <ServiceCard title="تصميم العمراني" image={service2} description="في مكتب فقيه، لا نقدم مجرد تصميمات عمرانية، بل نبتكر حلولًا متكاملة تجمع بين الجمال الوظيفي والرؤية المستقبلية. نحرص على تقديم مخططات مدروسة بعناية تعكس هوية المكان وتحقق التوازن بين الاستخدامات المختلفة، بما يضمن جودة الحياة وسهولة الحركة والتنقل." />
                            <ServiceCard title="تصميم العمراني" image={service3} description="منصة إحكام هي بوابة إلكترونية أُنشئت لتنظيم وتوثيق الملكيات العقارية وفق الأنظمة المعتمدة. يقدم مكتب الفقيه خدمات متخصصة لدعم المستفيدين في تجهيز المتطلبات الفنية، وإعداد الرفع المساحي والمخططات اللازمة، ومتابعة الطلبات لضمان سرعة الإنجاز ودقة الإجراءات. " />
                            <ServiceCard title="تصميم العمراني" image={service4} description="في شركة الفقيه، نُقدّم تقارير ومخططات فنية معتمدة تلبي اشتراطات الجهات الرسمية وتتماشى مع المعايير الهندسية المعتمدة. نحرص على الدقة والوضوح في إعداد الدراسات والتقارير، بما يساعد عملاءنا على اتخاذ قرارات سليمة وتسريع إجراءات الاعتماد والتنفيذ." />
                            <ServiceCard title="تصميم العمراني" image={service5} description="في شركة الفقيه، نقدم خدمات مساحية متكاملة باستخدام أحدث الأجهزة والتقنيات الحديثة. تشمل خدماتنا الرفع المساحي، وتحديد الحدود، وإعداد المخططات الطبوغرافية، مع ضمان أعلى درجات الدقة والالتزام بالمعايير المعتمدة لخدمة مختلف المشاريع الهندسية والعمرانية." />
                            <ServiceCard title="تصميم العمراني" image={service6} description="في شركة الفقيه، نؤمن أن نجاح أي مشروع يبدأ من دراسة دقيقة وتخطيط سليم. لذلك نقدم حلولًا استشارية شاملة تشمل التحليل، والتخطيط، والتصميم، والمتابعة، بهدف تحقيق أفضل النتائج الممكنة وضمان تنفيذ المشاريع بكفاءة وجودة عالية." />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
