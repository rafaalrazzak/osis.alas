import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { Button, Container, Link } from "@components";

function Navbar({ items, logo, className, rightButton, rightButtonHref }) {
	const [collapse, setCollpase] = useState(false);
	useEffect(() => {
		function responsiveNavbar() {
			const vw = window.outerWidth;
			const threshold = 1024;

			if (vw > threshold) setCollpase(true);
		}

		responsiveNavbar();

		window.addEventListener("resize", responsiveNavbar);
	}, []);

	return (
		<nav
			className={clsx(
				"sticky top-0 left-0 z-50 w-full bg-gradient-to-tr from-teal-500 to-sky-500 py-2",
				className
			)}
		>
			<Container className="w-full">
				<div className={"flex w-full items-center justify-between"}>
					<div className={"w-[45px] md:w-[31%]"}>
						<Link className={"text-xl font-bold"} href="/">
							{logo}
						</Link>
					</div>
					<div
						className={clsx(
							"md:bg-bg-gradient fixed top-0 flex h-full w-full flex-col bg-gradient-to-br from-teal-500/50 to-sky-500/50 px-10 py-16 shadow-md backdrop-blur-lg transition-all md:flex md:w-64 lg:relative lg:w-10/12 lg:flex-row lg:items-center lg:from-transparent lg:to-transparent lg:px-0 lg:py-0 lg:shadow-none",
							collapse ? "right-0" : "right-[-100%]"
						)}
					>
						<div className={"flex w-full flex-1 lg:w-8/12 lg:justify-center"}>
							<ul
								className={
									"flex w-full flex-col gap-2 lg:my-0 lg:flex-row lg:items-center lg:justify-center"
								}
							>
								{items.map((item, i) => (
									<li key={i}>
										<Link
											href={item?.href}
											className={`flex text-white lg:mx-4 ${item?.active
													? "font-bold underline"
													: "text-opacity-75 hover:text-opacity-100"
												} transition-all`}
										>
											{item?.text}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div
							className={
								"flex flex-col text-center lg:mt-0 lg:flex-row lg:items-center lg:justify-end"
							}
						>
							<Button
								href={rightButtonHref}
								size="small"
								className={"mt-4 justify-center lg:mt-0"}
								{...rightButton}
							/>
						</div>
					</div>

					{/* mobile toggler */}
					<button
						aria-label="Hamburger Button"
						onClick={() => setCollpase(!collapse)}
						className={"z-30 ml-auto lg:hidden"}
					>
						{collapse ? (
							<MdClose className="text-white" size={20} />
						) : (
							<MdMenu className="text-white" size={20} />
						)}
					</button>
				</div>
			</Container>
		</nav>
	);
}

Navbar.defaultProps = {
	logo: "OSIS",
	items: [],
	rightButtonChildren: "Sign In",
	rightButtonHref: "/auth/login",
	rightButtonColor: "blue",
	className: "",
	rightButton: {},
};

Navbar.propTypes = {
	scheme: PropTypes.oneOf(["light", "dark"]),
	items: PropTypes.array,
	rightButtonChildren: PropTypes.string,
	rightButtonHref: PropTypes.string,
	rightButtonColor: PropTypes.string,
	className: PropTypes.string,
	rightButton: PropTypes.any,
	logo: PropTypes.node,
};

export default Navbar;
