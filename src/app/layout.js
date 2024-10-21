import "./globals.css";

export const metadata = {
  title: "Ergomania Keyboard Customizer",
  description: "Customize your keyboard and visualize the results!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased select-none`}
      >
        {children}
      </body>
    </html>
  );
}
