// "use server"

// import axios from 'axios';
// import * as cheerio from 'cheerio';
// import { extractCurrency, extractDescription, extractPrice } from '../utils';

// export async function scrapeAmazonProduct(url: string) {
//   if(!url) return;

//   // BrightData proxy configuration
//   const username = String(process.env.BRIGHT_DATA_USERNAME);
//   const password = String(process.env.BRIGHT_DATA_PASSWORD);
//   const port = 22225;
//   const session_id = (1000000 * Math.random()) | 0;

//   const options = {
//     auth: {
//       username: `${username}-session-${session_id}`,
//       password,
//     },
//     host: 'brd.superproxy.io',
//     port,
//     rejectUnauthorized: false,
//   }

//   try {
//     // Fetch the product page
//     const response = await axios.get(url, options);
//     const $ = cheerio.load(response.data);

//     // Extract the product title
//     const title = $('#productTitle').text().trim();
//     const currentPrice = extractPrice(
//       $('.priceToPay span.a-price-whole'),
//       $('.a.size.base.a-color-price'),
//       $('.a-button-selected .a-color-base'),
//     );

//     const originalPrice = extractPrice(
//       $('#priceblock_ourprice'),
//       $('.a-price.a-text-price span.a-offscreen'),
//       $('#listPrice'),
//       $('#priceblock_dealprice'),
//       $('.a-size-base.a-color-price')
//     );

//     const outOfStock = $('#availability span').text().trim().toLowerCase() === 'currently unavailable';

//     const images = 
//       $('#imgBlkFront').attr('data-a-dynamic-image') || 
//       $('#landingImage').attr('data-a-dynamic-image') ||
//       '{}'

//     const imageUrls = Object.keys(JSON.parse(images));

//     const currency = extractCurrency($('.a-price-symbol'))
//     const discountRate = $('.savingsPercentage').text().replace(/[-%]/g, "");

//     const description = extractDescription($)

    

//     // Construct data object with scraped information
//     const data = {
//       url,
//       currency: currency || '$',
//       image: imageUrls[0],
//       title,
//       currentPrice: Number(currentPrice) || Number(originalPrice),
//       originalPrice: Number(originalPrice) || Number(currentPrice),
//       priceHistory: [],
//       discountRate: Number(discountRate),
//       category: 'Amazon',
//       reviewsCount:100,
//       stars: 4.5,
//       isOutOfStock: outOfStock,
//       description,
//       lowestPrice: Number(currentPrice) || Number(originalPrice),
//       highestPrice: Number(originalPrice) || Number(currentPrice),
//       averagePrice: Number(currentPrice) || Number(originalPrice),
//     }

//     return data;
//   } catch (error: any) {
//     console.log(error);
//   }
// }


"use server"

import axios from 'axios';
import * as cheerio from 'cheerio';
import { extractCurrency, extractDescription, extractPrice } from '../utils';

export async function scrapeAmazonProduct(url: string) {
  if (!url) return;

  // BrightData proxy configuration
  const username = String(process.env.BRIGHT_DATA_USERNAME);
  const password = String(process.env.BRIGHT_DATA_PASSWORD);
  const port = 22225;
  const session_id = (1000000 * Math.random()) | 0;

  const options = {
    auth: {
      username: `${username}-session-${session_id}`,
      password,
    },
    host: 'brd.superproxy.io',
    port,
    rejectUnauthorized: false,
  }

  try {
    // Fetch the product page
    const response = await axios.get(url, options);
    const $ = cheerio.load(response.data);

    // Extract the product title
    const title = $('#productTitle').text().trim();

    // Extract current and original prices
    const currentPrice = extractPrice(
      $('.priceToPay span.a-price-whole'),
      $('.a-size-base.a-color-price'),
      $('.a-button-selected .a-color-base'),
    );

    const originalPrice = extractPrice(
      $('#priceblock_ourprice'),
      $('.a-price.a-text-price span.a-offscreen'),
      $('#listPrice'),
      $('#priceblock_dealprice'),
      $('.a-size-base.a-color-price')
    );

    // Check if the product is out of stock
    const outOfStock = $('#availability span').text().trim().toLowerCase() === 'currently unavailable';

    // Extract image URLs
    const images = 
      $('#imgBlkFront').attr('data-a-dynamic-image') || 
      $('#landingImage').attr('data-a-dynamic-image') ||
      '{}'

    const imageUrls = Object.keys(JSON.parse(images));

    // Extract currency symbol
    const currency = extractCurrency($('.a-price-symbol'));

    // Extract discount rate
    const discountRate = $('.savingsPercentage').text().replace(/[-%]/g, "");

    // Extract description
    const description = extractDescription($);

    // Extract category
    const category = $('#wayfinding-breadcrumbs_feature_div ul.a-unordered-list a.a-link-normal').text().trim() || 'Unknown';

    // Extract rating
    const rating = $('span.a-icon-alt').first().text().split(' ')[0] || '0';

    // Extract reviews count
    const reviewsCount = $('span#acrCustomerReviewText').text().split(' ')[0].replace(',', '') || '0';

    // Construct data object with scraped information
    const data = {
      url,
      currency: currency || '$',
      image: imageUrls[0],
      title,
      currentPrice: Number(currentPrice) || Number(originalPrice),
      originalPrice: Number(originalPrice) || Number(currentPrice),
      priceHistory: [],
      discountRate: Number(discountRate),
      category,
      reviewsCount: Number(reviewsCount),
      stars: Number(rating),
      isOutOfStock: outOfStock,
      description,
      lowestPrice: Number(currentPrice) || Number(originalPrice),
      highestPrice: Number(originalPrice) || Number(currentPrice),
      averagePrice: Number(currentPrice) || Number(originalPrice),
    }

    return data;
  } catch (error: any) {
    console.log(error);
  }
}
