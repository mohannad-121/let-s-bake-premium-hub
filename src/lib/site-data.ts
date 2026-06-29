// Centralized sample data. Replace with backend-driven content when wiring CMS/DB.
import cakemix from "@/assets/cat-cakemix.jpg";
import cream from "@/assets/cat-cream.jpg";
import custard from "@/assets/cat-custard.jpg";
import jelly from "@/assets/cat-jelly.jpg";
import caramel from "@/assets/cat-caramel.jpg";
import fillings from "@/assets/cat-fillings.jpg";
import supplies from "@/assets/cat-supplies.jpg";
import recipeChoc from "@/assets/recipe-chocolate.jpg";
import recipeCust from "@/assets/recipe-custard.jpg";
import recipeFilled from "@/assets/recipe-filled.jpg";

export const WHATSAPP_NUMBER = "962790000000"; // TODO: replace with real number
export const WA_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export function waLink(message: string) {
  return `${WA_BASE}?text=${encodeURIComponent(message)}`;
}

export type CategoryKey =
  | "cake-mixes"
  | "creams"
  | "custard"
  | "jelly"
  | "caramel-cream"
  | "fillings"
  | "bakery-supplies"
  | "retail"
  | "wholesale";

export const categories: { key: CategoryKey; en: string; ar: string; image: string; desc: { en: string; ar: string } }[] = [
  { key: "cake-mixes", en: "Cake Mixes", ar: "خلطات الكيك", image: cakemix, desc: { en: "Soft, consistent cake bases for every occasion.", ar: "قواعد كيك ناعمة ومتناسقة لكل المناسبات." } },
  { key: "creams", en: "Creams", ar: "الكريمات", image: cream, desc: { en: "Whipping & topping creams with stable volume.", ar: "كريمات خفق وتزيين بثبات عالٍ." } },
  { key: "custard", en: "Custard", ar: "الكاسترد", image: custard, desc: { en: "Smooth vanilla custards with rich mouthfeel.", ar: "كاسترد ناعم بنكهة فانيليا غنية." } },
  { key: "jelly", en: "Jelly", ar: "الجيلي", image: jelly, desc: { en: "Vibrant fruit jellies in multiple flavors.", ar: "جيلي فواكه نابض بنكهات متعددة." } },
  { key: "caramel-cream", en: "Caramel Cream", ar: "كريم الكراميل", image: caramel, desc: { en: "Velvety caramel for desserts & toppings.", ar: "كراميل مخملي للحلويات والتزيين." } },
  { key: "fillings", en: "Fillings", ar: "الحشوات", image: fillings, desc: { en: "Chocolate, hazelnut & fruit fillings.", ar: "حشوات شوكولاتة وبندق وفواكه." } },
  { key: "bakery-supplies", en: "Bakery Supplies", ar: "مستلزمات المخابز", image: supplies, desc: { en: "Sprinkles, decorations & baking essentials.", ar: "مكسرات وزينة ومستلزمات أساسية." } },
  { key: "retail", en: "Retail Products", ar: "منتجات التجزئة", image: cream, desc: { en: "Home-pack sizes for everyday baking.", ar: "عبوات منزلية للخبز اليومي." } },
  { key: "wholesale", en: "Wholesale Products", ar: "منتجات الجملة", image: caramel, desc: { en: "Bulk packs designed for businesses.", ar: "عبوات كبيرة مصممة للأعمال." } },
];

export function categoryLabel(key: CategoryKey, lang: "en" | "ar") {
  const c = categories.find(x => x.key === key);
  return c ? c[lang] : key;
}

