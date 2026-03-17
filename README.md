# TechPlug E-Commerce 🛒

A highly functional, premium-looking, and responsive e-commerce web application built specifically for the sales of smartphones, laptops, and tech accessories.

## 🚀 Features

- **Modern & Premium Design**: Built using Vanilla CSS with attention to layout, typography, and hover animations to create an 'Apple Ecosystem' aesthetic.
- **Dynamic Routing**: Multi-page application structure utilizing `react-router-dom` incorporating designated routes for Shops, Categories (Laptops, Phones, Accessories), and Deals.
- **State Management Contexts**:
  - `CartContext`: Full cart functionality supporting item addition, quantity modification, and item removal, with persistence in `localStorage`.
  - `AuthContext`: Mock authentication flow mimicking actual JWT-styled verification, maintaining session tokens.
- **WhatsApp Integration Checkout**: Clicking on the checkout completely formats all items placed in the cart into an itemized WhatsApp message seamlessly pre-directed to the vendor's line (+2348139047612), along with order totals and images.
- **Fully Responsive Layout**: Built strictly following mobile-first principles; adapting to fit tablets and smaller screen resolutions gracefully.

## 🛠 Tech Stack

- **Framework**: React 18 (Bootstrapped with Vite 5.0)
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, Grid)
- **Icons**: Lucide-React
- **Routing**: React Router DOM v6

## 🚦 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have Node.js installed on your machine.
- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your-username/techplug.git
   ```
2. Navigate into the directory
   ```sh
   cd techplug
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the development server
   ```sh
   npm run dev
   ```

## 📂 Project Structure

```
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable UI components (Navbar, Footer, ProductCards)
├── context/         # React context providers (Auth, Cart)
├── pages/           # Route-specific pages (Home, Shop, Cart, Login, etc.)
├── App.jsx          # Application Entry point & Router setup
├── main.jsx         # DOM rendering & provider nesting
└── index.css        # Global CSS variables, resets, and typography
```

## 📸 Screenshots
*(Add screenshots of your application here once uploaded to GitHub)*

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.
