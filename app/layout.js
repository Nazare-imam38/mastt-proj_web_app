import './globals.css'

export const metadata = {
  title: 'Project A - Skyline Tower Development',
  description: 'Project dashboard for Skyline Tower Development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

