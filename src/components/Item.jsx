import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// import cartContext from "../context/cartContext";
// import CartState from "../context/CartState";

const Item = ({ item }) => {
    // const { list, quantity } = useContext(cartContext);
    // const [show, setShow] = useState(false);
    const element = useRef();

    useEffect(() => {
        const observer = new window.IntersectionObserver((entries) => {
            console.log("interseccion");
        });
        observer.observe(element.current);
        console.log(element);
        console.log(observer);
        observer.disconnect();
    }, []);

    return (
        <>
            <div class="box-container">
                <div className="box" ref={element}>
                    <div className="image">
                        <img src={item.image} alt="item" />
                        <a href="#content" className="fas fa-heart"> </a>
                    </div>
                    <div className="content">
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <span className="price">{item.price}</span>
                        <Link to={`/product/${item.id}`} className="btn">
                            Ver Más
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Item;









