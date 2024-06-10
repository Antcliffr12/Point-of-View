import {DocumentTextIcon} from '@sanity/icons'
const hero = {
    name: 'hero',
    icon: DocumentTextIcon,
    type: 'object',
    title: 'Hero',
    fields: [
        {
            name:'heading',
            type:'string'
        },
        {
            name: 'tagline',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        }
    ]
}

export default hero;