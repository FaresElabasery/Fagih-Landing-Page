import { Button } from "@/components/ui/button";
import { ChevronsLeft } from "lucide-react";
import Link from "next/link";

type PrimaryBtn ={
    title: string,
    to?: string,
    variant?: true,
}
export default function PrimaryBtn({ title, to = '#', variant }: PrimaryBtn) {
    return (
        <Button asChild className={`${variant? `primary-btn` : 'secondary-btn'}`}>
            <Link href={`#${to}`}>
                {title} <ChevronsLeft />
            </Link>
        </Button>
    )
}
