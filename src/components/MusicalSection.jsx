function MusicalSection({ isBoard = false }) {
  const sectionData = [
    {
      id: 1,
      title: "Musical One",
      image:
        "https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/chris-karli-2_orig.jpeg",
    },
    {
      id: 2,
      title: "Musical Two",
      image:
        "https://brownmusicalforum.weebly.com/uploads/1/2/7/5/127563613/jake-anger.jpeg",
    },
  ];
  return (
    <>
      {isBoard && (
        <section className="flex justify-center bg-black">
          <div className="w-[1334px] flex justify-between">
            {sectionData.map((item) => (
              <div key={item.id} className="flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[587px] h-[340px]"
                />
                <p className="font-acad text-white my-2 text-[24px]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default MusicalSection;
