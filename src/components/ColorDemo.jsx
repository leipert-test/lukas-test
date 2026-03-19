import { useState } from 'react';
import {
  hexToRgb, rgbToHex, rgbToHsl, lighten, darken,
  complementary, randomColor, isValidHex, grayscale,
  mixColors, invertColor, saturate, desaturate, adjustOpacity,
} from '../utils/color.js';

export default function ColorDemo() {
  const [color, setColor] = useState('#3498db');
  const [color2, setColor2] = useState('#e74c3c');
  const [mixWeight, setMixWeight] = useState(0.5);

  const rgb = isValidHex(color) ? hexToRgb(color) : null;
  const hsl = rgb ? rgbToHsl(rgb.r, rgb.g, rgb.b) : null;

  const palette = rgb ? [
    { label: 'Original', value: color },
    { label: 'Light +20%', value: lighten(color, 0.2) },
    { label: 'Light +40%', value: lighten(color, 0.4) },
    { label: 'Dark +20%', value: darken(color, 0.2) },
    { label: 'Dark +40%', value: darken(color, 0.4) },
    { label: 'Complement', value: complementary(color) },
    { label: 'Grayscale', value: grayscale(color) },
    { label: 'Inverted', value: invertColor(color) },
    { label: 'Saturated', value: saturate(color, 20) },
    { label: 'Desaturated', value: desaturate(color, 20) },
  ] : [];

  return (
    <div className="demo-section">
      <h2>Color Utilities</h2>
      <div className="demo-controls">
        <label>
          Color 1: <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
          <span>{color}</span>
        </label>
        <label>
          Color 2: <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} />
          <span>{color2}</span>
        </label>
        <button onClick={() => setColor(randomColor())}>Random</button>
      </div>
      {rgb && (
        <>
          <div className="demo-results">
            <h3>Color Info</h3>
            <p>RGB: ({rgb.r}, {rgb.g}, {rgb.b})</p>
            <p>HSL: ({hsl.h}, {hsl.s}%, {hsl.l}%)</p>
            <p>RGBA: {adjustOpacity(color, 0.5)}</p>
          </div>
          <div className="demo-results">
            <h3>Color Palette</h3>
            <div className="color-swatches">
              {palette.map(({ label, value }) => (
                <div key={label} className="swatch-container">
                  <div className="swatch" style={{ backgroundColor: value }} title={label} />
                  <small>{label}</small>
                  <small>{value}</small>
                </div>
              ))}
            </div>
          </div>
          <div className="demo-results">
            <h3>Color Mixer</h3>
            <label>
              Weight: <input type="range" min="0" max="1" step="0.1" value={mixWeight}
                onChange={(e) => setMixWeight(Number(e.target.value))} />
              {mixWeight}
            </label>
            <div className="color-mix-display">
              <div className="swatch" style={{ backgroundColor: color }} />
              <span>+</span>
              <div className="swatch" style={{ backgroundColor: color2 }} />
              <span>=</span>
              <div className="swatch" style={{ backgroundColor: mixColors(color, color2, mixWeight) }} />
              <span>{mixColors(color, color2, mixWeight)}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
