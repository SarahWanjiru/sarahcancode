import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-secondary">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface text-accent text-sm font-medium rounded-full mb-6">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                AVAILABLE FOR SOFTWARE & CLOUD PROJECTS
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                Engineering Reliable Systems{' '}
                <span className="text-accent">From Interface to Infrastructure</span>
              </h1>

              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
               I’m Sarah, a Software Engineer building modern web applications backed by scalable cloud architecture and structured DevOps practices.
               I care about clean systems, performance, and long-term sustainability — not just shipping fast, but building right.
              </p>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/homepage.jpg"
                  alt="Coding workspace"
                  width={600}
                  height={900}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
