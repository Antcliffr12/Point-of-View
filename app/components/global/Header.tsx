import Link from "next/link";
import { Navigation } from "../global/Navigation/index";

type Props = {};

const Header = (props: Props) => {
	return (
		<header className="sticky top-0 z-20 bg-[#FFFFFF] shadow-sm shadow-y-[10px] shadows-2 shadows-scale-3">
			<section className="mx-auto flex max-w-[1240px] items-center justify-between p-5">
                <h1 className="font-inter text-3xl font-medium">
					<Link href="/" className="hover:text-[#FFC107]">
						Point of View
					</Link>
				</h1>
				<Navigation />
			</section>
		</header>
	);
};

export default Header;
