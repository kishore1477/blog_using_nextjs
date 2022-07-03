import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
   <>
  {/* <Navbar/> */}
  <img src="/background.jpeg" className='w-full' alt="background" />
<section className="text-gray-600 body-font" style={{userSelect: 'auto'}}>
  <div className="container px-5 py-24 mx-auto" style={{userSelect: 'auto'}}>
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center" style={{userSelect: 'auto'}}>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{userSelect: 'auto'}}>Pitchfork Kickstarter Taxidermy</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500" style={{userSelect: 'auto'}}>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
    </div>
    <div className="flex flex-wrap -m-4" style={{userSelect: 'auto'}}>
      <div className="xl:w-1/3 md:w-1/2 p-4" style={{userSelect: 'auto'}}>
        <div className="border border-gray-200 p-6 rounded-lg" style={{userSelect: 'auto'}}>
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4" style={{userSelect: 'auto'}}>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" style={{userSelect: 'auto'}} />
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2" style={{userSelect: 'auto'}}>Shooting Stars</h2>
          <p className="leading-relaxed text-base" style={{userSelect: 'auto'}}>Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4" style={{userSelect: 'auto'}}>
        <div className="border border-gray-200 p-6 rounded-lg" style={{userSelect: 'auto'}}>
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4" style={{userSelect: 'auto'}}>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
              <circle cx={6} cy={6} r={3} style={{userSelect: 'auto'}} />
              <circle cx={6} cy={18} r={3} style={{userSelect: 'auto'}} />
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" style={{userSelect: 'auto'}} />
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2" style={{userSelect: 'auto'}}>The Catalyzer</h2>
          <p className="leading-relaxed text-base" style={{userSelect: 'auto'}}>Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4" style={{userSelect: 'auto'}}>
        <div className="border border-gray-200 p-6 rounded-lg" style={{userSelect: 'auto'}}>
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4" style={{userSelect: 'auto'}}>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" style={{userSelect: 'auto'}} />
              <circle cx={12} cy={7} r={4} style={{userSelect: 'auto'}} />
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2" style={{userSelect: 'auto'}}>Neptune</h2>
          <p className="leading-relaxed text-base" style={{userSelect: 'auto'}}>Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4" style={{userSelect: 'auto'}}>
        <div className="border border-gray-200 p-6 rounded-lg" style={{userSelect: 'auto'}}>
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4" style={{userSelect: 'auto'}}>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" style={{userSelect: 'auto'}} />
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2" style={{userSelect: 'auto'}}>Melanchole</h2>
          <p className="leading-relaxed text-base" style={{userSelect: 'auto'}}>Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4" style={{userSelect: 'auto'}}>
        <div className="border border-gray-200 p-6 rounded-lg" style={{userSelect: 'auto'}}>
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4" style={{userSelect: 'auto'}}>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" style={{userSelect: 'auto'}} />
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2" style={{userSelect: 'auto'}}>Bunker</h2>
          <p className="leading-relaxed text-base" style={{userSelect: 'auto'}}>Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4" style={{userSelect: 'auto'}}>
        <div className="border border-gray-200 p-6 rounded-lg" style={{userSelect: 'auto'}}>
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4" style={{userSelect: 'auto'}}>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" style={{userSelect: 'auto'}} />
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2" style={{userSelect: 'auto'}}>Ramona Falls</h2>
          <p className="leading-relaxed text-base" style={{userSelect: 'auto'}}>Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
    </div>
    
  </div>
</section>

   </>
  )
}
