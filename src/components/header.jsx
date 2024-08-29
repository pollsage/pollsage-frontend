import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import links from '../utils/nav_link';
import { isAuthenticated } from '../helpers/localstorage';

export default function Header({ isAuth, auth }) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        setUser(isAuthenticated())
    }, [])
    const [mobileMenuHidden, setMobileMenuHidden] = useState(false)
    const url = window.location.pathname
    console.log(user);
    const routes = [
        {
            label: "Home",
            href: '/',
            activeClassName: url === '/' ? 'text-gray-500 font-bold' : 'text-gray-400 hover:text-gray-500'
        },
        {
            label: "Contact",
            href: '/contact-us',
            activeClassName: url === '/contact-us' ? 'text-gray-500 font-bold' : 'text-gray-400 hover:text-gray-500'
        },
        {
            label: "Privacy",
            href: '/privacy',
            activeClassName: url === '/privacy' ? 'text-gray-500 font-bold' : 'text-gray-400 hover:text-gray-500'
        }, {
            label: "Terms",
            href: '/terms',
            activeClassName: url === '/terms' ? 'text-gray-500 font-bold' : 'text-gray-400 hover:text-gray-500'
        },
        {
            label: "Contributors",
            href: '/contributors',
            activeClassName: url === '/contributors' ? 'text-gray-500 font-bold' : 'text-gray-400 hover:text-gray-500'
        },
    ]
    return (
        <div className='bg-gray-50 sticky top-0 z-40 border-b border-slate-600'>
            <nav className='relative p-4 flex justify-between items-center max-w-7xl mx-auto'>
                <Link className='text-3xl text-black font-bold leading-none ml-5' to={'/'}>
                    PollSage
                </Link>
                <div className='lg:hidden' onClick={() => setMobileMenuHidden(!mobileMenuHidden)}>
                    <button className='navbar-burger flex items-center text-black p-3'>
                        <svg
                            className="block h-4 w-4 fill-current"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
                <ul className=' lg:flex absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-1/2 lg:items-center lg:w-auto lg:space-x-6 gap-6'>
                    {routes.map((route, index) => (
                        <li key={index}>
                            <Link to={route.href} className={route.activeClassName}>
                                {route.label}
                            </Link>
                        </li>
                    ))}

                </ul>
                {!user && (
                    <div className="ml-4">
                        <Link
                            className="lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-200 hover:bg-gray-300 text-sm text-gray-900 font-bold  transition duration-200"
                            to={links.login}
                        >
                            Sign In
                        </Link>
                        <Link
                            className="lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-400 text-sm text-white font-bold transition duration-200"
                            to={links.register}
                        >
                            Sign up
                        </Link>
                    </div>
                )}
                {user && user.role && (
                    <>
                        <Link
                            className="lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-blue-500 hover:bg-blue-400 text-sm text-white font-semibold rounded-sm"
                            to={`/${user.role}/dashboard`}
                        >
                            Dashboard
                        </Link>
                    </>
                )}
            </nav>
            {mobileMenuHidden && (
                <div className="navbar-menu relative z-50">
                    <div className="navbar-backdrop fixed inset-0 bg-slate-800 opacity-25"></div>
                    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-slate-900 border-r overflow-y-auto">
                        <div className="flex items-center mb-8">
                            <Link className="mr-auto text-3xl font-bold leading-none" to="#">
                                <img
                                    className="h-10"
                                    src="./logo.png"
                                    alt="Logo"
                                    width="auto"
                                    height="auto"
                                />
                            </Link>
                            <button
                                className="navbar-close"
                                onClick={() => setMobileMenuHidden(!mobileMenuHidden)}
                            >
                                <svg
                                    className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <ul>
                                {routes.map((route, index) => (
                                    <li className="mb-1" key={index}>
                                        <Link
                                            className="block p-4 text-sm font-semibold text-gray-400 hover:bg-gray-200 hover:text-indigo-600 rounded"
                                            to={route.href}
                                        >
                                            {route.label}
                                        </Link>
                                    </li>
                                ))}

                            </ul>
                        </div>
                        <div className="mt-auto">
                            <div className="pt-6">
                                <Link
                                    className="block px-4 py-3 mb-3 leading-loose text-xs text-black text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl"
                                    to={links.login}
                                >
                                    Sign in
                                </Link>
                                <Link
                                    className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                                    to={links.register}
                                >
                                    Sign Up
                                </Link>
                            </div>
                            <p className="my-4 text-xs text-center text-gray-400">
                                <span>Copyright © 2021</span>
                            </p>
                        </div>
                    </nav>
                </div>
            )}
        </div>
    );
}
