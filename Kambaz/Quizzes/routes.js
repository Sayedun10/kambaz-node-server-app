import * as quizzesDao from "./dao.js";

export default function QuizRoutes(app) {
  // Get all quizzes for a course
  const findQuizzesForCourse = async (req, res) => {
    const { courseId } = req.params;
    const quizzes = await quizzesDao.findQuizzesForCourse(courseId);
    res.json(quizzes);
  };

  // Get a single quiz by ID
  const findQuizById = async (req, res) => {
    const { quizId } = req.params;
    const quiz = await quizzesDao.findQuizById(quizId);
    res.json(quiz);
  };

  // Create a new quiz
  const createQuiz = async (req, res) => {
    const { courseId } = req.params;
    const quiz = { ...req.body, course: courseId };
    const newQuiz = await quizzesDao.createQuiz(quiz);
    res.json(newQuiz);
  };

  // Update a quiz
  const updateQuiz = async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    await quizzesDao.updateQuiz(quizId, quizUpdates);
    res.sendStatus(204);
  };

  // Delete a quiz
  const deleteQuiz = async (req, res) => {
    const { quizId } = req.params;
    await quizzesDao.deleteQuiz(quizId);
    res.sendStatus(204);
  };

  // Publish/unpublish a quiz
  const publishQuiz = async (req, res) => {
    const { quizId } = req.params;
    const { published } = req.body;
    await quizzesDao.publishQuiz(quizId, published);
    res.sendStatus(204);
  };

  // Routes
  app.get("/api/courses/:courseId/quizzes", findQuizzesForCourse);
  app.post("/api/courses/:courseId/quizzes", createQuiz);
  app.get("/api/quizzes/:quizId", findQuizById);
  app.put("/api/quizzes/:quizId", updateQuiz);
  app.delete("/api/quizzes/:quizId", deleteQuiz);
  app.put("/api/quizzes/:quizId/publish", publishQuiz);
}
