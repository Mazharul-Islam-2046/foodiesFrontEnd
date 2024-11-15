const Hero = () => {
  return (
    <div className="h-[85vh] max-h-[600px] relative overflow-hidden px-[65px]">
      <div className="h-full flex flex-col justify-center gap-8">
        <h1 className="text-4xl font-bold leading-snug">Discover Flavorful Delights, Delivered to <br/> Your Doorstep!</h1>
        <div className="pb-[17px] pt-[16px] px-6 bg-white w-fit rounded-[15px] mb-4 text-xs space-x-6 z-10 drop-shadow-xl">
            <input className="w-[580px] py-3 px-3 rounded-[10px] border-[1px] border-[#00000030] focus:outline-none focus:ring-[1px] focus:ring-[#00000060]" type="text" name="" id="" placeholder="Type for Food" />
            <input className="text-white bg-[#E21B70] font-semibold pt-[13px] pb-[12px] px-[17px] rounded-[10px] mt-[3px] cursor-pointer" type="submit" value="Find Food" />
        </div>
      </div>
      <img className="absolute -bottom-32 -right-24 w-[740px] z-0" src="/src/assets/heroImg.png" alt="" />
    </div>
  );
};

export default Hero;
