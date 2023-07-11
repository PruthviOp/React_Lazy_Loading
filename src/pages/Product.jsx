import React, { Suspense, useState } from 'react'
import axios from 'axios'
const ProductCard = React.lazy(() => import('../components/ProductCard'))



function Product() {
    const [photos, setPhotos] = useState([])
    const [isfetched, setIsFetched] = useState(false)
    const fetchPhotos = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
        setPhotos(res.data)
        setIsFetched(true)
    }
    return (
        <div  className='container d-flex justify-content-center align-items-center' style={{minHeight:'85vh'}}>
            {
                isfetched ?
                    <div className='container d-flex flex-wrap justify-content-center align-items-center gap-5'>
                        <Suspense fallback={<>
                            <button class="btn btn-info"  disabled>
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Getting Photos ...
                            </button>
                        </>}>
                        {
                            photos.map((item) => {
                                return (
                                    <ProductCard key={item.id} title={item.title} url={item.url} />
                                )
                            })
                        }
                    </Suspense>
                    </div>

                    : <button className='btn btn-info' onClick={fetchPhotos}>Get Photos</button>

}

        </div >
    )
}

export default Product