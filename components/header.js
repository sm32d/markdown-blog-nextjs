import Link from 'next/link'

export default function Header() {
  return (
    <h1 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-16 mt-8">
      <Link href="/">
        <a className="hover:underline">. . .</a>
      </Link>
    </h1>

  )
}
