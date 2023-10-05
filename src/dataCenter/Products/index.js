const allProducts = [
    {
        id: 1,
        category: 'cement',
        subCategory: 'ppc',
        company: 'ultratech',
        name: "UltraTech Cement",
        subType: "PPC 53 Grade",
        image: require('../../assets/img/E-commerce/Products/Cements/PPC/53/cement1.png').default,
        rating: 5,
        uniqueId: 101,
        mrpPrice: "1000",
        salePrice: "500",
        quantityTypes: [
            {
                id: 1,
                type: 'Bag'
            }
        ],
        count: -1,
    },
    {
        id: 2,
        category: 'cement',
        subCategory: 'ppc',
        company: 'ramco',
        name: "Ramco Cement",
        subType: "PPC 53 Grade",
        image: require('../../assets/img/E-commerce/Products/Cements/PPC/53/cement2.png').default,
        rating: 4,
        uniqueId: 102,
        mrpPrice: "800",
        salePrice: "500",
        quantityTypes: [
            {
                id: 1,
                type: 'Bag'
            }
        ],
        count: -1,
    },
    {
        id: 3,
        category: 'cement',
        subCategory: 'ppc',
        company: 'coromandel',
        name: "Coromandel Cement",
        subType: "PPC 53 Grade",
        image: require('../../assets/img/E-commerce/Products/Cements/PPC/53/cement3.png').default,
        rating: 4,
        uniqueId: 103,
        mrpPrice: "800",
        salePrice: "500",
        quantityTypes: [
            {
                id: 1,
                type: 'Bag'
            }
        ],
        count: -1,
    },
    {
        id: 4,
        category: 'cement',
        subCategory: 'ppc',
        company: 'dalmia',
        name: "Dalmia Cement",
        subType: "PPC 53 Grade",
        image: require('../../assets/img/E-commerce/Products/Cements/PPC/53/cement4.png').default,
        rating: 4,
        uniqueId: 104,
        mrpPrice: "800",
        salePrice: "500",
        quantityTypes: [
            {
                id: 1,
                type: 'Bag'
            }
        ],
        count: -1,
    },
    {
        id: 5,
        category: 'cement',
        subCategory: 'ppc',
        company: 'chettinad',
        name: "Chettinad Cement",
        subType: "PPC 53 Grade",
        image: require('../../assets/img/E-commerce/Products/Cements/PPC/53/cement5.png').default,
        rating: 5,
        uniqueId: 105,
        mrpPrice: "900",
        salePrice: "600",
        quantityTypes: [
            {
                id: 1,
                type: 'Bag'
            }
        ],
        count: -1,
    },
    {
        id: 6,
        category: 'cement',
        subCategory: 'ppc',
        company: 'mahashakthi',
        name: "Maha Shakthi Cement",
        subType: "PPC 53 Grade",
        image: require('../../assets/img/E-commerce/Products/Cements/PPC/53/cement6.png').default,
        rating: 4,
        uniqueId: 106,
        mrpPrice: "900",
        salePrice: "600",
        quantityTypes: [
            {
                id: 1,
                type: 'Bag'
            }
        ],
        count: -1,
    },
    {
        id: 7,
        category: 'cement',
        subCategory: 'ppc',
        company: 'birlashakti',
        name: "Birla Shakti Cement",
        subType: "PPC 53 Grade",
        image: require('../../assets/img/E-commerce/Products/Cements/PPC/53/cement7.png').default,
        rating: 4,
        uniqueId: 107,
        mrpPrice: "900",
        salePrice: "600",
        quantityTypes: [
            {
                id: 1,
                type: 'Bag'
            }
        ],
        count: -1,
    },
    {
        id: 8,
        category: 'cement',
        subCategory: 'ppc',
        company: 'jsw',
        name: "JSW Cement",
        subType: "PPC 53 Grade",
        image: require('../../assets/img/E-commerce/Products/Cements/PPC/53/cement8.png').default,
        rating: 5,
        uniqueId: 108,
        mrpPrice: "1100",
        salePrice: "800",
        quantityTypes: [
            {
                id: 1,
                type: 'Bag'
            }
        ],
        count: -1,
    },
    {
        id: 9,
        category: 'cement',
        subCategory: 'ppc',
        company: 'penna',
        name: "Penna Cement",
        subType: "PPC 53 Grade",
        image: require('../../assets/img/E-commerce/Products/Cements/PPC/53/cement9.png').default,
        rating: 4,
        uniqueId: 109,
        mrpPrice: "1100",
        salePrice: "800",
        quantityTypes: [
            {
                id: 1,
                type: 'Bag'
            }
        ],
        count: -1,
    },
    {
        id: 10,
        category: 'cement',
        subCategory: 'ppc',
        company: 'bharathi',
        name: "Bharathi Cement",
        subType: "PPC 53 Grade",
        image: require('../../assets/img/E-commerce/Products/Cements/PPC/53/cement10.png').default,
        rating: 4,
        uniqueId: 110,
        mrpPrice: "1100",
        salePrice: "800",
        quantityTypes: [
            {
                id: 1,
                type: 'Bag'
            }
        ],
        count: -1,
    },
    {
        id: 11,
        category: 'cement',
        subCategory: 'opc',
        company: 'ultratech',
        name: "UltraTech Cement",
        subType: "OPC 53 Grade",
        image: require('../../assets/img/E-commerce/Products/Cements/OPC/53/cement1.png').default,
        rating: 5,
        uniqueId: 301,
        mrpPrice: "1000",
        salePrice: "500",
        quantityTypes: [
            {
                id: 1,
                type: 'Bag'
            }
        ],
        count: -1,
    },
    {
        id: 12,
        category: 'cement',
        subCategory: 'opc',
        company: 'ramco',
        name: "Ramco Cement",
        subType: "OPC 53 Grade",
        image: require('../../assets/img/E-commerce/Products/Cements/OPC/53/cement2.png').default,
        rating: 4,
        uniqueId: 302,
        mrpPrice: "800",
        salePrice: "500",
        quantityTypes: [
            {
                id: 1,
                type: 'Bag'
            }
        ],
        count: -1,
    },
    {
        id: 13,
        category: 'cement',
        subCategory: 'opc',
        company: 'coromandel',
        name: "Coromandel Cement",
        subType: "OPC 53 Grade",
        image: require('../../assets/img/E-commerce/Products/Cements/OPC/53/cement3.png').default,
        rating: 4,
        uniqueId: 303,
        mrpPrice: "800",
        salePrice: "500",
        quantityTypes: [
            {
                id: 1,
                type: 'Bag'
            }
        ],
        count: -1,
    },
    {
        id: 14,
        category: 'cement',
        subCategory: 'opc',
        company: 'dalmia',
        name: "Dalmia Cement",
        subType: "OPC 53 Grade",
        image: require('../../assets/img/E-commerce/Products/Cements/OPC/53/cement4.png').default,
        rating: 4,
        uniqueId: 304,
        mrpPrice: "800",
        salePrice: "500",
        quantityTypes: [
            {
                id: 1,
                type: 'Bag'
            }
        ],
        count: -1,
    },
    {
        id: 15,
        category: 'cement',
        subCategory: 'opc',
        company: 'chettinad',
        name: "Chettinad Cement",
        subType: "OPC 53 Grade",
        image: require('../../assets/img/E-commerce/Products/Cements/OPC/53/cement5.png').default,
        rating: 5,
        uniqueId: 305,
        mrpPrice: "900",
        salePrice: "600",
        quantityTypes: [
            {
                id: 1,
                type: 'Bag'
            }
        ],
        count: -1,
    },
    {
        id: 16,
        category: 'cement',
        subCategory: 'opc',
        company: 'mahashakthi',
        name: "Maha Shakthi Cement",
        subType: "OPC 53 Grade",
        image: require('../../assets/img/E-commerce/Products/Cements/OPC/53/cement6.png').default,
        rating: 4,
        uniqueId: 306,
        mrpPrice: "900",
        salePrice: "600",
        quantityTypes: [
            {
                id: 1,
                type: 'Bag'
            }
        ],
        count: -1,
    },
    {
        id: 17,
        category: 'cement',
        subCategory: 'opc',
        company: 'birlashakti',
        name: "Birla Shakti Cement",
        subType: "OPC 53 Grade",
        image: require('../../assets/img/E-commerce/Products/Cements/OPC/53/cement7.png').default,
        rating: 4,
        uniqueId: 307,
        mrpPrice: "900",
        salePrice: "600",
        quantityTypes: [
            {
                id: 1,
                type: 'Bag'
            }
        ],
        count: -1,
    },
    {
        id: 18,
        category: 'cement',
        subCategory: 'opc',
        company: 'jsw',
        name: "JSW Cement",
        subType: "OPC 53 Grade",
        image: require('../../assets/img/E-commerce/Products/Cements/OPC/53/cement8.png').default,
        rating: 5,
        uniqueId: 308,
        mrpPrice: "1100",
        salePrice: "800",
        quantityTypes: [
            {
                id: 1,
                type: 'Bag'
            }
        ],
        count: -1,
    },
    {
        id: 19,
        category: 'cement',
        subCategory: 'opc',
        company: 'penna',
        name: "Penna Cement",
        subType: "OPC 53 Grade",
        image: require('../../assets/img/E-commerce/Products/Cements/OPC/53/cement9.png').default,
        rating: 4,
        uniqueId: 309,
        mrpPrice: "1100",
        salePrice: "800",
        quantityTypes: [
            {
                id: 1,
                type: 'Bag'
            }
        ],
        count: -1,
    },
    {
        id: 20,
        category: 'cement',
        subCategory: 'opc',
        company: 'bharathi',
        name: "Bharathi Cement",
        subType: "OPC 53 Grade",
        image: require('../../assets/img/E-commerce/Products/Cements/OPC/53/cement10.png').default,
        rating: 4,
        uniqueId: 310,
        mrpPrice: "1100",
        salePrice: "800",
        quantityTypes: [
            {
                id: 1,
                type: 'Bag'
            }
        ],
        count: -1,
    },
]

export default allProducts