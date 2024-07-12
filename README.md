# Deal Digger

Deal Digger is an advanced e-commerce product scraping site designed to assist users in making informed purchasing decisions. Developed using Next.js and Bright Data's webunlocker, it notifies users when a product drops in price and helps competitors by alerting them when the product is out of stock, all managed through cron jobs.

## Getting Started

If you're just getting started or face any bugs, join our active Discord community with over 27k+ members. It's a place where people help each other out.

## ⚙️ Tech Stack

- **Next.js**: Framework for building server-side rendered React applications.
- **Bright Data**: Web scraping and unlocking service.
- **Cheerio**: Fast, flexible, and lean implementation of core jQuery designed specifically for the server.
- **Nodemailer**: Module for Node.js applications to send emails.
- **MongoDB**: NoSQL database for storing product data.
- **Headless UI**: Unstyled, fully accessible UI components for Tailwind CSS.
- **Tailwind CSS**: Utility-first CSS framework for rapidly building custom user interfaces.

## 🔋 Features

### 👉 Header with Carousel
A visually appealing header with a carousel showcasing key features and benefits of Deal Digger.

### 👉 Product Scraping
A search bar allowing users to input Amazon product links for scraping. The tool fetches product data for user analysis.

### 👉 Scraped Projects
Displays the details of products scraped so far, offering insights into tracked items and their status.

### 👉 Scraped Product Details
Showcases the product image, title, pricing, details, and other relevant information scraped from the original website.

### 👉 Track Option
A modal for users to provide email addresses and opt-in for tracking specific products.

### 👉 Email Notifications
Sends product alert emails for various scenarios, such as back-in-stock alerts or lowest price notifications.

### 👉 Automated Cron Jobs
Utilizes cron jobs to automate periodic scraping, ensuring data is always up-to-date.


## Installation and Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/deal-digger.git
    cd deal-digger
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add your environment variables. Example:
    ```env
    NEXT_PUBLIC_API_KEY=your_api_key
    MONGODB_URI=your_mongodb_uri
    EMAIL_HOST=smtp.your-email-provider.com
    EMAIL_PORT=587
    EMAIL_USER=your_email@example.com
    EMAIL_PASS=your_email_password
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

5. Build the application for production:
    ```bash
    npm run build
    npm start
    ```
