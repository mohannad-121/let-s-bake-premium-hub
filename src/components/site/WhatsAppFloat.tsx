import { MessageCircle } from "lucide-react";
import { WA_BASE } from "@/lib/site-data";
import { useLang } from "@/lib/i18n";

export function WhatsAppFloat() {
  const { t } = useLang();
  return (
    <a
      href={WA_BASE}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-5 ltr:right-5 rtl:left-5 z-50 group flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-luxe hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-semibold">{t("Order on WhatsApp", "اطلب عبر واتساب")}</span>
    </a>
  );
}