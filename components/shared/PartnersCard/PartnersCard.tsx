"use client"
import { motion } from 'motion/react';
import Image from "next/image";
export default function PartnersCard({ item, index, partners }: { item: { id: number, image: string, description: string }, index: number, partners: { id: number, image: string, description: string }[] }) {
    return (
        <div className='relative flex justify-center overflow-hidden'>
            {/* separator */}
            {index !== partners.length - 1 && <span className="absolute left-0 h-full w-px bg-text z-10" />}

            <motion.div
                initial="rest"
                whileHover="hover"
                className=" h-100 flex-center w-full relative group">
                {/* background */}
                <motion.div
                    variants={{
                        rest: { scaleY: 0, skewY: 50 },
                        hover: { scaleY: 1, skewY: 0 }
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, duration: 0.2, ease: "easeOut" }}
                    className='bg-text absolute top-0 duration-100 origin-bottom-left h-full w-full z-0'
                >
                    <motion.p
                        variants={{
                            rest: { y: 0 },
                            hover: { y: -110 }
                        }}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                        className="text-bg text-center h-full flex items-end px-10 text-lg font-bold  group-hover:text-bg/75">
                        {item.description}
                    </motion.p>
                </motion.div>
                {/* content */}
                <motion.div
                    variants={{
                        rest: { y: 0 },
                        hover: { y: -80 }
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative z-10"
                >
                    <Image src={item.image} alt={item.image} width={400} height={80} className="w-full h-20 object-cover duration-100 delay-200 group-hover:invert-100 bg-bg" />
                </motion.div>
                <motion.div>

                </motion.div>
            </motion.div>
        </div>
    )
}
