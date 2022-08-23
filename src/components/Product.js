import React, { useEffect } from 'react';
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Store/cartSlice';
import { fetchProducts } from '../Store/productSlice';
import { STATUSES } from '../Store/productSlice';
import '../Style/Product.css';


const Products = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // };
        // fetchProducts();
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }
    return (
        <div>
            <div>
               
            </div>
        <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    
                  <center><img src={product.Image} alt="" width={80} height={80} /></center>
                  <h5>{product.Firstname}</h5>
                   
                    <h6>{product.Lastname} $</h6>
                    <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Products;
