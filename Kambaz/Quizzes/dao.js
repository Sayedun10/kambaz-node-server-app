import model from "./model.js";

export function findAllQuizzes() {
  return model.find();
}

export function findQuizzesForCourse(courseId) {
  return model.find({ course: courseId });
}

export function findQuizById(quizId) {
  return model.findById(quizId);
}

export function createQuiz(quiz) {
  if (!quiz._id) {
    quiz._id = Date.now().toString();
  }
  return model.create(quiz);
}

export function updateQuiz(quizId, quizUpdates) {
  return model.updateOne({ _id: quizId }, { $set: quizUpdates });
}

export function deleteQuiz(quizId) {
  return model.deleteOne({ _id: quizId });
}

export function publishQuiz(quizId, published) {
  return model.updateOne({ _id: quizId }, { $set: { published } });
}
