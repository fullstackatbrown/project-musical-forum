import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

function MusicalSection({ isBoard = false, withArrows = false }) {
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
        <section className="relative w-[800px] flex justify-center">
          {withArrows && (
            <>
              <button className="absolute -left-20 top-1/2 -translate-y-1/2 flex items-center justify-center">
                <ArrowBackIosNewOutlinedIcon
                  sx={{ fontSize: 50 }}
                  className="text-white"
                />
              </button>
              <button className="absolute -right-20 top-1/2 -translate-y-1/2 flex items-center justify-center">
                <ArrowForwardIosOutlinedIcon
                  sx={{ fontSize: 50 }}
                  className="text-white"
                />
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
