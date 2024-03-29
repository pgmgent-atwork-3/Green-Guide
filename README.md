# Green Guide

## Introduction
Welcome to the **Green Guide**!
Green Guide is the best way to discover all sustainable and environmentally friendly addresses in Ghent. Together we can further develop our city into a truly green environment!

This project is also a nice reflection of the collaboration between different higher education institutions in Ghent, a unique project that has brought together many different brains.

In this README  we discuss all used dependencies and finished features, but also everything that is not quite polished or implemented. The nice to haves are listed and explained. 

## Installation
Move to the root of this project and install node_modules.
```bash
yarn install
```

## Usage
To start the **web** server write this line of code in the terminal:
```bash
yarn run start
```

To start the **mobile** server write this line of code in the terminal:
```bash
yarn run start
```

## Feature overview

### 1. Website 
This covers the online website that serves as a dashboard for companies to create and edit their company information, points system with rewards ... etc.

**1.1.	Dependencies**

***General***
•	react: v. 18.2.0
•	react-dom: v. 18.2.0
•	react-router-dom: v. 6.4.3
•	react-scripts: v. 5.0.1
•	web-vitals: v. 2.1.0
•	apollo/client: v. 3.7.2
•	headlessui/react: v. 1.7.4
•	heroicons/react: v. 2.0.13

***Translation***
•	i18next: v. 22.4.9
•	react-i18next: v. 12.1.4
•	react-intl: v. 6.2.5

***Database***
•	graphql: v. 16.6.0

***Authentication***
•	formik: v. 2.2.9
•	yup: v. 0.32.11
•	yup-password: v. 0.2.2

***Code Styling***
•	sass: v. 1.56.1
•	tailwindcss: v. 3.2.4
•	autoprefixer: v. 10.4.13
•	postcss: v. 8.4.19

***Deployment***
•	Render

***Testing***
•	testing-library/jest-dom: v. 5.14.1
•	testing-library/react: v. 13.0.0
•	testing-library/user-event: v. 13.2.1

***Git***
•	GitHub is a code hosting platform for version control and collaboration, we used Git to regularly commit our progress.

___

**1.2.	Pages**

***1)	home page***
•	landing page with information about Green Guide (copywriting)
•	contact form + validation + error handling → vraag aan Tim
•	footer – all involved parties and sponsors are listed here

***2)	login page***
•	login form + validation + error handling

***3)	signup page***
•	signup form + validation + error handling
•	confirm password
•	labels needs textarea
•	commentary about GG
•	contact information
•	sectors & category

***4)	dashboard page***
•	business data (+ edit data)
•	contact data (+ edit data)

***5)	reward page***
•	point system data (+ edit data)
•	reward system data (+ edit data)
•	slider voor prijs (voor 1 point)

***6)	GG label page***
•	vendors current labels (confirmed by green office)
•	request form to add new labels

***7)	settings page***
•	settings (+ edit data)
•	notification settings (+ edit data)

***8)	notifications page = nice to have***
•	notifications from users

___

### 2. Application
This covers the application that will be used by customers to find vendors, collect points to earn rewards, etc.

**2.1.	Dependencies**

***General***
•	types/node: 18.11.9
•	types/react: 18.0.25
•	types/react-dom: 18.0.9
•	next: 13.0.5
•	react: 18.2.0
•	react-dom: 18.2.0
•	typescript: 4.9.

***Database***

***Authentication***
•	formik: 2.2.9

***Code Styling***
•	eslint: 8.28.0
•	eslint-config-next: 13.0.5
•	sass: 1.57

***Deployment***
•	Render

***Git***
•	GitHub is a code hosting platform for version control and collaboration, we used Git to regularly commit our progress.

***Key features***
•	leaflet: 1.9.3
•	react-leaflet: 4.2.0
•	react-leaflet-universal: 2.2.1
•	react-qr-code: 2.0.11
•	react-qr-reader: 3.0.0-beta-1
•	types/leaflet: 1.9.0

___

**2.2.	Pages**

***1)	landing page***
•	btn group to login and register page

***2)	login page***
•	login form
•	validation + error handling

***3)	register page***
•	signup form
•	validation + error handling
•	confirm password

***4)	start page***
•	Header
•	Navbar
•	Card
•	Carousel
•	Social Media links

***5)	score page***
•	Header
•	Navbar
•	Cards
•	Reward details

***6)	scan page***
•	Header
•	Navbar
•	Card
•	QR code

***7)	search page***
•	Header
•	Navbar
•	Filter
•	Search Bar
•	Map
•	Vendor addresses

***8)	profile page***
•	Header
•	Navbar
•	Profile Header
•	Settings Card

***9)	vendor detail page***

___

### 3. API

___
### 4.Nice-to-haves
•	CompanyTypes (bedrijven categoriseren op basis van hun aantal werknemers bijvoorbeeld, zodat we kunnen bepalen of kleine bedrijven bv. minder moeten betalen)
•	login w/ google
•	price and points colour feedback

___
## Support
Should you encounter any issues or questions, you can contact our team on johanna.debck@student.luca-arts.be :)


## Authors
This project was made with love and devotion by yours truly, <br> Emma Van der Haeghen, Brent Van Steertegem and Jef Leroux <3


## License
MIT License

Copyright (c) 2022 Emma Van der Haeghen, Brent Van Steertegem and Jef Leroux

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.