"use client";
import LoanDetails from "@/components/loan-details";
import { Params } from "next/dist/server/request/params";
import { useEffect, useState } from "react";

type paramsType = Promise<{ slug: string }>;
export default function ServicePage({ params }: { params: paramsType }) {
  const [slug, setSlog] = useState("");

  useEffect(() => {
    const waitingForSlug = async () => {
      const { slug } = await params;
      setSlog(slug);
    };
    waitingForSlug();
  }, [setSlog]);
  return (
    <div>
      <LoanDetails slug={slug} />
    </div>
  );
}
