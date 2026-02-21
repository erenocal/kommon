---
inclusion: fileMatch
fileMatchPattern: "**/{components,app,src}/**/*.{tsx,jsx,css}"
---

# UI Design System

**Typography**: Nunito Bold (headlines: 40/36/32/24/18px), Lora Regular (body: 18/16/14px)

**Colors**: Hearth #C86A50 (CTAs), Sage #A3B1A2 (borders), Sunlight #F3DDA4 (focus), Ink #2E3A4B (text), Foundation #F7F5F2 (bg) | Error #D92D20, Success #12B76A

**Spacing**: 4px base (xs:4, sm:8, md:16, lg:24, xl:32, 2xl:48)

**Radius**: inputs 4px, cards 8px, buttons 16px

**Touch**: 44px min, 48px recommended

**States**: Focus 2px Sunlight outline, Hover darken 10% (Hearth→#B55F46)

**Breakpoints**: Mobile 375-767px, Tablet 768-1023px, Desktop 1024-1440px, Large 1441px+

**Grid**: 12-column, 16px gutters, 1440px max width

**Accessibility**: 4.5:1 contrast (normal), 3:1 (large), visible focus, keyboard nav, 44px touch targets

**Components** (shadcn/ui + Kommon):
- button-primary: `bg-hearth text-foundation font-nunito font-bold px-6 py-3 rounded-2xl`
- input-text: `bg-white border border-sage rounded px-4 py-3 font-lora focus:border-2 focus:border-hearth`
- card: `bg-white border border-sage rounded-lg p-4 hover:shadow-md`
- badge-verified: `text-success font-nunito font-bold text-sm` + ShieldCheckIcon

**Icons**: Lucide React (16/20/24/64px), aria-label for icon-only. NO EMOJIS - use Lucide icons instead

**Images**: Profile 80x80 (cards) 120x120 (profiles) circular, rooms 16:9, WebP + lazy load
