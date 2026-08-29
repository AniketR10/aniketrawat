import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formLink = process.env.GOOGLE_FORM_LINK;
  const fieldIdName = process.env.GOOGLE_FORM_FIELD_ID_NAME;
  const fieldIdEmail = process.env.GOOGLE_FORM_FIELD_ID_EMAIL;
  const fieldIdMessage = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE;
  const fieldIdSocial = process.env.GOOGLE_FORM_FIELD_ID_SOCIAL;

  if (
    !formLink ||
    !fieldIdName ||
    !fieldIdEmail ||
    !fieldIdMessage ||
    !fieldIdSocial
  ) {
    return new NextResponse("Please configure the env variables", {
      status: 500,
    });
  }

  try {
    const { name, email, message, social } = await req.json();

    if (!name || !email || !message) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const params = new URLSearchParams({
      [fieldIdName]: name,
      [fieldIdEmail]: email,
      [fieldIdMessage]: message,
      [fieldIdSocial]: social ?? "",
    });

    await fetch(`${formLink}/formResponse?${params.toString()}`);

    return NextResponse.json("Success!");
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
