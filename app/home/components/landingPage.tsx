import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-12 md:p-24 text-xl md:text-2xl text-center flex-1">
      <p className="text-4xl md:text-6xl font-bold w-full md:w-[490px]">
        Data to <label className="text-primary">insights</label> in minutes
      </p>
      <p className="text-sm md:text-[15px] font-normal py-4 w-full md:w-[300px]">
        Explore your data, build your dashboard, bring your team together.
      </p>
      <Link className="btn btn-gray" href="/dashboard">
        Get Started
      </Link>
    </div>
  );
};

export default LandingPage;
