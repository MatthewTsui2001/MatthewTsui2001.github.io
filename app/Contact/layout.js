import "../globals.css";

export const metadata = {
  title: "Matthew Tsui - Contact",
  description: "The contact page for the portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="favicon-32x32.png"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
