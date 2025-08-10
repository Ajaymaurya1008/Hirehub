import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                Next Gen Job Finder
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]" />
                  <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl pl-4">
                    Hirehub
                  </h1>
                </div>
              </h1>
              <p className="mt-8 text-base text-black sm:text-xl">
                HireHub is a job search engine that connects job seekers with
                employers. We provide a platform for job seekers to search for
                jobs, view job listings, and apply for jobs.
              </p>
              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <a
                  href="#"
                  title
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
                  role="button"
                >
                  {" "}
                  Start exploring{" "}
                </a>
              </div>
            </div>
            <div>
              <Image
                className="w-full"
                src="https://res.cloudinary.com/dfh7pmyj0/image/upload/v1720192555/03_svrfvx.png"
                alt=""
                width={1000}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