export type Product = {
  slug: string;
  name: { en: string; ar: string };
  category: CategoryKey;
  weight: string;
  image: string;
  description: { en: string; ar: string };
  usage: { en: string; ar: string };
  barcode: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "chocolate-cake-mix-500g",
    name: { en: "Chocolate Cake Mix", ar: "خلطة كيك الشوكولاتة" },
    category: "cake-mixes",
    weight: "500 g",
    image: cakemix,
    description: {
      en: "Rich cocoa cake mix that delivers a moist, tender crumb every single bake. Just add eggs, oil and milk.",
      ar: "خلطة كيك بالكاكاو الغني تمنحك قواماً طرياً ورطباً في كل مرة. أضف فقط البيض والزيت والحليب.",
    },
    usage: { en: "Mix 500g pack with 3 eggs, 1 cup oil, 1 cup milk. Bake 30 min at 180°C.", ar: "اخلط العبوة مع 3 بيضات وكوب زيت وكوب حليب. اخبز 30 دقيقة على 180 درجة." },
    barcode: "6 251234 000011",
    featured: true,
  },
  {
    slug: "vanilla-sponge-mix-500g",
    name: { en: "Vanilla Sponge Mix", ar: "خلطة سبونج الفانيليا" },
    category: "cake-mixes",
    weight: "500 g",
    image: cakemix,
    description: { en: "Light, airy vanilla sponge — perfect for layered cakes and rolls.", ar: "سبونج فانيليا خفيف ومنفوش — مثالي للكيك الطبقي والرول." },
    usage: { en: "Whip with eggs and water for 6 minutes. Bake 25 min at 170°C.", ar: "اخفق مع البيض والماء لمدة 6 دقائق. اخبز 25 دقيقة على 170." },
    barcode: "6 251234 000028",
  },
  {
    slug: "whipping-cream-1kg",
    name: { en: "Whipping Cream Powder", ar: "كريمة الخفق بودرة" },
    category: "creams",
    weight: "1 kg",
    image: cream,
    description: { en: "Stable, high-volume whipping cream with a delicate dairy flavor. Holds shape for hours.", ar: "كريمة خفق ثابتة بحجم عالٍ ونكهة حليب لطيفة. تحافظ على شكلها لساعات." },
    usage: { en: "Mix 100g powder with 250ml cold water. Whip 4 min at high speed.", ar: "اخلط 100 غرام مع 250 مل ماء بارد. اخفق 4 دقائق على سرعة عالية." },
    barcode: "6 251234 000035",
    featured: true,
  },
  {
    slug: "topping-cream-500g",
    name: { en: "Topping Cream", ar: "كريمة التزيين" },
    category: "creams",
    weight: "500 g",
    image: cream,
    description: { en: "Silky topping cream ideal for decorating cakes & cupcakes.", ar: "كريمة تزيين حريرية مثالية لتزيين الكيك والكاب كيك." },
    usage: { en: "Whip 250g with 500ml cold milk for 5 min.", ar: "اخفق 250 غرام مع 500 مل حليب بارد لمدة 5 دقائق." },
    barcode: "6 251234 000042",
  },
  {
    slug: "vanilla-custard-1kg",
    name: { en: "Vanilla Custard", ar: "كاسترد الفانيليا" },
    category: "custard",
    weight: "1 kg",
    image: custard,
    description: { en: "Golden, smooth custard with a clean vanilla finish.", ar: "كاسترد ذهبي ناعم بنكهة فانيليا نقية." },
    usage: { en: "Whisk 100g powder with 1L milk, bring to a gentle boil.", ar: "اخفق 100 غرام مع لتر حليب واغلِ على نار هادئة." },
    barcode: "6 251234 000059",
    featured: true,
  },
  {
    slug: "strawberry-jelly-80g",
    name: { en: "Strawberry Jelly", ar: "جيلي الفراولة" },
    category: "jelly",
    weight: "80 g",
    image: jelly,
    description: { en: "Bright strawberry jelly with natural fruit aroma.", ar: "جيلي فراولة منعش بنكهة فواكه طبيعية." },
    usage: { en: "Dissolve in 400ml hot water, chill 3 hours.", ar: "أذب في 400 مل ماء ساخن وبرّد 3 ساعات." },
    barcode: "6 251234 000066",
  },
  {
    slug: "caramel-cream-1kg",
    name: { en: "Caramel Cream", ar: "كريم الكراميل" },
    category: "caramel-cream",
    weight: "1 kg",
    image: caramel,
    description: { en: "Velvety caramel sauce for layering, drizzling and filling.", ar: "صلصة كراميل مخملية للطبقات والتزيين والحشو." },
    usage: { en: "Use directly or warm slightly for pouring.", ar: "استخدمها مباشرة أو سخّن قليلاً للسكب." },
    barcode: "6 251234 000073",
    featured: true,
  },
  {
    slug: "chocolate-filling-2kg",
    name: { en: "Chocolate Filling", ar: "حشوة الشوكولاتة" },
    category: "fillings",
    weight: "2 kg",
    image: fillings,
    description: { en: "Bake-stable chocolate filling — perfect for filled cakes and croissants.", ar: "حشوة شوكولاتة ثابتة بالخبز — مثالية للكيك المحشو والكرواسون." },
    usage: { en: "Pipe directly into dough before baking.", ar: "ضعها مباشرة في العجين قبل الخبز." },
    barcode: "6 251234 000080",
  },
  {
    slug: "rainbow-sprinkles-200g",
    name: { en: "Rainbow Sprinkles", ar: "سكاكر التزيين الملونة" },
    category: "bakery-supplies",
    weight: "200 g",
    image: supplies,
    description: { en: "Bright, crunchy sprinkles for finishing cakes and donuts.", ar: "سكاكر مقرمشة وملونة لتزيين الكيك والدونات." },
    usage: { en: "Sprinkle as a finishing touch.", ar: "تُرش كلمسة نهائية." },
    barcode: "6 251234 000097",
  },
  {
    slug: "wholesale-cake-mix-10kg",
    name: { en: "Cake Mix — Wholesale", ar: "خلطة كيك — جملة" },
    category: "wholesale",
    weight: "10 kg",
    image: cakemix,
    description: { en: "Bulk professional cake mix for bakeries and pastry shops.", ar: "خلطة كيك احترافية بحجم كبير للمخابز ومحلات الحلويات." },
    usage: { en: "Industrial recipe sheet included on request.", ar: "ورقة وصفة صناعية متوفرة عند الطلب." },
    barcode: "6 251234 000103",
  },
  {
    slug: "retail-custard-100g",
    name: { en: "Family Custard Pack", ar: "كاسترد العائلة" },
    category: "retail",
    weight: "100 g",
    image: custard,
    description: { en: "Single-serving family custard, ready in 5 minutes.", ar: "كاسترد عائلي جاهز خلال 5 دقائق." },
    usage: { en: "Whisk with 500ml milk and bring to a boil.", ar: "اخفق مع 500 مل حليب واغلِ." },
    barcode: "6 251234 000110",
  },
  {
    slug: "wholesale-cream-5kg",
    name: { en: "Whipping Cream — Wholesale", ar: "كريمة الخفق — جملة" },
    category: "wholesale",
    weight: "5 kg",
    image: cream,
    description: { en: "Professional whipping cream for high-volume production.", ar: "كريمة خفق احترافية للإنتاج الكبير." },
    usage: { en: "Mix per batch ratio in technical sheet.", ar: "اخلط حسب نسبة الورقة الفنية." },
    barcode: "6 251234 000127",
  },
];

