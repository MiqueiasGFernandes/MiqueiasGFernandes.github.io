import type { PageProps } from "gatsby"
import * as React from "react"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { MainContent } from "../components/main"
import { MainContainer } from "../components/main-container"
import { Head } from "../components/head"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
    <Head/>
    <MainContainer>
      <Header />
      <MainContent />
      <Footer />
    </MainContainer>
    </>
  )
}

export default IndexPage