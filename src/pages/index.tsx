import type { PageProps } from "gatsby"
import * as React from "react"
import { Footer } from "../components/footer"
import { Head } from "../components/head"
import { Header } from "../components/header"
import { MainContent } from "../components/main"
import { MainContainer } from "../components/main-container"

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