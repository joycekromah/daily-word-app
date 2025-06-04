import { NextResponse } from "next/server";
import { generate } from "random-words";

export async function GET() {
    const word = generate(); //Testar ett statiskt ord, men vi måste randomize på något vis
    const apiURL = process.env.NEXT_PUBLIC_API_URL;
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    const fullUrl = apiURL + word + "?key=" + apiKey;

    const response = await fetch(fullUrl);
    const data = await response.json();

    // Det fullständiga vi vill hämta från API:et, vi behöver lägga till typ audio
    const result = {
        word: data[0].meta.id.split(":")[0],
        shortdef: data[0].shortdef[0],
      };

    return NextResponse.json(result);
}