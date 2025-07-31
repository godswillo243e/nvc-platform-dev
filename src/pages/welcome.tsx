function Welcome() {
  return (
    <div className=" max-w-screen max-h-dvh w-full h-full overflow-auto overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden h-[64px] flex items-center justify-between px-4 max-sm:px-1 bg-base-200/20 backdrop-blur-lg ">
        <h3 className="text-2xl max-sm:text-lg font-bold font-[Grandstander]">
          NVCommunity
        </h3>
        {/* <ul className="flexx gap-6 hidden ">
          <span className={"text-neutral cursor-pointer"}>Top content</span>
          <span className={"text-neutral cursor-pointer"}>People</span>
          <span className={"text-neutral cursor-pointer"}>Jobs</span>
        </ul> */}
        <div className="flex -center">
          <button className="btn btn-ghost text-primary rounded-full max-sm:text-sm!">
            Join now
          </button>
          <button className="btn btn-outline text-primary rounded-full max-sm:text-sm!">
            Sign in
          </button>
        </div>
      </div>
      <section className="grid grid-cols-[1fr_1fr] max-sm:grid-cols-1 items-center h-[calc(100vh)] px-4 pt-16">
        <div className="flex flex-col gap-4 md:pl-8  w-full max-sm:items-center">
          <h2 className="text-[2rem] max-sm:text-[1.5rem] font-medium font-[inder,_Roboto,_sans-serif] max-w-[400px] max-md:text-center">
            Welcome to the #1 community for you.
          </h2>
          <button className="btn btn-primary max-w-[200px] rounded-full">
            Get started
          </button>
          <p className="text-sm text-base-content underline mt-2">
            {" "}
            User Agreement, Privacy Policy, and Cookie Policy.
          </p>
        </div>
        <div className="max-sm:hidden">
          <img src="/illustrations/hero.png" className="w-full h-full" alt="" />
        </div>
      </section>
      <section className="flex flex-col items-center bg-white h-fit px-4  py-12">
        <div className="flex items-center justify-between w-full px-2   md:px-32 lg:px-64">
          <p className="text-lg max-sm:text-[1rem]">
            Connect people who share the same interest
          </p>
          <img
            src="/illustrations/connections.svg"
            className="w-[150px]"
            alt=""
          />
        </div>
        <div className="flex items-center justify-between w-full px-2   md:px-32 lg:px-64">
          <img src="/illustrations/team.svg" className="w-[150px]" alt="" />
          <p className="text-lg max-sm:text-[1rem]">
            Help you build teams for effective productivity
          </p>
        </div>
        <div className="flex items-center justify-between w-full px-2   md:px-32 lg:px-64">
          <p className="text-lg max-sm:text-[1rem]">
            Help you find jobs and places where your services are required.
          </p>
          <img src="/illustrations/job-hunt.svg" className="w-[150px]" alt="" />
        </div>
        <div className="flex items-center justify-between w-full px-2   md:px-32 lg:px-64">
          <img
            src="/illustrations/job-vacancy.svg"
            className="w-[150px]"
            alt=""
          />
          <p className="text-lg max-sm:text-[1rem]">
            Help to get the right person for the job in your neighbourhood
          </p>
        </div>
      </section>
    </div>
  );
}
export default Welcome;
