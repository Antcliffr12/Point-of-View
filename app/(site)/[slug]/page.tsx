export const generateStaticParams = () => [];

import { getPage } from "@/sanity/sanity-utils";

type Props = {
    params: { slug:  string }
}
export default async function Page({ params }: Props ) {
    const page = await getPage(params.slug);
    return (
        <div>
           <div className="text-3xl font-bold tracking-tight sm:text-4xl"> 
               {page.title}
           </div> 
        </div>
    )
}

