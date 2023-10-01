import './globals.css'
import Context from '@/components/Context'


export const metadata = {
  title: 'Car Hub',
  description: 'Powered by NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='overflow-x-hidden'>
      <body className='w-screen min-h-screen p-0 m-0 overflow-x-hidden'>
        <Context>
          {children}
        </Context>
        </body>
    </html>
  )
}
