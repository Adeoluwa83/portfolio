import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton"
import { FaLocationArrow } from "react-icons/fa"
const Footer = () => {
  return (
      <footer className="w-full pt-20" id="contact">
          <div className="w-full absolute left-0  ">
              <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-50"/>
          </div>
          <div className="flex flex-col items-center text-center">
              <h1 className="heading lg:max-w-[45vw]">Ready to take <span className="text-purple">Your </span>digital prescence to the next level?</h1>
              <p className="text-white-200 md:mt-10 my-5 text-center">
                  Reach out to me today and let&apos;s see how i can take your ideas out of this world
              </p>
              <a href={'mailto: asojoade83@gmial.com'} >
                  <MagicButton
                      title="Lets Get in touch"
                      icon={<FaLocationArrow />}
                      position="right"
                  />
              </a>
          </div>
          <div className="flex mt-16 md:flex-row flex-col justify-between item-center ">
              <p className="md:text-base text-sm md:font-normal font-light mb-3">Copyright &copy; 2024 Xii Programming</p>

              <div className="flex items-center md:gap-3 gap-6">
                  {socialMedia.map((profile) => (
                      <div key={profile.id}>
                          <img src={profile.img} alt={profile.matCardImageMedium} width={20} height={20}/>
                      </div>
                  ))}
              </div>
          </div>
    </footer>
  );
}

export default Footer