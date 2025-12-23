import Image from "next/image";

export default function ServiceCard({ title, image, description }: { title: string, image: string, description: string }) {
    return (
        <div className="flex flex-col justify-start border border-border rounded-4xl group cursor-pointer">
            <div className="overflow-hidden">
                <Image src={image} alt={title} className=" w-full group-hover:scale-110 duration-200" />
            </div>
            <div className="flex flex-col gap-2 w-full p-4">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-start">{description.slice(0, 50)}...</p>
            </div>
        </div>
    )
}
