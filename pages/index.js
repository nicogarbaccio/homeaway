import Head from 'next/head'
import Header from '../components/Header'

function Home () {
  return (
    <div className="">
      <Head>
        <title>HomeAway</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}

    </div>
  )
}

export default Home
