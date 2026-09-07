import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type QuizAttemptModel = runtime.Types.Result.DefaultSelection<Prisma.$QuizAttemptPayload>;
export type AggregateQuizAttempt = {
    _count: QuizAttemptCountAggregateOutputType | null;
    _avg: QuizAttemptAvgAggregateOutputType | null;
    _sum: QuizAttemptSumAggregateOutputType | null;
    _min: QuizAttemptMinAggregateOutputType | null;
    _max: QuizAttemptMaxAggregateOutputType | null;
};
export type QuizAttemptAvgAggregateOutputType = {
    score: number | null;
};
export type QuizAttemptSumAggregateOutputType = {
    score: number | null;
};
export type QuizAttemptMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    quizId: string | null;
    score: number | null;
    passed: boolean | null;
    completed: boolean | null;
    startedAt: Date | null;
    completedAt: Date | null;
};
export type QuizAttemptMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    quizId: string | null;
    score: number | null;
    passed: boolean | null;
    completed: boolean | null;
    startedAt: Date | null;
    completedAt: Date | null;
};
export type QuizAttemptCountAggregateOutputType = {
    id: number;
    userId: number;
    quizId: number;
    score: number;
    passed: number;
    completed: number;
    startedAt: number;
    completedAt: number;
    _all: number;
};
export type QuizAttemptAvgAggregateInputType = {
    score?: true;
};
export type QuizAttemptSumAggregateInputType = {
    score?: true;
};
export type QuizAttemptMinAggregateInputType = {
    id?: true;
    userId?: true;
    quizId?: true;
    score?: true;
    passed?: true;
    completed?: true;
    startedAt?: true;
    completedAt?: true;
};
export type QuizAttemptMaxAggregateInputType = {
    id?: true;
    userId?: true;
    quizId?: true;
    score?: true;
    passed?: true;
    completed?: true;
    startedAt?: true;
    completedAt?: true;
};
export type QuizAttemptCountAggregateInputType = {
    id?: true;
    userId?: true;
    quizId?: true;
    score?: true;
    passed?: true;
    completed?: true;
    startedAt?: true;
    completedAt?: true;
    _all?: true;
};
export type QuizAttemptAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizAttemptWhereInput;
    orderBy?: Prisma.QuizAttemptOrderByWithRelationInput | Prisma.QuizAttemptOrderByWithRelationInput[];
    cursor?: Prisma.QuizAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | QuizAttemptCountAggregateInputType;
    _avg?: QuizAttemptAvgAggregateInputType;
    _sum?: QuizAttemptSumAggregateInputType;
    _min?: QuizAttemptMinAggregateInputType;
    _max?: QuizAttemptMaxAggregateInputType;
};
export type GetQuizAttemptAggregateType<T extends QuizAttemptAggregateArgs> = {
    [P in keyof T & keyof AggregateQuizAttempt]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuizAttempt[P]> : Prisma.GetScalarType<T[P], AggregateQuizAttempt[P]>;
};
export type QuizAttemptGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizAttemptWhereInput;
    orderBy?: Prisma.QuizAttemptOrderByWithAggregationInput | Prisma.QuizAttemptOrderByWithAggregationInput[];
    by: Prisma.QuizAttemptScalarFieldEnum[] | Prisma.QuizAttemptScalarFieldEnum;
    having?: Prisma.QuizAttemptScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuizAttemptCountAggregateInputType | true;
    _avg?: QuizAttemptAvgAggregateInputType;
    _sum?: QuizAttemptSumAggregateInputType;
    _min?: QuizAttemptMinAggregateInputType;
    _max?: QuizAttemptMaxAggregateInputType;
};
export type QuizAttemptGroupByOutputType = {
    id: string;
    userId: string;
    quizId: string;
    score: number | null;
    passed: boolean | null;
    completed: boolean;
    startedAt: Date;
    completedAt: Date | null;
    _count: QuizAttemptCountAggregateOutputType | null;
    _avg: QuizAttemptAvgAggregateOutputType | null;
    _sum: QuizAttemptSumAggregateOutputType | null;
    _min: QuizAttemptMinAggregateOutputType | null;
    _max: QuizAttemptMaxAggregateOutputType | null;
};
export type GetQuizAttemptGroupByPayload<T extends QuizAttemptGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<QuizAttemptGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QuizAttemptGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], QuizAttemptGroupByOutputType[P]> : Prisma.GetScalarType<T[P], QuizAttemptGroupByOutputType[P]>;
}>>;
export type QuizAttemptWhereInput = {
    AND?: Prisma.QuizAttemptWhereInput | Prisma.QuizAttemptWhereInput[];
    OR?: Prisma.QuizAttemptWhereInput[];
    NOT?: Prisma.QuizAttemptWhereInput | Prisma.QuizAttemptWhereInput[];
    id?: Prisma.StringFilter<"QuizAttempt"> | string;
    userId?: Prisma.StringFilter<"QuizAttempt"> | string;
    quizId?: Prisma.StringFilter<"QuizAttempt"> | string;
    score?: Prisma.FloatNullableFilter<"QuizAttempt"> | number | null;
    passed?: Prisma.BoolNullableFilter<"QuizAttempt"> | boolean | null;
    completed?: Prisma.BoolFilter<"QuizAttempt"> | boolean;
    startedAt?: Prisma.DateTimeFilter<"QuizAttempt"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"QuizAttempt"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    quiz?: Prisma.XOR<Prisma.QuizScalarRelationFilter, Prisma.QuizWhereInput>;
    answers?: Prisma.QuizAnswerListRelationFilter;
};
export type QuizAttemptOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    quizId?: Prisma.SortOrder;
    score?: Prisma.SortOrderInput | Prisma.SortOrder;
    passed?: Prisma.SortOrderInput | Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    quiz?: Prisma.QuizOrderByWithRelationInput;
    answers?: Prisma.QuizAnswerOrderByRelationAggregateInput;
};
export type QuizAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.QuizAttemptWhereInput | Prisma.QuizAttemptWhereInput[];
    OR?: Prisma.QuizAttemptWhereInput[];
    NOT?: Prisma.QuizAttemptWhereInput | Prisma.QuizAttemptWhereInput[];
    userId?: Prisma.StringFilter<"QuizAttempt"> | string;
    quizId?: Prisma.StringFilter<"QuizAttempt"> | string;
    score?: Prisma.FloatNullableFilter<"QuizAttempt"> | number | null;
    passed?: Prisma.BoolNullableFilter<"QuizAttempt"> | boolean | null;
    completed?: Prisma.BoolFilter<"QuizAttempt"> | boolean;
    startedAt?: Prisma.DateTimeFilter<"QuizAttempt"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"QuizAttempt"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    quiz?: Prisma.XOR<Prisma.QuizScalarRelationFilter, Prisma.QuizWhereInput>;
    answers?: Prisma.QuizAnswerListRelationFilter;
}, "id">;
export type QuizAttemptOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    quizId?: Prisma.SortOrder;
    score?: Prisma.SortOrderInput | Prisma.SortOrder;
    passed?: Prisma.SortOrderInput | Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.QuizAttemptCountOrderByAggregateInput;
    _avg?: Prisma.QuizAttemptAvgOrderByAggregateInput;
    _max?: Prisma.QuizAttemptMaxOrderByAggregateInput;
    _min?: Prisma.QuizAttemptMinOrderByAggregateInput;
    _sum?: Prisma.QuizAttemptSumOrderByAggregateInput;
};
export type QuizAttemptScalarWhereWithAggregatesInput = {
    AND?: Prisma.QuizAttemptScalarWhereWithAggregatesInput | Prisma.QuizAttemptScalarWhereWithAggregatesInput[];
    OR?: Prisma.QuizAttemptScalarWhereWithAggregatesInput[];
    NOT?: Prisma.QuizAttemptScalarWhereWithAggregatesInput | Prisma.QuizAttemptScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"QuizAttempt"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"QuizAttempt"> | string;
    quizId?: Prisma.StringWithAggregatesFilter<"QuizAttempt"> | string;
    score?: Prisma.FloatNullableWithAggregatesFilter<"QuizAttempt"> | number | null;
    passed?: Prisma.BoolNullableWithAggregatesFilter<"QuizAttempt"> | boolean | null;
    completed?: Prisma.BoolWithAggregatesFilter<"QuizAttempt"> | boolean;
    startedAt?: Prisma.DateTimeWithAggregatesFilter<"QuizAttempt"> | Date | string;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"QuizAttempt"> | Date | string | null;
};
export type QuizAttemptCreateInput = {
    id?: string;
    score?: number | null;
    passed?: boolean | null;
    completed?: boolean;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutQuizAttemptsInput;
    quiz: Prisma.QuizCreateNestedOneWithoutAttemptsInput;
    answers?: Prisma.QuizAnswerCreateNestedManyWithoutAttemptInput;
};
export type QuizAttemptUncheckedCreateInput = {
    id?: string;
    userId: string;
    quizId: string;
    score?: number | null;
    passed?: boolean | null;
    completed?: boolean;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    answers?: Prisma.QuizAnswerUncheckedCreateNestedManyWithoutAttemptInput;
};
export type QuizAttemptUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    passed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutQuizAttemptsNestedInput;
    quiz?: Prisma.QuizUpdateOneRequiredWithoutAttemptsNestedInput;
    answers?: Prisma.QuizAnswerUpdateManyWithoutAttemptNestedInput;
};
export type QuizAttemptUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    quizId?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    passed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    answers?: Prisma.QuizAnswerUncheckedUpdateManyWithoutAttemptNestedInput;
};
export type QuizAttemptCreateManyInput = {
    id?: string;
    userId: string;
    quizId: string;
    score?: number | null;
    passed?: boolean | null;
    completed?: boolean;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
};
export type QuizAttemptUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    passed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type QuizAttemptUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    quizId?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    passed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type QuizAttemptListRelationFilter = {
    every?: Prisma.QuizAttemptWhereInput;
    some?: Prisma.QuizAttemptWhereInput;
    none?: Prisma.QuizAttemptWhereInput;
};
export type QuizAttemptOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type QuizAttemptCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    quizId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    passed?: Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
};
export type QuizAttemptAvgOrderByAggregateInput = {
    score?: Prisma.SortOrder;
};
export type QuizAttemptMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    quizId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    passed?: Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
};
export type QuizAttemptMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    quizId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    passed?: Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
};
export type QuizAttemptSumOrderByAggregateInput = {
    score?: Prisma.SortOrder;
};
export type QuizAttemptScalarRelationFilter = {
    is?: Prisma.QuizAttemptWhereInput;
    isNot?: Prisma.QuizAttemptWhereInput;
};
export type QuizAttemptCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptCreateWithoutUserInput, Prisma.QuizAttemptUncheckedCreateWithoutUserInput> | Prisma.QuizAttemptCreateWithoutUserInput[] | Prisma.QuizAttemptUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.QuizAttemptCreateOrConnectWithoutUserInput | Prisma.QuizAttemptCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.QuizAttemptCreateManyUserInputEnvelope;
    connect?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
};
export type QuizAttemptUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptCreateWithoutUserInput, Prisma.QuizAttemptUncheckedCreateWithoutUserInput> | Prisma.QuizAttemptCreateWithoutUserInput[] | Prisma.QuizAttemptUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.QuizAttemptCreateOrConnectWithoutUserInput | Prisma.QuizAttemptCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.QuizAttemptCreateManyUserInputEnvelope;
    connect?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
};
export type QuizAttemptUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptCreateWithoutUserInput, Prisma.QuizAttemptUncheckedCreateWithoutUserInput> | Prisma.QuizAttemptCreateWithoutUserInput[] | Prisma.QuizAttemptUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.QuizAttemptCreateOrConnectWithoutUserInput | Prisma.QuizAttemptCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.QuizAttemptUpsertWithWhereUniqueWithoutUserInput | Prisma.QuizAttemptUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.QuizAttemptCreateManyUserInputEnvelope;
    set?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    disconnect?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    delete?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    connect?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    update?: Prisma.QuizAttemptUpdateWithWhereUniqueWithoutUserInput | Prisma.QuizAttemptUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.QuizAttemptUpdateManyWithWhereWithoutUserInput | Prisma.QuizAttemptUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.QuizAttemptScalarWhereInput | Prisma.QuizAttemptScalarWhereInput[];
};
export type QuizAttemptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptCreateWithoutUserInput, Prisma.QuizAttemptUncheckedCreateWithoutUserInput> | Prisma.QuizAttemptCreateWithoutUserInput[] | Prisma.QuizAttemptUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.QuizAttemptCreateOrConnectWithoutUserInput | Prisma.QuizAttemptCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.QuizAttemptUpsertWithWhereUniqueWithoutUserInput | Prisma.QuizAttemptUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.QuizAttemptCreateManyUserInputEnvelope;
    set?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    disconnect?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    delete?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    connect?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    update?: Prisma.QuizAttemptUpdateWithWhereUniqueWithoutUserInput | Prisma.QuizAttemptUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.QuizAttemptUpdateManyWithWhereWithoutUserInput | Prisma.QuizAttemptUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.QuizAttemptScalarWhereInput | Prisma.QuizAttemptScalarWhereInput[];
};
export type QuizAttemptCreateNestedManyWithoutQuizInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptCreateWithoutQuizInput, Prisma.QuizAttemptUncheckedCreateWithoutQuizInput> | Prisma.QuizAttemptCreateWithoutQuizInput[] | Prisma.QuizAttemptUncheckedCreateWithoutQuizInput[];
    connectOrCreate?: Prisma.QuizAttemptCreateOrConnectWithoutQuizInput | Prisma.QuizAttemptCreateOrConnectWithoutQuizInput[];
    createMany?: Prisma.QuizAttemptCreateManyQuizInputEnvelope;
    connect?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
};
export type QuizAttemptUncheckedCreateNestedManyWithoutQuizInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptCreateWithoutQuizInput, Prisma.QuizAttemptUncheckedCreateWithoutQuizInput> | Prisma.QuizAttemptCreateWithoutQuizInput[] | Prisma.QuizAttemptUncheckedCreateWithoutQuizInput[];
    connectOrCreate?: Prisma.QuizAttemptCreateOrConnectWithoutQuizInput | Prisma.QuizAttemptCreateOrConnectWithoutQuizInput[];
    createMany?: Prisma.QuizAttemptCreateManyQuizInputEnvelope;
    connect?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
};
export type QuizAttemptUpdateManyWithoutQuizNestedInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptCreateWithoutQuizInput, Prisma.QuizAttemptUncheckedCreateWithoutQuizInput> | Prisma.QuizAttemptCreateWithoutQuizInput[] | Prisma.QuizAttemptUncheckedCreateWithoutQuizInput[];
    connectOrCreate?: Prisma.QuizAttemptCreateOrConnectWithoutQuizInput | Prisma.QuizAttemptCreateOrConnectWithoutQuizInput[];
    upsert?: Prisma.QuizAttemptUpsertWithWhereUniqueWithoutQuizInput | Prisma.QuizAttemptUpsertWithWhereUniqueWithoutQuizInput[];
    createMany?: Prisma.QuizAttemptCreateManyQuizInputEnvelope;
    set?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    disconnect?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    delete?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    connect?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    update?: Prisma.QuizAttemptUpdateWithWhereUniqueWithoutQuizInput | Prisma.QuizAttemptUpdateWithWhereUniqueWithoutQuizInput[];
    updateMany?: Prisma.QuizAttemptUpdateManyWithWhereWithoutQuizInput | Prisma.QuizAttemptUpdateManyWithWhereWithoutQuizInput[];
    deleteMany?: Prisma.QuizAttemptScalarWhereInput | Prisma.QuizAttemptScalarWhereInput[];
};
export type QuizAttemptUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptCreateWithoutQuizInput, Prisma.QuizAttemptUncheckedCreateWithoutQuizInput> | Prisma.QuizAttemptCreateWithoutQuizInput[] | Prisma.QuizAttemptUncheckedCreateWithoutQuizInput[];
    connectOrCreate?: Prisma.QuizAttemptCreateOrConnectWithoutQuizInput | Prisma.QuizAttemptCreateOrConnectWithoutQuizInput[];
    upsert?: Prisma.QuizAttemptUpsertWithWhereUniqueWithoutQuizInput | Prisma.QuizAttemptUpsertWithWhereUniqueWithoutQuizInput[];
    createMany?: Prisma.QuizAttemptCreateManyQuizInputEnvelope;
    set?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    disconnect?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    delete?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    connect?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    update?: Prisma.QuizAttemptUpdateWithWhereUniqueWithoutQuizInput | Prisma.QuizAttemptUpdateWithWhereUniqueWithoutQuizInput[];
    updateMany?: Prisma.QuizAttemptUpdateManyWithWhereWithoutQuizInput | Prisma.QuizAttemptUpdateManyWithWhereWithoutQuizInput[];
    deleteMany?: Prisma.QuizAttemptScalarWhereInput | Prisma.QuizAttemptScalarWhereInput[];
};
export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
};
export type QuizAttemptCreateNestedOneWithoutAnswersInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptCreateWithoutAnswersInput, Prisma.QuizAttemptUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.QuizAttemptCreateOrConnectWithoutAnswersInput;
    connect?: Prisma.QuizAttemptWhereUniqueInput;
};
export type QuizAttemptUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptCreateWithoutAnswersInput, Prisma.QuizAttemptUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.QuizAttemptCreateOrConnectWithoutAnswersInput;
    upsert?: Prisma.QuizAttemptUpsertWithoutAnswersInput;
    connect?: Prisma.QuizAttemptWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuizAttemptUpdateToOneWithWhereWithoutAnswersInput, Prisma.QuizAttemptUpdateWithoutAnswersInput>, Prisma.QuizAttemptUncheckedUpdateWithoutAnswersInput>;
};
export type QuizAttemptCreateWithoutUserInput = {
    id?: string;
    score?: number | null;
    passed?: boolean | null;
    completed?: boolean;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    quiz: Prisma.QuizCreateNestedOneWithoutAttemptsInput;
    answers?: Prisma.QuizAnswerCreateNestedManyWithoutAttemptInput;
};
export type QuizAttemptUncheckedCreateWithoutUserInput = {
    id?: string;
    quizId: string;
    score?: number | null;
    passed?: boolean | null;
    completed?: boolean;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    answers?: Prisma.QuizAnswerUncheckedCreateNestedManyWithoutAttemptInput;
};
export type QuizAttemptCreateOrConnectWithoutUserInput = {
    where: Prisma.QuizAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizAttemptCreateWithoutUserInput, Prisma.QuizAttemptUncheckedCreateWithoutUserInput>;
};
export type QuizAttemptCreateManyUserInputEnvelope = {
    data: Prisma.QuizAttemptCreateManyUserInput | Prisma.QuizAttemptCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type QuizAttemptUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.QuizAttemptWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuizAttemptUpdateWithoutUserInput, Prisma.QuizAttemptUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.QuizAttemptCreateWithoutUserInput, Prisma.QuizAttemptUncheckedCreateWithoutUserInput>;
};
export type QuizAttemptUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.QuizAttemptWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuizAttemptUpdateWithoutUserInput, Prisma.QuizAttemptUncheckedUpdateWithoutUserInput>;
};
export type QuizAttemptUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.QuizAttemptScalarWhereInput;
    data: Prisma.XOR<Prisma.QuizAttemptUpdateManyMutationInput, Prisma.QuizAttemptUncheckedUpdateManyWithoutUserInput>;
};
export type QuizAttemptScalarWhereInput = {
    AND?: Prisma.QuizAttemptScalarWhereInput | Prisma.QuizAttemptScalarWhereInput[];
    OR?: Prisma.QuizAttemptScalarWhereInput[];
    NOT?: Prisma.QuizAttemptScalarWhereInput | Prisma.QuizAttemptScalarWhereInput[];
    id?: Prisma.StringFilter<"QuizAttempt"> | string;
    userId?: Prisma.StringFilter<"QuizAttempt"> | string;
    quizId?: Prisma.StringFilter<"QuizAttempt"> | string;
    score?: Prisma.FloatNullableFilter<"QuizAttempt"> | number | null;
    passed?: Prisma.BoolNullableFilter<"QuizAttempt"> | boolean | null;
    completed?: Prisma.BoolFilter<"QuizAttempt"> | boolean;
    startedAt?: Prisma.DateTimeFilter<"QuizAttempt"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"QuizAttempt"> | Date | string | null;
};
export type QuizAttemptCreateWithoutQuizInput = {
    id?: string;
    score?: number | null;
    passed?: boolean | null;
    completed?: boolean;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutQuizAttemptsInput;
    answers?: Prisma.QuizAnswerCreateNestedManyWithoutAttemptInput;
};
export type QuizAttemptUncheckedCreateWithoutQuizInput = {
    id?: string;
    userId: string;
    score?: number | null;
    passed?: boolean | null;
    completed?: boolean;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    answers?: Prisma.QuizAnswerUncheckedCreateNestedManyWithoutAttemptInput;
};
export type QuizAttemptCreateOrConnectWithoutQuizInput = {
    where: Prisma.QuizAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizAttemptCreateWithoutQuizInput, Prisma.QuizAttemptUncheckedCreateWithoutQuizInput>;
};
export type QuizAttemptCreateManyQuizInputEnvelope = {
    data: Prisma.QuizAttemptCreateManyQuizInput | Prisma.QuizAttemptCreateManyQuizInput[];
    skipDuplicates?: boolean;
};
export type QuizAttemptUpsertWithWhereUniqueWithoutQuizInput = {
    where: Prisma.QuizAttemptWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuizAttemptUpdateWithoutQuizInput, Prisma.QuizAttemptUncheckedUpdateWithoutQuizInput>;
    create: Prisma.XOR<Prisma.QuizAttemptCreateWithoutQuizInput, Prisma.QuizAttemptUncheckedCreateWithoutQuizInput>;
};
export type QuizAttemptUpdateWithWhereUniqueWithoutQuizInput = {
    where: Prisma.QuizAttemptWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuizAttemptUpdateWithoutQuizInput, Prisma.QuizAttemptUncheckedUpdateWithoutQuizInput>;
};
export type QuizAttemptUpdateManyWithWhereWithoutQuizInput = {
    where: Prisma.QuizAttemptScalarWhereInput;
    data: Prisma.XOR<Prisma.QuizAttemptUpdateManyMutationInput, Prisma.QuizAttemptUncheckedUpdateManyWithoutQuizInput>;
};
export type QuizAttemptCreateWithoutAnswersInput = {
    id?: string;
    score?: number | null;
    passed?: boolean | null;
    completed?: boolean;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutQuizAttemptsInput;
    quiz: Prisma.QuizCreateNestedOneWithoutAttemptsInput;
};
export type QuizAttemptUncheckedCreateWithoutAnswersInput = {
    id?: string;
    userId: string;
    quizId: string;
    score?: number | null;
    passed?: boolean | null;
    completed?: boolean;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
};
export type QuizAttemptCreateOrConnectWithoutAnswersInput = {
    where: Prisma.QuizAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizAttemptCreateWithoutAnswersInput, Prisma.QuizAttemptUncheckedCreateWithoutAnswersInput>;
};
export type QuizAttemptUpsertWithoutAnswersInput = {
    update: Prisma.XOR<Prisma.QuizAttemptUpdateWithoutAnswersInput, Prisma.QuizAttemptUncheckedUpdateWithoutAnswersInput>;
    create: Prisma.XOR<Prisma.QuizAttemptCreateWithoutAnswersInput, Prisma.QuizAttemptUncheckedCreateWithoutAnswersInput>;
    where?: Prisma.QuizAttemptWhereInput;
};
export type QuizAttemptUpdateToOneWithWhereWithoutAnswersInput = {
    where?: Prisma.QuizAttemptWhereInput;
    data: Prisma.XOR<Prisma.QuizAttemptUpdateWithoutAnswersInput, Prisma.QuizAttemptUncheckedUpdateWithoutAnswersInput>;
};
export type QuizAttemptUpdateWithoutAnswersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    passed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutQuizAttemptsNestedInput;
    quiz?: Prisma.QuizUpdateOneRequiredWithoutAttemptsNestedInput;
};
export type QuizAttemptUncheckedUpdateWithoutAnswersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    quizId?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    passed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type QuizAttemptCreateManyUserInput = {
    id?: string;
    quizId: string;
    score?: number | null;
    passed?: boolean | null;
    completed?: boolean;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
};
export type QuizAttemptUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    passed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    quiz?: Prisma.QuizUpdateOneRequiredWithoutAttemptsNestedInput;
    answers?: Prisma.QuizAnswerUpdateManyWithoutAttemptNestedInput;
};
export type QuizAttemptUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quizId?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    passed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    answers?: Prisma.QuizAnswerUncheckedUpdateManyWithoutAttemptNestedInput;
};
export type QuizAttemptUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quizId?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    passed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type QuizAttemptCreateManyQuizInput = {
    id?: string;
    userId: string;
    score?: number | null;
    passed?: boolean | null;
    completed?: boolean;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
};
export type QuizAttemptUpdateWithoutQuizInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    passed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutQuizAttemptsNestedInput;
    answers?: Prisma.QuizAnswerUpdateManyWithoutAttemptNestedInput;
};
export type QuizAttemptUncheckedUpdateWithoutQuizInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    passed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    answers?: Prisma.QuizAnswerUncheckedUpdateManyWithoutAttemptNestedInput;
};
export type QuizAttemptUncheckedUpdateManyWithoutQuizInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    passed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type QuizAttemptCountOutputType = {
    answers: number;
};
export type QuizAttemptCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    answers?: boolean | QuizAttemptCountOutputTypeCountAnswersArgs;
};
export type QuizAttemptCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptCountOutputTypeSelect<ExtArgs> | null;
};
export type QuizAttemptCountOutputTypeCountAnswersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizAnswerWhereInput;
};
export type QuizAttemptSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    quizId?: boolean;
    score?: boolean;
    passed?: boolean;
    completed?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    quiz?: boolean | Prisma.QuizDefaultArgs<ExtArgs>;
    answers?: boolean | Prisma.QuizAttempt$answersArgs<ExtArgs>;
    _count?: boolean | Prisma.QuizAttemptCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quizAttempt"]>;
