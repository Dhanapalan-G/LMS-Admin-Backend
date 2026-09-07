"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.NullableJsonNullValueInput = exports.SortOrder = exports.AuditLogScalarFieldEnum = exports.CertificateScalarFieldEnum = exports.NotificationScalarFieldEnum = exports.ImportErrorScalarFieldEnum = exports.ImportJobScalarFieldEnum = exports.QuizAnswerScalarFieldEnum = exports.QuizAttemptScalarFieldEnum = exports.QuizOptionScalarFieldEnum = exports.QuizQuestionScalarFieldEnum = exports.QuizScalarFieldEnum = exports.BookmarkScalarFieldEnum = exports.LessonProgressScalarFieldEnum = exports.EnrollmentScalarFieldEnum = exports.LessonFileScalarFieldEnum = exports.LessonScalarFieldEnum = exports.CourseModuleScalarFieldEnum = exports.CourseScalarFieldEnum = exports.UserScalarFieldEnum = exports.SchoolScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.10.0",
    engine: "0edf323efd1d98336f3f0a68684b56f689b900d3"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    School: 'School',
    User: 'User',
    Course: 'Course',
    CourseModule: 'CourseModule',
    Lesson: 'Lesson',
    LessonFile: 'LessonFile',
    Enrollment: 'Enrollment',
    LessonProgress: 'LessonProgress',
    Bookmark: 'Bookmark',
    Quiz: 'Quiz',
    QuizQuestion: 'QuizQuestion',
    QuizOption: 'QuizOption',
    QuizAttempt: 'QuizAttempt',
    QuizAnswer: 'QuizAnswer',
    ImportJob: 'ImportJob',
    ImportError: 'ImportError',
    Notification: 'Notification',
    Certificate: 'Certificate',
    AuditLog: 'AuditLog'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.SchoolScalarFieldEnum = {
    id: 'id',
    name: 'name',
    code: 'code',
    address: 'address',
    phone: 'phone',
    email: 'email',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.UserScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    employeeId: 'employeeId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CourseScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    createdById: 'createdById',
    title: 'title',
    code: 'code',
    description: 'description',
    thumbnail: 'thumbnail',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CourseModuleScalarFieldEnum = {
    id: 'id',
    courseId: 'courseId',
    title: 'title',
    description: 'description',
    position: 'position',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.LessonScalarFieldEnum = {
    id: 'id',
    moduleId: 'moduleId',
    title: 'title',
    description: 'description',
    type: 'type',
    content: 'content',
    position: 'position',
    duration: 'duration',
    isRequired: 'isRequired',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.LessonFileScalarFieldEnum = {
    id: 'id',
    lessonId: 'lessonId',
    fileName: 'fileName',
    fileUrl: 'fileUrl',
    fileType: 'fileType',
    fileSize: 'fileSize',
    mimeType: 'mimeType',
    createdAt: 'createdAt'
};
exports.EnrollmentScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    enrolledAt: 'enrolledAt',
    completedAt: 'completedAt'
};
exports.LessonProgressScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    lessonId: 'lessonId',
    status: 'status',
    position: 'position',
    percentage: 'percentage',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    updatedAt: 'updatedAt'
};
exports.BookmarkScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    lessonId: 'lessonId',
    position: 'position',
    note: 'note',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.QuizScalarFieldEnum = {
    id: 'id',
    courseId: 'courseId',
    title: 'title',
    description: 'description',
    passingScore: 'passingScore',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.QuizQuestionScalarFieldEnum = {
    id: 'id',
    quizId: 'quizId',
    question: 'question',
    position: 'position',
    marks: 'marks',
    createdAt: 'createdAt'
};
exports.QuizOptionScalarFieldEnum = {
    id: 'id',
    questionId: 'questionId',
    optionText: 'optionText',
    position: 'position',
    isCorrect: 'isCorrect'
};
exports.QuizAttemptScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    quizId: 'quizId',
    score: 'score',
    passed: 'passed',
    completed: 'completed',
    startedAt: 'startedAt',
    completedAt: 'completedAt'
};
exports.QuizAnswerScalarFieldEnum = {
    id: 'id',
    attemptId: 'attemptId',
    questionId: 'questionId',
    optionId: 'optionId',
    isCorrect: 'isCorrect',
    marks: 'marks'
};
exports.ImportJobScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    createdById: 'createdById',
    fileName: 'fileName',
    fileUrl: 'fileUrl',
    status: 'status',
    totalRows: 'totalRows',
    successRows: 'successRows',
    failedRows: 'failedRows',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt'
};
exports.ImportErrorScalarFieldEnum = {
    id: 'id',
    importJobId: 'importJobId',
    rowNumber: 'rowNumber',
    fieldName: 'fieldName',
    message: 'message',
    createdAt: 'createdAt'
};
exports.NotificationScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    type: 'type',
    isRead: 'isRead',
    createdAt: 'createdAt',
    readAt: 'readAt'
};
exports.CertificateScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    certificateNumber: 'certificateNumber',
    fileUrl: 'fileUrl',
    issuedAt: 'issuedAt'
};
exports.AuditLogScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    details: 'details',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map