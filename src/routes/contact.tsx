import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "./index";
import { useLang } from "@/lib/i18n";
import { WA_BASE } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Let's Bake" },
      { name: "description", content: "Contact Let's Bake in Amman, Jordan. WhatsApp orders, phone, email and business hours." },
      { property: "og:title", content: "Contact Let's Bake" },
      { property: "og:description", content: "Get in touch — Amman, Jordan." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(6).max(30),
  message: z.string().trim().min(5).max(1000),
});

function ContactPage() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) { toast.error(t("Please check your inputs.", "يرجى التحقق من البيانات.")); return; }
    // TODO: connect to backend — POST to /api/contact
    toast.success(t("Message sent! We'll reply shortly.", "تم الإرسال! سنرد قريباً."));
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <SiteLayout>
      <section className="bg-gradient-warm py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t("Contact", "تواصل")} title={t("Let's talk baking", "لنتحدث عن الخبز")} sub={t("Our team is ready to help — whether you're a home baker or running a bakery chain.", "فريقنا جاهز للمساعدة — سواء كنت خبّازاً منزلياً أو تدير سلسلة مخابز.")} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {[
            { icon: MapPin, l: t("Location", "الموقع"), v: t("Amman, Jordan", "عمان، الأردن") },
            { icon: Phone, l: t("Phone", "الهاتف"), v: "+962 79 000 0000" },
            { icon: Mail, l: t("Email", "البريد الإلكتروني"), v: "info@letsbake.jo" },
            { icon: Clock, l: t("Business Hours", "ساعات العمل"), v: t("Sun – Thu: 9:00 – 18:00", "الأحد – الخميس: 9:00 – 18:00") },
          ].map((b, i) => (
            <div key={i} className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-soft">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold text-chocolate-deep shrink-0"><b.icon className="h-5 w-5" /></div>
              <div className="min-w-0">
                <div className="text-xs font-semibold uppercase tracking-wider text-caramel">{b.l}</div>
                <div className="text-base text-chocolate-deep" dir={b.l === t("Phone", "الهاتف") || b.l === t("Email", "البريد الإلكتروني") ? "ltr" : undefined}>{b.v}</div>
              </div>
            </div>
          ))}

          <div className="flex flex-wrap gap-3 pt-2">
            <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-soft"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-chocolate-deep"><Instagram className="h-4 w-4" /> Instagram</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-chocolate-deep"><Facebook className="h-4 w-4" /> Facebook</a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-gradient-warm aspect-[16/9] grid place-items-center">
            <div className="text-center p-6"><MapPin className="h-10 w-10 text-chocolate mx-auto" /><p className="mt-2 text-sm text-muted-foreground">{t("Google Maps placeholder", "موضع خرائط جوجل")}</p></div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-luxe self-start">
          <h2 className="font-display text-2xl text-chocolate-deep">{t("Send us a message", "أرسل لنا رسالة")}</h2>
          <div className="mt-6 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <FormField label={t("Name", "الاسم")} value={form.name} onChange={v => setForm({ ...form, name: v })} />
              <FormField label={t("Phone", "الهاتف")} value={form.phone} onChange={v => setForm({ ...form, phone: v })} />
            </div>
            <FormField label={t("Email", "البريد")} value={form.email} onChange={v => setForm({ ...form, email: v })} type="email" />
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-caramel">{t("Message", "الرسالة")}</label>
              <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={5} className="mt-1.5 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
            </div>
            <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-rich px-6 py-3 text-sm font-semibold text-cream shadow-soft hover:shadow-luxe">{t("Send Message", "إرسال")}</button>
          </div>
        </form>
      </section>
    </SiteLayout>
  );
}

function FormField({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-caramel">{label}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} className="mt-1.5 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
    </div>
  );
}