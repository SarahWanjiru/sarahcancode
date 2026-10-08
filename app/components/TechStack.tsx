import Image from "next/image";

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 text-accent text-xs sm:text-sm font-medium mb-4 sm:mb-6">
          <span className="w-2 h-2 bg-accent rounded-full"></span>
          TECH STACK
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-8 sm:mb-12">
          My Tech Universe
        </h2>

        {/* Tech Icons Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-8 sm:gap-12">
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/react.png"
              alt="React"
              width={230}
              height={219}
              className="h-16 w-auto hover:scale-110 transition-transform"
            />
            <span className="text-sm text-text-secondary font-medium">
              React
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/typescript.png"
              alt="TypeScript"
              width={64}
              height={64}
              className="h-16 w-auto hover:scale-110 transition-transform"
            />
            <span className="text-sm text-text-secondary font-medium">
              TypeScript
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/next.png"
              alt="Next.js"
              width={64}
              height={64}
              className="h-16 w-auto hover:scale-110 transition-transform"
            />
            <span className="text-sm text-text-secondary font-medium">
              Next.js
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/tailwind.png"
              alt="Tailwind CSS"
              width={382}
              height={132}
              className="h-16 w-auto hover:scale-110 transition-transform"
            />
            <span className="text-sm text-text-secondary font-medium">
              Tailwind
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/aws.png"
              alt="AWS"
              width={275}
              height={183}
              className="h-16 w-auto hover:scale-110 transition-transform"
            />
            <span className="text-sm text-text-secondary font-medium">AWS</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/docker.png"
              alt="Docker"
              width={64}
              height={64}
              className="h-16 w-auto hover:scale-110 transition-transform"
            />
            <span className="text-sm text-text-secondary font-medium">
              Docker
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/kubernetes.png"
              alt="Kubernetes"
              width={275}
              height={183}
              className="h-16 w-auto hover:scale-110 transition-transform"
            />
            <span className="text-sm text-text-secondary font-medium">
              Kubernetes
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/git.png"
              alt="Git"
              width={64}
              height={64}
              className="h-16 w-auto hover:scale-110 transition-transform"
            />
            <span className="text-sm text-text-secondary font-medium">Git</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/python.png"
              alt="Python"
              width={300}
              height={168}
              className="h-16 w-auto hover:scale-110 transition-transform"
            />
            <span className="text-sm text-text-secondary font-medium">
              Python
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/terraform.png"
              alt="Terraform"
              width={64}
              height={64}
              className="h-16 w-auto hover:scale-110 transition-transform"
            />
            <span className="text-sm text-text-secondary font-medium">
              Terraform
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
