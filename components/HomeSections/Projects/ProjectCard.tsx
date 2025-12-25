"use client"
import PrimaryBtn from '@/components/shared/PrimaryBtn/PrimaryBtn'
import pin from '@images/icons/pin-map.svg'
import Logo from '@images/project-card-logo.svg'
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

type Project = {
    id: number
    city: string
    title: string
    description: string
    image: string
}

export default function ProjectCard({ project }: { project: Project }) {
    const ref = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"],
    })


    const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0])
    const y = useTransform(scrollYProgress, [0, 1], [0, 60])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.80])
    const smoothY = useSpring(y, {
        stiffness: 80,
        damping: 20,
        restDelta: 0.001     
    })
    return (
        <motion.div
            ref={ref}
            style={{ opacity, y: smoothY, scale }}
            transition={{ delay: 0.5 }}
            className="grid md:grid-cols-2 md:h-[70vh] gap-8 bg-bg2 rounded-2xl max-md:pt-4"
        >
            <div className="flex flex-col justify-center px-6 md:py-8 lg:py-12 ">
                <span className='mb-6'>
                    <Image src={Logo} alt="Project Card Logo" className="w-40 -mr-2" />
                </span>
                <span className="text-xl font-bold text-text mb-2 flex gap-2">
                    <Image src={pin} alt="pin" />
                    مدينة {project.city}
                </span>

                <h3 className="text-3xl font-bold mb-2">
                    {project.title}
                </h3>

                <p className="text-text mb-6 text-xl leading-relaxed">
                    {project.description}
                </p>
                <PrimaryBtn className='lg:h-15 lg:w-60! text-lg' title='شاهد المزيد' to='projects' />
            </div>
            <div className='w-full overflow-hidden'>
                <Image
                    src={project.image}
                    width={800}
                    height={800}
                    alt={project.title}
                    className="object-cover rounded-xl w-full h-full"
                />
            </div>
        </motion.div>
    )
}
