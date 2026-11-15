import Nav from "@/components/Nav";
import Spotlight from "@/components/Spotlight";
import {
  Bullets,
  Card,
  CardLink,
  MoreLink,
  Section,
  SocialIcon,
  SubLinks,
  Tags,
  Thumb,
} from "@/components/ui";
import { site } from "@/data/site";

// Turns "[label](url)" inside a paragraph into an inline link.
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        return m ? (
          <a
            key={i}
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href={m[2]}
            target="_blank"
            rel="noreferrer noopener"
          >
            {m[1]}
          </a>
        ) : (
          part
        );
      })}
    </>
  );
}

export default function Home() {
  return (
    <div className="relative">
      <Spotlight />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">{site.name}</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                {site.role}
              </h2>
              <p className="mt-4 max-w-xs leading-normal">{site.tagline}</p>
              <Nav items={site.nav} />
            </div>
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
              {site.socials.map((s) => (
                <li key={s.label} className="mr-5 shrink-0 text-xs">
                  <a
                    className="block hover:text-slate-200"
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="sr-only">{s.label}</span>
                    <SocialIcon name={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </header>

          <main className="pt-24 lg:w-[52%] lg:py-24">
            <Section id="about" title="About">
              {site.about.map((p, i) => (
                <p key={i} className="mb-4">
                  <RichText text={p} />
                </p>
              ))}
            </Section>

            <Section id="experience" title="Experience">
              <ol className="group/list">
                {site.experience.map((job) => (
                  <li key={job.period + job.company} className="mb-12">
                    <Card>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                        {job.period}
                        {job.image && (
                          <Thumb src={job.image} className="mt-3 hidden sm:block" />
                        )}
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <CardLink href={job.href}>
                              {job.title} · {job.company}
                            </CardLink>
                          </div>
                          {job.previousTitles?.map((t) => (
                            <div key={t} className="text-slate-500">
                              {t}
                            </div>
                          ))}
                        </h3>
                        <Bullets items={job.description} />
                        {job.links && <SubLinks items={job.links} />}
                        <Tags items={job.tech} />
                      </div>
                    </Card>
                  </li>
                ))}
              </ol>
              <MoreLink {...site.resume} />
            </Section>

            <Section id="projects" title="Projects">
              <ul className="group/list">
                {site.projects.map((p) => (
                  <li key={p.title} className="mb-12">
                    <Card className="gap-4">
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <CardLink href={p.href}>{p.title}</CardLink>
                        </h3>
                        <Bullets items={p.description} />
                        {p.links && <SubLinks items={p.links} />}
                        {p.tech && <Tags items={p.tech} />}
                      </div>
                      <Thumb
                        src={p.image}
                        className="z-10 sm:order-1 sm:col-span-2 sm:translate-y-1"
                      />
                    </Card>
                  </li>
                ))}
              </ul>
              <MoreLink {...site.projectArchive} />
            </Section>

            {site.writing.length > 0 && (
            <Section id="writing" title="Writing">
              <ul className="group/list">
                {site.writing.map((post) => (
                  <li key={post.title} className="mb-12">
                    <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                      <Thumb src={post.image} className="z-10 col-span-2" />
                      <div className="z-10 col-span-6">
                        <p className="-mt-1 text-sm font-semibold leading-6">
                          {post.year}
                        </p>
                        <h3 className="-mt-1">
                          <CardLink href={post.href}>{post.title}</CardLink>
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Section>
            )}

            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <p>{site.footer}</p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
