import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/Smallcard'
import MediumCard from '../components/MediumCard'

function Home ({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>HomeAway</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* Main section */}
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          {/* Pull some data from a server (API endpoints) */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({ img, distance, location}) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          {cardsData.map(item => {
            <MediumCard />
          })}
        </section>
      </main>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  // json placeholder -- replace with different data
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G')
  .then (
    (res) => res.json()
  );

  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT')
  .then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}
