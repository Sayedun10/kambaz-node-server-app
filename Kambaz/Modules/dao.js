import model from "./model.js";

export function findModulesForCourse(courseId) {
  return model.find({ course: courseId });
}

export function createModule(module) {
  delete module._id;
  const newModule = {
    ...module,
    _id: `MODULE_${Date.now()}`,
    lessons: [],
  };
  return model.create(newModule);
}

export function deleteModule(moduleId) {
  return model.deleteOne({ _id: moduleId });
}

export function updateModule(moduleId, moduleUpdates) {
  return model.updateOne({ _id: moduleId }, { $set: moduleUpdates });
}
