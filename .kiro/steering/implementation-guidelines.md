---
inclusion: always
---

# Implementation Guidelines

**Philosophy**: Local-first, security-first, mobile-first, test-driven

**Code**: TypeScript strict, shadcn/ui + Kommon brand, Tailwind CSS, WCAG 2.1 AA, <2s load time

**Database**: Prisma ORM, `pnpm db:migrate` for changes, FERPA-compliant, never expose emails

**Components**: `kommon-*.tsx` (UI), PascalCase (pages), in `src/components/ui/` or `src/components/[feature]/`

**Logos**: `webapp/public/` - webapp_logo.svg (100x100), website_logo.svg (200x200), wordmark.svg (220x60)

**Security**: .edu verification, bcrypt ≥12 rounds, HTTP-only cookies, CSRF protection, rate limiting, server-side validation

**Git**: `feature/US-001/description`, conventional commits (feat/fix/chore/docs), PR to develop

**Current**: Phase 1C - Profile creation (role selection, lifestyle preferences, housing preferences)
**Next**: Phase 2A - Room listings (create, browse, search)

**Targets**: <2s load, <3s interactive, 90+ Lighthouse, 44px touch targets, 4.5:1 contrast
