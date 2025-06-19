import "../globals.css";

export const metadata = {
  title: "Matthew Tsui - Skills",
  description: "The skills page of the portfolio website that includes a resume",
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
