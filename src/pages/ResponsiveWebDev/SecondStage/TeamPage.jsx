import React from "react";
import Footer from "@components/Footer/Footer";
import Photo1 from "@assets/images/photo1.png";
import Photo2 from "@assets/images/photo2.png";
import Photo3 from "@assets/images/photo3.png";
import Photo4 from "@assets/images/photo4.png";
import Photo5 from "@assets/images/photo5.png";
import Photo6 from "@assets/images/photo6.png";

const TeamPage = () => {
	const CrewList = [
		{
			avatar: Photo1,
			position: "Product owner",
			name: "Bill Mahoney",
		},
		{
			avatar: Photo2,
			position: "Art director",
			name: "Saba Cabrera",
		},
		{
			avatar: Photo3,
			position: "Tech Lead",
			name: "Shae Le",
		},
		{
			avatar: Photo4,
			position: "UX Designer",
			name: "Skylah Lu",
		},
		{
			avatar: Photo5,
			position: "Developer",
			name: "Griff Richards",
		},
		{
			avatar: Photo6,
			position: "Developer",
			name: "Stan John",
		},
	];

	const Crew = ({ data }) => {
		return (
			<div className="crew-frame">
				<div className="flex justify-center">
					<div>
						<img
							src={data?.avatar}
							alt="photo1"
							className="crew-avatar hover:rounded-xl hover:scale-125 transition"
						/>
						<div className="mt-2 crew-name mb-4">{data?.name}</div>
					</div>
					<div className="crew-position">{data?.position}</div>
				</div>
			</div>
		);
	};

	return (
		<>
			<div className="container mx-auto flex flex-wrap items-center justify-center">
				<div>
					<div className="flex flex-wrap items-center justify-center mb-5">
						<div className="flex flex-wrap">
							<div className="basis-full m-4 md:basis-1/2 md:m-0 team-title">
								<div className="">The creative crew</div>
							</div>
							<div className="basis-full m-4 md:basis-1/2 md:m-0">
								<div className="font-bold">WHO WE ARE</div>
								<div>
									We are team of creatively diverse. driven.
									innovative individuals working in various locations
									from the world.
								</div>
							</div>
						</div>
					</div>
					<div className="grid sm:grid-cols-2 md:grid-cols-3">
						{CrewList.map((data) => (
							<Crew data={data} />
						))}
					</div>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default TeamPage;
