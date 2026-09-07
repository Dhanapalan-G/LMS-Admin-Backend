import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly School: "School";
    readonly User: "User";
    readonly Course: "Course";
    readonly CourseModule: "CourseModule";
    readonly Lesson: "Lesson";
    readonly LessonFile: "LessonFile";
    readonly Enrollment: "Enrollment";
    readonly LessonProgress: "LessonProgress";
    readonly Bookmark: "Bookmark";
    readonly Quiz: "Quiz";
    readonly QuizQuestion: "QuizQuestion";
    readonly QuizOption: "QuizOption";
    readonly QuizAttempt: "QuizAttempt";
    readonly QuizAnswer: "QuizAnswer";
    readonly ImportJob: "ImportJob";
    readonly ImportError: "ImportError";
    readonly Notification: "Notification";
    readonly Certificate: "Certificate";
    readonly AuditLog: "AuditLog";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "school" | "user" | "course" | "courseModule" | "lesson" | "lessonFile" | "enrollment" | "lessonProgress" | "bookmark" | "quiz" | "quizQuestion" | "quizOption" | "quizAttempt" | "quizAnswer" | "importJob" | "importError" | "notification" | "certificate" | "auditLog";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        School: {
            payload: Prisma.$SchoolPayload<ExtArgs>;
            fields: Prisma.SchoolFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SchoolFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload>;
                };
                findFirst: {
                    args: Prisma.SchoolFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload>;
                };
                findMany: {
                    args: Prisma.SchoolFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload>[];
                };
                create: {
                    args: Prisma.SchoolCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload>;
                };
                createMany: {
                    args: Prisma.SchoolCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SchoolCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload>[];
                };
                delete: {
                    args: Prisma.SchoolDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload>;
                };
                update: {
                    args: Prisma.SchoolUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload>;
                };
                deleteMany: {
                    args: Prisma.SchoolDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SchoolUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SchoolUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload>[];
                };
                upsert: {
                    args: Prisma.SchoolUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload>;
                };
                aggregate: {
                    args: Prisma.SchoolAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSchool>;
                };
                groupBy: {
                    args: Prisma.SchoolGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SchoolGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SchoolCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SchoolCountAggregateOutputType> | number;
                };
            };
        };
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Course: {
            payload: Prisma.$CoursePayload<ExtArgs>;
            fields: Prisma.CourseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CourseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload>;
                };
                findFirst: {
                    args: Prisma.CourseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload>;
                };
                findMany: {
                    args: Prisma.CourseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload>[];
                };
                create: {
                    args: Prisma.CourseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload>;
                };
                createMany: {
                    args: Prisma.CourseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload>[];
                };
                delete: {
                    args: Prisma.CourseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload>;
                };
                update: {
                    args: Prisma.CourseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload>;
                };
                deleteMany: {
                    args: Prisma.CourseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CourseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload>[];
                };
                upsert: {
                    args: Prisma.CourseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload>;
                };
                aggregate: {
                    args: Prisma.CourseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCourse>;
                };
                groupBy: {
                    args: Prisma.CourseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CourseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CourseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CourseCountAggregateOutputType> | number;
                };
            };
        };
        CourseModule: {
            payload: Prisma.$CourseModulePayload<ExtArgs>;
            fields: Prisma.CourseModuleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CourseModuleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseModulePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CourseModuleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseModulePayload>;
                };
                findFirst: {
                    args: Prisma.CourseModuleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseModulePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CourseModuleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseModulePayload>;
                };
                findMany: {
                    args: Prisma.CourseModuleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseModulePayload>[];
                };
                create: {
                    args: Prisma.CourseModuleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseModulePayload>;
                };
                createMany: {
                    args: Prisma.CourseModuleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CourseModuleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseModulePayload>[];
                };
                delete: {
                    args: Prisma.CourseModuleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseModulePayload>;
                };
                update: {
                    args: Prisma.CourseModuleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseModulePayload>;
                };
                deleteMany: {
                    args: Prisma.CourseModuleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CourseModuleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CourseModuleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseModulePayload>[];
                };
                upsert: {
                    args: Prisma.CourseModuleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseModulePayload>;
                };
                aggregate: {
                    args: Prisma.CourseModuleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCourseModule>;
                };
                groupBy: {
                    args: Prisma.CourseModuleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CourseModuleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CourseModuleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CourseModuleCountAggregateOutputType> | number;
                };
            };
        };
        Lesson: {
            payload: Prisma.$LessonPayload<ExtArgs>;
            fields: Prisma.LessonFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LessonFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LessonFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>;
                };
                findFirst: {
                    args: Prisma.LessonFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LessonFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>;
                };
                findMany: {
                    args: Prisma.LessonFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>[];
                };
                create: {
                    args: Prisma.LessonCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>;
                };
                createMany: {
                    args: Prisma.LessonCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LessonCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>[];
                };
                delete: {
                    args: Prisma.LessonDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>;
                };
                update: {
                    args: Prisma.LessonUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>;
                };
                deleteMany: {
                    args: Prisma.LessonDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LessonUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LessonUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>[];
                };
                upsert: {
                    args: Prisma.LessonUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>;
                };
                aggregate: {
                    args: Prisma.LessonAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLesson>;
                };
                groupBy: {
                    args: Prisma.LessonGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LessonGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LessonCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LessonCountAggregateOutputType> | number;
                };
            };
        };
        LessonFile: {
            payload: Prisma.$LessonFilePayload<ExtArgs>;
            fields: Prisma.LessonFileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LessonFileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonFilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LessonFileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonFilePayload>;
                };
                findFirst: {
                    args: Prisma.LessonFileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonFilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LessonFileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonFilePayload>;
                };
                findMany: {
                    args: Prisma.LessonFileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonFilePayload>[];
                };
                create: {
                    args: Prisma.LessonFileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonFilePayload>;
                };
                createMany: {
                    args: Prisma.LessonFileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LessonFileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonFilePayload>[];
                };
                delete: {
                    args: Prisma.LessonFileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonFilePayload>;
                };
                update: {
                    args: Prisma.LessonFileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonFilePayload>;
                };
                deleteMany: {
                    args: Prisma.LessonFileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LessonFileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LessonFileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonFilePayload>[];
                };
                upsert: {
                    args: Prisma.LessonFileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonFilePayload>;
                };
                aggregate: {
                    args: Prisma.LessonFileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLessonFile>;
                };
                groupBy: {
                    args: Prisma.LessonFileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LessonFileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LessonFileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LessonFileCountAggregateOutputType> | number;
                };
            };
        };
        Enrollment: {
            payload: Prisma.$EnrollmentPayload<ExtArgs>;
            fields: Prisma.EnrollmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload>;
                };
                findFirst: {
                    args: Prisma.EnrollmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload>;
                };
                findMany: {
                    args: Prisma.EnrollmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload>[];
                };
                create: {
                    args: Prisma.EnrollmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload>;
                };
                createMany: {
                    args: Prisma.EnrollmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EnrollmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload>[];
                };
                delete: {
                    args: Prisma.EnrollmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload>;
                };
                update: {
                    args: Prisma.EnrollmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload>;
                };
                deleteMany: {
                    args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EnrollmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload>[];
                };
                upsert: {
                    args: Prisma.EnrollmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload>;
                };
                aggregate: {
                    args: Prisma.EnrollmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEnrollment>;
                };
                groupBy: {
                    args: Prisma.EnrollmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EnrollmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EnrollmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EnrollmentCountAggregateOutputType> | number;
                };
            };
        };
        LessonProgress: {
            payload: Prisma.$LessonProgressPayload<ExtArgs>;
            fields: Prisma.LessonProgressFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LessonProgressFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonProgressPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LessonProgressFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonProgressPayload>;
                };
                findFirst: {
                    args: Prisma.LessonProgressFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonProgressPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LessonProgressFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonProgressPayload>;
                };
                findMany: {
                    args: Prisma.LessonProgressFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonProgressPayload>[];
                };
                create: {
                    args: Prisma.LessonProgressCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonProgressPayload>;
                };
                createMany: {
                    args: Prisma.LessonProgressCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LessonProgressCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonProgressPayload>[];
                };
                delete: {
                    args: Prisma.LessonProgressDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonProgressPayload>;
                };
                update: {
                    args: Prisma.LessonProgressUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonProgressPayload>;
                };
                deleteMany: {
                    args: Prisma.LessonProgressDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LessonProgressUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LessonProgressUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonProgressPayload>[];
                };
                upsert: {
                    args: Prisma.LessonProgressUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonProgressPayload>;
                };
                aggregate: {
                    args: Prisma.LessonProgressAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLessonProgress>;
                };
                groupBy: {
                    args: Prisma.LessonProgressGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LessonProgressGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LessonProgressCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LessonProgressCountAggregateOutputType> | number;
                };
            };
        };
        Bookmark: {
            payload: Prisma.$BookmarkPayload<ExtArgs>;
            fields: Prisma.BookmarkFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BookmarkFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookmarkPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BookmarkFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookmarkPayload>;
                };
                findFirst: {
                    args: Prisma.BookmarkFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookmarkPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BookmarkFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookmarkPayload>;
                };
                findMany: {
                    args: Prisma.BookmarkFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookmarkPayload>[];
                };
                create: {
                    args: Prisma.BookmarkCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookmarkPayload>;
                };
                createMany: {
                    args: Prisma.BookmarkCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BookmarkCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookmarkPayload>[];
                };
                delete: {
                    args: Prisma.BookmarkDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookmarkPayload>;
                };
                update: {
                    args: Prisma.BookmarkUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookmarkPayload>;
                };
                deleteMany: {
                    args: Prisma.BookmarkDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BookmarkUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BookmarkUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookmarkPayload>[];
                };
                upsert: {
                    args: Prisma.BookmarkUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookmarkPayload>;
                };
                aggregate: {
                    args: Prisma.BookmarkAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBookmark>;
                };
                groupBy: {
                    args: Prisma.BookmarkGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookmarkGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BookmarkCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookmarkCountAggregateOutputType> | number;
                };
            };
        };
        Quiz: {
            payload: Prisma.$QuizPayload<ExtArgs>;
            fields: Prisma.QuizFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.QuizFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizPayload>;
                };
                findFirst: {
                    args: Prisma.QuizFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizPayload>;
                };
                findMany: {
                    args: Prisma.QuizFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizPayload>[];
                };
                create: {
                    args: Prisma.QuizCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizPayload>;
                };
                createMany: {
                    args: Prisma.QuizCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.QuizCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizPayload>[];
                };
                delete: {
                    args: Prisma.QuizDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizPayload>;
                };
                update: {
                    args: Prisma.QuizUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizPayload>;
                };
                deleteMany: {
                    args: Prisma.QuizDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.QuizUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.QuizUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizPayload>[];
                };
                upsert: {
                    args: Prisma.QuizUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizPayload>;
                };
                aggregate: {
                    args: Prisma.QuizAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQuiz>;
                };
                groupBy: {
                    args: Prisma.QuizGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuizGroupByOutputType>[];
                };
                count: {
                    args: Prisma.QuizCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuizCountAggregateOutputType> | number;
                };
            };
        };
        QuizQuestion: {
            payload: Prisma.$QuizQuestionPayload<ExtArgs>;
            fields: Prisma.QuizQuestionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.QuizQuestionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizQuestionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.QuizQuestionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizQuestionPayload>;
                };
                findFirst: {
                    args: Prisma.QuizQuestionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizQuestionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.QuizQuestionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizQuestionPayload>;
                };
                findMany: {
                    args: Prisma.QuizQuestionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizQuestionPayload>[];
                };
                create: {
                    args: Prisma.QuizQuestionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizQuestionPayload>;
                };
                createMany: {
                    args: Prisma.QuizQuestionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.QuizQuestionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizQuestionPayload>[];
                };
                delete: {
                    args: Prisma.QuizQuestionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizQuestionPayload>;
                };
                update: {
                    args: Prisma.QuizQuestionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizQuestionPayload>;
                };
                deleteMany: {
                    args: Prisma.QuizQuestionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.QuizQuestionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.QuizQuestionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizQuestionPayload>[];
                };
                upsert: {
                    args: Prisma.QuizQuestionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizQuestionPayload>;
                };
                aggregate: {
                    args: Prisma.QuizQuestionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQuizQuestion>;
                };
                groupBy: {
                    args: Prisma.QuizQuestionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuizQuestionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.QuizQuestionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuizQuestionCountAggregateOutputType> | number;
                };
            };
        };
        QuizOption: {
            payload: Prisma.$QuizOptionPayload<ExtArgs>;
            fields: Prisma.QuizOptionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.QuizOptionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizOptionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.QuizOptionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizOptionPayload>;
                };
                findFirst: {
                    args: Prisma.QuizOptionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizOptionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.QuizOptionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizOptionPayload>;
                };
                findMany: {
                    args: Prisma.QuizOptionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizOptionPayload>[];
                };
                create: {
                    args: Prisma.QuizOptionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizOptionPayload>;
                };
                createMany: {
                    args: Prisma.QuizOptionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.QuizOptionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizOptionPayload>[];
                };
                delete: {
                    args: Prisma.QuizOptionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizOptionPayload>;
                };
                update: {
                    args: Prisma.QuizOptionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizOptionPayload>;
                };
                deleteMany: {
                    args: Prisma.QuizOptionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.QuizOptionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.QuizOptionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizOptionPayload>[];
                };
                upsert: {
                    args: Prisma.QuizOptionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizOptionPayload>;
                };
                aggregate: {
                    args: Prisma.QuizOptionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQuizOption>;
                };
                groupBy: {
                    args: Prisma.QuizOptionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuizOptionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.QuizOptionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuizOptionCountAggregateOutputType> | number;
                };
            };
        };
        QuizAttempt: {
            payload: Prisma.$QuizAttemptPayload<ExtArgs>;
            fields: Prisma.QuizAttemptFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.QuizAttemptFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.QuizAttemptFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptPayload>;
                };
                findFirst: {
                    args: Prisma.QuizAttemptFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.QuizAttemptFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptPayload>;
                };
                findMany: {
                    args: Prisma.QuizAttemptFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptPayload>[];
                };
                create: {
                    args: Prisma.QuizAttemptCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptPayload>;
                };
                createMany: {
                    args: Prisma.QuizAttemptCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.QuizAttemptCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptPayload>[];
                };
                delete: {
                    args: Prisma.QuizAttemptDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptPayload>;
                };
                update: {
                    args: Prisma.QuizAttemptUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptPayload>;
                };
                deleteMany: {
                    args: Prisma.QuizAttemptDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.QuizAttemptUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.QuizAttemptUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptPayload>[];
                };
                upsert: {
                    args: Prisma.QuizAttemptUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptPayload>;
                };
                aggregate: {
                    args: Prisma.QuizAttemptAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQuizAttempt>;
                };
                groupBy: {
                    args: Prisma.QuizAttemptGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuizAttemptGroupByOutputType>[];
                };
                count: {
                    args: Prisma.QuizAttemptCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuizAttemptCountAggregateOutputType> | number;
                };
            };
        };
        QuizAnswer: {
            payload: Prisma.$QuizAnswerPayload<ExtArgs>;
            fields: Prisma.QuizAnswerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.QuizAnswerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAnswerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.QuizAnswerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAnswerPayload>;
                };
                findFirst: {
                    args: Prisma.QuizAnswerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAnswerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.QuizAnswerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAnswerPayload>;
                };
                findMany: {
                    args: Prisma.QuizAnswerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAnswerPayload>[];
                };
                create: {
                    args: Prisma.QuizAnswerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAnswerPayload>;
                };
                createMany: {
                    args: Prisma.QuizAnswerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.QuizAnswerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAnswerPayload>[];
                };
                delete: {
                    args: Prisma.QuizAnswerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAnswerPayload>;
                };
                update: {
                    args: Prisma.QuizAnswerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAnswerPayload>;
                };
                deleteMany: {
                    args: Prisma.QuizAnswerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.QuizAnswerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.QuizAnswerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAnswerPayload>[];
                };
                upsert: {
                    args: Prisma.QuizAnswerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAnswerPayload>;
                };
                aggregate: {
                    args: Prisma.QuizAnswerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQuizAnswer>;
                };
                groupBy: {
                    args: Prisma.QuizAnswerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuizAnswerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.QuizAnswerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuizAnswerCountAggregateOutputType> | number;
                };
            };
        };
        ImportJob: {
            payload: Prisma.$ImportJobPayload<ExtArgs>;
            fields: Prisma.ImportJobFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ImportJobFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportJobPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ImportJobFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportJobPayload>;
                };
                findFirst: {
                    args: Prisma.ImportJobFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportJobPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ImportJobFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportJobPayload>;
                };
                findMany: {
                    args: Prisma.ImportJobFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportJobPayload>[];
                };
                create: {
                    args: Prisma.ImportJobCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportJobPayload>;
                };
                createMany: {
                    args: Prisma.ImportJobCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ImportJobCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportJobPayload>[];
                };
                delete: {
                    args: Prisma.ImportJobDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportJobPayload>;
                };
                update: {
                    args: Prisma.ImportJobUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportJobPayload>;
                };
                deleteMany: {
                    args: Prisma.ImportJobDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ImportJobUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ImportJobUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportJobPayload>[];
                };
                upsert: {
                    args: Prisma.ImportJobUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportJobPayload>;
                };
                aggregate: {
                    args: Prisma.ImportJobAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateImportJob>;
                };
                groupBy: {
                    args: Prisma.ImportJobGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ImportJobGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ImportJobCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ImportJobCountAggregateOutputType> | number;
                };
            };
        };
        ImportError: {
            payload: Prisma.$ImportErrorPayload<ExtArgs>;
            fields: Prisma.ImportErrorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ImportErrorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportErrorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ImportErrorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportErrorPayload>;
                };
                findFirst: {
                    args: Prisma.ImportErrorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportErrorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ImportErrorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportErrorPayload>;
                };
                findMany: {
                    args: Prisma.ImportErrorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportErrorPayload>[];
                };
                create: {
                    args: Prisma.ImportErrorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportErrorPayload>;
                };
                createMany: {
                    args: Prisma.ImportErrorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ImportErrorCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportErrorPayload>[];
                };
                delete: {
                    args: Prisma.ImportErrorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportErrorPayload>;
                };
                update: {
                    args: Prisma.ImportErrorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportErrorPayload>;
                };
                deleteMany: {
                    args: Prisma.ImportErrorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ImportErrorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ImportErrorUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportErrorPayload>[];
                };
                upsert: {
                    args: Prisma.ImportErrorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportErrorPayload>;
                };
                aggregate: {
                    args: Prisma.ImportErrorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateImportError>;
                };
                groupBy: {
                    args: Prisma.ImportErrorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ImportErrorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ImportErrorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ImportErrorCountAggregateOutputType> | number;
                };
            };
        };
        Notification: {
            payload: Prisma.$NotificationPayload<ExtArgs>;
            fields: Prisma.NotificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findFirst: {
                    args: Prisma.NotificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findMany: {
                    args: Prisma.NotificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                create: {
                    args: Prisma.NotificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                createMany: {
                    args: Prisma.NotificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                delete: {
                    args: Prisma.NotificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                update: {
                    args: Prisma.NotificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                upsert: {
                    args: Prisma.NotificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotification>;
                };
                groupBy: {
                    args: Prisma.NotificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationCountAggregateOutputType> | number;
                };
            };
        };
        Certificate: {
            payload: Prisma.$CertificatePayload<ExtArgs>;
            fields: Prisma.CertificateFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CertificateFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CertificateFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload>;
                };
                findFirst: {
                    args: Prisma.CertificateFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CertificateFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload>;
                };
                findMany: {
                    args: Prisma.CertificateFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload>[];
                };
                create: {
                    args: Prisma.CertificateCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload>;
                };
                createMany: {
                    args: Prisma.CertificateCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CertificateCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload>[];
                };
                delete: {
                    args: Prisma.CertificateDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload>;
                };
                update: {
                    args: Prisma.CertificateUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload>;
                };
                deleteMany: {
                    args: Prisma.CertificateDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CertificateUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CertificateUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload>[];
                };
                upsert: {
                    args: Prisma.CertificateUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload>;
                };
                aggregate: {
                    args: Prisma.CertificateAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCertificate>;
                };
                groupBy: {
                    args: Prisma.CertificateGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CertificateGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CertificateCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CertificateCountAggregateOutputType> | number;
                };
            };
        };
        AuditLog: {
            payload: Prisma.$AuditLogPayload<ExtArgs>;
            fields: Prisma.AuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findMany: {
                    args: Prisma.AuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                create: {
                    args: Prisma.AuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                createMany: {
                    args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                delete: {
                    args: Prisma.AuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                update: {
                    args: Prisma.AuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                upsert: {
                    args: Prisma.AuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.AuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditLog>;
                };
                groupBy: {
                    args: Prisma.AuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const SchoolScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly code: "code";
    readonly address: "address";
    readonly phone: "phone";
    readonly email: "email";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly name: "name";
    readonly email: "email";
    readonly password: "password";
    readonly role: "role";
    readonly employeeId: "employeeId";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const CourseScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly createdById: "createdById";
    readonly title: "title";
    readonly code: "code";
    readonly description: "description";
    readonly thumbnail: "thumbnail";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum];
export declare const CourseModuleScalarFieldEnum: {
    readonly id: "id";
    readonly courseId: "courseId";
    readonly title: "title";
    readonly description: "description";
    readonly position: "position";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CourseModuleScalarFieldEnum = (typeof CourseModuleScalarFieldEnum)[keyof typeof CourseModuleScalarFieldEnum];
export declare const LessonScalarFieldEnum: {
    readonly id: "id";
    readonly moduleId: "moduleId";
    readonly title: "title";
    readonly description: "description";
    readonly type: "type";
    readonly content: "content";
    readonly position: "position";
    readonly duration: "duration";
    readonly isRequired: "isRequired";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum];
export declare const LessonFileScalarFieldEnum: {
    readonly id: "id";
    readonly lessonId: "lessonId";
    readonly fileName: "fileName";
    readonly fileUrl: "fileUrl";
    readonly fileType: "fileType";
    readonly fileSize: "fileSize";
    readonly mimeType: "mimeType";
    readonly createdAt: "createdAt";
};
export type LessonFileScalarFieldEnum = (typeof LessonFileScalarFieldEnum)[keyof typeof LessonFileScalarFieldEnum];
export declare const EnrollmentScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly courseId: "courseId";
    readonly enrolledAt: "enrolledAt";
    readonly completedAt: "completedAt";
};
export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum];
export declare const LessonProgressScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly lessonId: "lessonId";
    readonly status: "status";
    readonly position: "position";
    readonly percentage: "percentage";
    readonly startedAt: "startedAt";
    readonly completedAt: "completedAt";
    readonly updatedAt: "updatedAt";
};
export type LessonProgressScalarFieldEnum = (typeof LessonProgressScalarFieldEnum)[keyof typeof LessonProgressScalarFieldEnum];
export declare const BookmarkScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly lessonId: "lessonId";
    readonly position: "position";
    readonly note: "note";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BookmarkScalarFieldEnum = (typeof BookmarkScalarFieldEnum)[keyof typeof BookmarkScalarFieldEnum];
export declare const QuizScalarFieldEnum: {
    readonly id: "id";
    readonly courseId: "courseId";
    readonly title: "title";
    readonly description: "description";
    readonly passingScore: "passingScore";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum];
export declare const QuizQuestionScalarFieldEnum: {
    readonly id: "id";
    readonly quizId: "quizId";
    readonly question: "question";
    readonly position: "position";
    readonly marks: "marks";
    readonly createdAt: "createdAt";
};
export type QuizQuestionScalarFieldEnum = (typeof QuizQuestionScalarFieldEnum)[keyof typeof QuizQuestionScalarFieldEnum];
export declare const QuizOptionScalarFieldEnum: {
    readonly id: "id";
    readonly questionId: "questionId";
    readonly optionText: "optionText";
    readonly position: "position";
    readonly isCorrect: "isCorrect";
};
export type QuizOptionScalarFieldEnum = (typeof QuizOptionScalarFieldEnum)[keyof typeof QuizOptionScalarFieldEnum];
export declare const QuizAttemptScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly quizId: "quizId";
    readonly score: "score";
    readonly passed: "passed";
    readonly completed: "completed";
    readonly startedAt: "startedAt";
    readonly completedAt: "completedAt";
};
export type QuizAttemptScalarFieldEnum = (typeof QuizAttemptScalarFieldEnum)[keyof typeof QuizAttemptScalarFieldEnum];
export declare const QuizAnswerScalarFieldEnum: {
    readonly id: "id";
    readonly attemptId: "attemptId";
    readonly questionId: "questionId";
    readonly optionId: "optionId";
    readonly isCorrect: "isCorrect";
    readonly marks: "marks";
};
export type QuizAnswerScalarFieldEnum = (typeof QuizAnswerScalarFieldEnum)[keyof typeof QuizAnswerScalarFieldEnum];
export declare const ImportJobScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly createdById: "createdById";
    readonly fileName: "fileName";
    readonly fileUrl: "fileUrl";
    readonly status: "status";
    readonly totalRows: "totalRows";
    readonly successRows: "successRows";
    readonly failedRows: "failedRows";
    readonly startedAt: "startedAt";
    readonly completedAt: "completedAt";
    readonly createdAt: "createdAt";
};
export type ImportJobScalarFieldEnum = (typeof ImportJobScalarFieldEnum)[keyof typeof ImportJobScalarFieldEnum];
export declare const ImportErrorScalarFieldEnum: {
    readonly id: "id";
    readonly importJobId: "importJobId";
    readonly rowNumber: "rowNumber";
    readonly fieldName: "fieldName";
    readonly message: "message";
    readonly createdAt: "createdAt";
};
export type ImportErrorScalarFieldEnum = (typeof ImportErrorScalarFieldEnum)[keyof typeof ImportErrorScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly title: "title";
    readonly message: "message";
    readonly type: "type";
    readonly isRead: "isRead";
    readonly createdAt: "createdAt";
    readonly readAt: "readAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const CertificateScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly courseId: "courseId";
    readonly certificateNumber: "certificateNumber";
    readonly fileUrl: "fileUrl";
    readonly issuedAt: "issuedAt";
};
export type CertificateScalarFieldEnum = (typeof CertificateScalarFieldEnum)[keyof typeof CertificateScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly action: "action";
    readonly entity: "entity";
    readonly entityId: "entityId";
    readonly details: "details";
    readonly createdAt: "createdAt";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>;
export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>;
export type EnumCourseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseStatus'>;
export type ListEnumCourseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseStatus[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type EnumLessonTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LessonType'>;
export type ListEnumLessonTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LessonType[]'>;
export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>;
export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>;
export type EnumProgressStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgressStatus'>;
export type ListEnumProgressStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgressStatus[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type EnumQuizStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuizStatus'>;
export type ListEnumQuizStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuizStatus[]'>;
export type EnumImportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImportStatus'>;
export type ListEnumImportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImportStatus[]'>;
export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>;
export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    school?: Prisma.SchoolOmit;
    user?: Prisma.UserOmit;
    course?: Prisma.CourseOmit;
    courseModule?: Prisma.CourseModuleOmit;
    lesson?: Prisma.LessonOmit;
    lessonFile?: Prisma.LessonFileOmit;
    enrollment?: Prisma.EnrollmentOmit;
    lessonProgress?: Prisma.LessonProgressOmit;
    bookmark?: Prisma.BookmarkOmit;
    quiz?: Prisma.QuizOmit;
    quizQuestion?: Prisma.QuizQuestionOmit;
    quizOption?: Prisma.QuizOptionOmit;
    quizAttempt?: Prisma.QuizAttemptOmit;
    quizAnswer?: Prisma.QuizAnswerOmit;
    importJob?: Prisma.ImportJobOmit;
    importError?: Prisma.ImportErrorOmit;
    notification?: Prisma.NotificationOmit;
    certificate?: Prisma.CertificateOmit;
    auditLog?: Prisma.AuditLogOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
