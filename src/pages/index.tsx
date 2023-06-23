import type { PageProps } from "gatsby"
import * as React from "react"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { MainContent } from "../components/main"
import { MainContainer } from "../components/main-container"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
    <title>Wesley Jr | Visual Effects Compositor and Motion Designer</title>
    <MainContainer>
      <Header />
      <MainContent />
      <Footer />
    </MainContainer>
    </>
  )
}

export default IndexPage