import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="flex gap-6 p-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/tech-stack">Tech Stack</Link>
      <Link href="/testimonials">Testimonials</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}

