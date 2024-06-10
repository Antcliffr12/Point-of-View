const card = {
    name: 'card',
    type: 'object',
    title: 'Card',
    fields: [
        {
            name: 'cards',
            type: 'array',
            title: 'Cards',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'image',
                            type: 'image',
                            title: 'Image',
                            options: { hotspot: true },
                            fields: [
                                {
                                    name: 'alt',
                                    title: 'Alt',
                                    type: 'string'
                                }
                            ],
                        },
                        {
                            name: 'heading',
                            type: 'string',
                            title: 'Heading'
                        },
                        {
                            name: 'description',
                            type: 'text',
                            title: 'Description'
                        }
                    ]
                }
            ],
            options: {
                layout: 'grid',
            },
        }
    ]
}


export default card;