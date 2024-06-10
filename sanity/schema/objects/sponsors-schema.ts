import { title } from "process";

const sponsors = {
    title: 'Sponsors',
    name: 'sponsors',
    type: 'object',
    fields: [
        {
            title: 'Sponsors',
            name: 'sponsors',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            title: 'Image',
                            name: 'image',
                            type: 'image',
                            options: { hotspot: true },
                            fields: [
                                {
                                    name: 'alt',
                                    title: 'Alt',
                                    type: 'string'
                                }
                            ],
                        },
                    ],
                },
            ],
        },
    ],
}

export default sponsors;