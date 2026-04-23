// Variante A — Editorial / Tipografía dramática
// Display serif (Rozha One) gigante + fotos sticker-style + secciones verticales con separadores de papel picado

function PapelPicadoDivider({ color = '#0B0B0B' }) {
  return (
    <div style={{ height: 18, width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      <svg width="100%" height="18" viewBox="0 0 390 18" preserveAspectRatio="none" style={{ display: 'block' }}>
        <defs>
          <pattern id="pp-a" x="0" y="0" width="26" height="18" patternUnits="userSpaceOnUse">
            <path d="M0 0 H26 V6 L20 6 L18 10 L14 12 L10 10 L8 6 L0 6 Z M4 10 h4 v3 h-4 z M18 10 h4 v3 h-4 z" fill={color} />
            <circle cx="13" cy="14" r="1.2" fill={color} />
          </pattern>
        </defs>
        <rect width="390" height="18" fill="url(#pp-a)" />
      </svg>
    </div>
  );
}

function ChileIcon({ level = 1, color = '#E11D48' }) {
  // Nivel de picante: 1-3 chiles
  return (
    <span style={{ display: 'inline-flex', gap: 2, verticalAlign: 'middle' }}>
      {[0,1,2].map(i => (
        <svg key={i} width="10" height="14" viewBox="0 0 10 14" style={{ opacity: i < level ? 1 : 0.2 }}>
          <path d="M2 1 Q3 3 4 4 Q6 5 7 8 Q8 11 5 13 Q2 13 2 10 Q2 7 3 5 Q2 3 2 1 Z" fill={color} />
          <path d="M3 1 Q4 0.5 5 1.5 Q4.5 2.5 3.5 2.5 Z" fill="#16A34A" />
        </svg>
      ))}
    </span>
  );
}

function FoodPlaceholder({ label, accent = '#FFD60A', ink = '#0B0B0B', size = 92 }) {
  // Placeholder estampa con líneas diagonales
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: accent,
      border: `2.5px solid ${ink}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', flexShrink: 0,
      boxShadow: `3px 3px 0 ${ink}`,
    }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.12 }}>
        <defs>
          <pattern id={`stripes-${label}`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="3" height="6" fill={ink} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#stripes-${label})`} />
      </svg>
      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 8, color: ink, textTransform: 'uppercase', letterSpacing: 0.5, zIndex: 1, textAlign: 'center', fontWeight: 700 }}>
        {label}
      </span>
    </div>
  );
}

