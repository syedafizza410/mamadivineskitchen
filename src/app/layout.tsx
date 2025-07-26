import './globals.css'
import Navbar from './components/navbar'
import AboutUs from './components/about'
import MenuSection from './components/menu'
import ContactPage from './components/contact'
import FooterSection from './components/footer'

export const metadata = {
  title: 'Mamas Kitchen',
  description: 'A food lover’s paradise',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {/* <AboutUs /> */}
        {children}
        <AboutUs />
        <MenuSection />
        <ContactPage />
        <FooterSection />
      </body>
    </html>
  )
}