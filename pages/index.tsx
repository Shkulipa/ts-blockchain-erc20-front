import type { NextPage } from 'next'
import Head from 'next/head'
import HomeContainer from '../modules/HomePage/home.container'

const Home: NextPage = () => {  
  return (
    <div>
      <Head>
        <title>Read-write-events</title>
        <meta name="description" content="Read-write-events" />
      </Head>
      <HomeContainer />
    </div>
  )
}

export default Home
