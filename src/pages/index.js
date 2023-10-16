import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const handleButtonClick = ( values ) => {
      console.log('welcome'+values);
    
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
     
      <button onClick={() => handleButtonClick("250")} className="btn btn-primary" type="submit" name="amount" value="350" role="link" >Standard </button>
     
    </main>
  )
}
