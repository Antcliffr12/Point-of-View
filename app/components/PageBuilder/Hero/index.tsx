import { getHero } from "@/sanity/sanity-utils";
import Image from "next/image";

type Props = {
    params: { slug: string }
}


export default async function Hero({ params }: Props) {
    const slug = params.slug;
    const hero = await getHero(slug);

    const heroData = hero.pageBuilder;

    return (
        <section>

            <div className="py-8 lg:py-28 text-center">
                <div className="px-5 max-w-[77.5rem] mx-auto">
                    <h1 className="text-5xl font-bold md:text-6xl mb-5">{heroData?.heading}</h1>
                    <p className="text-base text-gray-600 md:text-lg mb-10">{heroData?.tagline}</p>
                    <Image
                        src={heroData?.image.asset.url}
                        width={1200}
                        height={800}
                        alt={heroData?.image.alt || heroData?.heading}
                        className="rounded-3xl w-full max-w-full object-cover aspect-[3/2]"
                    />
                </div>
            </div>

        </section>
    )
};
