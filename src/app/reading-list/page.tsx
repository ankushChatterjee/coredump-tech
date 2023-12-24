"use client"

import LinkCard from "@/components/coredump/link-card"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function ReadingList() {
  return (
    <main className="lg:flex min-h-screen lg:flex-col lg:items-center lg:justify-between p-12">
      <div className="lg:max-w-5xl w-full lg:items-center lg:justify-between font-mono">
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
              title="Bigtable: A Distributed Storage System for Structured Data"
              tags={["big data", "storage"]}
              linkto="https://static.googleusercontent.com/media/research.google.com/en//archive/bigtable-osdi06.pdf"
              subTitle="Google's paper on the bigtable format" />
            <LinkCard
              title="Presto: SQL on Everything"
              tags={["big data", "analytics"]}
              linkto="https://trino.io/Presto_SQL_on_Everything.pdf"
              subTitle="SQL Query engine for interactive analytics in big data." />
            <LinkCard 
              title="Napa: Powering Scalable Data Warehousing with Robust Query Performance at Google"
              tags={["big data", "storage", "analytics"]}
              linkto="https://research.google/pubs/napa-powering-scalable-data-warehousing-with-robust-query-performance-at-google/"
              subTitle="A customizable data warehouse technology for google" />
            <LinkCard 
              title="Dynamo: Amazon’s Highly Available Key-value Store "
              tags={["databases"]}
              linkto="https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf"
              subTitle="Foundational paper on AWS DynamoDB" />
            <LinkCard 
              title="Gorilla: A Fast, Scalable, In-Memory Time Series Database "
              tags={["databases", "time series"]}
              linkto="https://drive.google.com/file/d/13jFQkD2OmydymjPFLnsvsQUwMwhmynIh/view"
              subTitle="A great paper which explains the core ideas behind time-series databases" />
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
            <LinkCard
              title="How Levels.fyi scaled to millions of users with Google Sheets as a backend"
              subTitle="Frugal data storage using google sheets"
              tags={["database", "levels.fyi"]}
              linkto="https://www.levels.fyi/blog/scaling-to-millions-with-google-sheets.html" />
            <LinkCard
              title="Intelligent DNS based load balancing at Dropbox"
              subTitle="How dropbox makes its DNS faster"
              tags={["dns", "networking", "dropbox"]}
              linkto="https://dropbox.tech/infrastructure/intelligent-dns-based-load-balancing-at-dropbox" />
            <LinkCard
              title="Working with PostgreSQL (Zerodha)"
              subTitle="How India's largest stock broker *used to* use postgres"
              tags={["database", "postgres", "zerodha"]}
              linkto="https://dropbox.tech/infrastructure/intelligent-dns-based-load-balancing-at-dropbox" />
            <LinkCard
              title="The technology behind GitHub’s new code search"
              subTitle="How does github's code search work"
              tags={["storage", "search", "github"]}
              linkto="https://github.blog/2023-02-06-the-technology-behind-githubs-new-code-search/" />
            <LinkCard
              title="Using Server Sent Events to Simplify Real-time Streaming at Scale"
              subTitle="Managing BFCM events using server sent events"
              tags={["networking", "shopify"]}
              linkto="https://shopify.engineering/server-sent-events-data-streaming" />
            <LinkCard
              title="#BehindTheBug — Indexing Gone Wrong"
              subTitle="How wrong indexing crashed Swiggy instamart"
              tags={["database", "indexing", "swiggy"]}
              linkto="https://bytes.swiggy.com/behindthebug-indexing-gone-wrong-6b4d682fd805" />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
