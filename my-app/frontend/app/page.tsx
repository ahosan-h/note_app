"use client"
//import Navbar from '@/components/ui/navbar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
export default function Home() {

  const router=useRouter()
  return (
    <div className="flex">
      <Button onClick={()=>router.replace("/rs/rn")}>Click to get route</Button>
      <Button onClick={()=>router.back()}>Get Back</Button>
      <Link href="/rs">Page1</Link>
      <Link href="/rs/rn">Page2</Link>
      
     
    
    </div>
  )
}