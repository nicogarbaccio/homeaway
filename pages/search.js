import React, { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import InfoCard from '../components/InfoCard';
import { useRouter } from 'next/router';
import format from 'date-fns/format';

function Search( {searchResults} ) {
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
    const range = `${formattedStartDate} - ${formattedEndDate}`

    const filteredResults = searchResults.filter(
        (result) => result.location.toLowerCase() === location.toLowerCase()
    );

  return (
    <div className='h-screen'>
        <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
        <main class='flex'>
            <section className='flex-grow pt-14 px-6'>
                <p className='text-xs'>300+ stays - {range} - for {noOfGuests} guests</p>
                <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p className='button'>Cancellation Flexibility</p>
                    <p className='button'>Type of Place</p>
                    <p className='button'>Price</p>
                    <p className='button'>Rooms and Beds</p>
                    <p className='button'>More filters</p>
                </div>
                <div>
                    {filteredResults.map(({ img, location, title, description, star, price, total}) => (
                        <InfoCard
                            key={img}
                            img={img}
                            location={location}
                            title={title}
                            description={description}
                            star={star}
                            price={price}
                            total={total}
                        />
                    ))}
                </div>
            </section>
        </main>
        <Footer />
    </div>
  )
}

export default Search;

export async function getServerSideProps({ query} ) {
    const { location } = query;
    const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS")
    .then(res => res.json());
    
    return {
        props: {
            searchResults,
            location
        }
    }
}