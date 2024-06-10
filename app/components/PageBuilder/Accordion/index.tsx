"use client";
import React, { useState, useEffect } from 'react';
import { Accordion } from '@/types/Blocks';
import { getAccordion } from '@/sanity/sanity-utils';

type Props = {
  params: { slug: string }
}

export default function AccordionComponent({ params }: Props) {
  const { slug } = params;
  const [accordion, setAccordion] = useState<Accordion[]>([]);
  const [accordionOpen, setAccordionOpen] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accordionData = await getAccordion(slug);
        const accordionItems = accordionData.pageBuilder.accordions;
        setAccordion(accordionItems);
        setAccordionOpen(null)
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
  }, [slug]);

  
  const handleAccordionClick = (index: number) => {
    setAccordionOpen(accordionOpen === index ? null : index);
  };


  return (
    <section>
      <div className="py-16 text-center max-w-[56.25rem] mx-auto md:px-0">
          <p className="mb-4 text-[#c28e1c]">Frequently Asked Questions</p>
          <h2 className="text-4xl md:text-[2.625rem] font-bold mb-8 md:mb-[52px]">FAQs</h2>
          <div className='flex flex-col gap-y-4'>
          {accordion?.map((item: any, index) => (
            <div className='p-4 bg-[#F8F8F8] rounded-lg' key={index}>
                <h2>
                  <button className='text-2xl flex items-center justify-between w-full font-medium text-left rounded-lg focus:outline-none focus:shadow-outline'
                    onClick={() => handleAccordionClick(index)}
                    aria-expanded={accordionOpen === index}
                    aria-controls={`accordion-text-${index}`}
                  >
                    <span>{item.title}</span>
                    <svg className="decoration-gray-400 shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                      <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${accordionOpen === index && '!rotate-180'}`} />
                      <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen === index && '!rotate-180'}`} />
                    </svg>
                  </button>
                </h2>
                <div
                  id={`accordion-text-${index}`}
                  role="region"
                  aria-labelledby={`accordion-title-${index}`}
                  className={`text-left grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                   <div className="overflow-hidden">
                    <p className="mt-2.5 font-normal leading-[28px] text-base text-[#696969]">
                      {item.content}
                     </p>
                  </div>
                </div>
            </div>
          ))}
          </div>
      </div>
    </section>
  )
}
