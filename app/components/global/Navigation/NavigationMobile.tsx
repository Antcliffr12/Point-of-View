import Link from "next/link";
import { useState } from "react";
import { getNavigation } from "@/sanity/sanity-utils";
import { MenuItem, Settings } from "@/types/Settings";

interface NavigationMobileProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	data: Settings;
}

export default function NavigationMobile({
	isOpen,
	setIsOpen,
	data,
}: NavigationMobileProps) {
	const menuItems = data?.menuItems || ([] as MenuItem[]);

	const handleLinkClick = () => {
		setIsOpen(false);
	};

	return (
		<div className="md:hidden flex justify-center">
			<button
				id="hamburger-button"
				className="relative h-8 w-8 cursor-pointer text-3xl text-[#AFDDE5]"
				aria-label={isOpen ? "Close Menu" : "Open Menu"}
				onClick={() => setIsOpen(!isOpen)}
			>
				<span
					className={`relative my-1.5 block h-1 w-[30px] bg-[#333333] transition-all duration-300 ${
						isOpen ? "top-[7px] rotate-45" : ""
					}`}
				/>
				<span
					className={`relative my-1.5 block h-1 w-[30px] bg-[#333333] transition-all duration-300 ${
						isOpen ? "opacity-0" : ""
					}`}
				/>
				<span
					className={`relative my-1.5 block h-1 w-[30px] bg-[#333333] transition-all duration-300 ${
						isOpen ? "top-[-12px] -rotate-45" : ""
					}`}
				/>
			</button>
			<div
				className={`absolute top-full left-0 bg-white h-dvh w-full overflow-hidden transition-all duration-300 ${
					isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
				}`}
			>
				<ul className="flex flex-col gap-[1.25rem] mt-[1.875rem]">
					{menuItems &&
						menuItems.map((menuItem, key) => {
							const href = menuItem?.slug;
							if (!href) return null;

							return (
								<li
									className={`px-5 transform transition-transform duration-300 ${
										isOpen
											? "translate-y-0 opacity-100"
											: "-translate-y-[20rem] transform-gpu opacity-0"
									}`}
									key={key}
									style={{ transitionDelay: `${key * 100}ms` }}
								>
									<Link
										className="block transition transform duration-300 text-[#333333] bg-gray-200 rounded-md p-3 font-semibold"
										href={href}
										onClick={handleLinkClick}
									>
										{menuItem.title}
									</Link>
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
}
