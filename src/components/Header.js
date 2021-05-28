import Image from 'next/image';
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon
} from '@heroicons/react/outline';

function Header() {
    return (
        <header>
        {/*Top nav*/}
            <div className=" flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className=" mt-2 flex items-center flex-grow sm:flex-grow-0">
                  <Image
                      src ='https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png'
                      width ={150}  
                      height ={40}
                      objectFit = 'contain'
                      className = 'cursor-pointer'
                  />  
                </div>
                <div className="hidden  sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input  className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text"/>
                    <SearchIcon className="h-12 p-4"/>
                </div>
                {/*right*/}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 white-space-nowrap">
                    <div className="  link" >
                        <p >Hello, Raj</p>
                        <p className=" font-extrabold md:text-sm">Account</p>

                    </div>
                    <div className="link">
                        <p>Returns</p>
                        <p className=" font-extrabold md:text-sm">& Orders</p>
                        
                    </div>
                    <div className="relative link flex items-center" >
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">4</span>
                        <ShoppingCartIcon className="h-10"/>
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2 ">Basket</p>
                        
                    </div>

                </div>


            </div>
        {/* Bottom nav */}    
            <div className=" flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
                <p className=" link flex items-center">
                <MenuIcon className =' h-6 mr-1'/>
                All</p>
                <p className="link">Mobiles</p>
                <p className="link">Customer Service</p>
                <p className="link">Amazon Pay</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Gift Cards</p>
                <p className="link hidden lg:inline-flex">Home Improvement</p>

            </div>
        </header>
    )
}

export default Header
