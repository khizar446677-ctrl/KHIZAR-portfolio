import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Check, ChevronRight, Download, Mail, MapPin, Moon, SunMedium, Phone, ArrowUpRight, Star, Instagram, Twitter, Facebook, Linkedin, Search } from "lucide-react";

/**
 * Pro Graphics Designer Portfolio
 * Single-file React component using TailwindCSS + shadcn/ui + Framer Motion + lucide-react
 *
 * How to use:
 * - Drop this into your React project and set it as the default route/page.
 * - Tailwind and shadcn/ui should already be configured in your stack.
 * - Replace placeholder text/images/links with your real content.
 */

const PROJECTS = [
  {
    id: "p1",
    title: "E-commerce Brand Identity",
    category: "Branding",
    tags: ["Logo", "Guidelines", "Stationery"],
    cover: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop",
    brief: "Minimalist identity system and packaging for a direct-to-consumer brand.",
    metrics: { result: "+41% CTR", platform: "Shopify" },
    palette: ["#111827", "#F59E0B", "#F3F4F6"],
  },
  {
    id: "p2",
    title: "Mobile App UI Kit",
    category: "UI/UX",
    tags: ["Figma", "Design System", "Components"],
    cover: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    brief: "Scalable UI kit with 120+ components and 8 themes.",
    metrics: { result: "-36% dev handoff time", platform: "iOS/Android" },
    palette: ["#0EA5E9", "#111827", "#E5E7EB"],
  },
  {
    id: "p3",
    title: "Campaign Key Visuals",
    category: "Marketing",
    tags: ["Social", "Ads", "Motion"],
    cover: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop",
    brief: "High-converting KV set for seasonal sale across 6 channels.",
    metrics: { result: "+2.1x ROAS", platform: "Meta/Google" },
    palette: ["#EF4444", "#111827", "#F5F5F5"],
  },
  {
    id: "p4",
    title: "Editorial Layout Series",
    category: "Print",
    tags: ["Magazine", "Typography", "Grid"],
    cover: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    brief: "Modern editorial system with responsive grid and rhythm.",
    metrics: { result: "+78% read time", platform: "InDesign" },
    palette: ["#111827", "#111827", "#FFFFFF"],
  },
  {
    id: "p5",
    title: "3D Product Renders",
    category: "CGI",
    tags: ["3D", "Packaging", "Lighting"],
    cover: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
    brief: "Photo-real renders for new beverage line with 6 flavors.",
    metrics: { result: "+63% PDP add-to-cart", platform: "Web" },
    palette: ["#22C55E", "#111827", "#DCFCE7"],
  },
];

const SERVICES = [
  { title: "Brand Identity", desc: "Logos, style guides, stationery, packaging.", icon: <Star className="h-5 w-5" /> },
  { title: "UI/UX Design", desc: "Websites, dashboards, mobile apps, design systems.", icon: <ChevronRight className="h-5 w-5" /> },
  { title: "Marketing Design", desc: "Social ads, landing pages, motion graphics.", icon: <ArrowUpRight className="h-5 w-5" /> },
  { title: "Art Direction", desc: "Creative strategy, campaigns, photography, video.", icon: <Check className="h-5 w-5" /> },
];

const TESTIMONIALS = [
  {
    name: "Ayesha Ahmed",
    role: "Founder, Lumen Co.",
    quote: "Delivered a clean identity and launch kit that made fundraising effortless.",
  },
  {
    name: "Daniel Li",
    role: "PM, Finlytics",
    quote: "The UI kit cut our dev time drastically. Handoff was the smoothest we've had.",
  },
  { name: "Sana Q.", role: "Marketing Lead, Viora", quote: "Our ROAS doubled across channels. Creative iterations were spot on." },
];

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

function useThemeToggle() {
  const [dark, setDark] = useState(true);
  React.useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);
  return { dark, setDark };
}

