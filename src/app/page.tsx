"use client"

import Link from 'next/link'

export default function Page() {
  return (
    <main className="lg:flex min-h-screen lg:flex-col lg:items-center lg:justify-between lg:p-24 p-6">
      <div className="lg:max-w-5xl w-full lg:items-center lg:justify-between font-mono">
        <h1 className="text-4xl font-bold">
          coredump.tech
        </h1>
        <br/>
        <p>
          Nothing much yet. <br/>
          For now <Link href="/reading-list" className="underline underline-offset-2 hover:hover:bg-blue-700">
            Checkout the essential reading list for engineers
          </Link>
          <br/>
          <a href="https://www.youtube.com/@core_dump" className="underline underline-offset-2 hover:hover:bg-red-700">
            Checkout @core_dump on youtube
            </a>
        </p>
      </div>
    </main>
  )
}
