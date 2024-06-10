const services = {
    name: 'services',
    type: 'object',
    title: 'Services',
    fields: [
        {
            name: 'BlockTitle',
            type: 'string',
            title: 'Block Title'
        },
        {
            name: 'BlockDescription',
            type: 'text',
            title: 'Block Description'
        },
        {
            name: 'services',
            type: 'array',
            title: 'Services',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            type: 'string',
                            title: 'Title'
                        },
                        {
                            name: 'description',
                            type: 'text',
                            title: 'Description'
                        },
                        {
                            name: 'items',
                            type: 'array',
                            title: 'Items',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'item',
                                            type: 'string',
                                            title: 'Item'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

export default services;
