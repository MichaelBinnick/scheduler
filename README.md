# Interview Scheduler

## Overview

Interview Scheduler is a fullstack, single-page web application that allows you to book and manage appointments from 12pm - 5pm on any weekday.

## Screenshots

### Mobile-first, Responsive Design

#### Desktop
!["Desktop"](https://github.com/MichaelBinnick/scheduler/blob/master/screenshots/Desktop.png?raw=true)
#### Mid-Tablet
!["Mid-Tablet"](https://github.com/MichaelBinnick/scheduler/blob/master/screenshots/Mid-Tablet.png?raw=true)
#### Phone
!["Phone"](https://github.com/MichaelBinnick/scheduler/blob/master/screenshots/Mobile.png?raw=true)
!["Phone-2"](https://github.com/MichaelBinnick/scheduler/blob/master/screenshots/Mobile-2.png?raw=true)

### Appointment Modes

#### Create/Edit
!["Create-Edit"](https://github.com/MichaelBinnick/scheduler/blob/master/screenshots/Add-Edit.png?raw=true)
#### Confirmation Box
!["Confirmation"](https://github.com/MichaelBinnick/scheduler/blob/master/screenshots/Confirmation.png?raw=true)
#### Async Indicators
!["Async"](https://github.com/MichaelBinnick/scheduler/blob/master/screenshots/Async-1.png?raw=true)
!["Async-2"](https://github.com/MichaelBinnick/scheduler/blob/master/screenshots/Async-2.png?raw=true)
#### Error Handling
!["Error-Handling"](https://github.com/MichaelBinnick/scheduler/blob/master/screenshots/Error-Handling.png?raw=true)

## Technologies

The appointments data persists to a database managed by a separate server application, using a RESTful API system.

This fullstack web application was built primarily with React.js, using a TDD approach utilizing the Jest and Cypress testing suites to implement unit, integration, and end-to-end testing. Components were built first in isolation using Storybook, and then tested before final implementation.

SASS was used to style the application.

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```