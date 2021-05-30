export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center mb-10">
      <div className="flex flex-wrap text-3xl max-w-lg mb-5">
                <a href="#"><i className="text-gray-600 fas fa-rss mr-5"></i></a>
                <a rel="noreferrer noopener nofollow" href="https://www.instagram.com/sm32d" target="_blank"><i className="text-red-600 fab fa-instagram mr-5"></i></a>
                <a href="#"><i className="text-yellow-700 far fa-envelope-open"></i></a>
            </div>
            <div className="inline">
                <span>
                    Fork maintained with <i className="text-red-500 fas fa-heart"></i> by&nbsp;
                </span>
                <a target="_blank" href="https://www.prodominik.me/">
                    <span className="text-red-600 hover:underline">Dominik</span>
                </a>
            </div>
            <span className="text-gray-500">Template by&nbsp;
            <a rel="noreferrer noopener nofollow" className="text-gray-800 hover:underline" target="_blank" 
            href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter">
            Next.js</a></span>
    </footer>
  )
}
