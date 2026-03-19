import { useState } from 'react';
import { hexToRgb, rgbToHex, lighten, darken, complementary, randomColor, isValidHex, grayscale, mixColors } from '../utils/color.js';

export default function ColorDemo() {
  const [color, setColor] = useState('#3498db');
  const [color2, setColor2] = useState('#e74c3c');

  const rgb = isValidHex(color) ? hexToRgb(color) : null;

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
        <div className="demo-results">
          <h3>Conversions</h3>
          <p>RGB: ({rgb.r}, {rgb.g}, {rgb.b})</p>
          <p>Back to hex: {rgbToHex(rgb.r, rgb.g, rgb.b)}</p>
          <div className="color-swatches">
            <div className="swatch" style={{ backgroundColor: color }} title="Original" />
            <div className="swatch" style={{ backgroundColor: lighten(color, 0.3) }} title="Lighter" />
            <div className="swatch" style={{ backgroundColor: darken(color, 0.3) }} title="Darker" />
            <div className="swatch" style={{ backgroundColor: complementary(color) }} title="Complementary" />
            <div className="swatch" style={{ backgroundColor: grayscale(color) }} title="Grayscale" />
            <div className="swatch" style={{ backgroundColor: mixColors(color, color2, 0.5) }} title="Mixed" />
          </div>
        </div>
      )}
    </div>
  );
}
