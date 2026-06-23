import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact Us | Oasis Energy",
  description: "Get in touch with Oasis Energy for your renewable energy needs in Rajasthan. Inquire about Avatar wind turbines and partnership opportunities.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* HEADER SECTION */}
      <section className="bg-primary pt-32 pb-24 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-heading tracking-tight">
          Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-accent">Together</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto font-light">
          Whether you're looking for sustainable energy solutions or want to join our growing network of partners in Rajasthan.
        </p>
      </section>

      <div className="-mt-16">
        <ContactSection />
      </div>
    </div>
  );
}
