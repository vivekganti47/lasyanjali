/* Direction A — THE BRASS PLATE
   Concept: the entire site is organized around the tarangam — the iconic
   Kuchipudi item where the dancer performs on the rim of a brass plate.
   The hero is a literal brass plate. Section markers are concentric brass rings.
   Footwork rhythm (jathi) appears as a syllabic ticker. Cream + brass + ink. */

function BrassPlate({ size = 720, label = "तरंगम्" }) {
  // Concentric brass rings + cut-out floral border
  const rings = [0.96, 0.88, 0.78, 0.66, 0.5, 0.34, 0.22];
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
      <defs>
        <radialGradient id="brass-fill" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#f7d98a" />
          <stop offset="35%" stopColor="#d9a849" />
          <stop offset="70%" stopColor="#9a7028" />
          <stop offset="100%" stopColor="#5d3f12" />
        </radialGradient>
        <radialGradient id="brass-rim" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#5d3f12" stopOpacity="0" />
          <stop offset="92%" stopColor="#5d3f12" stopOpacity="0" />
          <stop offset="98%" stopColor="#3a2810" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#1a1006" stopOpacity="0.95" />
        </radialGradient>
      </defs>
      {/* Plate body */}
      <circle cx="50" cy="50" r="49" fill="url(#brass-fill)" />
      <circle cx="50" cy="50" r="49" fill="url(#brass-rim)" />
      {/* Concentric chased rings */}
      {rings.map((r, i) => (
        <circle key={i} cx="50" cy="50" r={r * 49} fill="none" stroke="#3a2810" strokeWidth="0.15" opacity={0.55} />
      ))}
      {/* Outer floral cut-out border (24 lobes) */}
      {Array.from({ length: 48 }).map((_, i) => {
        const a = (i / 48) * Math.PI * 2;
        const r1 = 47, r2 = 49.5;
        const x1 = 50 + Math.cos(a) * r1, y1 = 50 + Math.sin(a) * r1;
        const x2 = 50 + Math.cos(a) * r2, y2 = 50 + Math.sin(a) * r2;
        return <line key={'sp'+i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3a2810" strokeWidth="0.2" opacity="0.6" />;
      })}
      {/* Petal cut-outs around inner ring */}
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i / 16) * Math.PI * 2;
        const cx = 50 + Math.cos(a) * 38, cy = 50 + Math.sin(a) * 38;
        return <ellipse key={'pe'+i} cx={cx} cy={cy} rx="2.2" ry="1.1" fill="#1a1006" opacity="0.32" transform={`rotate(${(a*180/Math.PI)+90} ${cx} ${cy})`} />;
      })}
      {/* Center medallion */}
      <circle cx="50" cy="50" r="11" fill="none" stroke="#3a2810" strokeWidth="0.3" />
      <circle cx="50" cy="50" r="7"  fill="none" stroke="#3a2810" strokeWidth="0.25" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i / 8) * Math.PI * 2;
        const x1 = 50 + Math.cos(a) * 7,  y1 = 50 + Math.sin(a) * 7;
        const x2 = 50 + Math.cos(a) * 11, y2 = 50 + Math.sin(a) * 11;
        return <line key={'cs'+i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3a2810" strokeWidth="0.25" />;
      })}
      <circle cx="50" cy="50" r="1.4" fill="#3a2810" />
      {/* Telugu/devanagari label arched */}
      <defs>
        <path id="brass-arc" d="M 18 50 A 32 32 0 0 1 82 50" />
      </defs>
      <text fill="#2a1c08" fontFamily="var(--indic), serif" fontSize="5" letterSpacing="2">
        <textPath href="#brass-arc" startOffset="50%" textAnchor="middle">{label}</textPath>
      </text>
    </svg>
  );
}

