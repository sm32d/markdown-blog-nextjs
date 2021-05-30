import { CMS_NAME } from '../lib/constants'
import Link from 'next/link'

export default function Intro() {
  return (
    <div className="mb-10 flex flex-col md:flex-row mt-10 justify-between">
            <header className="flex flex-col mb-5">
                <h1 className="font-bold tracking-tight md:tracking-tighter leading-tight text-2xl md:text-4xl">
                  <Link href="/">
                    <a className="hover:underline">. . .</a>
                  </Link>
                </h1>
                <h2 className="font-mono text-lg md:text-xl text-gray-500 mt-1">What's with the dots?</h2>
            </header>

            <nav className="flex mr-10 md:pt-3 font-medium text-lg">
                <ul>
                    <a href="#"><li className="md:font-semibold text-gray-500 inline mr-7">Home</li></a>
                    <a href="#"><li className="md:font-semibold hover:text-gray-500 inline mr-7">About</li></a>
                    <a href="#"><li className="md:font-semibold hover:text-gray-500 inline">Contact</li></a>
                </ul>
            </nav>
        </div>
  )
}
