import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { COMPANY_EMAIL, COMPANY_LOCATION_TEXT, COMPANY_PHONE_INTERNATIONAL, COMPANY_PHONE_LOCAL, FACEBOOK_URL, WA_BASE } from "@/lib/site-data";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="mt-24 bg-gradient-rich text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-gold">
              <span className="font-display text-lg text-chocolate-deep">L</span>
            </div>
            <div>
              <div className="font-display text-xl">Let's Bake</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-gold-soft">Thimar Al-Rabie</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-cream/80">
            {t(
              "Premium baking products and pastry ingredients made in Jordan, trusted by homes, bakeries and sweet shops.",
              "منتجات خبز وحلويات فاخرة صنعت في الأردن، موثوقة من قبل البيوت والمخابز ومحلات الحلويات.",
            )}
          </p>
          <div className="mt-5 flex gap-2">
            <a href={WA_BASE} className="grid h-9 w-9 place-items-center rounded-full bg-cream/10 hover:bg-gold transition-colors" aria-label="WhatsApp"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full bg-cream/10 hover:bg-gold transition-colors" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-cream/10 hover:bg-gold transition-colors" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-soft">{t("Explore", "استكشف")}</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li><Link to="/products" className="hover:text-gold">{t("Products", "المنتجات")}</Link></li>
            <li><Link to="/recipes" className="hover:text-gold">{t("Recipes", "الوصفات")}</Link></li>
            <li><Link to="/reels" className="hover:text-gold">{t("Reels", "ريلز")}</Link></li>
            <li><Link to="/wholesale" className="hover:text-gold">{t("Wholesale", "الجملة")}</Link></li>
            <li><Link to="/where-to-buy" className="hover:text-gold">{t("Where to Buy", "أين تشتري")}</Link></li>
            <li><Link to="/catalogues" className="hover:text-gold">{t("Catalogues", "الكتالوجات")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-soft">{t("Categories", "الفئات")}</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li><Link to="/products" className="hover:text-gold">{t("Cake Mixes", "خلطات الكيك")}</Link></li>
            <li><Link to="/products" className="hover:text-gold">{t("Creams", "الكريمات")}</Link></li>
            <li><Link to="/products" className="hover:text-gold">{t("Custard", "الكاسترد")}</Link></li>
            <li><Link to="/products" className="hover:text-gold">{t("Caramel Cream", "كريم الكراميل")}</Link></li>
            <li><Link to="/products" className="hover:text-gold">{t("Fillings", "الحشوات")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-soft">{t("Contact", "تواصل")}</h4>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold" /><span>{COMPANY_LOCATION_TEXT}</span></li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-gold" /><a href={`tel:${COMPANY_PHONE_INTERNATIONAL}`} dir="ltr" className="hover:text-gold">{COMPANY_PHONE_LOCAL}</a></li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-gold" /><a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-gold">{COMPANY_EMAIL}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-2 px-4 py-5 sm:px-6 lg:px-8 text-xs text-cream/60">
          <p>© {new Date().getFullYear()} Thimar Al-Rabie Food Technology. {t("All rights reserved.", "جميع الحقوق محفوظة.")}</p>
          <p>{t("Crafted with care in Amman, Jordan.", "صُمم بعناية في عمان، الأردن.")}</p>
        </div>
      </div>
    </footer>
  );
}
