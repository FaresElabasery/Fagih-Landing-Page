"use client"
import ProjectCard from "./ProjectCard"

const projects = [
    {
        id: 1,
        city: "جازان",
        title: "شاطئ الشقيق",
        description: "يُعد شاطئ مركز الشقيق السياحي التابع لمحافظة الدرب الواقع على بعد 150 كيلو مترا شمال مدينة جيزان واحد من أهم المواقع السياحية والترفيهية التي تشهد توافد الزوار خاصة خلال فصلي الربيع والشتاء من كل عام.",
        image: "/images/project1.svg",
    },
    {
        id: 2,
        city: "الباحة",
        title: "مشروع الباحة",
        description: "يُعد مركز الباحة التابع لمحافظة الدرب الواقع على بعد 100 كيلو مترا جنوب مدينة جيزان واحد من أهم المواقع السياحية والترفيهية التي تشهد توافد الزوار خاصة خلال فصلي الربيع والشتاء من كل عام.",
        image: "/images/project2.jpg",
    },
    {
        id: 3,
        city: "جدة",
        title: "مشروع جدة",
        description: "يُعد مركز جدة التابع لمحافظة الدرب الواقع على بعد 50 كيلو مترا جنوب مدينة جيزان واحد من أهم المواقع السياحية والترفيهية التي تشهد توافد الزوار خاصة خلال فصلي الربيع والشتاء من كل عام.",
        image: "/images/project3.jpg",
    },
    {
        id: 4,
        city: "عسير",
        title: "مشروع عسير",
        description: "يُعد مركز جدة التابع لمحافظة الدرب الواقع على بعد 50 كيلو مترا جنوب مدينة جيزان واحد من أهم المواقع السياحية والترفيهية التي تشهد توافد الزوار خاصة خلال فصلي الربيع والشتاء من كل عام.",
        image: "/images/project4.jpg",
    },
]

export default function Projects() {

    return (
        <section id="projects" data-aos="fade-up">
            <div className="container mx-auto space-y-5">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}
