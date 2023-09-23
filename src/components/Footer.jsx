import {
  BiLogoGmail,
  BiPhone,
  BiLocationPlus,
  BiLogoMedium,
  BiLogoLinkedin,
  BiLogoTelegram,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-15">
      {/* For Desktops */}
      <div className="hidden w-screen md:flex flex-col bg-lightBlue mt-14">
        <div className=" mt-6  p-16">
          <div className="flex flex-col items-center justify-center">
            <div className="text-lightCard md:text-2xl">Jobshunt</div>
            <div className="text-footerSubtitle font-extralight md:text-xl">
              Gateway to web3 jobs.
            </div>
          </div>
          <div className="border border-footerSubtitle border-t-[0.1px] border-b-[0.1px] border-l-0 border-r-0 py-16 mt-9 flex items-center justify-center gap-36 text-xl font-medium text-lightCard">
            <div className="flex flex-col items-center justify-center gap-2">
              <BiLogoGmail alt="mail_icon" className="w-7" />
              <div>Mail</div>
              <div className="text-sm font-thin">jobshunt@support.com</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <BiPhone className="w-7" />
              <div>Call</div>
              <div className="text-sm font-thin">+91 99676 99273</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <BiLocationPlus alt="mail_icon" className="w-7" />
              <div>Find Us</div>
              <div className="text-sm font-thin">Thane(west)</div>
            </div>
          </div>
          <div className="mt-9 flex justify-between text-lightCard">
            <div>Copyright © 2023 Jobshunt. All rights reserved.</div>
            <div className="flex gap-2">
              <a href="https://twitter.com/web3jobshunt">
                <FaXTwitter alt="twitter" className="w-10 cursor-pointer" />
              </a>
              <a href="https://web3jobshunt.medium.com/">
                <BiLogoMedium alt="medium" className="w-10 cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/company/web3jobhunt/">
                <BiLogoLinkedin
                  alt="linkedin_icon"
                  className="w-10 cursor-pointer"
                />
              </a>{" "}
              <a href="https://t.me/Web3jobshunt">
                <BiLogoTelegram
                  alt="telegram"
                  className="w-10 cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* For Mobiles */}
      <div className="md:hidden bg-lightBlue p-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-lightCard text-xl">Jobshunt</p>
          <p className="text-footerSubtitle font-extralight text-sm">
            Gateway to web3 jobs.
          </p>
        </div>

        <div className="flex items-center justify-center mt-6 text-lightCard gap-3">
          <div className="flex flex-col items-center justify-center gap-2">
            <BiLogoGmail alt="mail_icon" className="w-5" />
            <div className=" text-sm">Mail</div>
            <div className="text-[10px] font-thin">jobshunt@support.com</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <BiPhone alt="phone" className="w-5" />
            <div className=" text-sm">Call</div>
            <div className="text-[10px] font-thin text-center">
              +91 123457896
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <BiLocationPlus alt="location" className="w-5" />
            <div className=" text-sm">Find Us</div>
            <div className="text-[10px] font-thin">Thane(west)</div>
          </div>
        </div>
        <div className="mt-9 text-[12px] flex items-center justify-between gap-4 text-lightCard">
          <div>
            <p>Copyright © 2023 Jobshunt.</p> <p>All rights reserved.</p>
          </div>
          <div className="flex gap-2">
            <a href="https://twitter.com/web3jobshunt">
              <FaXTwitter alt="twitter" className="w-5" />
            </a>
            <a href="https://web3jobshunt.medium.com/">
              <BiLogoMedium alt="medium" className="w-5" />
            </a>
            <a href="https://www.linkedin.com/company/web3jobhunt/">
              <BiLogoLinkedin alt="linkedin_icon" className="w-5" />
            </a>{" "}
            <a href="https://t.me/Web3jobshunt">
              <BiLogoTelegram alt="telegram" className="w-5" />
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
