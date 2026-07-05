import { Suspense, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import useLenis from './hooks/useLenis'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import ThreeBackground from './components/ThreeBackground'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function App() {
  const [loading, setLoading] = useState(true)
  useLenis()

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-noise"
        >
          <CustomCursor />
          <Navbar />

          <main className="relative">
            <Suspense fallback={null}>
              <ThreeBackground />
            </Suspense>

            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certificates />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  )
}
