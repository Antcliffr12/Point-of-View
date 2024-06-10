"use client";
import Link from "next/link";

import { useState } from "react";

import { getNavigation } from "@/sanity/sanity-utils";
import { MenuItem, Settings } from "@/types/Settings";
import NavigationMobile from "./NavigationMobile";

interface NavbarProps {
	data: Settings;
}

export default function NavigationLayout(props: NavbarProps) {
	const { data } = props;
	const menuItems = data?.menuItems || ([] as MenuItem[]);

	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="space-x-8 text-xl" aria-label="main">
			<ul className="list-reset gap-x-5 lg:flex justify-end flex-1 items-center hidden">
				{menuItems &&
					menuItems.map((menuItem, key) => {
						const href = menuItem?.slug;
						if (!href) return null;

						return (
							<li key={key}>
								<Link className="font-semibold hover:opacity-90 hover:text-[#FFC107]" href={href}>
									{menuItem.title}
								</Link>
							</li>
						);
					})}
			</ul>
			{/* <NavigationMobile isOpen={isOpen} setIsOpen={setIsOpen} data={data} /> */}
		</nav>
	);
}
