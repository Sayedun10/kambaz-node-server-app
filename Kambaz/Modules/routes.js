import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  const findModulesForCourse = async (req, res) => {
    const { courseId } = req.params;
    const modules = await dao.findModulesForCourse(courseId);
    res.json(modules);
  };

  const createModule = async (req, res) => {
    const { courseId } = req.params;
    const module = {
      ...req.body,
      course: courseId,
    };
    const newModule = await dao.createModule(module);
    res.json(newModule);
  };

  const deleteModule = async (req, res) => {
    const { moduleId } = req.params;
    await dao.deleteModule(moduleId);
    res.sendStatus(204);
  };

  const updateModule = async (req, res) => {
    const { moduleId } = req.params;
    const moduleUpdates = req.body;
    await dao.updateModule(moduleId, moduleUpdates);
    res.sendStatus(204);
  };

  app.get("/api/courses/:courseId/modules", findModulesForCourse);
  app.post("/api/courses/:courseId/modules", createModule);
  app.delete("/api/modules/:moduleId", deleteModule);
  app.put("/api/modules/:moduleId", updateModule);
}
