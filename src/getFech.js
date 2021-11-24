const items = [
    {
        id: 1,
        name: "Delicious Food 1",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 100,
        image: "dish-1.png"
    },
    {
        id: 2,
        name: "Delicious Food 2",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 200,
        image: "dish-2.png"
    },
    {
        id: 3,
        name: "Delicious Food 3",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 300,
        image: "dish-3.png"
    },
    {
        id: 4,
        name: "Delicious Food 4",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 400,
        image: "dish-4.png"
    },
    {
        id: 5,
        name: "Delicious Food 5",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 500,
        image: "dish-5.png"
    },
    {
        id: 6,
        name: "Delicious Food 6",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 600,
        image: "dish-6.png"
    },
    {
        id: 7,
        name: "Delicious Food 7",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 700,
        image: "menu-1.jpg"
    },
    {
        id: 8,
        name: "Delicious Food 8",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 800,
        image: "menu-2.jpg"
    },
    {
        id: 9,
        name: "Delicious Food 9",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 900,
        image: "menu-3.jpg"
    },
    {
        id: 10,
        name: "Delicious Food 10",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 1000,
        image: "menu-4.jpg"
    },
    {
        id: 11,
        name: "Delicious Food 6",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 1100,
        image: "menu-5.jpg"
    },
    {
        id: 12,
        name: "Delicious Food 12",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 1200,
        image: "menu-6.jpg"
    },
    {
        id: 13,
        name: "Delicious Food 13",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 1300,
        image: "menu-7.jpg"
    },
    {
        id: 14,
        name: "Delicious Food 14",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 1400,
        image: "menu-8.jpg"
    },
    {
        id: 15,
        name: "Delicious Food 15",
        description:
            "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.",
        price: 1500,
        image: "menu-9.jpg"
    },
];

export const getFetch = new Promise((aceptado, rechazada) => {
    //Acciones todo ok 
    setTimeout(() => {
        aceptado(items)
    }, 3000);
    //rechazada('400 not found')
})
