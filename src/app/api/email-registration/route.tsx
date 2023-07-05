import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

type EventProps = {
  id: string;
  title: string;
  city: string;
  description: string;
  image: string;
  emails_registered: string[];
};

const buildPath = () => path.join(process.cwd(), "src", "data", "data.json");

const extractData = (filePath: string) =>
  JSON.parse(fs.readFileSync(filePath).toString());

export async function POST(request: NextRequest) {
  const filePath = buildPath();
  const { events_categories, all_events } = extractData(filePath);
  const { email, eventId } = await request.json();
  //optimize in the future
  let dupicateErr = false;

  if (!all_events)
    return NextResponse.json({
      status: 404,
      type: "error",
      message: `Events data not found.`,
    });

  if (!email || !email.includes("@"))
    return NextResponse.json({
      status: 422,
      type: "error",
      message: `Invalid email address.`,
    });

  const newAllEvents = all_events.map((event: EventProps) => {
    if (event.id === eventId) {
      if (event.emails_registered.includes(email)) {
        dupicateErr = true;
        return event;
      } else {
        return {
          ...event,
          emails_registered: [...event.emails_registered, email],
        };
      }
    }
    return event;
  });

  fs.writeFileSync(
    filePath,
    JSON.stringify({ events_categories, all_events: newAllEvents })
  );

  if (dupicateErr)
    return NextResponse.json({
      status: 409,
      type: "error",
      message: `This email has already been registered.`,
    });
  else
    return NextResponse.json({
      status: 200,
      type: "success",
      message: `You have been registered successfully with the email: ${email} for the event: ${eventId}`,
    });
}
