const INITIAL_VISIBLE = 15;

const openFiltersBtn = document.getElementById('open-filters-btn') as HTMLElement;
const closeFiltersBtn = document.getElementById('close-filters-btn') as HTMLElement;
const filterOverlay = document.getElementById('filter-overlay') as HTMLElement;
const filterModal = document.getElementById('filter-modal') as HTMLElement;
const clearFiltersBtn = document.getElementById('clear-filters-btn') as HTMLElement;
const showResultsBtn = document.getElementById('show-results-btn') as HTMLElement;

function openFilters() {
  filterOverlay.classList.remove('opacity-0', 'pointer-events-none');
  filterOverlay.classList.add('opacity-100', 'pointer-events-auto');
  filterModal.classList.remove('translate-x-full');
  filterModal.classList.add('translate-x-0');
  document.body.style.overflow = 'hidden';
  filterOverlay.setAttribute('aria-hidden', 'false');
  closeFiltersBtn.focus();
}

function closeFilters() {
  filterOverlay.classList.add('opacity-0', 'pointer-events-none');
  filterOverlay.classList.remove('opacity-100', 'pointer-events-auto');
  filterModal.classList.add('translate-x-full');
  filterModal.classList.remove('translate-x-0');
  document.body.style.overflow = '';
  filterOverlay.setAttribute('aria-hidden', 'true');
  openFiltersBtn.focus();
}

// Accordion
document.querySelectorAll('.filter-header').forEach((header) => {
  header.addEventListener('click', () => {
    const section = header.closest('.filter-section') as HTMLElement;
    const body = section?.querySelector('.filter-body') as HTMLElement;
    const isExpanded = section.getAttribute('data-expanded') === 'true';
    
    section.setAttribute('data-expanded', String(!isExpanded));
    header.setAttribute('aria-expanded', String(!isExpanded));
    
    if (isExpanded) {
      body.style.maxHeight = body.scrollHeight + 'px';
      requestAnimationFrame(() => {
        body.style.maxHeight = '0px';
        body.style.opacity = '0';
        body.style.overflow = 'hidden';
      });
    } else {
      body.style.maxHeight = '0px';
      body.style.opacity = '0';
      body.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        body.style.maxHeight = body.scrollHeight + 'px';
        body.style.opacity = '1';
      });
    }
  });
});

// Show more / less
document.querySelectorAll('.toggle-more-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const type = (e.target as HTMLElement).getAttribute('data-type');
    const selector = `.${type}-item`;
    const items = document.querySelectorAll(selector);
    const isShowingAll = btn.textContent === 'Show less';
    
    items.forEach((item, index) => {
      if (index >= INITIAL_VISIBLE) item.classList.toggle('hidden', isShowingAll);
    });
    
    btn.textContent = isShowingAll ? 'Show more' : 'Show less';
    
    // Auto-expand section if collapsed
    const section = btn.closest('.filter-section') as HTMLElement;
    const body = section?.querySelector('.filter-body') as HTMLElement;
    const header = section?.querySelector('.filter-header') as HTMLElement;
    if (section && body && header && section.getAttribute('data-expanded') !== 'true') {
      section.setAttribute('data-expanded', 'true');
      header.setAttribute('aria-expanded', 'true');
      body.style.maxHeight = '0px';
      body.style.opacity = '0';
      requestAnimationFrame(() => {
        body.style.maxHeight = body.scrollHeight + 'px';
        body.style.opacity = '1';
      });
    }
  });
});

openFiltersBtn.addEventListener('click', openFilters);
closeFiltersBtn.addEventListener('click', closeFilters);

filterOverlay.addEventListener('click', (e) => {
  if (e.target === filterOverlay) closeFilters();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !filterOverlay.classList.contains('pointer-events-none')) {
    closeFilters();
  }
});

clearFiltersBtn.addEventListener('click', () => {
  filterModal.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
    (cb as HTMLInputElement).checked = false;
  });
  document.querySelectorAll('.toggle-more-btn').forEach((btn) => {
    btn.textContent = 'Show more';
  });
  document.querySelectorAll('.specialty-item, .insurance-item, .therapy-item, .language-item').forEach((item) => {
    const idx = parseInt((item as HTMLElement).dataset.index || '0');
    if (idx >= INITIAL_VISIBLE) item.classList.add('hidden');
  });
});

showResultsBtn.addEventListener('click', closeFilters);