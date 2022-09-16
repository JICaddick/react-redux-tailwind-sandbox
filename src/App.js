import { useState } from 'react';

export default function App() {
	// const [people, sesetPeople] = useState([]);

	const people = [
		{
			name: 'James Caddick',
			facts: ['tesst', 'test1'],
		},
		{
			name: 'Steven C. Dunn',
			facts: ['tesst', 'test1'],
		},
	];

	return (
		<div className="h-screen flex justify-center items-center bg-black text-white">
			{/* <div className="h-3/4 flex ">
				<div className="h-full mx-4 p-4 border-2 border-purple-600 rounded-md shadow-lg shadow-gray-500">
					<div>
						<span className="text-center w-full font-bold text-lg text-green-300">
							James Caddick
						</span>
						<ul>
							<li>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
								Maiores et perferendis eaque, exercitationem praesentium nihil.
							</li>
							<li>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
								Maiores et perferendis eaque, exercitationem praesentium nihil.
							</li>
							<li>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
								Maiores et perferendis eaque, exercitationem praesentium nihil.
							</li>
							<li>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
								Maiores et perferendis eaque, exercitationem praesentium nihil.
							</li>
						</ul>
					</div>
				</div>
				<div className="h-full mx-4 p-4 border-2 border-purple-600 rounded-md shadow-lg shadow-gray-500">
					<div>
						<span className="text-center w-full font-bold text-lg text-green-300">
							Steven C. Dunn
						</span>
						<ul>
							<li>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
								Maiores et perferendis eaque, exercitationem praesentium nihil.
							</li>
							<li>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
								Maiores et perferendis eaque, exercitationem praesentium nihil.
							</li>
							<li>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
								Maiores et perferendis eaque, exercitationem praesentium nihil.
							</li>
							<li>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
								Maiores et perferendis eaque, exercitationem praesentium nihil.
							</li>
						</ul>
					</div>
				</div>
			</div> */}
			{people.map((person) => (
				<div className="bg-white border-2 text-black w-full mx-4 p-6 rounded-md">
					{person.name}
					{person.facts.map((fact) => (
						<div>{fact}</div>
					))}
				</div>
			))}
		</div>
	);
}
