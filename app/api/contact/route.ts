import { NextResponse } from "next/server";

const RESEND_API_KEY = "re_93S4BZJF_Mzo59nyzWtVa3jQkoT9MzQ5n";

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json();

    // Validación rápida
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Llamada directa al API de Resend
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Desarrollo Discor <onboarding@resend.dev>",
        to: "desarrollo@discor.com.mx",
        subject: `Nuevo contacto de ${name}`,
        html: `
          <h2>Nuevo mensaje desde la web</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Correo:</strong> ${email}</p>
          ${
            company
              ? `<p><strong>Empresa:</strong> ${company}</p>`
              : ""
          }
          <p><strong>Mensaje:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    const data = await r.json();
    console.log("Resend response:", data);

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("CONTACT FORM ERROR", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}