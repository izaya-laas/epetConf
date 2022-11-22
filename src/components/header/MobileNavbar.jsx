import { useState } from "preact/hooks";
import { IoMdClose } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";

import { NAVLINKS } from "../../app";

const MobileNavbar = () => {
	const [isOpenHamburger, setIsOpenHamburger] = useState(false);

	const setOpenHamburger = () => {
		setIsOpenHamburger(!isOpenHamburger);
	};

	return (
		<nav
			className={`block md:hidden w-full py-2 px-2  ${
				isOpenHamburger ? "backdrop-blur-md border-b-2 border-gray-color" : ""
			}`}>
			<picture className="flex justify-end">
				{!isOpenHamburger ? (
					<RiMenu2Fill
						className="cursor-pointer text-gray-300 hover:text-fourth-color transition-colors duration-300"
						size="40px"
						onClick={() => {
							setOpenHamburger();
						}}
					/>
				) : (
					<IoMdClose
						className="cursor-pointer text-gray-300 hover:text-fourth-color transition-colors duration-300"
						size="40px"
						onClick={() => {
							setOpenHamburger();
						}}
					/>
				)}
			</picture>

			<nav
				className={`w-full h-full flex flex-col py-1 items-center ${
					isOpenHamburger ? "" : "hidden"
				}`}>
				{NAVLINKS.map((link) => (
					<a
						onClick={setOpenHamburger}
						href={link.to}
						className={`w-full text-white hover:font-bold hover:text-fourth-color transition-all duration-300 cursor-pointer py-3 px-2 text-center text-base font-semibold`}>
						{link.text}
					</a>
				))}
			</nav>
		</nav>
	);
};

export default MobileNavbar;

// sectionClass: `fixed flex flex-col items-start gap-4 top-12 tablet:top-14 right-0 bg-black/75 w-full font-bold text-xl text-white pt-4 px-8 transition-transform duration-700 h-[calc(100%-3rem)] items-center tablet:w-2/5 ${
//   isOpenHamburger ? "translate-x-full" : ""
// }`,
