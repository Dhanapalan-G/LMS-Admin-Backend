import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type QuizQuestionModel = runtime.Types.Result.DefaultSelection<Prisma.$QuizQuestionPayload>;
export type AggregateQuizQuestion = {
    _count: QuizQuestionCountAggregateOutputType | null;
    _avg: QuizQuestionAvgAggregateOutputType | null;
    _sum: QuizQuestionSumAggregateOutputType | null;
    _min: QuizQuestionMinAggregateOutputType | null;
    _max: QuizQuestionMaxAggregateOutputType | null;
};
export type QuizQuestionAvgAggregateOutputType = {
    position: number | null;
    marks: number | null;
};
export type QuizQuestionSumAggregateOutputType = {
    position: number | null;
    marks: number | null;
};
export type QuizQuestionMinAggregateOutputType = {
    id: string | null;
    quizId: string | null;
    question: string | null;
    position: number | null;
    marks: number | null;
    createdAt: Date | null;
};
export type QuizQuestionMaxAggregateOutputType = {
    id: string | null;
    quizId: string | null;
    question: string | null;
    position: number | null;
    marks: number | null;
    createdAt: Date | null;
};
export type QuizQuestionCountAggregateOutputType = {
    id: number;
    quizId: number;
    question: number;
    position: number;
    marks: number;
    createdAt: number;
    _all: number;
};
export type QuizQuestionAvgAggregateInputType = {
    position?: true;
    marks?: true;
};
export type QuizQuestionSumAggregateInputType = {
    position?: true;
    marks?: true;
};
export type QuizQuestionMinAggregateInputType = {
    id?: true;
    quizId?: true;
    question?: true;
    position?: true;
    marks?: true;
    createdAt?: true;
};
export type QuizQuestionMaxAggregateInputType = {
    id?: true;
    quizId?: true;
    question?: true;
    position?: true;
    marks?: true;
    createdAt?: true;
};
export type QuizQuestionCountAggregateInputType = {
    id?: true;
    quizId?: true;
    question?: true;
    position?: true;
    marks?: true;
    createdAt?: true;
    _all?: true;
};
export type QuizQuestionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizQuestionWhereInput;
    orderBy?: Prisma.QuizQuestionOrderByWithRelationInput | Prisma.QuizQuestionOrderByWithRelationInput[];
    cursor?: Prisma.QuizQuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | QuizQuestionCountAggregateInputType;
    _avg?: QuizQuestionAvgAggregateInputType;
    _sum?: QuizQuestionSumAggregateInputType;
    _min?: QuizQuestionMinAggregateInputType;
    _max?: QuizQuestionMaxAggregateInputType;
};
export type GetQuizQuestionAggregateType<T extends QuizQuestionAggregateArgs> = {
    [P in keyof T & keyof AggregateQuizQuestion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuizQuestion[P]> : Prisma.GetScalarType<T[P], AggregateQuizQuestion[P]>;
};
export type QuizQuestionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizQuestionWhereInput;
    orderBy?: Prisma.QuizQuestionOrderByWithAggregationInput | Prisma.QuizQuestionOrderByWithAggregationInput[];
    by: Prisma.QuizQuestionScalarFieldEnum[] | Prisma.QuizQuestionScalarFieldEnum;
    having?: Prisma.QuizQuestionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuizQuestionCountAggregateInputType | true;
    _avg?: QuizQuestionAvgAggregateInputType;
    _sum?: QuizQuestionSumAggregateInputType;
    _min?: QuizQuestionMinAggregateInputType;
    _max?: QuizQuestionMaxAggregateInputType;
};
export type QuizQuestionGroupByOutputType = {
    id: string;
    quizId: string;
    question: string;
    position: number;
    marks: number;
    createdAt: Date;
    _count: QuizQuestionCountAggregateOutputType | null;
    _avg: QuizQuestionAvgAggregateOutputType | null;
    _sum: QuizQuestionSumAggregateOutputType | null;
    _min: QuizQuestionMinAggregateOutputType | null;
    _max: QuizQuestionMaxAggregateOutputType | null;
};
export type GetQuizQuestionGroupByPayload<T extends QuizQuestionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<QuizQuestionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QuizQuestionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], QuizQuestionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], QuizQuestionGroupByOutputType[P]>;
}>>;
export type QuizQuestionWhereInput = {
    AND?: Prisma.QuizQuestionWhereInput | Prisma.QuizQuestionWhereInput[];
    OR?: Prisma.QuizQuestionWhereInput[];
    NOT?: Prisma.QuizQuestionWhereInput | Prisma.QuizQuestionWhereInput[];
    id?: Prisma.StringFilter<"QuizQuestion"> | string;
    quizId?: Prisma.StringFilter<"QuizQuestion"> | string;
    question?: Prisma.StringFilter<"QuizQuestion"> | string;
    position?: Prisma.IntFilter<"QuizQuestion"> | number;
    marks?: Prisma.FloatFilter<"QuizQuestion"> | number;
    createdAt?: Prisma.DateTimeFilter<"QuizQuestion"> | Date | string;
    quiz?: Prisma.XOR<Prisma.QuizScalarRelationFilter, Prisma.QuizWhereInput>;
    options?: Prisma.QuizOptionListRelationFilter;
    answers?: Prisma.QuizAnswerListRelationFilter;
};
export type QuizQuestionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    quizId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    marks?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    quiz?: Prisma.QuizOrderByWithRelationInput;
    options?: Prisma.QuizOptionOrderByRelationAggregateInput;
    answers?: Prisma.QuizAnswerOrderByRelationAggregateInput;
};
export type QuizQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.QuizQuestionWhereInput | Prisma.QuizQuestionWhereInput[];
    OR?: Prisma.QuizQuestionWhereInput[];
    NOT?: Prisma.QuizQuestionWhereInput | Prisma.QuizQuestionWhereInput[];
    quizId?: Prisma.StringFilter<"QuizQuestion"> | string;
    question?: Prisma.StringFilter<"QuizQuestion"> | string;
    position?: Prisma.IntFilter<"QuizQuestion"> | number;
    marks?: Prisma.FloatFilter<"QuizQuestion"> | number;
    createdAt?: Prisma.DateTimeFilter<"QuizQuestion"> | Date | string;
    quiz?: Prisma.XOR<Prisma.QuizScalarRelationFilter, Prisma.QuizWhereInput>;
    options?: Prisma.QuizOptionListRelationFilter;
    answers?: Prisma.QuizAnswerListRelationFilter;
}, "id">;
export type QuizQuestionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    quizId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    marks?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.QuizQuestionCountOrderByAggregateInput;
    _avg?: Prisma.QuizQuestionAvgOrderByAggregateInput;
    _max?: Prisma.QuizQuestionMaxOrderByAggregateInput;
    _min?: Prisma.QuizQuestionMinOrderByAggregateInput;
    _sum?: Prisma.QuizQuestionSumOrderByAggregateInput;
};
export type QuizQuestionScalarWhereWithAggregatesInput = {
    AND?: Prisma.QuizQuestionScalarWhereWithAggregatesInput | Prisma.QuizQuestionScalarWhereWithAggregatesInput[];
    OR?: Prisma.QuizQuestionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.QuizQuestionScalarWhereWithAggregatesInput | Prisma.QuizQuestionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"QuizQuestion"> | string;
    quizId?: Prisma.StringWithAggregatesFilter<"QuizQuestion"> | string;
    question?: Prisma.StringWithAggregatesFilter<"QuizQuestion"> | string;
    position?: Prisma.IntWithAggregatesFilter<"QuizQuestion"> | number;
    marks?: Prisma.FloatWithAggregatesFilter<"QuizQuestion"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"QuizQuestion"> | Date | string;
};
export type QuizQuestionCreateInput = {
    id?: string;
    question: string;
    position: number;
    marks?: number;
    createdAt?: Date | string;
    quiz: Prisma.QuizCreateNestedOneWithoutQuestionsInput;
    options?: Prisma.QuizOptionCreateNestedManyWithoutQuestionInput;
    answers?: Prisma.QuizAnswerCreateNestedManyWithoutQuestionInput;
};
export type QuizQuestionUncheckedCreateInput = {
    id?: string;
    quizId: string;
    question: string;
    position: number;
    marks?: number;
    createdAt?: Date | string;
    options?: Prisma.QuizOptionUncheckedCreateNestedManyWithoutQuestionInput;
    answers?: Prisma.QuizAnswerUncheckedCreateNestedManyWithoutQuestionInput;
};
export type QuizQuestionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    marks?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quiz?: Prisma.QuizUpdateOneRequiredWithoutQuestionsNestedInput;
    options?: Prisma.QuizOptionUpdateManyWithoutQuestionNestedInput;
    answers?: Prisma.QuizAnswerUpdateManyWithoutQuestionNestedInput;
};
export type QuizQuestionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quizId?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    marks?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    options?: Prisma.QuizOptionUncheckedUpdateManyWithoutQuestionNestedInput;
    answers?: Prisma.QuizAnswerUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type QuizQuestionCreateManyInput = {
    id?: string;
    quizId: string;
    question: string;
    position: number;
    marks?: number;
    createdAt?: Date | string;
};
export type QuizQuestionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    marks?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuizQuestionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quizId?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    marks?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuizQuestionListRelationFilter = {
    every?: Prisma.QuizQuestionWhereInput;
    some?: Prisma.QuizQuestionWhereInput;
    none?: Prisma.QuizQuestionWhereInput;
};
export type QuizQuestionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type QuizQuestionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quizId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    marks?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type QuizQuestionAvgOrderByAggregateInput = {
    position?: Prisma.SortOrder;
    marks?: Prisma.SortOrder;
};
export type QuizQuestionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quizId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    marks?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type QuizQuestionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quizId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    marks?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type QuizQuestionSumOrderByAggregateInput = {
    position?: Prisma.SortOrder;
    marks?: Prisma.SortOrder;
};
export type QuizQuestionScalarRelationFilter = {
    is?: Prisma.QuizQuestionWhereInput;
    isNot?: Prisma.QuizQuestionWhereInput;
};
export type QuizQuestionCreateNestedManyWithoutQuizInput = {
    create?: Prisma.XOR<Prisma.QuizQuestionCreateWithoutQuizInput, Prisma.QuizQuestionUncheckedCreateWithoutQuizInput> | Prisma.QuizQuestionCreateWithoutQuizInput[] | Prisma.QuizQuestionUncheckedCreateWithoutQuizInput[];
    connectOrCreate?: Prisma.QuizQuestionCreateOrConnectWithoutQuizInput | Prisma.QuizQuestionCreateOrConnectWithoutQuizInput[];
    createMany?: Prisma.QuizQuestionCreateManyQuizInputEnvelope;
    connect?: Prisma.QuizQuestionWhereUniqueInput | Prisma.QuizQuestionWhereUniqueInput[];
};
export type QuizQuestionUncheckedCreateNestedManyWithoutQuizInput = {
    create?: Prisma.XOR<Prisma.QuizQuestionCreateWithoutQuizInput, Prisma.QuizQuestionUncheckedCreateWithoutQuizInput> | Prisma.QuizQuestionCreateWithoutQuizInput[] | Prisma.QuizQuestionUncheckedCreateWithoutQuizInput[];
    connectOrCreate?: Prisma.QuizQuestionCreateOrConnectWithoutQuizInput | Prisma.QuizQuestionCreateOrConnectWithoutQuizInput[];
    createMany?: Prisma.QuizQuestionCreateManyQuizInputEnvelope;
    connect?: Prisma.QuizQuestionWhereUniqueInput | Prisma.QuizQuestionWhereUniqueInput[];
};
export type QuizQuestionUpdateManyWithoutQuizNestedInput = {
    create?: Prisma.XOR<Prisma.QuizQuestionCreateWithoutQuizInput, Prisma.QuizQuestionUncheckedCreateWithoutQuizInput> | Prisma.QuizQuestionCreateWithoutQuizInput[] | Prisma.QuizQuestionUncheckedCreateWithoutQuizInput[];
    connectOrCreate?: Prisma.QuizQuestionCreateOrConnectWithoutQuizInput | Prisma.QuizQuestionCreateOrConnectWithoutQuizInput[];
    upsert?: Prisma.QuizQuestionUpsertWithWhereUniqueWithoutQuizInput | Prisma.QuizQuestionUpsertWithWhereUniqueWithoutQuizInput[];
    createMany?: Prisma.QuizQuestionCreateManyQuizInputEnvelope;
    set?: Prisma.QuizQuestionWhereUniqueInput | Prisma.QuizQuestionWhereUniqueInput[];
    disconnect?: Prisma.QuizQuestionWhereUniqueInput | Prisma.QuizQuestionWhereUniqueInput[];
    delete?: Prisma.QuizQuestionWhereUniqueInput | Prisma.QuizQuestionWhereUniqueInput[];
    connect?: Prisma.QuizQuestionWhereUniqueInput | Prisma.QuizQuestionWhereUniqueInput[];
    update?: Prisma.QuizQuestionUpdateWithWhereUniqueWithoutQuizInput | Prisma.QuizQuestionUpdateWithWhereUniqueWithoutQuizInput[];
    updateMany?: Prisma.QuizQuestionUpdateManyWithWhereWithoutQuizInput | Prisma.QuizQuestionUpdateManyWithWhereWithoutQuizInput[];
    deleteMany?: Prisma.QuizQuestionScalarWhereInput | Prisma.QuizQuestionScalarWhereInput[];
};
export type QuizQuestionUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: Prisma.XOR<Prisma.QuizQuestionCreateWithoutQuizInput, Prisma.QuizQuestionUncheckedCreateWithoutQuizInput> | Prisma.QuizQuestionCreateWithoutQuizInput[] | Prisma.QuizQuestionUncheckedCreateWithoutQuizInput[];
    connectOrCreate?: Prisma.QuizQuestionCreateOrConnectWithoutQuizInput | Prisma.QuizQuestionCreateOrConnectWithoutQuizInput[];
    upsert?: Prisma.QuizQuestionUpsertWithWhereUniqueWithoutQuizInput | Prisma.QuizQuestionUpsertWithWhereUniqueWithoutQuizInput[];
    createMany?: Prisma.QuizQuestionCreateManyQuizInputEnvelope;
    set?: Prisma.QuizQuestionWhereUniqueInput | Prisma.QuizQuestionWhereUniqueInput[];
    disconnect?: Prisma.QuizQuestionWhereUniqueInput | Prisma.QuizQuestionWhereUniqueInput[];
    delete?: Prisma.QuizQuestionWhereUniqueInput | Prisma.QuizQuestionWhereUniqueInput[];
    connect?: Prisma.QuizQuestionWhereUniqueInput | Prisma.QuizQuestionWhereUniqueInput[];
    update?: Prisma.QuizQuestionUpdateWithWhereUniqueWithoutQuizInput | Prisma.QuizQuestionUpdateWithWhereUniqueWithoutQuizInput[];
    updateMany?: Prisma.QuizQuestionUpdateManyWithWhereWithoutQuizInput | Prisma.QuizQuestionUpdateManyWithWhereWithoutQuizInput[];
    deleteMany?: Prisma.QuizQuestionScalarWhereInput | Prisma.QuizQuestionScalarWhereInput[];
};
export type QuizQuestionCreateNestedOneWithoutOptionsInput = {
    create?: Prisma.XOR<Prisma.QuizQuestionCreateWithoutOptionsInput, Prisma.QuizQuestionUncheckedCreateWithoutOptionsInput>;
    connectOrCreate?: Prisma.QuizQuestionCreateOrConnectWithoutOptionsInput;
    connect?: Prisma.QuizQuestionWhereUniqueInput;
};
export type QuizQuestionUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: Prisma.XOR<Prisma.QuizQuestionCreateWithoutOptionsInput, Prisma.QuizQuestionUncheckedCreateWithoutOptionsInput>;
    connectOrCreate?: Prisma.QuizQuestionCreateOrConnectWithoutOptionsInput;
    upsert?: Prisma.QuizQuestionUpsertWithoutOptionsInput;
    connect?: Prisma.QuizQuestionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuizQuestionUpdateToOneWithWhereWithoutOptionsInput, Prisma.QuizQuestionUpdateWithoutOptionsInput>, Prisma.QuizQuestionUncheckedUpdateWithoutOptionsInput>;
};
export type QuizQuestionCreateNestedOneWithoutAnswersInput = {
    create?: Prisma.XOR<Prisma.QuizQuestionCreateWithoutAnswersInput, Prisma.QuizQuestionUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.QuizQuestionCreateOrConnectWithoutAnswersInput;
    connect?: Prisma.QuizQuestionWhereUniqueInput;
};
export type QuizQuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: Prisma.XOR<Prisma.QuizQuestionCreateWithoutAnswersInput, Prisma.QuizQuestionUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.QuizQuestionCreateOrConnectWithoutAnswersInput;
    upsert?: Prisma.QuizQuestionUpsertWithoutAnswersInput;
    connect?: Prisma.QuizQuestionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuizQuestionUpdateToOneWithWhereWithoutAnswersInput, Prisma.QuizQuestionUpdateWithoutAnswersInput>, Prisma.QuizQuestionUncheckedUpdateWithoutAnswersInput>;
};
export type QuizQuestionCreateWithoutQuizInput = {
    id?: string;
    question: string;
    position: number;
    marks?: number;
    createdAt?: Date | string;
    options?: Prisma.QuizOptionCreateNestedManyWithoutQuestionInput;
    answers?: Prisma.QuizAnswerCreateNestedManyWithoutQuestionInput;
};
export type QuizQuestionUncheckedCreateWithoutQuizInput = {
    id?: string;
    question: string;
    position: number;
    marks?: number;
    createdAt?: Date | string;
    options?: Prisma.QuizOptionUncheckedCreateNestedManyWithoutQuestionInput;
    answers?: Prisma.QuizAnswerUncheckedCreateNestedManyWithoutQuestionInput;
};
export type QuizQuestionCreateOrConnectWithoutQuizInput = {
    where: Prisma.QuizQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizQuestionCreateWithoutQuizInput, Prisma.QuizQuestionUncheckedCreateWithoutQuizInput>;
};
export type QuizQuestionCreateManyQuizInputEnvelope = {
    data: Prisma.QuizQuestionCreateManyQuizInput | Prisma.QuizQuestionCreateManyQuizInput[];
    skipDuplicates?: boolean;
};
export type QuizQuestionUpsertWithWhereUniqueWithoutQuizInput = {
    where: Prisma.QuizQuestionWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuizQuestionUpdateWithoutQuizInput, Prisma.QuizQuestionUncheckedUpdateWithoutQuizInput>;
    create: Prisma.XOR<Prisma.QuizQuestionCreateWithoutQuizInput, Prisma.QuizQuestionUncheckedCreateWithoutQuizInput>;
};
export type QuizQuestionUpdateWithWhereUniqueWithoutQuizInput = {
    where: Prisma.QuizQuestionWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuizQuestionUpdateWithoutQuizInput, Prisma.QuizQuestionUncheckedUpdateWithoutQuizInput>;
};
export type QuizQuestionUpdateManyWithWhereWithoutQuizInput = {
    where: Prisma.QuizQuestionScalarWhereInput;
    data: Prisma.XOR<Prisma.QuizQuestionUpdateManyMutationInput, Prisma.QuizQuestionUncheckedUpdateManyWithoutQuizInput>;
};
export type QuizQuestionScalarWhereInput = {
    AND?: Prisma.QuizQuestionScalarWhereInput | Prisma.QuizQuestionScalarWhereInput[];
    OR?: Prisma.QuizQuestionScalarWhereInput[];
    NOT?: Prisma.QuizQuestionScalarWhereInput | Prisma.QuizQuestionScalarWhereInput[];
    id?: Prisma.StringFilter<"QuizQuestion"> | string;
    quizId?: Prisma.StringFilter<"QuizQuestion"> | string;
    question?: Prisma.StringFilter<"QuizQuestion"> | string;
    position?: Prisma.IntFilter<"QuizQuestion"> | number;
    marks?: Prisma.FloatFilter<"QuizQuestion"> | number;
    createdAt?: Prisma.DateTimeFilter<"QuizQuestion"> | Date | string;
};
export type QuizQuestionCreateWithoutOptionsInput = {
    id?: string;
    question: string;
    position: number;
    marks?: number;
    createdAt?: Date | string;
    quiz: Prisma.QuizCreateNestedOneWithoutQuestionsInput;
    answers?: Prisma.QuizAnswerCreateNestedManyWithoutQuestionInput;
};
export type QuizQuestionUncheckedCreateWithoutOptionsInput = {
    id?: string;
    quizId: string;
    question: string;
    position: number;
    marks?: number;
    createdAt?: Date | string;
    answers?: Prisma.QuizAnswerUncheckedCreateNestedManyWithoutQuestionInput;
};
export type QuizQuestionCreateOrConnectWithoutOptionsInput = {
    where: Prisma.QuizQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizQuestionCreateWithoutOptionsInput, Prisma.QuizQuestionUncheckedCreateWithoutOptionsInput>;
};
export type QuizQuestionUpsertWithoutOptionsInput = {
    update: Prisma.XOR<Prisma.QuizQuestionUpdateWithoutOptionsInput, Prisma.QuizQuestionUncheckedUpdateWithoutOptionsInput>;
    create: Prisma.XOR<Prisma.QuizQuestionCreateWithoutOptionsInput, Prisma.QuizQuestionUncheckedCreateWithoutOptionsInput>;
    where?: Prisma.QuizQuestionWhereInput;
};
export type QuizQuestionUpdateToOneWithWhereWithoutOptionsInput = {
    where?: Prisma.QuizQuestionWhereInput;
    data: Prisma.XOR<Prisma.QuizQuestionUpdateWithoutOptionsInput, Prisma.QuizQuestionUncheckedUpdateWithoutOptionsInput>;
};
export type QuizQuestionUpdateWithoutOptionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    marks?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quiz?: Prisma.QuizUpdateOneRequiredWithoutQuestionsNestedInput;
    answers?: Prisma.QuizAnswerUpdateManyWithoutQuestionNestedInput;
};
export type QuizQuestionUncheckedUpdateWithoutOptionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quizId?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    marks?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: Prisma.QuizAnswerUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type QuizQuestionCreateWithoutAnswersInput = {
    id?: string;
    question: string;
    position: number;
    marks?: number;
    createdAt?: Date | string;
    quiz: Prisma.QuizCreateNestedOneWithoutQuestionsInput;
    options?: Prisma.QuizOptionCreateNestedManyWithoutQuestionInput;
};
export type QuizQuestionUncheckedCreateWithoutAnswersInput = {
    id?: string;
    quizId: string;
    question: string;
    position: number;
    marks?: number;
    createdAt?: Date | string;
    options?: Prisma.QuizOptionUncheckedCreateNestedManyWithoutQuestionInput;
};
export type QuizQuestionCreateOrConnectWithoutAnswersInput = {
    where: Prisma.QuizQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizQuestionCreateWithoutAnswersInput, Prisma.QuizQuestionUncheckedCreateWithoutAnswersInput>;
};
export type QuizQuestionUpsertWithoutAnswersInput = {
    update: Prisma.XOR<Prisma.QuizQuestionUpdateWithoutAnswersInput, Prisma.QuizQuestionUncheckedUpdateWithoutAnswersInput>;
    create: Prisma.XOR<Prisma.QuizQuestionCreateWithoutAnswersInput, Prisma.QuizQuestionUncheckedCreateWithoutAnswersInput>;
    where?: Prisma.QuizQuestionWhereInput;
};
export type QuizQuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: Prisma.QuizQuestionWhereInput;
    data: Prisma.XOR<Prisma.QuizQuestionUpdateWithoutAnswersInput, Prisma.QuizQuestionUncheckedUpdateWithoutAnswersInput>;
};
export type QuizQuestionUpdateWithoutAnswersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    marks?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quiz?: Prisma.QuizUpdateOneRequiredWithoutQuestionsNestedInput;
    options?: Prisma.QuizOptionUpdateManyWithoutQuestionNestedInput;
};
export type QuizQuestionUncheckedUpdateWithoutAnswersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quizId?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    marks?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    options?: Prisma.QuizOptionUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type QuizQuestionCreateManyQuizInput = {
    id?: string;
    question: string;
    position: number;
    marks?: number;
    createdAt?: Date | string;
};
export type QuizQuestionUpdateWithoutQuizInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    marks?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    options?: Prisma.QuizOptionUpdateManyWithoutQuestionNestedInput;
    answers?: Prisma.QuizAnswerUpdateManyWithoutQuestionNestedInput;
};
export type QuizQuestionUncheckedUpdateWithoutQuizInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    marks?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    options?: Prisma.QuizOptionUncheckedUpdateManyWithoutQuestionNestedInput;
    answers?: Prisma.QuizAnswerUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type QuizQuestionUncheckedUpdateManyWithoutQuizInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    marks?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuizQuestionCountOutputType = {
    options: number;
    answers: number;
};
export type QuizQuestionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    options?: boolean | QuizQuestionCountOutputTypeCountOptionsArgs;
    answers?: boolean | QuizQuestionCountOutputTypeCountAnswersArgs;
};
export type QuizQuestionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizQuestionCountOutputTypeSelect<ExtArgs> | null;
};
export type QuizQuestionCountOutputTypeCountOptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizOptionWhereInput;
};
export type QuizQuestionCountOutputTypeCountAnswersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizAnswerWhereInput;
};
export type QuizQuestionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    quizId?: boolean;
    question?: boolean;
    position?: boolean;
    marks?: boolean;
    createdAt?: boolean;
    quiz?: boolean | Prisma.QuizDefaultArgs<ExtArgs>;
    options?: boolean | Prisma.QuizQuestion$optionsArgs<ExtArgs>;
    answers?: boolean | Prisma.QuizQuestion$answersArgs<ExtArgs>;
    _count?: boolean | Prisma.QuizQuestionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quizQuestion"]>;
