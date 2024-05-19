const MENU = [
    {
        title: 'Hambúrgueres',
        data: [
            {
                id: '1',
                title: 'Hambúrguer Clássico',
                price: 26.9,
                description:
                    'Um hambúrguer clássico com carne grelhada, queijo, alface, tomate e molho especial.',
                cover: require('../assets/burger1.jpg'),
                thumbnail: require('../assets/burger1.jpg'),
                ingredients: [
                    'Pão de hambúrguer;',
                    'Carne grelhada;',
                    'Queijo;',
                    'Alface;',
                    'Tomate;',
                    'Cebola roxa;',
                    'Molho especial;',
                ],
            },
            {
                id: '2',
                title: 'Hambúrguer Vegetariano',
                price: 24.9,
                description:
                    'Uma opção saudável e deliciosa com hambúrguer de legumes, queijo, alface, tomate e maionese vegana.',
                cover: require('../assets/burger2.jpg'),
                thumbnail: require('../assets/burger2.jpg'),
                ingredients: [
                    'Pão de hambúrguer integral;',
                    'Hambúrguer de legumes;',
                    'Queijo;',
                    'Alface;',
                    'Tomate;',
                    'Maionese vegana;',
                ],
            },
        ],
    },
    {
        title: 'Porções',
        data: [
            {
                id: '3',
                title: 'Batata Frita',
                price: 15.9,
                description:
                    'Porção de batatas fritas crocantes e saborosas, acompanhadas de ketchup e maionese.',
                cover: require('../assets/fries.jpg'),
                thumbnail: require('../assets/fries.jpg'),
                ingredients: ['Batatas;'],
            },
            {
                id: '4',
                title: 'Anéis de Cebola',
                price: 18.9,
                description:
                    'Porção de anéis de cebola empanados e fritos, servidos com molho barbecue.',
                cover: require('../assets/onion_rings.jpg'),
                thumbnail: require('../assets/onion_rings.jpg'),
                ingredients: [
                    'Cebola; Farinha de trigo; Ovos; Óleo para fritar; Molho barbecue;',
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
                title: 'Coca Cola',
                price: 6.9,
                thumbnail: require('../assets/7.jpg'),
                cover: require('../assets/7.jpg'),
                description:
                    'Uma coca super gelada para acompanhar a sua refeição...',
                ingredients: [],
            },
        ],
    },
]

const PRODUCTS = MENU.flatMap((item) => item.data)

const CATEGORIES = MENU.map((item) => item.title)

type ProductProps = (typeof PRODUCTS)[0]

export { MENU, PRODUCTS, CATEGORIES, ProductProps }
