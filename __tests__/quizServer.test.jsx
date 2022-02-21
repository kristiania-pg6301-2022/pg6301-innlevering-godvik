import express from "express";
import { QuizApp } from "../server/routes/QuizApp";
import request from "supertest";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", QuizApp);

describe("Quiz app server test", () => {
  it("should return a 200 response", async () => {
    const response = await request(app).get("/api/question");
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      id: expect.any(Number),
      category: expect.any(String),
      question: expect.any(String),
      answers: expect.any(Object),
    });
  });

  it("should respond to correct answer", async () => {
    await request(app)
      .post("/api/question")
      .send({ id: 974, answer: "answer_b" })
      .expect(200)
      .expect({ result: true });
  });

  it("should respond to false answer", async () => {
    await request(app)
      .post("/api/question")
      .send({ id: 974, answer: "answer_c" })
      .expect(200)
      .expect({ result: false });
  });
});
