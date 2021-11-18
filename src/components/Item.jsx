
function Item({ item }) {
    // { id, title, price, pictureUrl }

    { items.map(item => 
        <div key={item.id}></div>
        <div {item.name}></div>
        <div {item.description}></div>
        <div {item.price}></div>

        
    )}
    const item = {
        id: 1,
        name: 'Name test',
        description: 'Description test',
        price: 10,
        stock: 100
    }
    
    const promise = new Promise {{acept, reject}  => {
        acept(true)
    }}
    promise
    .then {(
        setTimeout(() => {
            console.log(
                item.id, 
                item.name, 
                item.description,
                item.price,
                item.stock
            );
        }, 3000)
    )}
    return {(error) => console.log(error);}
}

export default Item;