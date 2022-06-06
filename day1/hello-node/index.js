// habersitesi.com/haber/bu-hafta-kavurucu-sicaklar-geliyor
// Title: Bu hafta kavurucu sıcaklar geliyor

const slugify = require("slugify");

const title = "Bu hafta kavurucu sıcaklar geliyor";
const slug = slugify(title).toLowerCase();

console.log(slug);
