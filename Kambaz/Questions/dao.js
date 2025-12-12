import model from "./model.js";

export function findQuestionsForQuiz(quizId) {
  return model.find({ quiz: quizId });
}

export function findQuestionById(questionId) {
  return model.findById(questionId);
}

export function createQuestion(question) {
  if (!question._id) {
    question._id = Date.now().toString();
  }
  return model.create(question);
}

export function updateQuestion(questionId, questionUpdates) {
  return model.updateOne({ _id: questionId }, { $set: questionUpdates });
}

export function deleteQuestion(questionId) {
  return model.deleteOne({ _id: questionId });
}
