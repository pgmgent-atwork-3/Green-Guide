import '../scss/main.scss';

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'About', href: '#', current: true },
  { name: 'Download', href: '#', current: false },
  { name: 'Business', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function Dashboard() {
    return (
        <div className="Dashboard">
        <>
        <div className="min-h-full">
            <Disclosure as="nav" className="bg-gray-100">
            {({ open }) => (
                <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                        <img
                            className="h-14 w-14"
                            src="./images/logo.svg"
                            alt="Green Guide Logo"
                        />
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
                                    : 'text-secondary-50 hover:bg-gray-200 hover:text-secondary-100',
                                'px-3 py-2 rounded-md text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </a>
                            ))}
                        </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                            <div>
                            <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="sr-only">Open user menu</span>
                                <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                            </Menu.Button>
                            </div>
                            <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                            >
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
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-secondary-100 hover:bg-secondary-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
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
                            : 'text-secondary-50 hover:bg-gray-700 hover:text-white',
                            'block px-3 py-2 rounded-md text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        >
                        {item.name}
                        </Disclosure.Button>
                    ))}
                    </div>
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
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                        >
                            {item.name}
                        </Disclosure.Button>
                        ))}
                    </div>
                    </div>
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>

            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                {/* Replace with your content */}

                <div class="p-2 grid gap-2 grid-cols-2">
                    <div className="p-6">
                        <h1 className="pb-8 text-4xl font-bold tracking-tight text-primary-100 primary-font">About Green Guide</h1>
                        <p>Green Guide is your green guide through Ghent. The only, real way to finally discover all those sustainable and environmentally conscious addresses in Ghent. Together we can further develop our city into a truly green environment! This project is also a beautiful reflection of the unique cooperation between all higher education institutions in Ghent, a truly unique project that has brought together many hemispheres.</p>
                    </div>
                    <div>
                    <img
                            className="bg-cover h-148 w-164"
                            src="./images/mockup-1.png"
                            alt="Green Guide App"
                        />
                    </div>

                </div>



                {/* /End replace */}
            </div>
            </main>
        </div>
        </>
        </div>
    );
}

export default Dashboard;

{/* <h1 class="text-3xl font-bold ">
Hello world!
</h1>      
<nav>
<div>
  <a href="./index.html">
     <img src="../static/images/logo-gg-white.svg" alt="logo-white">
  </a>
  <ul class="nav-list">
    <li class="nav-link"><a href="#about">about</a></li>
    <li class="nav-link"><a href="#download">download</a></li>
    <li class="nav-link"><a href="#business">business</a></li>
    <li class="nav-link"><a href="#contact">contact</a></li>
  </ul>
</div>
<div>
  <a href="./dashboard.html" class="btn btn-primary">Log in</a>
  <a href="./dashboard.html" class="btn btn-secondary">Sign up</a>
</div>
</nav> */}