ARG BUN_VERSION=1.2.2

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
RUN bunx turbo prune scripts --docker

# =============== INSTALL & BUILD =================

FROM bun AS builder
ARG BUN_PKG_MANAGER
COPY --from=pruned /app/out/full/ .
RUN bunx json -I -f package.json -e ${BUN_PKG_MANAGER}
RUN bun install
RUN bun turbo db:generate

# ================== RELEASE ======================

FROM bun-alpine AS runner
ENV NODE_ENV=production

COPY --from=builder --chown=bun:bun /app/packages/ ./packages
COPY --from=builder --chown=bun:bun /app/node_modules ./node_modules
COPY --from=builder --chown=bun:bun /app/apps/scripts/src/ ./src

USER bun
CMD ["bun", "run", "src/index.ts"]
