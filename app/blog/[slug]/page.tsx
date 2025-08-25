import type { Metadata } from "next/dist/types";

interface Params {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [
    { slug: "post-1" },
    { slug: "post-2" },
  ];
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  return { title: `Post: ${slug}` };
}

export default function Page({ params }: Params) {
  return (
    <>
      <p>Dile</p>
      <p>Test</p>
    </>
  );
}