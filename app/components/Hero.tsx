import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 sm:pt-32 sm:pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface text-accent text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-[10px] sm:text-sm">
                AVAILABLE FOR PROJECTS
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-text-primary mb-4 sm:mb-6 leading-tight">
              Engineering Reliable Systems{" "}
              <span className="text-accent">
                From Interface to Infrastructure
              </span>
            </h1>
          </div>

          <Image
            src="/herosection.jpg"
            alt="Coding workspace"
            width={600}
            height={900}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
