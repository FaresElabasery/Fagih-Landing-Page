"use client"
import { useState } from "react"
import ProjectCard from "./ProjectCard"
import ProjectsTabs from "./ProjectTabs"

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
    const [activeCity, setActiveCity] = useState("جدة")

    const filteredProjects = activeCity === "احدث"
            ? [projects.sort((a, b) => b.id - a.id)[0]]
            : projects.filter((p) => p.city === activeCity)

    return (
        <section id="projects" className="lg:min-h-screen h-full">
            <ProjectsTabs
                activeCity={activeCity}
                onChange={setActiveCity}
            />
            <div className="container mx-auto mt-6 sm:mt-12 space-y-12">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}
