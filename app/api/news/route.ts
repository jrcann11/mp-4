import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const NEWS_API_KEY = process.env.API_KEY;
const BASE_URL = "https://gnews.io/api/v4/top-headlines";

export async function GET(request: Request): Promise<NextResponse> {
    const { searchParams } = new URL(request.url);
    const country = searchParams.get("country");

    if (!country) {
        return NextResponse.json({ error: "No [country] provided" }, { status: 400 });
    }

    const url = `${BASE_URL}?category=general&lang=en&country=${country}&max=10&apikey=${NEWS_API_KEY}`;

    const res = await fetch(url);

    if (!res.ok) {
        return NextResponse.json({ error: "Failed to fetch news" }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
}