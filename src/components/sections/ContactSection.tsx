"use client";

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react"

type FormState = {
  name: string
  phone: string
  email: string
  city: string
  interest: string
  message: string
}

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  city: "",
  interest: "",
  message: "",
}

const interests = [
  "Buy a Wind Turbine (Residential)",
  "Buy a Wind Turbine (Commercial/Industrial)",
  "EPC Partnership",
  "Distributor / Franchise Inquiry",
  "Site Assessment / Feasibility Study",
  "Financing Options",
  "Government / Institutional Project",
  "Other",
]

const contactDetails = [
  {
    icon: Phone,
    label: "Call / WhatsApp",
    value: "+91 98765 43210",
    link: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@oasisenergy.in",
    link: "mailto:info@oasisenergy.in",
  },
  {
    icon: MapPin,
    label: "Head Office",
    value: "Jaipur, Rajasthan, India",
    link: "#",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon–Sat: 9 AM – 6 PM",
    link: "#",
  },
]

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // Post to Next.js API
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false)
  }

  return (
    <section className="py-24 bg-white container mx-auto px-4" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-6 text-accent border-accent/30 bg-accent/5 font-semibold px-4 py-1.5"
          >
            Get in Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight mb-6 font-heading">
            Start Your <span className="text-gradient-brand">Energy Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Whether you're ready to install or just exploring, reach out to us.
            Our energy advisors will respond within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-primary rounded-[2rem] p-10 text-white shadow-2xl shadow-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-2xl font-bold mb-8 font-heading relative z-10">Contact Details</h3>
              <div className="space-y-8 relative z-10">
                {contactDetails.map((c) => {
                  const Icon = c.icon
                  return (
                    <a
                      key={c.label}
                      href={c.link}
                      className="flex items-center gap-5 group"
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 shrink-0 border border-white/5 group-hover:bg-accent/20 group-hover:border-accent/50 transition-all duration-300">
                        <Icon className="size-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-white/50 font-bold uppercase tracking-widest mb-1">
                          {c.label}
                        </p>
                        <p className="text-base font-semibold text-white group-hover:text-accent transition-colors">
                          {c.value}
                        </p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Card className="border-gray-100 bg-slate-50 shadow-sm rounded-[2rem]">
              <CardContent className="p-8">
                <p className="font-bold text-primary mb-3 text-lg font-heading">Quick Response via WhatsApp</p>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Prefer WhatsApp? Message us directly for a faster response from our technical team.
                </p>
                <Button
                  asChild
                  className="w-full bg-[#25D366] hover:bg-[#1da851] text-white border-0 font-bold h-12 rounded-xl text-base shadow-lg shadow-[#25D366]/20 transition-all"
                >
                  <a
                    href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20Oasis%20Energy%20wind%20turbines"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open WhatsApp Chat
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <Card className="border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2.5rem] overflow-hidden">
              <CardContent className="p-8 sm:p-12">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center gap-6 py-16 text-center">
                    <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="size-12 text-accent" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-primary font-heading">
                      Inquiry Received!
                    </h3>
                    <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. An Oasis Energy advisor will review your details and contact you within one business day.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4 border-gray-200 text-primary hover:bg-slate-50 font-bold h-12 px-8 rounded-xl"
                      onClick={() => { setSubmitted(false); setForm(initialForm) }}
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-sm font-bold text-slate-700">
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your full name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="h-12 bg-slate-50 border-gray-200 focus-visible:ring-accent rounded-xl"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="phone" className="text-sm font-bold text-slate-700">
                          Phone Number <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          className="h-12 bg-slate-50 border-gray-200 focus-visible:ring-accent rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-sm font-bold text-slate-700">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={handleChange}
                          className="h-12 bg-slate-50 border-gray-200 focus-visible:ring-accent rounded-xl"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="city" className="text-sm font-bold text-slate-700">
                          City / District <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="city"
                          name="city"
                          placeholder="e.g. Jodhpur, Jaisalmer"
                          required
                          value={form.city}
                          onChange={handleChange}
                          className="h-12 bg-slate-50 border-gray-200 focus-visible:ring-accent rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="interest" className="text-sm font-bold text-slate-700">
                        I Am Interested In <span className="text-red-500">*</span>
                      </Label>
                      <select
                        id="interest"
                        name="interest"
                        required
                        value={form.interest}
                        onChange={handleChange}
                        className="flex h-12 w-full items-center justify-between rounded-xl border border-gray-200 bg-slate-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="" disabled>Select your interest</option>
                        {interests.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-sm font-bold text-slate-700">
                        Additional Details
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your energy requirements, site details, or any questions..."
                        value={form.message}
                        onChange={handleChange}
                        className="min-h-[140px] resize-none bg-slate-50 border-gray-200 focus-visible:ring-accent rounded-xl p-4"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full h-14 bg-primary hover:bg-primary/90 text-white border-0 font-bold text-lg rounded-xl shadow-lg transition-all"
                    >
                      {loading ? (
                        <div className="flex items-center gap-2">
                          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                          Sending...
                        </div>
                      ) : (
                        <>
                          Send Inquiry <Send className="size-5 ml-2" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center font-medium mt-6">
                      By submitting, you agree to be contacted by our team regarding your inquiry.
                      We respect your privacy and never spam.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