function VariantA({ theme = 'light' }) {
  const isDark = theme === 'dark';
  const bg = isDark ? '#0B0B0B' : '#FFD60A';
  const ink = isDark ? '#FFD60A' : '#0B0B0B';
  const cardBg = isDark ? '#161616' : '#FFF8E1';
  const muted = isDark ? 'rgba(255,214,10,0.6)' : 'rgba(11,11,11,0.6)';

  const items = {
    antojitos: [
      { name: 'Totopos con guacamole', desc: 'Tortillas de maíz frescas, guacamole de la casa, pico de gallo', price: '11.0', heat: 1, tag: 'V' },
      { name: 'Canásticos de camarón', desc: 'Patacones con camarones en salsa blanca y queso fundido', price: '17.0', heat: 2 },
      { name: 'Canásticos de chicharrón', desc: 'Patacones con ceviche de chicharrón y cebolla morada', price: '15.0', heat: 2 },
    ],
    tacos: [
      { name: 'Al Pastor', desc: 'Costra de queso, guacamole, cerdo marinado, piña asada', price: '20.7', heat: 2, star: true },
      { name: 'De Chicharrón', desc: 'Costra de queso, guacamole, chicharrón, pico de gallo', price: '20.7', heat: 1 },
      { name: 'Marino', desc: 'Camarones bañados en salsa blanca y queso fundido', price: '23.7', heat: 2 },
      { name: 'De Carnitas', desc: 'Costra de queso, guacamole, carne de res, pico de gallo', price: '20.7', heat: 1 },
    ],
    entradas: [
      { name: 'Guacamole de la casa', desc: 'Aguacate, limón, cilantro, serrano — con totopos', price: '12.0', heat: 1, tag: 'V' },
      { name: 'Elote callejero', desc: 'Elote asado, mayonesa, queso cotija, chile piquín', price: '9.5', heat: 2 },
    ],
    fuertes: [
      { name: 'Birriamen', desc: 'Fideos con birria, huevo cocido, queso derretido, pico de gallo', price: '20.0', heat: 3, star: true },
      { name: 'Burrito Grande', desc: 'Tortilla 25cm, proteína a elección, arroz, frijoles, queso', price: '33.0', heat: 1 },
    ],
  };

  return (
    <div style={{
      width: 390, height: 844, background: bg, color: ink,
      fontFamily: '"Inter", system-ui, sans-serif',
      overflowY: 'auto', overflowX: 'hidden', position: 'relative',
      scrollbarWidth: 'none',
    }}>
      {/* HEADER */}
      <div style={{ padding: '16px 20px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: ink, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <img src="assets/logo-loscuates.jpeg" alt="Los Cuates" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase' }}>Rinconcito</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ fontSize: 11, opacity: 0.6, fontFamily: 'JetBrains Mono, monospace' }}>MESA 07</div>
          <button style={{ background: 'transparent', border: `1.5px solid ${ink}`, color: ink, borderRadius: 20, padding: '4px 10px', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>ES / EN</button>
        </div>
      </div>

      {/* HERO */}
      <div style={{ padding: '12px 20px 24px', position: 'relative' }}>
        <div style={{ fontSize: 10, fontFamily: 'JetBrains Mono, monospace', letterSpacing: 2, opacity: 0.7, marginBottom: 4 }}>
          ¡BIENVENIDOS! · EST. 2019
        </div>
        <div style={{ fontFamily: '"Rozha One", serif', fontSize: 88, lineHeight: 0.85, fontWeight: 400, letterSpacing: -2, marginTop: 8 }}>
          Los<br/>Cuates
        </div>
        <div style={{ fontSize: 13, marginTop: 14, maxWidth: 280, lineHeight: 1.4, opacity: 0.8 }}>
          Cocina mexicana hecha a mano.<br/>Desayuna, come y quédate.
        </div>

        {/* Tag decorativo */}
        <div style={{
          position: 'absolute', top: 18, right: 20,
          width: 82, height: 82, borderRadius: '50%',
          border: `1.5px dashed ${ink}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transform: 'rotate(-8deg)',
        }}>
          <svg viewBox="0 0 82 82" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', animation: 'spin 18s linear infinite' }}>
            <defs><path id="circlePath-a" d="M 41 41 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" /></defs>
            <text fontSize="8" fill={ink} fontFamily="JetBrains Mono, monospace" letterSpacing="2">
              <textPath href="#circlePath-a">RECIÉN HECHO · CON AMOR · </textPath>
            </text>
          </svg>
          <div style={{ textAlign: 'center', fontFamily: '"Rozha One", serif', fontSize: 20, lineHeight: 0.9 }}>
            <div style={{ fontSize: 9, fontFamily: 'JetBrains Mono, monospace', letterSpacing: 1 }}>DESDE</div>
            2019
          </div>
        </div>
      </div>

      {/* NAV CHIPS */}
      <div style={{ padding: '0 20px 16px', display: 'flex', gap: 8, overflowX: 'auto', scrollbarWidth: 'none' }}>
        {['Antojitos', 'Tacos', 'Entradas', 'Fuertes', 'Postres'].map((n, i) => (
          <div key={n} style={{
            padding: '7px 14px', borderRadius: 20,
            background: i === 0 ? ink : 'transparent',
            color: i === 0 ? bg : ink,
            border: `1.5px solid ${ink}`,
            fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap', cursor: 'pointer',
          }}>{n}</div>
        ))}
      </div>

      <PapelPicadoDivider color={ink} />

      {/* SECCIÓN: ANTOJITOS */}
      <Section title="Antojitos" number="01" count={items.antojitos.length} ink={ink} bg={bg} />
      <div style={{ padding: '0 20px 8px' }}>
        {items.antojitos.map((it, i) => <MenuItem key={i} {...it} ink={ink} bg={bg} cardBg={cardBg} muted={muted} />)}
      </div>

      {/* SECCIÓN: TACOS — full bleed */}
      <div style={{ background: ink, color: bg, margin: '24px 0 0', padding: '32px 20px 28px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ fontSize: 10, fontFamily: 'JetBrains Mono, monospace', letterSpacing: 3, opacity: 0.7 }}>SECCIÓN · 02</div>
        <div style={{ fontFamily: '"Rozha One", serif', fontSize: 76, lineHeight: 0.9, letterSpacing: -2, marginTop: 6 }}>
          Tacos<br/><span style={{ fontStyle: 'italic', opacity: 0.95 }}>chingones</span>
        </div>
        <div style={{ fontSize: 12, opacity: 0.7, marginTop: 10, fontFamily: 'JetBrains Mono, monospace' }}>
          —— {items.tacos.length} VARIEDADES · ORDEN MIN 2
        </div>

        <div style={{ marginTop: 22, display: 'grid', gap: 14 }}>
          {items.tacos.map((it, i) => (
            <div key={i} style={{
              background: bg, color: ink,
              padding: '14px 16px', borderRadius: 14,
              display: 'flex', gap: 14, alignItems: 'flex-start',
              position: 'relative',
            }}>
              <FoodPlaceholder label={`TACO ${String(i+1).padStart(2,'0')}`} accent={bg} ink={ink} size={72} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
                  <div style={{ fontFamily: '"Rozha One", serif', fontSize: 22, lineHeight: 1, letterSpacing: -0.5 }}>{it.name}</div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 14, fontWeight: 700, whiteSpace: 'nowrap' }}>${it.price}</div>
                </div>
                <div style={{ fontSize: 11, opacity: 0.7, marginTop: 4, lineHeight: 1.35 }}>{it.desc}</div>
                <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <ChileIcon level={it.heat} color="#E11D48" />
                  {it.star && <div style={{ fontSize: 9, fontFamily: 'JetBrains Mono, monospace', background: ink, color: bg, padding: '2px 6px', borderRadius: 3, letterSpacing: 1 }}>★ DEL CHEF</div>}
                </div>
              </div>
              <button style={{
                position: 'absolute', top: 12, right: 12,
                width: 28, height: 28, borderRadius: '50%',
                background: 'transparent', border: `1.5px solid ${ink}`,
                color: ink, fontSize: 18, lineHeight: 1, cursor: 'pointer',
                display: 'none',
              }}>+</button>
            </div>
          ))}
        </div>
      </div>

      <PapelPicadoDivider color={ink} />

      {/* SECCIÓN: ENTRADAS */}
      <Section title="Para picar" number="03" count={items.entradas.length} ink={ink} bg={bg} />
      <div style={{ padding: '0 20px 8px' }}>
        {items.entradas.map((it, i) => <MenuItem key={i} {...it} ink={ink} bg={bg} cardBg={cardBg} muted={muted} />)}
      </div>

      <PapelPicadoDivider color={ink} />

      {/* SECCIÓN: PLATOS FUERTES */}
      <Section title="Platos fuertes" number="04" count={items.fuertes.length} ink={ink} bg={bg} />
      <div style={{ padding: '0 20px 28px' }}>
        {items.fuertes.map((it, i) => <MenuItem key={i} {...it} ink={ink} bg={bg} cardBg={cardBg} muted={muted} big />)}
      </div>

      {/* FOOTER */}
      <div style={{ padding: '32px 20px 100px', textAlign: 'center' }}>
        <div style={{ fontFamily: '"Rozha One", serif', fontSize: 44, lineHeight: 0.9, letterSpacing: -1 }}>
          ¡Buen<br/>provecho!
        </div>
        <div style={{ fontSize: 10, fontFamily: 'JetBrains Mono, monospace', letterSpacing: 2, opacity: 0.6, marginTop: 16 }}>
          RINCONCITO LOS CUATES · 2026
        </div>
      </div>

      {/* CART BAR */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '14px 16px',
        background: ink, color: bg,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderTop: `3px solid ${bg}`,
      }}>
        <div>
          <div style={{ fontSize: 10, fontFamily: 'JetBrains Mono, monospace', letterSpacing: 1.5, opacity: 0.7 }}>TU ORDEN · 3 ÍTEMS</div>
          <div style={{ fontFamily: '"Rozha One", serif', fontSize: 24, lineHeight: 1, marginTop: 2 }}>$58.40</div>
        </div>
        <button style={{
          background: bg, color: ink, border: 'none',
          padding: '12px 20px', borderRadius: 30,
          fontWeight: 700, fontSize: 13, cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 8,
          letterSpacing: 0.3,
        }}>
          VER CARRITO
          <span style={{ fontSize: 16 }}>→</span>
        </button>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function Section({ title, number, count, ink, bg }) {
  return (
    <div style={{ padding: '24px 20px 12px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
      <div>
        <div style={{ fontSize: 10, fontFamily: 'JetBrains Mono, monospace', letterSpacing: 3, opacity: 0.7 }}>SECCIÓN · {number}</div>
        <div style={{ fontFamily: '"Rozha One", serif', fontSize: 56, lineHeight: 0.9, letterSpacing: -1.5, marginTop: 4 }}>{title}</div>
      </div>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, opacity: 0.6, paddingBottom: 8 }}>
        {String(count).padStart(2,'0')} items
      </div>
    </div>
  );
}

function MenuItem({ name, desc, price, heat, tag, star, ink, bg, cardBg, muted, big }) {
  return (
    <div style={{
      padding: '16px 0',
      borderBottom: `1px dashed ${ink}`,
      display: 'flex', gap: 14, alignItems: 'flex-start',
    }}>
      <FoodPlaceholder label={name.split(' ')[0].toUpperCase()} accent={bg === '#FFD60A' ? '#FFF8E1' : '#1A1A1A'} ink={ink} size={big ? 88 : 72} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
          <div style={{ fontFamily: '"Rozha One", serif', fontSize: big ? 26 : 22, lineHeight: 1, letterSpacing: -0.5 }}>{name}</div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: big ? 16 : 14, fontWeight: 700, whiteSpace: 'nowrap' }}>${price}</div>
        </div>
        <div style={{ fontSize: 11.5, color: muted, marginTop: 4, lineHeight: 1.35 }}>{desc}</div>
        <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
          <ChileIcon level={heat} color={bg === '#FFD60A' ? '#B91C1C' : '#EF4444'} />
          {tag === 'V' && <div style={{ fontSize: 9, fontFamily: 'JetBrains Mono, monospace', border: `1px solid ${ink}`, padding: '1px 5px', borderRadius: 2, letterSpacing: 1, opacity: 0.8 }}>VEG</div>}
          {star && <div style={{ fontSize: 9, fontFamily: 'JetBrains Mono, monospace', background: ink, color: bg, padding: '2px 6px', borderRadius: 2, letterSpacing: 1 }}>★ POPULAR</div>}
        </div>
      </div>
    </div>
  );
}

window.VariantA = VariantA;
