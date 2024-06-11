import { Project } from "@/types/Project";
import { Page } from "@/types/Page";
import { Settings } from "@/types/Settings";
import { Hero, Card, Accordion, Sponsors, Services } from "@/types/Blocks";

import { createClient, groq } from "next-sanity";
import config from './config/client-config';


export async function getNavigation(): Promise<Settings> {
    
    const client = createClient(config);

    return client.fetch(
        groq`*[_type == "siteConfig"][0]{
            menuItems[]->{
                _id,
                _type,
                "slug": slug.current,
                title
            }
        }`
    )
}

export async function getHero(slug: string): Promise<Hero> {

    const client = createClient(config);

    return client.fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
            pageBuilder[_type == "hero"][0]{
                heading,
                tagline,
                image {
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }
        }`,
        { slug }
    );
}

export async function getServices(slug: string): Promise<Services> {
        
        const client = createClient(config);
    
        return client.fetch(
            groq`*[_type == "page" && slug.current == $slug][0]{
                pageBuilder[_type == "services"][0]{
                    BlockTitle,
                    BlockDescription,
                    services[]{
                        title,
                        description,
                        items[]{
                            item
                        }
                    }
                }
            }`,
            { slug }
        );
    
}

export async function getSponsors(slug: string): Promise<Sponsors> {
        
        const client = createClient(config);
    
        return client.fetch(
            groq`*[_type == "page" && slug.current == $slug][0]{
                pageBuilder[_type == "sponsors"][0]{
                    sponsors[]{
                        image {
                            asset->{
                                _id,
                                url
                            },
                            alt
                        }
                    }
                }
            }`,
            { slug }
        );
}

export async function getCards(slug: string): Promise<Card> {
    
    const client = createClient(config);

    return client.fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
            pageBuilder[_type == "card"][0]{
                cards[]{
                    image {
                        asset->{
                            _id,
                            url
                        },
                        alt
                    },
                    heading,
                    description
                }
            }
        }`,
        { slug }
    );
}

export async function getAccordion(slug: string): Promise<Accordion> {
    const client = createClient(config);

    return client.fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
            pageBuilder[_type == "accordion"][0]{
                accordions[]{
                    title,
                    content
                }
            }
        }`,
        { slug }
    )
}

 
export async function getProject(slug: string): Promise<Project> {

    const client = createClient(config);

    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
        { slug }
    );
}

 

export async function getPages(): Promise<Page[]> {
    const client = createClient(config);

    return client.fetch(
        groq`*[_type == "page"] {
            _id,
            _createdAt,
            title,
            "slug": slug.current,
        }`
    );
}

export async function getPage(slug: string): Promise<Page> {
    const client = createClient(config);

    return client.fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
        }`,
        { slug }
    );
}

export async function getAllSlugs() {
    const client = createClient(config);

    return client.fetch(
        groq`*[_type == "page"]{
            "slug": slug.current
        }`
    );
}
