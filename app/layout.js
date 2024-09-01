import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Next.js Tutorial',
  description: 'Build awesome stuf with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='bg-base-200'>
      <body>
        <Navbar />
        <main className='px-8 py-20 max-w-6xl mx-auto'>{children}</main>
      </body>
    </html>
  )
}
