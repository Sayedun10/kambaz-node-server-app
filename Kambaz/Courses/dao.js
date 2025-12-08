import Database from "../Database/index.js";

export function findAllCourses() {
  return Database.courses;
}

export function findCourseById(courseId) {
  return Database.courses.find((course) => course._id === courseId);
}

export function createCourse(course) {
  const newCourse = { ...course, _id: Date.now().toString() };
  Database.courses = [...Database.courses, newCourse];
  return newCourse;
}

export function deleteCourse(courseId) {
  const { courses } = Database;
  Database.courses = courses.filter((course) => course._id !== courseId);
}

export function updateCourse(courseId, courseUpdates) {
  const { courses } = Database;
  const course = courses.find((course) => course._id === courseId);
  Object.assign(course, courseUpdates);
  return course;
}
