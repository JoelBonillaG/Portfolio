import { RevealTitle } from '@/components/ui/RevealTitle.jsx'

/**
 * Big display title (word-by-word reveal, accent in gold italic), optional
 * intro/extras, and an optional 3D object that floats beside it.
 */
const SPINS = [
  ['-18deg', '14deg'],
  ['12deg', '-16deg'],
  ['-8deg', '24deg'],
  ['20deg', '-10deg'],
  ['-14deg', '10deg'],
]
/** Each object turns its own way while its section crosses the viewport. */
function spinFor(src = '') {
  const [from, to] = SPINS[[...src].reduce((a, ch) => a + ch.charCodeAt(0), 0) % SPINS.length]
  return { '--spin-from': from, '--spin-to': to }
}

export function SectionHeader({ title, intro, object, children }) {
  return (
    <div className="flex items-center justify-between gap-6">
      <div className="min-w-0">
        <RevealTitle text={title} className="text-[clamp(2.6rem,5.5vw,4.4rem)] leading-[1] tracking-[-0.025em]" />
        {intro && <p className="mt-4 max-w-[620px] text-lg text-muted">{intro}</p>}
        {children}
      </div>
      {object && (
        <img
          src={object}
          alt=""
          aria-hidden="true"
          width={160}
          height={160}
          style={spinFor(object)}
        className="float-object scroll-object hidden h-auto w-28 shrink-0 drop-shadow-[0_24px_26px_rgba(0,0,0,.45)] sm:block lg:w-36"
        />
      )}
    </div>
  )
}
