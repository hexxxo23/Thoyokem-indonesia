/**
 * Produk Page JavaScript - Thoyokem Indonesia
 * Handles product data, table display, FAQ toggle, and query parameters
 */

// Product data structure
const dataMakanan = {
    PRE_TREATMENT_AUXILIARIES: [
        { nama: 'Thoyoscour CE-11', deskripsi: 'Scouring agent untuk semua jenis kain, PE, Cotton atau campurannya'},
        { nama: 'Thoyoscour DMC', deskripsi: 'Scouring agent untuk kain Polyester atau campurannya'},
        { nama: 'Thoyoscour SMC-4', deskripsi: 'Scouring agent spesial untuk proses continues semua serat'},
        { nama: 'Thoyoscour SO', deskripsi: 'Scouring agent dengan basic Phospate Ester'},
        { nama: 'Thoyoscour PET-29', deskripsi: 'Scouring agent low foaming untuk kain polyester dengan mesin JET Dyeing'},
        { nama: 'Thoyoscour NBS', deskripsi: 'Scouring agent yang cocok untuk jenis kain Nylon'},
        { nama: 'Thoyoscour AW', deskripsi: 'Scouring agent yang cocok untuk jenis kain Acrylic/Woll'},
        { nama: 'Thoyowet AFC 5', deskripsi: 'Wetting agent dengan daya penetrasi yang sangat baik'},
        { nama: 'Thoyowet MCR', deskripsi: 'Wetting agent tahan caustic untuk proses mercerize atau wight reduce'},
        { nama: 'Thoyowet DAW', deskripsi: 'Deaerating agent untuk mempermudah pembasahan kain'},
        { nama: 'Thoyocrease FA', deskripsi: 'Anti creasemark dengan basic Fatty Acid'},
        { nama: 'Thoyocrease POB', deskripsi: 'Anti creasemark dengan basic kimia polymer'},
        { nama: 'Thoyoliary MP', deskripsi: 'Multi Purpose, scouring, dan wshing untuk proses cepat dyeing cotton warna tua'},
        { nama: 'Thoyosquest PB', deskripsi: 'Squestering agent, tahan terhadap hydroslisis, temperatur tinggi & pH'},
        { nama: 'Thoyosquest T-20', deskripsi: 'Squestering agent'},
        { nama: 'Presquester RC', deskripsi: 'Squestering, soaping agent untuk zat warna reaktif'},
        { nama: 'Perokill AP', deskripsi: 'Peroxide killer'},
        { nama: 'Thoyostab NS', deskripsi: 'Stabilizer (penstabil H2O2) non silikat'},
        { nama: 'Thoyowash MR', deskripsi: 'Sabun tahan kostik'}
    ],
    DYEING_AUXILIARIES: [
        { nama: 'Thoyolev P-57', deskripsi: 'Levelling dispersing agent untuk pencelupan polyester'},
        { nama: 'Thoyolev A-45', deskripsi: 'Levelling dispersing agent untuk pencelupan polyester khususnya benang'},
        { nama: 'Thoyolev B-76', deskripsi: 'Levelling agent konsentrasi tinggi'},
        { nama: 'Thoyolev NBS', deskripsi: 'Levelling agent untuk proses celup Nylon'},
        { nama: 'Dispersing ES-25', deskripsi: 'Dispersing agent untuk pencelupan polyester dan campurannya'},
        { nama: 'Bright NCS', deskripsi: 'Celup 1 proses tanpa levelling -asam- dispersing'},
        { nama: 'Thoyofine AN-03', deskripsi: 'Dyeing agent, pembuat suasana pH asam sekaligus dapat untuk netralisasi'},
        { nama: 'Thoyofine PSP', deskripsi: 'Subtitusi Soda ash power'},
        { nama: 'Thoyofine SSA', deskripsi: 'Subtitusi Soda ash cair'},
        { nama: 'Thoyoliary MP', deskripsi: 'Multi Purpose – Scouring, Washing untuk simple proses cotton warna tua'},
        { nama: 'Thoyoliary PDS', deskripsi: 'Multi Purpose – Desizing, Scouring, Bleaching kain polyester woven'},
        { nama: 'Carrier KB', deskripsi: 'Carrier Agent untuk celup kain Putih < 100°C'},
        { nama: 'Carrier MN', deskripsi: 'Carrier Agent untuk celup kain warna < 100°C'}
    ],
    PRINTING_AUXILIARIES: [
        { nama: 'Binder 2ST', deskripsi: 'Binder Pigment – Copolymer of Acrylic & Vynil Acrylate'},
        { nama: 'Binder DT-100', deskripsi: 'Binder Pigment – Copolymer of Acrylic & Vynil Acrylate'},
        { nama: 'Binder DT-200', deskripsi: 'Binder Pigment – Copolymer of Acrylic & Vynil Acrylate'},
        { nama: 'Binder EBS', deskripsi: 'Binder Pigment – Copolymer of Acrylic & Vynil Acrylate'},
        { nama: 'Binder Soft SB', deskripsi: 'Binder Pigment (Soft Handle)'},
        { nama: 'Bronze Binder', deskripsi: 'Binder untuk Bronze Powder'},
        { nama: 'Emulsifier DML', deskripsi: 'Pengental basic Emulsifier'},
        { nama: 'Thoyoprint D-11', deskripsi: 'Pengental Synthetic untuk Disperse Printing'},
        { nama: 'Thoyoprint DP', deskripsi: 'Pengental Synthetic untuk Disperse Printing'},
        { nama: 'Thoyoprint PES', deskripsi: 'Pengental Synthetic untuk Disperse Printing'},
        { nama: 'Brightprint WF', deskripsi: 'Pengental Synthetic untuk Pigment Printing'},
        { nama: 'Thoyoprint P-17', deskripsi: 'Pengental Synthetic untuk Pigment Printing'},
        { nama: 'Thoyoprint R-08', deskripsi: 'Pengental Synthetic untuk Reaktif Printing'},
        { nama: 'Thoyoprint R8H', deskripsi: 'Pengental Campuran Synthetic Alginat untuk Reaktif Printing'},
        { nama: 'Thoyoprint RC New', deskripsi: 'Pengental Campuran Synthetic Alginat untuk Reaktif Printing'},
        { nama: 'Thoyoprint DA 200', deskripsi: 'Penambah daya tembus pada printing (deaerating agent)'},
        { nama: 'TY Print Oil', deskripsi: 'Oil Lubricant untuk Pigment Print'},
        { nama: 'Alginate LV', deskripsi: 'Pengental Alginate (ganggang laut) dengan Kekentalan Rendah'},
        { nama: 'Alginate HV', deskripsi: 'Pengental Alginate (ganggang laut) dengan Kekentalan Tinggi'},
        { nama: 'Alginate MV', deskripsi: 'Pengental Alginate (ganggang laut) dengan Kekentalan Menengah'}
    ],
    SOAPING_RC: [
        { nama: 'Thoyosoap CLN', deskripsi: 'Soaping agent acrylate based', kategori: 'AFTER-TREATMENT AUXILIARIES' },
        { nama: 'Thoyosoap RC', deskripsi: 'Soaping agent yang mengandung squestering agent tahan kostik', kategori: 'AFTER-TREATMENT AUXILIARIES' },
        { nama: 'Thoyosoap TCR', deskripsi: 'Soaping agent alcohol ethoxylate', kategori: 'AFTER-TREATMENT AUXILIARIES' },
        { nama: 'Thoyosoap RC-20', deskripsi: 'Soaping agent alcohol ethoxylate (cuci reaktif), menghemat air', kategori: 'AFTER-TREATMENT AUXILIARIES' },
        { nama: 'Thoyowash RCA', deskripsi: 'Reduction cleaning untuk polyester suasana asam', kategori: 'AFTER-TREATMENT AUXILIARIES' },
        { nama: 'Thoyowash TH-25', deskripsi: 'Reduction cleaning untuk polyester suasana alkali', kategori: 'AFTER-TREATMENT AUXILIARIES' },
        { nama: 'Thoyofix – 40D', deskripsi: 'Fixing agent untuk reaktif', kategori: 'AFTER-TREATMENT AUXILIARIES' },
        { nama: 'Thoyofix NF', deskripsi: 'Fixing agent untuk direk dan reaktif', kategori: 'AFTER-TREATMENT AUXILIARIES' }
    ],
    DYES_PIGMENT: [
        { nama: 'Sky Blue', deskripsi: 'Zat Warna Pigment', kategori: 'PIGMENT COLORS' },
        { nama: 'TY Black NJK', deskripsi: 'Zat Warna Pigment', kategori: 'PIGMENT COLORS' },
        { nama: 'TY Blue P-02', deskripsi: 'Zat Warna Pigment', kategori: 'PIGMENT COLORS' },
        { nama: 'TY Orange 13', deskripsi: 'Zat Warna Pigment', kategori: 'PIGMENT COLORS' },
        { nama: 'TY Red Gr', deskripsi: 'Zat Warna Pigment', kategori: 'PIGMENT COLORS' },
        { nama: 'Ty Red Gr New', deskripsi: 'Zat Warna Pigment', kategori: 'PIGMENT COLORS' },
        { nama: 'TT Red S-02', deskripsi: 'Zat Warna Pigment', kategori: 'PIGMENT COLORS' },
        { nama: 'Violet FFBN', deskripsi: 'Zat Warna Pigment', kategori: 'PIGMENT COLORS' },
        { nama: 'Brightwhite CN', deskripsi: 'Zat Warna Pigment', kategori: 'PIGMENT COLORS' }
    ],
    FINISHING: [
        { nama: 'Thoyosoft CK', deskripsi: 'Softener cationic Fatty Acid', kategori: 'FINISHING AUXILIARIES' },
        { nama: 'Thoyosoft CFL', deskripsi: 'Softener Flake cationic Fatty Acid', kategori: 'FINISHING AUXILIARIES' },
        { nama: 'Thoyosoft NI', deskripsi: 'Softener Non Ionic Fatty Acid', kategori: 'FINISHING AUXILIARIES' },
        { nama: 'Thoyosoft NLC', deskripsi: 'Softener Non Ionic Fatty Acid', kategori: 'FINISHING AUXILIARIES' },
        { nama: 'Thoyosoft NHC', deskripsi: 'Softener Non Ionic Fatty Acid', kategori: 'FINISHING AUXILIARIES' },
        { nama: 'Thoyofeel HN-15', deskripsi: 'Softener Non Ionic water absorb', kategori: 'FINISHING AUXILIARIES' },
        { nama: 'Thoyofeel HC-10', deskripsi: 'Softener cationic water absorb', kategori: 'FINISHING AUXILIARIES' },
        { nama: 'Thoyosoft WD', deskripsi: 'Softener cationic for cotton, water absorb', kategori: 'FINISHING AUXILIARIES' },
        { nama: 'Thoyosoft HDP', deskripsi: 'Silicone Hydrophilic', kategori: 'FINISHING AUXILIARIES' },
        { nama: 'Thoyosoft QME', deskripsi: 'Softener Quaternary Blend Parafin Wax', kategori: 'FINISHING AUXILIARIES' },
        { nama: 'Hydrosoft SR', deskripsi: 'Softener Amino Silicone untuk semua jenis serat', kategori: 'FINISHING AUXILIARIES' },
        { nama: 'Hydrosoft AW', deskripsi: 'Softener Amino Silicone untuk semua jenis serat', kategori: 'FINISHING AUXILIARIES' },
        { nama: 'Hydrosoft Conc', deskripsi: 'Softener Amino Silicone High Conc', kategori: 'FINISHING AUXILIARIES' },
        { nama: 'Hydrosoft SP Conc', deskripsi: 'Softener Amino Silicone High Conc', kategori: 'FINISHING AUXILIARIES' },
        { nama: 'Hydrosoft SS 150', deskripsi: 'Silicone Softener Siloxanes Derivative', kategori: 'FINISHING AUXILIARIES' },
        { nama: 'Thoyores DLP', deskripsi: 'Pengeras – Basic Melamine Formaldehide', kategori: 'FINISHING AUXILIARIES' },
        { nama: 'Thoyores EP', deskripsi: 'Pengeras – Basic Melamine Formaldehide', kategori: 'FINISHING AUXILIARIES' },
        { nama: 'Thoyofoam Conc SE', deskripsi: 'Antifoam Conc – Silicone', kategori: 'FINISHING AUXILIARIES' },
        { nama: 'Thoyofoam SP', deskripsi: 'Antifoam', kategori: 'FINISHING AUXILIARIES' },
        { nama: 'Thoyostiff 5101', deskripsi: 'Pengeras Poly Vynil Acetat (PVAc) sc 40', kategori: 'FINISHING AUXILIARIES' },
        { nama: 'Thoyostiff J5', deskripsi: 'Pengeras Poly Vynil Acetat (PVAc) sc 50', kategori: 'FINISHING AUXILIARIES' },
        { nama: 'Thoyowax PRF', deskripsi: 'Softener emulsi untuk kalendering efek', kategori: 'FINISHING AUXILIARIES' },
        { nama: 'Filler PCR', deskripsi: 'Filler untuk pengisi semua jenis kain', kategori: 'FINISHING AUXILIARIES' }
    ],
    WATER_TREATMENT: [
        { nama: 'PAC Powder', deskripsi: 'Poly Alumunium Cloride (PAC)', kategori: 'GENERAL CHEMICALS' }
    ],
    SPECIALITY: [
        { nama: 'Flameguard TYB', deskripsi: 'Anti Api', kategori: 'SPECIAL FUNCTION AUXILIARIES' },
        { nama: 'Thoyoguard FSC', deskripsi: 'Water repellent C-6', kategori: 'SPECIAL FUNCTION AUXILIARIES' },
        { nama: 'Thoyoguard FZ', deskripsi: 'Water repellent C-0', kategori: 'SPECIAL FUNCTION AUXILIARIES' },
        { nama: 'Thoyofine AM', deskripsi: 'Anti Migrasi', kategori: 'SPECIAL FUNCTION AUXILIARIES' },
        { nama: 'Thoyoprint AR', deskripsi: 'Anti Reduksi', kategori: 'SPECIAL FUNCTION AUXILIARIES' }
    ],
    GENERAL_CHEMICAL: [
        { nama: 'Acetic Acid Lotte', deskripsi: 'Bahan kimia dasar (asam asetat) – merk Lotte', kategori: 'BASIC & SUPPORTING CHEMICALS' },
        { nama: 'Acetic Acid Mitsui', deskripsi: 'Bahan kimia dasar (asam asetat) – merk Mitsui', kategori: 'BASIC & SUPPORTING CHEMICALS' },
        { nama: 'EDTA 4 NA', deskripsi: 'Chelating agent (pengkelat logam berat)', kategori: 'BASIC & SUPPORTING CHEMICALS' },
        { nama: 'H2O2', deskripsi: 'Hidrogen Peroksida – bleaching agent', kategori: 'BASIC & SUPPORTING CHEMICALS' },
        { nama: 'Thoyo Thio', deskripsi: 'Reduksi agent (kemungkinan Sodium Thiosulfate)', kategori: 'BASIC & SUPPORTING CHEMICALS' },
        { nama: 'PEG 4000', deskripsi: 'Polyethylene Glycol – pelarut & pelunak', kategori: 'BASIC & SUPPORTING CHEMICALS' },
        { nama: 'Thoyosive LMB', deskripsi: 'Kemungkinan bahan bantu khusus (belum ada deskripsi lengkap)', kategori: 'BASIC & SUPPORTING CHEMICALS' }
    ]
};

