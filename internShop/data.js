module.exports = function () {
    return {
        users: [
            {
                id: 1,
                userName: 'zehra',
                password: 'alaska19',
                userType: 1
            },
            {
                id: 2,
                userName: 'alaska',
                password: '12345',
                userType: 1
            },
        ],

        products: [
            {
                id: 1,
                image: "../../assets/images/phone.jpg",
                title: 'Mobile Phone',
                model: 'Oppo Rx17-Neo',
                oldPrice: 8599,
                price: 7599,

            }, {
                id: 2,
                image: "../../assets/images/phone3.jpg",
                title: 'Mobile Phone',
                model: 'Oppo Rx17-Neo',
                oldPrice: 8599,
                price: 7599,

            }, {
                id: 3,
                image: "../../assets/images/phone.jpg",
                title: 'Mobile Phone',
                model: 'Oppo Rx17-Neo',
                oldPrice: 8599,
                price: 7599,

            }, {
                id: 4,
                image: "../../assets/images/phone3.jpg",
                title: 'SAMSUNG Smart Phone',
                model: 'Galaxy A-50',
                oldPrice: 8599,
                price: 7599,

            }, {
                id: 5,
                image: "../../assets/images/phone.jpg",
                title: 'SAMSUNG Smart Phone',
                model: 'Galaxy M-20',
                oldPrice: 6377,
                price: 4999,

            },{
                id: 6,
                image: "../../assets/images/phone.jpg",
                title: 'XIAOMI Smart Phone',
                model: 'Red Mi Note-11',
                oldPrice: 6199,
                price: 5049,

            },
        ]
    }
}

//userType:1 -> admin
//userType:2 -> user