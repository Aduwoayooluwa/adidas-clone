import Hamburger from 'hamburger-react'
import React from 'react'
import WishList from '../assets/wishlist.svg'
import AdidasLogo from '../assets/adidas_logo.svg'
import SearchIcon from '../assets/search_icon.svg'
import { ShoppingCart } from 'react-feather'
// type Props = {
//     name: string
// }



const Navigation = () => {
    const [open, close] = React.useState()

    return (
        <>
            <nav className='justify-between flex items-center w-full'>
                <section className='flex items-center justify-between w-1/4'>
                    <div>
                    <Hamburger size={25}/>
                    </div>

                    <div>
                        <img src={WishList} alt='wishlist' />
                    </div>
                </section>
                {/* second section */}

                <div className='bg-red-200'>
                    <img src={AdidasLogo} alt='logo' />
                </div>

                <section className='w-1/4 justify-between flex items-center'>
                    
                    <div>
                        <img src={SearchIcon} loading='lazy' alt='search icon' />
                    </div>

                    <div>
                        <ShoppingCart  />
                    </div>

                </section>

                
            </nav>
        </>
    )
}

export default Navigation