export type Recipe = {
  slug: string;
  title: { en: string; ar: string };
  image: string;
  level: { en: string; ar: string };
  time: string;
  productSlugs: string[];
  steps: { en: string[]; ar: string[] };
};

export const recipes: Recipe[] = [
  {
    slug: "chocolate-layer-cake",
    title: { en: "Chocolate Layer Cake", ar: "كيك الشوكولاتة الطبقي" },
    image: recipeChoc,
    level: { en: "Easy", ar: "سهل" },
    time: "45 min",
    productSlugs: ["chocolate-cake-mix-500g", "whipping-cream-1kg", "caramel-cream-1kg"],
    steps: {
      en: ["Prepare Let's Bake Chocolate Cake Mix per pack.", "Bake two 20cm layers.", "Whip Let's Bake Cream and fill.", "Drizzle Caramel Cream on top."],
      ar: ["جهّز خلطة الشوكولاتة من ليتس بيك حسب التعليمات.", "اخبز قرصين 20 سم.", "اخفق كريمة ليتس بيك للحشو.", "زيّن بكريم الكراميل."],
    },
  },
  {
    slug: "custard-dessert-cups",
    title: { en: "Custard Dessert Cups", ar: "أكواب حلى الكاسترد" },
    image: recipeCust,
    level: { en: "Easy", ar: "سهل" },
    time: "25 min",
    productSlugs: ["vanilla-custard-1kg", "caramel-cream-1kg"],
    steps: {
      en: ["Cook Vanilla Custard per pack.", "Layer in cups with biscuit crumble.", "Top with Caramel Cream and chill 1 hour."],
      ar: ["اطبخ الكاسترد حسب التعليمات.", "ضعه طبقات مع البسكويت المفتت.", "زيّن بكريم الكراميل وبرّد ساعة."],
    },
  },
  {
    slug: "jelly-fruit-cups",
    title: { en: "Strawberry Jelly Cups", ar: "أكواب جيلي الفراولة" },
    image: jelly,
    level: { en: "Beginner", ar: "مبتدئ" },
    time: "3 hr (chill)",
    productSlugs: ["strawberry-jelly-80g"],
    steps: {
      en: ["Dissolve jelly in hot water.", "Add fresh strawberries.", "Pour into cups, chill 3 hours."],
      ar: ["أذب الجيلي في الماء الساخن.", "أضف فراولة طازجة.", "اسكب في الأكواب وبرّد 3 ساعات."],
    },
  },
  {
    slug: "caramel-cream-dessert",
    title: { en: "Caramel Cream Dessert", ar: "حلى كريم الكراميل" },
    image: caramel,
    level: { en: "Medium", ar: "متوسط" },
    time: "40 min",
    productSlugs: ["caramel-cream-1kg", "whipping-cream-1kg"],
    steps: {
      en: ["Whip cream until stiff.", "Layer with crushed biscuits.", "Drizzle Caramel Cream generously."],
      ar: ["اخفق الكريمة حتى تتماسك.", "وزّعها طبقات مع البسكويت.", "زيّن بكريم الكراميل بسخاء."],
    },
  },
  {
    slug: "filled-chocolate-cake",
    title: { en: "Filled Chocolate Cake", ar: "كيك الشوكولاتة المحشو" },
    image: recipeFilled,
    level: { en: "Medium", ar: "متوسط" },
    time: "55 min",
    productSlugs: ["chocolate-cake-mix-500g", "chocolate-filling-2kg"],
    steps: {
      en: ["Prepare cake mix.", "Pipe Chocolate Filling inside batter.", "Bake until set and dust with sugar."],
      ar: ["جهّز خلطة الكيك.", "ضع حشوة الشوكولاتة داخل العجين.", "اخبز حتى تتماسك ورش السكر البودرة."],
    },
  },
];

