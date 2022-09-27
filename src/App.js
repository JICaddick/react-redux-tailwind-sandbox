import React from "react";
import { Link } from 'react-router-dom';

function App() {

	const windowWidth = window.innerWidth;
	let imageFile = '';
	windowWidth < 420 ? imageFile = './images/image-product-mobile.jpg' : imageFile = './images/image-product-desktop.jpg';
	
return (
	<div className=" bg-primary-cream h-screen w-screen flex justify-center items-center pb-12">
		<div className="border-2 rounded-xl mx-6 mt-12 bg-white md:flex lg:flex">
			<img className="rounded-l-xl sm:h-5/6" src={imageFile} alt="perfume for ad" />
			<div className="">
				<div className="w-full h-1/8 text-neutral-dark-grayish-blue font-['Monserrat] pl-8 mt-6 md:pl-16 md:mt-10 md:text-2xl ">
					P E R F U M E
				</div>

				<div className="text-3xl md:text-6xl pl-8 pb-2 w-full font-bold font-['fraunces'] md:pl-16 md:py-4">
					Gabrielle Essence Eau De Parfum
				</div>

				<div className="w-full h-3/8 text-sm text-neutral-dark-grayish-blue md:my-8 md:pl-16 md:text-4xl">
					A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator
					for the House of CHANEL.
				</div>
				<div className="flex flex-row p-5 items-center justify-between md:pl-16">
					<div className="w-full text-3xl pl-3 text-primary-dark-cyan font-['fraunces'] md:text-5xl">
						$149.99
					</div>
					<div className="w-full line-through text-neutral-dark-grayish-blue md:text-2xl">
						169.99
					</div>
				</div>
				<nav className="flex items-center justify-center bg-yellow-500 text-white border-1/2 text-sm p-1/2 mx-8 font-['Monserrat'] rounded-md h-14">
					
					{/* // className="flex items-center justify-center bg-yellow-500 text-white border-1/2 text-sm font-['Monserrat'] rounded-md h-9 md:w-fit md:text-2xl md:px-8"> */}
					<Link to="/voucher">🏆 Voucher 🏆</Link>
				</nav>
				<br></br>
				<div className="flex items-center justify-center bg-green-700 text-white border-1/2 text-sm p-1/2 mx-8 font-['Monserrat'] rounded-md h-14">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
						/>
					</svg>
					Add to Cart
				</div>
			</div>
		</div>
	</div>
);
}

export default App;
