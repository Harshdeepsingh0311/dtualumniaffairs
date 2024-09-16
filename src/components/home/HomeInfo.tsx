export default function HomeInfo() {
  return (
    <>
      <section id="About" className="bg-white">
        <div className="px-20 pt-2" data-aos="fade-down">
          <h3 className="text-4xl text-center font-medium">
            Welcome back to the place where your dreams began and your future
            took shape - your alma mater.
          </h3>
        </div>
      </section>

      <section className="bg-white " id="statistics">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <dl className="grid max-w-screen-lg gap-8 mx-auto text-gray-900 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 ">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                <p className="inline counter">33000</p>+
              </dt>
              <dd className="font-light text-gray-500 ">Alumni</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                <p className="inline counter">9</p>cr+
              </dt>
              <dd className="font-light text-gray-500 ">Donations recieved</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                <p className="inline counter">1</p>cr+
              </dt>
              <dd className="font-light text-gray-500 ">Scholarships funded</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
