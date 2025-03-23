const EditSection = ({ EditData }) => {
  return (
    <>
      <div className="h-full w-screen lg:my-0 md:my-10 my-10">
        <h1 className=" hover:underline hover:underline-offset-8 hover:decoration-[#3087D1] text-transparent bg-gradient-to-r from-[#3087D1] via-[#3087D5] to-black bg-clip-text font-bold lg:text-6xl md:text-4xl text-3xl text-center font-semibold">
          Seamless Edit
        </h1>
        <div className="h-full w-full flex items-center justify-center">
          <div className="h-[90%] lg:w-[70%] md:w-[70%] w-[90%] mt-10 flex flex-wrap lg:flex-col-3 md:flex-col-2 sm:flex-col-1 items-center justify-around">
            {EditData.map((photo, index) => (
              <div key={index} className="lg:h-[30vh] lg:w-[40vh] md:h-[30vh] md:w-[40vh] h-[20vh] w-[18vh]">
                <img src={photo.src} className="border-none outline-none shadow-none" alt="Edit Image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditSection;
