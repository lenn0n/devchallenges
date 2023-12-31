import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "@components/Footer/Footer";
import Scarecrow from "@assets/images/Scarecrow.png";
const NotFound = () => {
	const navigate = useNavigate();
	const handleBackToHome = () => {
		navigate("/");
	};

	return (
		<>
			<div className="container mx-auto flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between">
				<div className="ms-4 me-4 md:ms-0 me-0 basis-full md:basis-1/2 flex justify-center">
					<img src={Scarecrow} width={"550px"} />
				</div>
				<div className="basis-full md:basis-1/2">
					<div className="title">
						I have bad{" "}
						<span className="hover:text-rose-500">news</span> for you
					</div>
					<div className="desc mt-4 mb-4 ms-2 me-2 md:ms-0 me-0">
						The page you are looking for might be removed or is
						temporarily unavailable
					</div>
					<div className="grid place-content-center md:place-content-start mb-4">
						<button
							onClick={handleBackToHome}
							className="px-[43px] py-[24px] uppercase font-bold text-white bg-gray-900 mt-4 mb-4 hover:bg-slate-900 hover:rounded-lg"
						>
							Back To Homepage
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default NotFound;
