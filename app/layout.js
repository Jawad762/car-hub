import './globals.css'
import Context from '@/components/Context'


export const metadata = {
  title: 'Car Hub',
  description: 'Powered by NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='m-0 p-0 min-h-screen w-screen overflow-x-hidden'>
        <Context>
          {children}
        </Context>
        </body>
    </html>
  )
}
