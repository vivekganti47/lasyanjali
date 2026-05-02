/* Direction C — AGRAHĀRAM CODEX
   Concept: an editorial archive of the form. References the village
   structure of Kuchipudi (the agraharam — a Brahmin settlement granted by
   the Nawab of Golconda in 1675), the 1502 Bhāgavatulu lineage, and
   Yakshagana's daru/jathi alternation as a structural device. Copper-
   inscription typography. Forest green + bone + copper. Information-rich. */

function CopperPlate({ width = 100, height = 60, children }) {
  return (
    <div style={{
      position: 'relative',
      width, height,
      background: 'linear-gradient(135deg, #b87333 0%, #8a4f1d 50%, #5d3411 100%)',
      color: '#f7ecd9',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.2em',
      boxShadow: 'inset 0 0 0 1px rgba(247,236,217,0.2), 0 4px 8px rgba(0,0,0,0.3)',
    }}>
      {children}
    </div>
  );
}

// Faux Telugu-script inscription line (decorative)
function InscriptionLine({ length = 30 }) {
  return (
    <svg width="100%" height="20" viewBox={`0 0 ${length * 14} 20`} preserveAspectRatio="none">
      {Array.from({length}).map((_, i) => (
        <g key={i} transform={`translate(${i * 14}, 0)`}>
          <path d={`M 2 14 Q 6 ${4 + (i % 3) * 2}, 10 14`} stroke="currentColor" strokeWidth="1.2" fill="none" />
          {i % 4 === 0 && <circle cx="6" cy="3" r="1" fill="currentColor" />}
          {i % 5 === 2 && <line x1="6" y1="14" x2="6" y2="18" stroke="currentColor" strokeWidth="1" />}
        </g>
      ))}
    </svg>
  );
}

