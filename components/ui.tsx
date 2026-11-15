import type { LinkItem } from "@/data/site";

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
      className={`inline-block h-4 w-4 shrink-0 translate-y-px transition-transform motion-reduce:transition-none ${className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
      />
    </svg>
  );
}

export function SocialIcon({ name }: { name: "github" | "linkedin" }) {
  const paths = {
    github:
      "M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.300 5 18.300 5c.6 1.700.2 2.900.1 3.200.8.800 1.200 1.900 1.200 3.200 0 4.600-2.800 5.600-5.500 5.900.4.400.800 1.100.800 2.200v3.300c0 .300.200.700.800.600A12 12 0 0 0 12 .5Z",
    linkedin:
      "M20.45 20.45h-3.55v-5.570c0-1.330-.030-3.040-1.850-3.040-1.850 0-2.140 1.450-2.140 2.940v5.670H9.350V9h3.410v1.560h.050c.480-.900 1.640-1.850 3.370-1.850 3.600 0 4.270 2.370 4.270 5.460v6.280ZM5.340 7.430a2.060 2.060 0 1 1 0-4.130 2.060 2.060 0 0 1 0 4.130ZM7.120 20.450H3.560V9h3.560v11.450ZM22.220 0H1.770C.790 0 0 .770 0 1.730v20.540C0 23.230.790 24 1.770 24h20.450C23.200 24 24 23.230 24 22.270V1.730C24 .770 23.200 0 22.220 0Z",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
      aria-hidden
    >
      <path d={paths[name]} />
    </svg>
  );
}

export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
      {items.map((t) => (
        <li key={t} className="mr-1.5 mt-2">
          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            {t}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-normal marker:text-slate-600">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export function SubLinks({ items }: { items: LinkItem[] }) {
  return (
    <ul className="mt-2 flex flex-wrap" aria-label="Related links">
      {items.map((l) => (
        <li key={l.label} className="mr-4">
          <a
            className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
            href={l.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mr-1 h-3 w-3"
              aria-hidden
            >
              <path d="M12.23 4.23a3.25 3.25 0 0 1 4.6 4.6l-2.5 2.5a3.25 3.25 0 0 1-4.6 0 .75.75 0 0 1 1.060-1.060 1.750 1.750 0 0 0 2.480 0l2.500-2.500a1.750 1.750 0 0 0-2.480-2.480l-1 1a.750.750 0 0 1-1.060-1.060l1-1Z" />
              <path d="M7.770 15.770a3.250 3.250 0 0 1-4.600-4.600l2.500-2.500a3.250 3.250 0 0 1 4.600 0 .750.750 0 0 1-1.060 1.060 1.750 1.750 0 0 0-2.480 0l-2.500 2.500a1.750 1.750 0 0 0 2.480 2.480l1-1a.750.750 0 1 1 1.060 1.060l-1 1Z" />
            </svg>
            <span>{l.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

// Row wrapper: on desktop the hovered row gets a raised panel and its
// siblings dim (the parent <ol> must carry the `group/list` class).
export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 ${className}`}
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
      {children}
    </div>
  );
}

// Title link whose hit area stretches over the whole card.
export function CardLink({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  // No link set: plain title, same typography.
  if (!href) {
    return (
      <span className="text-base font-medium leading-tight text-slate-200">
        {children}
      </span>
    );
  }
  return (
    <a
      className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
      <span>
        {children}
        <ArrowUpRight className="ml-1 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1" />
      </span>
    </a>
  );
}

// Standalone "see more" link under a section.
export function MoreLink({
  href,
  label,
  download,
}: {
  href: string;
  label: string;
  download?: string; // file name to save as; makes the link a download
}) {
  return (
    <div className="mt-12">
      <a
        className="group inline-flex items-center font-semibold leading-tight text-slate-200"
        href={href}
        download={download}
      >
        <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
          {label}
        </span>
        <ArrowUpRight className="ml-1 group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1" />
      </a>
    </div>
  );
}

// Image slot; renders a neutral placeholder until an image path is set.
export function Thumb({ src, className = "" }: { src?: string; className?: string }) {
  const base = `aspect-video w-full rounded border-2 border-slate-200/10 object-cover transition group-hover:border-slate-200/30 ${className}`;
  return src ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" loading="lazy" className={base} />
  ) : (
    <div aria-hidden className={`${base} bg-slate-800`} />
  );
}

// Section shell: heading is a sticky blurred bar on mobile, hidden on desktop
// (where the left nav names the section instead).
export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-label={title}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
