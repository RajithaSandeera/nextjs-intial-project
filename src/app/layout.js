'use client';


import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from 'react-redux';
import store from '../store/store';
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Blog App",
//   description: "RS",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Provider store={store}>
        {children}
        </Provider>
        </body>
    </html>
  );
}
