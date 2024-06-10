const accordion = {
    title: 'Accordion',
    name: 'accordion',
    type: 'object',
    fields: [
        {
            title: 'Accordions',
            name: 'accordions',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            title: 'Title',
                            name: 'title',
                            type: 'string',
                        },
                        {
                            title: 'Content',
                            name: 'content',
                            type: 'text',
                        },
                    ],
                },
            ],
        },
    ],
}

export default accordion;