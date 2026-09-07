import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type QuizModel = runtime.Types.Result.DefaultSelection<Prisma.$QuizPayload>;
export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null;
    _avg: QuizAvgAggregateOutputType | null;
    _sum: QuizSumAggregateOutputType | null;
    _min: QuizMinAggregateOutputType | null;
    _max: QuizMaxAggregateOutputType | null;
};
export type QuizAvgAggregateOutputType = {
    passingScore: number | null;
};
export type QuizSumAggregateOutputType = {
    passingScore: number | null;
};
export type QuizMinAggregateOutputType = {
    id: string | null;
    courseId: string | null;
    title: string | null;
    description: string | null;
    passingScore: number | null;
    status: $Enums.QuizStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type QuizMaxAggregateOutputType = {
    id: string | null;
    courseId: string | null;
    title: string | null;
    description: string | null;
    passingScore: number | null;
    status: $Enums.QuizStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type QuizCountAggregateOutputType = {
    id: number;
    courseId: number;
    title: number;
    description: number;
    passingScore: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type QuizAvgAggregateInputType = {
    passingScore?: true;
};
export type QuizSumAggregateInputType = {
    passingScore?: true;
};
export type QuizMinAggregateInputType = {
    id?: true;
    courseId?: true;
    title?: true;
    description?: true;
    passingScore?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type QuizMaxAggregateInputType = {
    id?: true;
    courseId?: true;
    title?: true;
    description?: true;
    passingScore?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type QuizCountAggregateInputType = {
    id?: true;
    courseId?: true;
    title?: true;
    description?: true;
    passingScore?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type QuizAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizWhereInput;
    orderBy?: Prisma.QuizOrderByWithRelationInput | Prisma.QuizOrderByWithRelationInput[];
    cursor?: Prisma.QuizWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | QuizCountAggregateInputType;
    _avg?: QuizAvgAggregateInputType;
    _sum?: QuizSumAggregateInputType;
    _min?: QuizMinAggregateInputType;
    _max?: QuizMaxAggregateInputType;
};
export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
    [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuiz[P]> : Prisma.GetScalarType<T[P], AggregateQuiz[P]>;
};
export type QuizGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizWhereInput;
    orderBy?: Prisma.QuizOrderByWithAggregationInput | Prisma.QuizOrderByWithAggregationInput[];
    by: Prisma.QuizScalarFieldEnum[] | Prisma.QuizScalarFieldEnum;
    having?: Prisma.QuizScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuizCountAggregateInputType | true;
    _avg?: QuizAvgAggregateInputType;
    _sum?: QuizSumAggregateInputType;
    _min?: QuizMinAggregateInputType;
    _max?: QuizMaxAggregateInputType;
};
export type QuizGroupByOutputType = {
    id: string;
    courseId: string;
    title: string;
    description: string | null;
    passingScore: number | null;
    status: $Enums.QuizStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: QuizCountAggregateOutputType | null;
    _avg: QuizAvgAggregateOutputType | null;
    _sum: QuizSumAggregateOutputType | null;
    _min: QuizMinAggregateOutputType | null;
    _max: QuizMaxAggregateOutputType | null;
};
export type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<QuizGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], QuizGroupByOutputType[P]> : Prisma.GetScalarType<T[P], QuizGroupByOutputType[P]>;
}>>;
export type QuizWhereInput = {
    AND?: Prisma.QuizWhereInput | Prisma.QuizWhereInput[];
    OR?: Prisma.QuizWhereInput[];
    NOT?: Prisma.QuizWhereInput | Prisma.QuizWhereInput[];
    id?: Prisma.StringFilter<"Quiz"> | string;
    courseId?: Prisma.StringFilter<"Quiz"> | string;
    title?: Prisma.StringFilter<"Quiz"> | string;
    description?: Prisma.StringNullableFilter<"Quiz"> | string | null;
    passingScore?: Prisma.FloatNullableFilter<"Quiz"> | number | null;
    status?: Prisma.EnumQuizStatusFilter<"Quiz"> | $Enums.QuizStatus;
    createdAt?: Prisma.DateTimeFilter<"Quiz"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Quiz"> | Date | string;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
    questions?: Prisma.QuizQuestionListRelationFilter;
    attempts?: Prisma.QuizAttemptListRelationFilter;
};
export type QuizOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    passingScore?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    course?: Prisma.CourseOrderByWithRelationInput;
    questions?: Prisma.QuizQuestionOrderByRelationAggregateInput;
    attempts?: Prisma.QuizAttemptOrderByRelationAggregateInput;
};
export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    courseId?: string;
    AND?: Prisma.QuizWhereInput | Prisma.QuizWhereInput[];
    OR?: Prisma.QuizWhereInput[];
    NOT?: Prisma.QuizWhereInput | Prisma.QuizWhereInput[];
    title?: Prisma.StringFilter<"Quiz"> | string;
    description?: Prisma.StringNullableFilter<"Quiz"> | string | null;
    passingScore?: Prisma.FloatNullableFilter<"Quiz"> | number | null;
    status?: Prisma.EnumQuizStatusFilter<"Quiz"> | $Enums.QuizStatus;
    createdAt?: Prisma.DateTimeFilter<"Quiz"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Quiz"> | Date | string;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
    questions?: Prisma.QuizQuestionListRelationFilter;
    attempts?: Prisma.QuizAttemptListRelationFilter;
}, "id" | "courseId">;
export type QuizOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    passingScore?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.QuizCountOrderByAggregateInput;
    _avg?: Prisma.QuizAvgOrderByAggregateInput;
    _max?: Prisma.QuizMaxOrderByAggregateInput;
    _min?: Prisma.QuizMinOrderByAggregateInput;
    _sum?: Prisma.QuizSumOrderByAggregateInput;
};
export type QuizScalarWhereWithAggregatesInput = {
    AND?: Prisma.QuizScalarWhereWithAggregatesInput | Prisma.QuizScalarWhereWithAggregatesInput[];
    OR?: Prisma.QuizScalarWhereWithAggregatesInput[];
    NOT?: Prisma.QuizScalarWhereWithAggregatesInput | Prisma.QuizScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Quiz"> | string;
    courseId?: Prisma.StringWithAggregatesFilter<"Quiz"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Quiz"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Quiz"> | string | null;
    passingScore?: Prisma.FloatNullableWithAggregatesFilter<"Quiz"> | number | null;
    status?: Prisma.EnumQuizStatusWithAggregatesFilter<"Quiz"> | $Enums.QuizStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Quiz"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Quiz"> | Date | string;
};
export type QuizCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    passingScore?: number | null;
    status?: $Enums.QuizStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    course: Prisma.CourseCreateNestedOneWithoutQuizInput;
    questions?: Prisma.QuizQuestionCreateNestedManyWithoutQuizInput;
    attempts?: Prisma.QuizAttemptCreateNestedManyWithoutQuizInput;
};
export type QuizUncheckedCreateInput = {
    id?: string;
    courseId: string;
    title: string;
    description?: string | null;
    passingScore?: number | null;
    status?: $Enums.QuizStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    questions?: Prisma.QuizQuestionUncheckedCreateNestedManyWithoutQuizInput;
    attempts?: Prisma.QuizAttemptUncheckedCreateNestedManyWithoutQuizInput;
};
export type QuizUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutQuizNestedInput;
    questions?: Prisma.QuizQuestionUpdateManyWithoutQuizNestedInput;
    attempts?: Prisma.QuizAttemptUpdateManyWithoutQuizNestedInput;
};
export type QuizUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    courseId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    questions?: Prisma.QuizQuestionUncheckedUpdateManyWithoutQuizNestedInput;
    attempts?: Prisma.QuizAttemptUncheckedUpdateManyWithoutQuizNestedInput;
};
export type QuizCreateManyInput = {
    id?: string;
    courseId: string;
    title: string;
    description?: string | null;
    passingScore?: number | null;
    status?: $Enums.QuizStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type QuizUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuizUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    courseId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuizNullableScalarRelationFilter = {
    is?: Prisma.QuizWhereInput | null;
    isNot?: Prisma.QuizWhereInput | null;
};
export type QuizCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    passingScore?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type QuizAvgOrderByAggregateInput = {
    passingScore?: Prisma.SortOrder;
};
export type QuizMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    passingScore?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type QuizMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    passingScore?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type QuizSumOrderByAggregateInput = {
    passingScore?: Prisma.SortOrder;
};
export type QuizScalarRelationFilter = {
    is?: Prisma.QuizWhereInput;
    isNot?: Prisma.QuizWhereInput;
};
export type QuizCreateNestedOneWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.QuizCreateWithoutCourseInput, Prisma.QuizUncheckedCreateWithoutCourseInput>;
    connectOrCreate?: Prisma.QuizCreateOrConnectWithoutCourseInput;
    connect?: Prisma.QuizWhereUniqueInput;
};
export type QuizUncheckedCreateNestedOneWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.QuizCreateWithoutCourseInput, Prisma.QuizUncheckedCreateWithoutCourseInput>;
    connectOrCreate?: Prisma.QuizCreateOrConnectWithoutCourseInput;
    connect?: Prisma.QuizWhereUniqueInput;
};
export type QuizUpdateOneWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.QuizCreateWithoutCourseInput, Prisma.QuizUncheckedCreateWithoutCourseInput>;
    connectOrCreate?: Prisma.QuizCreateOrConnectWithoutCourseInput;
    upsert?: Prisma.QuizUpsertWithoutCourseInput;
    disconnect?: Prisma.QuizWhereInput | boolean;
    delete?: Prisma.QuizWhereInput | boolean;
    connect?: Prisma.QuizWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuizUpdateToOneWithWhereWithoutCourseInput, Prisma.QuizUpdateWithoutCourseInput>, Prisma.QuizUncheckedUpdateWithoutCourseInput>;
};
export type QuizUncheckedUpdateOneWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.QuizCreateWithoutCourseInput, Prisma.QuizUncheckedCreateWithoutCourseInput>;
    connectOrCreate?: Prisma.QuizCreateOrConnectWithoutCourseInput;
    upsert?: Prisma.QuizUpsertWithoutCourseInput;
    disconnect?: Prisma.QuizWhereInput | boolean;
    delete?: Prisma.QuizWhereInput | boolean;
    connect?: Prisma.QuizWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuizUpdateToOneWithWhereWithoutCourseInput, Prisma.QuizUpdateWithoutCourseInput>, Prisma.QuizUncheckedUpdateWithoutCourseInput>;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumQuizStatusFieldUpdateOperationsInput = {
    set?: $Enums.QuizStatus;
};
export type QuizCreateNestedOneWithoutQuestionsInput = {
    create?: Prisma.XOR<Prisma.QuizCreateWithoutQuestionsInput, Prisma.QuizUncheckedCreateWithoutQuestionsInput>;
    connectOrCreate?: Prisma.QuizCreateOrConnectWithoutQuestionsInput;
    connect?: Prisma.QuizWhereUniqueInput;
};
export type QuizUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: Prisma.XOR<Prisma.QuizCreateWithoutQuestionsInput, Prisma.QuizUncheckedCreateWithoutQuestionsInput>;
    connectOrCreate?: Prisma.QuizCreateOrConnectWithoutQuestionsInput;
    upsert?: Prisma.QuizUpsertWithoutQuestionsInput;
    connect?: Prisma.QuizWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuizUpdateToOneWithWhereWithoutQuestionsInput, Prisma.QuizUpdateWithoutQuestionsInput>, Prisma.QuizUncheckedUpdateWithoutQuestionsInput>;
};
export type QuizCreateNestedOneWithoutAttemptsInput = {
    create?: Prisma.XOR<Prisma.QuizCreateWithoutAttemptsInput, Prisma.QuizUncheckedCreateWithoutAttemptsInput>;
    connectOrCreate?: Prisma.QuizCreateOrConnectWithoutAttemptsInput;
    connect?: Prisma.QuizWhereUniqueInput;
};
export type QuizUpdateOneRequiredWithoutAttemptsNestedInput = {
    create?: Prisma.XOR<Prisma.QuizCreateWithoutAttemptsInput, Prisma.QuizUncheckedCreateWithoutAttemptsInput>;
    connectOrCreate?: Prisma.QuizCreateOrConnectWithoutAttemptsInput;
    upsert?: Prisma.QuizUpsertWithoutAttemptsInput;
    connect?: Prisma.QuizWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuizUpdateToOneWithWhereWithoutAttemptsInput, Prisma.QuizUpdateWithoutAttemptsInput>, Prisma.QuizUncheckedUpdateWithoutAttemptsInput>;
};
export type QuizCreateWithoutCourseInput = {
    id?: string;
    title: string;
    description?: string | null;
    passingScore?: number | null;
    status?: $Enums.QuizStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    questions?: Prisma.QuizQuestionCreateNestedManyWithoutQuizInput;
    attempts?: Prisma.QuizAttemptCreateNestedManyWithoutQuizInput;
};
export type QuizUncheckedCreateWithoutCourseInput = {
    id?: string;
    title: string;
    description?: string | null;
    passingScore?: number | null;
    status?: $Enums.QuizStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    questions?: Prisma.QuizQuestionUncheckedCreateNestedManyWithoutQuizInput;
    attempts?: Prisma.QuizAttemptUncheckedCreateNestedManyWithoutQuizInput;
};
export type QuizCreateOrConnectWithoutCourseInput = {
    where: Prisma.QuizWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizCreateWithoutCourseInput, Prisma.QuizUncheckedCreateWithoutCourseInput>;
};
export type QuizUpsertWithoutCourseInput = {
    update: Prisma.XOR<Prisma.QuizUpdateWithoutCourseInput, Prisma.QuizUncheckedUpdateWithoutCourseInput>;
    create: Prisma.XOR<Prisma.QuizCreateWithoutCourseInput, Prisma.QuizUncheckedCreateWithoutCourseInput>;
    where?: Prisma.QuizWhereInput;
};
export type QuizUpdateToOneWithWhereWithoutCourseInput = {
    where?: Prisma.QuizWhereInput;
    data: Prisma.XOR<Prisma.QuizUpdateWithoutCourseInput, Prisma.QuizUncheckedUpdateWithoutCourseInput>;
};
export type QuizUpdateWithoutCourseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    questions?: Prisma.QuizQuestionUpdateManyWithoutQuizNestedInput;
    attempts?: Prisma.QuizAttemptUpdateManyWithoutQuizNestedInput;
};
export type QuizUncheckedUpdateWithoutCourseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    questions?: Prisma.QuizQuestionUncheckedUpdateManyWithoutQuizNestedInput;
    attempts?: Prisma.QuizAttemptUncheckedUpdateManyWithoutQuizNestedInput;
};
export type QuizCreateWithoutQuestionsInput = {
    id?: string;
    title: string;
    description?: string | null;
    passingScore?: number | null;
    status?: $Enums.QuizStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    course: Prisma.CourseCreateNestedOneWithoutQuizInput;
    attempts?: Prisma.QuizAttemptCreateNestedManyWithoutQuizInput;
};
export type QuizUncheckedCreateWithoutQuestionsInput = {
    id?: string;
    courseId: string;
    title: string;
    description?: string | null;
    passingScore?: number | null;
    status?: $Enums.QuizStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attempts?: Prisma.QuizAttemptUncheckedCreateNestedManyWithoutQuizInput;
};
export type QuizCreateOrConnectWithoutQuestionsInput = {
    where: Prisma.QuizWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizCreateWithoutQuestionsInput, Prisma.QuizUncheckedCreateWithoutQuestionsInput>;
};
export type QuizUpsertWithoutQuestionsInput = {
    update: Prisma.XOR<Prisma.QuizUpdateWithoutQuestionsInput, Prisma.QuizUncheckedUpdateWithoutQuestionsInput>;
    create: Prisma.XOR<Prisma.QuizCreateWithoutQuestionsInput, Prisma.QuizUncheckedCreateWithoutQuestionsInput>;
    where?: Prisma.QuizWhereInput;
};
export type QuizUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: Prisma.QuizWhereInput;
    data: Prisma.XOR<Prisma.QuizUpdateWithoutQuestionsInput, Prisma.QuizUncheckedUpdateWithoutQuestionsInput>;
};
export type QuizUpdateWithoutQuestionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutQuizNestedInput;
    attempts?: Prisma.QuizAttemptUpdateManyWithoutQuizNestedInput;
};
export type QuizUncheckedUpdateWithoutQuestionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    courseId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attempts?: Prisma.QuizAttemptUncheckedUpdateManyWithoutQuizNestedInput;
};
export type QuizCreateWithoutAttemptsInput = {
    id?: string;
    title: string;
    description?: string | null;
    passingScore?: number | null;
    status?: $Enums.QuizStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    course: Prisma.CourseCreateNestedOneWithoutQuizInput;
    questions?: Prisma.QuizQuestionCreateNestedManyWithoutQuizInput;
};
export type QuizUncheckedCreateWithoutAttemptsInput = {
    id?: string;
    courseId: string;
    title: string;
    description?: string | null;
    passingScore?: number | null;
    status?: $Enums.QuizStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    questions?: Prisma.QuizQuestionUncheckedCreateNestedManyWithoutQuizInput;
};
export type QuizCreateOrConnectWithoutAttemptsInput = {
    where: Prisma.QuizWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizCreateWithoutAttemptsInput, Prisma.QuizUncheckedCreateWithoutAttemptsInput>;
};
export type QuizUpsertWithoutAttemptsInput = {
    update: Prisma.XOR<Prisma.QuizUpdateWithoutAttemptsInput, Prisma.QuizUncheckedUpdateWithoutAttemptsInput>;
    create: Prisma.XOR<Prisma.QuizCreateWithoutAttemptsInput, Prisma.QuizUncheckedCreateWithoutAttemptsInput>;
    where?: Prisma.QuizWhereInput;
};
export type QuizUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: Prisma.QuizWhereInput;
    data: Prisma.XOR<Prisma.QuizUpdateWithoutAttemptsInput, Prisma.QuizUncheckedUpdateWithoutAttemptsInput>;
};
export type QuizUpdateWithoutAttemptsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutQuizNestedInput;
    questions?: Prisma.QuizQuestionUpdateManyWithoutQuizNestedInput;
};
export type QuizUncheckedUpdateWithoutAttemptsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    courseId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    questions?: Prisma.QuizQuestionUncheckedUpdateManyWithoutQuizNestedInput;
};
export type QuizCountOutputType = {
    questions: number;
    attempts: number;
};
export type QuizCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    questions?: boolean | QuizCountOutputTypeCountQuestionsArgs;
    attempts?: boolean | QuizCountOutputTypeCountAttemptsArgs;
};
export type QuizCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizCountOutputTypeSelect<ExtArgs> | null;
};
export type QuizCountOutputTypeCountQuestionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizQuestionWhereInput;
};
export type QuizCountOutputTypeCountAttemptsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizAttemptWhereInput;
};
export type QuizSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    title?: boolean;
    description?: boolean;
    passingScore?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    questions?: boolean | Prisma.Quiz$questionsArgs<ExtArgs>;
    attempts?: boolean | Prisma.Quiz$attemptsArgs<ExtArgs>;
    _count?: boolean | Prisma.QuizCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quiz"]>;
