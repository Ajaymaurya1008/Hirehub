import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className>
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0 ">
            <Link
              href="/"
              title
              className="flex justify-center items-center gap-1"
            >
              <Image
                className="w-16"
                src="https://res.cloudinary.com/dfh7pmyj0/image/upload/v1720168032/final_mm78it.png"
                alt=""
                width={100}
                height={60}
              />
              <p className="text-[#26AE61] text-2xl font-bold">Hirehub</p>
            </Link>
          </div>
          <div className=" ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
            <a
              href="#"
              title
              className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
              role="button"
            >
              {" "}
              Try for free{" "}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
