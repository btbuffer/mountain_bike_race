# Mountain Bike Race Management

## Overview

This is a simple Node.js application built with Express and Mongoose to manage mountain bike data, including rides, races, and results. It provides API endpoints for generating specific reports per the problem statements.

## Features

- **Database Management**: This stores and manages riders, races, and race results in MongoDB.
- **API Endpoint Requirement**:
  - Top 3 fastest riders in each race.
  - Riders who did not finish a race.
  - Riders who did not participate in a given race.
  - Current weather conditions for the race location (using third party API).

## Setup

1. Clone the respository: `git clone https://github.com/btbuffer/mountain_bike_race.git`
2. Install dependencies: `npm install`
3. Copy `.env` (environment parameters) to `.env` and fill in your MongoDB URI and OpenWeatherMap API
4. Start the server: `npm run start-dev`
5. Run tests: `npm test`

## API Endpoints

- `GET /api/status`: Retrieve and check the supported data tables recorded in a database, along with the number of entries in each table (body: {name: string, tables: list})

### Rider

- `POST /api/rider/register`: Create and add a rider to a database (body: {firstname: string, lastname: string, country: string})
- `GET /api/rider/:raceId/top3riders`: Retrieve fastest riders that are top three in a race from the database (body: {fullname: string, finishTime: number})
- `GET /api/rider/:raceId/nonfinishers`: Retrieve from the database those riders that did not finish a race (body: {fullname: string})
- `GET /api/rider/:raceId/notparticipants`: Retrieve from the database those riders that did not participate a race (body: {fullname: string})

### Race

- `POST /api/race`: Create and add a race to a database (body: {name: string, location: string, distance: string, startTime: date})
- `GET /api/race/:raceId/weather`: Get current weather details for a race location(body: {location: string, temperature: number, conditions: string, humidity: number})

### Result

- `POST /api/result`: Create and add race result to a database (body: {ridername: string, racename: string, finishTime: number})

## Notes

- Finish time is in seconds; null indicates (Did Not Finish).
