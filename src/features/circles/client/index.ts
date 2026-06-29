// ── Map Toggle ──
const btnInPerson = document.getElementById("btn-inperson") as HTMLButtonElement | null;
const btnVirtual = document.getElementById("btn-virtual") as HTMLButtonElement | null;
const pill = document.getElementById("toggle-pill") as HTMLDivElement | null;
const mapWrapper = document.getElementById("map-wrapper") as HTMLDivElement | null;

// These elements are guaranteed to exist in the DOM
if (!btnInPerson || !btnVirtual || !pill || !mapWrapper) {
  throw new Error("Required toggle elements not found.");
}

function positionPill(activeBtn: HTMLElement): void {
  const container = pill?.parentElement!;
  const containerRect = container.getBoundingClientRect();
  const btnRect = activeBtn.getBoundingClientRect();
  pill!.style.width = `${activeBtn.offsetWidth}px`;
  pill!.style.left = `${btnRect.left - containerRect.left}px`;
}

function setMode(mode: "inperson" | "virtual"): void {
  if (mode === "virtual") {
    positionPill(btnVirtual);
    btnVirtual.classList.replace("text-ink-soft", "text-cream");
    btnInPerson.classList.replace("text-cream", "text-ink-soft");
    mapWrapper.style.maxHeight = `${mapWrapper.scrollHeight}px`;
    requestAnimationFrame(() => {
      mapWrapper.style.maxHeight = "0px";
      mapWrapper.style.opacity = "0";
      mapWrapper.style.marginBottom = "0px";
    });
  } else {
    positionPill(btnInPerson);
    btnInPerson.classList.replace("text-ink-soft", "text-cream");
    btnVirtual.classList.replace("text-cream", "text-ink-soft");
    mapWrapper.style.maxHeight = "500px";
    mapWrapper.style.opacity = "1";
    mapWrapper.style.marginBottom = "24px";
  }
}

positionPill(btnInPerson);
btnInPerson.addEventListener("click", () => setMode("inperson"));
btnVirtual.addEventListener("click", () => setMode("virtual"));
window.addEventListener("resize", () => {
  const isVirtual = btnVirtual.classList.contains("text-cream");
  positionPill(isVirtual ? btnVirtual : btnInPerson);
});

// ── Filter Buttons ──
const filterButtons = document.querySelectorAll<HTMLButtonElement>(".filter-btn");
const companionCards = document.querySelectorAll<HTMLElement>(".companion-card");
let activeFilter = "All";

function normalize(str: string | null | undefined): string {
  return (str || "").toLowerCase().trim();
}

function applyFilter(filter: string): void {
  activeFilter = filter;

  filterButtons.forEach((b: HTMLButtonElement) => {
    const btnFilter = b.getAttribute("data-filter") || "All";
    const isActive = btnFilter === filter;

    if (isActive) {
      b.classList.remove("border", "border-line", "text-ink-soft/90");
      b.classList.add("bg-ink", "text-cream");
    } else {
      b.classList.remove("bg-ink", "text-cream");
      b.classList.add("border", "border-line", "text-ink-soft/90");
    }
  });

  companionCards.forEach((card: HTMLElement) => {
    const cardGender = normalize(card.getAttribute("data-gender"));
    const cardModality = normalize(card.getAttribute("data-modality"));
    const cardOrientation = normalize(card.getAttribute("data-orientation"));
    const normalizedFilter = normalize(filter);

    let show = false;
    if (filter === "All") {
      show = true;
    } else if (filter === "Female" || filter === "Male") {
      show = cardGender === normalizedFilter;
    } else if (filter === "In Person" || filter === "Online") {
      show = cardModality === normalizedFilter;
    } else if (filter === "Relief-Oriented") {
      show = cardOrientation === "relief-oriented";
    } else if (filter === "Values-Oriented") {
      show =
        cardOrientation === "values-driven" ||
        cardOrientation === "values-oriented";
    }

    card.style.display = show ? "" : "none";
  });
}

filterButtons.forEach((btn: HTMLButtonElement) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter") || "All";
    applyFilter(filter);
  });
});

function checkUrlParams(): void {
  const url = new URL(window.location.href);
  const orientation = url.searchParams.get("orientation");

  if (orientation === "symptom-relief") {
    applyFilter("Relief-Oriented");
  } else if (orientation === "values-driven") {
    applyFilter("Values-Oriented");
  }
}

checkUrlParams();