// Two stylized footprints poised on the rim
function Footprints({ size = 80, color = "#1a1006" }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 100 60" fill="none">
      {/* Left foot */}
      <g fill={color}>
        <ellipse cx="22" cy="32" rx="9" ry="14" />
        <circle cx="14" cy="14" r="2.2" />
        <circle cx="20" cy="11" r="2.4" />
        <circle cx="26" cy="11" r="2.3" />
        <circle cx="31" cy="13" r="2.1" />
        <circle cx="35" cy="17" r="1.8" />
      </g>
      {/* Right foot */}
      <g fill={color}>
        <ellipse cx="78" cy="32" rx="9" ry="14" />
        <circle cx="86" cy="14" r="2.2" />
        <circle cx="80" cy="11" r="2.4" />
        <circle cx="74" cy="11" r="2.3" />
        <circle cx="69" cy="13" r="2.1" />
        <circle cx="65" cy="17" r="1.8" />
      </g>
    </svg>
  );
}

// Jathi syllable ticker — the actual rhythmic syllables Kuchipudi uses
const JATHI_LINE = "ta — dhi — gi — ṇa — tom — ta — ka — dhi — mi — ta — ka — jhem — ta — ri — ki — ṭa — ta — ka — taḷāṅgu — ta — ri — ki — ṭa — tom —";

function JathiTicker({ tone = "cream" }) {
  const dark = tone === "ink";
  return (
    <div style={{
      overflow: 'hidden',
      borderTop: `1px solid ${dark ? 'rgba(230,192,103,0.25)' : 'rgba(58,40,16,0.2)'}`,
      borderBottom: `1px solid ${dark ? 'rgba(230,192,103,0.25)' : 'rgba(58,40,16,0.2)'}`,
      padding: '14px 0',
      background: dark ? '#13100c' : 'rgba(217,168,73,0.06)',
    }}>
      <div style={{
        display: 'flex', whiteSpace: 'nowrap',
        animation: 'jathi-scroll 40s linear infinite',
      }}>
        {[0,1,2].map((k) => (
          <span key={k} style={{
            fontFamily: 'var(--serif)', fontSize: 22, fontStyle: 'italic',
            color: dark ? 'var(--gold-300)' : '#5d3f12',
            paddingRight: 40,
          }}>{JATHI_LINE}</span>
        ))}
      </div>
      <style>{`@keyframes jathi-scroll { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }`}</style>
    </div>
  );
}

