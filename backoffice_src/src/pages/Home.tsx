import React, { useEffect, useRef } from "react";
import framerHtmlRaw from "../framer_clean.html?raw";

interface HomeProps {
  onRsvpClick: () => void;
  onAdminClick?: () => void;
}

export const Home: React.FC<HomeProps> = ({ onRsvpClick, onAdminClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Wedding Date: Saturday 03 April 2027 at 15:30:00 ART (UTC-3)
  const weddingDate = new Date("2027-04-03T15:30:00-03:00");

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    // 1. Live Countdown Updater
    const updateCountdown = () => {
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();

      if (diff > 0) {
        const totalSeconds = Math.floor(diff / 1000);
        const months = Math.floor(totalSeconds / (3600 * 24 * 30));
        const days = Math.floor((totalSeconds % (3600 * 24 * 30)) / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        const pad = (n: number) => String(n).padStart(2, "0");

        root.querySelectorAll('[data-cd="months"]').forEach(el => (el.textContent = pad(months)));
        root.querySelectorAll('[data-cd="days"]').forEach(el => (el.textContent = pad(days)));
        root.querySelectorAll('[data-cd="hours"]').forEach(el => (el.textContent = pad(hours)));
        root.querySelectorAll('[data-cd="minutes"]').forEach(el => (el.textContent = pad(minutes)));
        root.querySelectorAll('[data-cd="seconds"]').forEach(el => (el.textContent = pad(seconds)));
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    // 2. Click Delegation (RSVP, FAQs, Anchors)
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // A. Check RSVP buttons
      const rsvpBtn = target.closest(
        'a[data-framer-name="Standard Accent"], a[data-framer-name="Large Light"], a[data-framer-name="Standard Light"], a[href="#rsvp"], button[data-framer-name="Standard Accent"]'
      ) || target.closest('[data-rsvp-trigger="true"]');

      const isRsvpText =
        target.textContent?.includes("Confirmar asistencia") ||
        target.textContent?.includes("Confirma tu asistencia") ||
        target.textContent?.includes("Avisar en confirmación");

      if (rsvpBtn || (isRsvpText && target.closest("a, button, div[role='button']"))) {
        e.preventDefault();
        e.stopPropagation();
        onRsvpClick();
        return;
      }

      // B. Check FAQ Accordion click
      const faqItem = target.closest<HTMLElement>(
        '[data-framer-name="Collapsed"], [data-framer-name="Expanded"]'
      );
      if (faqItem) {
        e.preventDefault();
        const isCollapsed = faqItem.getAttribute("data-framer-name") === "Collapsed";
        const desc = faqItem.querySelector<HTMLElement>('[data-framer-name="Description"]');
        const icon = faqItem.querySelector<HTMLElement>('[data-framer-name="Icon"], svg');

        if (isCollapsed) {
          faqItem.setAttribute("data-framer-name", "Expanded");
          faqItem.classList.remove("framer-v-1fmix6");
          faqItem.classList.add("framer-v-13ncjej");
          if (desc) {
            desc.style.display = "block";
            desc.style.opacity = "1";
            desc.style.height = "auto";
            desc.style.transition = "all 0.3s ease";
          }
          if (icon) {
            icon.style.transform = "rotate(45deg)";
            icon.style.transition = "transform 0.3s ease";
          }
        } else {
          faqItem.setAttribute("data-framer-name", "Collapsed");
          faqItem.classList.remove("framer-v-13ncjej");
          faqItem.classList.add("framer-v-1fmix6");
          if (desc) {
            desc.style.opacity = "0";
            desc.style.display = "none";
            desc.style.height = "0px";
          }
          if (icon) {
            icon.style.transform = "rotate(0deg)";
            icon.style.transition = "transform 0.3s ease";
          }
        }
        return;
      }

      // C. Smooth scroll for anchor tags (#hero-section, #intro, #fecha, #lugar, #cronograma, #faq)
      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (anchor) {
        const hash = anchor.getAttribute("href");
        if (hash && hash !== "#" && hash !== "#rsvp") {
          const targetEl = root.querySelector(hash);
          if (targetEl) {
            e.preventDefault();
            targetEl.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    root.addEventListener("click", handleClick);

    // 3. Staggered Text Reveal Animation via IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const spans = entry.target.querySelectorAll<HTMLElement>(
              'span[style*="opacity:0.001"], span[style*="filter:blur"]'
            );
            spans.forEach((span, index) => {
              span.style.transition = `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.03}s, filter 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.03}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.03}s`;
              span.style.opacity = "1";
              span.style.filter = "blur(0px)";
              span.style.transform = "translate3d(0, 0, 0)";
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    root.querySelectorAll('[data-framer-component-type="RichTextContainer"]').forEach((el) => {
      observer.observe(el);
    });

    // Also immediately reveal hero section rich text
    root.querySelectorAll('#hero-section [data-framer-component-type="RichTextContainer"], #intro [data-framer-component-type="RichTextContainer"]').forEach((el) => {
      const spans = (el as HTMLElement).querySelectorAll('span[style*="opacity:0.001"]');
      spans.forEach((spanNode, i) => {
        const span = spanNode as HTMLElement;
        setTimeout(() => {
          span.style.transition = "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
          span.style.opacity = "1";
          span.style.filter = "blur(0px)";
          span.style.transform = "translate3d(0, 0, 0)";
        }, i * 25);
      });
    });

    return () => {
      clearInterval(timer);
      root.removeEventListener("click", handleClick);
      observer.disconnect();
    };
  }, [weddingDate, onRsvpClick]);

  return (
    <div
      ref={containerRef}
      className="framer-root-container w-full min-h-screen overflow-x-hidden"
      dangerouslySetInnerHTML={{ __html: framerHtmlRaw }}
    />
  );
};
