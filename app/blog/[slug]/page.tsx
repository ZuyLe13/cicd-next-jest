import type { Metadata } from "next/dist/types";

type Params = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  return { title: `Post: ${slug}` };
}

export default function Page({ params }: Params) {
  return (
    <>
      {/* <h1>Slug: {slug}</h1> */}
      <p>Dile</p>
      <p>Test</p>
    </>
  );
}