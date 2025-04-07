import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Portfolio Schema
export const writingSamples = pgTable("writing_samples", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  date: text("date").notNull(),
  status: text("status").notNull(),
  explanationText: text("explanation_text").notNull(),
  approachText: text("approach_text").notNull(),
  strengthsWeaknessesText: text("strengths_weaknesses_text").notNull(),
  previewTitle: text("preview_title").notNull(),
  previewContent: text("preview_content").notNull(),
  sectionType: text("section_type").notNull(), // "academic" or "beyond"
});

export const insertWritingSampleSchema = createInsertSchema(writingSamples).omit({
  id: true,
});

export type InsertWritingSample = z.infer<typeof insertWritingSampleSchema>;
export type WritingSample = typeof writingSamples.$inferSelect;