export type QuizQuestionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    quizId?: boolean;
    question?: boolean;
    position?: boolean;
    marks?: boolean;
    createdAt?: boolean;
    quiz?: boolean | Prisma.QuizDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quizQuestion"]>;
export type QuizQuestionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    quizId?: boolean;
    question?: boolean;
    position?: boolean;
    marks?: boolean;
    createdAt?: boolean;
    quiz?: boolean | Prisma.QuizDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quizQuestion"]>;
export type QuizQuestionSelectScalar = {
    id?: boolean;
    quizId?: boolean;
    question?: boolean;
    position?: boolean;
    marks?: boolean;
    createdAt?: boolean;
};
export type QuizQuestionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "quizId" | "question" | "position" | "marks" | "createdAt", ExtArgs["result"]["quizQuestion"]>;
export type QuizQuestionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    quiz?: boolean | Prisma.QuizDefaultArgs<ExtArgs>;
    options?: boolean | Prisma.QuizQuestion$optionsArgs<ExtArgs>;
    answers?: boolean | Prisma.QuizQuestion$answersArgs<ExtArgs>;
    _count?: boolean | Prisma.QuizQuestionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type QuizQuestionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    quiz?: boolean | Prisma.QuizDefaultArgs<ExtArgs>;
};
export type QuizQuestionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    quiz?: boolean | Prisma.QuizDefaultArgs<ExtArgs>;
};
export type $QuizQuestionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "QuizQuestion";
    objects: {
        quiz: Prisma.$QuizPayload<ExtArgs>;
        options: Prisma.$QuizOptionPayload<ExtArgs>[];
        answers: Prisma.$QuizAnswerPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        quizId: string;
        question: string;
        position: number;
        marks: number;
        createdAt: Date;
    }, ExtArgs["result"]["quizQuestion"]>;
    composites: {};
};
export type QuizQuestionGetPayload<S extends boolean | null | undefined | QuizQuestionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload, S>;
export type QuizQuestionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<QuizQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QuizQuestionCountAggregateInputType | true;
};
export interface QuizQuestionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['QuizQuestion'];
        meta: {
            name: 'QuizQuestion';
        };
    };
    findUnique<T extends QuizQuestionFindUniqueArgs>(args: Prisma.SelectSubset<T, QuizQuestionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__QuizQuestionClient<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends QuizQuestionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, QuizQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuizQuestionClient<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends QuizQuestionFindFirstArgs>(args?: Prisma.SelectSubset<T, QuizQuestionFindFirstArgs<ExtArgs>>): Prisma.Prisma__QuizQuestionClient<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends QuizQuestionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, QuizQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuizQuestionClient<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends QuizQuestionFindManyArgs>(args?: Prisma.SelectSubset<T, QuizQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends QuizQuestionCreateArgs>(args: Prisma.SelectSubset<T, QuizQuestionCreateArgs<ExtArgs>>): Prisma.Prisma__QuizQuestionClient<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends QuizQuestionCreateManyArgs>(args?: Prisma.SelectSubset<T, QuizQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends QuizQuestionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, QuizQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends QuizQuestionDeleteArgs>(args: Prisma.SelectSubset<T, QuizQuestionDeleteArgs<ExtArgs>>): Prisma.Prisma__QuizQuestionClient<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends QuizQuestionUpdateArgs>(args: Prisma.SelectSubset<T, QuizQuestionUpdateArgs<ExtArgs>>): Prisma.Prisma__QuizQuestionClient<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends QuizQuestionDeleteManyArgs>(args?: Prisma.SelectSubset<T, QuizQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends QuizQuestionUpdateManyArgs>(args: Prisma.SelectSubset<T, QuizQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends QuizQuestionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, QuizQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends QuizQuestionUpsertArgs>(args: Prisma.SelectSubset<T, QuizQuestionUpsertArgs<ExtArgs>>): Prisma.Prisma__QuizQuestionClient<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends QuizQuestionCountArgs>(args?: Prisma.Subset<T, QuizQuestionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], QuizQuestionCountAggregateOutputType> : number>;
    aggregate<T extends QuizQuestionAggregateArgs>(args: Prisma.Subset<T, QuizQuestionAggregateArgs>): Prisma.PrismaPromise<GetQuizQuestionAggregateType<T>>;
    groupBy<T extends QuizQuestionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: QuizQuestionGroupByArgs['orderBy'];
    } : {
        orderBy?: QuizQuestionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, QuizQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: QuizQuestionFieldRefs;
}
export interface Prisma__QuizQuestionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    quiz<T extends Prisma.QuizDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuizDefaultArgs<ExtArgs>>): Prisma.Prisma__QuizClient<runtime.Types.Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    options<T extends Prisma.QuizQuestion$optionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuizQuestion$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    answers<T extends Prisma.QuizQuestion$answersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuizQuestion$answersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface QuizQuestionFieldRefs {
    readonly id: Prisma.FieldRef<"QuizQuestion", 'String'>;
    readonly quizId: Prisma.FieldRef<"QuizQuestion", 'String'>;
    readonly question: Prisma.FieldRef<"QuizQuestion", 'String'>;
    readonly position: Prisma.FieldRef<"QuizQuestion", 'Int'>;
    readonly marks: Prisma.FieldRef<"QuizQuestion", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"QuizQuestion", 'DateTime'>;
}
export type QuizQuestionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizQuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuizQuestionOmit<ExtArgs> | null;
    include?: Prisma.QuizQuestionInclude<ExtArgs> | null;
    where: Prisma.QuizQuestionWhereUniqueInput;
};
export type QuizQuestionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizQuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuizQuestionOmit<ExtArgs> | null;
    include?: Prisma.QuizQuestionInclude<ExtArgs> | null;
    where: Prisma.QuizQuestionWhereUniqueInput;
};
export type QuizQuestionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuizQuestionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuizQuestionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuizQuestionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizQuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuizQuestionOmit<ExtArgs> | null;
    include?: Prisma.QuizQuestionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizQuestionCreateInput, Prisma.QuizQuestionUncheckedCreateInput>;
};
export type QuizQuestionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.QuizQuestionCreateManyInput | Prisma.QuizQuestionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type QuizQuestionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizQuestionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuizQuestionOmit<ExtArgs> | null;
    data: Prisma.QuizQuestionCreateManyInput | Prisma.QuizQuestionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.QuizQuestionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type QuizQuestionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizQuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuizQuestionOmit<ExtArgs> | null;
    include?: Prisma.QuizQuestionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizQuestionUpdateInput, Prisma.QuizQuestionUncheckedUpdateInput>;
    where: Prisma.QuizQuestionWhereUniqueInput;
};
export type QuizQuestionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.QuizQuestionUpdateManyMutationInput, Prisma.QuizQuestionUncheckedUpdateManyInput>;
    where?: Prisma.QuizQuestionWhereInput;
    limit?: number;
};
export type QuizQuestionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizQuestionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuizQuestionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizQuestionUpdateManyMutationInput, Prisma.QuizQuestionUncheckedUpdateManyInput>;
    where?: Prisma.QuizQuestionWhereInput;
    limit?: number;
    include?: Prisma.QuizQuestionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type QuizQuestionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizQuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuizQuestionOmit<ExtArgs> | null;
    include?: Prisma.QuizQuestionInclude<ExtArgs> | null;
    where: Prisma.QuizQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizQuestionCreateInput, Prisma.QuizQuestionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.QuizQuestionUpdateInput, Prisma.QuizQuestionUncheckedUpdateInput>;
};
export type QuizQuestionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizQuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuizQuestionOmit<ExtArgs> | null;
    include?: Prisma.QuizQuestionInclude<ExtArgs> | null;
    where: Prisma.QuizQuestionWhereUniqueInput;
};
export type QuizQuestionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizQuestionWhereInput;
    limit?: number;
};
export type QuizQuestion$optionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizOptionSelect<ExtArgs> | null;
    omit?: Prisma.QuizOptionOmit<ExtArgs> | null;
    include?: Prisma.QuizOptionInclude<ExtArgs> | null;
    where?: Prisma.QuizOptionWhereInput;
    orderBy?: Prisma.QuizOptionOrderByWithRelationInput | Prisma.QuizOptionOrderByWithRelationInput[];
    cursor?: Prisma.QuizOptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuizOptionScalarFieldEnum | Prisma.QuizOptionScalarFieldEnum[];
};
export type QuizQuestion$answersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuizQuestionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizQuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuizQuestionOmit<ExtArgs> | null;
    include?: Prisma.QuizQuestionInclude<ExtArgs> | null;
};
