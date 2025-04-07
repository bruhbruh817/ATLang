import type { Express } from "express";
import express from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for portfolio data
  app.get('/api/writing-samples', async (req, res) => {
    try {
      // This would fetch actual writing samples from a database
      // For now we'll just serve the static site
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch writing samples' });
    }
  });

  // Serve static files from public directory
  app.use(express.static(path.join(import.meta.dirname, 'public')));

  const httpServer = createServer(app);

  return httpServer;
}
