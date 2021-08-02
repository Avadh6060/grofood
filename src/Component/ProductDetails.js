import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../Component/Style/ProductDetails.css';
import { addToCart, setProductDetails } from '../Redux/Action/ProductAction';
import { useDispatch } from 'react-redux';
const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const fatch_grocery_data = useSelector(state => state.allProduct.Products);
    console.log(fatch_grocery_data);

    const getProduct = () => {
        const find_pro_data = fatch_grocery_data.find(pro_data => pro_data.food.foodId === id);
        console.log(find_pro_data);
        dispatch(setProductDetails(find_pro_data));

    }
    useEffect(() => {
        getProduct();
    }, []);
    const pro_data = useSelector(state => state.allProduct.OneProduct);

    const AddToCard = (id) => {
        const cart_item_data = fatch_grocery_data.find(item => item.food.foodId === id);
        dispatch(addToCart(cart_item_data));
    }


    return (
        <>
            <div className="container product-detail-box">
                {pro_data.map((item) => {
                    return (
                        <>
                            <div className="row">
                                <div className="col-lg-6 first-box">
                                    <img src={item.food.image}></img>
                                </div>
                                <div className="col-lg-6 second-box">
                                    <div className="pro_title">
                                        <h1>{item.food.label}</h1>
                                    </div>
                                    <div className="foodContentsLabel">
                                        <h4>Ingrediants : </h4>
                                        <p>{item.food.foodContentsLabel}</p>
                                    </div>
                                    <div className="nutrients">
                                        <h4>nutrients : </h4>
                                        <li>calories : {Math.trunc(item.food.nutrients.ENERC_KCAL)}%</li>
                                        <li>Fat : {Math.trunc(item.food.nutrients.FAT)}%</li>
                                        <li>CHOCDF: {Math.trunc(item.food.nutrients.CHOCDF)}%</li>
                                        <li>FIBTG : {Math.trunc(item.food.nutrients.FIBTG)}%</li>
                                    </div>
                                    <button className="btn" onClick={() => AddToCard(item.food.foodId)}>Add To Cart</button>
                                </div>
                            </div>
                        </>
                    )

                })}
            </div>
        </>
    )
}

export default ProductDetails
