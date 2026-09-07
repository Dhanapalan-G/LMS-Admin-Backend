export declare const UserRole: {
    readonly ADMIN: "ADMIN";
    readonly PRINCIPAL: "PRINCIPAL";
    readonly FACULTY: "FACULTY";
    readonly LEARNER: "LEARNER";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const CourseStatus: {
    readonly DRAFT: "DRAFT";
    readonly PUBLISHED: "PUBLISHED";
    readonly ARCHIVED: "ARCHIVED";
};
export type CourseStatus = (typeof CourseStatus)[keyof typeof CourseStatus];
export declare const LessonType: {
    readonly VIDEO: "VIDEO";
    readonly PDF: "PDF";
    readonly AUDIO: "AUDIO";
    readonly DOCUMENT: "DOCUMENT";
    readonly IMAGE: "IMAGE";
    readonly TEXT: "TEXT";
};
export type LessonType = (typeof LessonType)[keyof typeof LessonType];
export declare const ProgressStatus: {
    readonly NOT_STARTED: "NOT_STARTED";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly COMPLETED: "COMPLETED";
};
export type ProgressStatus = (typeof ProgressStatus)[keyof typeof ProgressStatus];
export declare const QuizStatus: {
    readonly DRAFT: "DRAFT";
    readonly PUBLISHED: "PUBLISHED";
};
export type QuizStatus = (typeof QuizStatus)[keyof typeof QuizStatus];
export declare const ImportStatus: {
    readonly PENDING: "PENDING";
    readonly PROCESSING: "PROCESSING";
    readonly COMPLETED: "COMPLETED";
    readonly FAILED: "FAILED";
};
export type ImportStatus = (typeof ImportStatus)[keyof typeof ImportStatus];
export declare const NotificationType: {
    readonly GENERAL: "GENERAL";
    readonly COURSE: "COURSE";
    readonly QUIZ: "QUIZ";
    readonly SYSTEM: "SYSTEM";
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
