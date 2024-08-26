"use client";
import { FC, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar: FC<NavbarPropsTypes> = () => {

    const [mobileMenu, setMobileMenu] = useState<boolean>(false);

    const handleToggleMobileMenu = (): void => {
        setMobileMenu(!mobileMenu);
    };

    const navLinks: string[] = ["Experience", "Projects", "Contact", "Extras"];

    return (
        <nav>
            <div className="hidden md:flex md:justify-between md:p-4 md:items-center">
                <div className="text-2xl font-medium">Ashar</div>
                <div>
                    <ul className="md:flex md:items-center md:justify-center md:cursor-pointer md:text-xl">
                        {
                            navLinks?.map((link) => {
                                return (
                                    <li key={link} className="mr-4">{link}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="md:hidden">
                <div className="flex justify-between text-2xl">
                    <div>Ashar</div>
                    <div>
                        {mobileMenu ? (
                            <IoMdClose className="text-2xl cursor-pointer transition-colors duration-200 hover:text-[#005B41] hover:dark:text-violet-500" onClick={handleToggleMobileMenu} />
                        ) : (
                            <RxHamburgerMenu className="text-2xl cursor-pointer transition-colors duration-200 hover:text-[#005B41] hover:dark:text-violet-500" onClick={handleToggleMobileMenu} />
                        )}
                    </div>
                </div>
                {
                    mobileMenu && (
                        <ul className="mt-3 text-xl">
                            {
                                navLinks?.map((link) => {
                                    return (
                                        <li key={link} className="mb-4">{link}</li>
                                    )
                                })
                            }
                        </ul>
                    )
                }
            </div>
        </nav>
    );
};

export default Navbar;