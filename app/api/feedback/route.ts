import { NextRequest, NextResponse } from "next/server";
import { createFeedback } from "@/lib/actions/general.action";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { interviewId, userId, transcript, feedbackId } = body;

    const result = await createFeedback({
      interviewId,
      userId,
      transcript,
      feedbackId,
    });

    if (result.success) {
      return NextResponse.json(result);
    } else {
      return NextResponse.json(
        { error: "Failed to create feedback" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error creating feedback:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
