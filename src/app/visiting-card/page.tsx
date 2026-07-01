import { Metadata } from "next";
import { cookies } from "next/headers";
import { CardDisplay } from "@/components/visiting-card/CardDisplay";
import { LoginForm } from "@/components/visiting-card/LoginForm";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Visiting Cards | Oasis Energy",
  description: "Digital visiting cards for Oasis Energy team members.",
};

export default async function VisitingCardPage() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get("oasis_admin_auth")?.value === "true";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050B14] py-12 md:py-20">
      <div className="container mx-auto px-4">
        <FadeIn className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Digital <span className="text-emerald-600">Visiting Cards</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            View, select, and export premium brand identity cards. Suitable for high-end print or digital networking.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          {isAuthenticated ? <CardDisplay /> : <LoginForm />}
        </FadeIn>
      </div>
    </div>
  );
}