export type QuizAttemptSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    quizId?: boolean;
    score?: boolean;
    passed?: boolean;
    completed?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    quiz?: boolean | Prisma.QuizDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quizAttempt"]>;
export type QuizAttemptSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    quizId?: boolean;
    score?: boolean;
    passed?: boolean;
    completed?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    quiz?: boolean | Prisma.QuizDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quizAttempt"]>;
export type QuizAttemptSelectScalar = {
    id?: boolean;
    userId?: boolean;
    quizId?: boolean;
    score?: boolean;
    passed?: boolean;
    completed?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
};
export type QuizAttemptOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "quizId" | "score" | "passed" | "completed" | "startedAt" | "completedAt", ExtArgs["result"]["quizAttempt"]>;
export type QuizAttemptInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    quiz?: boolean | Prisma.QuizDefaultArgs<ExtArgs>;
    answers?: boolean | Prisma.QuizAttempt$answersArgs<ExtArgs>;
    _count?: boolean | Prisma.QuizAttemptCountOutputTypeDefaultArgs<ExtArgs>;
};
export type QuizAttemptIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    quiz?: boolean | Prisma.QuizDefaultArgs<ExtArgs>;
};
export type QuizAttemptIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    quiz?: boolean | Prisma.QuizDefaultArgs<ExtArgs>;
};
export type $QuizAttemptPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "QuizAttempt";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        quiz: Prisma.$QuizPayload<ExtArgs>;
        answers: Prisma.$QuizAnswerPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        quizId: string;
        score: number | null;
        passed: boolean | null;
        completed: boolean;
        startedAt: Date;
        completedAt: Date | null;
    }, ExtArgs["result"]["quizAttempt"]>;
    composites: {};
};
export type QuizAttemptGetPayload<S extends boolean | null | undefined | QuizAttemptDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload, S>;
export type QuizAttemptCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<QuizAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QuizAttemptCountAggregateInputType | true;
};
export interface QuizAttemptDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['QuizAttempt'];
        meta: {
            name: 'QuizAttempt';
        };
    };
    findUnique<T extends QuizAttemptFindUniqueArgs>(args: Prisma.SelectSubset<T, QuizAttemptFindUniqueArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends QuizAttemptFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, QuizAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends QuizAttemptFindFirstArgs>(args?: Prisma.SelectSubset<T, QuizAttemptFindFirstArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends QuizAttemptFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, QuizAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends QuizAttemptFindManyArgs>(args?: Prisma.SelectSubset<T, QuizAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends QuizAttemptCreateArgs>(args: Prisma.SelectSubset<T, QuizAttemptCreateArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends QuizAttemptCreateManyArgs>(args?: Prisma.SelectSubset<T, QuizAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends QuizAttemptCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, QuizAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends QuizAttemptDeleteArgs>(args: Prisma.SelectSubset<T, QuizAttemptDeleteArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends QuizAttemptUpdateArgs>(args: Prisma.SelectSubset<T, QuizAttemptUpdateArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends QuizAttemptDeleteManyArgs>(args?: Prisma.SelectSubset<T, QuizAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends QuizAttemptUpdateManyArgs>(args: Prisma.SelectSubset<T, QuizAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends QuizAttemptUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, QuizAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends QuizAttemptUpsertArgs>(args: Prisma.SelectSubset<T, QuizAttemptUpsertArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends QuizAttemptCountArgs>(args?: Prisma.Subset<T, QuizAttemptCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], QuizAttemptCountAggregateOutputType> : number>;
    aggregate<T extends QuizAttemptAggregateArgs>(args: Prisma.Subset<T, QuizAttemptAggregateArgs>): Prisma.PrismaPromise<GetQuizAttemptAggregateType<T>>;
    groupBy<T extends QuizAttemptGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: QuizAttemptGroupByArgs['orderBy'];
    } : {
        orderBy?: QuizAttemptGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, QuizAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: QuizAttemptFieldRefs;
}
export interface Prisma__QuizAttemptClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    quiz<T extends Prisma.QuizDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuizDefaultArgs<ExtArgs>>): Prisma.Prisma__QuizClient<runtime.Types.Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    answers<T extends Prisma.QuizAttempt$answersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuizAttempt$answersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface QuizAttemptFieldRefs {
    readonly id: Prisma.FieldRef<"QuizAttempt", 'String'>;
    readonly userId: Prisma.FieldRef<"QuizAttempt", 'String'>;
    readonly quizId: Prisma.FieldRef<"QuizAttempt", 'String'>;
    readonly score: Prisma.FieldRef<"QuizAttempt", 'Float'>;
    readonly passed: Prisma.FieldRef<"QuizAttempt", 'Boolean'>;
    readonly completed: Prisma.FieldRef<"QuizAttempt", 'Boolean'>;
    readonly startedAt: Prisma.FieldRef<"QuizAttempt", 'DateTime'>;
    readonly completedAt: Prisma.FieldRef<"QuizAttempt", 'DateTime'>;
}
export type QuizAttemptFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptInclude<ExtArgs> | null;
    where: Prisma.QuizAttemptWhereUniqueInput;
};
export type QuizAttemptFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptInclude<ExtArgs> | null;
    where: Prisma.QuizAttemptWhereUniqueInput;
};
export type QuizAttemptFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuizAttemptFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuizAttemptFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuizAttemptCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizAttemptCreateInput, Prisma.QuizAttemptUncheckedCreateInput>;
};
export type QuizAttemptCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.QuizAttemptCreateManyInput | Prisma.QuizAttemptCreateManyInput[];
    skipDuplicates?: boolean;
};
export type QuizAttemptCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuizAttemptOmit<ExtArgs> | null;
    data: Prisma.QuizAttemptCreateManyInput | Prisma.QuizAttemptCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.QuizAttemptIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type QuizAttemptUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizAttemptUpdateInput, Prisma.QuizAttemptUncheckedUpdateInput>;
    where: Prisma.QuizAttemptWhereUniqueInput;
};
export type QuizAttemptUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.QuizAttemptUpdateManyMutationInput, Prisma.QuizAttemptUncheckedUpdateManyInput>;
    where?: Prisma.QuizAttemptWhereInput;
    limit?: number;
};
export type QuizAttemptUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuizAttemptOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizAttemptUpdateManyMutationInput, Prisma.QuizAttemptUncheckedUpdateManyInput>;
    where?: Prisma.QuizAttemptWhereInput;
    limit?: number;
    include?: Prisma.QuizAttemptIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type QuizAttemptUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptInclude<ExtArgs> | null;
    where: Prisma.QuizAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizAttemptCreateInput, Prisma.QuizAttemptUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.QuizAttemptUpdateInput, Prisma.QuizAttemptUncheckedUpdateInput>;
};
export type QuizAttemptDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptInclude<ExtArgs> | null;
    where: Prisma.QuizAttemptWhereUniqueInput;
};
export type QuizAttemptDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizAttemptWhereInput;
    limit?: number;
};
export type QuizAttempt$answersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAnswerSelect<ExtArgs> | null;
    omit?: Prisma.QuizAnswerOmit<ExtArgs> | null;
    include?: Prisma.QuizAnswerInclude<ExtArgs> | null;
    where?: Prisma.QuizAnswerWhereInput;
    orderBy?: Prisma.QuizAnswerOrderByWithRelationInput | Prisma.QuizAnswerOrderByWithRelationInput[];
    cursor?: Prisma.QuizAnswerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuizAnswerScalarFieldEnum | Prisma.QuizAnswerScalarFieldEnum[];
};
export type QuizAttemptDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptInclude<ExtArgs> | null;
};
