export function loadLists() {
    return [
        {
            title: 'Tarefas',
            creatable: true,
            cards: [
                {
                    id: 1,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet erat nec consequat facilisis',
                    labels: ['#7159c1'],
                    user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
                },
                {
                    id: 2,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet erat nec consequat facilisis',
                    labels: ['#7159c1'],
                    user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
                },
                {
                    id: 3,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet erat nec consequat facilisis',
                    labels: ['#7159c1'],
                    user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
                },
            ]
        },
        {
            title: 'Fazendo',
            creatable: false,
            cards: [
                {
                    id: 6,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet erat nec consequat facilisis',
                    labels: [],
                    user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
                }
            ]
        },
        {
            title: 'Pausado',
            creatable: false,
            cards: [
                {
                    id: 7,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet erat nec consequat facilisis',
                    labels: ['#7159c1'],
                    user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
                },
                {
                    id: 8,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet erat nec consequat facilisis',
                    labels: ['#54e1f7'],
                    user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
                },
                {
                    id: 9,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet erat nec consequat facilisis',
                    labels: [],
                }
            ]
        },
        {
            title: 'Concluído',
            creatable: false,
            done: true,
            cards: [
                {
                    id: 10,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet erat nec consequat facilisis',
                    labels: [],
                },
                {
                    id: 12,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet erat nec consequat facilisis',
                    labels: ['#54e1f7'],
                },
                {
                    id: 13,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet erat nec consequat facilisis',
                    labels: ['#7159c1'],
                }
            ]
        },
    ];
}