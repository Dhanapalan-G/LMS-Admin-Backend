import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type QuizAnswerModel = runtime.Types.Result.DefaultSelection<Prisma.$QuizAnswerPayload>;
export type AggregateQuizAnswer = {
    _count: QuizAnswerCountAggregateOutputType | null;
    _avg: QuizAnswerAvgAggregateOutputType | null;
    _sum: QuizAnswerSumAggregateOutputType | null;
    _min: QuizAnswerMinAggregateOutputType | null;
    _max: QuizAnswerMaxAggregateOutputType | null;
};
export type QuizAnswerAvgAggregateOutputType = {
    marks: number | null;
};
export type QuizAnswerSumAggregateOutputType = {
    marks: number | null;
};
export type QuizAnswerMinAggregateOutputType = {
    id: string | null;
    attemptId: string | null;
    questionId: string | null;
    optionId: string | null;
    isCorrect: boolean | null;
    marks: number | null;
};
export type QuizAnswerMaxAggregateOutputType = {
    id: string | null;
    attemptId: string | null;
    questionId: string | null;
    optionId: string | null;
    isCorrect: boolean | null;
    marks: number | null;
};
export type QuizAnswerCountAggregateOutputType = {
    id: number;
    attemptId: number;
    questionId: number;
    optionId: number;
    isCorrect: number;
    marks: number;
    _all: number;
};
export type QuizAnswerAvgAggregateInputType = {
    marks?: true;
};
export type QuizAnswerSumAggregateInputType = {
    marks?: true;
};
export type QuizAnswerMinAggregateInputType = {
    id?: true;
    attemptId?: true;
    questionId?: true;
    optionId?: true;
    isCorrect?: true;
    marks?: true;
};
export type QuizAnswerMaxAggregateInputType = {
    id?: true;
    attemptId?: true;
    questionId?: true;
    optionId?: true;
    isCorrect?: true;
    marks?: true;
};
export type QuizAnswerCountAggregateInputType = {
    id?: true;
    attemptId?: true;
    questionId?: true;
    optionId?: true;
    isCorrect?: true;
    marks?: true;
    _all?: true;
};
export type QuizAnswerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizAnswerWhereInput;
    orderBy?: Prisma.QuizAnswerOrderByWithRelationInput | Prisma.QuizAnswerOrderByWithRelationInput[];
    cursor?: Prisma.QuizAnswerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | QuizAnswerCountAggregateInputType;
    _avg?: QuizAnswerAvgAggregateInputType;
    _sum?: QuizAnswerSumAggregateInputType;
    _min?: QuizAnswerMinAggregateInputType;
    _max?: QuizAnswerMaxAggregateInputType;
};
export type GetQuizAnswerAggregateType<T extends QuizAnswerAggregateArgs> = {
    [P in keyof T & keyof AggregateQuizAnswer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuizAnswer[P]> : Prisma.GetScalarType<T[P], AggregateQuizAnswer[P]>;
};
export type QuizAnswerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizAnswerWhereInput;
    orderBy?: Prisma.QuizAnswerOrderByWithAggregationInput | Prisma.QuizAnswerOrderByWithAggregationInput[];
    by: Prisma.QuizAnswerScalarFieldEnum[] | Prisma.QuizAnswerScalarFieldEnum;
    having?: Prisma.QuizAnswerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuizAnswerCountAggregateInputType | true;
    _avg?: QuizAnswerAvgAggregateInputType;
    _sum?: QuizAnswerSumAggregateInputType;
    _min?: QuizAnswerMinAggregateInputType;
    _max?: QuizAnswerMaxAggregateInputType;
};
export type QuizAnswerGroupByOutputType = {
    id: string;
    attemptId: string;
    questionId: string;
    optionId: string | null;
    isCorrect: boolean | null;
    marks: number | null;
    _count: QuizAnswerCountAggregateOutputType | null;
    _avg: QuizAnswerAvgAggregateOutputType | null;
    _sum: QuizAnswerSumAggregateOutputType | null;
    _min: QuizAnswerMinAggregateOutputType | null;
    _max: QuizAnswerMaxAggregateOutputType | null;
};
export type GetQuizAnswerGroupByPayload<T extends QuizAnswerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<QuizAnswerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QuizAnswerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], QuizAnswerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], QuizAnswerGroupByOutputType[P]>;
}>>;
export type QuizAnswerWhereInput = {
    AND?: Prisma.QuizAnswerWhereInput | Prisma.QuizAnswerWhereInput[];
    OR?: Prisma.QuizAnswerWhereInput[];
    NOT?: Prisma.QuizAnswerWhereInput | Prisma.QuizAnswerWhereInput[];
    id?: Prisma.StringFilter<"QuizAnswer"> | string;
    attemptId?: Prisma.StringFilter<"QuizAnswer"> | string;
    questionId?: Prisma.StringFilter<"QuizAnswer"> | string;
    optionId?: Prisma.StringNullableFilter<"QuizAnswer"> | string | null;
    isCorrect?: Prisma.BoolNullableFilter<"QuizAnswer"> | boolean | null;
    marks?: Prisma.FloatNullableFilter<"QuizAnswer"> | number | null;
    attempt?: Prisma.XOR<Prisma.QuizAttemptScalarRelationFilter, Prisma.QuizAttemptWhereInput>;
    question?: Prisma.XOR<Prisma.QuizQuestionScalarRelationFilter, Prisma.QuizQuestionWhereInput>;
    option?: Prisma.XOR<Prisma.QuizOptionNullableScalarRelationFilter, Prisma.QuizOptionWhereInput> | null;
};
export type QuizAnswerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    attemptId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    optionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    isCorrect?: Prisma.SortOrderInput | Prisma.SortOrder;
    marks?: Prisma.SortOrderInput | Prisma.SortOrder;
    attempt?: Prisma.QuizAttemptOrderByWithRelationInput;
    question?: Prisma.QuizQuestionOrderByWithRelationInput;
    option?: Prisma.QuizOptionOrderByWithRelationInput;
};
export type QuizAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    attemptId_questionId?: Prisma.QuizAnswerAttemptIdQuestionIdCompoundUniqueInput;
    AND?: Prisma.QuizAnswerWhereInput | Prisma.QuizAnswerWhereInput[];
    OR?: Prisma.QuizAnswerWhereInput[];
    NOT?: Prisma.QuizAnswerWhereInput | Prisma.QuizAnswerWhereInput[];
    attemptId?: Prisma.StringFilter<"QuizAnswer"> | string;
    questionId?: Prisma.StringFilter<"QuizAnswer"> | string;
    optionId?: Prisma.StringNullableFilter<"QuizAnswer"> | string | null;
    isCorrect?: Prisma.BoolNullableFilter<"QuizAnswer"> | boolean | null;
    marks?: Prisma.FloatNullableFilter<"QuizAnswer"> | number | null;
    attempt?: Prisma.XOR<Prisma.QuizAttemptScalarRelationFilter, Prisma.QuizAttemptWhereInput>;
    question?: Prisma.XOR<Prisma.QuizQuestionScalarRelationFilter, Prisma.QuizQuestionWhereInput>;
    option?: Prisma.XOR<Prisma.QuizOptionNullableScalarRelationFilter, Prisma.QuizOptionWhereInput> | null;
}, "id" | "attemptId_questionId">;
export type QuizAnswerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    attemptId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    optionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    isCorrect?: Prisma.SortOrderInput | Prisma.SortOrder;
    marks?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.QuizAnswerCountOrderByAggregateInput;
    _avg?: Prisma.QuizAnswerAvgOrderByAggregateInput;
    _max?: Prisma.QuizAnswerMaxOrderByAggregateInput;
    _min?: Prisma.QuizAnswerMinOrderByAggregateInput;
    _sum?: Prisma.QuizAnswerSumOrderByAggregateInput;
};
export type QuizAnswerScalarWhereWithAggregatesInput = {
    AND?: Prisma.QuizAnswerScalarWhereWithAggregatesInput | Prisma.QuizAnswerScalarWhereWithAggregatesInput[];
    OR?: Prisma.QuizAnswerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.QuizAnswerScalarWhereWithAggregatesInput | Prisma.QuizAnswerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"QuizAnswer"> | string;
    attemptId?: Prisma.StringWithAggregatesFilter<"QuizAnswer"> | string;
    questionId?: Prisma.StringWithAggregatesFilter<"QuizAnswer"> | string;
    optionId?: Prisma.StringNullableWithAggregatesFilter<"QuizAnswer"> | string | null;
    isCorrect?: Prisma.BoolNullableWithAggregatesFilter<"QuizAnswer"> | boolean | null;
    marks?: Prisma.FloatNullableWithAggregatesFilter<"QuizAnswer"> | number | null;
};
export type QuizAnswerCreateInput = {
    id?: string;
    isCorrect?: boolean | null;
    marks?: number | null;
    attempt: Prisma.QuizAttemptCreateNestedOneWithoutAnswersInput;
    question: Prisma.QuizQuestionCreateNestedOneWithoutAnswersInput;
    option?: Prisma.QuizOptionCreateNestedOneWithoutAnswersInput;
};
export type QuizAnswerUncheckedCreateInput = {
    id?: string;
    attemptId: string;
    questionId: string;
    optionId?: string | null;
    isCorrect?: boolean | null;
    marks?: number | null;
};
export type QuizAnswerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    marks?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    attempt?: Prisma.QuizAttemptUpdateOneRequiredWithoutAnswersNestedInput;
    question?: Prisma.QuizQuestionUpdateOneRequiredWithoutAnswersNestedInput;
    option?: Prisma.QuizOptionUpdateOneWithoutAnswersNestedInput;
};
export type QuizAnswerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    optionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCorrect?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    marks?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
};
export type QuizAnswerCreateManyInput = {
    id?: string;
    attemptId: string;
    questionId: string;
    optionId?: string | null;
    isCorrect?: boolean | null;
    marks?: number | null;
};
export type QuizAnswerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    marks?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
};
export type QuizAnswerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    optionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCorrect?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    marks?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
};
export type QuizAnswerListRelationFilter = {
    every?: Prisma.QuizAnswerWhereInput;
    some?: Prisma.QuizAnswerWhereInput;
    none?: Prisma.QuizAnswerWhereInput;
};
export type QuizAnswerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type QuizAnswerAttemptIdQuestionIdCompoundUniqueInput = {
    attemptId: string;
    questionId: string;
};
export type QuizAnswerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attemptId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    optionId?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    marks?: Prisma.SortOrder;
};
export type QuizAnswerAvgOrderByAggregateInput = {
    marks?: Prisma.SortOrder;
};
export type QuizAnswerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attemptId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    optionId?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    marks?: Prisma.SortOrder;
};
export type QuizAnswerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attemptId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    optionId?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    marks?: Prisma.SortOrder;
};
export type QuizAnswerSumOrderByAggregateInput = {
    marks?: Prisma.SortOrder;
};
export type QuizAnswerCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.QuizAnswerCreateWithoutQuestionInput, Prisma.QuizAnswerUncheckedCreateWithoutQuestionInput> | Prisma.QuizAnswerCreateWithoutQuestionInput[] | Prisma.QuizAnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.QuizAnswerCreateOrConnectWithoutQuestionInput | Prisma.QuizAnswerCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.QuizAnswerCreateManyQuestionInputEnvelope;
    connect?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
};
export type QuizAnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.QuizAnswerCreateWithoutQuestionInput, Prisma.QuizAnswerUncheckedCreateWithoutQuestionInput> | Prisma.QuizAnswerCreateWithoutQuestionInput[] | Prisma.QuizAnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.QuizAnswerCreateOrConnectWithoutQuestionInput | Prisma.QuizAnswerCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.QuizAnswerCreateManyQuestionInputEnvelope;
    connect?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
};
export type QuizAnswerUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.QuizAnswerCreateWithoutQuestionInput, Prisma.QuizAnswerUncheckedCreateWithoutQuestionInput> | Prisma.QuizAnswerCreateWithoutQuestionInput[] | Prisma.QuizAnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.QuizAnswerCreateOrConnectWithoutQuestionInput | Prisma.QuizAnswerCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.QuizAnswerUpsertWithWhereUniqueWithoutQuestionInput | Prisma.QuizAnswerUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.QuizAnswerCreateManyQuestionInputEnvelope;
    set?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
    disconnect?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
    delete?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
    connect?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
    update?: Prisma.QuizAnswerUpdateWithWhereUniqueWithoutQuestionInput | Prisma.QuizAnswerUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.QuizAnswerUpdateManyWithWhereWithoutQuestionInput | Prisma.QuizAnswerUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.QuizAnswerScalarWhereInput | Prisma.QuizAnswerScalarWhereInput[];
};
export type QuizAnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.QuizAnswerCreateWithoutQuestionInput, Prisma.QuizAnswerUncheckedCreateWithoutQuestionInput> | Prisma.QuizAnswerCreateWithoutQuestionInput[] | Prisma.QuizAnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.QuizAnswerCreateOrConnectWithoutQuestionInput | Prisma.QuizAnswerCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.QuizAnswerUpsertWithWhereUniqueWithoutQuestionInput | Prisma.QuizAnswerUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.QuizAnswerCreateManyQuestionInputEnvelope;
    set?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
    disconnect?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
    delete?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
    connect?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
    update?: Prisma.QuizAnswerUpdateWithWhereUniqueWithoutQuestionInput | Prisma.QuizAnswerUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.QuizAnswerUpdateManyWithWhereWithoutQuestionInput | Prisma.QuizAnswerUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.QuizAnswerScalarWhereInput | Prisma.QuizAnswerScalarWhereInput[];
};
export type QuizAnswerCreateNestedManyWithoutOptionInput = {
    create?: Prisma.XOR<Prisma.QuizAnswerCreateWithoutOptionInput, Prisma.QuizAnswerUncheckedCreateWithoutOptionInput> | Prisma.QuizAnswerCreateWithoutOptionInput[] | Prisma.QuizAnswerUncheckedCreateWithoutOptionInput[];
    connectOrCreate?: Prisma.QuizAnswerCreateOrConnectWithoutOptionInput | Prisma.QuizAnswerCreateOrConnectWithoutOptionInput[];
    createMany?: Prisma.QuizAnswerCreateManyOptionInputEnvelope;
    connect?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
};
export type QuizAnswerUncheckedCreateNestedManyWithoutOptionInput = {
    create?: Prisma.XOR<Prisma.QuizAnswerCreateWithoutOptionInput, Prisma.QuizAnswerUncheckedCreateWithoutOptionInput> | Prisma.QuizAnswerCreateWithoutOptionInput[] | Prisma.QuizAnswerUncheckedCreateWithoutOptionInput[];
    connectOrCreate?: Prisma.QuizAnswerCreateOrConnectWithoutOptionInput | Prisma.QuizAnswerCreateOrConnectWithoutOptionInput[];
    createMany?: Prisma.QuizAnswerCreateManyOptionInputEnvelope;
    connect?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
};
export type QuizAnswerUpdateManyWithoutOptionNestedInput = {
    create?: Prisma.XOR<Prisma.QuizAnswerCreateWithoutOptionInput, Prisma.QuizAnswerUncheckedCreateWithoutOptionInput> | Prisma.QuizAnswerCreateWithoutOptionInput[] | Prisma.QuizAnswerUncheckedCreateWithoutOptionInput[];
    connectOrCreate?: Prisma.QuizAnswerCreateOrConnectWithoutOptionInput | Prisma.QuizAnswerCreateOrConnectWithoutOptionInput[];
    upsert?: Prisma.QuizAnswerUpsertWithWhereUniqueWithoutOptionInput | Prisma.QuizAnswerUpsertWithWhereUniqueWithoutOptionInput[];
    createMany?: Prisma.QuizAnswerCreateManyOptionInputEnvelope;
    set?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
    disconnect?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
    delete?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
    connect?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
    update?: Prisma.QuizAnswerUpdateWithWhereUniqueWithoutOptionInput | Prisma.QuizAnswerUpdateWithWhereUniqueWithoutOptionInput[];
    updateMany?: Prisma.QuizAnswerUpdateManyWithWhereWithoutOptionInput | Prisma.QuizAnswerUpdateManyWithWhereWithoutOptionInput[];
    deleteMany?: Prisma.QuizAnswerScalarWhereInput | Prisma.QuizAnswerScalarWhereInput[];
};
export type QuizAnswerUncheckedUpdateManyWithoutOptionNestedInput = {
    create?: Prisma.XOR<Prisma.QuizAnswerCreateWithoutOptionInput, Prisma.QuizAnswerUncheckedCreateWithoutOptionInput> | Prisma.QuizAnswerCreateWithoutOptionInput[] | Prisma.QuizAnswerUncheckedCreateWithoutOptionInput[];
    connectOrCreate?: Prisma.QuizAnswerCreateOrConnectWithoutOptionInput | Prisma.QuizAnswerCreateOrConnectWithoutOptionInput[];
    upsert?: Prisma.QuizAnswerUpsertWithWhereUniqueWithoutOptionInput | Prisma.QuizAnswerUpsertWithWhereUniqueWithoutOptionInput[];
    createMany?: Prisma.QuizAnswerCreateManyOptionInputEnvelope;
    set?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
    disconnect?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
    delete?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
    connect?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
    update?: Prisma.QuizAnswerUpdateWithWhereUniqueWithoutOptionInput | Prisma.QuizAnswerUpdateWithWhereUniqueWithoutOptionInput[];
    updateMany?: Prisma.QuizAnswerUpdateManyWithWhereWithoutOptionInput | Prisma.QuizAnswerUpdateManyWithWhereWithoutOptionInput[];
    deleteMany?: Prisma.QuizAnswerScalarWhereInput | Prisma.QuizAnswerScalarWhereInput[];
};
export type QuizAnswerCreateNestedManyWithoutAttemptInput = {
    create?: Prisma.XOR<Prisma.QuizAnswerCreateWithoutAttemptInput, Prisma.QuizAnswerUncheckedCreateWithoutAttemptInput> | Prisma.QuizAnswerCreateWithoutAttemptInput[] | Prisma.QuizAnswerUncheckedCreateWithoutAttemptInput[];
    connectOrCreate?: Prisma.QuizAnswerCreateOrConnectWithoutAttemptInput | Prisma.QuizAnswerCreateOrConnectWithoutAttemptInput[];
    createMany?: Prisma.QuizAnswerCreateManyAttemptInputEnvelope;
    connect?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
};
export type QuizAnswerUncheckedCreateNestedManyWithoutAttemptInput = {
    create?: Prisma.XOR<Prisma.QuizAnswerCreateWithoutAttemptInput, Prisma.QuizAnswerUncheckedCreateWithoutAttemptInput> | Prisma.QuizAnswerCreateWithoutAttemptInput[] | Prisma.QuizAnswerUncheckedCreateWithoutAttemptInput[];
    connectOrCreate?: Prisma.QuizAnswerCreateOrConnectWithoutAttemptInput | Prisma.QuizAnswerCreateOrConnectWithoutAttemptInput[];
    createMany?: Prisma.QuizAnswerCreateManyAttemptInputEnvelope;
    connect?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
};
export type QuizAnswerUpdateManyWithoutAttemptNestedInput = {
    create?: Prisma.XOR<Prisma.QuizAnswerCreateWithoutAttemptInput, Prisma.QuizAnswerUncheckedCreateWithoutAttemptInput> | Prisma.QuizAnswerCreateWithoutAttemptInput[] | Prisma.QuizAnswerUncheckedCreateWithoutAttemptInput[];
    connectOrCreate?: Prisma.QuizAnswerCreateOrConnectWithoutAttemptInput | Prisma.QuizAnswerCreateOrConnectWithoutAttemptInput[];
    upsert?: Prisma.QuizAnswerUpsertWithWhereUniqueWithoutAttemptInput | Prisma.QuizAnswerUpsertWithWhereUniqueWithoutAttemptInput[];
    createMany?: Prisma.QuizAnswerCreateManyAttemptInputEnvelope;
    set?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
    disconnect?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
    delete?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
    connect?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
    update?: Prisma.QuizAnswerUpdateWithWhereUniqueWithoutAttemptInput | Prisma.QuizAnswerUpdateWithWhereUniqueWithoutAttemptInput[];
    updateMany?: Prisma.QuizAnswerUpdateManyWithWhereWithoutAttemptInput | Prisma.QuizAnswerUpdateManyWithWhereWithoutAttemptInput[];
    deleteMany?: Prisma.QuizAnswerScalarWhereInput | Prisma.QuizAnswerScalarWhereInput[];
};
export type QuizAnswerUncheckedUpdateManyWithoutAttemptNestedInput = {
    create?: Prisma.XOR<Prisma.QuizAnswerCreateWithoutAttemptInput, Prisma.QuizAnswerUncheckedCreateWithoutAttemptInput> | Prisma.QuizAnswerCreateWithoutAttemptInput[] | Prisma.QuizAnswerUncheckedCreateWithoutAttemptInput[];
    connectOrCreate?: Prisma.QuizAnswerCreateOrConnectWithoutAttemptInput | Prisma.QuizAnswerCreateOrConnectWithoutAttemptInput[];
    upsert?: Prisma.QuizAnswerUpsertWithWhereUniqueWithoutAttemptInput | Prisma.QuizAnswerUpsertWithWhereUniqueWithoutAttemptInput[];
    createMany?: Prisma.QuizAnswerCreateManyAttemptInputEnvelope;
    set?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
    disconnect?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
    delete?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
    connect?: Prisma.QuizAnswerWhereUniqueInput | Prisma.QuizAnswerWhereUniqueInput[];
    update?: Prisma.QuizAnswerUpdateWithWhereUniqueWithoutAttemptInput | Prisma.QuizAnswerUpdateWithWhereUniqueWithoutAttemptInput[];
    updateMany?: Prisma.QuizAnswerUpdateManyWithWhereWithoutAttemptInput | Prisma.QuizAnswerUpdateManyWithWhereWithoutAttemptInput[];
    deleteMany?: Prisma.QuizAnswerScalarWhereInput | Prisma.QuizAnswerScalarWhereInput[];
};
export type QuizAnswerCreateWithoutQuestionInput = {
    id?: string;
    isCorrect?: boolean | null;
    marks?: number | null;
    attempt: Prisma.QuizAttemptCreateNestedOneWithoutAnswersInput;
    option?: Prisma.QuizOptionCreateNestedOneWithoutAnswersInput;
};
export type QuizAnswerUncheckedCreateWithoutQuestionInput = {
    id?: string;
    attemptId: string;
    optionId?: string | null;
    isCorrect?: boolean | null;
    marks?: number | null;
};
export type QuizAnswerCreateOrConnectWithoutQuestionInput = {
    where: Prisma.QuizAnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizAnswerCreateWithoutQuestionInput, Prisma.QuizAnswerUncheckedCreateWithoutQuestionInput>;
};
export type QuizAnswerCreateManyQuestionInputEnvelope = {
    data: Prisma.QuizAnswerCreateManyQuestionInput | Prisma.QuizAnswerCreateManyQuestionInput[];
    skipDuplicates?: boolean;
};
export type QuizAnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.QuizAnswerWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuizAnswerUpdateWithoutQuestionInput, Prisma.QuizAnswerUncheckedUpdateWithoutQuestionInput>;
    create: Prisma.XOR<Prisma.QuizAnswerCreateWithoutQuestionInput, Prisma.QuizAnswerUncheckedCreateWithoutQuestionInput>;
};
export type QuizAnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.QuizAnswerWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuizAnswerUpdateWithoutQuestionInput, Prisma.QuizAnswerUncheckedUpdateWithoutQuestionInput>;
};
export type QuizAnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: Prisma.QuizAnswerScalarWhereInput;
    data: Prisma.XOR<Prisma.QuizAnswerUpdateManyMutationInput, Prisma.QuizAnswerUncheckedUpdateManyWithoutQuestionInput>;
};
export type QuizAnswerScalarWhereInput = {
    AND?: Prisma.QuizAnswerScalarWhereInput | Prisma.QuizAnswerScalarWhereInput[];
    OR?: Prisma.QuizAnswerScalarWhereInput[];
    NOT?: Prisma.QuizAnswerScalarWhereInput | Prisma.QuizAnswerScalarWhereInput[];
    id?: Prisma.StringFilter<"QuizAnswer"> | string;
    attemptId?: Prisma.StringFilter<"QuizAnswer"> | string;
    questionId?: Prisma.StringFilter<"QuizAnswer"> | string;
    optionId?: Prisma.StringNullableFilter<"QuizAnswer"> | string | null;
    isCorrect?: Prisma.BoolNullableFilter<"QuizAnswer"> | boolean | null;
    marks?: Prisma.FloatNullableFilter<"QuizAnswer"> | number | null;
};
export type QuizAnswerCreateWithoutOptionInput = {
    id?: string;
    isCorrect?: boolean | null;
    marks?: number | null;
    attempt: Prisma.QuizAttemptCreateNestedOneWithoutAnswersInput;
    question: Prisma.QuizQuestionCreateNestedOneWithoutAnswersInput;
};
export type QuizAnswerUncheckedCreateWithoutOptionInput = {
    id?: string;
    attemptId: string;
    questionId: string;
    isCorrect?: boolean | null;
    marks?: number | null;
};
export type QuizAnswerCreateOrConnectWithoutOptionInput = {
    where: Prisma.QuizAnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizAnswerCreateWithoutOptionInput, Prisma.QuizAnswerUncheckedCreateWithoutOptionInput>;
};
export type QuizAnswerCreateManyOptionInputEnvelope = {
    data: Prisma.QuizAnswerCreateManyOptionInput | Prisma.QuizAnswerCreateManyOptionInput[];
    skipDuplicates?: boolean;
};
export type QuizAnswerUpsertWithWhereUniqueWithoutOptionInput = {
    where: Prisma.QuizAnswerWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuizAnswerUpdateWithoutOptionInput, Prisma.QuizAnswerUncheckedUpdateWithoutOptionInput>;
    create: Prisma.XOR<Prisma.QuizAnswerCreateWithoutOptionInput, Prisma.QuizAnswerUncheckedCreateWithoutOptionInput>;
};
export type QuizAnswerUpdateWithWhereUniqueWithoutOptionInput = {
    where: Prisma.QuizAnswerWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuizAnswerUpdateWithoutOptionInput, Prisma.QuizAnswerUncheckedUpdateWithoutOptionInput>;
};
export type QuizAnswerUpdateManyWithWhereWithoutOptionInput = {
    where: Prisma.QuizAnswerScalarWhereInput;
    data: Prisma.XOR<Prisma.QuizAnswerUpdateManyMutationInput, Prisma.QuizAnswerUncheckedUpdateManyWithoutOptionInput>;
};
export type QuizAnswerCreateWithoutAttemptInput = {
    id?: string;
    isCorrect?: boolean | null;
    marks?: number | null;
    question: Prisma.QuizQuestionCreateNestedOneWithoutAnswersInput;
    option?: Prisma.QuizOptionCreateNestedOneWithoutAnswersInput;
};
export type QuizAnswerUncheckedCreateWithoutAttemptInput = {
    id?: string;
    questionId: string;
    optionId?: string | null;
    isCorrect?: boolean | null;
    marks?: number | null;
};
export type QuizAnswerCreateOrConnectWithoutAttemptInput = {
    where: Prisma.QuizAnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizAnswerCreateWithoutAttemptInput, Prisma.QuizAnswerUncheckedCreateWithoutAttemptInput>;
};
export type QuizAnswerCreateManyAttemptInputEnvelope = {
    data: Prisma.QuizAnswerCreateManyAttemptInput | Prisma.QuizAnswerCreateManyAttemptInput[];
    skipDuplicates?: boolean;
};
export type QuizAnswerUpsertWithWhereUniqueWithoutAttemptInput = {
    where: Prisma.QuizAnswerWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuizAnswerUpdateWithoutAttemptInput, Prisma.QuizAnswerUncheckedUpdateWithoutAttemptInput>;
    create: Prisma.XOR<Prisma.QuizAnswerCreateWithoutAttemptInput, Prisma.QuizAnswerUncheckedCreateWithoutAttemptInput>;
};
export type QuizAnswerUpdateWithWhereUniqueWithoutAttemptInput = {
    where: Prisma.QuizAnswerWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuizAnswerUpdateWithoutAttemptInput, Prisma.QuizAnswerUncheckedUpdateWithoutAttemptInput>;
};
export type QuizAnswerUpdateManyWithWhereWithoutAttemptInput = {
    where: Prisma.QuizAnswerScalarWhereInput;
    data: Prisma.XOR<Prisma.QuizAnswerUpdateManyMutationInput, Prisma.QuizAnswerUncheckedUpdateManyWithoutAttemptInput>;
};
export type QuizAnswerCreateManyQuestionInput = {
    id?: string;
    attemptId: string;
    optionId?: string | null;
    isCorrect?: boolean | null;
    marks?: number | null;
};
export type QuizAnswerUpdateWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    marks?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    attempt?: Prisma.QuizAttemptUpdateOneRequiredWithoutAnswersNestedInput;
    option?: Prisma.QuizOptionUpdateOneWithoutAnswersNestedInput;
};
export type QuizAnswerUncheckedUpdateWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptId?: Prisma.StringFieldUpdateOperationsInput | string;
    optionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCorrect?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    marks?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
};
export type QuizAnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptId?: Prisma.StringFieldUpdateOperationsInput | string;
    optionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCorrect?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    marks?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
};
export type QuizAnswerCreateManyOptionInput = {
    id?: string;
    attemptId: string;
    questionId: string;
    isCorrect?: boolean | null;
    marks?: number | null;
};
export type QuizAnswerUpdateWithoutOptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    marks?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    attempt?: Prisma.QuizAttemptUpdateOneRequiredWithoutAnswersNestedInput;
    question?: Prisma.QuizQuestionUpdateOneRequiredWithoutAnswersNestedInput;
};
export type QuizAnswerUncheckedUpdateWithoutOptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    marks?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
};
export type QuizAnswerUncheckedUpdateManyWithoutOptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    marks?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
};
export type QuizAnswerCreateManyAttemptInput = {
    id?: string;
    questionId: string;
    optionId?: string | null;
    isCorrect?: boolean | null;
    marks?: number | null;
};
export type QuizAnswerUpdateWithoutAttemptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    marks?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    question?: Prisma.QuizQuestionUpdateOneRequiredWithoutAnswersNestedInput;
    option?: Prisma.QuizOptionUpdateOneWithoutAnswersNestedInput;
};
export type QuizAnswerUncheckedUpdateWithoutAttemptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    optionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCorrect?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    marks?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
};
export type QuizAnswerUncheckedUpdateManyWithoutAttemptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    optionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCorrect?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    marks?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
};
export type QuizAnswerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    attemptId?: boolean;
    questionId?: boolean;
    optionId?: boolean;
    isCorrect?: boolean;
    marks?: boolean;
    attempt?: boolean | Prisma.QuizAttemptDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuizQuestionDefaultArgs<ExtArgs>;
    option?: boolean | Prisma.QuizAnswer$optionArgs<ExtArgs>;
}, ExtArgs["result"]["quizAnswer"]>;
export type QuizAnswerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    attemptId?: boolean;
    questionId?: boolean;
    optionId?: boolean;
    isCorrect?: boolean;
    marks?: boolean;
    attempt?: boolean | Prisma.QuizAttemptDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuizQuestionDefaultArgs<ExtArgs>;
    option?: boolean | Prisma.QuizAnswer$optionArgs<ExtArgs>;
}, ExtArgs["result"]["quizAnswer"]>;
export type QuizAnswerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    attemptId?: boolean;
    questionId?: boolean;
    optionId?: boolean;
    isCorrect?: boolean;
    marks?: boolean;
    attempt?: boolean | Prisma.QuizAttemptDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuizQuestionDefaultArgs<ExtArgs>;
    option?: boolean | Prisma.QuizAnswer$optionArgs<ExtArgs>;
}, ExtArgs["result"]["quizAnswer"]>;
export type QuizAnswerSelectScalar = {
    id?: boolean;
    attemptId?: boolean;
    questionId?: boolean;
    optionId?: boolean;
    isCorrect?: boolean;
    marks?: boolean;
};
export type QuizAnswerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "attemptId" | "questionId" | "optionId" | "isCorrect" | "marks", ExtArgs["result"]["quizAnswer"]>;
export type QuizAnswerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attempt?: boolean | Prisma.QuizAttemptDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuizQuestionDefaultArgs<ExtArgs>;
    option?: boolean | Prisma.QuizAnswer$optionArgs<ExtArgs>;
};
export type QuizAnswerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attempt?: boolean | Prisma.QuizAttemptDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuizQuestionDefaultArgs<ExtArgs>;
    option?: boolean | Prisma.QuizAnswer$optionArgs<ExtArgs>;
};
export type QuizAnswerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attempt?: boolean | Prisma.QuizAttemptDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuizQuestionDefaultArgs<ExtArgs>;
    option?: boolean | Prisma.QuizAnswer$optionArgs<ExtArgs>;
};
export type $QuizAnswerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "QuizAnswer";
    objects: {
        attempt: Prisma.$QuizAttemptPayload<ExtArgs>;
        question: Prisma.$QuizQuestionPayload<ExtArgs>;
        option: Prisma.$QuizOptionPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        attemptId: string;
        questionId: string;
        optionId: string | null;
        isCorrect: boolean | null;
        marks: number | null;
    }, ExtArgs["result"]["quizAnswer"]>;
    composites: {};
};
export type QuizAnswerGetPayload<S extends boolean | null | undefined | QuizAnswerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$QuizAnswerPayload, S>;
export type QuizAnswerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<QuizAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QuizAnswerCountAggregateInputType | true;
};
export interface QuizAnswerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['QuizAnswer'];
        meta: {
            name: 'QuizAnswer';
        };
    };
    findUnique<T extends QuizAnswerFindUniqueArgs>(args: Prisma.SelectSubset<T, QuizAnswerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__QuizAnswerClient<runtime.Types.Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends QuizAnswerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, QuizAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuizAnswerClient<runtime.Types.Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends QuizAnswerFindFirstArgs>(args?: Prisma.SelectSubset<T, QuizAnswerFindFirstArgs<ExtArgs>>): Prisma.Prisma__QuizAnswerClient<runtime.Types.Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends QuizAnswerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, QuizAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuizAnswerClient<runtime.Types.Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends QuizAnswerFindManyArgs>(args?: Prisma.SelectSubset<T, QuizAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends QuizAnswerCreateArgs>(args: Prisma.SelectSubset<T, QuizAnswerCreateArgs<ExtArgs>>): Prisma.Prisma__QuizAnswerClient<runtime.Types.Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends QuizAnswerCreateManyArgs>(args?: Prisma.SelectSubset<T, QuizAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends QuizAnswerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, QuizAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends QuizAnswerDeleteArgs>(args: Prisma.SelectSubset<T, QuizAnswerDeleteArgs<ExtArgs>>): Prisma.Prisma__QuizAnswerClient<runtime.Types.Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends QuizAnswerUpdateArgs>(args: Prisma.SelectSubset<T, QuizAnswerUpdateArgs<ExtArgs>>): Prisma.Prisma__QuizAnswerClient<runtime.Types.Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends QuizAnswerDeleteManyArgs>(args?: Prisma.SelectSubset<T, QuizAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends QuizAnswerUpdateManyArgs>(args: Prisma.SelectSubset<T, QuizAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends QuizAnswerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, QuizAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends QuizAnswerUpsertArgs>(args: Prisma.SelectSubset<T, QuizAnswerUpsertArgs<ExtArgs>>): Prisma.Prisma__QuizAnswerClient<runtime.Types.Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends QuizAnswerCountArgs>(args?: Prisma.Subset<T, QuizAnswerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], QuizAnswerCountAggregateOutputType> : number>;
    aggregate<T extends QuizAnswerAggregateArgs>(args: Prisma.Subset<T, QuizAnswerAggregateArgs>): Prisma.PrismaPromise<GetQuizAnswerAggregateType<T>>;
    groupBy<T extends QuizAnswerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: QuizAnswerGroupByArgs['orderBy'];
    } : {
        orderBy?: QuizAnswerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, QuizAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: QuizAnswerFieldRefs;
}
export interface Prisma__QuizAnswerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    attempt<T extends Prisma.QuizAttemptDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuizAttemptDefaultArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    question<T extends Prisma.QuizQuestionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuizQuestionDefaultArgs<ExtArgs>>): Prisma.Prisma__QuizQuestionClient<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    option<T extends Prisma.QuizAnswer$optionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuizAnswer$optionArgs<ExtArgs>>): Prisma.Prisma__QuizOptionClient<runtime.Types.Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface QuizAnswerFieldRefs {
    readonly id: Prisma.FieldRef<"QuizAnswer", 'String'>;
    readonly attemptId: Prisma.FieldRef<"QuizAnswer", 'String'>;
    readonly questionId: Prisma.FieldRef<"QuizAnswer", 'String'>;
    readonly optionId: Prisma.FieldRef<"QuizAnswer", 'String'>;
    readonly isCorrect: Prisma.FieldRef<"QuizAnswer", 'Boolean'>;
    readonly marks: Prisma.FieldRef<"QuizAnswer", 'Float'>;
}
export type QuizAnswerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAnswerSelect<ExtArgs> | null;
    omit?: Prisma.QuizAnswerOmit<ExtArgs> | null;
    include?: Prisma.QuizAnswerInclude<ExtArgs> | null;
    where: Prisma.QuizAnswerWhereUniqueInput;
};
export type QuizAnswerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAnswerSelect<ExtArgs> | null;
    omit?: Prisma.QuizAnswerOmit<ExtArgs> | null;
    include?: Prisma.QuizAnswerInclude<ExtArgs> | null;
    where: Prisma.QuizAnswerWhereUniqueInput;
};
export type QuizAnswerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuizAnswerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuizAnswerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuizAnswerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAnswerSelect<ExtArgs> | null;
    omit?: Prisma.QuizAnswerOmit<ExtArgs> | null;
    include?: Prisma.QuizAnswerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizAnswerCreateInput, Prisma.QuizAnswerUncheckedCreateInput>;
};
export type QuizAnswerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.QuizAnswerCreateManyInput | Prisma.QuizAnswerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type QuizAnswerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAnswerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuizAnswerOmit<ExtArgs> | null;
    data: Prisma.QuizAnswerCreateManyInput | Prisma.QuizAnswerCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.QuizAnswerIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type QuizAnswerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAnswerSelect<ExtArgs> | null;
    omit?: Prisma.QuizAnswerOmit<ExtArgs> | null;
    include?: Prisma.QuizAnswerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizAnswerUpdateInput, Prisma.QuizAnswerUncheckedUpdateInput>;
    where: Prisma.QuizAnswerWhereUniqueInput;
};
export type QuizAnswerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.QuizAnswerUpdateManyMutationInput, Prisma.QuizAnswerUncheckedUpdateManyInput>;
    where?: Prisma.QuizAnswerWhereInput;
    limit?: number;
};
export type QuizAnswerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAnswerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuizAnswerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizAnswerUpdateManyMutationInput, Prisma.QuizAnswerUncheckedUpdateManyInput>;
    where?: Prisma.QuizAnswerWhereInput;
    limit?: number;
    include?: Prisma.QuizAnswerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type QuizAnswerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAnswerSelect<ExtArgs> | null;
    omit?: Prisma.QuizAnswerOmit<ExtArgs> | null;
    include?: Prisma.QuizAnswerInclude<ExtArgs> | null;
    where: Prisma.QuizAnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizAnswerCreateInput, Prisma.QuizAnswerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.QuizAnswerUpdateInput, Prisma.QuizAnswerUncheckedUpdateInput>;
};
export type QuizAnswerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAnswerSelect<ExtArgs> | null;
    omit?: Prisma.QuizAnswerOmit<ExtArgs> | null;
    include?: Prisma.QuizAnswerInclude<ExtArgs> | null;
    where: Prisma.QuizAnswerWhereUniqueInput;
};
export type QuizAnswerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizAnswerWhereInput;
    limit?: number;
};
export type QuizAnswer$optionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizOptionSelect<ExtArgs> | null;
    omit?: Prisma.QuizOptionOmit<ExtArgs> | null;
    include?: Prisma.QuizOptionInclude<ExtArgs> | null;
    where?: Prisma.QuizOptionWhereInput;
};
export type QuizAnswerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAnswerSelect<ExtArgs> | null;
    omit?: Prisma.QuizAnswerOmit<ExtArgs> | null;
    include?: Prisma.QuizAnswerInclude<ExtArgs> | null;
};
