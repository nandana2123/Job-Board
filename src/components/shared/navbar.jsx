import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
const Navbar = () => {
    const user = false;
    return (
        <div className='bg-white'>
            <div className="flex items-center justify-between mx-auto max-w-8xl h-16 px-4">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold">Job<span className='text-[#F83002]'>Dude</span></h1>
                </div>

                <div className="flex items-center gap-5">
                    <ul className="flex font-medium items-center gap-5">
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Browse</li>
                    </ul>
                    {
                        !user ? (
                            <div className="flex items-center gap-2">
                                <Link to="/login">
                                    <Button variant="outline" className="rounded-xl">Login</Button>
                                </Link>
                                <Link to="/signup">
                                    <Button variant="secondary" className="bg-[#6A38C2] text-white hover:bg-[#5b30a6] rounded-xl">
                                        Signup
                                    </Button>
                                </Link>
                            </div>
                        ) : (<Popover>
                            <PopoverTrigger>
                                <Avatar className="w-10 h-10 cursor-pointer">
                                    <AvatarImage
                                        src="https://github.com/shadcn.png"
                                        alt="@shadcn"
                                        className="w-10 h-10 object-cover rounded-full"
                                    />
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="w-72 p-2 bg-white border border-gray-300 shadow-lg rounded-xl ">
                                <div className="flex flex-row items-center gap-3">
                                    <Avatar className="w-13 h-13">
                                        <AvatarImage
                                            src="https://github.com/shadcn.png"
                                            alt="@shadcn"
                                            className="w-14 h-14 object-cover rounded-full"
                                        />
                                    </Avatar>
                                    <div className="text-center">
                                        <h4 className="font-medium">Nandana J Sreenivas</h4>
                                        <p className="text-sm text-gray-600">
                                            Lorem ipsum dolor sit amet.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col text-gray-400">
                                    <div className="flex w-fit items-center cursor-pointer">
                                        <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
                                        <Button variant="link">View Profile</Button>
                                    </div>
                                    <div className="flex w-fit items-center cursor-pointer">
                                        <FontAwesomeIcon icon={faSignOutAlt} className="w-5 h-5" />
                                        <Button variant="link">Logout</Button>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Navbar;
