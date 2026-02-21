---
inclusion: always
---

# Implementation Guidelines

**Philosophy**: Local-first, security-first, mobile-first, E2E-tested

**Code**: TypeScript strict, shadcn/ui + Kommon brand, Tailwind CSS, WCAG 2.1 AA, <2s load time

**Database**: Prisma ORM, `pnpm db:push` for dev, migrations for prod, FERPA-compliant, never expose emails

**Components**: `kommon-*.tsx` (UI), PascalCase (pages), in `src/components/ui/` or `src/components/[feature]/`

**Security**: .edu verification, bcrypt ≥12 rounds, HTTP-only cookies, CSRF protection, rate limiting, server-side validation

**Git**: `feature/US-001/description`, conventional commits (feat/fix/chore/docs), PR to develop

**Testing**: Playwright E2E only until Phase 3. Run `pnpm test:e2e` before commits. Unit tests deferred.

**Dev Cycle**: 
1. Implement feature (API → pages → validation)
2. Add Playwright E2E tests
3. Manual test locally + production
4. Commit with conventional format
5. Deploy to Vercel (auto on push)

**Current**: Phase 2A - Room listings (create, browse, search, view)
**Next**: Phase 2B - Messaging system

**Targets**: <2s load, <3s interactive, 90+ Lighthouse, 44px touch targets, 4.5:1 contrast
