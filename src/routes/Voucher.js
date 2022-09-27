import { Link } from 'react-router-dom';

export default function Voucher() {
    return (
        <div className=" bg-primary-cream h-screen">
			<nav className="flex items-center justify-center bg-yellow-500 text-white border-1/2 text-sm p-1/2 mx-8 font-['Monserrat'] rounded-md h-7">
				<Link to="/clickedVoucher"> 🏆 Click here for 25% off, fool!!!! 🏆</Link>
			</nav>
			<br></br>
			<nav className="flex items-center justify-center bg-green-700 text-white border-1/2 text-sm p-1/2 mx-8 font-['Monserrat'] rounded-md h-14">
				<Link to="/">country roadssssss take me ...</Link>
            </nav>
        </div>
	);
}
