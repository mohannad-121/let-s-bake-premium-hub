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

export const COMPANY_PHONE_LOCAL = "0798015744";
export const COMPANY_PHONE_INTERNATIONAL = "+962798015744";
export const COMPANY_EMAIL = "info@themarjo.com";
export const COMPANY_LOCATION_TEXT = "Amman, Jordan";
export const COMPANY_COORDINATES = { lat: 31.95158, lng: 35.92431 };
export const FACEBOOK_URL = "https://www.facebook.com/letsbakethemar";
export const WHATSAPP_NUMBER = "962798015744";
export const WA_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PRODUCT_IMAGE_FALLBACK = "/products/fallback-product.svg";
const GENERATED_PRODUCT_IMAGE_BASE = "/products/generated";

export function waLink(message: string) {
  return `${WA_BASE}?text=${encodeURIComponent(message)}`;
}

export type ProductLine = "Retail" | "Catering";

export type CategoryKey =
  | "cake-mixes"
  | "muffin-mixes"
  | "cookies-brownies"
  | "creams-custards"
  | "jelly-desserts"
  | "bakery-ingredients"
  | "glazes-fillings"
  | "retail-products"
  | "catering-products"
  | "wholesale-products";

export const categories: { key: CategoryKey; en: string; ar: string; image: string; desc: { en: string; ar: string } }[] = [
  { key: "cake-mixes", en: "Cake Mixes", ar: "خلطات الكيك", image: cakemix, desc: { en: "Retail and catering cake bases for consistent sponge, velvet and specialty cakes.", ar: "خلطات كيك للتجزئة والتموين لنتائج ثابتة في الإسفنج والفلفت والكيك المتخصص." } },
  { key: "muffin-mixes", en: "Muffin Mixes", ar: "خلطات المافن", image: cakemix, desc: { en: "Professional muffin mixes in classic, no-added-sugar and grain varieties.", ar: "خلطات مافن احترافية بنكهات كلاسيكية وخيارات بدون سكر مضاف وحبوب." } },
  { key: "cookies-brownies", en: "Cookies & Brownies", ar: "كوكيز وبراونيز", image: fillings, desc: { en: "Cookies, brownie and dessert mixes for retail shelves and pastry counters.", ar: "خلطات كوكيز وبراونيز وحلويات لرفوف التجزئة وواجهات الحلويات." } },
  { key: "creams-custards", en: "Creams & Custards", ar: "كريمات وكاسترد", image: custard, desc: { en: "Whipping cream, cold custard and cream caramel for home and professional desserts.", ar: "كريمة خفق وكاسترد بارد وكريم كراميل للحلويات المنزلية والاحترافية." } },
  { key: "jelly-desserts", en: "Jelly & Desserts", ar: "جيلي وحلويات", image: jelly, desc: { en: "Fruit jellies, plant-based jellies, sahlab and muhalabia dessert powders.", ar: "جيلي فواكه وجيلي نباتي وسحلب ومهلبية." } },
  { key: "bakery-ingredients", en: "Bakery Ingredients", ar: "مكونات المخابز", image: supplies, desc: { en: "Bread improver, baking powder, vanilla powder and cake gel for production kitchens.", ar: "محسن خبز وبيكنج باودر وفانيلا بودرة وكـيك جل لمطابخ الإنتاج." } },
  { key: "glazes-fillings", en: "Glazes & Fillings", ar: "جليز وحشوات", image: caramel, desc: { en: "Cold glaze and filling solutions for cakes, fruit tarts and display desserts.", ar: "حلول الجليز والحشوات للكيك وتارت الفواكه وحلويات العرض." } },
  { key: "retail-products", en: "Retail Products", ar: "منتجات التجزئة", image: cream, desc: { en: "Home-pack Let’s Bake products for supermarkets and everyday baking.", ar: "عبوات ليتس بيك المنزلية للسوبرماركت والخبز اليومي." } },
  { key: "catering-products", en: "Catering Products", ar: "منتجات التموين", image: cakemix, desc: { en: "Large-format mixes and ingredients for bakeries, cafes, restaurants and sweet shops.", ar: "عبوات كبيرة للمخابز والمقاهي والمطاعم ومحلات الحلويات." } },
  { key: "wholesale-products", en: "Wholesale Products", ar: "منتجات الجملة", image: supplies, desc: { en: "Bulk catalogue products built for regular B2B supply.", ar: "منتجات كتالوج كبيرة الحجم للتوريد المنتظم للأعمال." } },
];

export function categoryLabel(key: CategoryKey, lang: "en" | "ar") {
  const c = categories.find(x => x.key === key);
  return c ? c[lang] : key;
}

export type Product = {
  id: string;
  slug: string;
  nameEn: string;
  nameAr: string;
  category: CategoryKey;
  line: ProductLine;
  weight: string;
  descriptionEn: string;
  descriptionAr: string;
  suggestedUseEn: string;
  suggestedUseAr: string;
  image: string;
  tags: string[];
  whatsappMessage: string;
  featured: boolean;
};

const categoryFallback: Record<CategoryKey, string> = {
  "cake-mixes": cakemix,
  "muffin-mixes": cakemix,
  "cookies-brownies": fillings,
  "creams-custards": custard,
  "jelly-desserts": jelly,
  "bakery-ingredients": supplies,
  "glazes-fillings": caramel,
  "retail-products": cream,
  "catering-products": cakemix,
  "wholesale-products": supplies,
};

export function productName(p: Product, lang: "en" | "ar") {
  return lang === "ar" ? p.nameAr : p.nameEn;
}

export function productDescription(p: Product, lang: "en" | "ar") {
  return lang === "ar" ? p.descriptionAr : p.descriptionEn;
}

export function productSuggestedUse(p: Product, lang: "en" | "ar") {
  return lang === "ar" ? p.suggestedUseAr : p.suggestedUseEn;
}

function productSearchText(product: Product) {
  return [
    product.nameEn,
    product.nameAr,
    product.category,
    product.line,
    product.descriptionEn,
    product.descriptionAr,
    product.tags.join(" "),
  ].join(" ").toLowerCase();
}

function includesAny(text: string, keywords: string[]) {
  return keywords.some(keyword => text.includes(keyword.toLowerCase()));
}

