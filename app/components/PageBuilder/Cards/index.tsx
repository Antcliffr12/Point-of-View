import { getCards } from "@/sanity/sanity-utils";
import { Card } from "@/types/Blocks";
import Image from "next/image";


type Props = {
    params: { slug: string }
}

export default async function index({ params }: Props) {
    const slug = params.slug;
    const cards: Card = await getCards(slug);

    const cardsData = cards.pageBuilder.cards || [];

    return (
        <section>
            <div className="py-16 text-center max-w-[77.5rem] mx-auto md:px-0">
                <p className="mb-4 text-center text-[#c28e1c]">Experts in assessing leaders and teams</p>
                <h2 className="text-4xl md:text-[2.625rem] font-bold mb-8 md:mb-[52px]">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-14 md:gap-x-12 px-10 md:gap-y-0">
                    {cardsData.map((card: any, index: number) => ( // Accessing cardsData
                        <div key={index} className="flex flex-col items-center justify-center md:items-start md:justify-start gap-y-2.5">
                            <div className="w-full">
                                <Image
                                    src={card.image?.asset.url}
                                    width={1200}
                                    height={800}
                                    alt={card.image?.alt || card.heading}
                                    className="rounded-lg w-full max-w-full object-cover aspect-[3/2]"
                                />
                            </div>
                            <div className="w-full mt-4">
                                <h3 className="text-2xl font-normal mb-4">{card.heading}</h3> 
                                <p className="text-base text-[#4F4F4F] leading-7">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
