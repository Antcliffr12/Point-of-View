import React from 'react'
import { getSponsors } from '@/sanity/sanity-utils';
import { Sponsors } from '@/types/Blocks';
import Image from "next/image";


type Props = {
    params: { slug: string }
}

export default async function index({ params }: Props) {
    const slug = params.slug;
    const companies: Sponsors = await getSponsors(slug);

    const companiesData = companies.pageBuilder.sponsors || [];
    
    return (
        <section>
            <div className="py-16 text-center max-w-[77.5rem] mx-auto md:px-0">
                <p className="mb-4 text-center text-[#c28e1c]">Discover our trusted partners</p>
                <div className='flex flex-col gap-y-4'>
                    <h2 className="text-4xl md:text-[2.625rem] font-bold">Trusted by</h2>
                    <div className='flex flex-wrap items-center justify-center gap-x-[32px]'>
                        {companiesData.map((company: any, index: number) => (
                            <div key={index} className='block p-[5px] rounded-lg'>
                                <a href="#" className='no-underline' aria-label={`Company Logo ${company.name}`}>
                                    <Image
                                        src={company.image?.asset.url}
                                        width={1200}
                                        height={800}
                                        alt={company.image?.alt || company.name}
                                        className='object-contain max-w-[200px] max-h-[50px]'
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </section>
    )
}

 