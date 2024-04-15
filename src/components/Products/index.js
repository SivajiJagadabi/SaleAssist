import { useEffect, useState } from 'react'
import axios from 'axios'

import './index.css'
import AllBags from '../Images/AllBags.png'
import { IoBagCheck } from "react-icons/io5";
import DuffleBag from '../Images/DuffleBag.png'
import ToteBag from '../Images/ToteBag.png'
import VanityPouch from '../Images/VanityPouch.png'
import LaptopSleeve from '../Images/LaptopSleeve.png'
import MessengerBags from '../Images/MessengerBags.png'
import SlingsBag from '../Images/SlingsBag.png'
import Handbag from '../Images/Handbag.png'
import { FiUpload } from "react-icons/fi";
import Header from '../Header'





const Products = () => {

    const [products, setProducts] = useState([])


    useEffect(() => {
        // Using Axios to make a GET request
        axios.get('https://products-production.up.railway.app/api/products')
            .then(response => {
                // Process the data
                setProducts(response.data)
                console.log(response.data)
            })
            .catch(error => {
                // Handle errors
                console.error('There was a problem with the request:', error);
            });

    }, [])

    return (
        <div className='app-container'>
            <Header />
            <div className='product-categories'>
                <div className='product-category'>
                    <img src={AllBags} className='category-img'/>
                    <h1 className='category'>All Bags</h1>
                </div>
                <div className='product-category'>
                    <img src={VanityPouch} className='category-img' />
                    <h1 className='category'>Vanity Pouch</h1>
                </div>
                <div className='product-category'>
                    <img src={ToteBag}  className='category-img'/>
                    <h1 className='category'>Tote Bag</h1>
                </div>
                <div className='product-category'>
                    <img src={DuffleBag} className='category-img' />
                    <h1 className='category'>Duffle Bag</h1>
                </div>
                <div className='product-category'>
                    <img src={LaptopSleeve} className='category-img'/>
                    <h1 className='category'>Laptop Sleeve</h1>
                </div>
                <div className='product-category'>
                    <img src={MessengerBags} className='category-img'/>
                    <h1 className='category'>Messenger Bags</h1>
                </div>
                <div className='product-category'>
                    <img src={SlingsBag}  className='category-img'/>
                    <h1 className='category'>Slings Bag</h1>
                </div>
                <div className='product-category'>
                    <img src={Handbag} className='category-img'/>
                    <h1 className='category'>Handbags</h1>
                </div>
                


            </div>
            <div className='filters'>
                    <h1 className='product-type'>Bags .Backpacks</h1>
                    <h1 className='products-count'>13 Products <FiUpload style={{color:'white',marginLeft:'5px'}}/></h1>
                </div>
            <div className='products-container'>

                {products.map((eachProduct) => {


                    return (
                        <div className='product-card'>
                            <img src={eachProduct.image} alt='product' className='image' />
                            <div className='title-price-card'>
                                <h1 className='title'>{eachProduct.title}</h1>
                                <div className='price-cart-bag-card'>
                                    <p>&#8377; {(eachProduct.price * 50 / 100)}<span className='original-price'>{eachProduct.price}</span><span className='discount'>({eachProduct.discount}% Off)</span></p>
                                    <IoBagCheck />
                                </div>
                            </div>
                        </div>
                    )
                }

                )}


            </div>

        </div>

    )
}

export default Products