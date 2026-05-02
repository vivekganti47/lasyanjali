/* Direction B — BHĀMĀ'S LETTER
   Concept: the entire site is composed as Satyabhama's letter to Krishna —
   the famous letter from Bhāmā Kalāpam, the foundational dance-drama composed
   by Siddhendra Yogi in the 17th century. Palm-leaf, ink, pressed marigold,
   handwritten Telugu calligraphy in margins. Reads like a love letter to the form. */

function PalmLeafEdge({ side = 'top', color = '#3d2a14' }) {
  const isV = side === 'top' || side === 'bottom';
  return (
    <svg
      width={isV ? '100%' : 18}
      height={isV ? 18 : '100%'}
      viewBox={isV ? '0 0 800 18' : '0 0 18 800'}
      preserveAspectRatio="none"
      style={{ display: 'block', position: 'absolute', [side]: 0, left: side === 'right' ? 'auto' : 0, right: side === 'right' ? 0 : 'auto' }}
    >
      {isV ? (
        <>
          <path d="M0 9 Q 50 4, 100 9 T 200 9 T 300 9 T 400 9 T 500 9 T 600 9 T 700 9 T 800 9" stroke={color} strokeWidth="0.6" fill="none" opacity="0.6" />
          {Array.from({length: 80}).map((_, i) => (
            <circle key={i} cx={10 + i * 10} cy={9} r="0.6" fill={color} opacity="0.4" />
          ))}
        </>
      ) : (
        <>
          <path d="M9 0 Q 4 50, 9 100 T 9 200 T 9 300 T 9 400 T 9 500 T 9 600 T 9 700 T 9 800" stroke={color} strokeWidth="0.6" fill="none" opacity="0.6" />
        </>
      )}
    </svg>
  );
}

// Wax seal with stylized peacock feather
function WaxSeal({ size = 120 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120">
      <defs>
        <radialGradient id="wax-grad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#d04848" />
          <stop offset="60%" stopColor="#8a1818" />
          <stop offset="100%" stopColor="#420707" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="52" fill="url(#wax-grad)" filter="url(#wax-shadow)" />
      <circle cx="60" cy="60" r="52" fill="none" stroke="#420707" strokeWidth="1" opacity="0.5" />
      <circle cx="60" cy="60" r="44" fill="none" stroke="#f3dca5" strokeWidth="0.6" opacity="0.4" />
      {/* Stylized lotus */}
      {Array.from({length: 8}).map((_, i) => {
        const a = (i / 8) * Math.PI * 2;
        const x = 60 + Math.cos(a) * 22;
        const y = 60 + Math.sin(a) * 22;
        return <ellipse key={i} cx={x} cy={y} rx="3" ry="9" fill="#f3dca5" opacity="0.7"
          transform={`rotate(${(a * 180 / Math.PI) + 90} ${x} ${y})`} />;
      })}
      <circle cx="60" cy="60" r="8" fill="#f3dca5" opacity="0.85" />
      <text x="60" y="64" fontFamily="var(--indic)" fontSize="11" fill="#420707" textAnchor="middle" fontWeight="bold">श्री</text>
    </svg>
  );
}

// Hand-margin glyph (faux Telugu calligraphic flourish)
function MarginGlyph({ color = '#5a1818' }) {
  return (
    <svg width="60" height="120" viewBox="0 0 60 120" fill="none" style={{ opacity: 0.7 }}>
      <path d="M 30 8 Q 18 14, 18 28 Q 18 42, 32 44 Q 46 46, 46 60 Q 46 74, 30 76 Q 14 78, 14 92 Q 14 106, 32 110"
        stroke={color} strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <circle cx="30" cy="8" r="2" fill={color} />
      <circle cx="32" cy="110" r="2" fill={color} />
    </svg>
  );
}

