export default function Schema() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "EngineeringOrganization",
                    name: "مكتب حسن محمد فقيه للاستشارات الهندسية",
                    url: "https://www.fagih.com/",
                    address: {
                        "@type": "PostalAddress",
                        addressCountry: "SA",
                    },
                }),
            }}
        />
    )
}
