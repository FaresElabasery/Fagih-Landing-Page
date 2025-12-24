"use client"

import {
    Carousel,
    CarouselApi,
    CarouselContent
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef, useState } from "react"
import CarouselControls from "./CarouselControls"

export function Slider({ children }: { children: React.ReactNode }) {
    const plugin = useRef(
        Autoplay({ delay: 10000, stopOnInteraction: true })
    )

    const [api, setApi] = useState<CarouselApi>()

    return (
        <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
                align: "start",
                direction: "rtl",
            }}
            className="w-full"
        >
            <div className="relative">
                <CarouselContent className="-ml-6">
                    {children}
                </CarouselContent>

                {/* Custom Controls */}
                {api && (
                    <div className=" absolute bottom-1/3 left-0 md:-bottom-25 md:left-10 max-sm:w-full">
                        <CarouselControls api={api} />
                    </div>
                )}
            </div>
        </Carousel>
    )
}