export type Distributor = {
  name: { en: string; ar: string };
  city: string;
  area: string;
  phone: string;
};

export const distributors: Distributor[] = [
  { name: { en: "Al Salam Supermarket", ar: "سوبرماركت السلام" }, city: "Amman", area: "Abdoun", phone: "+962 6 555 1234" },
  { name: { en: "Sweet House Trading", ar: "بيت الحلويات للتجارة" }, city: "Amman", area: "Sweifieh", phone: "+962 6 555 4321" },
  { name: { en: "Bakery Supplies Co.", ar: "شركة مستلزمات المخابز" }, city: "Amman", area: "Marka", phone: "+962 6 555 7788" },
  { name: { en: "Northern Bakeries Hub", ar: "مركز مخابز الشمال" }, city: "Irbid", area: "Downtown", phone: "+962 2 555 9911" },
  { name: { en: "Zarqa Wholesale Market", ar: "سوق الزرقاء للجملة" }, city: "Zarqa", area: "New Zarqa", phone: "+962 5 555 6633" },
  { name: { en: "Aqaba Pastry Suppliers", ar: "موردو الحلويات في العقبة" }, city: "Aqaba", area: "City Center", phone: "+962 3 555 4422" },
  { name: { en: "Madaba Sweet Corner", ar: "ركن حلويات مادبا" }, city: "Madaba", area: "King's Highway", phone: "+962 5 555 1010" },
];

export type Catalogue = {
  slug: string;
  title: { en: string; ar: string };
  desc: { en: string; ar: string };
  cover: string;
};

