const items = [
    {
        id: 1,
        name: "Delicious Food 1",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 100,
        categoria: "Postre",
        // image: "dish-1.png",
        image: "https://images.unsplash.com/photo-1512094373-f8bc04f93328?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        stock: 5,
    },
    {
        id: 2,
        name: "Delicious Food 2",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 200,
        categoria: "Postre",
        // image: "dish-2.png",
        image: "https://images.unsplash.com/photo-1455853659719-4b521eebc76d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        stock: 5,
    },
    {
        id: 3,
        name: "Delicious Food 3",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 300,
        categoria: "Desayuno",
        image: "https://images.unsplash.com/photo-1455853739633-8c94c03d8121?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        // image: "dish-3.png",
        stock: 5,
    },
    {
        id: 4,
        name: "Delicious Food 4",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 400,
        categoria: "Desayuno",
        image: "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80",
        // image: "dish-4.png",
        stock: 5,
    },
    {
        id: 5,
        name: "Delicious Food 5",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 500,
        categoria: "Almuerzo",
        image: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        // image: "dish-5.png",
        stock: 5,
    },
    {
        id: 6,
        name: "Delicious Food 6",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 600,
        categoria: "Almuerzo",
        image: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80",
        // image: "dish-6.png",
        stock: 5,
    },
    {
        id: 7,
        name: "Delicious Food 7",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 700,
        categoria: "Almuerzo",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        // image: "menu-1.jpg",
        stock: 5,
    },
    {
        id: 8,
        name: "Delicious Food 8",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 800,
        categoria: "Bebida",
        image: "https://images.unsplash.com/photo-1481671703460-040cb8a2d909?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        // image: "menu-2.jpg",
        stock: 5,
    },
    {
        id: 9,
        name: "Delicious Food 9",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 900,
        categoria: "Bebida",
        image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        // image: "menu-3.jpg",
        stock: 5,
    },
    {
        id: 10,
        name: "Delicious Food 10",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 1000,
        categoria: "Desayuno",
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
        // image: "menu-4.jpg",
        stock: 5,
    },
    {
        id: 11,
        name: "Delicious Food 6",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 1100,
        categoria: "Desayuno",
        image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80",
        // image: "menu-5.jpg",
        stock: 5,
    },
    {
        id: 12,
        name: "Delicious Food 12",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 1200,
        categoria: "Postre",
        image: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        // image: "menu-6.jpg",
        stock: 5,
    },
    {
        id: 13,
        name: "Delicious Food 13",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 1300,
        categoria: "Almuerzo",
        image: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        // image: "menu-7.jpg",
        stock: 5,
    },
    {
        id: 14,
        name: "Delicious Food 14",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 1400,
        categoria: "Ensalada",
        image: "https://images.unsplash.com/photo-1503146234394-631200675614?ixlib=rb-1.2.1&ixid=https://images.unsplash.com/photo-1503146234394-631200675614?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80%3D&auto=format&fit=crop&w=500&q=60",
        // image: "menu-8.jpg",
        stock: 5,
    },
    {
        id: 15,
        name: "Delicious Food 15",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 1500,
        categoria: "Ensalada",
        image: "https://images.unsplash.com/photo-1468777675496-5782faaea55b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        // image: "menu-9.jpg",
        stock: 5,
    },
];

export default items;
// const itemsPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(items)
//     }, 2000)
// })

// const item = {
//     id: 15,
//     name: "Delicious Food 15",
//     description:
//         "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
//     price: 1500,
//     categoria: "Bebida",
//     image: "menu-9.jpg"
// }

// export const itemPromise = new Promise((res) => {
//     setTimeout(() => {
//         res(item);
//     }, 2000);
// });

// export default itemsPromise;