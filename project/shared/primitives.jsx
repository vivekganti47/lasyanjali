/* Shared primitives for Lasyanjali landing pages */

// ─── Hooks ────────────────────────────────────────────────────────────────
function useReveal() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({ as = 'div', delay = 0, className = '', style = {}, children, ...rest }) {
  const ref = useReveal();
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`la-reveal ${className}`}
      style={{ ...style, '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// ─── Ornaments ────────────────────────────────────────────────────────────

// Stylized lotus medallion (kalasha-style) — not figurative
function LotusMark({ size = 48, color = 'currentColor', strokeWidth = 1.2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth={strokeWidth}>
      <circle cx="32" cy="32" r="3" fill={color} stroke="none" />
      <circle cx="32" cy="32" r="9" />
      <circle cx="32" cy="32" r="18" opacity="0.55" />
      <circle cx="32" cy="32" r="27" opacity="0.3" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 8;
        const x1 = 32 + Math.cos(a) * 9;
        const y1 = 32 + Math.sin(a) * 9;
        const x2 = 32 + Math.cos(a) * 18;
        const y2 = 32 + Math.sin(a) * 18;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 16 + Math.PI / 16;
        const x1 = 32 + Math.cos(a) * 18;
        const y1 = 32 + Math.sin(a) * 18;
        const x2 = 32 + Math.cos(a) * 27;
        const y2 = 32 + Math.sin(a) * 27;
        return <line key={'o'+i} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.6" />;
      })}
    </svg>
  );
}

// Diamond/kolam motif row
function MotifRow({ count = 9, color = 'currentColor', size = 8 }) {
  return (
    <div style={{ display: 'flex', gap: size, alignItems: 'center', justifyContent: 'center' }}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          style={{
            width: size, height: size,
            background: color,
            transform: 'rotate(45deg)',
            opacity: i === Math.floor(count / 2) ? 1 : 0.4 + (Math.abs(i - count/2) < 2 ? 0.2 : 0),
          }}
        />
      ))}
    </div>
  );
}

// Arch frame (toraṇa)
function ArchFrame({ children, color = 'var(--gold-500)', stroke = 1.5, style = {} }) {
  return (
    <div style={{ position: 'relative', ...style }}>
      <svg
        viewBox="0 0 100 140"
        preserveAspectRatio="none"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      >
        <path
          d="M 4 136 L 4 50 Q 4 4 50 4 Q 96 4 96 50 L 96 136"
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {children}
    </div>
  );
}

// Subtle script ornament (Telugu "ల" stylized as silhouette — abstract glyph rendering)
function ScriptGlyph({ size = 200, color = 'var(--gold-500)', opacity = 0.14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" style={{ opacity }}>
      <circle cx="100" cy="100" r="78" stroke={color} strokeWidth="0.8" />
      <circle cx="100" cy="100" r="62" stroke={color} strokeWidth="0.8" />
      <path
        d="M 60 70 Q 60 50 80 50 Q 100 50 100 75 L 100 130 Q 100 145 115 145 Q 130 145 130 130"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="100" cy="100" r="3" fill={color} />
    </svg>
  );
}

