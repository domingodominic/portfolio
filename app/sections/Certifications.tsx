import React from "react";
import cybersecurity from "../../public/images/certifications/cybersecurity.jpg";
import networkSecurity from "../../public/images/certifications/networksecurity.jpg";
import msassociate from "../../public/images/certifications/msassociate.jpg";
import technician from "../../public/images/certifications/technician.jpg";
import deviceconfig from "../../public/images/certifications/deviceconfig.jpg";
import networking from "../../public/images/certifications/networking.jpg";
import Image from "next/image";

const certifications = [
  {
    title: "Microsoft Office Specialist ",
    date: "April, 2025",
    issuer: "Issued by pearson",
    image: msassociate,
  },
  {
    title: "Device Configuration and Management (Windows 10)",
    date: "December, 2024",
    issuer: "Issued by pearson",
    image: deviceconfig,
  },
  {
    title: "Information Technology Specialist in Networking",
    date: "November, 2024",
    issuer: "Issued by pearson",
    image: networking,
  },
  {
    title: "Network Security",
    date: "May, 2024",
    issuer: "Issued by pearson",
    image: networkSecurity,
  },
  {
    title: "Cybersecurity",
    date: "June, 2023",
    issuer: "Issued by pearson",
    image: cybersecurity,
  },
  {
    title: "Cisco Certified Technician",
    date: "June, 2023",
    issuer: "Issued by pearson",
    image: technician,
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="w-full text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Badge */}
        <span className="inline-block mb-4 rounded-full bg-neutral-800 px-4 py-1 text-sm text-neutral-300">
          Certifications
        </span>

        {/* Heading */}
        <h2
          className="text-2xl md:text-4xl font-bold mb-4 text-black dark:text-white"
          data-aos="fade-in"
        >
          Professional credentials
        </h2>

        {/* Description */}
        <p
          className="text-black dark:text-neutral-400 max-w-3xl mb-12"
          data-aos="fade-right"
        >
          I continuously invest in professional development to stay current with
          industry best practices and emerging technologies. These
          certifications validate my expertise and commitment to excellence.
        </p>

        {/* Certifications list */}
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-6 items-start"
              data-aos="zoom-in"
            >
              {/* Certificate Image */}
              <div className="w-full sm:w-48 shrink-0 rounded-lg border border-neutral-800 bg-neutral-900 p-3">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={100}
                  height={100}
                  className="w-full h-auto rounded-md"
                />
              </div>

              {/* Certificate Info */}
              <div data-aos="fade-in">
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  {cert.title}
                </h3>

                <p className="dark:text-neutral-400 mt-1  text-black">
                  {cert.date}
                </p>

                <p className="text-black dark:text-neutral-500 mt-2">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
