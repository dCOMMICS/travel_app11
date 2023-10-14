import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'wEBSITE -tRAVEL',
  description: 'tRAVEL AND cAMPING wEBSITE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        
        {children}
        </body>
    </html>
  )
}
