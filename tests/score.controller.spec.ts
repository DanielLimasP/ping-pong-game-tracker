import request from "supertest";
import "jest";
import { HTTP_STATUS_CODES } from "../src/utils/constants/httpStatusCodes";

// Testing high-level-of-abstraction
// functions just for demo purposes
describe("Score controller", () => {
  const url = "http://localhost:3000";
  const { OK, CREATED } = HTTP_STATUS_CODES;
  let id = "";
  test("get Scores", async () => {
    const { status, body } = await request(url).get("/api/score");
    expect(status).toBe(OK);
    expect(body.data).toEqual(expect.arrayContaining([]));
    if (body.data.length) {
      expect(body.data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            player1_score: expect.any(Number),
            player2_score: expect.any(Number),
            player1_name: expect.any(String),
            player2_name: expect.any(String),
            winner: expect.any(String),
            scoreDiff: expect.any(Number),
            id: expect.any(String),
          }),
        ])
      );
    }
  });
  test("post Score", async () => {
    const fixture = {
      player1_score: 1,
      player2_score: 2,
      player1_name: "TEST_USER_1",
      player2_name: "TEST_USER_2",
    };
    const { status, body } = await request(url)
      .post("/api/score")
      .send(fixture);
    id = body.data.id;
    expect(status).toBe(CREATED);
    expect(body.msg).toEqual("Saved score");
    expect(body.data).toEqual(
      expect.objectContaining({
        player1_score: expect.any(Number),
        player2_score: expect.any(Number),
        player1_name: expect.any(String),
        player2_name: expect.any(String),
        winner: expect.any(String),
        scoreDiff: expect.any(Number),
        id: expect.any(String),
      })
    );
  });
  test("get single Score by id", async () => {
    const { status, body } = await request(url).get(`/api/score/${id}`);
    expect(status).toBe(OK);
    expect(body.data).toEqual(
      expect.objectContaining({
        player1_score: expect.any(Number),
        player2_score: expect.any(Number),
        player1_name: expect.any(String),
        player2_name: expect.any(String),
        winner: expect.any(String),
        scoreDiff: expect.any(Number),
        id: expect.any(String),
      })
    );
  });
});
