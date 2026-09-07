"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationType = exports.ImportStatus = exports.QuizStatus = exports.ProgressStatus = exports.LessonType = exports.CourseStatus = exports.UserRole = void 0;
exports.UserRole = {
    ADMIN: 'ADMIN',
    PRINCIPAL: 'PRINCIPAL',
    FACULTY: 'FACULTY',
    LEARNER: 'LEARNER'
};
exports.CourseStatus = {
    DRAFT: 'DRAFT',
    PUBLISHED: 'PUBLISHED',
    ARCHIVED: 'ARCHIVED'
};
exports.LessonType = {
    VIDEO: 'VIDEO',
    PDF: 'PDF',
    AUDIO: 'AUDIO',
    DOCUMENT: 'DOCUMENT',
    IMAGE: 'IMAGE',
    TEXT: 'TEXT'
};
exports.ProgressStatus = {
    NOT_STARTED: 'NOT_STARTED',
    IN_PROGRESS: 'IN_PROGRESS',
    COMPLETED: 'COMPLETED'
};
exports.QuizStatus = {
    DRAFT: 'DRAFT',
    PUBLISHED: 'PUBLISHED'
};
exports.ImportStatus = {
    PENDING: 'PENDING',
    PROCESSING: 'PROCESSING',
    COMPLETED: 'COMPLETED',
    FAILED: 'FAILED'
};
exports.NotificationType = {
    GENERAL: 'GENERAL',
    COURSE: 'COURSE',
    QUIZ: 'QUIZ',
    SYSTEM: 'SYSTEM'
};
//# sourceMappingURL=enums.js.map