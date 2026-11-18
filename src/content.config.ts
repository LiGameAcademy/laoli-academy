import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const collections = {
  courses: defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/content/courses" }),
    schema: ({ image }) => z.object({
      title: z.string(),
      summary: z.string(),
      cover: image(),
      free: z.boolean().default(false),
      external: z.boolean().default(false),
      englishTitle: z.string().optional(),
      englishSummary: z.string().optional(),
      language: z.enum(["zh-CN", "en"]).default("zh-CN"),
      translation: z.string().optional(),
      zsxq: z.string().url().optional(),
      patreon: z.string().url().optional(),
    }),
  }),
  lessons: defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/generated" }),
    schema: z.object({ title: z.string(), order: z.number().int() }),
  }),
};
