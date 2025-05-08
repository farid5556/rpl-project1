import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "gueanime",
  description: "Web Anime terbaik se-planet bumi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-color-dark">
          <Navbar />
        {children}
      </body>
    </html>
  );
}
