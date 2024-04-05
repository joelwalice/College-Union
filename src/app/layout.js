import "./globals.css";


export const metadata = {
  title: "College Union",
  description: "Website that connects all the professor's project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
