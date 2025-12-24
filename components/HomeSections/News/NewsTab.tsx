type Props = {
    activetab: string
    onChange: (tab: string) => void
}

const tabs = ["انشطتنا و فعالياتنا", "الاخبار"]

export default function NewsTabs({ activetab, onChange }: Props) {
    return (
        <div className="flex justify-center">
            <div className="flex flex-row-reverse gap-4 sm:gap-8 border border-gray rounded-full px-4 sm:px-16 py-2">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => onChange(tab)}
                        className={`
                                    py-2 text-text text-nowrap text-sm font-bold! sm:text-2xl cursor-pointer navtabsLink
                                    ${activetab === tab
                                ? "activetab hover:font-bold!"
                                : " hover:text-text hover:font-bold"}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    )
}
