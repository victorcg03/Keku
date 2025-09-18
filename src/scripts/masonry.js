export default function initMasonry(selector = "[data-masonry]") {
  const containers = document.querySelectorAll(selector);
  containers.forEach((container) => {
    // Asegurar clase que activa grid-auto-rows
    container.classList.add("masonry-ready");
    // Ayuda a rellenar huecos del grid
    container.style.gridAutoFlow = "dense";

    const computeNums = () => {
      const styles = getComputedStyle(container);
      const row = parseFloat(styles.getPropertyValue("--masonry-row")) || 8;
      // gap puede venir como 'gap' o 'row-gap'
      let gap = styles.gap || styles.rowGap || styles.gridRowGap || "0";
      gap = parseFloat(gap) || 0;
      return { row, gap };
    };

    const items = container.querySelectorAll("[data-masonry-item]");
    const recalc = () => {
      const { row, gap } = computeNums();
      items.forEach((item) => {
        // Forzar a una fila para medir estable y usar scrollHeight
        item.style.gridRowEnd = "span 1";
        const height = item.scrollHeight;
        const span = Math.max(1, Math.ceil((height + gap) / (row + gap)));
        item.style.gridRowEnd = `span ${span}`;
      });
    };

    // Recalcular al cargar imágenes
    const imgs = container.querySelectorAll("img");
    imgs.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", recalc, { once: true });
        img.addEventListener("error", recalc, { once: true });
      }
    });

    // Observadores de tamaño
    const ro = new ResizeObserver(() => recalc());
    ro.observe(container);
    const io = new ResizeObserver(() => recalc());
    items.forEach((it) => io.observe(it));

    // Recalcular en resize y tras carga de fuentes
    window.addEventListener("resize", recalc);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => recalc()).catch(() => {});
    }

    // Inicial
    requestAnimationFrame(recalc);
  });
}
