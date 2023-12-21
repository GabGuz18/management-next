import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Management app',
  description: 'Management and sales application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
          <div className='flex'>
            <Navigation />
            <div className='w-full text-slate-900'>
              { children }
            </div>
          </div>
        </div>
      </body>
    </html>  
  )
}