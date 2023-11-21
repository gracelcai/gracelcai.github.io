export default {

    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'techstack',
            title: 'Tech Stack',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'imageurl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'github',
            title: 'GitHub',
            type: 'url',
            initialValue: 'https://github.com/gracelcai'
        },
        {
            name: 'tags',
            title: 'Tags',
           type:'array',
           of: [
             {
               name:'tag',
               title:'Tag',
               type:'string'
             }
           ]
          },
    ]
}