"use client"

import AOS from "aos"
import { useEffect } from "react"


export default function AOSProvider() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic",
            offset: 120,
            once:true,
            disable:'mobile'
        })
    }, [])

    return null
}
