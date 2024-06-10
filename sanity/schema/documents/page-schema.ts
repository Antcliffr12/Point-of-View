const page = {
	name: "page",
	title: "Pages",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: { source: "name" },
		},
		{
			name: "pageBuilder",
			type: "array",
			title: "Page builder",
			of: [
				{
					name: "hero",
					type: "hero",
				},
				{
					name: "card",
					type: "card",
				},
				{
					name: "accordion",
					type: "accordion",
				},
				{
					name: "sponsors",
					type: "sponsors",
				},
				{
					name: "services",
					type: "services",
				}
			],
		},
	],
};

export default page;
