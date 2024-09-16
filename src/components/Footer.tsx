export default function Footer(){
    return (
        <footer className="p-4 bg-gray-200  rounded-lg shadow  md:py-6 md:pb-20 border" id="contact">

    <div className="flex flex-col-reverse md:flex-row sm:items-center sm:justify-between lg:mx-20">
      <div>
        <ul
          className="flex justify-center text-center md:text-left  flex-wrap md:grid md::grid-cols-1 items-center my-6 text-xl leading-8 font-semibold text-gray-500 sm:mb-0 ">
          <li>
            <a href="./pages/donate.html" className="mr-4 hover:underline md:mr-6 ">Donate</a>
          </li>
          <li>
            <a href="./pages/notable-alumni.php" className="mr-4 hover:underline md:mr-6">Noted Alumni</a>
          </li>
          <li>
            <a href="./pages/about-us.html" className="mr-4 hover:underline md:mr-6">About</a>
          </li>
          <li>
            <a href="./pages/initiatives.html" className="mr-4 hover:underline md:mr-6">Initiatives</a>
          </li>

          <li>
            <a href="/dtualumni/index.php#Events" className="hover:underline">Events</a>
          </li>
          <li>
            <a href="#Mentorship" className="mr-4 hover:underline md:mr-6 ">Mentorship</a>
          </li> 

        </ul>

      </div>
      <div className="bg-white rounded-lg md:w-1/2 lg:w-max shadow-lg ">
        <div className="py-3 lg:py-5 px-4 w-full lg:w-[600px]">
          <h2 className="mb-2 text-4xl w-full tracking-tight font-extrabold text-center text-gray-900 ">Contact Us</h2>
            
          <form action="mailto:deanalumniaffairs@dtu.ac.in" method="post" encType="text/plain" className="space-y-3">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">Your name</label>
              <input name="name" type="text" id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                 required />
            </div>
            <div>
              <label htmlFor="email"  className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
              <input type="email" id="email" name="mail"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                 required />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
              <input type="text" id="subject" name="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
              <textarea id="message" rows={3}  name="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                ></textarea>
            </div>
            <button type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit  focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send
              message</button>
          </form>
        </div>
      </div>
    </div>
    <div>
      <p className="text-sm text-center mt-8 mb-2 text-gray-500 ">© 2023, Delhi Technological University, Shahbad Daulatpur, Main Bawana Road, DL - 42, IN</p>
    </div>
  </footer>
    )
}