"use client"
import { motion, spring } from 'motion/react';
import Image from "next/image";
export default function ServiceCard({ title, image, description }: { title: string, image: string, description: string }) {
    return (
        <motion.div
            initial='rest'
            whileHover='hover'
            className="border border-border rounded-4xl group cursor-pointer h-95 overflow-hidden" data-aos="zoom-in">
            <motion.div
                className='flex flex-col justify-start'
                variants={{
                    rest: { y: 0 },
                    hover: { y: -140 }
                }}
                transition={{ type: spring, stiffness: 120, duration: 0.3 }}
            >
                <div
                    className="overflow-hidden h-70 rounded-2xl">
                    <Image src={image} alt={title} className=" w-full h-full object-cover group-hover:scale-110 duration-200" />
                </div>
                <div className="flex flex-col gap-2 w-full p-4">
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <p className="text-start leading-8">{description}</p>
                </div>
            </motion.div>
        </motion.div>
    )
}
