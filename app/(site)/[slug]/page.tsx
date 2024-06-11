import { createClient, groq } from "next-sanity";
import { getPage } from "@/sanity/sanity-utils";
import config from "@/sanity/config/client-config";

type Props = {
    params: { slug:  string }
}

const pagepageSlugsQuerySlugs = groq`*[_type == "page"]{slug}`;

export async function generateStaticParams() {
    const client = createClient(config);
    const slugs = await client.fetch(pagepageSlugsQuerySlugs);
    return slugs.map((slug: string) => ({ params: { slug } }));
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



