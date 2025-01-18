ARG BUN_VERSION=1.1.43

ARG YARN_PKG_MANAGER="this.packageManager=\"yarn@1.22.22\""
ARG BUN_PKG_MANAGER="this.packageManager=\"bun@${BUN_VERSION}\""

FROM oven/bun:${BUN_VERSION} AS bun
WORKDIR /app

FROM oven/bun:${BUN_VERSION}-alpine AS bun-alpine
WORKDIR /app

# ================= TURBO PRUNE ===================

FROM bun AS pruned
ARG YARN_PKG_MANAGER
COPY . .
RUN bunx json -I -f package.json -e ${YARN_PKG_MANAGER}
RUN bunx turbo prune web --docker

# =============== INSTALL & BUILD =================

FROM bun AS builder
ARG BUN_PKG_MANAGER
ARG BACKEND_URL
COPY --from=pruned /app/out/full/ .
RUN bunx json -I -f package.json -e ${BUN_PKG_MANAGER}
RUN bun install --frozen-lockfile
RUN bun turbo build --filter="web"

# ================== RELEASE ======================

FROM bun-alpine AS runner
ENV NODE_ENV=production

COPY --from=builder /app/apps/web/next.config.js ./
COPY --from=builder /app/apps/web/package.json ./

COPY --from=builder /app/apps/web/.next/standalone ./
COPY --from=builder /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder /app/apps/web/public ./apps/web/public

EXPOSE 3001

USER bun
ENV PORT=3001
ARG BACKEND_URL
ENV BACKEND_URL ${BACKEND_URL}
ENV HOSTNAME="0.0.0.0"

CMD ["bun", "run", "apps/web/server.js"]
