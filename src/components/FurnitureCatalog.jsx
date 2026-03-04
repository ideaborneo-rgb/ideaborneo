import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Search,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const FurnitureCatalog = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // Maksimal 3 baris x 4 kolom = 12 produk per tab
  const ITEMS_PER_PAGE = 12;

  const products = [
    {
      id: 1,
      name: 'Ranjang KUTAI NATURA KNA101',
      category: 'Ranjang',
      style: 'Minimalis',
      material: 'Kayu Solid',
      price: 'Rp 4.200.000',
      image: 'https://i.imgur.com/G39qmdG.jpeg',
      description: 'Ranjang Kayu Finishing Natural',
      detailDescription:
        'Ranjang kayu solid dengan desain minimalis natural yang cocok untuk kamar utama maupun kamar tamu. Konstruksi kokoh, tampilan hangat, dan dapat disesuaikan ukuran serta finishing sesuai kebutuhan ruangan.',
      specifications: [
        { label: 'Ukuran', value: '160 x 200 cm (custom tersedia)' },
        { label: 'Material', value: 'Kayu Solid' },
        { label: 'Finishing', value: 'Natural doff' },
        { label: 'Lead Time', value: '10–14 hari kerja' },
        { label: 'Garansi', value: '1 tahun konstruksi' },
        { label: 'Custom', value: 'Ukuran & warna finishing' },
      ],
    },
    {
      id: 2,
      name: 'Ranjang Tingkat ARUNA TTK001',
      category: 'Ranjang Tingkat',
      style: 'Minimalis',
      material: 'Kayu Solid',
      price: 'Rp 6.500.000',
      image: 'https://i.imgur.com/jcvo4jn.png',
      description: 'Ranjang Susun Kayu Finishing Natural',
      detailDescription:
        'Ranjang tingkat kayu solid untuk kamar anak atau guest house. Desain fungsional, aman, dan efisien ruang.',
      specifications: [
        { label: 'Ukuran', value: 'Atas 90x200 cm, Bawah 120x200 cm' },
        { label: 'Material', value: 'Kayu Solid' },
        { label: 'Finishing', value: 'Natural semi-matte' },
        { label: 'Lead Time', value: '14–21 hari kerja' },
        { label: 'Garansi', value: '1 tahun konstruksi' },
        { label: 'Fitur', value: 'Tangga samping + pengaman atas' },
      ],
    },
    {
      id: 3,
      name: 'Meja Mahakam MHK101',
      category: 'Meja Kerja',
      style: 'Modern',
      material: 'Kayu Solid',
      price: 'Rp 1.500.000',
      image: 'https://i.imgur.com/ZRzPZEc.png',
      description: 'Meja Kayu Finishing Natural',
      detailDescription:
        'Meja kerja compact dengan desain simpel modern. Cocok untuk kamar, ruang kerja rumah, atau kantor kecil.',
      specifications: [
        { label: 'Ukuran', value: '120 x 60 x 75 cm' },
        { label: 'Material', value: 'Kayu Solid' },
        { label: 'Finishing', value: 'Natural matte' },
        { label: 'Lead Time', value: '7–10 hari kerja' },
        { label: 'Garansi', value: '6 bulan konstruksi' },
        { label: 'Fitur', value: 'Laci penyimpanan 3 susun' },
      ],
    },
    {
      id: 4,
      name: 'Tempat Tidur JEDA JDA101',
      category: 'Ranjang',
      style: 'Minimalis',
      material: 'Kayu Solid',
      price: 'Rp 3.800.000',
      image: 'https://i.imgur.com/9Xy23ms.png',
      description: 'Ranjang king dengan bentuk desain yang unik',
      detailDescription:
        'Tempat tidur minimalis dengan karakter desain modern-natural. Cocok untuk interior kamar bernuansa hangat.',
      specifications: [
        { label: 'Ukuran', value: '180 x 200 cm (King)' },
        { label: 'Material', value: 'Kayu Solid' },
        { label: 'Finishing', value: 'Natural brown doff' },
        { label: 'Lead Time', value: '10–14 hari kerja' },
        { label: 'Garansi', value: '1 tahun konstruksi' },
        { label: 'Custom', value: 'Queen/King + warna' },
      ],
    },
    {
      id: 5,
      name: 'Ranjang Tingkat AZURIA AZR101',
      category: 'Ranjang Tingkat',
      style: 'Modern',
      material: 'Kayu Solid',
      price: 'Rp 7.900.000',
      image: 'https://i.imgur.com/urTA5mG.png',
      description: 'Ranjang Tingkat Kayu Modern',
      detailDescription:
        'Ranjang tingkat modern dengan tampilan clean dan kokoh. Cocok untuk kamar anak, asrama, atau homestay.',
      specifications: [
        { label: 'Ukuran', value: '90x200 cm + 90x200 cm' },
        { label: 'Material', value: 'Kayu Solid' },
        { label: 'Finishing', value: 'Walnut matte' },
        { label: 'Lead Time', value: '14–21 hari kerja' },
        { label: 'Garansi', value: '1 tahun konstruksi' },
        { label: 'Fitur', value: 'Guard rail + struktur tebal' },
      ],
    },
    {
      id: 6,
      name: 'Ranjang Tingkat RIMBA RIM101',
      category: 'Ranjang Tingkat',
      style: 'Minimalis',
      material: 'Kayu Solid',
      price: 'Rp 4.200.000',
      image: 'https://i.imgur.com/KE0k4Sw.png',
      description: 'Ranjang Tingkat Tempat Nyaman Untuk Bersantai',
      detailDescription:
        'Ranjang tingkat hemat ruang dengan desain sederhana dan harga terjangkau.',
      specifications: [
        { label: 'Ukuran', value: '90x200 cm + 90x200 cm' },
        { label: 'Material', value: 'Kayu Solid' },
        { label: 'Finishing', value: 'Natural coating' },
        { label: 'Lead Time', value: '10–18 hari kerja' },
        { label: 'Garansi', value: '1 tahun konstruksi' },
        { label: 'Opsional', value: 'Tambahan laci bawah' },
      ],
    },
    {
      id: 7,
      name: 'AURORA SLIDE ARL101',
      category: 'Lemari',
      style: 'Modern',
      material: 'Kayu Solid',
      price: 'Rp 4.900.000',
      image: 'https://i.imgur.com/czH4oR5.png',
      description: 'Lemari Pakaian Minimalis Modern',
      detailDescription:
        'Lemari pakaian modern dengan pintu geser yang hemat ruang dan kapasitas penyimpanan optimal.',
      specifications: [
        { label: 'Ukuran', value: '160 x 55 x 200 cm' },
        { label: 'Material', value: 'Kayu Solid' },
        { label: 'Finishing', value: 'Natural + clear coat' },
        { label: 'Lead Time', value: '14–21 hari kerja' },
        { label: 'Garansi', value: '1 tahun hardware & konstruksi' },
        { label: 'Fitur', value: 'Pintu slide, rak & gantungan' },
      ],
    },
    {
      id: 8,
      name: 'Ranjang INTEGRA INT101',
      category: 'Ranjang Tingkat',
      style: 'Modern',
      material: 'Kayu Solid',
      price: 'Rp 4.200.000',
      image: 'https://i.imgur.com/4NCbVJl.png',
      description: 'Ranjang Tingkat Dengan Fitur Yang Kompleks',
      detailDescription:
        'Loft bed / ranjang tingkat multifungsi dengan konsep modern untuk memaksimalkan ruang.',
      specifications: [
        { label: 'Ukuran', value: 'Loft 100 x 200 cm (custom)' },
        { label: 'Material', value: 'Kayu Solid' },
        { label: 'Finishing', value: 'Natural / custom color' },
        { label: 'Lead Time', value: '18–24 hari kerja' },
        { label: 'Garansi', value: '1 tahun konstruksi' },
        { label: 'Fitur', value: 'Storage + meja / modul custom' },
      ],
    },
    {
      id: 9,
      name: 'QUADRANT X 401',
      category: 'Meja Workstation',
      style: 'Modern',
      material: 'Plywood HPL',
      price: 'Rp 7.900.000',
      image: 'https://i.imgur.com/cPT3hRG.png',
      description: 'Meja Kerja Terbuat Dari Plywood & HPL',
      detailDescription:
        'Workstation modern untuk kantor dan ruang kerja profesional.',
      specifications: [
        { label: 'Ukuran', value: 'Custom layout workstation' },
        { label: 'Material', value: 'Plywood + HPL' },
        { label: 'Finishing', value: 'HPL motif kayu / solid color' },
        { label: 'Lead Time', value: '14–30 hari kerja (tergantung layout)' },
        { label: 'Garansi', value: '6 bulan instalasi & konstruksi' },
        { label: 'Fitur', value: 'Cable management (opsional)' },
      ],
    },
    {
      id: 10,
      name: 'Meja Konferensi TITAN TTN101 & Kursi AURA AUR201',
      category: 'Meja',
      style: 'Modern',
      material: 'Kayu Solid',
      price: 'Custom / Hubungi Kami',
      image: 'https://i.imgur.com/7CwiAhI.png',
      description: 'Meja Konfersi dan Kombinasi Kursi Yang Nyaman',
      detailDescription:
        'Set meja konferensi dan kursi untuk ruang meeting dengan tampilan premium.',
      specifications: [
        { label: 'Ukuran', value: 'Custom sesuai kapasitas ruang meeting' },
        { label: 'Material', value: 'Kayu Solid + kombinasi kursi' },
        { label: 'Finishing', value: 'Custom (natural / walnut / dark tone)' },
        { label: 'Lead Time', value: '21–35 hari kerja' },
        { label: 'Garansi', value: '1 tahun konstruksi meja' },
        { label: 'Catatan', value: 'Harga menyesuaikan ukuran & jumlah kursi' },
      ],
    },
    {
      id: 11,
      name: 'Loft Bed System AURA AUR401',
      category: 'Ranjang Tingkat',
      style: 'Modern',
      material: 'Kayu Solid',
      price: 'Custom / Hubungi Kami',
      image: 'https://i.imgur.com/42P2ivh.png',
      description: 'Ranjang Tingkat Lengkap Dengan Meja Belajar',
      detailDescription:
        'Loft bed system lengkap dengan area meja belajar dan penyimpanan.',
      specifications: [
        { label: 'Ukuran', value: 'Custom sesuai layout kamar' },
        { label: 'Material', value: 'Kayu Solid' },
        { label: 'Finishing', value: 'Natural / duco / custom' },
        { label: 'Lead Time', value: '21–30 hari kerja' },
        { label: 'Garansi', value: '1 tahun konstruksi' },
        { label: 'Fitur', value: 'Meja belajar + rak + storage' },
      ],
    },
    {
      id: 12,
      name: 'Dapur ZENITH DUO ZD203',
      category: 'Kitchen Set',
      style: 'Modern',
      material: 'Plywood HPL',
      price: 'Custom / Hubungi Kami',
      image: 'https://i.imgur.com/YRdBz5A.png',
      description: 'Dapur Premium Kitchen Set Elegan',
      detailDescription:
        'Kitchen set modern premium dengan desain elegan dan fungsional.',
      specifications: [
        { label: 'Ukuran', value: 'Custom per meter lari / layout dapur' },
        { label: 'Material', value: 'Plywood HPL' },
        { label: 'Finishing', value: 'HPL matte / glossy (custom)' },
        { label: 'Lead Time', value: '21–40 hari kerja' },
        { label: 'Garansi', value: '6 bulan instalasi & hardware' },
        { label: 'Fitur', value: 'Kabinet atas-bawah, top table, sink area' },
      ],
    },

    // ====== TAMBAHKAN PRODUK BARU DI BAWAH SINI ======
    // Pastikan ID unik ya.
  ];

  // ---- helpers
  const normalize = (v) => (v ?? '').toString().toLowerCase().trim();

  // urutkan dulu by id
  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => Number(a.id) - Number(b.id));
  }, [products]);

  // filter by search
  const filteredProducts = useMemo(() => {
    const q = normalize(searchQuery);
    if (!q) return sortedProducts;

    return sortedProducts.filter((p) => {
      const haystack = [
        p.name,
        p.category,
        p.style,
        p.material,
        p.description,
        p.detailDescription,
        p.price,
      ]
        .map(normalize)
        .join(' ');

      return haystack.includes(q);
    });
  }, [sortedProducts, searchQuery]);

  // kalau search berubah, balik ke page 1 biar aman
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);

  const handleWhatsApp = (product) => {
    const message = `Halo IDEABORNEO, saya tertarik dengan ${product.name}. Bisa minta info lebih lanjut (spesifikasi, harga final, dan estimasi pengerjaan)?`;
    window.open(`https://wa.me/62811533027?text=${encodeURIComponent(message)}`, '_blank');
  };

  const openDetail = (product) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };

  const closeDetail = () => setIsDetailOpen(false);

  return (
    <section id="catalog" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="text-[hsl(40,49%,57%)] font-semibold text-sm uppercase tracking-wider">
            Katalog Furniture
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(0,0%,12%)] mt-4 mb-6">
            Koleksi Furniture Premium Kami
          </h2>
          <p className="text-lg text-[hsl(0,0%,35%)] leading-relaxed">
            Temukan furniture berkualitas dengan desain custom sesuai kebutuhan Anda
          </p>
        </motion.div>

        {/* Search Bar (di atas produk) */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[hsl(0,0%,45%)]" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari produk, material, gaya, kategori..."
              className="w-full pl-12 pr-12 py-4 rounded-2xl border-2 border-[hsl(40,20%,80%)] focus:outline-none focus:border-[hsl(24,35%,39%)] text-[hsl(0,0%,15%)]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-black/5"
                aria-label="Clear search"
              >
                <X className="w-4 h-4 text-[hsl(0,0%,45%)]" />
              </button>
            )}
          </div>

          <div className="text-center text-sm text-[hsl(0,0%,40%)] mt-3">
            {filteredProducts.length === 0 ? (
              <span>Tidak ada produk yang cocok.</span>
            ) : (
              <span>
                Ditemukan <span className="font-semibold">{filteredProducts.length}</span> produk
              </span>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div
          key={`page-${currentPage}-${normalize(searchQuery)}`}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
        >
          {paginatedProducts.map((product, index) => (
            <motion.div
              key={`${product.id}-${product.name}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="group bg-white rounded-2xl border-2 border-[hsl(40,20%,80%)] hover:border-[hsl(24,35%,39%)] shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-[hsl(40,30%,95%)]">
                <img
                  src={product.image}
                  alt={`${product.name} - ${product.description}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">{product.description}</p>
                  </div>
                </div>
                <Badge className="absolute top-4 right-4 bg-[hsl(40,49%,57%)] text-white border-0">
                  {product.style}
                </Badge>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-3">
                  <Badge
                    variant="outline"
                    className="text-xs border-[hsl(24,35%,39%)] text-[hsl(24,35%,39%)]"
                  >
                    {product.category}
                  </Badge>
                </div>

                <h3 className="text-lg font-bold text-[hsl(0,0%,12%)] mb-2 line-clamp-2 min-h-[56px]">
                  {product.name}
                </h3>

                <p className="text-sm text-[hsl(0,0%,35%)] mb-4">{product.material}</p>

                <div className="flex items-baseline justify-between mb-4 gap-2">
                  <span className="text-xs text-[hsl(0,0%,35%)] shrink-0">Mulai dari</span>
                  <span className="text-xl font-bold text-[hsl(24,35%,39%)] text-right">
                    {product.price}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    onClick={() => openDetail(product)}
                    variant="outline"
                    size="sm"
                    className="flex-1 border-[hsl(24,35%,39%)] text-[hsl(24,35%,39%)] hover:bg-[hsl(24,35%,39%)] hover:text-white"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Detail
                  </Button>

                  <Button
                    onClick={() => handleWhatsApp(product)}
                    size="sm"
                    className="flex-1 bg-[hsl(40,49%,57%)] hover:bg-[hsl(40,49%,47%)] text-white"
                  >
                    <MessageCircle className="w-4 h-4 mr-1" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length > 0 && paginatedProducts.length === 0 && (
          <div className="text-center py-10 text-[hsl(0,0%,40%)]">
            Tidak ada produk di halaman ini.
          </div>
        )}

        {/* Info Halaman (di bawah produk) */}
        <div className="text-center text-sm text-[hsl(0,0%,40%)] mb-4">
          Menampilkan{' '}
          <span className="font-semibold">
            {filteredProducts.length === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1}
          </span>
          {' - '}
          <span className="font-semibold">
            {Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)}
          </span>{' '}
          dari <span className="font-semibold">{filteredProducts.length}</span> produk
        </div>

        {/* Tab Angka / Pagination (di bawah produk) */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1 || filteredProducts.length === 0}
            className="border-[hsl(40,20%,80%)]"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Prev
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => setCurrentPage(page)}
              disabled={filteredProducts.length === 0}
              className={`h-10 min-w-10 px-3 rounded-xl border text-sm font-semibold transition-all ${
                currentPage === page
                  ? 'bg-[hsl(24,35%,39%)] text-white border-[hsl(24,35%,39%)] shadow'
                  : 'bg-white text-[hsl(0,0%,25%)] border-[hsl(40,20%,80%)] hover:border-[hsl(24,35%,39%)] hover:text-[hsl(24,35%,39%)]'
              } ${filteredProducts.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {page}
            </button>
          ))}

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages || filteredProducts.length === 0}
            className="border-[hsl(40,20%,80%)]"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        {/* Detail Modal (custom, no shadcn dialog) */}
        {isDetailOpen && selectedProduct && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeDetail}
          >
            <div
              className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeDetail}
                className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white text-gray-700 rounded-full p-2 shadow"
                aria-label="Tutup"
                type="button"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Left: Image */}
                <div className="relative bg-[hsl(40,30%,95%)] min-h-[280px] md:min-h-full">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-[hsl(40,49%,57%)] text-white border-0">
                    {selectedProduct.style}
                  </Badge>
                </div>

                {/* Right: Detail */}
                <div className="p-6 md:p-7">
                  <div className="mb-2">
                    <Badge
                      variant="outline"
                      className="text-xs border-[hsl(24,35%,39%)] text-[hsl(24,35%,39%)]"
                    >
                      {selectedProduct.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-[hsl(0,0%,12%)] leading-snug">
                    {selectedProduct.name}
                  </h3>

                  <p className="text-sm text-[hsl(0,0%,35%)] leading-relaxed mt-2">
                    {selectedProduct.detailDescription || selectedProduct.description}
                  </p>

                  <div className="mt-5 mb-5">
                    <p className="text-xs text-[hsl(0,0%,35%)] mb-1">Mulai dari</p>
                    <p className="text-2xl font-bold text-[hsl(24,35%,39%)]">
                      {selectedProduct.price}
                    </p>
                  </div>

                  {/* Spesifikasi */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[hsl(0,0%,12%)]">Spesifikasi Produk</h4>

                    <div className="rounded-xl border border-[hsl(40,20%,85%)] overflow-hidden">
                      {(selectedProduct.specifications || []).map((spec, idx) => (
                        <div
                          key={`${selectedProduct.id}-${spec.label}-${idx}`}
                          className={`grid grid-cols-3 gap-3 px-4 py-3 text-sm ${
                            idx !== (selectedProduct.specifications || []).length - 1
                              ? 'border-b border-[hsl(40,20%,90%)]'
                              : ''
                          }`}
                        >
                          <span className="text-[hsl(0,0%,35%)]">{spec.label}</span>
                          <span className="col-span-2 font-medium text-[hsl(0,0%,12%)]">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 flex flex-col sm:flex-row gap-2">
                    <Button
                      variant="outline"
                      onClick={closeDetail}
                      className="flex-1 border-[hsl(24,35%,39%)] text-[hsl(24,35%,39%)] hover:bg-[hsl(24,35%,39%)] hover:text-white"
                    >
                      Tutup
                    </Button>

                    <Button
                      onClick={() => handleWhatsApp(selectedProduct)}
                      className="flex-1 bg-[hsl(40,49%,57%)] hover:bg-[hsl(40,49%,47%)] text-white"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Tanya via WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FurnitureCatalog;