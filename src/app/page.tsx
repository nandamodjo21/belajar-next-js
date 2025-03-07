"use client";
import Link from "next/link";
import {useRouter} from "next/navigation";
import ProductCard from "@/app/components/ProductCard";

export default function Page(){


  return (
      <main>
        <div><h1 className="text-3xl">Hello world</h1></div>
        <div className="flex flex-col">
          <Link href="/home">home</Link>
          <Link href="/auth/login">Login</Link>
          <ProductCard/>
        </div>
      </main>
  )
}