import mongoose from "mongoose";
import "dotenv/config";
import Database from "./index.js";
import CourseModel from "../Courses/model.js";
import ModuleModel from "../Modules/model.js";
import AssignmentModel from "../Assignments/model.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

async function seedDatabase() {
  try {
    await mongoose.connect(CONNECTION_STRING);
    console.log("Connected to MongoDB");

    // Clear existing data
    await CourseModel.deleteMany({});
    await ModuleModel.deleteMany({});
    await AssignmentModel.deleteMany({});
    console.log("Cleared collections");

    // Insert data
    await CourseModel.insertMany(Database.courses);
    await ModuleModel.insertMany(Database.modules);
    await AssignmentModel.insertMany(Database.assignments);
    console.log("Seeded courses, modules, and assignments");

    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();