function BhamaLetterDirection() {
  const [lbOpen, setLbOpen] = React.useState(false);
  const [lbIdx, setLbIdx] = React.useState(0);

  const paper = '#f0e2c4';
  const paperDeep = '#e2cfa3';
  const ink = '#2a1a0a';
  const inkRed = '#7a1e1e';
  const fold = '#bfa572';

  const paperBg = {
    background: `
      radial-gradient(ellipse 60% 80% at 30% 10%, rgba(122,30,30,0.04), transparent),
      radial-gradient(ellipse 80% 60% at 80% 90%, rgba(58,40,16,0.06), transparent),
      repeating-linear-gradient(2deg, transparent 0 28px, rgba(58,40,16,0.025) 28px 29px),
      ${paper}
    `,
  };

  return (
    <div className="la" style={{ background: '#1a1106', color: ink, position: 'relative', minHeight: '100%' }}>
      <IntroVeil artboardId="bhama" palette="cream" />

      {/* The whole page is a letter on a leather-bound desk */}
      <div style={{ padding: '40px 56px 80px', position: 'relative' }}>
        {/* Fixed top ribbon — a tiny "navigation" disguised as a manuscript header */}
        <div style={{
          position: 'sticky', top: 16, zIndex: 30,
          padding: '14px 28px',
          background: 'rgba(26,17,6,0.92)', color: paper,
          backdropFilter: 'blur(6px)',
          display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: 24,
          border: '1px solid rgba(243,220,165,0.2)',
        }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.28em', color: '#e6c067' }}>
            FOL. 1r — BHĀMĀ KALĀPAM
          </div>
          <div style={{ fontFamily: 'var(--display)', fontSize: 18, letterSpacing: '.2em' }}>L · A · S · Y · Ā · Ñ · J · A · L · I</div>
          <div style={{ display: 'flex', gap: 22, justifyContent: 'flex-end',
                        fontFamily: 'var(--serif)', fontSize: 14, fontStyle: 'italic', color: '#e6c067' }}>
            {['Letter', 'Lineage', 'Items', 'Hours', 'Reply'].map((x) => (
              <a key={x} style={{ cursor: 'pointer' }}>{x}</a>
            ))}
          </div>
        </div>

        {/* The letter sheet */}
        <div style={{
          marginTop: 40,
          ...paperBg,
          position: 'relative',
          padding: '80px 100px 120px',
          boxShadow: '0 60px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(58,40,16,0.2) inset',
          backgroundClip: 'padding-box',
        }}>
          {/* Folded corner */}
          <svg style={{ position: 'absolute', top: 0, right: 0, width: 80, height: 80 }} viewBox="0 0 80 80">
            <path d="M 80 0 L 0 0 L 80 80 Z" fill={paperDeep} />
            <path d="M 0 0 L 80 0 L 80 80 Z" fill={paper} stroke={fold} strokeWidth="0.5" />
            <path d="M 0 0 L 80 80" stroke={fold} strokeWidth="0.5" opacity="0.5" />
          </svg>

          {/* ── HEADER : the letter address ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.32em', color: inkRed }}>
                AGRAHĀRAM · KUCHIPUDI VILLAGE · ŚRĪMUKHA · MĀSI 14
              </div>
              <div style={{ fontFamily: 'var(--indic)', fontSize: 36, color: ink, marginTop: 18, lineHeight: 1.1 }}>
                ॥ श्री कृष्णाय ॥
              </div>
              <h1 style={{ fontFamily: 'var(--display)', fontSize: 92, lineHeight: 0.92, marginTop: 16, color: ink, fontWeight: 400 }}>
                A letter,<br/>
                <em style={{ fontFamily: 'var(--serif)', fontStyle: 'italic' }}>three centuries late,</em><br/>
                still arriving.
              </h1>
            </div>
            <WaxSeal size={140} />
          </div>

          {/* ── OPENING : the famous Bhama letter, paraphrased ── */}
          <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: '60px 1fr 60px', gap: 32, alignItems: 'flex-start' }}>
            <MarginGlyph />
            <div style={{ fontFamily: 'var(--serif)', fontSize: 26, lineHeight: 1.55, color: ink, fontStyle: 'italic', maxWidth: 760 }}>
              <span style={{ fontSize: 86, float: 'left', lineHeight: 0.85, marginRight: 16, marginTop: 6,
                              fontFamily: 'var(--display)', fontStyle: 'normal', color: inkRed }}>I</span>
              n the seventeenth century, in a village called Kuchelapuram,
              an ascetic named <strong style={{ fontStyle: 'normal', fontFamily: 'var(--display)' }}>Siddhendra Yogi</strong>
              imagined himself as <strong style={{ fontStyle: 'normal', fontFamily: 'var(--display)' }}>Satyabhāmā</strong>,
              the proud queen separated from her Lord. He composed her letter
              of grief and longing into a dance-drama. He taught it to seven
              Brahmin boys. They performed it for the Nawab of Golconda in 1675,
              and the Nawab was so moved he gave them the village in perpetuity.
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <MarginGlyph color="#3f6b54" />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 60px', gap: 32, alignItems: 'flex-start', marginTop: 24 }}>
            <div />
            <div style={{ fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.6, color: ink, maxWidth: 760 }}>
              That letter has not stopped travelling. It passed from Siddhendra
              to the Bhāgavatulu families, from the Bhāgavatulu to
              Vedantam Lakshmi Narayana Sastry — who first taught it to a woman.
              Then to Vempati Chinna Satyam, who carried it from temple courtyard
              to world stage. Then to Indumathi Ganti, who, in 2009, opened her
              own envelope.
            </div>
            <div />
          </div>

          {/* Pull quote — a kandam (two-line verse) from the actual Bhāmā Kalāpam */}
          <div style={{
            marginTop: 80, padding: '48px 64px',
            background: 'rgba(122,30,30,0.06)',
            borderLeft: `3px solid ${inkRed}`,
            borderRight: `3px solid ${inkRed}`,
            position: 'relative',
          }}>
            <div style={{ fontFamily: 'var(--indic)', fontSize: 32, color: ink, lineHeight: 1.5 }}>
              चित्त ज़ुनि बारिकोर्वक<br/>
              तत्थर पडि व्रसिनानु तप्पो ओप्पो<br/>
              कोपम्नेचकैत्तरि ब्रोवंग रावे
            </div>
            <div style={{ marginTop: 24, fontFamily: 'var(--serif)', fontSize: 19, fontStyle: 'italic', color: '#3a2810', lineHeight: 1.6, maxWidth: 600 }}>
              "Unable to bear the burden of my mind, I have written this letter
              in haste — right or wrong, take it. Come, hold my anger. Come."
            </div>
            <div style={{ marginTop: 16, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.28em', color: inkRed }}>
              — SATYABHĀMĀ TO KṚṢṆA · BHĀMĀ KALĀPAM · KANDAM 14
            </div>
          </div>

          {/* CTA inline */}
          <div style={{ marginTop: 80, display: 'flex', alignItems: 'center', gap: 24 }}>
            <div style={{ fontFamily: 'var(--display)', fontSize: 28, color: ink }}>
              Will you open the next?
            </div>
            <div style={{ flex: 1, height: 1, background: 'rgba(58,40,16,0.3)' }} />
            <button style={{
              padding: '16px 28px', background: ink, color: paper,
              fontFamily: 'var(--serif)', fontSize: 17, fontStyle: 'italic',
            }}>Begin a class →</button>
            <button style={{
              padding: '16px 28px', border: `1px solid ${ink}`, color: ink,
              fontFamily: 'var(--serif)', fontSize: 17, fontStyle: 'italic',
            }}>Read the full letter</button>
          </div>
        </div>

        {/* ── II · the manuscript opens : programs as numbered articles ── */}
        <div style={{ ...paperBg, marginTop: 60, padding: '80px 100px', position: 'relative',
                      boxShadow: '0 60px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(58,40,16,0.2) inset' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.32em', color: inkRed, marginBottom: 12 }}>
            FOL. 4r · ARTICLES OF INSTRUCTION
          </div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 64, lineHeight: 1, color: ink }}>
            On what is taught,<br/>
            <em style={{ fontFamily: 'var(--serif)', fontStyle: 'italic' }}>and at what hour.</em>
          </h2>

          <div style={{ marginTop: 64, display: 'grid', gap: 0 }}>
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.id} delay={i * 60}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr 200px 220px 60px',
                  gap: 32, alignItems: 'baseline',
                  padding: '28px 0',
                  borderBottom: '1px solid rgba(58,40,16,0.2)',
                  cursor: 'pointer',
                  transition: 'all 220ms',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(122,30,30,0.04)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ fontFamily: 'var(--display)', fontSize: 56, color: inkRed, lineHeight: 1 }}>
                    {String(i+1).padStart(2,'0')}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--display)', fontSize: 36, color: ink, marginBottom: 4 }}>{p.name}</h3>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 18, fontStyle: 'italic', color: '#5a3818' }}>{p.sub}</div>
                    <p style={{ fontFamily: 'var(--serif)', fontSize: 17, lineHeight: 1.5, color: '#3a2810', marginTop: 12, maxWidth: 560 }}>
                      {p.desc}
                    </p>
                  </div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 16, fontStyle: 'italic', color: '#5a3818' }}>{p.duration}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.24em', color: inkRed }}>{p.level.toUpperCase()}</div>
                  <div style={{ fontFamily: 'var(--display)', fontSize: 28, color: inkRed, textAlign: 'right' }}>→</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── III · the guru's reply : portrait + signature ── */}
        <div style={{ marginTop: 60, padding: '80px 100px', ...paperBg, position: 'relative',
                      boxShadow: '0 60px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(58,40,16,0.2) inset' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'flex-start' }}>
            <Reveal>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.32em', color: inkRed }}>
                FOL. 7v · A REPLY FROM THE GURU
              </div>
              <h2 style={{ fontFamily: 'var(--display)', fontSize: 56, lineHeight: 1, color: ink, marginTop: 16 }}>
                Indumathi Ganti
              </h2>
              <div style={{ fontFamily: 'var(--indic)', fontSize: 22, color: inkRed, marginTop: 6 }}>
                इन्दुमती गण्टि · इन्दुमति
              </div>
              <p style={{ fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.55, color: ink, marginTop: 32,
                          fontStyle: 'italic', maxWidth: 540 }}>
                Dear seeker —
              </p>
              <p style={{ fontFamily: 'var(--serif)', fontSize: 19, lineHeight: 1.6, color: ink, marginTop: 16, maxWidth: 540 }}>
                I came to this art at six. My grandmother held my elbows so they
                would not droop. My first guru, the late <em>Smt. Jyothi Reddy</em>,
                made me sweep the practice floor before I was allowed onto it. At
                fifteen I gave my arangetram at the Madras Music Academy. For
                eleven years after that I was a daughter of the Kuchipudi Art
                Academy under <em>Padma Bhushan Dr. Vempati Chinna Satyam.</em>
              </p>
              <p style={{ fontFamily: 'var(--serif)', fontSize: 19, lineHeight: 1.6, color: ink, marginTop: 16, maxWidth: 540 }}>
                In 2009 I came home to Hyderabad with one rule — that this
                letter from Bhāmā would not be reduced to extracurricular polish
                in my hands. We teach the full mārgam. We teach Telugu lyrics.
                We earn the brass plate.
              </p>
              <p style={{ fontFamily: 'var(--serif)', fontSize: 19, lineHeight: 1.6, color: ink, marginTop: 16, maxWidth: 540 }}>
                If you have read this far, you have already begun.
              </p>
              {/* Signature */}
              <div style={{ marginTop: 40, fontFamily: 'var(--serif)', fontSize: 18, fontStyle: 'italic', color: '#3a2810' }}>Yours in dharma,</div>
              <svg width="220" height="80" viewBox="0 0 220 80" style={{ marginTop: 8 }}>
                <path d="M 10 50 Q 24 18, 38 32 Q 50 46, 60 28 Q 70 12, 88 30 Q 102 42, 116 22 Q 130 6, 148 28 Q 166 50, 184 30 Q 200 14, 210 36"
                  stroke={inkRed} strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M 30 60 Q 80 68, 130 62" stroke={inkRed} strokeWidth="0.6" fill="none" opacity="0.6" />
              </svg>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.28em', color: inkRed, marginTop: 8 }}>
                INDUMATHI GANTI · MALLAPUR · 2009 →
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div style={{ position: 'relative', transform: 'rotate(2deg)',
                            boxShadow: '0 30px 50px rgba(0,0,0,0.4)', padding: 16, background: '#f7ecd9',
                            border: '1px solid rgba(58,40,16,0.2)' }}>
                <PhotoPlaceholder ratio="3/4" label="INDUMATHI · IN BHĀMĀ KALĀPAM" tone="cream" />
                <div style={{ marginTop: 12, fontFamily: 'var(--serif)', fontSize: 14, fontStyle: 'italic', color: '#5a3818', textAlign: 'center' }}>
                  Photographed at Kuchipudi Art Academy, 2003
                </div>
              </div>
              {/* Pressed marigold */}
              <div style={{ position: 'absolute', top: -30, left: -30, width: 120, height: 120, opacity: 0.85 }}>
                <svg viewBox="0 0 100 100">
                  {Array.from({length: 20}).map((_, i) => {
                    const a = (i / 20) * Math.PI * 2;
                    const cx = 50 + Math.cos(a) * 18, cy = 50 + Math.sin(a) * 18;
                    return <ellipse key={i} cx={cx} cy={cy} rx="6" ry="14" fill="#c89b3c" opacity="0.7"
                      transform={`rotate(${(a*180/Math.PI)+90} ${cx} ${cy})`} />;
                  })}
                  <circle cx="50" cy="50" r="14" fill="#9a7028" />
                </svg>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── IV · enclosed photographs ── */}
        <div style={{ marginTop: 60, padding: '80px 100px', ...paperBg,
                      boxShadow: '0 60px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(58,40,16,0.2) inset' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.32em', color: inkRed }}>
            FOL. 11r · ENCLOSURES — EIGHT PHOTOGRAPHS
          </div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 56, lineHeight: 1, color: ink, marginTop: 16 }}>
            What the post brought.
          </h2>

          {/* Scattered photographs at slight rotations, like loose enclosures */}
          <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 36 }}>
            {GALLERY.map((g, i) => {
              const rotations = [-2.5, 1.5, -1, 2.2, -1.8, 1.2, -2.4, 1.8];
              return (
                <Reveal key={g.id} delay={i * 40}>
                  <div
                    onClick={() => { setLbIdx(i); setLbOpen(true); }}
                    style={{
                      transform: `rotate(${rotations[i]}deg)`,
                      padding: 12,
                      background: '#f7ecd9',
                      boxShadow: '0 20px 30px rgba(0,0,0,0.25)',
                      border: '1px solid rgba(58,40,16,0.15)',
                      cursor: 'pointer',
                      transition: 'all 320ms cubic-bezier(.2,.7,.2,1)',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = `rotate(0deg) translateY(-8px)`; e.currentTarget.style.boxShadow = '0 30px 50px rgba(0,0,0,0.35)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = `rotate(${rotations[i]}deg)`; e.currentTarget.style.boxShadow = '0 20px 30px rgba(0,0,0,0.25)'; }}
                  >
                    <PhotoPlaceholder ratio="3/4" label={g.label} tone="cream" />
                    <div style={{ marginTop: 10, fontFamily: 'var(--serif)', fontSize: 13, fontStyle: 'italic',
                                  color: '#3a2810', textAlign: 'center' }}>
                      "{g.label.toLowerCase()}"
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* ── V · the calendar ── */}
        <div style={{ marginTop: 60, padding: '80px 100px', ...paperBg,
                      boxShadow: '0 60px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(58,40,16,0.2) inset' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.32em', color: inkRed }}>
            FOL. 14v · KĀLĀVALI — THE WEEK
          </div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 56, lineHeight: 1, color: ink, marginTop: 16 }}>
            Hours, by neighbourhood.
          </h2>
          <div style={{ marginTop: 56 }}>
            <ScheduleExplorer tone="cream" />
          </div>
        </div>

        {/* ── VI · the reply card ── */}
        <div style={{ marginTop: 60, padding: '80px 100px', ...paperBg, position: 'relative',
                      boxShadow: '0 60px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(58,40,16,0.2) inset' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80 }}>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.32em', color: inkRed }}>
                FOL. 19r · YOUR REPLY
              </div>
              <h2 style={{ fontFamily: 'var(--display)', fontSize: 56, lineHeight: 1, color: ink, marginTop: 16 }}>
                Write back.
              </h2>
              <p style={{ fontFamily: 'var(--serif)', fontSize: 19, fontStyle: 'italic', color: ink, marginTop: 24, lineHeight: 1.55, maxWidth: 440 }}>
                A free audition class with Indumathi-garu is the only door.
                There are no trial discounts. We open it for you, or we don't.
              </p>
              <div style={{ marginTop: 48 }}>
                <WaxSeal size={120} />
              </div>
            </div>
            <div style={{ background: '#fffaf2', border: `1px solid rgba(58,40,16,0.2)`, padding: 48,
                          boxShadow: '0 8px 0 rgba(58,40,16,0.06)' }}>
              <EnrollmentForm tone="cream" />
            </div>
          </div>
        </div>

        {/* ── footer : signature line ── */}
        <div style={{ marginTop: 80, padding: '40px 0',
                      borderTop: `1px solid ${fold}`, borderBottom: `1px solid ${fold}`,
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      color: paper, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.28em' }}>
          <span style={{ color: '#e6c067' }}>© 2026 LASYĀÑJALI · MS. NO. 17/2026</span>
          <span style={{ fontFamily: 'var(--indic)', fontSize: 18, color: '#e6c067', letterSpacing: 'normal' }}>॥ श्री कृष्णार्पणम् ॥</span>
          <span style={{ color: '#e6c067' }}>HYDERABAD · 500076 · IN</span>
        </div>
      </div>

      <Lightbox open={lbOpen} items={GALLERY} index={lbIdx} setIndex={setLbIdx} onClose={() => setLbOpen(false)} />
    </div>
  );
}

window.BhamaLetterDirection = BhamaLetterDirection;
