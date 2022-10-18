export default {
    сategory: [
        {
            title: 'Все',
            img: 'soap.jpg',
            id: 'all'
        },
        {
            title: 'Мыло',
            img: 'soap.jpg',
            id: 'soap'
        },
        {
            title: 'Уход за кожей',
            img: 'skin-care.jpg',
            id: 'skin-care'
        },
        {
            title: 'Уход за волосами',
            img: 'hair-care.jpg',
            id: 'hair-care'
        },
        {
            title: 'Соль и бисер для ванн',
            img: 'bath-salt.jpg',
            id: 'bath-salt'
        },
        {
            title: 'Бомбочки',
            img: 'bombs.jpg',
            id: 'bombs'
        },
        {
            title: 'Флорентийское саше',
            img: 'florentine-sachet.jpg',
            id: 'florentine-sachet'
        },
        {
            title: 'Свечи',
            img: 'candles.jpg',
            id: 'candles'
        },
        {
            title: 'Разное',
            img: 'different.jpg',
            id: 'different'
        },
    ],
    product: [
        {
            title: 'Мыло с маслом лавра, виноградными косточками и льняным маслом',
            img: 'soap-lavr.jpg',
            id: '1',
            сategory: 'soap',
            isFavorite: true,
            isAllergenic: true,
            isArtificial: false,
            isSale: true,
            price: '250',
            oldPrice: '350',
        },
        {
            title: 'Скраб для тела лимонный',
            img: 'lemon-scrub.jpg',
            id: '2',
            сategory: 'skin-care',
            isFavorite: true,
            isAllergenic: false,
            isArtificial: true,
            isSale: false,
            price: '350',
            oldPrice: '',
        },
        {
            title: 'Мыло с маслом лавра',
            img: 'soap-lavr-or.jpg',
            id: '3',
            сategory: 'soap',
            isFavorite: false,
            isAllergenic: false,
            isArtificial: false,
            isSale: false,
            price: '550',
            oldPrice: '',
        },
    ],
    cart: [
        {
            title: 'Скраб для тела лимонный',
            img: 'lemon-scrub.jpg',
            id: '2',
            сategory: '2',
            isAllergenic: false,
            isArtificial: true,
            isSale: false,
            price: '350',
            oldPrice: '',
        },
    ]
}