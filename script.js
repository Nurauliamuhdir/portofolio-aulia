document.addEventListener('DOMContentLoaded', () => {
  // 1. Toggle Menu Navigasi Mobile
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 2. Filter Interaktif Kategori Proyek
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Reset gaya tombol aktif
      filterButtons.forEach((b) => {
        b.classList.remove('active', 'bg-[#1E293B]', 'text-[#FAF9F6]');
        b.classList.add('bg-white', 'text-[#475569]', 'border', 'border-[#E2E8F0]');
      });

      // Set tombol yang diklik menjadi aktif
      btn.classList.add('active', 'bg-[#1E293B]', 'text-[#FAF9F6]');
      btn.classList.remove('bg-white', 'text-[#475569]');

      const selectedCategory = btn.getAttribute('data-filter');

      // Tampilkan atau sembunyikan kartu proyek sesuai kategori
      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});