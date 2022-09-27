import { Link } from 'react-router-dom';

export default function ClickedVoucher() {
    return (
			<div className=" bg-primary-cream h-screen">
            <div className="flex text-center items-center justify-center bg-yellow-500 text-white border-1/2 text-sm p-1/2 mx-8 font-['Monserrat'] rounded-md h-14"> 🏆 Your discount has been added.
                Felicitaciones, compinche. 🏆 </div>
				<br></br>
				<nav className="flex items-center justify-center bg-cyan-400 text-white border-1/2 text-sm p-1/2 mx-8 font-['Monserrat'] rounded-md h-14">
					<Link to="/Voucher">Back, please. </Link>
				</nav>
				<br></br>
				<nav className="flex items-center justify-center bg-green-700 text-white border-1/2 text-sm p-1/2 mx-8 font-['Monserrat'] rounded-md h-14">
					<Link to="/">Mama, Mama I'm coming ...</Link>
				</nav>
			</div>
		);
}
