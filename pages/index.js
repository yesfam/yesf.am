import Container from '@/components/container'
import Layout from '@/components/layout'

import Footer from '@/components/footer'
import Concept from '@/components/concept'

import Head from 'next/head'

export default function Index({ allPosts, preview }) {
  return (
    <>
      <Head>
        <title>YesFam Domain</title>
      </Head>
      <Layout>
        <Container>
          <Concept />
          <Footer />
        </Container>
      </Layout>
    </>
  )
}
