"use client"

import Link from 'next/link'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full items-center justify-between font-mono">
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
