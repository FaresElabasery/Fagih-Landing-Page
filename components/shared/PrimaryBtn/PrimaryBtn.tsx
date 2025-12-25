import { Button } from "@/components/ui/button";
import { ChevronsLeft } from "lucide-react";
import Link from "next/link";

type PrimaryBtn ={
    title: string,
    to?: string,
    variant?: true,
    className?: string,
}
export default function PrimaryBtn({ title, to = '#', variant , className }: PrimaryBtn) {
    return (
        <Button size={"lg"} asChild className={`${variant? `primary-btn` : 'secondary-btn'} ${className}`}>
            <Link href={`#${to}`}>
                {title} <ChevronsLeft />
            </Link>
        </Button>
    )
}
