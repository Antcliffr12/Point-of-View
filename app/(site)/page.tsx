import { getPage } from "@/sanity/sanity-utils";
import Hero from "../components/PageBuilder/Hero";
import Cards from "../components/PageBuilder/Cards";
import AccordionComponent from "../components/PageBuilder/Accordion";
import Sponsors from "../components/PageBuilder/Sponsors";
import Services from "../components/PageBuilder/Services";

type Props = {
    params: { slug:  string }
}

export default async function Home({ params }: Props ) {
    const page = await getPage("/");
    
	return (
		<section>
			<Hero params={{ slug: page.slug }} />
			<Cards params={{ slug: page.slug }} />
			<Services params={{ slug: page.slug }} />
			<Sponsors params={{ slug: page.slug }}/>
			<AccordionComponent params={{ slug: page.slug }} />
		</section>
	);
}
