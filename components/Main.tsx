import Image from 'next/image'
import { Mail } from 'react-feather'

const Main = () => {
  return (
    <main className="container flex flex-col mx-auto flex-1 max-w-3xl px-6 justify-center">
      <div className="mb-2">
        <Image
          className="rounded-full transition-all duration-100"
          src="/images/avatar.jpg"
          alt="avatar"
          width={120}
          height={120}
          priority
        />
      </div>
      <h1 className="font-bold mb-8 text-2xl heading-text">Spencer Woo</h1>

      <p className="mb-8">
        Developer / Designer / Writer /{' '}
        <a href="https://genshin-impact.fandom.com/wiki/Hu_Tao" target="_blank" rel="noopener noreferrer">
          <abbr title="🔥 C6 by the way" className="!no-underline">
            #HuTao
          </abbr>
        </a>{' '}
        haver
      </p>

      <p>
        Postgrad at the{' '}
        <a href="https://www.gla.ac.uk/" target="_blank" rel="noopener noreferrer">
          University of Glasgow
        </a>{' '}
        in Computing Science.{' '}
        <a href="http://bit.edu.cn" target="_blank" rel="noopener noreferrer">
          Beijing Institute of Technology
        </a>{' '}
        alumni, class of 2020. Research interests include deep learning, computer vision, and adversarial attacks.
        Creator of{' '}
        <a href="https://github.com/spencerwooo/onedrive-vercel-index" target="_blank" rel="noopener noreferrer">
          onedrive-vercel-index
        </a>
        ,{' '}
        <a href="https://github.com/spencerwooo/substats" target="_blank" rel="noopener noreferrer">
          Substats
        </a>
        , and{' '}
        <a href="https://github.com/BITNP/BIThesis" target="_blank" rel="noopener noreferrer">
          BIThesis
        </a>
        .
      </p>

      <p className="mt-8">
        Most of my work can be found on{' '}
        <a href="https://github.com/spencerwooo" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        .
      </p>
      <p className="flex space-x-2 items-center">
        <Mail size={15} />
        <a href="mailto:spencer.wushangbo@gmail.com">spencer.wushangbo#gmail.com</a>
      </p>
    </main>
  )
}

export default Main
