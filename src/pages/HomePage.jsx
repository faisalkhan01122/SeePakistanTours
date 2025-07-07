
import { Suspense, lazy } from "react"
import { motion } from "framer-motion"
import HeroSection from "../components/HeroSection"
import FooterBar from "../components/FooterBar"
import HunzaToursSection from "../section/HunzaToursSection"
import HunzaInfoSection from "../section/HunzaInfoSection"



const SectionLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="flex items-center gap-4">
      <div className="relative">
        <div className="w-8 h-8 border-4 border-emerald-200 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-8 h-8 border-4 border-emerald-600 rounded-full border-t-transparent animate-spin"></div>
      </div>
      <span className="text-gray-600 font-medium">Loading Akhuwat Network content...</span>
    </div>
  </div>
)

const LazySection = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <Suspense fallback={<SectionLoader />}>{children}</Suspense>
  </motion.div>
)

const HomePage = () => {
  return (
    <div className="overflow-hidden px-2">
      {/* Hero Section - Load immediately */}
      <HeroSection />
      <FooterBar />
      <HunzaToursSection/>
      <HunzaInfoSection/>

    </div>
  )
}

export default HomePage
