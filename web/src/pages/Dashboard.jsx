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
    { name: 'Dashboard', href: '/dashboard', current: true },
    { name: 'Reward system', href: '#', current: false },
    { name: 'Green Guide labels', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
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
                        <button
                            type="button"
                            className="rounded-full p-1 text-gray-400 hover:text-gray focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

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

            {/* <header className="bg-white shadow">

            </header> */}

            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                {/* Replace with your content */}
                <h1 className="pb-6 text-4xl font-bold tracking-tight text-primary-100 primary-font">Dashboard</h1>
                <hr />
            <div>
                <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="mt-4 px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Business profile</h3>
                    <p className="mt-1 text-sm text-gray-600">
                        This information will be displayed publicly so be careful what you share.
                    </p>
                    </div>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                    <form action="#" method="POST">
                    <div className="shadow sm:overflow-hidden sm:rounded-md">
                        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">


                            <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-3 sm:col-span-2">
                                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                    Business name
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                    <input
                                    type="text"
                                    name="company-website"
                                    id="company-website"
                                    className="p-3 block w-full flex-1 rounded-none rounded-r-md bg-gray-50 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Example"
                                    />
                                </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-3 sm:col-span-2">
                                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                    Date of start-up
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                    <input
                                    type="date"
                                    name="company-website"
                                    id="company-website"
                                    className="p-3 block w-full flex-1 rounded-none rounded-r-md bg-gray-50 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                                </div>
                            </div>

                            {/* <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-3 sm:col-span-2">
                                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                    Website
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                    <span className="inline-flex items-center rounded-l-md bg-gray-100 px-3 text-sm text-gray-500">
                                    http://
                                    </span>
                                    <input
                                    type="text"
                                    name="company-website"
                                    id="company-website"
                                    className="p-3 block w-full flex-1 rounded-none rounded-r-md bg-gray-50 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="www.example.com"
                                    />
                                </div>
                                </div>
                            </div> */}

                            <div>
                                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                About
                                </label>
                                <div className="mt-1">
                                <textarea
                                    id="about"
                                    name="about"
                                    rows={3}
                                    className="p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="We are a team of highly skilled professionals who ..."
                                    defaultValue={''}
                                />
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                Brief description for your business. URLs are hyperlinked.
                                </p>
                            </div>

                            <div>
                                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                Opening hours
                                </label>
                                <div className="mt-1">
                                <textarea
                                    id="about"
                                    name="about"
                                    rows={3}
                                    className="p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Tue - Thurs: 10 am - 7 pm
                                    Fri - Sat: 10 am - 6 pm
                                    Mon, Sun & public holidays: closed"
                                    defaultValue={''}
                                />
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                Brief description for your business. URLs are hyperlinked.
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                                <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                <div className="space-y-1 text-center">
                                    <svg
                                    className="mx-auto h-12 w-12 text-gray-400"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    aria-hidden="true"
                                    >
                                    <path
                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                    >
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </div>
                                </div>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                Country
                            </label>
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="mt-1 block w-full rounded-md bg-gray-50 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                                <option>Belgium</option>
                                <option>Luxemburg</option>
                                <option>The Netherlands</option>
                            </select>
                            </div>

                            <div className="col-span-6">
                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                Street address
                            </label>
                            <input
                                type="text"
                                name="street-address"
                                id="street-address"
                                autoComplete="street-address"
                                className="p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            </div>

                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                City
                            </label>
                            <input
                                type="text"
                                name="city"
                                id="city"
                                autoComplete="address-level2"
                                className="p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                State / Province
                            </label>
                            <input
                                type="text"
                                name="region"
                                id="region"
                                autoComplete="address-level1"
                                className="p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                ZIP / Postal code
                            </label>
                            <input
                                type="text"
                                name="postal-code"
                                id="postal-code"
                                autoComplete="postal-code"
                                className="p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            </div>

                        </div>
                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Save
                        </button>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                <div className="border-t border-gray-200" />
                </div>
            </div>

            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Contact Information</h3>
                    <p className="mt-1 text-sm text-gray-600">This information is visible for clients.</p>
                    </div>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                    <form action="#" method="POST">
                    <div className="overflow-hidden shadow sm:rounded-md">
                        <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                First name
                            </label>
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                Last name
                            </label>
                            <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                type="text"
                                name="email-address"
                                id="email-address"
                                autoComplete="email"
                                className="p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                                <div className="col-span-3 sm:col-span-2">
                                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                    Website
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                    <span className="inline-flex items-center rounded-l-md bg-gray-100 px-3 text-sm text-gray-500">
                                    http://
                                    </span>
                                    <input
                                    type="text"
                                    name="company-website"
                                    id="company-website"
                                    className="p-3 block w-full flex-1 rounded-none rounded-r-md bg-gray-50 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="www.example.com"
                                    />
                                </div>
                                </div>
                            </div>

                            


                        </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Save
                        </button>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                <div className="border-t border-gray-200" />
                </div>
            </div>

            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
                    <p className="mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and how.</p>
                    </div>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                    <form action="#" method="POST">
                    <div className="overflow-hidden shadow sm:rounded-md">
                        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                        <fieldset>
                            <legend className="sr-only">By Email</legend>
                            <div className="text-base font-medium text-gray-900" aria-hidden="true">
                            By Email
                            </div>
                            <div className="mt-4 space-y-4">
                            <div className="flex items-start">
                                <div className="flex h-5 items-center">
                                <input
                                    id="reviews"
                                    name="reviews"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                </div>
                                <div className="ml-3 text-sm">
                                <label htmlFor="reviews" className="font-medium text-gray-700">
                                    Reviews
                                </label>
                                <p className="text-gray-500">Get notified when someones posts a review on your business.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex h-5 items-center">
                                <input
                                    id="rewards"
                                    name="rewards"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                </div>
                                <div className="ml-3 text-sm">
                                <label htmlFor="rewards" className="font-medium text-gray-700">
                                    Rewards
                                </label>
                                <p className="text-gray-500">Get notified when a client claims a reward.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex h-5 items-center">
                                <input
                                    id="offers"
                                    name="offers"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                </div>
                                <div className="ml-3 text-sm">
                                <label htmlFor="offers" className="font-medium text-gray-700">
                                    Offers
                                </label>
                                <p className="text-gray-500">Get notified when their are offers available.</p>
                                </div>
                            </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend className="contents text-base font-medium text-gray-900">Push Notifications</legend>
                            <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                            <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                                <input
                                id="push-everything"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                Everything
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                id="push-email"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                Same as email
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                id="push-nothing"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                                No push notifications
                                </label>
                            </div>
                            </div>
                        </fieldset>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Save
                        </button>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>






                {/* <div class="bg-primary-100 h-10"></div>
                <div class="bg-primary-75 h-10"></div>
                <div class="bg-primary-50 h-10"></div>
                <div class="bg-primary-25 h-10"></div>
                <div class="bg-secondary-100 h-10"></div>
                <div class="bg-secondary-75 h-10"></div>
                <div class="bg-secondary-50 h-10"></div>
                <div class="bg-secondary-25 h-10"></div>
                <div class="bg-accent-100 h-10"></div>
                <div class="bg-accent-75 h-10"></div>
                <div class="bg-accent-50 h-10"></div>
                <div class="bg-accent-25 h-10"></div>
                <div class="bg-bg-100 h-10"></div>
                <div class="bg-bg-75 h-10"></div>
                <div class="bg-bg-50 h-10"></div>
                <div class="bg-bg-25 h-10"></div> */}
                {/* /End replace */}
            </div>
            </main>
        </div>
        </>
        </div>
    );
}

export default Dashboard;