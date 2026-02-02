export default function Contact() {
  return (
    <section id="contact" className="w-full  text-white px-6 py-20">
      <div className="py-10 md:py-0 max-w-4xl mx-auto">
        {/* Badge */}
        <span className="inline-block mb-4 rounded-full bg-neutral-800 px-4 py-1 text-sm text-neutral-300">
          Contact
        </span>

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
          Get in Touch
        </h2>

        {/* Description */}
        <p className="text-black dark:text-neutral-400 max-w-3xl">
          Want to chat? Just shoot me an email at{" "}
          <a
            href="mailto:domingodominicp@gmail.com"
            className="text-blue-400 hover:underline"
          >
            domingodominicp@gmail.com
          </a>{" "}
          and I&apos;ll respond whenever I can. I will ignore all soliciting.
        </p>
      </div>
    </section>
  );
}
