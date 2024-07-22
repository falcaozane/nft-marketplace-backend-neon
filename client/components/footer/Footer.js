import Link from "next/link";
import { FaTwitter, FaTelegram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-6 bg-gradient-to-t from-[#030d26] to-[#010510] text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className='flex justify-between'>
          <div className="">
            <p className="text-sm my-2 text-white">Copyright &copy; {year} Ignitus Network. All rights reserved!</p>
          </div>
          <div className="">
            <ul className="flex md:space-x-5 space-x-2 my-2 text-white">
              <li className="bg-indigo-950 rounded-full p-2">
                <Link href="#">
                  <FaTwitter className='  hover:text-amber-500' size={20} />
                </Link>
              </li>
              <li className="bg-indigo-950 rounded-full p-2">
                <Link href="https://telegram.org/">
                  <FaTelegram className=' hover:text-amber-500' size={20} />
                </Link>
              </li>
              <li className="bg-indigo-950 rounded-full p-2">
                <Link href="#">
                  <FaYoutube className=' hover:text-amber-500' size={20} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
