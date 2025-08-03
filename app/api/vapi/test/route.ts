import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Check environment variables
    const vapiToken = process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN;
    const workflowId = process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID;

    if (!vapiToken) {
      return NextResponse.json(
        { error: "VAPI token is not configured" },
        { status: 500 }
      );
    }

    if (!workflowId) {
      return NextResponse.json(
        { error: "VAPI workflow ID is not configured" },
        { status: 500 }
      );
    }

    // Test VAPI connection by making a simple API call
    const response = await fetch("https://api.vapi.ai/assistant", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${vapiToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        {
          error: "VAPI API call failed",
          status: response.status,
          statusText: response.statusText,
          details: errorText,
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: "VAPI connection successful",
      tokenConfigured: !!vapiToken,
      workflowIdConfigured: !!workflowId,
    });
  } catch (error: any) {
    console.error("VAPI test error:", error);
    return NextResponse.json(
      {
        error: "VAPI test failed",
        details: error.message,
        stack: error.stack,
      },
      { status: 500 }
    );
  }
}
