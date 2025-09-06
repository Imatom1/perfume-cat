// Perfume purchase links configuration
// This file makes it easy to update purchase links for each perfume

export interface PerfumeLink {
  perfumeId: string;
  buyUrl: string;
}

// Default placeholder link for perfumes without specific URLs
export const DEFAULT_BUY_URL = "https://example.com/shop";

// Perfume-specific purchase links
export const perfumeLinks: PerfumeLink[] = [
  // Unisex/Designer Inspired Perfumes
  {
    perfumeId: "baccarat-rouge-540",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-baccarat-rouge-540-rouge-elixir/RCKA7CI3TLPLSXSILAADUSMR?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N",
  },
  {
    perfumeId: "black-afgano",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-black-afgano-black-spirit/PLC6GSJXX2PWVA27JDOUS7LK?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N",
  },
  {
    perfumeId: "ombre-nomade",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-ombre-nomade-dark-nomad/EQCXYSYU5WVQWRCNLXTZQXWR?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N",
  },
  { perfumeId: "interlude", buyUrl: "https://golden-aroma.square.site/product/inspired-by-interlude-eternal-interlude/SFVRVBE6DZW7YVSGGRFVDS4Z?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N" },
  { perfumeId: "oud-ispahan", buyUrl: "https://golden-aroma.square.site/product/inspired-by-oud-ispahan-oud-essence/Z7UKPIGJXCPV35SNQ7GXMLQ7?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N" },
  { perfumeId: "oud-wood", buyUrl: "https://golden-aroma.square.site/product/inspired-by-oud-wood-oud-majesty/O6FT6IIRXWWFHH23ELQRPZGA?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N" },
  {
    perfumeId: "rose-vanille",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-rose-vanille-rose-vanilla/T6JVCELFAGDSDFHIQRGPCAJU?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N",
  },
  { perfumeId: "red-tobacco", buyUrl: "https://golden-aroma.square.site/product/inspired-by-red-tobacco-red-tobacco-flame/W6RHZX74QVQTWZQI4ELTNJ5Y?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N" },
  {
    perfumeId: "imagination-lv",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-louis-vuitton-imagination-fantasy/PVU3UFYA4KV5AXW7IQGD4F74?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N",
  },
  { perfumeId: "accento", buyUrl: "https://golden-aroma.square.site/product/inspired-by-accento-golden-accento/4TSIZOIA7J5N2UWVPCO4HX5M?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N" },
  {
    perfumeId: "imperial-valley",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-imperial-valley-imperial-valley/JMXNVQIYGR25FAWBIDFEKSRU?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N",
  },
  {
    perfumeId: "alf-lele-w-lele",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-alf-lele-w-lele-thousand-nights/CRVWHSLI67R6QR226SAXPQJG?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N",
  },
  { perfumeId: "al-fares", buyUrl: "https://golden-aroma.square.site/product/inspired-by-al-fares-noble-knight/WSPOC64GFP7ESSBSRBU2MJ2N?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N" },
  { perfumeId: "i-am-white", buyUrl: "https://golden-aroma.square.site/product/inspired-by-i-am-white-pure-white/YRCO2K7GH7222OHZORA6NMXO?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N" },
  { perfumeId: "ana-walshok", buyUrl: "https://golden-aroma.square.site/product/inspired-by-ana-wal-shok-longing/K2TAHWQAFZBML3J2Z5IW75D2?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N" },
  { perfumeId: "sweet-oud", buyUrl: "https://golden-aroma.square.site/product/inspired-by-sweet-oud-sweet-oud/R3DHRKKQ6LS7YYVGGTJNCNHV?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N" },
  {
    perfumeId: "shams-al-emarat",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-shams-al-emarat-desert-sun/WDS5EDTP4H4N6WRBG2D3HJ7N?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N",
  },
  { perfumeId: "shay-oud", buyUrl: "https://golden-aroma.square.site/product/inspired-by-shay-oud-shay-oud/FIVBLXKPXEPOUCOLNFCOXTEN?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N" },
  {
    perfumeId: "amber-rasasi",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-amber-amber-glow/R3V7WGPEUKUJCPYMMJ3OL6IH?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N",
  },
  {
    perfumeId: "white-oud-sea",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-white-oud-white-oud/MR3AMUW5GICZ4GGTF6LN5AOF?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N",
  },
  {
    perfumeId: "dahen-al-oud",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-dahen-al-oud-oud-essence/KQ4ZC4VN4X6HYN4WPREUTT5C?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N",
  },
  { perfumeId: "gucci-oud", buyUrl: "https://golden-aroma.square.site/product/inspired-by-gucci-oud-oud-prestige/SI4FCMGHGZTZ4C754EV7MLYJ?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N" },
  {
    perfumeId: "royal-oud-chopard",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-royal-oud-oud-royale/3XQHKVMDW7FLFVWKAXTLMNPS?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N",
  },
  { perfumeId: "kalemat", buyUrl: "https://golden-aroma.square.site/product/inspired-by-kalemat-essence/Q5U7VEHLJN4JK6NTGDAXQ3YT?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N" },
  { perfumeId: "zanbak", buyUrl: "https://example.com/shop/zanbak" },
  {
    perfumeId: "sultan-al-outor",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-sultan-al-outor-sultan-s-aura/VZCHHERJERQEFXGFH65FU2BM?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N",
  },
  {
    perfumeId: "white-musk-arabian",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-white-musk-pure-musk/4AIYAKHPRHP4TATYBRP7IOJD?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N",
  },
  { perfumeId: "black-musk", buyUrl: "https://golden-aroma.square.site/product/inspired-by-black-musk-noir-musk/EJLDIHTOBBDIXLSJ7G3TDYLQ?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N" },
  {
    perfumeId: "musk-al-harameen",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-musk-al-harameen-sacred-musk/PVNZNQ7KV7GHBLMV2H6NWDUR?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N",
  },
  {
    perfumeId: "musk-pomegranate",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-musk-pomegranate-ruby-musk/O6MFYNXSGN6VBWXCZWFFZ64W?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N",
  },
  {
    perfumeId: "musk-al-tahara",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-musk-al-tahara-tahara-musk/TBEVHYKMIEBREIS7XHT7AHWT?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N",
  },
  {
    perfumeId: "strawberry-musk",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-strawberry-musk-sweet-strawberry-musk/YEWOPTURWPT2RRD6FVMDA6IB?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N",
  },
  { perfumeId: "madawe-gold", buyUrl: "https://golden-aroma.square.site/product/inspired-by-madawe-gold-golden-madawe/HPXXWRWKLMLQ44LXOP2DWILP?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N" },
  {
    perfumeId: "molecule-020",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-molecule-020-molecular-essence/SOBTBOW727KE37PLGDLP7PLV?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N",
  },
  {
    perfumeId: "meydan-dubai",
    buyUrl: "https://example.com/shop/meydan-dubai",
  },
  { perfumeId: "la-luna", buyUrl: "https://example.com/shop/la-luna" },
  {
    perfumeId: "magic-al-jazeera",
    buyUrl: "https://example.com/shop/magic-al-jazeera",
  },
  { perfumeId: "wared-jore", buyUrl: "https://golden-aroma.square.site/product/inspired-by-wared-jori-rose-garden/6EC53W6HREOW5DZU4LYJ4Z2U?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N" },
  { perfumeId: "wisal", buyUrl: "https://example.com/shop/wisal" },
  { perfumeId: "yasmin", buyUrl: "https://golden-aroma.square.site/product/inspired-by-yasmin-jasmine-petals/4D3MMWYAHIDAGUN4GNLQRH7S?cp=true&sa=true&sbp=false&q=false" },
  { perfumeId: "khamrah", buyUrl: "https://golden-aroma.square.site/product/inspired-by-khamrah-lattafa-khamrah-delight/ESARNZ3OTQ6KAJGKQGSVWGNV?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N" },
  { perfumeId: "oud-bouquet", buyUrl: "https://golden-aroma.square.site/product/inspired-by-oud-bouquet-oud-bouquet/7XZM5432NG3YUXK2P3F7UGAE?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N" },
  {
    perfumeId: "silver-ghubar",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-ghubar-al-fidda-silver-mist/NZT4NNLWO4ACT4WG6W5I36Q7?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N",
  },
  {
    perfumeId: "wared-al-fel",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-wared-al-fel-fel-rose/6CCNRXS5BNM2YQGT5GWDVFFS?cp=true&sa=false&sbp=false&q=false&category_id=2GCWNDMHNSKSAA2K76ASX36N    ",
  },

  // Men's Perfumes
  { perfumeId: "eternity-ck", buyUrl: "https://golden-aroma.square.site/product/inspired-by-eternity-timeless-essence/V4PAS4QG4Y5VJ4GBAVJ3XIGU?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X" },
  {
    perfumeId: "chrome-extreme",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-chrome-extreme-ocean-intensity/BDWNHIS63LLED6ADCSIGXSL7?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X",
  },
  {
    perfumeId: "aventus-absolu",
    buyUrl: "http://golden-aroma.square.site/product/inspired-by-aventus-absolu-royal-absolu/YJUM6YHBAL636YNCYHSGR6KL?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X",
  },
  {
    perfumeId: "acqua-di-gio",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-acqua-di-gio-aqua-legacy/O4BSYAGGXSHVVGUQO6YIRVNO?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X",
  },
  { perfumeId: "ultra-male", buyUrl: "https://golden-aroma.square.site/product/inspired-by-ultra-male-midnight-rebel/IKJZCQOQ735S6C3JCBK5FL3Y?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X" },
  { perfumeId: "invictus", buyUrl: "https://golden-aroma.square.site/product/inspired-by-invictus-victor-s-spirit/VGFRL5EK2MS6L3MQJHMVKBBJ?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X" },
  {
    perfumeId: "invictus-victory-elixir",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-invictus-victory-elixir-eternal-triumph/UT2X47CW3MTRBSU5AXDMY3BG?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X",
  },
  {
    perfumeId: "eros-versace",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-versace-eros-flame-of-eros/Y4UHMI26KSKBYBVIPPXR5VO5?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X",
  },
  { perfumeId: "black-xs", buyUrl: "https://golden-aroma.square.site/product/inspired-by-black-xs-dark-pulse/QBY23ML3JTSNQ3OOTO5ZPOXU?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X" },
  {
    perfumeId: "black-xs-lexces",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-black-xs-l-exces-noir-excess/U635HIZFN3CF2BW36ZHMAS6N?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X",
  },
  {
    perfumeId: "bleu-de-chanel",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-bleu-de-chanel-blue-prestige/Y64FALUIRQXQUIENGWGF3NJF?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X",
  },
  { perfumeId: "pi-givenchy", buyUrl: "http://golden-aroma.square.site/product/inspired-by-pi-givenchy-infinite-pi/4WGYV7F6XP5UHN6FESIS752C?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X" },
  { perfumeId: "pegasus", buyUrl: "https://golden-aroma.square.site/product/inspired-by-pegasus-silver-stallion/5WYUJ3GEY2WLHRH2Y5EZGEBM?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X" },
  {
    perfumeId: "dunhill-desire",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-dunhill-desire-crimson-desire/JQFNDDZDISK7UWPACWREASQY?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X",
  },
  { perfumeId: "desire-blue", buyUrl: "https://golden-aroma.square.site/product/inspired-by-desire-blue-desire-sky/IGROB252NRRWB6NNYT7SSVFS?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X" },
  {
    perfumeId: "dior-homme-intense",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-dior-homme-intense-intense-longing/X7NM4CCLEUZ2NY3WZ3VRDULU?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X",
  },
  {
    perfumeId: "the-scent-elixir",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-the-scent-elixir-power-elixir/3ZSTAVJKO2XCSZSQX2EAL6ZJ?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X",
  },
  {
    perfumeId: "the-most-wanted",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-the-most-wanted-the-icon/X2JMFXW2BO3K3VTCUX7KSYUE?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X",
  },
  { perfumeId: "the-one-dg", buyUrl: "https://golden-aroma.square.site/product/inspired-by-dolce-gabbana-the-one-the-one-legend/WKCEO6TBYH4HF5ACF6YMG7L7?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X" },
  {
    perfumeId: "this-is-him-undressed",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-this-is-him-undressed-absolute-allure/TQQGG5RTT5DCLQERQ7LUUMLE?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X",
  },
  {
    perfumeId: "stronger-with-you",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-stronger-with-you-stronger/4CM6VGUTDQIBBRVGXQK6F652?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X",
  },
  {
    perfumeId: "stronger-with-you-tobacco",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-stronger-with-you-tobacco-tobacco-flame/6A6QCDCKCPFHMHHYIR3GCS47?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X",
  },
  { perfumeId: "sculpture", buyUrl: "https://golden-aroma.square.site/product/inspired-by-sculpture-marble-of-light/GI276LAFLTGU4JXTI2SKRJM4?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X" },
  {
    perfumeId: "silver-scent",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-silver-scent-silver-aura/GDMN5V4ELA3W3QGKNAEJZVS3?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X",
  },
  { perfumeId: "sauvage", buyUrl: "https://example.com/shop/sauvage" },
  {
    perfumeId: "sauvage-elixir",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-sauvage-elixir-savage-elixir/VJ74KGVOVDG4MEOA7ZN6IZFA?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X",
  },
  {
    perfumeId: "creed-silver-mountain",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-creed-silver-mountain-mountain-mist/JETFZGQ6GUILHFFFGNZ3P2MC?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X",
  },
  {
    perfumeId: "gucci-guilty-absolute",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-gucci-guilty-absolute-absolute-g/TBNXR5CJVCEDZLN475R35OBL?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X",
  },
  { perfumeId: "fahrenheit", buyUrl: "https://golden-aroma.square.site/product/inspired-by-fahrenheit-phoenix-blaze/KJPKTEGDRBE5LMLKMV3JWXWY?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X" },
  { perfumeId: "aventus", buyUrl: "https://golden-aroma.square.site/product/inspired-by-creed-aventus-noble-aventus/EKEVCCKQD2LBGAWMNLA3Z6XU?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X" },
  { perfumeId: "cool-water", buyUrl: "https://example.com/shop/cool-water" },
  {
    perfumeId: "lacoste-white",
    buyUrl: "https://golden-aroma.square.site/product/inspired-by-lacoste-white-l-12-12-white-spirit/LKVZVQQ7B7DZT44S4TB22TUD?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X",
  },
  { perfumeId: "le-male", buyUrl: "https://golden-aroma.square.site/product/inspired-by-le-male-le-masculine/6IJEFR4ZX5HM2GVKMAL23DLN?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X" },
  { perfumeId: "mr-thompson", buyUrl: "https://golden-aroma.square.site/product/inspired-by-mr-thompson-gentleman-s-legacy/TJGK4R32UCQUXYJQE6VRCAFB?cp=true&sa=false&sbp=false&q=false&category_id=FUZUO42ZJVS4T5CR7UQPRF4X" },
  {
    perfumeId: "legend-montblanc",
    buyUrl: "https://example.com/shop/legend-montblanc",
  },
  { perfumeId: "horizon", buyUrl: "https://example.com/shop/horizon" },
  { perfumeId: "hugo-boss", buyUrl: "https://example.com/shop/hugo-boss" },
  { perfumeId: "one-million", buyUrl: "https://example.com/shop/one-million" },
  {
    perfumeId: "one-million-extra",
    buyUrl: "https://example.com/shop/one-million-extra",
  },
  {
    perfumeId: "one-million-gold-oud",
    buyUrl: "https://example.com/shop/one-million-gold-oud",
  },
  {
    perfumeId: "one-million-lucky",
    buyUrl: "https://example.com/shop/one-million-lucky",
  },
  {
    perfumeId: "voyage-nautica",
    buyUrl: "https://example.com/shop/voyage-nautica",
  },

  // Women's Perfumes
  {
    perfumeId: "armani-code-women",
    buyUrl: "https://example.com/shop/armani-code-women",
  },
  { perfumeId: "taj-sunset", buyUrl: "https://example.com/shop/taj-sunset" },
  {
    perfumeId: "sexy-graffiti",
    buyUrl: "https://example.com/shop/sexy-graffiti",
  },
  {
    perfumeId: "moon-sparkle",
    buyUrl: "https://example.com/shop/moon-sparkle",
  },
  { perfumeId: "oriana", buyUrl: "https://example.com/shop/oriana" },
  { perfumeId: "euphoria-ck", buyUrl: "https://example.com/shop/euphoria-ck" },
  { perfumeId: "elie-saab", buyUrl: "https://example.com/shop/elie-saab" },
  {
    perfumeId: "alien-oud-majestueux",
    buyUrl: "https://example.com/shop/alien-oud-majestueux",
  },
  {
    perfumeId: "paris-hilton",
    buyUrl: "https://example.com/shop/paris-hilton",
  },
  {
    perfumeId: "bright-crystal",
    buyUrl: "https://example.com/shop/bright-crystal",
  },
  {
    perfumeId: "burberry-women",
    buyUrl: "https://example.com/shop/burberry-women",
  },
  { perfumeId: "black-opium", buyUrl: "https://example.com/shop/black-opium" },
  {
    perfumeId: "black-orchid",
    buyUrl: "https://example.com/shop/black-orchid",
  },
  {
    perfumeId: "black-opium-over-red",
    buyUrl: "https://example.com/shop/black-opium-over-red",
  },
  { perfumeId: "bombshell", buyUrl: "https://example.com/shop/bombshell" },
  {
    perfumeId: "baby-johnson",
    buyUrl: "https://example.com/shop/baby-johnson",
  },
  { perfumeId: "jadore", buyUrl: "https://example.com/shop/jadore" },
  { perfumeId: "delina", buyUrl: "https://example.com/shop/delina" },
  {
    perfumeId: "ralph-lauren-women",
    buyUrl: "https://example.com/shop/ralph-lauren-women",
  },
  {
    perfumeId: "rose-des-vents",
    buyUrl: "https://example.com/shop/rose-des-vents",
  },
  {
    perfumeId: "romance-intense",
    buyUrl: "https://example.com/shop/romance-intense",
  },
  { perfumeId: "212-sexy", buyUrl: "https://example.com/shop/212-sexy" },
  { perfumeId: "si-armani", buyUrl: "https://example.com/shop/si-armani" },
  { perfumeId: "chanel-no5", buyUrl: "https://example.com/shop/chanel-no5" },
  {
    perfumeId: "chanel-chance",
    buyUrl: "https://example.com/shop/chanel-chance",
  },
  { perfumeId: "gucci-bloom", buyUrl: "https://example.com/shop/gucci-bloom" },
  { perfumeId: "gucci-rush", buyUrl: "https://example.com/shop/gucci-rush" },
  {
    perfumeId: "victorias-secret",
    buyUrl: "https://example.com/shop/victorias-secret",
  },
  {
    perfumeId: "flora-gorgeous-jasmine",
    buyUrl: "https://example.com/shop/flora-gorgeous-jasmine",
  },
  { perfumeId: "flora-gucci", buyUrl: "https://example.com/shop/flora-gucci" },
  { perfumeId: "fantasy", buyUrl: "https://example.com/shop/fantasy" },
  {
    perfumeId: "vip-carolina",
    buyUrl: "https://example.com/shop/vip-carolina",
  },
  {
    perfumeId: "coco-mademoiselle",
    buyUrl: "https://example.com/shop/coco-mademoiselle",
  },
  {
    perfumeId: "queen-of-silk",
    buyUrl: "https://example.com/shop/queen-of-silk",
  },
  {
    perfumeId: "la-vie-est-belle",
    buyUrl: "https://example.com/shop/la-vie-est-belle",
  },
  {
    perfumeId: "love-is-heavenly",
    buyUrl: "https://example.com/shop/love-is-heavenly",
  },
  { perfumeId: "libre", buyUrl: "https://example.com/shop/libre" },
  { perfumeId: "my-way", buyUrl: "https://example.com/shop/my-way" },
  {
    perfumeId: "midnight-fantasy",
    buyUrl: "https://example.com/shop/midnight-fantasy",
  },
  {
    perfumeId: "narciso-rodriguez-black",
    buyUrl: "https://example.com/shop/narciso-rodriguez-black",
  },
  {
    perfumeId: "narciso-rodriguez-pink",
    buyUrl: "https://example.com/shop/narciso-rodriguez-pink",
  },
  {
    perfumeId: "scandal-absolu",
    buyUrl: "https://example.com/shop/scandal-absolu",
  },
  { perfumeId: "212-herrera", buyUrl: "https://example.com/shop/212-herrera" },
];

/**
 * Get the purchase URL for a specific perfume
 * @param perfumeId - The ID of the perfume
 * @returns The purchase URL for the perfume, or default URL if not found
 */
export function getPerfumeBuyUrl(perfumeId: string): string {
  const link = perfumeLinks.find((link) => link.perfumeId === perfumeId);
  return link ? link.buyUrl : DEFAULT_BUY_URL;
}

/**
 * Set or update a perfume's purchase URL
 * @param perfumeId - The ID of the perfume
 * @param buyUrl - The purchase URL
 */
export function setPerfumeBuyUrl(perfumeId: string, buyUrl: string): void {
  const existingLinkIndex = perfumeLinks.findIndex(
    (link) => link.perfumeId === perfumeId,
  );

  if (existingLinkIndex >= 0) {
    perfumeLinks[existingLinkIndex].buyUrl = buyUrl;
  } else {
    perfumeLinks.push({ perfumeId, buyUrl });
  }
}
