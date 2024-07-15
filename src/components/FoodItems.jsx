import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData.js'

import toast, { Toaster } from 'react-hot-toast';

import { useSelector } from 'react-redux';

const FoodItems = () => {

  const category = useSelector((state) => state.category.category);

  const handleToast = (name) => toast.success(`Added ${name} to cart`);

  const search = useSelector((state) => state.search.search);

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />

      <div className='flex flex-wrap gap-10 mx-6 my-10 justify-center lg:justify-start'>
        {
          FoodData.filter((food) => {
            if (category === "All") {
              return food.name.toLowerCase().includes(search.toLowerCase());
            } else {
              return category === food.category && food.name.toLowerCase().includes(search.toLowerCase())
            }
          }).map((food) => (<FoodCard 
                              key={food.id} 
                              img={food.img}
                              id={food.id} 
                              name={food.name} 
                              price={food.price}
                              desc={food.desc}
                              rating={food.rating}
                              handleToast={handleToast}
                            />
          ))
        }
      </div>
    </>
  )
}

export default FoodItems