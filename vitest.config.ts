import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        globals: true,
        environment: "node",
        include: ["tests/**/*.{test,spec}.{js,ts}"],
        coverage: {
            provider: "v8",
            reporter: ["text", "json", "html", "lcov"],
            exclude: [
                "node_modules/",
                "dist/",
                "tests/",
                "documentation/",
                "vitest.config.ts"
            ],
            all: true,
            clean: true,
            reportsDirectory: "./coverage"
        },
    },
});
