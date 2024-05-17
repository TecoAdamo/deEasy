const MENU = [
    {
        title: 'Pizza do dia',
        data: [
            {
                id: '1',
                title: 'Pizza Margherita',
                price: 29.9,
                description:
                    'A clássica pizza Margherita com molho de tomate, queijo mozzarella e manjericão fresco.',
                cover: require('../assets/5.jpg'),
                thumbnail: require('../assets/5.jpg'),
                ingredients: [
                    'Massa de pizza;',
                    'Molho de tomate;',
                    'Queijo mozzarella;',
                    'Manjericão fresco;',
                    'Azeite de oliva extra virgem;',
                ],
            },
        ],
    },
    {
        title: 'Promoções',
        data: [
            {
                id: '2',
                title: 'Pizza Calabresa',
                price: 34.9,
                description:
                    'Pizza deliciosa com fatias de calabresa, cebola e azeitonas pretas, sempre uma surpresa a cada mordida.',
                cover: require('../assets/3.jpg'),
                thumbnail: require('../assets/3.jpg'),
                ingredients: [
                    'Massa de pizza;',
                    'Molho de tomate;',
                    'Queijo mozzarella;',
                    'Calabresa fatiada;',
                    'Cebola;',
                    'Azeitonas pretas;',
                    'Orégano;',
                ],
            },
            {
                id: '3',
                title: 'Pizza Quatro Queijos',
                price: 32.7,
                description:
                    'Uma combinação irresistível de queijos: mozzarella, gorgonzola, parmesão e catupiry.',
                cover: require('../assets/2.jpg'),
                thumbnail: require('../assets/2.jpg'),
                ingredients: [
                    'Massa de pizza;',
                    'Molho de tomate;',
                    'Queijo mozzarella;',
                    'Queijo gorgonzola;',
                    'Queijo parmesão;',
                    'Queijo catupiry;',
                ],
            },
            {
                id: '4',
                title: 'Pizza Pepperoni',
                price: 29.9,
                description:
                    'A tradicional pizza pepperoni que conquista a todos com seu sabor inconfundível.',
                cover: require('../assets/4.jpg'),
                thumbnail: require('../assets/4.jpg'),
                ingredients: [
                    'Massa de pizza;',
                    'Molho de tomate;',
                    'Queijo mozzarella;',
                    'Pepperoni fatiado;',
                    'Orégano;',
                ],
            },
        ],
    },
    {
        title: 'Sobremesa',
        data: [
            {
                id: '5',
                title: 'Sorvete',
                price: 18.9,
                description:
                    'Uma sobremesa deliciosa para saborear. Escolha o sorvete e a calda que desejar...',
                cover: require('../assets/6.jpg'),
                thumbnail: require('../assets/6.jpg'),
                ingredients: [
                    '1x Brownie;',
                    '1x Bola de sorvete a sua escolha;',
                    'Escolha sua calda;',
                ],
            },
            {
                id: '6',
                title: 'Cupcake',
                price: 22.9,
                description:
                    'Um delicioso Cupcake para adoçar. Escolha o sabor que você gosta...',
                cover: require('../assets/cup.jpg'),
                thumbnail: require('../assets/cup.jpg'),
                ingredients: ['Escolha o sabor;', 'Chantilly;'],
            },
        ],
    },
    {
        title: 'Bebidas',
        data: [
            {
                id: '7',
                title: 'Hmmm, coquinha!',
                price: 6.9,
                thumbnail: require('../assets/7.jpg'),
                cover: require('../assets/7.jpg'),
                description:
                    'Uma coca super gelada para acompanhar a sua pizza...',
                ingredients: [],
            },
        ],
    },
]

const PRODUCTS = MENU.flatMap((item) => item.data)

const CATEGORIES = MENU.map((item) => item.title)

type ProductProps = (typeof PRODUCTS)[0]

export { MENU, PRODUCTS, CATEGORIES, ProductProps }
