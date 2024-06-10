import { EarthGlobeIcon } from "@sanity/icons";
const settings = {
	name: 'siteConfig',
    type: 'document',
    title: 'Site Settings',
	icon: EarthGlobeIcon,
	fields: [
		{
			name: "title",
			description: "This field is the title of your website",
			title: "Title",
			type: "string",
			validation: (rule: any) => rule.required(),
		},
		{
			name: "overview",
			description: "Used both for <meta> description tag for SEO",
			title: "Description",
			type: "array",
			of: [
				{
					lists: [],
					marks: {
						annotations: [
							{
								name: "link",
								type: "object",
								title: "Link",
								fields: [
									{
										name: "href",
										type: "url",
										title: "Url",
									},
								],
							},
						],
						decorators: [
							{
								title: "Italic",
								value: "em",
							},
							{
								title: "Strong",
								value: "strong",
							},
						],
					},
					styles: [],
					type: "block",
				},
			],
			validation: (rule: any) => rule.max(155).required(),
		},
		{
			name: 'menuItems',
			title: 'Menu Item list',
			description: 'Links displayed on the header of your site.',
			type: 'array',
			of: [
				
				{
					title: 'Reference',
					type: 'reference',
					to: [{ type: "page" }],
				},
			],
		},
	],
};

export default settings;
