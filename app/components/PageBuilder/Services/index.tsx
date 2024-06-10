import React from 'react'
import { getServices } from '@/sanity/sanity-utils';
import { Services } from '@/types/Blocks';

type Props = {
    params: { slug: string }
}

export default async function index({ params }: Props) {
    const slug = params.slug
    const services: Services = await getServices(slug);

     console.log(services.pageBuilder)
    const servicesData = services.pageBuilder.services || [];
    return (
        <section>
            <div className="py-16 text-center max-w-[77.5rem] mx-auto md:px-0">
                <p className="mb-4 text-center text-[#c28e1c]">{services.pageBuilder.BlockDescription}</p>
                <h2 className="text-4xl md:text-[2.625rem] font-bold mb-8 md:mb-[52px]">{services.pageBuilder.BlockTitle}</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-y-14 md:gap-x-12 px-10 md:gap-y-12'>
                    {
                        servicesData?.map((service: any, index: number) => (
                            <div key={index} className='block rounded-lg'>
                                <div className='flex flex-col items-center justify-center md:items-center md:justify-start gap-y-2.5'>
                                    <h3 className='text-[22px] font-semibold leading-[32px] mb-[12px]'>
                                        {service.title}
                                    </h3>
                                    <p className='text-[#4F4F4F] mb-[20px]'>
                                        {service.description}
                                    </p>
                                    <div className='flex items-center flex-wrap gap-[20px] justify-center list-none'>
                                        {
                                            service.items.map((item: any, index: number) => (
                                                <li key={index} className="w-full m-0 px-4 py-2 bg-[#f9f4e8] text-[#5f460e] font-semibold text-[15px] rounded-full">
                                                    {item.item}
                                                </li>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                    
                </div>
            </div>
        </section>
    )
}