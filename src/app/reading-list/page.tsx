"use client"

import LinkCard from "@/components/coredump/link-card"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function ReadingList() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full items-center justify-between font-mono">
        <Link href="/" className="m-y-2">coredump.tech</Link>
        <h1 className="text-4xl font-bold">
          Essential reading list for engineers
        </h1>
        <Tabs defaultValue="papers" className="my-0.5">
          <TabsList className="my-0.5">
            <TabsTrigger value="papers">Papers</TabsTrigger>
            <TabsTrigger value="blogs">Blogs</TabsTrigger>
          </TabsList>
          <TabsContent value="papers">
            <LinkCard
              title="Towards Modern Development of Cloud Applications"
              linkto="https://sigops.org/s/conferences/hotos/2023/papers/ghemawat.pdf"
              tags={["backend", "microservices"]}
              subTitle="Introduces modular monoliths." />
            <LinkCard
              title="Delta Lake: High-Performance ACID Table Storage over
          Cloud Object Stores"
              tags={["big data", "storage"]}
              linkto="https://www.databricks.com/wp-content/uploads/2020/08/p975-armbrust.pdf"
              subTitle="The delta table format for big data lakehouse" />
            <LinkCard
              title="Presto: SQL on Everything"
              tags={["big data", "analytics"]}
              linkto="https://trino.io/Presto_SQL_on_Everything.pdf"
              subTitle="SQL Query engine for interactive analytics in big data." />
          </TabsContent>
          <TabsContent value="blogs">
           <LinkCard
              title="Fixing Go's Linker"
              subTitle="Uber's journey into Go's linker internals"
              tags={["go", "linker", "uber"]}
              linkto="https://www.uber.com/en-IN/blog/fixing-gos-linker/?uclick_id=e30f9188-99b2-40b7-a79f-a66a169984bb" />
            <LinkCard
              title="How Meta built the infrastructure for Threads"
              subTitle="The infra that powers theads"
              tags={["infrastructure", "meta"]}
              linkto="https://engineering.fb.com/2023/12/19/core-infra/how-meta-built-the-infrastructure-for-threads/" />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