/**
 * Display product table based on selected category
 */
function tampilkanTabel() {
    const pilihan = document.getElementById('produk').value;
    const isiTabel = document.getElementById('isiTabel');
    const tabel = document.getElementById('tabelHasil');

    // Clear table first
    isiTabel.innerHTML = '';

    if (dataMakanan[pilihan]) {
        dataMakanan[pilihan].forEach(item => {
            const row = document.createElement('tr');

            const cellNama = document.createElement('td');
            cellNama.textContent = item.nama;

            const cellDeskripsi = document.createElement('td');
            cellDeskripsi.textContent = item.deskripsi;

            row.appendChild(cellNama);
            row.appendChild(cellDeskripsi);

            isiTabel.appendChild(row);
        });
        tabel.style.display = 'table';
    } else {
        tabel.style.display = 'none';
    }
}

/**
 * Toggle FAQ answers
 * @param {HTMLElement} element - The FAQ item element
 */
function toggleFAQ(element) {
    const answer = element.querySelector('.faq-answer');
    if (answer) {
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    }
}

/**
 * Get query parameter from URL
 * @param {string} param - Parameter name
 * @returns {string|null} Parameter value
 */
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

/**
 * Initialize product page functionality
 */
function initializeProductPage() {
    console.log('Initializing product page...');
    
    // Handle query parameters for pre-selection
    const pilihan = getQueryParam("pilihan");
    if (pilihan) {
        const select = document.getElementById("produk");
        if (select) {
            select.value = pilihan;
            tampilkanTabel(); // Display table based on selection
        }
    }
    
    // Bind event handler for product selection
    const productSelect = document.getElementById("produk");
    if (productSelect) {
        productSelect.addEventListener('change', tampilkanTabel);
    }
    
    console.log('Product page initialized successfully');
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeProductPage);

// Export functions for global use
window.tampilkanTabel = tampilkanTabel;
window.toggleFAQ = toggleFAQ;
window.getQueryParam = getQueryParam;
window.initializeProductPage = initializeProductPage;