// Striped placeholder image
function PhotoPlaceholder({ ratio = '4/5', label = 'PORTRAIT', tone = 'cream', style = {}, className = '' }) {
  const cls = tone === 'dark' ? 'la-placeholder la-placeholder--dark'
            : tone === 'green' ? 'la-placeholder la-placeholder--green'
            : 'la-placeholder';
  return (
    <div className={`${cls} ${className}`} style={{ aspectRatio: ratio, width: '100%', ...style }}>
      <div className="la-placeholder__inner">
        <span>{label}</span>
      </div>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────

const PROGRAMS = [
  {
    id: 'ankura',
    name: 'Aṅkura',
    sub: 'Sprout · Ages 5–8',
    duration: '60 min · 2× weekly',
    desc: 'First steps in adavus, basic posture, rhythmic syllables (jathi), and gentle storytelling.',
    level: 'Foundation',
  },
  {
    id: 'pallavi',
    name: 'Pallavī',
    sub: 'Bloom · Ages 9–14',
    duration: '90 min · 2× weekly',
    desc: 'Full adavu repertoire, jathiswarams, alarippu, and introduction to abhinaya.',
    level: 'Intermediate',
  },
  {
    id: 'tarangini',
    name: 'Taraṅgiṇī',
    sub: 'Adult Beginners',
    duration: '75 min · 2× weekly',
    desc: 'Foundations adapted for adult bodies — posture, breath, basic items, and bhava.',
    level: 'Adult Foundation',
  },
  {
    id: 'natyamala',
    name: 'Nāṭyamālā',
    sub: 'Advanced',
    duration: '120 min · 3× weekly',
    desc: 'Tarangam on the brass plate, complex jathis, full margam, solo composition, and stage craft.',
    level: 'Advanced',
  },
  {
    id: 'rangapravesha',
    name: 'Raṅgapraveśa',
    sub: 'Debut Track',
    duration: 'By invitation',
    desc: 'Year-long preparation toward the formal solo debut — repertoire, music, costume, and ritual.',
    level: 'Pre-Debut',
  },
  {
    id: 'online',
    name: 'Online Saṅgha',
    sub: 'Diaspora · Worldwide',
    duration: '60 min · weekly',
    desc: 'Live virtual classes for students abroad, with quarterly intensive immersions in Hyderabad.',
    level: 'All Levels',
  },
];

const LOCATIONS = [
  {
    name: 'Mallapur',
    sub: 'Founding studio',
    address: 'Plot 14, IDA Mallapur, near Kamala Nagar Park',
    days: 'Mon · Wed · Fri · Sat',
    hours: '5:30 – 8:30 PM',
    note: 'Brass-floor studio · Mirror wall · Live nattuvangam',
  },
  {
    name: 'Nacharam',
    sub: 'East corridor',
    address: 'Sai Vihar Colony, Nacharam main road',
    days: 'Tue · Thu · Sat',
    hours: '5:00 – 8:00 PM',
    note: 'Children’s foundation focus',
  },
  {
    name: 'Uppal',
    sub: 'Community hall',
    address: 'Uppal Community Centre, Stage Theatre Hall',
    days: 'Mon · Wed · Sun',
    hours: '6:00 – 8:30 PM',
    note: 'Sunday performance rehearsals',
  },
  {
    name: 'Habsiguda',
    sub: 'Adult sangha',
    address: 'Sri Ramalayam Cultural Hall, Habsiguda',
    days: 'Tue · Thu',
    hours: '6:30 – 8:30 PM · 7:00 – 8:30 AM',
    note: 'Adult & morning classes',
  },
];

const SCHEDULE = [
  { day: 'Monday',    blocks: [
    { loc: 'Mallapur',  time: '5:30 PM',  prog: 'Aṅkura',     teacher: 'Indumathi Ganti' },
    { loc: 'Mallapur',  time: '6:45 PM',  prog: 'Pallavī',     teacher: 'Indumathi Ganti' },
    { loc: 'Uppal',     time: '6:00 PM',  prog: 'Taraṅgiṇī',   teacher: 'Sahasra Devi' },
  ]},
  { day: 'Tuesday',   blocks: [
    { loc: 'Nacharam',  time: '5:00 PM',  prog: 'Aṅkura',     teacher: 'Lalita Reddy' },
    { loc: 'Habsiguda', time: '6:30 PM',  prog: 'Taraṅgiṇī',   teacher: 'Indumathi Ganti' },
  ]},
  { day: 'Wednesday', blocks: [
    { loc: 'Mallapur',  time: '5:30 PM',  prog: 'Pallavī',     teacher: 'Indumathi Ganti' },
    { loc: 'Mallapur',  time: '7:30 PM',  prog: 'Nāṭyamālā',  teacher: 'Indumathi Ganti' },
    { loc: 'Uppal',     time: '6:00 PM',  prog: 'Aṅkura',     teacher: 'Sahasra Devi' },
  ]},
  { day: 'Thursday',  blocks: [
    { loc: 'Nacharam',  time: '5:00 PM',  prog: 'Pallavī',     teacher: 'Lalita Reddy' },
    { loc: 'Habsiguda', time: '7:00 AM',  prog: 'Taraṅgiṇī',   teacher: 'Indumathi Ganti' },
    { loc: 'Habsiguda', time: '6:30 PM',  prog: 'Pallavī',     teacher: 'Indumathi Ganti' },
  ]},
  { day: 'Friday',    blocks: [
    { loc: 'Mallapur',  time: '5:30 PM',  prog: 'Aṅkura',     teacher: 'Indumathi Ganti' },
    { loc: 'Mallapur',  time: '7:00 PM',  prog: 'Nāṭyamālā',  teacher: 'Indumathi Ganti' },
  ]},
  { day: 'Saturday',  blocks: [
    { loc: 'Mallapur',  time: '8:00 AM',  prog: 'Raṅgapraveśa', teacher: 'Indumathi Ganti' },
    { loc: 'Mallapur',  time: '4:00 PM',  prog: 'Pallavī',     teacher: 'Indumathi Ganti' },
    { loc: 'Nacharam',  time: '4:00 PM',  prog: 'Aṅkura',     teacher: 'Lalita Reddy' },
    { loc: 'Online',    time: '7:30 PM',  prog: 'Online Saṅgha', teacher: 'Indumathi Ganti' },
  ]},
  { day: 'Sunday',    blocks: [
    { loc: 'Uppal',     time: '6:00 PM',  prog: 'Performance Rehearsal', teacher: 'Indumathi Ganti' },
  ]},
];

const GALLERY = [
  { id: 'g1', label: 'TARANGAM ON BRASS PLATE',  ratio: '3/4',  tone: 'dark' },
  { id: 'g2', label: 'JATHISWARAM REHEARSAL',    ratio: '1/1',  tone: 'cream' },
  { id: 'g3', label: 'ARANGETRAM · 2024',        ratio: '4/5',  tone: 'green' },
  { id: 'g4', label: 'GURU & SISHYA',            ratio: '3/4',  tone: 'cream' },
  { id: 'g5', label: 'AHALYĀ · ABHINAYA',         ratio: '4/3',  tone: 'dark' },
  { id: 'g6', label: 'TEMPLE OFFERING · MADRAS', ratio: '1/1',  tone: 'green' },
  { id: 'g7', label: 'COSTUME & ABHARANA',       ratio: '4/5',  tone: 'cream' },
  { id: 'g8', label: 'TIRUPATI BRAHMOTSAVAM',    ratio: '3/4',  tone: 'dark' },
];

// ─── Lightbox for gallery ──────────────────────────────────────────────────
function Lightbox({ open, items, index, setIndex, onClose }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % items.length);
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + items.length) % items.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, items.length, onClose, setIndex]);

  if (!open) return null;
  const item = items[index];
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(10, 8, 6, 0.92)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 48,
        backdropFilter: 'blur(6px)',
        animation: 'la-fade 240ms ease',
      }}
    >
      <button
        onClick={(e) => { e.stopPropagation(); setIndex((i) => (i - 1 + items.length) % items.length); }}
        style={{ position: 'absolute', left: 24, top: '50%', color: 'var(--gold-300)', fontSize: 32, padding: 16 }}
        aria-label="Previous"
      >‹</button>
      <button
        onClick={(e) => { e.stopPropagation(); setIndex((i) => (i + 1) % items.length); }}
        style={{ position: 'absolute', right: 24, top: '50%', color: 'var(--gold-300)', fontSize: 32, padding: 16 }}
        aria-label="Next"
      >›</button>
      <button
        onClick={onClose}
        style={{ position: 'absolute', right: 24, top: 24, color: 'var(--gold-300)', fontSize: 14, letterSpacing: '.2em' }}
      >CLOSE ✕</button>
      <div onClick={(e) => e.stopPropagation()} style={{ width: 'min(70%, 720px)' }}>
        <PhotoPlaceholder ratio={item.ratio} label={item.label} tone={item.tone} />
        <div style={{
          marginTop: 16, display: 'flex', justifyContent: 'space-between',
          color: 'var(--gold-300)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.18em'
        }}>
          <span>{item.label}</span>
          <span>{String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Enrollment form ──────────────────────────────────────────────────────
function EnrollmentForm({ tone = 'cream', programs = PROGRAMS, locations = LOCATIONS }) {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({
    name: '', age: '', email: '', phone: '',
    program: programs[0].id, location: locations[0].name,
    experience: 'none', message: '',
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [errs, setErrs] = React.useState({});

  const dark = tone === 'dark';
  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const validate = (s) => {
    const e = {};
    if (s === 0) {
      if (!data.name.trim()) e.name = 'Required';
      if (!data.age || isNaN(+data.age) || +data.age < 4 || +data.age > 99) e.age = 'Enter age 4–99';
    }
    if (s === 1) {
      if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email needed';
      if (!data.phone.replace(/\D/g, '').match(/^\d{10}$/)) e.phone = '10-digit phone';
    }
    return e;
  };

  const next = () => {
    const e = validate(step);
    setErrs(e);
    if (Object.keys(e).length === 0) setStep((s) => s + 1);
  };
  const submit = (ev) => {
    ev.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 0',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${dark ? 'rgba(230,192,103,0.3)' : 'rgba(26,20,16,0.2)'}`,
    color: dark ? 'var(--cream-100)' : 'var(--ink-900)',
    fontFamily: 'var(--serif)',
    fontSize: 20,
    outline: 'none',
  };
  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--sans)',
    fontSize: 11,
    letterSpacing: '.24em',
    textTransform: 'uppercase',
    color: dark ? 'var(--gold-300)' : 'var(--ink-500)',
    marginBottom: 4,
  };
  const errStyle = { fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--red-500)', marginTop: 6, letterSpacing: '.1em' };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '48px 24px' }}>
        <LotusMark size={56} color={dark ? 'var(--gold-500)' : 'var(--red-700)'} />
        <h3 style={{
          fontFamily: 'var(--display)', fontSize: 36, marginTop: 24,
          color: dark ? 'var(--cream-100)' : 'var(--ink-900)',
        }}>Praṇāmaḥ, {data.name.split(' ')[0] || 'seeker'}.</h3>
        <p style={{
          fontFamily: 'var(--serif)', fontSize: 19, marginTop: 16, lineHeight: 1.5,
          color: dark ? 'var(--cream-200)' : 'var(--ink-700)',
        }}>
          Your enquiry has reached us. Indumathi-garu will personally reply within<br/>
          two days to invite you for an audition class at <em>{data.location}</em>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit}>
      {/* Stepper */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 32, alignItems: 'center' }}>
        {['Seeker', 'Contact', 'Path'].map((t, i) => (
          <React.Fragment key={t}>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em',
              color: i === step ? (dark ? 'var(--gold-300)' : 'var(--red-700)') : (dark ? 'var(--cream-400)' : 'var(--ink-400)'),
              fontWeight: i === step ? 700 : 400,
              textTransform: 'uppercase',
            }}>
              0{i+1} · {t}
            </div>
            {i < 2 && <div style={{
              flex: 1, height: 1,
              background: dark ? 'rgba(230,192,103,0.3)' : 'rgba(26,20,16,0.18)',
            }}/>}
          </React.Fragment>
        ))}
      </div>

      {step === 0 && (
        <div style={{ display: 'grid', gap: 28 }}>
          <div>
            <label style={labelStyle}>Student name</label>
            <input style={inputStyle} value={data.name} onChange={(e) => set('name', e.target.value)} placeholder="As you wish to be called" />
            {errs.name && <div style={errStyle}>{errs.name}</div>}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div>
              <label style={labelStyle}>Age</label>
              <input style={inputStyle} value={data.age} onChange={(e) => set('age', e.target.value)} placeholder="—" />
              {errs.age && <div style={errStyle}>{errs.age}</div>}
            </div>
            <div>
              <label style={labelStyle}>Prior experience</label>
              <select style={{ ...inputStyle, padding: '14px 0' }} value={data.experience} onChange={(e) => set('experience', e.target.value)}>
                <option value="none">None — beginner</option>
                <option value="some">Some — under 2 years</option>
                <option value="years">Trained — 2+ years</option>
                <option value="other">Other Indian classical form</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {step === 1 && (
        <div style={{ display: 'grid', gap: 28 }}>
          <div>
            <label style={labelStyle}>Email</label>
            <input style={inputStyle} value={data.email} onChange={(e) => set('email', e.target.value)} placeholder="you@home.in" />
            {errs.email && <div style={errStyle}>{errs.email}</div>}
          </div>
          <div>
            <label style={labelStyle}>Phone (10-digit)</label>
            <input style={inputStyle} value={data.phone} onChange={(e) => set('phone', e.target.value)} placeholder="98xxx xxxxx" />
            {errs.phone && <div style={errStyle}>{errs.phone}</div>}
          </div>
        </div>
      )}

      {step === 2 && (
        <div style={{ display: 'grid', gap: 28 }}>
          <div>
            <label style={labelStyle}>Programme of interest</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
              {programs.map((p) => (
                <button
                  key={p.id} type="button"
                  onClick={() => set('program', p.id)}
                  style={{
                    padding: '8px 14px',
                    fontFamily: 'var(--serif)', fontSize: 16, fontStyle: 'italic',
                    border: `1px solid ${dark ? 'rgba(230,192,103,0.4)' : 'rgba(122,30,30,0.3)'}`,
                    background: data.program === p.id ? (dark ? 'var(--gold-500)' : 'var(--red-700)') : 'transparent',
                    color: data.program === p.id ? (dark ? 'var(--ink-900)' : 'var(--cream-100)') : (dark ? 'var(--cream-100)' : 'var(--ink-900)'),
                    transition: 'all 200ms',
                  }}
                >{p.name}</button>
              ))}
            </div>
          </div>
          <div>
            <label style={labelStyle}>Preferred studio</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
              {locations.map((l) => (
                <button
                  key={l.name} type="button"
                  onClick={() => set('location', l.name)}
                  style={{
                    padding: '8px 14px',
                    fontFamily: 'var(--sans)', fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase',
                    border: `1px solid ${dark ? 'rgba(230,192,103,0.4)' : 'rgba(26,20,16,0.2)'}`,
                    background: data.location === l.name ? (dark ? 'var(--cream-100)' : 'var(--ink-900)') : 'transparent',
                    color: data.location === l.name ? (dark ? 'var(--ink-900)' : 'var(--cream-100)') : (dark ? 'var(--cream-100)' : 'var(--ink-900)'),
                  }}
                >{l.name}</button>
              ))}
            </div>
          </div>
          <div>
            <label style={labelStyle}>A note to the guru (optional)</label>
            <textarea
              style={{ ...inputStyle, fontSize: 16, padding: '12px 0', resize: 'vertical', minHeight: 60 }}
              value={data.message}
              onChange={(e) => set('message', e.target.value)}
              placeholder="What draws you to Kuchipudi?"
            />
          </div>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 36 }}>
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          style={{
            fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase',
            color: step === 0 ? (dark ? 'var(--cream-400)' : 'var(--ink-400)') : (dark ? 'var(--gold-300)' : 'var(--ink-500)'),
            opacity: step === 0 ? 0.4 : 1,
          }}
        >‹ Back</button>
        {step < 2 ? (
          <button type="button" onClick={next} style={{
            padding: '14px 28px',
            background: dark ? 'var(--gold-500)' : 'var(--red-700)',
            color: dark ? 'var(--ink-900)' : 'var(--cream-100)',
            fontFamily: 'var(--sans)', fontSize: 12, letterSpacing: '.24em', textTransform: 'uppercase',
            fontWeight: 600,
          }}>Continue →</button>
        ) : (
          <button type="submit" style={{
            padding: '14px 28px',
            background: dark ? 'var(--gold-500)' : 'var(--red-700)',
            color: dark ? 'var(--ink-900)' : 'var(--cream-100)',
            fontFamily: 'var(--sans)', fontSize: 12, letterSpacing: '.24em', textTransform: 'uppercase',
            fontWeight: 600,
          }}>Submit Praṇāmaḥ</button>
        )}
      </div>
    </form>
  );
}

