export default function HomeQuickLinks(){
    return (
        <>
            <section className="bg-white body-font block" id="Services">
    <div className="container py-8 px-8 mb-8 w-10/12 lg:w-10/12 mx-auto">
      <div className="flex gap-4 flex-wrap justify-center content-center -m-4">

        <div className="p-4 md:w-[30%] border rounded hover:shadow-lg cursor-pointer flex flex-wrap" >
          <div className="w-4/5 inline-block mx-auto">
            <div className="h-full overflow-hidden" data-aos="zoom-in-up" data-aos-duration="1000">
              <img className=" h-48 md:h-36 lg:h-48  w-full object-cover object-center" src="./media/homecoming.png"
                alt="joinus" />
                <a href="./pages/registerAlumni.html">
                <div className="bg-[#65350f] mx-4 relative bottom-6">
                <h1 className="title-font text-white text-2xl p-5 text-center font-medium mb-3">Join Us</h1>
              </div>
                </a>
              
              <p className="leading-relaxed mb-3">Become a part of the highly esteemed and prestigious alumni network</p>

            </div>
          </div>
        </div>

        <div className="p-4 md:w-[30%] flex flex-wrap border rounded hover:shadow-lg cursor-pointer" >
          <div className="w-4/5 inline-block mx-auto">
            <div className="h-full overflow-hidden" data-aos="zoom-in-up" data-aos-duration="1000">
              <img className=" h-48 md:h-36 lg:h-48  w-full object-cover object-center" src="./media/donation.jpg"
                alt="donate" />
              <div className="bg-[#65350f] mx-4 relative bottom-6">

                <h1 className="title-font text-white text-2xl p-5 text-center font-medium mb-3">Donate</h1>
              </div>
              <p className="leading-relaxed mb-3">Support your alma mater to make a huge and lasting impact and leave behind
                a legacy</p>

            </div>
          </div>
        </div>

        <div className="p-4 md:w-[30%] flex flex-wrap border rounded hover:shadow-lg cursor-pointer" >
          <div className="w-4/5 inline-block mx-auto">
            <div className="h-full overflow-hidden" data-aos="zoom-in-up" data-aos-duration="1000">
              <img className=" h-48 md:h-36 lg:h-48  w-full object-cover object-center" src="./media/mentor.jpg"
                alt="mentor" />
              <div className="bg-[#65350f] mx-4 relative bottom-6">

                <h1 className="title-font text-white text-2xl p-5 text-center font-medium mb-3">Mentor</h1>
              </div>
              <p className="leading-relaxed mb-3">Join the mentorship program and guide the next generation of changemakers
              </p>

            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
        </>
    )
}