function ProjectCard({ p, onOpen }) {
  return (
    <motion.div variants={ITEM_VARIANTS}>
      <Card className="overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow">
        <div className="relative">
          <img src={p.cover} alt={p.title} className="h-56 w-full object-cover" />
          <div className="absolute right-3 top-3 flex gap-1">
            {p.palette.map((c, i) => (
              <span key={i} className="h-4 w-4 rounded-full border" style={{ background: c }} />
            ))}
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-lg flex items-center justify-between">
            <span>{p.title}</span>
            <Button size="icon" variant="ghost" onClick={() => onOpen(p)} aria-label="Open case study">
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="mb-2 text-sm text-muted-foreground">{p.brief}</div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{p.category}</Badge>
            {p.tags.map((t) => (
              <Badge key={t} variant="outline">{t}</Badge>
            ))}
          </div>
          <div className="mt-3 text-xs text-muted-foreground">Outcome: {p.metrics.result} · Platform: {p.metrics.platform}</div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ProGraphicsPortfolio() {
  const { dark, setDark } = useThemeToggle();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Newest");
  const [active, setActive] = useState(null);

  const filtered = useMemo(() => {
    let rows = PROJECTS.filter((p) => {
      const q = query.toLowerCase();
      const matchQ = !q || p.title.toLowerCase().includes(q) || p.tags.join(" ").toLowerCase().includes(q);
      const matchC = category === "All" || p.category === category;
      return matchQ && matchC;
    });
    if (sort === "A–Z") rows.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "Z–A") rows.sort((a, b) => b.title.localeCompare(a.title));
    return rows;
  }, [query, category, sort]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-primary/10 grid place-items-center font-bold">GD</div>
            <div className="leading-tight">
              <div className="font-semibold">Khizar Malik</div>
              <div className="text-xs text-muted-foreground">Senior Graphic & UI Designer</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={() => setDark(!dark)} aria-label="Toggle theme">
                    {dark ? <SunMedium className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Toggle theme</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button variant="outline" className="gap-2" asChild>
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4" /> Resume
              </a>
            </Button>
            <Button className="gap-2" asChild>
              <a href="#contact"><Mail className="h-4 w-4" /> Hire Me</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge className="mb-4" variant="secondary">Available for freelance · Sept 2025</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              I design clean brands, conversion‑focused creatives, and delightful UI.
            </h1>
            <p className="mt-4 text-muted-foreground">
              7+ years crafting identities, campaigns, and product design for startups and global teams. I merge
              aesthetics with measurable outcomes.
            </p>
            <div className="mt-6 flex gap-3">
              <Button asChild className="gap-2"><a href="#work"><ArrowUpRight className="h-4 w-4" />See Work</a></Button>
              <Button variant="outline" asChild className="gap-2"><a href="#services"><ChevronRight className="h-4 w-4" />Services</a></Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> +92 •••• ••••••</span>
              <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> hello@yourstudio.com</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Lahore, PK</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <Card className="rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1529429612777-90ee3f1c2d99?q=80&w=1200&auto=format&fit=crop" alt="Showreel" className="h-80 w-full object-cover" />
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground">Showreel • 60s</div>
                <div className="mt-1 font-medium">Selected work across branding, UI, and growth design.</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Separator />

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold">Services</h2>
        <p className="text-muted-foreground mt-2">Clear deliverables, transparent scope, measurable outcomes.</p>
        <div className="grid md:grid-cols-4 gap-4 mt-6">
          {SERVICES.map((s) => (
            <Card key={s.title} className="rounded-2xl">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">{s.title}</CardTitle>
                <div className="text-primary">{s.icon}</div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{s.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Work */}
      <section id="work" className="mx-auto max-w-7xl px-4 py-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Selected Work</h2>
            <p className="text-muted-foreground mt-2">Case studies that drove outcomes, not just dribbles.</p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search projects…" className="pl-9 w-64" />
            </div>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-40"><SelectValue placeholder="Category" /></SelectTrigger>
              <SelectContent>
                {['All', 'Branding', 'UI/UX', 'Marketing', 'Print', 'CGI'].map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-32"><SelectValue placeholder="Sort" /></SelectTrigger>
              <SelectContent>
                {['Newest', 'A–Z', 'Z–A'].map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-3 gap-5 mt-8" initial="hidden" animate="show" transition={{ staggerChildren: 0.05 }}>
          <AnimatePresence>
            {filtered.map((p) => (
              <ProjectCard key={p.id} p={p} onOpen={setActive} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Case Study Dialog */}
        <Dialog open={!!active} onOpenChange={() => setActive(null)}>
          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle>{active?.title}</DialogTitle>
              <DialogDescription className="flex flex-wrap gap-2 mt-2">
                <Badge variant="secondary">{active?.category}</Badge>
                {active?.tags?.map((t) => (
                  <Badge key={t} variant="outline">{t}</Badge>
                ))}
              </DialogDescription>
            </DialogHeader>
            {active && (
              <div className="space-y-4">
                <img src={active.cover} alt={active.title} className="w-full h-72 object-cover rounded-xl" />
                <p className="text-sm text-muted-foreground">{active.brief} Detailed write‑up goes here. Outline problem → approach → iterations → impact. Include process frames, grids, color studies, and motion.</p>
                <div className="text-xs text-muted-foreground">Outcome: {active.metrics.result} · Platform: {active.metrics.platform}</div>
                <div className="flex justify-end">
                  <Button className="gap-2" asChild>
                    <a href="#contact"><Mail className="h-4 w-4" />Start a project</a>
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </section>

      <Separator />

      {/* Process & Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Process</h2>
          <Tabs defaultValue="1" className="mt-4">
            <TabsList className="grid grid-cols-4">
              <TabsTrigger value="1">1. Discover</TabsTrigger>
              <TabsTrigger value="2">2. Design</TabsTrigger>
              <TabsTrigger value="3">3. Iterate</TabsTrigger>
              <TabsTrigger value="4">4. Deliver</TabsTrigger>
            </TabsList>
            <TabsContent value="1" className="text-sm text-muted-foreground">Workshops, brand audit, KPI mapping, competitor analysis.</TabsContent>
            <TabsContent value="2" className="text-sm text-muted-foreground">Concepts, grids, typography, color systems, prototypes.</TabsContent>
            <TabsContent value="3" className="text-sm text-muted-foreground">A/B creatives, usability tests, rapid refinement.</TabsContent>
            <TabsContent value="4" className="text-sm text-muted-foreground">Assets, guidelines, developer handoff, training.</TabsContent>
          </Tabs>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Testimonials</h2>
          <div className="mt-4 grid gap-4">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name} className="rounded-2xl">
                <CardContent className="pt-6">
                  <p className="italic">“{t.quote}”</p>
                  <div className="mt-3 text-sm text-muted-foreground">{t.name} — {t.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Pricing */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold">Packages</h2>
        <div className="grid md:grid-cols-3 gap-5 mt-6">
          {[{
            name: "Starter",
            price: "$799",
            perks: ["Logo + mini style guide", "2 concepts, 2 rounds", "Social kit"],
          },{
            name: "Growth",
            price: "$1,899",
            perks: ["Identity system + templates", "3 concepts, 3 rounds", "Launch creatives"],
          },{
            name: "Scale",
            price: "Custom",
            perks: ["Full brand system", "Design ops + UI kit", "On‑going support"],
          }].map((pkg) => (
            <Card key={pkg.name} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{pkg.name}</span>
                  <Badge variant={pkg.name === 'Growth' ? 'default' : 'secondary'}>{pkg.name === 'Growth' ? 'Popular' : 'Fixed'}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{pkg.price}</div>
                <ul className="mt-4 space-y-2 text-sm">
                  {pkg.perks.map((p) => (
                    <li key={p} className="flex items-center gap-2"><Check className="h-4 w-4" />{p}</li>
                  ))}
                </ul>
                <Button className="mt-6 w-full">Choose {pkg.name}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Let’s build something great</h2>
            <p className="text-muted-foreground mt-2">Tell me about your project. I usually reply within 24 hours.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <a className="flex items-center gap-2" href="mailto:hello@yourstudio.com"><Mail className="h-4 w-4" /> hello@yourstudio.com</a>
              <a className="flex items-center gap-2" href="tel:+92XXXXXXXXXX"><Phone className="h-4 w-4" /> +92 •••• ••••••</a>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Lahore, PK</span>
            </div>
            <div className="mt-6 flex gap-3">
              <Button variant="outline" asChild><a href="#"><Instagram className="h-4 w-4" /> Instagram</a></Button>
              <Button variant="outline" asChild><a href="#"><Twitter className="h-4 w-4" /> Twitter</a></Button>
              <Button variant="outline" asChild><a href="#"><Linkedin className="h-4 w-4" /> LinkedIn</a></Button>
            </div>
          </div>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Project Brief</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-3">
                <Input placeholder="Your name" />
                <Input type="email" placeholder="Email" />
              </div>
              <Input placeholder="Company / Brand" />
              <Select defaultValue="Branding">
                <SelectTrigger>
                  <SelectValue placeholder="Service" />
                </SelectTrigger>
                <SelectContent>
                  {['Branding', 'UI/UX', 'Marketing', 'Print', 'CGI'].map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
              <Textarea placeholder="Tell me about your goals, audience, timeline…" rows={6} />
              <Button className="w-full">Send inquiry</Button>
              <p className="text-xs text-muted-foreground">By submitting, you agree to our friendly terms. No spam ever.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Khizar Malik — All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#top" className="hover:text-foreground">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
