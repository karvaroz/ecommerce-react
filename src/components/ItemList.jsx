
function ItemList(){
    const item = [
        {
          id: 'a',
          name: 'Robin',
          description: 'Wieruch',
          price: 1988,
        },
        {
          id: 'b',
          name: 'Dave',
          description: 'Davidds',
          price: 1990,
        },
      ];
      
      
      const ItemList = ({ item }) => (
        <li>
          <div>{item.id}</div>
          <div>{item.name}</div>
          <div>{item.descrition}</div>
          <div>{item.price}</div>
        </li>
      );
}

export default ItemList
