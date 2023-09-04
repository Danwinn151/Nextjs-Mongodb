import Image from 'next/image'
import Signin from './components/Signin'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Signin/>
    </main>
  )
}
