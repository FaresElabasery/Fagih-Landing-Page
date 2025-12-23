import { Button } from "@/components/ui/button";
import { ChevronsLeft } from "lucide-react";
import Link from "next/link";

type PrimaryBtn ={
    title: string,
    to?: string,
    classname?: string,
}
export default function PrimaryBtn({ title, to = '#', classname }: PrimaryBtn) {
    return (
        <Button asChild className={`primary-btn mt-4 ${classname}`}>
            <Link href={`#${to}`}>
                {title} <ChevronsLeft />
            </Link>
        </Button>
    )
}
