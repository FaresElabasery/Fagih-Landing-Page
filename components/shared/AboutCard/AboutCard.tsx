import Image from "next/image";

export default function AboutCard({ icon, title, description }: { icon: string, title: string, description: string }) {
    return (
        <div className="flex items-center gap-4 bg-bg2 hover:bg-text hover:text-text1 rounded-xl p-2 duration-200">
            <div className="bg-bg2 p-2 rounded-full lg:w-fit" >
                <Image src={icon} alt={title} className="w-15" />
            </div>
            <div className="space-y-3 lg:w-fit w-[90%]" >
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="max-lg:text-sm">
                    {description}
                </p>
            </div>
        </div>
    )
}
