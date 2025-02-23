"use client";
import LoanDetails from "@/components/loan-details";
import { useEffect, useState } from "react";

export default function ServicePage({ params }: { params: { slug: string } }) {
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
