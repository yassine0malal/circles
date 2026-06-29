const header = document.getElementById("main-header");
const isHome = header?.dataset.home === "true";

const megaContainer = document.getElementById("mega-menu-container");
const megaCard = document.getElementById("mega-menu-card");
const megaTriggers = document.querySelectorAll(".mega-trigger");
const megaPanels = document.querySelectorAll(".mega-panel");
const megaArrows = document.querySelectorAll(".mega-arrow");
const menuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-nav-link");
const line1 = document.getElementById("menu-line-1");
const line2 = document.getElementById("menu-line-2");
const line3 = document.getElementById("menu-line-3");

let activeMegaIndex = -1;
let isMobileOpen = false;

// ── Scroll effect: home only ──
if (isHome) {
    const onScroll = () => {
        header?.classList.toggle("solid", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
}

// ── Mega menu ──
megaTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
        e.preventDefault();
        const index = parseInt(trigger.getAttribute("data-index") || "-1");
        if (!document.querySelector(`.mega-panel[data-panel="${index}"]`)) return;
        activeMegaIndex === index ? closeMegaMenu() : openMegaMenu(index);
    });
});

function openMegaMenu(index: number) {
    activeMegaIndex = index;

    megaTriggers.forEach((t) =>
        t.setAttribute("aria-expanded", String(parseInt(t.getAttribute("data-index") || "-1") === index))
    );
    megaArrows.forEach((arrow) => {
        const i = parseInt(arrow.closest(".mega-trigger")?.getAttribute("data-index") || "-1");
        arrow.classList.toggle("rotate-180", i === index);
    });

    megaContainer?.classList.remove("opacity-0", "invisible", "translate-y-4");
    megaContainer?.classList.add("opacity-100", "visible", "translate-y-0");

    const activeTrigger = document.querySelector(
        `.mega-trigger[data-index="${index}"]`
    ) as HTMLElement;
    if (activeTrigger) positionCaret(activeTrigger);

    megaPanels.forEach((panel) => {
        const panelIndex = parseInt(panel.getAttribute("data-panel") || "-1");
        if (panelIndex === index) {
            panel.classList.remove("hidden");
            panel.animate(
                [{ opacity: 0, transform: "translateY(12px)" }, { opacity: 1, transform: "translateY(0)" }],
                { duration: 400, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "forwards" }
            );
        } else {
            panel.classList.add("hidden");
        }
    });
}

function closeMegaMenu() {
    activeMegaIndex = -1;
    megaTriggers.forEach((t) => t.setAttribute("aria-expanded", "false"));
    megaArrows.forEach((arrow) => arrow.classList.remove("rotate-180"));
    megaContainer?.classList.add("opacity-0", "invisible", "translate-y-4");
    megaContainer?.classList.remove("opacity-100", "visible", "translate-y-0");
}

document.addEventListener("click", (e) => {
    const target = e.target;
    if (
        !(target instanceof Node && megaCard?.contains(target)) &&
        !(target instanceof Element && target.closest(".mega-trigger"))
    ) closeMegaMenu();
}, true);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeMegaMenu();
        if (isMobileOpen) toggleMobileMenu();
    }
});

// ── Mobile menu ──
menuBtn?.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
    isMobileOpen = !isMobileOpen;
    menuBtn?.setAttribute("aria-expanded", String(isMobileOpen));

    if (isMobileOpen) {
        closeMegaMenu();
        mobileMenu?.classList.remove("opacity-0", "pointer-events-none");
        mobileMenu?.classList.add("opacity-100", "pointer-events-auto");
        line1?.classList.add("rotate-45", "translate-y-[5px]");
        line2?.classList.add("opacity-0", "w-0");
        line3?.classList.add("-rotate-45", "-translate-y-[5px]", "w-6");
        mobileLinks.forEach((l) => { l.classList.remove("opacity-0", "translate-y-4"); l.classList.add("opacity-100", "translate-y-0"); });
    } else {
        mobileMenu?.classList.add("opacity-0", "pointer-events-none");
        mobileMenu?.classList.remove("opacity-100", "pointer-events-auto");
        line1?.classList.remove("rotate-45", "translate-y-[5px]");
        line2?.classList.remove("opacity-0", "w-0");
        line3?.classList.remove("-rotate-45", "-translate-y-[5px]", "w-6");
        mobileLinks.forEach((l) => { l.classList.add("opacity-0", "translate-y-4"); l.classList.remove("opacity-100", "translate-y-0"); });
    }
}

mobileLinks.forEach((l) => l.addEventListener("click", () => { if (isMobileOpen) toggleMobileMenu(); }));


function positionCaret(trigger: HTMLElement) {
    const caret = document.getElementById("mega-caret") as HTMLElement | null;
    const container = document.getElementById("mega-menu-container") as HTMLElement | null;
    if (!caret || !container) return;

    const containerRect = container.getBoundingClientRect();
    const triggerRect = trigger.getBoundingClientRect();
    const caretWidth = 20; // w-5 = 20px

    // Centre of the trigger, relative to the mega-menu-container's left edge
    let left = triggerRect.left + triggerRect.width / 2 - containerRect.left - caretWidth / 2;

    // Keep it inside the container bounds with padding
    const minLeft = 16;
    const maxLeft = containerRect.width - caretWidth - 16;
    left = Math.max(minLeft, Math.min(left, maxLeft));

    caret.style.left = `${left}px`;
}

window.addEventListener("resize", () => {
    if (activeMegaIndex !== -1) {
        const activeTrigger = document.querySelector(
            `.mega-trigger[data-index="${activeMegaIndex}"]`
        ) as HTMLElement;
        if (activeTrigger) positionCaret(activeTrigger);
    }
});