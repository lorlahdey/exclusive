import Link from 'next/link'

const campaignBanner = () => {
    return (
      <div className="bg-black flex flex-row lg:gap-x-20 xl:gap-x-40 py-3  px-5 sm:px-[60px] xl:px-[135px] justify-between items-center ">
        <p className="text-[#FAFAFA] text-[14px] leading-[21px]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <Link href="/" className=" ml-3 underline">
            ShopNow
          </Link>
        </p>
        <select className="bg-transparent text-[#FAFAFA] justify-items-end">
          <option value="eng" selected>
            English
          </option>
        </select>
      </div>
    );
}

export default campaignBanner