import request from "supertest";
import app from "../src/index.js";

describe("Integration Testing - API endpoints", () => {
  it("GET /health should return HTML", async () => {
    const response = await request(app).get("/health");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Server is running completely fine");
  });
});