export const catalogues: Catalogue[] = [
  { slug: "retail", title: { en: "Retail Catalogue 2026", ar: "كتالوج التجزئة 2026" }, desc: { en: "Home-pack products for everyday baking.", ar: "منتجات منزلية للخبز اليومي." }, cover: cakemix },
  { slug: "wholesale", title: { en: "Wholesale Catalogue 2026", ar: "كتالوج الجملة 2026" }, desc: { en: "Bulk products for bakeries & sweet shops.", ar: "عبوات كبيرة للمخابز ومحلات الحلويات." }, cover: caramel },
  { slug: "product-list", title: { en: "Full Product List", ar: "قائمة المنتجات الكاملة" }, desc: { en: "Complete SKU list with weights and barcodes.", ar: "قائمة كاملة بالمنتجات والأوزان والباركود." }, cover: custard },
  { slug: "company-profile", title: { en: "Company Profile", ar: "ملف الشركة" }, desc: { en: "About Thimar Al-Rabie Food Technology.", ar: "نبذة عن ثمار الربيع لتكنولوجيا الأغذية." }, cover: cream },
];

export const seoTopics: Record<string, { en: { title: string; intro: string; keywords: string[] }; ar: { title: string; intro: string; keywords: string[] }; categories: CategoryKey[] }> = {
  "cake-mixes-jordan": {
    en: { title: "Cake Mixes in Jordan", intro: "Premium cake mixes trusted by homes and bakeries across Jordan.", keywords: ["cake mix Jordan", "chocolate cake mix Amman", "sponge mix bakeries"] },
    ar: { title: "خلطات الكيك في الأردن", intro: "خلطات كيك فاخرة موثوقة من البيوت والمخابز في الأردن.", keywords: ["خلطة كيك الأردن", "كيك شوكولاتة عمان"] },
    categories: ["cake-mixes"],
  },
  "baking-supplies-amman": {
    en: { title: "Baking Supplies in Amman", intro: "Complete baking essentials delivered across Amman.", keywords: ["baking supplies Amman", "bakery ingredients Jordan"] },
    ar: { title: "مستلزمات الخبز في عمان", intro: "كل أساسيات الخبز موصلة في عمان.", keywords: ["مستلزمات خبز عمان"] },
    categories: ["bakery-supplies", "cake-mixes", "creams"],
  },
  "custard-for-bakeries": {
    en: { title: "Custard Products for Bakeries", intro: "Smooth, stable custard built for professional production.", keywords: ["custard bakery", "wholesale custard Jordan"] },
    ar: { title: "منتجات الكاسترد للمخابز", intro: "كاسترد ناعم وثابت مصمم للإنتاج الاحترافي.", keywords: ["كاسترد مخابز"] },
    categories: ["custard"],
  },
  "wholesale-baking-ingredients-jordan": {
    en: { title: "Wholesale Baking Ingredients in Jordan", intro: "Bulk baking ingredients with consistent quality and easy monthly ordering.", keywords: ["wholesale baking Jordan", "bulk ingredients Amman"] },
    ar: { title: "مكونات خبز بالجملة في الأردن", intro: "مكونات خبز بالجملة بجودة ثابتة وسهولة الطلب الشهري.", keywords: ["مكونات بالجملة"] },
    categories: ["wholesale", "cake-mixes", "creams", "custard"],
  },
  "creams-fillings-sweet-shops": {
    en: { title: "Creams & Fillings for Sweet Shops", intro: "Professional creams and fillings designed for sweet shops.", keywords: ["creams sweet shops", "fillings bakeries"] },
    ar: { title: "كريمات وحشوات لمحلات الحلويات", intro: "كريمات وحشوات احترافية لمحلات الحلويات.", keywords: ["كريمات حلويات"] },
    categories: ["creams", "fillings"],
  },
  "caramel-jelly-products": {
    en: { title: "Caramel Cream & Jelly Products", intro: "Velvety caramel and vibrant jellies for desserts and toppings.", keywords: ["caramel cream Jordan", "jelly products"] },
    ar: { title: "منتجات كريم الكراميل والجيلي", intro: "كراميل مخملي وجيلي نابض للحلويات والتزيين.", keywords: ["كريم كراميل"] },
    categories: ["caramel-cream", "jelly"],
  },
};