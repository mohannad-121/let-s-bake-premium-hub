import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MessageCircle, CheckCircle2, Factory, Repeat, Users, BadgeCheck } from "lucide-react";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "./index";
import { useLang } from "@/lib/i18n";
import { categories, waLink } from "@/lib/site-data";

export const Route = createFileRoute("/wholesale")({
  head: () => ({
    meta: [
      { title: "Wholesale & B2B — Let's Bake" },
      { name: "description", content: "Wholesale baking ingredients in Jordan for bakeries, cafés, restaurants, sweet shops and distributors." },
      { property: "og:title", content: "Wholesale Solutions for Bakeries & Sweet Shops" },
      { property: "og:description", content: "Consistent quality, easy monthly orders, dedicated sales team." },
    ],
  }),
  component: WholesalePage,
});

const schema = z.object({
  business: z.string().trim().min(2).max(120),
  contact: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(6).max(30),
  city: z.string().trim().min(2).max(60),
  type: z.string().min(1),
  interests: z.array(z.string()).default([]),
  quantity: z.string().trim().max(100).optional(),
  message: z.string().trim().max(800).optional(),
});

function WholesalePage() {
  const { t, lang } = useLang();
  const [form, setForm] = useState({ business: "", contact: "", phone: "", city: "", type: "Bakery", interests: [] as string[], quantity: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const businessTypes = [
    { v: "Bakery", l: t("Bakery", "مخبز") },
    { v: "Cafe", l: t("Café", "مقهى") },
    { v: "Sweet Shop", l: t("Sweet Shop", "محل حلويات") },
    { v: "Restaurant", l: t("Restaurant", "مطعم") },
    { v: "Distributor", l: t("Distributor", "موزع") },
    { v: "Other", l: t("Other", "أخرى") },
  ];

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast.error(t("Please complete required fields.", "يرجى إكمال الحقول المطلوبة."));
      return;
    }
    // TODO: connect to backend — POST to /api/wholesale-requests
    setSubmitted(true);
    toast.success(t("Request received. Our sales team will contact you within 24h.", "تم استلام الطلب. سيتواصل فريق المبيعات خلال 24 ساعة."));
  };

  const toggleInterest = (k: string) =>
    setForm(f => ({ ...f, interests: f.interests.includes(k) ? f.interests.filter(x => x !== k) : [...f.interests, k] }));

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-rich text-cream">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">{t("Wholesale & B2B", "الجملة والأعمال")}</span>
            <h1 className="mt-5 font-display text-4xl sm:text-6xl leading-tight">{t("Wholesale solutions for bakeries & sweet shops", "حلول الجملة للمخابز ومحلات الحلويات")}</h1>
            <p className="mt-5 text-cream/85 max-w-xl text-lg">{t("Let's Bake supports businesses with a complete portfolio of baking and pastry products — consistent quality, easy monthly ordering, dedicated sales team.", "ليتس بيك يدعم الأعمال بمحفظة كاملة من منتجات الخبز والحلويات — جودة ثابتة، طلب شهري سهل، وفريق مبيعات مخصص.")}</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: BadgeCheck, t: t("Consistent quality", "جودة ثابتة") },
                { icon: Factory, t: t("Multiple product lines", "منتجات متنوعة") },
                { icon: Repeat, t: t("Easy monthly ordering", "طلب شهري سهل") },
                { icon: Users, t: t("Dedicated sales team", "فريق مبيعات مخصص") },
              ].map((b, i) => (
                <div key={i} className="flex items-start gap-2 text-sm"><b.icon className="h-5 w-5 text-gold mt-0.5" /><span>{b.t}</span></div>
              ))}
            </div>
            <a href={waLink("Hi! I'd like to discuss wholesale pricing for my business.")} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-luxe"><MessageCircle className="h-4 w-4" /> {t("Send Wholesale Request on WhatsApp", "أرسل طلب الجملة عبر واتساب")}</a>
          </div>

          <form onSubmit={onSubmit} className="rounded-3xl bg-card text-foreground p-6 sm:p-8 shadow-luxe">
            <h2 className="font-display text-2xl text-chocolate-deep">{t("Request Wholesale Pricing", "طلب أسعار الجملة")}</h2>
            {submitted ? (
              <div className="mt-8 flex flex-col items-center text-center py-10">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-gold-soft"><CheckCircle2 className="h-8 w-8 text-chocolate" /></div>
                <p className="mt-4 font-display text-xl text-chocolate-deep">{t("Thank you!", "شكراً لك!")}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t("Our sales team will reach out within 24 hours.", "سيتواصل فريقنا خلال 24 ساعة.")}</p>
              </div>
            ) : (
              <div className="mt-6 grid gap-4">
                <Field label={t("Business name", "اسم المنشأة")} value={form.business} onChange={v => setForm({ ...form, business: v })} required />
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label={t("Contact person", "الشخص المسؤول")} value={form.contact} onChange={v => setForm({ ...form, contact: v })} required />
                  <Field label={t("Phone number", "رقم الهاتف")} value={form.phone} onChange={v => setForm({ ...form, phone: v })} required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label={t("City", "المدينة")} value={form.city} onChange={v => setForm({ ...form, city: v })} required />
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-caramel">{t("Business type", "نوع المنشأة")}</label>
                    <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} className="mt-1.5 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold">
                      {businessTypes.map(b => <option key={b.v} value={b.v}>{b.l}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-caramel">{t("Products interested in", "المنتجات التي تهمك")}</label>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {categories.slice(0, 7).map(c => (
                      <button type="button" key={c.key} onClick={() => toggleInterest(c.key)} className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-colors ${form.interests.includes(c.key) ? "bg-chocolate text-cream border-chocolate" : "bg-card border-border text-chocolate-deep hover:bg-gold-soft"}`}>{c[lang]}</button>
                    ))}
                  </div>
                </div>
                <Field label={t("Estimated monthly quantity", "الكمية الشهرية التقريبية")} value={form.quantity} onChange={v => setForm({ ...form, quantity: v })} placeholder={t("e.g. 200 kg / month", "مثال: 200 كغم/شهر")} />
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-caramel">{t("Message", "رسالتك")}</label>
                  <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={3} className="mt-1.5 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
                </div>
                <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-rich px-6 py-3 text-sm font-semibold text-cream shadow-soft hover:shadow-luxe">{t("Submit Request", "إرسال الطلب")}</button>
              </div>
            )}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, value, onChange, required, placeholder }: { label: string; value: string | undefined; onChange: (v: string) => void; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-caramel">{label}{required && <span className="text-destructive"> *</span>}</label>
      <input value={value ?? ""} placeholder={placeholder} onChange={e => onChange(e.target.value)} className="mt-1.5 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
    </div>
  );
}