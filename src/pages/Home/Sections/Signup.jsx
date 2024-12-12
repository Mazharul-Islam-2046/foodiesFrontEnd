const Signup = () => {
  return (
    <div className="relative max-w-[1520px] w-11/12 h-[70vh] mx-auto overflow-hidden sm:px-6 lg:px-8 mb-28">
      <div className="relative h-full rounded-xl overflow-hidden">
        <img
          src="/src/assets/signupBg2.jpg"
          alt=""
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col gap-6 pt-10">
          <p className="text-3xl font-bold text-white text-center tracking-wide">20% off on your first order!!!</p>
          <button>
            <p className="text-2xl font-semibold text-white text-center py-5 px-10 bg-pink-600 rounded-full hover:bg-pink-700">Sign Up Now</p>
          </button>
          <p className="text-white text-center text-base tracking-widest">Already have an account? <a href="#" className="underline">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
