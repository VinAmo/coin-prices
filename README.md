# Coin Prices

## Overview

This project allows users to check the "ask" price of their preferred cryptocurrency (BTC, ETH, XRP) in AUD. It's built using Next.js 13, TypeScript, and Tailwind CSS. The project also includes Cypress for component and end-to-end testing.

## Features

- Price Check: Allows users to select a cryptocurrency type (BTC, ETH, XRP) and view its "ask" price in AUD.
- Responsive Design: The UI is fully responsive and optimized for mobile screens.
- Theme Selection: Users can choose from multiple themes including light, dark, rose, sky, and teal.

## Requirements

- Node.js (v20.5.1 or higher)
- Yarn (v1.22.17 or higher)
- Next.js (v13.4.19 or higher)

## Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/VinAmo/coin-prices.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd */coin-prices
   ```

3. **Install dependencies**

   ```bash
   yarn install
   ```

4. **Run the development server**

   ```bash
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

This project uses Cypress for component and end-to-end testing.

### Running Tests

1. **Open Cypress Test Runner**

   ```bash
   yarn run cypress
   ```

2. **Run the tests**

   Select E2E/Component Testing -> Chrome, and the test you want to run in the Cypress Test Runner.

## To-Do

- Font Usability: Current font looks cool but is not reader-friendly, should be replaced with a more suitable option.
- Error Handling: Utilize src/app/error.tsx to centralize and manage error handling across the application.
- Data Fetching: Establish data fetching patterns to ensure the application can scale efficiently.
- Component Structure: Refine the organization of components by distinguishing between general reusable components (e.g., Button) and page-specific components (e.g., PricePanel).
- UI Enhancements: Implement animations for changing price numbers to enhance user experience.

## Author

Kion (Qingyang Zheng)
