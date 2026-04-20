# Texas Court Case Management System

A REST API for querying Texas Supreme Court cases and predicting case outcomes by judge and case type.

## Problem
Lawyers and litigants have no easy way to assess how likely a judge is to rule in their favor based on the judge's history and the type of case being heard.

## Solution
We built a relational database of real Texas Supreme Court cases scraped from the Texas Judicial Branch website, and implemented a **Predictive Legal Algorithm (PLAT)** that calculates the win probability for either party given a specific judge and case type.

## Tech Stack
- **Backend:** Node.js, Express
- **Database:** PostgreSQL hosted on AWS RDS
- **Data:** Scraped from the Texas Judicial Branch using webscraper.io, cleaned in Excel, imported via pgAdmin

## Database Schema
5 tables: `judges`, `court`, `sits`, `party`, `cases`

## API Endpoints
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/judges` | Get all judges |
| GET | `/judges/:id` | Get judge by ID |
| GET | `/judges/:id/sits` | Get court sittings for a judge |
| GET | `/judges/:id/sits/court` | Get court where a judge sits |

## Setup
1. Clone the repo
2. Run `npm install`
3. Copy `.env.example` to `.env` and fill in your database credentials
4. Run `node index.js`

## Team
Sean Stepanik, Mahad Arshad, Justin Burns — CSCI-3343 Databases, December 2023
