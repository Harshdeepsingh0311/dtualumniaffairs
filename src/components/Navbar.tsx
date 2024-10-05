export default function Navbar() {
  return (
<nav className="bg-white border-gray-200 px-2 lg:px-4 py-2.5 bg-gray-900">
    <div className="container flex flex-wrap items-center justify-between mx-auto">
      <a href="/" className="flex items-center">

        <span className="flex gap-2 self-center text-2xl lg:text-3xl font-semibold whitespace-nowrap "><span><img className="h-10 w-10" src="./media/dtu-logo.png" alt=""/></span>Alumni Affairs</span>
      </a>
      <div className="flex md:order-2">
       <a href="./pages/whydonate.html"><button type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">Donate</button></a>
        <button data-collapse-toggle="navbar-cta" type="button"
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-cta" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div
        className="items-center absolute z-20 top-10 md:top-0  md:relative justify-between hidden w-11/12 md:flex md:w-auto md:order-1"
        id="navbar-cta">
        <ul
          className="flex flex-col lg:p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 sm:text-base md:font-medium md:border-0 md:bg-white  lg:text-xl leading-8 font-semibold text-gray-500">

          <li>
            <a href="/" className="mr-4 md:hidden hover:underline md:mr-3 ">Home</a>
          </li>
          <li>
            <a href="./pages/about-us.html" className="mr-4 hover:underline md:mr-3">About</a>
          </li>
          <li>
            <a href="./pages/notable-alumni.php" className="mr-4 hover:underline md:mr-3">Notable Alumni</a>
          </li>
          <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-auto mr-4 rounded md:mr-3 md:border-0 md:p-0 md:w-auto active:border-0 hover:underline">Donations <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

              <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:uselessclassNamebg-gray-700 dark:uselessclassNamedivide-gray-600">
                  <ul className="py-2 text-sm dark:uselessclassNametext-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="./pages/donorsWall.php" className="block px-4 py-2 hover:bg-gray-100 dark:uselessclassNamehover:bg-gray-600 dark:uselessclassNamehover:text-white">Donor Wall</a>
                    </li>
                    <li>
                      <a href="./pages/whydonate.html" className="block px-4 py-2 hover:bg-gray-100 dark:uselessclassNamehover:bg-gray-600 dark:uselessclassNamehover:text-white">Why Donate?</a>
                    </li>
                    <li>
                      <a href="./pages/donate.html" className="block px-4 py-2 hover:bg-gray-100 dark:uselessclassNamehover:bg-gray-600 dark:uselessclassNamehover:text-white">Donate Now</a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:uselessclassNamehover:bg-gray-600 dark:uselessclassNametext-gray-400 dark:uselessclassNamehover:text-white">Sign out</a>
                  </div>
              </div>
          </li>
        <li>
          <a href="./pages/memories.php" className="mr-4 hover:underline md:mr-3 ">Memories</a>
        </li>
        <li>
          <a href="/dtualumni/index.php#Events" className="mr-4 hover:underline md:mr-3">Events</a>
        </li>
       
          <li>
            <a href="/initiatives" className="mr-4 hover:underline md:mr-3">Alumni Initiatives</a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
  );
}
