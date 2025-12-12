import * as questionsDao from "./dao.js";

export default function QuestionRoutes(app) {
  // Get all questions for a quiz
  const findQuestionsForQuiz = async (req, res) => {
    const { quizId } = req.params;
    const questions = await questionsDao.findQuestionsForQuiz(quizId);
    res.json(questions);
  };

  // Get a single question by ID
  const findQuestionById = async (req, res) => {
    const { questionId } = req.params;
    const question = await questionsDao.findQuestionById(questionId);
    res.json(question);
  };

  // Create a new question
  const createQuestion = async (req, res) => {
    const { quizId } = req.params;
    const question = { ...req.body, quiz: quizId };
    const newQuestion = await questionsDao.createQuestion(question);
    res.json(newQuestion);
  };

  // Update a question
  const updateQuestion = async (req, res) => {
    const { questionId } = req.params;
    const questionUpdates = req.body;
    await questionsDao.updateQuestion(questionId, questionUpdates);
    res.sendStatus(204);
  };

  // Delete a question
  const deleteQuestion = async (req, res) => {
    const { questionId } = req.params;
    await questionsDao.deleteQuestion(questionId);
    res.sendStatus(204);
  };

  // Routes
  app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz);
  app.post("/api/quizzes/:quizId/questions", createQuestion);
  app.get("/api/questions/:questionId", findQuestionById);
  app.put("/api/questions/:questionId", updateQuestion);
  app.delete("/api/questions/:questionId", deleteQuestion);
}
