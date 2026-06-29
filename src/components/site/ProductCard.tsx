import { Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight } from "lucide-react";
import type { Product } from "@/lib/site-data";
import { categoryLabel, getProductImage, PRODUCT_IMAGE_FALLBACK, productDescription, productFallbackImage, productName, waLink } from "@/lib/site-data";
import { useLang } from "@/lib/i18n";

export function ProductCard({ p }: { p: Product }) {
  const { lang, t } = useLang();
  const name = productName(p, lang);
  const image = getProductImage(p);
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-card border border-border/60 shadow-soft hover:shadow-luxe transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-[5/4] overflow-hidden bg-gradient-warm">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={event => {
            const image = event.currentTarget;
            image.onerror = null;
            image.src = productFallbackImage(p) || PRODUCT_IMAGE_FALLBACK;
          }}
        />
        <span className="absolute top-3 ltr:left-3 rtl:right-3 rounded-full bg-cream/90 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-chocolate-deep">
          {categoryLabel(p.category, lang)}
        </span>
        <span className="absolute top-3 ltr:right-3 rtl:left-3 rounded-full bg-gradient-rich px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cream">
          {p.line}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg text-chocolate-deep line-clamp-2">{name}</h3>
        <p className="mt-1 text-sm text-chocolate-deep/70 line-clamp-1" dir="rtl">{p.nameAr}</p>
        <p className="mt-1 text-xs font-semibold text-caramel">{p.weight}</p>
        <p className="mt-3 text-sm text-muted-foreground line-clamp-2 flex-1">{productDescription(p, lang)}</p>
        <div className="mt-5 flex gap-2">
          <Link to="/products/$slug" params={{ slug: p.slug }} className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-chocolate px-3 py-2 text-xs font-semibold text-cream hover:bg-chocolate-deep transition-colors">
            {t("View Details", "التفاصيل")} <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
          </Link>
          <a href={waLink(p.whatsappMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-3 py-2 text-xs font-semibold text-white hover:opacity-90" aria-label="Order on WhatsApp">
            <MessageCircle className="h-3.5 w-3.5" />
            <span className="sr-only">{t("Order on WhatsApp", "اطلب عبر واتساب")}</span>
          </a>
        </div>
      </div>
    </article>
  );
}
