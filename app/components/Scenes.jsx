// Full-bleed photographic backdrops. Each fills its nearest positioned
// ancestor (the hero section or a .scene-card) and carries the overlay that
// keeps the text on top of it readable.
// Source files live in public/images/ — replace a file there to change a scene.
import Image, { getImageProps } from 'next/image';
import heroWide from '../../public/images/hero.webp';
import heroTall from '../../public/images/hero-mobile.webp';
import valley from '../../public/images/valley.webp';
import constellation from '../../public/images/constellation.webp';
import horizon from '../../public/images/horizon.webp';

function Shade({ style }) {
  return <div className="pointer-events-none absolute inset-0" style={style} aria-hidden="true" />;
}

// ── Hero: a figure on a hilltop, gold sparks rising into a storm cloud ───────
// Art-directed: a portrait crop below 768px, so the figure and plume stay in
// frame on phones instead of being cropped out of the wide image.
export function HeroScene() {
  const common = { alt: '', sizes: '100vw', placeholder: 'blur', fetchPriority: 'high' };
  const { props: { srcSet: tall } } = getImageProps({ ...common, src: heroTall });
  const { props: { srcSet: wide, ...img } } = getImageProps({ ...common, src: heroWide });

  return (
    <>
      <picture>
        <source media="(max-width: 767px)" srcSet={tall} />
        <source media="(min-width: 768px)" srcSet={wide} />
        <img
          {...img}
          loading="eager"
          className="scene object-cover"
          style={{ ...img.style, objectPosition: 'center bottom', width: '100%', height: '100%' }}
        />
      </picture>
      <Shade
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 32%, rgba(0,0,0,0) 60%, rgba(0,0,0,0) 80%, #000 100%)',
        }}
      />
    </>
  );
}

// ── Valley: a lit path through a flower field under the Milky Way ───────────
export function ValleyScene() {
  return (
    <>
      <Image
        src={valley}
        alt=""
        fill
        placeholder="blur"
        sizes="(max-width: 1248px) 100vw, 1200px"
        className="object-cover"
        style={{ objectPosition: 'center 60%' }}
      />
      <Shade style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)' }} />
    </>
  );
}

// ── Constellation: a gold network of points against deep space ───────────────
export function ConstellationScene() {
  return (
    <Image
      src={constellation}
      alt=""
      fill
      placeholder="blur"
      sizes="(max-width: 1024px) 100vw, 560px"
      className="object-cover"
    />
  );
}

// ── Horizon: dark hills with a warm glow, for page heroes and CTAs ──────────
// `fadeBottom` blends the image into the page when it is a full-width hero
// rather than a rounded card.
export function HorizonScene({ fadeBottom = false }) {
  return (
    <>
      <Image
        src={horizon}
        alt=""
        fill
        placeholder="blur"
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: 'center bottom' }}
      />
      <Shade style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0) 70%)' }} />
      {fadeBottom && (
        <Shade style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 80%, #000 100%)' }} />
      )}
    </>
  );
}