// ─── Schedule Explorer ────────────────────────────────────────────────────
function ScheduleExplorer({ tone = 'cream' }) {
  const [loc, setLoc] = React.useState('All');
  const [prog, setProg] = React.useState('All');

  const dark = tone === 'dark';
  const locOptions = ['All', ...LOCATIONS.map((l) => l.name), 'Online'];
  const progOptions = ['All', ...PROGRAMS.map((p) => p.name)];

  const filtered = SCHEDULE.map((d) => ({
    ...d,
    blocks: d.blocks.filter((b) =>
      (loc === 'All' || b.loc === loc) &&
      (prog === 'All' || b.prog === prog)
    ),
  }));

  const colors = dark
    ? { bg: 'transparent', text: 'var(--cream-100)', dim: 'var(--cream-400)', accent: 'var(--gold-300)', line: 'rgba(230,192,103,0.2)' }
    : { bg: 'transparent', text: 'var(--ink-900)',  dim: 'var(--ink-500)',   accent: 'var(--red-700)',  line: 'rgba(26,20,16,0.12)' };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginBottom: 24 }}>
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', color: colors.dim, marginBottom: 8 }}>STUDIO</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {locOptions.map((l) => (
              <button key={l} onClick={() => setLoc(l)} style={{
                padding: '6px 12px',
                fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase',
                border: `1px solid ${colors.line}`,
                background: loc === l ? colors.accent : 'transparent',
                color: loc === l ? (dark ? 'var(--ink-900)' : 'var(--cream-100)') : colors.text,
                transition: 'all 180ms',
              }}>{l}</button>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', color: colors.dim, marginBottom: 8 }}>PROGRAMME</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {progOptions.map((p) => (
              <button key={p} onClick={() => setProg(p)} style={{
                padding: '6px 12px',
                fontFamily: 'var(--serif)', fontSize: 14, fontStyle: p === 'All' ? 'normal' : 'italic',
                border: `1px solid ${colors.line}`,
                background: prog === p ? colors.text : 'transparent',
                color: prog === p ? (dark ? 'var(--ink-900)' : 'var(--cream-100)') : colors.text,
                transition: 'all 180ms',
              }}>{p}</button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ borderTop: `1px solid ${colors.line}` }}>
        {filtered.map((d) => (
          <div key={d.day} style={{
            display: 'grid', gridTemplateColumns: '160px 1fr',
            borderBottom: `1px solid ${colors.line}`,
            padding: '20px 0',
            opacity: d.blocks.length === 0 ? 0.35 : 1,
          }}>
            <div style={{
              fontFamily: 'var(--display)', fontSize: 22, color: colors.text,
            }}>
              {d.day}
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', color: colors.dim, marginTop: 4 }}>
                {String(d.blocks.length).padStart(2, '0')} {d.blocks.length === 1 ? 'CLASS' : 'CLASSES'}
              </div>
            </div>
            <div style={{ display: 'grid', gap: 10 }}>
              {d.blocks.length === 0 ? (
                <div style={{ fontFamily: 'var(--serif)', fontSize: 16, fontStyle: 'italic', color: colors.dim }}>
                  No classes match these filters.
                </div>
              ) : d.blocks.map((b, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '90px 1fr 140px 140px',
                  alignItems: 'baseline', gap: 16,
                  padding: '10px 12px',
                  background: dark ? 'rgba(230,192,103,0.04)' : 'rgba(122,30,30,0.04)',
                  border: `1px solid ${colors.line}`,
                  transition: 'background 180ms',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = dark ? 'rgba(230,192,103,0.12)' : 'rgba(122,30,30,0.10)'}
                onMouseLeave={(e) => e.currentTarget.style.background = dark ? 'rgba(230,192,103,0.04)' : 'rgba(122,30,30,0.04)'}
                >
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: colors.accent, letterSpacing: '.1em' }}>{b.time}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 19, fontStyle: 'italic', color: colors.text }}>{b.prog}</div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: colors.dim }}>{b.loc}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 14, color: colors.dim, textAlign: 'right' }}>{b.teacher}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Cinematic intro overlay ──────────────────────────────────────────────
function IntroVeil({ artboardId, palette = 'cream' }) {
  const [phase, setPhase] = React.useState('opening'); // opening → title → fade → done
  React.useEffect(() => {
    const t1 = setTimeout(() => setPhase('title'), 700);
    const t2 = setTimeout(() => setPhase('fade'), 2600);
    const t3 = setTimeout(() => setPhase('done'), 3500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [artboardId]);

  if (phase === 'done') return null;

  const dark = palette === 'dark';
  const bg = dark ? '#0b0908' : 'var(--cream-50)';
  const ink = dark ? 'var(--gold-300)' : 'var(--red-700)';
  const txt = dark ? 'var(--cream-100)' : 'var(--ink-900)';

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 50, background: bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column',
      opacity: phase === 'fade' ? 0 : 1,
      transition: 'opacity 900ms ease',
      pointerEvents: phase === 'fade' ? 'none' : 'auto',
    }}>
      <div style={{
        transform: phase === 'opening' ? 'scale(0.6)' : 'scale(1)',
        opacity: phase === 'opening' ? 0 : 1,
        transition: 'all 1100ms cubic-bezier(.2,.7,.2,1)',
      }}>
        <LotusMark size={120} color={ink} strokeWidth={1} />
      </div>
      <div style={{
        marginTop: 28,
        opacity: phase === 'opening' ? 0 : 1,
        transform: phase === 'opening' ? 'translateY(16px)' : 'translateY(0)',
        transition: 'all 900ms cubic-bezier(.2,.7,.2,1) 600ms',
        textAlign: 'center',
      }}>
        <div style={{ fontFamily: 'var(--display)', fontSize: 56, color: txt, letterSpacing: '0.04em' }}>Lasyāñjali</div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.4em', color: ink, marginTop: 12, textTransform: 'uppercase' }}>
          An Offering of Grace
        </div>
      </div>
    </div>
  );
}

// Export
Object.assign(window, {
  useReveal, Reveal,
  LotusMark, MotifRow, ArchFrame, ScriptGlyph, PhotoPlaceholder,
  Lightbox, EnrollmentForm, ScheduleExplorer, IntroVeil,
  PROGRAMS, LOCATIONS, SCHEDULE, GALLERY,
});
