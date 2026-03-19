// Color utility functions

export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
    : null;
}

export function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

export function lighten(hex, amount) {
  const { r, g, b } = hexToRgb(hex);
  return rgbToHex(
    Math.min(255, Math.round(r + (255 - r) * amount)),
    Math.min(255, Math.round(g + (255 - g) * amount)),
    Math.min(255, Math.round(b + (255 - b) * amount))
  );
}

export function darken(hex, amount) {
  const { r, g, b } = hexToRgb(hex);
  return rgbToHex(
    Math.round(r * (1 - amount)),
    Math.round(g * (1 - amount)),
    Math.round(b * (1 - amount))
  );
}

export function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

export function isValidHex(hex) {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
}

export function complementary(hex) {
  const { r, g, b } = hexToRgb(hex);
  return rgbToHex(255 - r, 255 - g, 255 - b);
}

export function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

export function hslToRgb(h, s, l) {
  h /= 360; s /= 100; l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

export function mixColors(hex1, hex2, weight = 0.5) {
  const c1 = hexToRgb(hex1);
  const c2 = hexToRgb(hex2);
  return rgbToHex(
    Math.round(c1.r * (1 - weight) + c2.r * weight),
    Math.round(c1.g * (1 - weight) + c2.g * weight),
    Math.round(c1.b * (1 - weight) + c2.b * weight)
  );
}

export function grayscale(hex) {
  const { r, g, b } = hexToRgb(hex);
  const gray = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
  return rgbToHex(gray, gray, gray);
}

export function invertColor(hex) {
  const { r, g, b } = hexToRgb(hex);
  return rgbToHex(255 - r, 255 - g, 255 - b);
}

export function adjustOpacity(hex, opacity) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export function saturate(hex, amount) {
  const { r, g, b } = hexToRgb(hex);
  const { h, s, l } = rgbToHsl(r, g, b);
  const newS = Math.min(100, s + amount);
  const rgb = hslToRgb(h, newS, l);
  return rgbToHex(rgb.r, rgb.g, rgb.b);
}

