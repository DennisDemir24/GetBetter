import type { Metadata } from 'next'
import '../globals.css'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

export const metadata: Metadata = {
  title: 'GetBetter',
  description: 'Create daily habits to get better every day.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex h-screen flex-col'>
        <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  )
}