function AgraharamDirection() {
  const [lbOpen, setLbOpen] = React.useState(false);
  const [lbIdx, setLbIdx] = React.useState(0);
  const [tab, setTab] = React.useState('daru');

  // Forest-green sacred palette + bone + copper
  const bone = '#ede4d0';
  const boneDeep = '#dcd0b3';
  const ink = '#0f1a14';
  const forest = '#1f3a2a';
  const forestMid = '#2f5a44';
  const copper = '#b87333';
  const copperDeep = '#8a4f1d';
  const cream = '#f5ecd9';

  const tabs = {
    daru: {
      title: 'Daruvu — the Sung Verse',
      body: 'A daruvu is the sung half of a Yakshagana verse — set to a specific raga and tala, narrating the action through lyric. In Kuchipudi, daruvus carry the spoken-sung quality that distinguishes the form from purely danced traditions. Lasyāñjali insists every advanced student learn the Telugu lyrics, not only the choreography.',
      meta: 'Examples: Pravesa Daruvu · Sambhasana Daruvu · Patra Pravesa Daruvu',
    },
    jathi: {
      title: 'Jathi — the Rhythmic Syllable',
      body: 'A jathi is a sequence of solkattu — the sound-syllables of footwork — recited by the nattuvanar before the dancer executes them. Kuchipudi jathis are lighter and more rounded than Bharatanāṭyam, with the swaying gait the form is known for. Our students learn nattuvangam from year three, so they can teach themselves to listen.',
      meta: 'Syllables: ta · ka · dhi · mi · jhem · taka jhonu · taḷāṅgu',
    },
    abhinaya: {
      title: 'Abhinaya — the Language of the Face',
      body: 'Drawn from Bharata Muni\'s Nātyaśāstra and Nandikeshvara\'s Abhinayadarpaṇa, abhinaya is the codified language of expression — eyes, brows, neck, hand. Kuchipudi specialises in mukhabhinaya (face) for the śṛṅgāra rasa. The classical text lists nine rasas; the dancer must enter and exit each cleanly.',
      meta: 'Rasas: śṛṅgāra · hāsya · karuṇa · raudra · vīra · bhayānaka · bībhatsa · adbhuta · śānta',
    },
    natya: {
      title: 'Nāṭya — the Dance-Drama',
      body: 'Where Bharatanāṭyam favours the solo, Kuchipudi was born as nāṭya — full dance-drama with multiple roles, dialogue (vāchika), and song. A single dancer becomes Bhāmā, then Krishna, then the Sūtradhāri narrator within a single item. Students at Lasyāñjali stage at least one full nāṭaka before their arangetram.',
      meta: 'Repertoire: Bhāmā Kalāpam · Golla Kalāpam · Sashirekha Pariṇayam · Prahlāda Caritram',
    },
  };

  return (
    <div className="la" style={{ background: bone, color: ink, position: 'relative', minHeight: '100%', fontFamily: 'var(--sans)' }}>
      <IntroVeil artboardId="agraharam" palette="cream" />

      {/* ── HEADER MASTHEAD ── like a learned-society journal ── */}
      <div style={{
        background: forest, color: bone,
        padding: '14px 56px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.32em',
      }}>
        <span>VOL. XVII · NO. 03</span>
        <span style={{ color: copper }}>THE LASYĀÑJALI CODEX</span>
        <span>ESTD. ŚAKĀBDA 1931 (CE 2009)</span>
      </div>

      {/* Masthead */}
      <header style={{ padding: '32px 56px 24px', background: bone, borderBottom: `2px solid ${forest}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ width: 220 }}>
            <InscriptionLine length={20} />
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--display)', fontSize: 64, letterSpacing: '0.04em', color: forest, lineHeight: 1 }}>
              LASYĀÑJALI
            </div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 18, fontStyle: 'italic', color: copperDeep, marginTop: 4 }}>
              Being a school of Kuchipudi · in the paramparā of Vempati Chinna Satyam · at Hyderabad
            </div>
          </div>
          <div style={{ width: 220, transform: 'scaleX(-1)' }}>
            <InscriptionLine length={20} />
          </div>
        </div>

        <nav style={{ marginTop: 24, display: 'flex', justifyContent: 'center', gap: 40,
                      paddingTop: 16, borderTop: `1px solid ${forest}`,
                      fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '.28em', textTransform: 'uppercase' }}>
          {['I · The Form', 'II · Lineage', 'III · Curriculum', 'IV · Studios', 'V · Calendar', 'VI · Enrol'].map((x) => (
            <a key={x} style={{ cursor: 'pointer', color: forest }}>{x}</a>
          ))}
        </nav>
      </header>

      {/* ── HERO : a leading article ── */}
      <section style={{ padding: '80px 56px', background: bone, position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr', gap: 56 }}>
          {/* Left rail — section number, drop-cap-like */}
          <div>
            <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)',
                          fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.4em', color: copperDeep }}>
              ARTICLE I · ON THE FORM AND ITS HOUSE
            </div>
          </div>

          {/* Center — drop-cap article */}
          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.32em', color: copperDeep, marginBottom: 16 }}>
              KUCHIPUDI · ANDHRA PRADESH · CIRCA 17 c.
            </div>
            <h1 style={{ fontFamily: 'var(--display)', fontSize: 84, lineHeight: 0.92, color: forest, fontWeight: 400, letterSpacing: '-0.01em' }}>
              The village of <em style={{ fontFamily: 'var(--serif)', fontStyle: 'italic' }}>actors,</em> still teaching.
            </h1>
            <div style={{ marginTop: 28, columnCount: 1, fontFamily: 'var(--serif)', fontSize: 19, lineHeight: 1.55, color: ink }}>
              <p>
                <span style={{ fontFamily: 'var(--display)', fontSize: 84, float: 'left',
                                lineHeight: 0.85, marginRight: 12, marginTop: 6, color: copper }}>K</span>
                uchipudi takes its name from a village — <em>Kuchelapuram</em>, in
                Sanskrit <em>Kusilava-puram</em>, "the village of actors." In 1502
                the first all-male troupe of Bhāgavatulu Brahmins formed there
                to enact stories of Krishna. In the 17th century the ascetic
                Siddhendra Yogi reformed the tradition, composed the Bhāmā
                Kalāpam, and in 1675 staged it for the Nawab of Golconda — who
                was so moved he granted the village to the troupe in perpetuity.
              </p>
              <p style={{ marginTop: 18 }}>
                For three centuries this remained a male, Brahmin, village-based
                form. Then Vedantam Lakshmi Narayana Sastry initiated women.
                Vempati Chinna Satyam carried it from Madras to the world. Today
                we teach it in Mallapur, Nacharam, Uppal, Habsiguda — twenty-one
                kilometres east of the agrahāram, but the line has not broken.
              </p>
            </div>
          </div>

          {/* Right — the four faces of the form (tabbed) */}
          <div style={{ background: forest, color: bone, padding: 32, position: 'relative' }}>
            <div style={{ position: 'absolute', top: -18, left: 32 }}>
              <CopperPlate width={140} height={28}>FOUR FACES</CopperPlate>
            </div>
            <div style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 24 }}>
              {Object.entries(tabs).map(([k, v]) => (
                <button key={k} onClick={() => setTab(k)} style={{
                  padding: '8px 14px',
                  fontFamily: 'var(--serif)', fontSize: 14, fontStyle: 'italic',
                  color: tab === k ? forest : bone,
                  background: tab === k ? copper : 'transparent',
                  border: `1px solid ${copper}`,
                  transition: 'all 200ms',
                }}>{k}</button>
              ))}
            </div>
            <h3 style={{ fontFamily: 'var(--display)', fontSize: 28, color: copper, lineHeight: 1.1 }}>
              {tabs[tab].title}
            </h3>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 16, lineHeight: 1.55, color: bone, marginTop: 16 }}>
              {tabs[tab].body}
            </p>
            <div style={{ marginTop: 24, paddingTop: 16, borderTop: `1px solid ${copper}`,
                          fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.24em', color: copper }}>
              {tabs[tab].meta}
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div style={{ marginTop: 64, paddingTop: 32, borderTop: `1px solid ${forest}`,
                      display: 'flex', alignItems: 'center', gap: 32 }}>
          <button style={{
            padding: '16px 28px', background: forest, color: bone,
            fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '.28em', textTransform: 'uppercase', fontWeight: 600,
          }}>Begin a class →</button>
          <button style={{
            padding: '16px 28px', border: `1px solid ${forest}`, color: forest,
            fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '.28em', textTransform: 'uppercase',
          }}>Read the lineage</button>
          <div style={{ flex: 1 }} />
          <div style={{ display: 'flex', gap: 32, fontFamily: 'var(--serif)', fontSize: 14, fontStyle: 'italic', color: copperDeep }}>
            <span><strong style={{ fontStyle: 'normal', fontFamily: 'var(--display)', fontSize: 24, color: forest }}>1502</strong> first troupe</span>
            <span><strong style={{ fontStyle: 'normal', fontFamily: 'var(--display)', fontSize: 24, color: forest }}>1675</strong> village granted</span>
            <span><strong style={{ fontStyle: 'normal', fontFamily: 'var(--display)', fontSize: 24, color: forest }}>2009</strong> we opened</span>
          </div>
        </div>
      </section>

      {/* ── II · LINEAGE — a copper inscription ── */}
      <section style={{ padding: '120px 56px', background: forest, color: bone, position: 'relative' }}>
        <Reveal>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.32em', color: copper }}>
            ARTICLE II · A COPPER INSCRIPTION OF THE PARAMPARĀ
          </div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 64, lineHeight: 1, color: bone, marginTop: 16, maxWidth: 900 }}>
            From the river Krishna to the floor in Mallapur, <em style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: copper }}>five hundred and twenty-four years.</em>
          </h2>
        </Reveal>

        <Reveal delay={150} style={{ marginTop: 80 }}>
          {/* Vertical timeline with copper plates */}
          <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 0 }}>
            {[
              { yr: '1502', era: 'BHAKTI ERA', who: 'Bhāgavatulu form', what: 'First all-male Brahmin troupe formed at Kuchipudi village to perform Yakshaganas of Krishna leelas. Performances confined to temple festivals. Women excluded.' },
              { yr: '1675', era: 'GOLCONDA', who: 'Siddhendra Yogi · Bhāmā Kalāpam', what: 'Composes Parijātāpaharaṇam — known as Bhāmā Kalāpam. Performs it for the Nawab Abdul Hassan Tana Shah of Golconda. The village is granted to the troupe in perpetuity. The form codifies.' },
              { yr: '1785', era: 'NAYAK COURTS', who: 'Bhāgavata Mela diaspora', what: 'Bhāgavatulu families migrate to Tamil country. The Melattur tradition splits off as Bhāgavata Mela Nāṭakam. Kuchipudi proper continues at the village under Vedantam, Tadepalli, Pasumarthy lineages.' },
              { yr: '1920', era: 'REFORM', who: 'Vedantam Lakshmi Narayana Sastry', what: 'For the first time in five centuries, women are initiated into the form. Sastry-garu also teaches courtesans, breaking the Brahmin-only convention. The dance opens.' },
              { yr: '1963', era: 'STAGE ERA', who: 'Vempati Chinna Satyam · Kuchipudi Art Academy, Madras', what: 'Founds the academy that will define modern Kuchipudi. Codifies the solo margam. Composes 180 items including 17 dance-dramas. Receives Padma Bhushan. Trains thousands.' },
              { yr: '1991', era: 'INITIATION', who: 'Indumathi Ganti, age six', what: 'Begins training under Smt. Jyothi Reddy at Hyderabad. Arangetram at Madras Music Academy, 1999. Eleven years at the Kuchipudi Art Academy under Vempati garu directly.' },
              { yr: '2009', era: 'AT HYDERABAD', who: 'Lasyāñjali, Mallapur', what: 'Opens with seven students and a single 13-inch brass plate. Today: 340 students, four studios, twenty-two completed arangetrams.' },
            ].map((p, i) => (
              <Reveal key={p.yr} delay={i * 60}>
                <div style={{ display: 'contents' }}>
                  <div style={{
                    padding: '32px 24px 32px 0',
                    borderBottom: `1px solid rgba(184,115,51,0.3)`,
                    borderRight: `2px solid ${copper}`,
                    textAlign: 'right',
                  }}>
                    <div style={{ fontFamily: 'var(--display)', fontSize: 48, color: copper, lineHeight: 1 }}>{p.yr}</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.24em', color: bone, marginTop: 6, opacity: 0.7 }}>{p.era}</div>
                  </div>
                  <div style={{
                    padding: '32px 0 32px 32px',
                    borderBottom: `1px solid rgba(184,115,51,0.3)`,
                    position: 'relative',
                  }}>
                    <div style={{ position: 'absolute', left: -8, top: 40, width: 14, height: 14,
                                  background: copper, transform: 'rotate(45deg)' }} />
                    <h3 style={{ fontFamily: 'var(--display)', fontSize: 28, color: bone }}>{p.who}</h3>
                    <p style={{ fontFamily: 'var(--serif)', fontSize: 17, lineHeight: 1.55, color: '#d8c89c', marginTop: 12, maxWidth: 720 }}>
                      {p.what}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── III · CURRICULUM — six programs as catalog ── */}
      <section style={{ padding: '120px 56px', background: bone }}>
        <Reveal>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.32em', color: copperDeep }}>
            ARTICLE III · CURRICULUM, BY YEAR AND BY LEVEL
          </div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 64, lineHeight: 1, color: forest, marginTop: 16 }}>
            Six programmes.<br/>
            <em style={{ fontFamily: 'var(--serif)', fontStyle: 'italic' }}>One mārgam.</em>
          </h2>
        </Reveal>

        <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
                      borderTop: `1px solid ${forest}`, borderLeft: `1px solid ${forest}` }}>
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <div style={{
                padding: 36,
                borderRight: `1px solid ${forest}`,
                borderBottom: `1px solid ${forest}`,
                background: bone,
                cursor: 'pointer',
                transition: 'all 280ms',
                position: 'relative',
                minHeight: 320,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = forest; e.currentTarget.style.color = bone; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = bone; e.currentTarget.style.color = ink; }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <CopperPlate width={56} height={24}>{String(i+1).padStart(2,'0')}</CopperPlate>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.24em', color: 'inherit', opacity: 0.7 }}>
                    {p.level.toUpperCase()}
                  </div>
                </div>
                <h3 style={{ fontFamily: 'var(--display)', fontSize: 40, marginTop: 32, color: 'inherit' }}>{p.name}</h3>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 17, fontStyle: 'italic', color: 'inherit', opacity: 0.75, marginTop: 4 }}>
                  {p.sub}
                </div>
                <p style={{ fontFamily: 'var(--serif)', fontSize: 16, lineHeight: 1.55, color: 'inherit', marginTop: 20, opacity: 0.9 }}>
                  {p.desc}
                </p>
                <div style={{ position: 'absolute', bottom: 24, left: 36, right: 36,
                              paddingTop: 16, borderTop: `1px solid currentColor`,
                              display: 'flex', justifyContent: 'space-between',
                              fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', opacity: 0.8 }}>
                  <span>{p.duration.toUpperCase()}</span>
                  <span>→</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── IV · GURU sidebar article ── */}
      <section style={{ padding: '120px 56px', background: boneDeep }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'flex-start' }}>
          <Reveal>
            <PhotoPlaceholder ratio="3/4" label="INDUMATHI GANTI · 2024" tone="cream" />
            <CopperPlate width="100%" height={28} >
              <span style={{ padding: '0 12px' }}>FOUNDER · PRINCIPAL TEACHER</span>
            </CopperPlate>
          </Reveal>
          <Reveal delay={150}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.32em', color: copperDeep }}>
              ARTICLE IV · A NOTE ON THE FOUNDER
            </div>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: 56, lineHeight: 1, color: forest, marginTop: 16 }}>
              Indumathi Ganti
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginTop: 32 }}>
              <p style={{ fontFamily: 'var(--serif)', fontSize: 17, lineHeight: 1.6, color: ink }}>
                <span style={{ fontFamily: 'var(--display)', fontSize: 56, float: 'left', lineHeight: 0.85, marginRight: 10, color: copper }}>I</span>
                ndumathi-garu was initiated into Kuchipudi at six, under
                Smt. Jyothi Reddy of Hyderabad. Her arangetram was performed
                at the Madras Music Academy in 1999 — the same hall where
                Vempati Chinna Satyam had himself made his debut.
                For eleven years thereafter she was a daughter of the
                Kuchipudi Art Academy under Vempati-garu directly.
              </p>
              <p style={{ fontFamily: 'var(--serif)', fontSize: 17, lineHeight: 1.6, color: ink }}>
                She has performed forty-two solo concerts across India,
                Singapore, the Smithsonian Folklife Festival, and the Indo-American
                Arts Council in New York. She received the Ugadi Puraskar
                in 2019. In 2009 she returned to Hyderabad to teach the form
                with the rigour she had received — full mārgam, Telugu lyrics,
                full nāṭakam, the brass plate.
              </p>
            </div>
            <div style={{ marginTop: 40, paddingTop: 24, borderTop: `1px solid ${forest}`,
                          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
              {[
                { k: 'INITIATED', v: '1991', sub: 'age 6' },
                { k: 'ARANGETRAM', v: '1999', sub: 'Madras Music Academy' },
                { k: 'TRAINED', v: '11 yrs', sub: 'under Vempati C. Satyam' },
                { k: 'AWARDS', v: '2019', sub: 'Ugadi Puraskar' },
              ].map((x) => (
                <div key={x.k}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.28em', color: copperDeep }}>{x.k}</div>
                  <div style={{ fontFamily: 'var(--display)', fontSize: 28, color: forest, marginTop: 4 }}>{x.v}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 13, fontStyle: 'italic', color: '#3a2810' }}>{x.sub}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── V · STUDIOS — index of locations as letterhead cards ── */}
      <section style={{ padding: '120px 56px', background: bone }}>
        <Reveal>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.32em', color: copperDeep }}>
            ARTICLE V · INDEX OF STUDIOS
          </div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 56, lineHeight: 1, color: forest, marginTop: 16 }}>
            Four floors, east of the city.
          </h2>
        </Reveal>
        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {LOCATIONS.map((l, i) => (
            <Reveal key={l.name} delay={i * 60}>
              <div style={{
                background: bone,
                border: `1px solid ${forest}`,
                padding: 28,
                position: 'relative',
                minHeight: 280,
              }}>
                <div style={{ position: 'absolute', top: -14, left: 28 }}>
                  <CopperPlate width={64} height={26}>0{i+1}</CopperPlate>
                </div>
                <div style={{ marginTop: 24 }}>
                  <h3 style={{ fontFamily: 'var(--display)', fontSize: 32, color: forest }}>{l.name}</h3>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 16, fontStyle: 'italic', color: copperDeep }}>{l.sub}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 15, lineHeight: 1.45, color: ink, marginTop: 16 }}>
                    {l.address}
                  </div>
                  <div style={{ marginTop: 16, paddingTop: 12, borderTop: `1px solid rgba(31,58,42,0.2)` }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.24em', color: copperDeep }}>{l.days}</div>
                    <div style={{ fontFamily: 'var(--display)', fontSize: 18, color: forest, marginTop: 4 }}>{l.hours}</div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 13, fontStyle: 'italic', color: '#3a2810', marginTop: 8 }}>{l.note}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── VI · GALLERY ── editorial grid ── */}
      <section style={{ padding: '120px 56px', background: forest, color: bone }}>
        <Reveal>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.32em', color: copper }}>
            PLATES I — VIII · FROM THE ARCHIVE
          </div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 56, lineHeight: 1, color: bone, marginTop: 16 }}>
            Eight years, eight plates.
          </h2>
        </Reveal>
        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {GALLERY.map((g, i) => (
            <Reveal key={g.id} delay={i * 40}>
              <div onClick={() => { setLbIdx(i); setLbOpen(true); }}
                style={{ cursor: 'pointer', transition: 'transform 280ms' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <PhotoPlaceholder ratio={g.ratio} label={g.label} tone="dark" />
                <div style={{ marginTop: 10, fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.24em', color: copper }}>
                  PL.{String(i+1).padStart(2,'0')}
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 14, fontStyle: 'italic', color: '#d8c89c' }}>{g.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── VII · CALENDAR ── */}
      <section style={{ padding: '120px 56px', background: bone }}>
        <Reveal>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.32em', color: copperDeep }}>
            ARTICLE VII · KĀLĀVALI · WEEKLY CALENDAR
          </div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 56, lineHeight: 1, color: forest, marginTop: 16 }}>
            Hours of instruction.
          </h2>
        </Reveal>
        <div style={{ marginTop: 56 }}>
          <ScheduleExplorer tone="cream" />
        </div>
      </section>

      {/* ── VIII · ENROL ── */}
      <section style={{ padding: '120px 56px', background: forest, color: bone, position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 80 }}>
          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.32em', color: copper }}>
              ARTICLE VIII · DĪKṢĀ — ON ENROLMENT
            </div>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: 56, lineHeight: 1, color: bone, marginTop: 16 }}>
              Petition for an audition.
            </h2>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 18, lineHeight: 1.55, color: '#d8c89c', marginTop: 24, maxWidth: 440 }}>
              Every student begins with a free audition class with
              Indumathi-garu. We do not run trial discounts. We open the door,
              or we don't.
            </p>
            <div style={{ marginTop: 40 }}>
              <CopperPlate width={220} height={48}>
                <span>+91 99490 21XXX · 10 AM – 5 PM</span>
              </CopperPlate>
            </div>
          </div>
          <div style={{ background: bone, color: ink, padding: 48, border: `1px solid ${copper}` }}>
            <EnrollmentForm tone="cream" />
          </div>
        </div>
      </section>

      {/* ── footer ── */}
      <footer style={{ background: ink, color: bone, padding: '48px 56px',
                       display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                       fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.28em' }}>
        <span style={{ color: copper }}>© LASYĀÑJALI · MMXXVI</span>
        <span>VOL. XVII · NO. 03 · MAY 2026</span>
        <span style={{ color: copper }}>HYDERABAD · 500076</span>
      </footer>

      <Lightbox open={lbOpen} items={GALLERY} index={lbIdx} setIndex={setLbIdx} onClose={() => setLbOpen(false)} />
    </div>
  );
}

window.AgraharamDirection = AgraharamDirection;
