import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    id: 1,
    name: "Iphone 15",
    price: "1500",
  });
}
