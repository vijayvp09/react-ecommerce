import Layout from "../../components/layout/Layout"
import HeroSection from "../../components/hero/HeroSection"
import Category from "../../components/category/Category"
export default function Home() {
    return (
        <Layout>
            <HeroSection />
            <Category />
        </Layout>
    )
}