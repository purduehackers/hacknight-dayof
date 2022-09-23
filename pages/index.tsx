import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta property="og:site_name" content="Purdue Hackers" />
        <meta property="og:name" content="Purdue Hackers" />
        <meta property="og:title" content="Purdue Hackers" />
        <meta
          property="og:image"
          content="https://og.purduehackers.com/Home.png?theme=light&md=1&fontSize=250px&caption=%25F0%259F%2592%259B%25E2%259A%25A1%25EF%25B8%258F"
        />
        <meta property="og:description" content="💛⚡️" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
        <title>Purdue Hackers</title>
      </Head>
      <Header />
    </div>
  )
}

export default Home
