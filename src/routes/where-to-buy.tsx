import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MapPin, Phone, MessageCircle, Navigation } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "./index";
import { useLang } from "@/lib/i18n";
import { distributors, waLink } from "@/lib/site-data";

export const Route = createFileRoute("/where-to-buy")({
  head: () => ({
    meta: [
      { title: "Where to Buy — Let's Bake" },
      { name: "description", content: "Find Let's Bake products at distributors and stores across Jordan." },
      { property: "og:title", content: "Where to Buy Let's Bake" },
      { property: "og:description", content: "Distributors in Amman, Irbid, Zarqa, Aqaba and more." },
    ],
  }),
  component: WhereToBuy,
});

function WhereToBuy() {
  const { t, lang } = useLang();
  const cities = useMemo(() => ["all", ...Array.from(new Set(distributors.map(d => d.city)))], []);
  const [city, setCity] = useState("all");
  const list = useMemo(() => city === "all" ? distributors : distributors.filter(d => d.city === city), [city]);

  return (
    <SiteLayout>
      <section className="bg-gradient-warm py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t("Where to Buy", "أين تشتري")} title={t("Find Let's Bake near you", "اعثر على ليتس بيك بالقرب منك")} sub={t("Distributors and stores across Jordan stocking our retail and wholesale range.", "موزعون ومحلات في أنحاء الأردن.")} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-10">
        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {cities.map(c => (
              <button key={c} onClick={() => setCity(c)} className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${city === c ? "bg-chocolate text-cream border-chocolate" : "bg-card border-border text-chocolate-deep hover:bg-gold-soft"}`}>{c === "all" ? t("All Cities", "كل المدن") : c}</button>
            ))}
          </div>
          <div className="grid gap-4">
            {list.map((d, i) => (
              <div key={i} className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft hover:shadow-luxe transition-all">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg text-chocolate-deep truncate">{d.name[lang]}</h3>
                    <p className="mt-1 text-xs text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3 text-caramel" />{d.city} • {d.area}</p>
                    <p className="mt-2 text-sm text-chocolate-deep/80 flex items-center gap-1.5"><Phone className="h-4 w-4 text-caramel" /><span dir="ltr">{d.phone}</span></p>
                  </div>
                  <div className="flex flex-col gap-2 shrink-0">
                    <a href={`https://maps.google.com/?q=${encodeURIComponent(d.name.en + " " + d.city)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full bg-chocolate px-3 py-1.5 text-[11px] font-semibold text-cream"><Navigation className="h-3 w-3" />{t("Directions", "الاتجاهات")}</a>
                    <a href={waLink(`Hi, do you have Let's Bake products available at ${d.name.en}?`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full bg-[#25D366] px-3 py-1.5 text-[11px] font-semibold text-white"><MessageCircle className="h-3 w-3" />WhatsApp</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-warm shadow-luxe min-h-[400px]">
          {/* TODO: Replace with real Google Maps embed once API key is available */}
          <div className="absolute inset-0 grid place-items-center text-center p-10">
            <div>
              <MapPin className="h-12 w-12 text-chocolate mx-auto" />
              <p className="mt-3 font-display text-xl text-chocolate-deep">{t("Distributor Map", "خريطة الموزعين")}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t("Interactive map placeholder — wire to Google Maps.", "موضع خريطة تفاعلية — يتم ربطها بخرائط جوجل.")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-rich text-cream p-8 sm:p-12 text-center shadow-luxe">
          <h2 className="font-display text-2xl sm:text-4xl">{t("Are you a distributor?", "هل أنت موزع؟")}</h2>
          <p className="mt-3 text-cream/80 max-w-2xl mx-auto">{t("Join the Let's Bake distribution network and grow with one of Jordan's leading baking product brands.", "انضم لشبكة توزيع ليتس بيك ونمِّ أعمالك مع واحدة من أبرز علامات الخبز في الأردن.")}</p>
          <a href={waLink("Hi! I'd like to join the Let's Bake distribution network.")} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-chocolate-deep">{t("Join the Network", "انضم للشبكة")}</a>
        </div>
      </section>
    </SiteLayout>
  );
}