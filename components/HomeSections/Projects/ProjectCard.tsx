import PrimaryBtn from '@/components/shared/PrimaryBtn/PrimaryBtn'
import pin from '@images/icons/pin-map.svg'
import Logo from '@images/project-card-logo.svg'
import Image from "next/image"
type Project = {
    id: number
    city: string
    title: string
    description: string
    image: string
}

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="grid md:grid-cols-2 gap-8 bg-bg2 rounded-2xl max-md:pt-4">
            <div className="flex flex-col justify-center px-6 md:py-8 lg:py-12 ">
                <span className='mb-6'>
                    <Image src={Logo} alt="Project Card Logo" className="w-30 -mr-2" />
                </span>
                <span className="text-lg font-bold text-text mb-2 flex gap-2">
                    <Image src={pin} alt="Project Card Logo" />
                    مدينة {project.city}
                </span>

                <h3 className="text-2xl font-bold mb-2">
                    {project.title}
                </h3>

                <p className="text-text mb-6 leading-relaxed">
                    {project.description}
                </p>
                <PrimaryBtn title='شاهد المزيد' to='projects' />
            </div>
            <div className='w-full h-100'>
                <Image
                    src={project.image}
                    width={400}
                    height={400}
                    alt={project.title}
                    className="object-cover rounded-xl w-full h-full"
                />
            </div>
        </div>
    )
}
