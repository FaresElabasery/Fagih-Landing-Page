type Props = {
    activeCity: string
    onChange: (city: string) => void
}

const cities = ["جازان", "الباحة", "عسير", "جدة", "احدث"]

export default function ProjectsTabs({ activeCity, onChange }: Props) {
    return (
        <div className="flex justify-center">
            <div className="flex flex-row-reverse gap-4 sm:gap-8 border border-gray rounded-full px-4 sm:px-16 py-2">
                {cities.map((city) => (
                    <button
                        key={city}
                        onClick={() => onChange(city)}
                        className={`
                                    py-2 text-text text-sm font-bold! sm:text-2xl cursor-pointer navtabsLink
                                    ${activeCity === city
                                ? "activetab hover:font-bold!"
                                : " hover:text-text hover:font-bold"}`}
                    >
                        {city === "احدث" ? "احدث المشاريع " : city}
                    </button>
                ))}
            </div>
        </div>
    )
}
