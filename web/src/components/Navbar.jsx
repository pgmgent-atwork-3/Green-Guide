import React, { useState } from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import TranslateButton from './TranslateButton'

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const userNavigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Settings', href: '/settings' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navType = (type) => {
    switch (type) {
        case 'dashboard':
            return [
                { name: 'Dashboard', href: '/dashboard', current: true },
                { name: 'Reward system', href: '/rewards', current: false },
                { name: 'Green Guide labels', href: '/labels', current: false },
                { name: 'Notifications', href: '/notifications', current: false },
            ]
            
        default:
            return [
                { name: 'About Green Guide', href: '#about', current: true },
                { name: 'Download the app', href: '#download', current: false },
                { name: 'For your business', href: '#business', current: false },
                { name: 'Contact us', href: '#contact', current: false },
            ];
    }
}

const Navbar = ({ type }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const navigation = navType(type);

return (
<Disclosure as="nav" className="nav bg-white">
{({ open }) => (
<>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <a href="/">
                        <img
                            className="h-14 w-14"
                            src="./images/logo.svg"
                            alt="Green Guide Logo"
                        />
                    </a>
                </div>
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                            item.current
                                ? 'bg-secondary-100 text-white'
                                : 'text-secondary-50 hover:bg-neutral-200 hover:text-secondary-100',
                            'px-3 py-2 rounded-md text-sm font-medium'
                            )} 
                            aria-current={item.current ? 'page' : undefined}>
                            {item.name}
                        </a>
                        ))}
                    </div>
                </div>
            </div>

            <TranslateButton/>

            {/* Profile dropdown */}
            <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                    { loggedIn ? 
                    <>
                    <Menu as="div" className="relative ml-3">
                        <div>
                            <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="sr-only">Open user menu</span>
                                <img className="h-12 w-12 rounded-full" src={user.imageUrl} alt="" />
                            </Menu.Button>
                        </div>
                        <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95">
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                    {({ active }) => (
                                    <a
                                        href={item.href}
                                        className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                    )}
                                </Menu.Item>
                                ))}
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    </> :   
                    <div>
                        <a href="/login" className="btn btn-accent mr-4" onClick={setLoggedIn}>Login</a> 
                        <button className="btn bg-gray-100" onClick={setLoggedIn}>Sign up</button>
                    </div>
                    }
                </div>
            </div>

            {/* Mobile menu button */}
            <div className="-mr-2 flex md:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-secondary-100 hover:bg-secondary-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                        <XMarkIcon className="block h-10 w-10" aria-hidden="true" />
                    ) : (
                        <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                    )}
                    </Disclosure.Button>
            </div>
        </div>
    </div>

    <Disclosure.Panel className="md:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navigation.map((item) => (
                <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                    item.current 
                    ? 'bg-secondary-100 text-white' 
                    : 'text-secondary-50 hover:bg-neutral-100',
                    'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
                >
                {item.name}
                </Disclosure.Button>
            ))}
        </div>
        { loggedIn ?
        
        <div className="border-t border-gray-700 pt-4 pb-3">
            <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                </div>
                <div className="ml-3">
                <div className="text-base font-medium leading-none font-bold text-secondary-100">{user.name}</div>
                <div className="text-sm font-medium leading-none text-secondary-50">{user.email}</div>
                </div>
                <button
                    type="button"
                    className="ml-auto flex-shrink-0 rounded-full  p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
             
            <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-neutral-100"
                >
                    {item.name}
                </Disclosure.Button>
                ))}
            </div>
             
        </div>:   
             <div className="px-4">
                 <a href="/login" className="btn btn-accent mr-4" onClick={setLoggedIn}>Login</a> 
                 <button className="btn bg-gray-100" onClick={setLoggedIn}>Sign up</button>
             </div>
             }
    </Disclosure.Panel>
    </>
    )}
</Disclosure>
    )
}

export default Navbar