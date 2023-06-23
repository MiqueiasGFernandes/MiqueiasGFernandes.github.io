import React from "react"
import { useSiteMetadata } from "../../hooks"

type SeoPropsType = {
    title?: string
    description?: string
    pathname?: string
    children?: any
}

export const SEO = ({ title, description, pathname, children }: SeoPropsType) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <meta name="description" content={seo.description} />
      <meta name="twitter:url" content={seo.url} />
      {children}
    </>
  )
}