export function getProductImage(product: Product) {
  const text = productSearchText(product);

  if (includesAny(text, ["red velvet", "ريد فلفت", "ريد ڤلفت"])) return `${GENERATED_PRODUCT_IMAGE_BASE}/red-velvet.jpg`;
  if (includesAny(text, ["chocolate", "cocoa", "brownie", "شوكولاتة", "كاكاو", "براوني"])) return `${GENERATED_PRODUCT_IMAGE_BASE}/chocolate.jpg`;
  if (includesAny(text, ["vanilla", "فانيلا", "فانيليا"])) return `${GENERATED_PRODUCT_IMAGE_BASE}/vanilla.jpg`;
  if (includesAny(text, ["strawberry", "فراولة"])) return `${GENERATED_PRODUCT_IMAGE_BASE}/strawberry.jpg`;
  if (includesAny(text, ["raspberry", "توت"])) return `${GENERATED_PRODUCT_IMAGE_BASE}/raspberry.jpg`;
  if (includesAny(text, ["cherry", "كرز"])) return `${GENERATED_PRODUCT_IMAGE_BASE}/cherry.jpg`;
  if (includesAny(text, ["lemon", "ليمون"])) return `${GENERATED_PRODUCT_IMAGE_BASE}/lemon.jpg`;
  if (includesAny(text, ["orange", "برتقال"])) return `${GENERATED_PRODUCT_IMAGE_BASE}/orange.jpg`;
  if (includesAny(text, ["cream caramel", "caramel", "كراميل"])) return `${GENERATED_PRODUCT_IMAGE_BASE}/cream-caramel.jpg`;
  if (includesAny(text, ["whipping cream", "كريمة الخفق", "كريمه الخفق"])) return `${GENERATED_PRODUCT_IMAGE_BASE}/whipping-cream.jpg`;
  if (includesAny(text, ["sahlab", "سحلب"])) return `${GENERATED_PRODUCT_IMAGE_BASE}/sahlab.jpg`;
  if (includesAny(text, ["muhalabia", "muhallabia", "مهلبية", "محلبية"])) return `${GENERATED_PRODUCT_IMAGE_BASE}/muhalabia.jpg`;
  if (includesAny(text, ["pancake", "waffle", "بان كيك", "وافل"])) return `${GENERATED_PRODUCT_IMAGE_BASE}/pancake-waffle.jpg`;
  if (includesAny(text, ["bread improver", "محسن خبز", "محسّن خبز"])) return `${GENERATED_PRODUCT_IMAGE_BASE}/bread.jpg`;
  if (includesAny(text, ["baking powder", "sodium bicarbonate", "gelatine powder", "corn starch", "بيكنج", "باودر", "نشا", "جيلاتين"])) return `${GENERATED_PRODUCT_IMAGE_BASE}/baking-ingredient.jpg`;
  if (includesAny(text, ["cookies", "cookie", "كوكيز", "بسكويت"])) return `${GENERATED_PRODUCT_IMAGE_BASE}/cookies.jpg`;
  if (includesAny(text, ["muffin", "مافن"])) return `${GENERATED_PRODUCT_IMAGE_BASE}/muffin.jpg`;
  if (includesAny(text, ["custard", "كاسترد"])) return `${GENERATED_PRODUCT_IMAGE_BASE}/custard.jpg`;
  if (includesAny(text, ["glaze", "جليز"])) return `${GENERATED_PRODUCT_IMAGE_BASE}/glaze.jpg`;
  if (product.category === "cake-mixes") return `${GENERATED_PRODUCT_IMAGE_BASE}/cake-mix.jpg`;

  return categoryFallback[product.category] ?? PRODUCT_IMAGE_FALLBACK;
}

export function productFallbackImage(p: Product) {
  return getProductImage(p) || PRODUCT_IMAGE_FALLBACK;
}

