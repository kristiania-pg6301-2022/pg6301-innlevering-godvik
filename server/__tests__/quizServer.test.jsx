import express from "express";
import { QuizApp } from "../routes/QuizApp.js";
import request from "supertest";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", QuizApp);

describe("Quiz app server test", () => {
  it("should return a 200 response", async () => {
    const response = request(app).get("/api/question/");
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      id: expect.any(Number),
      category: expect.any(String),
      question: expect.any(String),
      answers: expect.any(Object),
    });
  });

  it("should respond to correct answer", async () => {
    const response = await request(app).post("/api/question/974").send({
      answer: "answer_b",
    });
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        result: "correct",
      })
    );
  });

  it("should respond to false answer", async () => {
    await request(app)
      .post("/api/question/974")
      .send({ answer: "answer_c" })
      .expect(200)
      .expect({ result: false });
  });

  it("should respond to not found", async () => {
    await request(app)
      .post("/api/question/9999")
      .send({ answer: "answer_d" })
      .expect(404)
      .expect({ msg: "Question not found" });
  });
});
