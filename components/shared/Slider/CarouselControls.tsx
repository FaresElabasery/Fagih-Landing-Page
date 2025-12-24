"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"

interface CarouselApi {
    scrollNext: () => void
    scrollPrev: () => void
}

export default function CarouselControls({ api }: { api: CarouselApi }) {
    return (
        <div>
            <div className="hidden sm:flex items-center w-full border border-text rounded-full overflow-hidden bg-bg">
                <button
                    onClick={() => api.scrollPrev()}
                    className="w-18 h-14 border-l border-gray flex items-center justify-center text-text hover:text-text/80 hover:bg-text1 hover:scale-105 transition"
                >
                    <ArrowRight className="size-5" />
                </button>
                <button
                    onClick={() => api.scrollNext()}
                    className="w-18 h-14 border-r border-gray flex items-center justify-center text-text hover:text-text/80 hover:bg-text1 hover:scale-105 transition"
                >
                    <ArrowLeft className="size-5" />
                </button>
            </div>
            <div className="flex w-full justify-between sm:hidden">
                <button
                    onClick={() => api.scrollPrev()}
                    className="size-6 rounded-full bg-text1 flex-center border "
                >
                    <ArrowRight className="size-5" />
                </button>
                <button
                    onClick={() => api.scrollNext()}
                    className="size-6 rounded-full bg-text1 flex-center border "
                >
                    <ArrowLeft className="size-5" />
                </button>
            </div>
        </div>
    )
}
