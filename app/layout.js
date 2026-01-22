import './globals.css'

export const metadata = {
  title: 'Project A - Skyline Tower Development',
  description: 'Project dashboard for Skyline Tower Development',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

