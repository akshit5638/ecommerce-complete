import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/product-card'
import { useLatestProductsQuery } from '../redux/api/productAPI'
import toast from 'react-hot-toast'
import Loader, { Skeleton } from '../components/loader'

const Home = () => {
    const { data, isLoading, isError } = useLatestProductsQuery("");
    if (isError)
        toast.error("cannot fetch")
    const addtocardhandler = () => {

    }
    return (
        <div className='home'>
            <section></section>
            <h1>
                Latest Product
                <Link to={'/search'} className='findmore'>
                    More
                </Link>
            </h1>
            <main>
                {
                    isLoading ? <Skeleton width='80vw' /> :
                        data?.products.map(i => (
                            <ProductCard
                                key={i._id}
                                productId={i._id}
                                name={i.name}
                                price={i.price}
                                stock={i.stock}
                                handler={addtocardhandler}
                                photo={i.photo}
                            />)
                        )
                }


            </main>
        </div>
    )
}

export default Home