function BrassPlateDirection() {
  const [lbOpen, setLbOpen] = React.useState(false);
  const [lbIdx, setLbIdx] = React.useState(0);
  const [hoverPlate, setHoverPlate] = React.useState(false);

  const cream = '#f5ecd9';
  const ink = '#1a1006';
  const brass = '#9a7028';

  return (
    <div className="la" style={{ background: cream, color: ink, position: 'relative', minHeight: '100%' }}>
      <IntroVeil artboardId="brass" palette="cream" />

      {/* ── NAV ── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 30,
        background: 'rgba(245,236,217,0.92)',
        backdropFilter: 'blur(8px)',
        borderBottom: `1px solid rgba(58,40,16,0.12)`,
        padding: '18px 56px',
        display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: 24,
      }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.3em', color: brass }}>
          EST. 2009 · HYDERABAD
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="11" fill="none" stroke={brass} strokeWidth="0.8" />
            <circle cx="12" cy="12" r="7" fill="none" stroke={brass} strokeWidth="0.6" />
            <circle cx="12" cy="12" r="2.5" fill={brass} />
          </svg>
          <div style={{ fontFamily: 'var(--display)', fontSize: 22, letterSpacing: '0.1em' }}>LASYĀÑJALI</div>
        </div>
        <div style={{ display: 'flex', gap: 28, justifyContent: 'flex-end',
                      fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase' }}>
          {['The Plate', 'Paramparā', 'Margam', 'Studios', 'Enrol'].map((x) => (
            <a key={x} style={{ cursor: 'pointer' }}>{x}</a>
          ))}
        </div>
      </nav>

      {/* ── HERO: the brass plate IS the hero ── */}
      <section style={{ position: 'relative', padding: '40px 56px 0', overflow: 'hidden' }}>
        {/* Top metadata strip */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                      fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.28em', color: brass, marginBottom: 24 }}>
          <span>FOLIO I · TARAṄGAM</span>
          <span>श्री कृष्ण लीला तरङ्गिणी</span>
          <span>NĀRĀYAṆA TĪRTHA · 17 c.</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 720px 1fr', alignItems: 'center', gap: 0, minHeight: 760 }}>
          {/* Left text */}
          <div style={{ paddingRight: 32 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.3em', color: '#7a1e1e', marginBottom: 24 }}>
              I · THE OFFERING
            </div>
            <h1 style={{
              fontFamily: 'var(--display)', fontSize: 78, lineHeight: 0.95,
              fontWeight: 400, letterSpacing: '-0.01em', color: ink,
            }}>
              We dance<br/>
              <em style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400 }}>on the rim</em><br/>
              of a brass plate.
            </h1>
            <p style={{
              marginTop: 28, fontFamily: 'var(--serif)', fontSize: 21, lineHeight: 1.5,
              color: '#3a2810', maxWidth: 420,
            }}>
              The <em>tarangam</em> is the signature item of Kuchipudi — feet
              poised on the raised edge of a thirteen-inch thambāḷam, body
              balancing a lamp or pot of water, rhythm holding the whole
              universe together for nine and a half minutes.
            </p>
            <p style={{
              marginTop: 18, fontFamily: 'var(--serif)', fontSize: 17, fontStyle: 'italic',
              color: '#6b4a1e', maxWidth: 420,
            }}>
              At Lasyāñjali, every student earns the plate. It is not a trick.
              It is a vow.
            </p>
          </div>

          {/* Center plate */}
          <div
            onMouseEnter={() => setHoverPlate(true)}
            onMouseLeave={() => setHoverPlate(false)}
            style={{
              position: 'relative',
              transform: hoverPlate ? 'scale(1.03) rotate(2deg)' : 'scale(1) rotate(0deg)',
              transition: 'transform 1.2s cubic-bezier(.2,.7,.2,1)',
              filter: 'drop-shadow(0 30px 50px rgba(58,40,16,0.35))',
            }}
          >
            <BrassPlate size={680} />
            {/* Footprints centered on plate */}
            <div style={{
              position: 'absolute', left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: hoverPlate ? 1 : 0.85,
              transition: 'opacity 600ms',
            }}>
              <Footprints size={220} color="#1a1006" />
            </div>
            {/* Slowly rotating outer caption ring */}
            <svg style={{ position: 'absolute', inset: -20, animation: 'plate-spin 60s linear infinite' }} viewBox="0 0 100 100">
              <defs><path id="caption-ring" d="M 50 50 m -49 0 a 49 49 0 1 1 98 0 a 49 49 0 1 1 -98 0" /></defs>
              <text fill="#5d3f12" fontFamily="var(--mono)" fontSize="2" letterSpacing="3">
                <textPath href="#caption-ring">· thirteen inches · pure brass · the dancer balances · the dancer balances · the dancer balances · thirteen inches · pure brass · </textPath>
              </text>
            </svg>
            <style>{`@keyframes plate-spin { to { transform: rotate(360deg); } }`}</style>
          </div>

          {/* Right text — vital stats */}
          <div style={{ paddingLeft: 32 }}>
            <div style={{ display: 'grid', gap: 28 }}>
              {[
                { k: 'PLATE Ø', v: '13"', sub: 'standard thambāḷam, brass-copper alloy' },
                { k: 'TĀḶA', v: 'ādi · rūpaka', sub: '8-beat & 6-beat cycles' },
                { k: 'ITEM', v: 'Krishna-Tarangam', sub: 'from Sri Krishna Lila Tarangini' },
                { k: 'BALANCED', v: 'pot · lamp · both', sub: 'depending on the lineage' },
                { k: 'SPOKEN', v: 'Telugu · Sanskrit', sub: 'kandam, daruvu, śloka' },
              ].map((x) => (
                <div key={x.k} style={{ borderTop: '1px solid rgba(58,40,16,0.18)', paddingTop: 12 }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.3em', color: brass }}>{x.k}</div>
                  <div style={{ fontFamily: 'var(--display)', fontSize: 28, marginTop: 6, color: ink }}>{x.v}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 14, fontStyle: 'italic', color: '#6b4a1e', marginTop: 2 }}>{x.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 56, marginBottom: 40 }}>
          <button style={{
            padding: '18px 32px', background: ink, color: cream,
            fontFamily: 'var(--sans)', fontSize: 12, letterSpacing: '.28em', textTransform: 'uppercase',
            fontWeight: 600,
          }}>Begin a class →</button>
          <button style={{
            padding: '18px 32px', border: `1px solid ${ink}`, color: ink,
            fontFamily: 'var(--sans)', fontSize: 12, letterSpacing: '.28em', textTransform: 'uppercase',
          }}>Watch the tarangam</button>
          <div style={{ flex: 1 }} />
          <div style={{ fontFamily: 'var(--serif)', fontSize: 14, fontStyle: 'italic', color: '#6b4a1e' }}>
            <strong style={{ fontStyle: 'normal', fontFamily: 'var(--display)', fontSize: 22, color: ink }}>17</strong> years ·
            <strong style={{ fontStyle: 'normal', fontFamily: 'var(--display)', fontSize: 22, color: ink, marginLeft: 12 }}>340</strong> students ·
            <strong style={{ fontStyle: 'normal', fontFamily: 'var(--display)', fontSize: 22, color: ink, marginLeft: 12 }}>22</strong> arangetrams
          </div>
        </div>
      </section>

      {/* Jathi rhythm strip */}
      <JathiTicker />

      {/* ── II · THE PARAMPARĀ ── lineage as a single unbroken thread of plates */}
      <section style={{ padding: '120px 56px', background: '#efe4cb' }}>
        <Reveal>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.3em', color: '#7a1e1e' }}>II · PARAMPARĀ</div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 64, lineHeight: 1, marginTop: 12, maxWidth: 880 }}>
            Five hundred years of footsteps,
            <em style={{ fontFamily: 'var(--serif)', fontStyle: 'italic' }}> traced backward from this floor.</em>
          </h2>
        </Reveal>

        <Reveal delay={200} style={{ marginTop: 80, position: 'relative' }}>
          {/* Lineage thread */}
          <div style={{ position: 'absolute', left: 0, right: 0, top: 60, height: 1, background: 'rgba(58,40,16,0.25)' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 24, position: 'relative' }}>
            {[
              { yr: '1502', who: 'Bhāgavatulu', what: 'First Brahmin troupe forms in Kuchipudi village', size: 56 },
              { yr: '1675', who: 'Siddhendra Yogi', what: 'Composes Bhāmā Kalāpam; Golconda Nawab grants the village in perpetuity', size: 88 },
              { yr: '1920', who: 'V. Lakshmi Narayana Sastry', what: 'Initiates women into the form for the first time', size: 64 },
              { yr: '1963', who: 'Vempati Chinna Satyam', what: 'Founds the Madras school; codifies the modern margam', size: 92 },
              { yr: '1998', who: 'Indumathi Ganti', what: 'Trained at Kuchipudi Art Academy under Vempati garu', size: 64 },
              { yr: '2009', who: 'Lasyāñjali', what: 'Founded in Mallapur with seven students', size: 72 },
            ].map((p, i) => (
              <div key={p.yr} style={{ textAlign: 'center' }}>
                <div style={{ height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <div style={{ width: p.size, height: p.size, position: 'relative' }}>
                    <BrassPlate size={p.size} label="" />
                  </div>
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.2em', color: '#7a1e1e', marginTop: 4 }}>{p.yr}</div>
                <div style={{ fontFamily: 'var(--display)', fontSize: 18, marginTop: 6, color: ink }}>{p.who}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 13, fontStyle: 'italic', color: '#6b4a1e', marginTop: 6, lineHeight: 1.4 }}>{p.what}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── III · THE MARGAM (programs) ── arranged as 6 plates */}
      <section style={{ padding: '120px 56px', background: cream }}>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.3em', color: '#7a1e1e' }}>III · MĀRGAM</div>
              <h2 style={{ fontFamily: 'var(--display)', fontSize: 64, lineHeight: 1, marginTop: 12 }}>
                Six paths.<br/>
                <em style={{ fontFamily: 'var(--serif)', fontStyle: 'italic' }}>One floor.</em>
              </h2>
            </div>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 18, fontStyle: 'italic', maxWidth: 360, color: '#3a2810' }}>
              The mārgam is the sequence — alarippu, jatiswaram, śabdam, varṇam, padam, tillāna.
              Six items, six years, six gates between the door and the brass plate.
            </p>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, marginTop: 80 }}>
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <div style={{
                position: 'relative', padding: '40px 32px',
                border: '1px solid rgba(58,40,16,0.18)',
                background: 'rgba(247,237,217,0.5)',
                cursor: 'pointer',
                transition: 'all 400ms',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#fff8e8'; e.currentTarget.style.borderColor = brass; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(247,237,217,0.5)'; e.currentTarget.style.borderColor = 'rgba(58,40,16,0.18)'; }}
              >
                <div style={{ position: 'absolute', top: -28, left: 32, background: cream, padding: '0 12px' }}>
                  <BrassPlate size={56} label="" />
                </div>
                <div style={{ marginTop: 32 }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.28em', color: brass }}>
                    {String(i+1).padStart(2,'0')} · {p.level.toUpperCase()}
                  </div>
                  <h3 style={{ fontFamily: 'var(--display)', fontSize: 36, marginTop: 8 }}>{p.name}</h3>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 16, fontStyle: 'italic', color: '#6b4a1e' }}>{p.sub}</div>
                  <div style={{ marginTop: 20, height: 1, background: 'rgba(58,40,16,0.15)' }} />
                  <p style={{ fontFamily: 'var(--serif)', fontSize: 16, lineHeight: 1.55, color: '#3a2810', marginTop: 16 }}>{p.desc}</p>
                  <div style={{ marginTop: 24, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', color: brass }}>
                    {p.duration.toUpperCase()}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── IV · THE DANCER (guru) ── */}
      <section style={{ padding: '120px 56px', background: '#1a1006', color: cream }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'center' }}>
          <Reveal>
            <div style={{ position: 'relative' }}>
              <PhotoPlaceholder ratio="3/4" label="INDUMATHI GANTI · IN BHAMĀKALĀPAM" tone="dark" />
              <div style={{ position: 'absolute', bottom: -24, right: -24,
                            background: brass, color: ink, padding: '14px 20px',
                            fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.28em' }}>
                FOLIO IV · GURU
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div style={{ fontFamily: 'var(--indic)', fontSize: 28, color: 'var(--gold-300)', marginBottom: 12 }}>
              इन्दुमती गण्टि
            </div>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: 64, lineHeight: 1, color: cream }}>
              Indumathi Ganti
            </h2>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 22, fontStyle: 'italic', color: 'var(--gold-300)', marginTop: 12 }}>
              Founder · Principal teacher · A daughter of the Vempati paramparā.
            </p>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 19, lineHeight: 1.55, color: '#e8d8b8', marginTop: 28, maxWidth: 540 }}>
              Initiated at six. Arangetram at fifteen at Madras Music Academy.
              Eleven years under Padma Bhushan Dr. Vempati Chinna Satyam at the
              Kuchipudi Art Academy. Forty-two solo performances across India,
              Singapore, the Smithsonian Folklife Festival.
            </p>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 19, lineHeight: 1.55, color: '#e8d8b8', marginTop: 16, maxWidth: 540 }}>
              In 2009 she returned to Hyderabad with one conviction —
              <em style={{ color: cream }}>that no child should learn Kuchipudi as a hobby.</em>
              Lasyāñjali was opened that summer with seven students and one
              borrowed brass plate.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 40,
                          paddingTop: 32, borderTop: '1px solid rgba(230,192,103,0.25)' }}>
              {[
                { k: 'TRAINED', v: 'Vempati C. Satyam' },
                { k: 'INITIATED', v: '1991 · age 6' },
                { k: 'AWARDS', v: 'Ugadi Puraskar · 2019' },
              ].map((x) => (
                <div key={x.k}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.3em', color: 'var(--gold-300)' }}>{x.k}</div>
                  <div style={{ fontFamily: 'var(--display)', fontSize: 18, color: cream, marginTop: 6 }}>{x.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── V · GALLERY ── arranged like plates on a table */}
      <section style={{ padding: '120px 56px', background: '#efe4cb' }}>
        <Reveal>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.3em', color: '#7a1e1e' }}>V · DARŚANAM</div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 64, lineHeight: 1, marginTop: 12 }}>
            Witness.
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 56 }}>
          {GALLERY.map((g, i) => (
            <Reveal key={g.id} delay={i * 40}>
              <div
                onClick={() => { setLbIdx(i); setLbOpen(true); }}
                style={{ cursor: 'pointer', transition: 'all 300ms',
                         transform: 'translateY(0)' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <PhotoPlaceholder ratio={g.ratio} label={g.label} tone={g.tone} />
                <div style={{ marginTop: 10, fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.24em', color: brass }}>
                  PL.{String(i+1).padStart(2,'0')} · {g.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── VI · SCHEDULE ── */}
      <section style={{ padding: '120px 56px', background: cream }}>
        <Reveal>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.3em', color: '#7a1e1e' }}>VI · KĀLĀVALI</div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 64, lineHeight: 1, marginTop: 12 }}>
            Find your hour.
          </h2>
          <p style={{ fontFamily: 'var(--serif)', fontSize: 19, fontStyle: 'italic', color: '#6b4a1e', marginTop: 12, maxWidth: 540 }}>
            Four studios across east Hyderabad. Filter by neighbourhood or programme.
          </p>
        </Reveal>
        <Reveal delay={150} style={{ marginTop: 56 }}>
          <ScheduleExplorer tone="cream" />
        </Reveal>
      </section>

      {/* ── VII · ENROLMENT ── */}
      <section style={{ padding: '120px 56px', background: '#efe4cb', position: 'relative' }}>
        <div style={{ position: 'absolute', right: -120, top: -120, opacity: 0.18 }}>
          <BrassPlate size={520} label="" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, position: 'relative' }}>
          <Reveal>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.3em', color: '#7a1e1e' }}>VII · DĪKṢĀ</div>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: 56, lineHeight: 1, marginTop: 12 }}>
              Take the first step
              <em style={{ fontFamily: 'var(--serif)', fontStyle: 'italic' }}> on the rim.</em>
            </h2>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 18, lineHeight: 1.55, color: '#3a2810', marginTop: 24 }}>
              All admissions begin with a free audition class with Indumathi-garu.
              We do not run trial discounts; we open the doors.
            </p>
            <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid rgba(58,40,16,0.2)' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.28em', color: brass }}>FOR DIRECT ENQUIRIES</div>
              <div style={{ fontFamily: 'var(--display)', fontSize: 24, marginTop: 8 }}>+91 99490 21XXX</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 16, fontStyle: 'italic', color: '#6b4a1e' }}>weekdays · 10 AM – 5 PM</div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div style={{ background: cream, border: '1px solid rgba(58,40,16,0.18)', padding: 48 }}>
              <EnrollmentForm tone="cream" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: '80px 56px 40px', background: '#1a1006', color: cream }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48 }}>
          <div>
            <div style={{ fontFamily: 'var(--display)', fontSize: 32, letterSpacing: '0.08em' }}>LASYĀÑJALI</div>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 16, fontStyle: 'italic', color: '#c9b079', marginTop: 12, maxWidth: 360 }}>
              An offering of grace. A school of Kuchipudi in the paramparā of
              Padma Bhushan Dr. Vempati Chinna Satyam.
            </p>
          </div>
          {[
            { h: 'Studios', xs: ['Mallapur', 'Nacharam', 'Uppal', 'Habsiguda'] },
            { h: 'Programmes', xs: ['Aṅkura', 'Pallavī', 'Nāṭyamālā', 'Online Saṅgha'] },
            { h: 'Almanac', xs: ['About', 'Performances', 'Press', 'Contact'] },
          ].map((c) => (
            <div key={c.h}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.3em', color: 'var(--gold-300)', marginBottom: 16 }}>{c.h.toUpperCase()}</div>
              {c.xs.map((x) => (
                <div key={x} style={{ fontFamily: 'var(--serif)', fontSize: 16, color: '#c9b079', marginBottom: 8, fontStyle: 'italic' }}>{x}</div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 64, paddingTop: 24,
                      borderTop: '1px solid rgba(230,192,103,0.18)',
                      fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.28em', color: 'var(--gold-300)' }}>
          <span>© 2026 LASYĀÑJALI ACADEMY</span>
          <span>नमस्कारः</span>
          <span>HYDERABAD · 500076</span>
        </div>
      </footer>

      <Lightbox open={lbOpen} items={GALLERY} index={lbIdx} setIndex={setLbIdx} onClose={() => setLbOpen(false)} />
    </div>
  );
}

window.BrassPlateDirection = BrassPlateDirection;