function slugify(value: string) {
  return value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function product(input: Omit<Product, "id" | "slug" | "whatsappMessage"> & { id?: string; slug?: string }): Product {
  const id = input.id ?? `${input.line.toLowerCase()}-${slugify(input.nameEn)}-${slugify(input.weight)}`;
  return {
    ...input,
    id,
    slug: input.slug ?? id,
    whatsappMessage: `Hello, I'm interested in ${input.nameEn} from Let's Bake. Please send me price and availability.`,
  };
}

const cateringDescription = (name: string) => `Professional ${name.toLowerCase()} from the Let’s Bake catering catalogue, formulated for bakeries, cafes, restaurants and sweet shops that need consistent volume, flavor and texture.`;
const cateringDescriptionAr = (name: string) => `${name} من كتالوج ليتس بيك للتموين، مصمم للمخابز والمقاهي والمطاعم ومحلات الحلويات التي تحتاج إلى ثبات في الحجم والطعم والقوام.`;
const retailDescription = (name: string) => `${name} in a convenient retail pack for home bakers and supermarket shelves, based on the Let’s Bake retail catalogue.`;
const retailDescriptionAr = (name: string) => `${name} بعبوة تجزئة مناسبة للبيوت ورفوف السوبرماركت، ضمن كتالوج ليتس بيك للتجزئة.`;

export const products: Product[] = [
  product({ nameEn: "Chocolate Cake Mix", nameAr: "خلطة كيك الشوكولاتة", category: "cake-mixes", line: "Retail", weight: "540g", descriptionEn: retailDescription("Chocolate Cake Mix"), descriptionAr: retailDescriptionAr("خلطة كيك الشوكولاتة"), suggestedUseEn: "Bake moist chocolate cakes, loaf cakes and decorated celebration cakes.", suggestedUseAr: "لتحضير كيك شوكولاتة طري وقوالب كيك وكيك مناسبات.", image: "/products/retail/chocolate-cake-mix.png", tags: ["retail", "cake", "chocolate"], featured: true }),
  product({ nameEn: "Vanilla Cake Mix", nameAr: "خلطة كيك الفانيلا", category: "cake-mixes", line: "Retail", weight: "540g", descriptionEn: retailDescription("Vanilla Cake Mix"), descriptionAr: retailDescriptionAr("خلطة كيك الفانيلا"), suggestedUseEn: "Use for classic vanilla cakes, layer cakes and cupcakes.", suggestedUseAr: "للكيك الكلاسيكي وكيك الطبقات والكب كيك.", image: "/products/retail/vanilla-cake-mix.png", tags: ["retail", "cake", "vanilla"], featured: true }),
  product({ nameEn: "Red Velvet Cake Mix", nameAr: "خلطة كيك الريد فلفت", category: "cake-mixes", line: "Retail", weight: "540g", descriptionEn: retailDescription("Red Velvet Cake Mix"), descriptionAr: retailDescriptionAr("خلطة كيك الريد فلفت"), suggestedUseEn: "Prepare red velvet cakes, cupcakes and cream-filled desserts.", suggestedUseAr: "لتحضير كيك الريد فلفت والكب كيك والحلويات المحشوة بالكريمة.", image: "/products/retail/red-velvet-cake-mix.png", tags: ["retail", "cake", "red velvet"], featured: true }),
  product({ nameEn: "Vanilla Muffin Mix", nameAr: "خلطة مافن الفانيلا", category: "muffin-mixes", line: "Retail", weight: "540g", descriptionEn: retailDescription("Vanilla Muffin Mix"), descriptionAr: retailDescriptionAr("خلطة مافن الفانيلا"), suggestedUseEn: "Bake vanilla muffins for breakfast boxes and dessert counters.", suggestedUseAr: "لتحضير مافن الفانيلا لعلب الإفطار وواجهات الحلويات.", image: "/products/retail/vanilla-muffin-mix.png", tags: ["retail", "muffin", "vanilla"], featured: false }),
  product({ nameEn: "Chocolate Muffin Mix", nameAr: "خلطة مافن الشوكولاتة", category: "muffin-mixes", line: "Retail", weight: "540g", descriptionEn: retailDescription("Chocolate Muffin Mix"), descriptionAr: retailDescriptionAr("خلطة مافن الشوكولاتة"), suggestedUseEn: "Bake chocolate muffins with chips, fillings or toppings.", suggestedUseAr: "لتحضير مافن الشوكولاتة مع الحبيبات أو الحشوات أو التزيين.", image: "/products/retail/chocolate-muffin-mix.png", tags: ["retail", "muffin", "chocolate"], featured: false }),
  product({ nameEn: "Red Velvet Muffin Mix", nameAr: "خلطة مافن الريد فلفت", category: "muffin-mixes", line: "Retail", weight: "540g", descriptionEn: retailDescription("Red Velvet Muffin Mix"), descriptionAr: retailDescriptionAr("خلطة مافن الريد فلفت"), suggestedUseEn: "Make red velvet muffins and filled mini cakes.", suggestedUseAr: "لتحضير مافن ريد فلفت وكيك صغير محشو.", image: "/products/retail/red-velvet-muffin-mix.png", tags: ["retail", "muffin", "red velvet"], featured: false }),
  product({ nameEn: "Vanilla Cookies", nameAr: "كوكيز الفانيلا", category: "cookies-brownies", line: "Retail", weight: "540g", descriptionEn: retailDescription("Vanilla Cookies"), descriptionAr: retailDescriptionAr("كوكيز الفانيلا"), suggestedUseEn: "Prepare vanilla cookies for snacks, dessert cups and bakery display.", suggestedUseAr: "لتحضير كوكيز الفانيلا للضيافة وأكواب الحلوى وواجهات المخابز.", image: "/products/retail/vanilla-cookies.png", tags: ["retail", "cookies"], featured: false }),
  product({ nameEn: "Chocolate Cookies", nameAr: "كوكيز الشوكولاتة", category: "cookies-brownies", line: "Retail", weight: "540g", descriptionEn: retailDescription("Chocolate Cookies"), descriptionAr: retailDescriptionAr("كوكيز الشوكولاتة"), suggestedUseEn: "Bake chocolate cookies or crumble into layered dessert cups.", suggestedUseAr: "لتحضير كوكيز الشوكولاتة أو استخدامها كطبقة مقرمشة في أكواب الحلوى.", image: "/products/retail/chocolate-cookies.png", tags: ["retail", "cookies", "chocolate"], featured: false }),
  product({ nameEn: "Mix Fudge Brownie", nameAr: "خلطة فادج براوني", category: "cookies-brownies", line: "Retail", weight: "540g", descriptionEn: retailDescription("Mix Fudge Brownie"), descriptionAr: retailDescriptionAr("خلطة فادج براوني"), suggestedUseEn: "Bake dense fudge brownies, brownie bites and dessert bases.", suggestedUseAr: "لتحضير براوني فادج غني وقطع براوني وقواعد للحلويات.", image: "/products/retail/fudge-brownie-mix.png", tags: ["retail", "brownie"], featured: false }),
  product({ nameEn: "Cream Caramel", nameAr: "كريم كراميل", category: "creams-custards", line: "Retail", weight: "255g / 85g", descriptionEn: retailDescription("Cream Caramel"), descriptionAr: retailDescriptionAr("كريم كراميل"), suggestedUseEn: "Prepare classic chilled cream caramel cups with caramel sauce.", suggestedUseAr: "لتحضير أكواب كريم كراميل باردة مع صوص الكراميل.", image: "/products/retail/cream-caramel.png", tags: ["retail", "dessert", "caramel"], featured: true }),
  product({ nameEn: "Whipping Cream", nameAr: "كريمة الخفق", category: "creams-custards", line: "Retail", weight: "200g / 170g / 100g", descriptionEn: retailDescription("Whipping Cream"), descriptionAr: retailDescriptionAr("كريمة الخفق"), suggestedUseEn: "Whip for cake decoration, dessert cups and cream fillings.", suggestedUseAr: "للخفق وتزيين الكيك وأكواب الحلوى وحشوات الكريمة.", image: "/products/retail/whipping-cream.png", tags: ["retail", "cream"], featured: false }),
  product({ nameEn: "Jelly Cherry", nameAr: "جيلي الكرز", category: "jelly-desserts", line: "Retail", weight: "340g", descriptionEn: retailDescription("Jelly Cherry"), descriptionAr: retailDescriptionAr("جيلي الكرز"), suggestedUseEn: "Make bright cherry jelly cups, layered desserts and fruit molds.", suggestedUseAr: "لتحضير أكواب جيلي الكرز والحلويات الطبقية وقوالب الفواكه.", image: "/products/retail/jelly-cherry.png", tags: ["retail", "jelly", "cherry"], featured: false }),
  product({ nameEn: "Jelly Strawberry", nameAr: "جيلي الفراولة", category: "jelly-desserts", line: "Retail", weight: "340g", descriptionEn: retailDescription("Jelly Strawberry"), descriptionAr: retailDescriptionAr("جيلي الفراولة"), suggestedUseEn: "Prepare strawberry jelly cups, fruit desserts and chilled trays.", suggestedUseAr: "لتحضير أكواب جيلي الفراولة وحلويات الفواكه والصواني الباردة.", image: "/products/retail/jelly-strawberry.png", tags: ["retail", "jelly", "strawberry"], featured: true }),
  product({ nameEn: "Jelly Raspberry", nameAr: "جيلي التوت", category: "jelly-desserts", line: "Retail", weight: "340g", descriptionEn: retailDescription("Jelly Raspberry"), descriptionAr: retailDescriptionAr("جيلي التوت"), suggestedUseEn: "Use for raspberry jelly cups and dessert layers.", suggestedUseAr: "لأكواب جيلي التوت وطبقات الحلوى الباردة.", image: "/products/retail/jelly-raspberry.png", tags: ["retail", "jelly", "raspberry"], featured: false }),
  product({ nameEn: "Jelly Lemon", nameAr: "جيلي الليمون", category: "jelly-desserts", line: "Retail", weight: "340g", descriptionEn: retailDescription("Jelly Lemon"), descriptionAr: retailDescriptionAr("جيلي الليمون"), suggestedUseEn: "Add a citrus jelly layer to cups, cakes and chilled desserts.", suggestedUseAr: "لإضافة طبقة جيلي حمضية للأكواب والكيك والحلويات الباردة.", image: "/products/retail/jelly-lemon.png", tags: ["retail", "jelly", "lemon"], featured: false }),
  product({ nameEn: "Jelly Orange", nameAr: "جيلي البرتقال", category: "jelly-desserts", line: "Retail", weight: "340g", descriptionEn: retailDescription("Jelly Orange"), descriptionAr: retailDescriptionAr("جيلي البرتقال"), suggestedUseEn: "Prepare orange jelly desserts and fruit cup toppings.", suggestedUseAr: "لتحضير حلويات جيلي البرتقال وتغطيات أكواب الفواكه.", image: "/products/retail/jelly-orange.png", tags: ["retail", "jelly", "orange"], featured: false }),
  product({ nameEn: "Jelly Cherry Plant-Based", nameAr: "جيلي الكرز نباتي", category: "jelly-desserts", line: "Retail", weight: "340g", descriptionEn: retailDescription("Jelly Cherry Plant-Based"), descriptionAr: retailDescriptionAr("جيلي الكرز نباتي"), suggestedUseEn: "Plant-based cherry jelly for chilled cups and dessert buffets.", suggestedUseAr: "جيلي كرز نباتي للأكواب الباردة وبوفيهات الحلويات.", image: "/products/retail/jelly-cherry-plant-based.png", tags: ["retail", "jelly", "plant-based"], featured: false }),
  product({ nameEn: "Jelly Raspberry Plant-Based", nameAr: "جيلي التوت نباتي", category: "jelly-desserts", line: "Retail", weight: "340g", descriptionEn: retailDescription("Jelly Raspberry Plant-Based"), descriptionAr: retailDescriptionAr("جيلي التوت نباتي"), suggestedUseEn: "Plant-based raspberry jelly for fruit molds and dessert cups.", suggestedUseAr: "جيلي توت نباتي لقوالب الفواكه وأكواب الحلوى.", image: "/products/retail/jelly-raspberry-plant-based.png", tags: ["retail", "jelly", "plant-based"], featured: false }),
  product({ nameEn: "Jelly Strawberry Plant-Based", nameAr: "جيلي الفراولة نباتي", category: "jelly-desserts", line: "Retail", weight: "340g", descriptionEn: retailDescription("Jelly Strawberry Plant-Based"), descriptionAr: retailDescriptionAr("جيلي الفراولة نباتي"), suggestedUseEn: "Plant-based strawberry jelly for chilled retail desserts.", suggestedUseAr: "جيلي فراولة نباتي للحلويات الباردة.", image: "/products/retail/jelly-strawberry-plant-based.png", tags: ["retail", "jelly", "plant-based"], featured: false }),
  product({ nameEn: "Jelly Lemon Plant-Based", nameAr: "جيلي الليمون نباتي", category: "jelly-desserts", line: "Retail", weight: "340g", descriptionEn: retailDescription("Jelly Lemon Plant-Based"), descriptionAr: retailDescriptionAr("جيلي الليمون نباتي"), suggestedUseEn: "Plant-based lemon jelly with a bright citrus profile.", suggestedUseAr: "جيلي ليمون نباتي بنكهة حمضية منعشة.", image: "/products/retail/jelly-lemon-plant-based.png", tags: ["retail", "jelly", "plant-based"], featured: false }),
  product({ nameEn: "Jelly Orange Plant-Based", nameAr: "جيلي البرتقال نباتي", category: "jelly-desserts", line: "Retail", weight: "340g", descriptionEn: retailDescription("Jelly Orange Plant-Based"), descriptionAr: retailDescriptionAr("جيلي البرتقال نباتي"), suggestedUseEn: "Plant-based orange jelly for family desserts and chilled cups.", suggestedUseAr: "جيلي برتقال نباتي للحلويات العائلية والأكواب الباردة.", image: "/products/retail/jelly-orange-plant-based.png", tags: ["retail", "jelly", "plant-based"], featured: false }),
  product({ nameEn: "Sahlab Powder", nameAr: "سحلب بودرة", category: "jelly-desserts", line: "Retail", weight: "100g", descriptionEn: retailDescription("Sahlab Powder"), descriptionAr: retailDescriptionAr("سحلب بودرة"), suggestedUseEn: "Prepare warm sahlab drinks and winter dessert cups.", suggestedUseAr: "لتحضير مشروب السحلب الدافئ وأكواب الشتاء.", image: "/products/retail/sahlab-powder.png", tags: ["retail", "dessert"], featured: false }),
  product({ nameEn: "Muhalabia", nameAr: "مهلبية", category: "jelly-desserts", line: "Retail", weight: "150g", descriptionEn: retailDescription("Muhalabia"), descriptionAr: retailDescriptionAr("مهلبية"), suggestedUseEn: "Make smooth muhalabia cups with nuts, fruit or caramel.", suggestedUseAr: "لتحضير أكواب مهلبية ناعمة مع المكسرات أو الفواكه أو الكراميل.", image: "/products/retail/muhalabia.png", tags: ["retail", "dessert"], featured: false }),

  product({ nameEn: "Sponge Cake Mix", nameAr: "خلطة كيك إسفنجي", category: "cake-mixes", line: "Catering", weight: "10kg / 25kg", descriptionEn: cateringDescription("Sponge Cake Mix"), descriptionAr: cateringDescriptionAr("خلطة كيك إسفنجي"), suggestedUseEn: "Use as a neutral sponge base for layered cakes, gateaux and celebration cakes.", suggestedUseAr: "قاعدة إسفنجية محايدة للكيك الطبقي والجاتوه وكيك المناسبات.", image: "/products/catering/sponge-cake-mix.png", tags: ["catering", "cake", "wholesale"], featured: true }),
  product({ nameEn: "Chocolate Sponge Cake Mix", nameAr: "خلطة كيك إسفنجي شوكولاتة", category: "cake-mixes", line: "Catering", weight: "10kg / 25kg", descriptionEn: cateringDescription("Chocolate Sponge Cake Mix"), descriptionAr: cateringDescriptionAr("خلطة كيك إسفنجي شوكولاتة"), suggestedUseEn: "Bake chocolate sponge sheets, layered cakes and roll bases.", suggestedUseAr: "لتحضير صفائح إسفنج شوكولاتة وكيك طبقات وقواعد الرول.", image: "/products/catering/chocolate-sponge-cake-mix.png", tags: ["catering", "cake", "chocolate"], featured: false }),
  product({ nameEn: "Vanilla Sponge Cake Mix", nameAr: "خلطة كيك إسفنجي فانيلا", category: "cake-mixes", line: "Catering", weight: "10kg / 25kg", descriptionEn: cateringDescription("Vanilla Sponge Cake Mix"), descriptionAr: cateringDescriptionAr("خلطة كيك إسفنجي فانيلا"), suggestedUseEn: "Bake vanilla sponge layers for fresh cream cakes and Swiss roll bases.", suggestedUseAr: "لتحضير طبقات إسفنج فانيلا لكيك الكريمة وقواعد السويس رول.", image: "/products/catering/vanilla-sponge-cake-mix.png", tags: ["catering", "cake", "vanilla"], featured: false }),
  product({ nameEn: "Red Velvet Sponge Cake Mix", nameAr: "خلطة كيك إسفنجي ريد فلفت", category: "cake-mixes", line: "Catering", weight: "10kg / 25kg", descriptionEn: cateringDescription("Red Velvet Sponge Cake Mix"), descriptionAr: cateringDescriptionAr("خلطة كيك إسفنجي ريد فلفت"), suggestedUseEn: "Produce red velvet cake sheets, layers and mini desserts.", suggestedUseAr: "لإنتاج صفائح وطبقات ريد فلفت وحلويات صغيرة.", image: "/products/catering/red-velvet-sponge-cake-mix.png", tags: ["catering", "cake", "red velvet"], featured: false }),
  product({ nameEn: "Lotus Mix Sponge Cake", nameAr: "خلطة كيك إسفنجي لوتس", category: "cake-mixes", line: "Catering", weight: "10kg / 25kg", descriptionEn: cateringDescription("Lotus Mix Sponge Cake"), descriptionAr: cateringDescriptionAr("خلطة كيك إسفنجي لوتس"), suggestedUseEn: "Make Lotus-flavored sponge cakes, trays and dessert cups.", suggestedUseAr: "لتحضير كيك إسفنجي بنكهة اللوتس وصواني وأكواب الحلوى.", image: "/products/catering/lotus-sponge-cake-mix.png", tags: ["catering", "cake", "lotus"], featured: false }),
  product({ nameEn: "Pistachio Cake Mix", nameAr: "خلطة كيك الفستق", category: "cake-mixes", line: "Catering", weight: "10kg / 25kg", descriptionEn: cateringDescription("Pistachio Cake Mix"), descriptionAr: cateringDescriptionAr("خلطة كيك الفستق"), suggestedUseEn: "Prepare pistachio cakes, premium trays and pastry bases.", suggestedUseAr: "لتحضير كيك الفستق والصواني الفاخرة وقواعد الحلويات.", image: "/products/catering/pistachio-cake-mix.png", tags: ["catering", "cake", "pistachio"], featured: false }),
  product({ nameEn: "Purple Velvet Cake Mix", nameAr: "خلطة كيك بيربل فلفت", category: "cake-mixes", line: "Catering", weight: "10kg / 25kg", descriptionEn: cateringDescription("Purple Velvet Cake Mix"), descriptionAr: cateringDescriptionAr("خلطة كيك بيربل فلفت"), suggestedUseEn: "Use for distinctive purple velvet cakes and dessert displays.", suggestedUseAr: "لتحضير كيك بيربل فلفت مميز وحلويات عرض.", image: "/products/catering/purple-velvet-cake-mix.png", tags: ["catering", "cake", "velvet"], featured: false }),
  product({ nameEn: "Coffee Sponge Cake Mix", nameAr: "خلطة كيك إسفنجي قهوة", category: "cake-mixes", line: "Catering", weight: "10kg / 25kg", descriptionEn: cateringDescription("Coffee Sponge Cake Mix"), descriptionAr: cateringDescriptionAr("خلطة كيك إسفنجي قهوة"), suggestedUseEn: "Bake coffee sponge for tiramisu-style cakes and cafe desserts.", suggestedUseAr: "لتحضير إسفنج القهوة لكيك التيراميسو وحلويات المقاهي.", image: "/products/catering/coffee-sponge-cake-mix.png", tags: ["catering", "cake", "coffee"], featured: false }),

  ...[
    ["Muffin Mix", "خلطة مافن", "muffin-mix"],
    ["Chocolate Muffin Mix", "خلطة مافن الشوكولاتة", "chocolate-muffin-mix"],
    ["Vanilla Muffin Mix", "خلطة مافن الفانيلا", "vanilla-muffin-mix"],
    ["Red Velvet Muffin Mix", "خلطة مافن ريد فلفت", "red-velvet-muffin-mix"],
    ["Lotus Muffin Mix", "خلطة مافن لوتس", "lotus-muffin-mix"],
    ["Coffee Muffin", "مافن القهوة", "coffee-muffin"],
    ["Pistachio Muffin", "مافن الفستق", "pistachio-muffin"],
    ["Oreo Muffin", "مافن أوريو", "oreo-muffin"],
    ["Purple Muffin", "مافن بيربل", "purple-muffin"],
    ["Barley Muffin", "مافن الشعير", "barley-muffin"],
    ["Almond Muffin", "مافن اللوز", "almond-muffin"],
    ["Oat Muffin", "مافن الشوفان", "oat-muffin"],
    ["Bran Muffin", "مافن النخالة", "bran-muffin"],
    ["Vanilla Muffin No Added Sugar", "مافن فانيلا بدون سكر مضاف", "vanilla-muffin-no-added-sugar"],
    ["Chocolate Muffin No Added Sugar", "مافن شوكولاتة بدون سكر مضاف", "chocolate-muffin-no-added-sugar"],
  ].map(([nameEn, nameAr, imageName]) => product({ nameEn, nameAr, category: "muffin-mixes", line: "Catering", weight: "10kg / 25kg", descriptionEn: cateringDescription(nameEn), descriptionAr: cateringDescriptionAr(nameAr), suggestedUseEn: "Use for consistent muffin batches, cafe displays and packaged bakery items.", suggestedUseAr: "لإنتاج دفعات مافن ثابتة لواجهات المقاهي ومنتجات المخابز المعبأة.", image: `/products/catering/${imageName}.png`, tags: ["catering", "muffin", "wholesale"], featured: false })),

  ...[
    ["Bran English Cake", "كيك إنجليزي بالنخالة", "bran-english-cake"],
    ["Almond English Cake", "كيك إنجليزي باللوز", "almond-english-cake"],
    ["Oat English Cake", "كيك إنجليزي بالشوفان", "oat-english-cake"],
    ["Barley English Cake", "كيك إنجليزي بالشعير", "barley-english-cake"],
    ["Turkish Cake Mix", "خلطة كيك تركي", "turkish-cake-mix"],
    ["Spanish Cake Mix", "خلطة كيك إسباني", "spanish-cake-mix"],
    ["English Cake Mix", "خلطة كيك إنجليزي", "english-cake-mix"],
    ["English Chocolate Cake", "كيك إنجليزي شوكولاتة", "english-chocolate-cake"],
    ["Brownie Mix", "خلطة براوني", "brownie-mix"],
    ["Swiss Roll Mix", "خلطة سويس رول", "swiss-roll-mix"],
    ["Swiss Roll Chocolate Mix", "خلطة سويس رول شوكولاتة", "swiss-roll-chocolate-mix"],
    ["Pancake & Waffle Mix", "خلطة بان كيك ووافل", "pancake-waffle-mix"],
  ].map(([nameEn, nameAr, imageName]) => product({ nameEn, nameAr, category: "cake-mixes", line: "Catering", weight: "10kg / 25kg", descriptionEn: cateringDescription(nameEn), descriptionAr: cateringDescriptionAr(nameAr), suggestedUseEn: "Designed for production kitchens that need repeatable texture and clean flavor.", suggestedUseAr: "مصمم لمطابخ الإنتاج التي تحتاج إلى قوام متكرر ونكهة واضحة.", image: `/products/catering/${imageName}.png`, tags: ["catering", "cake", "wholesale"], featured: false })),

  product({ nameEn: "Vanilla Cookies", nameAr: "كوكيز الفانيلا", category: "cookies-brownies", line: "Catering", weight: "10kg / 25kg", descriptionEn: cateringDescription("Vanilla Cookies"), descriptionAr: cateringDescriptionAr("كوكيز الفانيلا"), suggestedUseEn: "Produce vanilla cookies for counters, packed snacks and dessert toppings.", suggestedUseAr: "لإنتاج كوكيز الفانيلا للواجهات والضيافة والتزيين.", image: "/products/catering/vanilla-cookies.png", tags: ["catering", "cookies"], featured: false }),
  product({ nameEn: "Chocolate Cookies", nameAr: "كوكيز الشوكولاتة", category: "cookies-brownies", line: "Catering", weight: "10kg / 25kg", descriptionEn: cateringDescription("Chocolate Cookies"), descriptionAr: cateringDescriptionAr("كوكيز الشوكولاتة"), suggestedUseEn: "Produce chocolate cookies, crumbs and dessert cup layers.", suggestedUseAr: "لإنتاج كوكيز الشوكولاتة وفتات الكوكيز وطبقات الأكواب.", image: "/products/catering/chocolate-cookies.png", tags: ["catering", "cookies", "chocolate"], featured: false }),
  product({ nameEn: "Whipping Cream", nameAr: "كريمة الخفق", category: "creams-custards", line: "Catering", weight: "10kg / 5kg", descriptionEn: cateringDescription("Whipping Cream"), descriptionAr: cateringDescriptionAr("كريمة الخفق"), suggestedUseEn: "Whip for cake finishing, fillings, dessert cups and pastry decoration.", suggestedUseAr: "للخفق وتزيين الكيك والحشوات وأكواب الحلوى وحلويات المعجنات.", image: "/products/catering/whipping-cream.png", tags: ["catering", "cream", "wholesale"], featured: true }),
  product({ nameEn: "Bread Improver", nameAr: "محسن خبز", category: "bakery-ingredients", line: "Catering", weight: "10kg / 25kg", descriptionEn: cateringDescription("Bread Improver"), descriptionAr: cateringDescriptionAr("محسن خبز"), suggestedUseEn: "Improve dough tolerance, volume and softness in bread production.", suggestedUseAr: "لتحسين تحمل العجين والحجم والطراوة في إنتاج الخبز.", image: "/products/catering/bread-improver.png", tags: ["catering", "bakery", "bread"], featured: true }),
  product({ nameEn: "Baking Powder", nameAr: "بيكنج باودر", category: "bakery-ingredients", line: "Catering", weight: "10kg / 25kg", descriptionEn: cateringDescription("Baking Powder"), descriptionAr: cateringDescriptionAr("بيكنج باودر"), suggestedUseEn: "Use as a raising agent for cakes, muffins, cookies and pastries.", suggestedUseAr: "عامل رفع للكيك والمافن والكوكيز والمعجنات.", image: "/products/catering/baking-powder.png", tags: ["catering", "bakery"], featured: false }),
  product({ nameEn: "Cake Gel", nameAr: "كيك جل", category: "bakery-ingredients", line: "Catering", weight: "10kg / 5kg", descriptionEn: cateringDescription("Cake Gel"), descriptionAr: cateringDescriptionAr("كيك جل"), suggestedUseEn: "Support sponge aeration, emulsification and soft cake structure.", suggestedUseAr: "لدعم تهوية الإسفنج والاستحلاب وبنية الكيك الطرية.", image: "/products/catering/cake-gel.png", tags: ["catering", "cake", "ingredient"], featured: false }),
  product({ nameEn: "Vanilla Powder", nameAr: "فانيلا بودرة", category: "bakery-ingredients", line: "Catering", weight: "600g", descriptionEn: cateringDescription("Vanilla Powder"), descriptionAr: cateringDescriptionAr("فانيلا بودرة"), suggestedUseEn: "Flavor cakes, creams, custards, cookies and dessert fillings.", suggestedUseAr: "لإضافة نكهة للكيك والكريمات والكاسترد والكوكيز والحشوات.", image: "/products/catering/vanilla-powder.png", tags: ["catering", "vanilla"], featured: false }),
  product({ nameEn: "Patissiere Cold Custard", nameAr: "باتيسيير كاسترد بارد", category: "creams-custards", line: "Catering", weight: "10kg / 5kg", descriptionEn: cateringDescription("Patissiere Cold Custard"), descriptionAr: cateringDescriptionAr("باتيسيير كاسترد بارد"), suggestedUseEn: "Prepare cold pastry cream for eclairs, tarts, dessert cups and fillings.", suggestedUseAr: "لتحضير كريمة باتيسيير باردة للإكلير والتارت وأكواب الحلوى والحشوات.", image: "/products/catering/patissiere-cold-custard.png", tags: ["catering", "custard"], featured: false }),
  product({ nameEn: "Cream Caramel", nameAr: "كريم كراميل", category: "creams-custards", line: "Catering", weight: "10kg / 5kg / 7.5kg", descriptionEn: cateringDescription("Cream Caramel"), descriptionAr: cateringDescriptionAr("كريم كراميل"), suggestedUseEn: "Produce large batches of cream caramel cups, trays and buffet desserts.", suggestedUseAr: "لإنتاج دفعات كبيرة من أكواب وصواني كريم كراميل وحلويات البوفيه.", image: "/products/catering/cream-caramel.png", tags: ["catering", "dessert", "caramel"], featured: false }),
  product({ nameEn: "Cold Glaze Neutral", nameAr: "كولد جليز شفاف", category: "glazes-fillings", line: "Catering", weight: "10kg / 5kg", descriptionEn: "Ready-to-use neutral cold glaze for fruit tarts, cakes and dessert finishing.", descriptionAr: "كولد جليز شفاف جاهز للاستخدام لتارت الفواكه والكيك وتشطيب الحلويات.", suggestedUseEn: "Brush or spread over chilled fruit, cakes and dessert displays for shine.", suggestedUseAr: "يدهن أو يفرد على الفواكه والكيك والحلويات الباردة لإضافة اللمعة.", image: "/products/catering/cold-glaze-neutral.png", tags: ["catering", "glaze"], featured: false }),
  product({ nameEn: "Cold Glaze Strawberry", nameAr: "كولد جليز فراولة", category: "glazes-fillings", line: "Catering", weight: "10kg / 5kg", descriptionEn: "Ready-to-use strawberry cold glaze for fruit desserts, cheesecakes and display cakes.", descriptionAr: "كولد جليز فراولة جاهز للاستخدام لحلويات الفواكه والتشيز كيك وكيك العرض.", suggestedUseEn: "Apply directly to chilled desserts for color, shine and strawberry flavor.", suggestedUseAr: "يوضع مباشرة على الحلويات الباردة للون واللمعة ونكهة الفراولة.", image: "/products/catering/cold-glaze-strawberry.png", tags: ["catering", "glaze", "strawberry"], featured: false }),
];

export type Recipe = {
  slug: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  image: string;
  level: { en: string; ar: string };
  time: string;
  productSlugs: string[];
  steps: { en: string[]; ar: string[] };
};

export const recipes: Recipe[] = [
  { slug: "chocolate-cake-let-s-bake", title: { en: "Chocolate Cake using Let’s Bake Chocolate Cake Mix", ar: "كيك شوكولاتة بخلطة ليتس بيك" }, description: { en: "A moist chocolate cake finished with whipped cream or glaze.", ar: "كيك شوكولاتة طري يزين بالكريمة أو الجليز." }, image: recipeChoc, level: { en: "Easy", ar: "سهل" }, time: "45 min", productSlugs: ["retail-chocolate-cake-mix-540g"], steps: { en: ["Prepare the cake mix according to pack directions.", "Bake in two tins or one tray until set.", "Cool, fill and decorate with cream or glaze."], ar: ["حضّر الخلطة حسب تعليمات العبوة.", "اخبز في قالبين أو صينية حتى ينضج.", "برّد الكيك ثم احشه وزينه بالكريمة أو الجليز."] } },
  { slug: "red-velvet-cake-let-s-bake", title: { en: "Red Velvet Cake using Let’s Bake Red Velvet Cake Mix", ar: "كيك ريد فلفت بخلطة ليتس بيك" }, description: { en: "A vibrant red velvet cake for celebrations and cafe slices.", ar: "كيك ريد فلفت غني للمناسبات وشرائح المقاهي." }, image: recipeFilled, level: { en: "Easy", ar: "سهل" }, time: "50 min", productSlugs: ["retail-red-velvet-cake-mix-540g"], steps: { en: ["Mix and bake the red velvet cake.", "Cool completely before slicing.", "Layer with whipped cream or cream cheese style filling."], ar: ["اخلط واخبز كيك الريد فلفت.", "برّده تماماً قبل التقطيع.", "ضع طبقات من الكريمة أو حشوة كريمية."] } },
  { slug: "custard-dessert-cups", title: { en: "Custard Dessert Cups using Patissiere Cold Custard", ar: "أكواب كاسترد بباتيسيير كاسترد بارد" }, description: { en: "Fast layered dessert cups for bakeries and catering displays.", ar: "أكواب حلوى طبقية سريعة لواجهات المخابز والتموين." }, image: recipeCust, level: { en: "Easy", ar: "سهل" }, time: "25 min", productSlugs: ["catering-patissiere-cold-custard-10kg-5kg"], steps: { en: ["Prepare the cold custard until smooth.", "Layer with biscuit crumbs or cake cubes.", "Finish with glaze, fruit or caramel."], ar: ["حضّر الكاسترد البارد حتى يصبح ناعماً.", "ضعه طبقات مع بسكويت أو مكعبات كيك.", "زيّنه بالجليز أو الفواكه أو الكراميل."] } },
  { slug: "strawberry-jelly-cups", title: { en: "Strawberry Jelly Cups using Let’s Bake Strawberry Jelly", ar: "أكواب جيلي الفراولة بمنتج ليتس بيك" }, description: { en: "Clear, colorful strawberry jelly cups for chilled dessert menus.", ar: "أكواب جيلي فراولة ملونة وواضحة لقوائم الحلويات الباردة." }, image: jelly, level: { en: "Beginner", ar: "مبتدئ" }, time: "3 hr chill", productSlugs: ["retail-jelly-strawberry-340g"], steps: { en: ["Dissolve the jelly according to pack instructions.", "Pour into cups with fruit pieces.", "Chill until set."], ar: ["أذب الجيلي حسب تعليمات العبوة.", "اسكبه في أكواب مع قطع الفواكه.", "برّده حتى يتماسك."] } },
  { slug: "cream-caramel-dessert", title: { en: "Cream Caramel Dessert using Let’s Bake Cream Caramel", ar: "حلوى كريم كراميل بمنتج ليتس بيك" }, description: { en: "Classic cream caramel cups for retail dessert cases and family tables.", ar: "أكواب كريم كراميل كلاسيكية للواجهات والضيافة العائلية." }, image: caramel, level: { en: "Easy", ar: "سهل" }, time: "35 min", productSlugs: ["retail-cream-caramel-255g-85g"], steps: { en: ["Prepare the cream caramel mixture.", "Add caramel sauce to cups or molds.", "Pour, chill and unmold if desired."], ar: ["حضّر خليط كريم الكراميل.", "ضع صوص الكراميل في الأكواب أو القوالب.", "اسكب الخليط وبرّده ثم اقلبه عند الرغبة."] } },
  { slug: "muffin-box", title: { en: "Muffin Box using Let’s Bake Vanilla and Chocolate Muffin Mix", ar: "علبة مافن بخلطات الفانيلا والشوكولاتة" }, description: { en: "A mixed muffin box for cafes, schools and bakery shelves.", ar: "علبة مافن مشكلة للمقاهي والمدارس ورفوف المخابز." }, image: cakemix, level: { en: "Easy", ar: "سهل" }, time: "40 min", productSlugs: ["retail-vanilla-muffin-mix-540g", "retail-chocolate-muffin-mix-540g"], steps: { en: ["Prepare vanilla and chocolate muffin batters.", "Portion into cups with toppings.", "Bake and pack after cooling."], ar: ["حضّر خليط مافن الفانيلا والشوكولاتة.", "وزّعه في القوالب مع التغطيات.", "اخبزه وعبّئه بعد التبريد."] } },
  { slug: "cookies-dessert-cups", title: { en: "Cookies Dessert Cups using Let’s Bake Chocolate Cookies", ar: "أكواب حلوى كوكيز الشوكولاتة" }, description: { en: "Layered dessert cups with chocolate cookie crumble.", ar: "أكواب حلوى طبقية مع فتات كوكيز الشوكولاتة." }, image: recipeCust, level: { en: "Easy", ar: "سهل" }, time: "30 min", productSlugs: ["retail-chocolate-cookies-540g", "retail-whipping-cream-200g-170g-100g"], steps: { en: ["Bake and crumble the chocolate cookies.", "Layer with whipped cream.", "Finish with caramel or glaze."], ar: ["اخبز كوكيز الشوكولاتة وفتته.", "ضعه طبقات مع الكريمة المخفوقة.", "زيّنه بالكراميل أو الجليز."] } },
  { slug: "pancake-breakfast", title: { en: "Pancake Breakfast using Let’s Bake Pancake & Waffle Mix", ar: "فطور بان كيك بخلطة ليتس بيك" }, description: { en: "Golden pancakes and waffles for breakfast service.", ar: "بان كيك ووافل ذهبي لخدمة الإفطار." }, image: recipeFilled, level: { en: "Easy", ar: "سهل" }, time: "20 min", productSlugs: ["catering-pancake-and-waffle-mix-10kg-25kg"], steps: { en: ["Prepare the batter to service consistency.", "Cook pancakes or waffles until golden.", "Serve with fruit, cream or caramel."], ar: ["حضّر الخليط بالقوام المناسب للخدمة.", "اطه البان كيك أو الوافل حتى يصبح ذهبياً.", "قدمه مع الفواكه أو الكريمة أو الكراميل."] } },
];

export type Distributor = {
  name: { en: string; ar: string };
  city: string;
  area: string;
  phone: string;
};

export const distributors: Distributor[] = [
  { name: { en: "Let’s Bake Sales Office", ar: "مكتب مبيعات ليتس بيك" }, city: "Amman", area: "Industrial Area", phone: COMPANY_PHONE_INTERNATIONAL },
  { name: { en: "Retail Distribution Partner", ar: "شريك توزيع التجزئة" }, city: "Amman", area: "Citywide", phone: COMPANY_PHONE_INTERNATIONAL },
  { name: { en: "Catering & Bakery Supply Desk", ar: "قسم توريد المخابز والتموين" }, city: "Amman", area: "B2B", phone: COMPANY_PHONE_INTERNATIONAL },
];

export type Catalogue = {
  slug: string;
  title: { en: string; ar: string };
  desc: { en: string; ar: string };
  cover: string;
  sourceLabel: string;
  href: string;
  todo?: string;
};

export const catalogues: Catalogue[] = [
  { slug: "retail", title: { en: "Retail Catalogue", ar: "كتالوج التجزئة" }, desc: { en: "Let’s Bake retail packs for supermarkets and home baking.", ar: "عبوات ليتس بيك للتجزئة والسوبرماركت والخبز المنزلي." }, cover: cakemix, sourceLabel: "lets Bake RETAIL final 23-12.pdf", href: "/catalogues/lets-bake-retail.pdf" },
  { slug: "catering", title: { en: "Catering Catalogue", ar: "كتالوج التموين" }, desc: { en: "Large-format products for bakeries, cafes, restaurants and sweet shops.", ar: "منتجات كبيرة الحجم للمخابز والمقاهي والمطاعم ومحلات الحلويات." }, cover: cream, sourceLabel: "lets Bake Catering Final 23-12.pdf", href: "/catalogues/lets-bake-catering.pdf" },
  { slug: "wholesale-product-list", title: { en: "Wholesale Product List", ar: "قائمة منتجات الجملة" }, desc: { en: "A consolidated B2B list of retail and catering products, categories and weights.", ar: "قائمة موحدة للأعمال تضم منتجات التجزئة والتموين والفئات والأوزان." }, cover: supplies, sourceLabel: "Generated from Retail and Catering catalogues", href: "/catalogues/lets-bake-wholesale-product-list.pdf", todo: "TODO: place the wholesale list at public/catalogues/lets-bake-wholesale-product-list.pdf when the approved PDF is ready." },
  { slug: "company-profile", title: { en: "Company Profile", ar: "ملف الشركة" }, desc: { en: "Company profile for Thimar Al-Rabie Food Technology and the Let’s Bake brand.", ar: "ملف شركة ثمار الربيع لتكنولوجيا الأغذية وعلامة ليتس بيك." }, cover: custard, sourceLabel: "Company Profile", href: "/catalogues/lets-bake-company-profile.pdf", todo: "TODO: place the company profile at public/catalogues/lets-bake-company-profile.pdf when available." },
];

export const seoTopics: Record<string, { en: { title: string; intro: string; keywords: string[] }; ar: { title: string; intro: string; keywords: string[] }; categories: CategoryKey[] }> = {
  "cake-mixes-jordan": {
    en: { title: "Cake Mixes in Jordan", intro: "Let’s Bake cake mixes for retail shelves and professional production.", keywords: ["cake mix Jordan", "chocolate cake mix Amman", "sponge cake mix bakeries"] },
    ar: { title: "خلطات الكيك في الأردن", intro: "خلطات كيك ليتس بيك للتجزئة والإنتاج الاحترافي.", keywords: ["خلطة كيك الأردن", "خلطة كيك شوكولاتة عمان"] },
    categories: ["cake-mixes"],
  },
  "baking-supplies-amman": {
    en: { title: "Bakery Ingredients in Amman", intro: "Professional bakery ingredients including bread improver, baking powder, vanilla powder and cake gel.", keywords: ["baking supplies Amman", "bakery ingredients Jordan"] },
    ar: { title: "مكونات المخابز في عمان", intro: "مكونات مخابز احترافية تشمل محسن الخبز والبيكنج باودر والفانيلا وكيك جل.", keywords: ["مستلزمات خبز عمان"] },
    categories: ["bakery-ingredients", "cake-mixes", "muffin-mixes"],
  },
  "custard-for-bakeries": {
    en: { title: "Custard Products for Bakeries", intro: "Cold custard, whipping cream and cream caramel for professional dessert production.", keywords: ["custard bakery", "wholesale custard Jordan"] },
    ar: { title: "منتجات الكاسترد للمخابز", intro: "كاسترد بارد وكريمة خفق وكريم كراميل لإنتاج الحلويات الاحترافي.", keywords: ["كاسترد مخابز"] },
    categories: ["creams-custards"],
  },
  "wholesale-baking-ingredients-jordan": {
    en: { title: "Wholesale Baking Ingredients in Jordan", intro: "Bulk Let’s Bake catering products for bakeries, cafes and sweet shops.", keywords: ["wholesale baking Jordan", "bulk ingredients Amman"] },
    ar: { title: "مكونات خبز بالجملة في الأردن", intro: "منتجات تموين ليتس بيك بالجملة للمخابز والمقاهي ومحلات الحلويات.", keywords: ["مكونات بالجملة"] },
    categories: ["wholesale-products", "catering-products", "bakery-ingredients"],
  },
  "creams-fillings-sweet-shops": {
    en: { title: "Creams & Fillings for Sweet Shops", intro: "Whipping cream, cold custard, cream caramel and cold glazes for display desserts.", keywords: ["creams sweet shops", "fillings bakeries"] },
    ar: { title: "كريمات وحشوات لمحلات الحلويات", intro: "كريمة خفق وكاسترد بارد وكريم كراميل وكولد جليز لحلويات العرض.", keywords: ["كريمات حلويات"] },
    categories: ["creams-custards", "glazes-fillings"],
  },
  "caramel-jelly-products": {
    en: { title: "Cream Caramel & Jelly Products", intro: "Retail cream caramel, fruit jellies and plant-based jelly options.", keywords: ["cream caramel Jordan", "jelly products"] },
    ar: { title: "منتجات كريم كراميل وجيلي", intro: "كريم كراميل وجيلي فواكه وخيارات جيلي نباتية للتجزئة.", keywords: ["كريم كراميل", "جيلي"] },
    categories: ["creams-custards", "jelly-desserts"],
  },
};
