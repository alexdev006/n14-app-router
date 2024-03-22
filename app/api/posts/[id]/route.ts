import { NextResponse } from "next/server";

interface Post {
  id: number;
  title: string;
  description: string;
}

const posts: Post[] = [
  { title: "title 1", description: "desc 1", id: 1 },
  { title: "title 2", description: "desc 3", id: 2 },
  { title: "title 3", description: " desc 3", id: 3 },
];

export async function GET(request: Request, context: any) {
  const { params } = context;
  return NextResponse.json({
    post: posts.find((x: any) => x.id.toString() === params.id),
  });
}
