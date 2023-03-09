import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Counter from '../Counter/CounterButton'
import products from "../../data/products.js";
import CartContext from '../../context/Cart/CartContext';



const ProductDetails = () => {

    const { count, handleAddToCart }= useContext(CartContext)

    const { idProduct: idProduct } = useParams();

    const {id, title, url, description, price} = products.find((product) => {
        return product.id === parseInt(idProduct)
      }) 

  

    return (
        <section class="text-gray-700 body-font overflow-hidden bg-white">
            <div key={id} class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={url} />
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 class="text-sm title-font text-gray-500 tracking-widest">SIMPLE CARE</h2>
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{title}</h1>
                        <div class="flex mb-4">
                            <span class="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-rose-300" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-rose-300" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-rose-300" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-rose-300" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-rose-300" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <span class="text-gray-600 ml-3">4 Reviews</span>
                            </span>
                        </div>
                        <p class="leading-relaxed">{description}</p>
                        <div class="flex flex-col gap-4">
                            <span class="title-font font-medium text-2xl text-gray-900">{price}</span>
                            <button class="rounded-md w-32 h-10 bg-gray-200 p-2 border-0 inline-flex items-center justify-center text-gray-500 ml-4"> Add to wish list</button>
                            <Counter id={id} url={url} title={title} price={price} count={count} handleAddToCart={handleAddToCart }/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails