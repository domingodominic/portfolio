import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const education = [
  {
    school: "Bataan Peninsula State University - Main Campus",
    logo: "https://tse1.mm.bing.net/th/id/OIP.DdNZoSf80gDrWwULE_CaTAHaJv?rs=1&pid=ImgDetMain&o=7&rm=3",
    degree: "Bachelor of Science in Information Technology",
    period: "2021 – 2025",
  },
  {
    school: "Magsaysay National High School",
    logo: "https://tse2.mm.bing.net/th/id/OIP.YgFWFm-p1kDdk-OoC8nc1gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    degree: "Information and Communications Technology Strand",
    period: "2019 – 2021",
  },
];

function Education() {
  return (
    <section id="education" className="w-full  px-6 py-10 md:py-24 text-white">
      {/* Section header */}
      <header className="max-w-6xl mb-10">
        {/* Badge */}
        <span className="inline-block mb-4 rounded-full bg-neutral-800 px-4 py-1 text-sm text-neutral-300">
          Education
        </span>

        <h2 className=" text-2xl md:text-4xl font-bold mb-4 text-black dark:text-white">
          Academic background
        </h2>
      </header>

      {/* Education list */}
      <div className="max-w-6xl space-y-6 md:space-y-12">
        {education.map((item, index) => (
          <article key={index}>
            <Card
              className="bg-transparent border-neutral-800"
              data-aos="fade-right"
            >
              <CardContent className="p-2 md:p-4 flex items-center justify-between gap-2">
                <div className="flex gap-2 items-center">
                  <Avatar>
                    <AvatarImage
                      src={item.logo}
                      alt="@shadcn"
                      className="max-w-15 max-h-15 rounded-full"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h3 className="text-md md:text-xl font-semibold">
                          {item.school}
                        </h3>
                      </div>
                    </div>

                    <p className=" ">{item.degree}</p>
                  </div>
                </div>
                <p className="text-sm text-black dark:text-neutral-400">
                  {item.period}
                </p>
              </CardContent>
            </Card>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
