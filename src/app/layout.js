import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Content creator",
  description: "Website that connects all the professor's project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
