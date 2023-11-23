export default {
    name:'workExperience',
    title:'Work Experience',
    type:'document',
    fields:[
           {name:'role',
               title:'Role',
               type:'string'
            },
            {
                name:'company',
                title:'Company',
                type:'string'
            },
            {
                name:'desc',
                title:'Desc',
                type:'text'
            },
            {
                name:'startDate',
                title: 'Start Date',
                type: 'date'
            },
            {
                name:'endDate',
                title: 'End Date',
                type: 'date'
            }
    ]
}