export type QuizSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    title?: boolean;
    description?: boolean;
    passingScore?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quiz"]>;
export type QuizSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    title?: boolean;
    description?: boolean;
    passingScore?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quiz"]>;
export type QuizSelectScalar = {
    id?: boolean;
    courseId?: boolean;
    title?: boolean;
    description?: boolean;
    passingScore?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type QuizOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "courseId" | "title" | "description" | "passingScore" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["quiz"]>;
export type QuizInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    questions?: boolean | Prisma.Quiz$questionsArgs<ExtArgs>;
    attempts?: boolean | Prisma.Quiz$attemptsArgs<ExtArgs>;
    _count?: boolean | Prisma.QuizCountOutputTypeDefaultArgs<ExtArgs>;
};
export type QuizIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
};
export type QuizIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
};
export type $QuizPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Quiz";
    objects: {
        course: Prisma.$CoursePayload<ExtArgs>;
        questions: Prisma.$QuizQuestionPayload<ExtArgs>[];
        attempts: Prisma.$QuizAttemptPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        courseId: string;
        title: string;
        description: string | null;
        passingScore: number | null;
        status: $Enums.QuizStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["quiz"]>;
    composites: {};
};
export type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$QuizPayload, S>;
export type QuizCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QuizCountAggregateInputType | true;
};
export interface QuizDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Quiz'];
        meta: {
            name: 'Quiz';
        };
    };
    findUnique<T extends QuizFindUniqueArgs>(args: Prisma.SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>): Prisma.Prisma__QuizClient<runtime.Types.Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuizClient<runtime.Types.Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends QuizFindFirstArgs>(args?: Prisma.SelectSubset<T, QuizFindFirstArgs<ExtArgs>>): Prisma.Prisma__QuizClient<runtime.Types.Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuizClient<runtime.Types.Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends QuizFindManyArgs>(args?: Prisma.SelectSubset<T, QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends QuizCreateArgs>(args: Prisma.SelectSubset<T, QuizCreateArgs<ExtArgs>>): Prisma.Prisma__QuizClient<runtime.Types.Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends QuizCreateManyArgs>(args?: Prisma.SelectSubset<T, QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends QuizCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, QuizCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends QuizDeleteArgs>(args: Prisma.SelectSubset<T, QuizDeleteArgs<ExtArgs>>): Prisma.Prisma__QuizClient<runtime.Types.Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends QuizUpdateArgs>(args: Prisma.SelectSubset<T, QuizUpdateArgs<ExtArgs>>): Prisma.Prisma__QuizClient<runtime.Types.Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends QuizDeleteManyArgs>(args?: Prisma.SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends QuizUpdateManyArgs>(args: Prisma.SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends QuizUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, QuizUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends QuizUpsertArgs>(args: Prisma.SelectSubset<T, QuizUpsertArgs<ExtArgs>>): Prisma.Prisma__QuizClient<runtime.Types.Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends QuizCountArgs>(args?: Prisma.Subset<T, QuizCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], QuizCountAggregateOutputType> : number>;
    aggregate<T extends QuizAggregateArgs>(args: Prisma.Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>;
    groupBy<T extends QuizGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: QuizGroupByArgs['orderBy'];
    } : {
        orderBy?: QuizGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: QuizFieldRefs;
}
export interface Prisma__QuizClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    course<T extends Prisma.CourseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CourseDefaultArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    questions<T extends Prisma.Quiz$questionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Quiz$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    attempts<T extends Prisma.Quiz$attemptsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Quiz$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface QuizFieldRefs {
    readonly id: Prisma.FieldRef<"Quiz", 'String'>;
    readonly courseId: Prisma.FieldRef<"Quiz", 'String'>;
    readonly title: Prisma.FieldRef<"Quiz", 'String'>;
    readonly description: Prisma.FieldRef<"Quiz", 'String'>;
    readonly passingScore: Prisma.FieldRef<"Quiz", 'Float'>;
    readonly status: Prisma.FieldRef<"Quiz", 'QuizStatus'>;
    readonly createdAt: Prisma.FieldRef<"Quiz", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Quiz", 'DateTime'>;
}
export type QuizFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizSelect<ExtArgs> | null;
    omit?: Prisma.QuizOmit<ExtArgs> | null;
    include?: Prisma.QuizInclude<ExtArgs> | null;
    where: Prisma.QuizWhereUniqueInput;
};
export type QuizFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizSelect<ExtArgs> | null;
    omit?: Prisma.QuizOmit<ExtArgs> | null;
    include?: Prisma.QuizInclude<ExtArgs> | null;
    where: Prisma.QuizWhereUniqueInput;
};
export type QuizFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizSelect<ExtArgs> | null;
    omit?: Prisma.QuizOmit<ExtArgs> | null;
    include?: Prisma.QuizInclude<ExtArgs> | null;
    where?: Prisma.QuizWhereInput;
    orderBy?: Prisma.QuizOrderByWithRelationInput | Prisma.QuizOrderByWithRelationInput[];
    cursor?: Prisma.QuizWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuizScalarFieldEnum | Prisma.QuizScalarFieldEnum[];
};
export type QuizFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizSelect<ExtArgs> | null;
    omit?: Prisma.QuizOmit<ExtArgs> | null;
    include?: Prisma.QuizInclude<ExtArgs> | null;
    where?: Prisma.QuizWhereInput;
    orderBy?: Prisma.QuizOrderByWithRelationInput | Prisma.QuizOrderByWithRelationInput[];
    cursor?: Prisma.QuizWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuizScalarFieldEnum | Prisma.QuizScalarFieldEnum[];
};
export type QuizFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizSelect<ExtArgs> | null;
    omit?: Prisma.QuizOmit<ExtArgs> | null;
    include?: Prisma.QuizInclude<ExtArgs> | null;
    where?: Prisma.QuizWhereInput;
    orderBy?: Prisma.QuizOrderByWithRelationInput | Prisma.QuizOrderByWithRelationInput[];
    cursor?: Prisma.QuizWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuizScalarFieldEnum | Prisma.QuizScalarFieldEnum[];
};
export type QuizCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizSelect<ExtArgs> | null;
    omit?: Prisma.QuizOmit<ExtArgs> | null;
    include?: Prisma.QuizInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizCreateInput, Prisma.QuizUncheckedCreateInput>;
};
export type QuizCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.QuizCreateManyInput | Prisma.QuizCreateManyInput[];
    skipDuplicates?: boolean;
};
export type QuizCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuizOmit<ExtArgs> | null;
    data: Prisma.QuizCreateManyInput | Prisma.QuizCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.QuizIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type QuizUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizSelect<ExtArgs> | null;
    omit?: Prisma.QuizOmit<ExtArgs> | null;
    include?: Prisma.QuizInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizUpdateInput, Prisma.QuizUncheckedUpdateInput>;
    where: Prisma.QuizWhereUniqueInput;
};
export type QuizUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.QuizUpdateManyMutationInput, Prisma.QuizUncheckedUpdateManyInput>;
    where?: Prisma.QuizWhereInput;
    limit?: number;
};
export type QuizUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuizOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizUpdateManyMutationInput, Prisma.QuizUncheckedUpdateManyInput>;
    where?: Prisma.QuizWhereInput;
    limit?: number;
    include?: Prisma.QuizIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type QuizUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizSelect<ExtArgs> | null;
    omit?: Prisma.QuizOmit<ExtArgs> | null;
    include?: Prisma.QuizInclude<ExtArgs> | null;
    where: Prisma.QuizWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizCreateInput, Prisma.QuizUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.QuizUpdateInput, Prisma.QuizUncheckedUpdateInput>;
};
export type QuizDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizSelect<ExtArgs> | null;
    omit?: Prisma.QuizOmit<ExtArgs> | null;
    include?: Prisma.QuizInclude<ExtArgs> | null;
    where: Prisma.QuizWhereUniqueInput;
};
export type QuizDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizWhereInput;
    limit?: number;
};
export type Quiz$questionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizQuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuizQuestionOmit<ExtArgs> | null;
    include?: Prisma.QuizQuestionInclude<ExtArgs> | null;
    where?: Prisma.QuizQuestionWhereInput;
    orderBy?: Prisma.QuizQuestionOrderByWithRelationInput | Prisma.QuizQuestionOrderByWithRelationInput[];
    cursor?: Prisma.QuizQuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuizQuestionScalarFieldEnum | Prisma.QuizQuestionScalarFieldEnum[];
};
export type Quiz$attemptsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptInclude<ExtArgs> | null;
    where?: Prisma.QuizAttemptWhereInput;
    orderBy?: Prisma.QuizAttemptOrderByWithRelationInput | Prisma.QuizAttemptOrderByWithRelationInput[];
    cursor?: Prisma.QuizAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuizAttemptScalarFieldEnum | Prisma.QuizAttemptScalarFieldEnum[];
};
export type QuizDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizSelect<ExtArgs> | null;
    omit?: Prisma.QuizOmit<ExtArgs> | null;
    include?: Prisma.QuizInclude<ExtArgs> | null;
};
