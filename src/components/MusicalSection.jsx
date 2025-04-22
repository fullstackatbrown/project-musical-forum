function MusicalSection({ isBoard = false, withArrows = false }) {
  // Inline arrow SVGs
  const ArrowBack = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </svg>
  );

  const ArrowForward = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
    </svg>
  );

  const sectionData = [
    {
      id: 1,
      title: "Jesus Christ Superstar Spring 2024",
      image:
        "https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/chris-karli-2_orig.jpeg",
    },
    {
      id: 2,
      title: "Little Shop of Horrors Fall 2023",
      image:
        "https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/jake-anger.jpeg",
    },
  ];
  return (
    <>
      {isBoard && (
        <section className="relative w-[800px] flex justify-center">
          {withArrows && (
            <>
              <button className="absolute -left-20 top-1/2 -translate-y-1/2 flex items-center justify-center">
                <ArrowBack sx={{ fontSize: 50 }} className="text-white" />
              </button>
              <button className="absolute -right-20 top-1/2 -translate-y-1/2 flex items-center justify-center">
                <ArrowForward sx={{ fontSize: 50 }} className="text-white" />
              </button>
            </>
          )}
          <div className="w-full flex justify-between">
            {sectionData.map((item) => (
              <div key={item.id} className="flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  width={587}
                  height={340}
                  className="w-[350px] aspect-[587/340]"
                />
                <p className="font-acad my-2 text-[24px]">{item.title}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default MusicalSection;
