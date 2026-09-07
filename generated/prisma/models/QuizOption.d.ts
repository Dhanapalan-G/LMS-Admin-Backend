import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type QuizOptionModel = runtime.Types.Result.DefaultSelection<Prisma.$QuizOptionPayload>;
export type AggregateQuizOption = {
    _count: QuizOptionCountAggregateOutputType | null;
    _avg: QuizOptionAvgAggregateOutputType | null;
    _sum: QuizOptionSumAggregateOutputType | null;
    _min: QuizOptionMinAggregateOutputType | null;
    _max: QuizOptionMaxAggregateOutputType | null;
};
export type QuizOptionAvgAggregateOutputType = {
    position: number | null;
};
export type QuizOptionSumAggregateOutputType = {
    position: number | null;
};
export type QuizOptionMinAggregateOutputType = {
    id: string | null;
    questionId: string | null;
    optionText: string | null;
    position: number | null;
    isCorrect: boolean | null;
};
export type QuizOptionMaxAggregateOutputType = {
    id: string | null;
    questionId: string | null;
    optionText: string | null;
    position: number | null;
    isCorrect: boolean | null;
};
export type QuizOptionCountAggregateOutputType = {
    id: number;
    questionId: number;
    optionText: number;
    position: number;
    isCorrect: number;
    _all: number;
};
export type QuizOptionAvgAggregateInputType = {
    position?: true;
};
export type QuizOptionSumAggregateInputType = {
    position?: true;
};
export type QuizOptionMinAggregateInputType = {
    id?: true;
    questionId?: true;
    optionText?: true;
    position?: true;
    isCorrect?: true;
};
export type QuizOptionMaxAggregateInputType = {
    id?: true;
    questionId?: true;
    optionText?: true;
    position?: true;
    isCorrect?: true;
};
export type QuizOptionCountAggregateInputType = {
    id?: true;
    questionId?: true;
    optionText?: true;
    position?: true;
    isCorrect?: true;
    _all?: true;
};
export type QuizOptionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizOptionWhereInput;
    orderBy?: Prisma.QuizOptionOrderByWithRelationInput | Prisma.QuizOptionOrderByWithRelationInput[];
    cursor?: Prisma.QuizOptionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | QuizOptionCountAggregateInputType;
    _avg?: QuizOptionAvgAggregateInputType;
    _sum?: QuizOptionSumAggregateInputType;
    _min?: QuizOptionMinAggregateInputType;
    _max?: QuizOptionMaxAggregateInputType;
};
export type GetQuizOptionAggregateType<T extends QuizOptionAggregateArgs> = {
    [P in keyof T & keyof AggregateQuizOption]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuizOption[P]> : Prisma.GetScalarType<T[P], AggregateQuizOption[P]>;
};
export type QuizOptionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizOptionWhereInput;
    orderBy?: Prisma.QuizOptionOrderByWithAggregationInput | Prisma.QuizOptionOrderByWithAggregationInput[];
    by: Prisma.QuizOptionScalarFieldEnum[] | Prisma.QuizOptionScalarFieldEnum;
    having?: Prisma.QuizOptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuizOptionCountAggregateInputType | true;
    _avg?: QuizOptionAvgAggregateInputType;
    _sum?: QuizOptionSumAggregateInputType;
    _min?: QuizOptionMinAggregateInputType;
    _max?: QuizOptionMaxAggregateInputType;
};
export type QuizOptionGroupByOutputType = {
    id: string;
    questionId: string;
    optionText: string;
    position: number;
    isCorrect: boolean;
    _count: QuizOptionCountAggregateOutputType | null;
    _avg: QuizOptionAvgAggregateOutputType | null;
    _sum: QuizOptionSumAggregateOutputType | null;
    _min: QuizOptionMinAggregateOutputType | null;
    _max: QuizOptionMaxAggregateOutputType | null;
};
export type GetQuizOptionGroupByPayload<T extends QuizOptionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<QuizOptionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QuizOptionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], QuizOptionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], QuizOptionGroupByOutputType[P]>;
}>>;
export type QuizOptionWhereInput = {
    AND?: Prisma.QuizOptionWhereInput | Prisma.QuizOptionWhereInput[];
    OR?: Prisma.QuizOptionWhereInput[];
    NOT?: Prisma.QuizOptionWhereInput | Prisma.QuizOptionWhereInput[];
    id?: Prisma.StringFilter<"QuizOption"> | string;
    questionId?: Prisma.StringFilter<"QuizOption"> | string;
    optionText?: Prisma.StringFilter<"QuizOption"> | string;
    position?: Prisma.IntFilter<"QuizOption"> | number;
    isCorrect?: Prisma.BoolFilter<"QuizOption"> | boolean;
    question?: Prisma.XOR<Prisma.QuizQuestionScalarRelationFilter, Prisma.QuizQuestionWhereInput>;
    answers?: Prisma.QuizAnswerListRelationFilter;
};
export type QuizOptionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    optionText?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    question?: Prisma.QuizQuestionOrderByWithRelationInput;
    answers?: Prisma.QuizAnswerOrderByRelationAggregateInput;
};
export type QuizOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.QuizOptionWhereInput | Prisma.QuizOptionWhereInput[];
    OR?: Prisma.QuizOptionWhereInput[];
    NOT?: Prisma.QuizOptionWhereInput | Prisma.QuizOptionWhereInput[];
    questionId?: Prisma.StringFilter<"QuizOption"> | string;
    optionText?: Prisma.StringFilter<"QuizOption"> | string;
    position?: Prisma.IntFilter<"QuizOption"> | number;
    isCorrect?: Prisma.BoolFilter<"QuizOption"> | boolean;
    question?: Prisma.XOR<Prisma.QuizQuestionScalarRelationFilter, Prisma.QuizQuestionWhereInput>;
    answers?: Prisma.QuizAnswerListRelationFilter;
}, "id">;
export type QuizOptionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    optionText?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    _count?: Prisma.QuizOptionCountOrderByAggregateInput;
    _avg?: Prisma.QuizOptionAvgOrderByAggregateInput;
    _max?: Prisma.QuizOptionMaxOrderByAggregateInput;
    _min?: Prisma.QuizOptionMinOrderByAggregateInput;
    _sum?: Prisma.QuizOptionSumOrderByAggregateInput;
};
export type QuizOptionScalarWhereWithAggregatesInput = {
    AND?: Prisma.QuizOptionScalarWhereWithAggregatesInput | Prisma.QuizOptionScalarWhereWithAggregatesInput[];
    OR?: Prisma.QuizOptionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.QuizOptionScalarWhereWithAggregatesInput | Prisma.QuizOptionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"QuizOption"> | string;
    questionId?: Prisma.StringWithAggregatesFilter<"QuizOption"> | string;
    optionText?: Prisma.StringWithAggregatesFilter<"QuizOption"> | string;
    position?: Prisma.IntWithAggregatesFilter<"QuizOption"> | number;
    isCorrect?: Prisma.BoolWithAggregatesFilter<"QuizOption"> | boolean;
};
export type QuizOptionCreateInput = {
    id?: string;
    optionText: string;
    position: number;
    isCorrect?: boolean;
    question: Prisma.QuizQuestionCreateNestedOneWithoutOptionsInput;
    answers?: Prisma.QuizAnswerCreateNestedManyWithoutOptionInput;
};
export type QuizOptionUncheckedCreateInput = {
    id?: string;
    questionId: string;
    optionText: string;
    position: number;
    isCorrect?: boolean;
    answers?: Prisma.QuizAnswerUncheckedCreateNestedManyWithoutOptionInput;
};
export type QuizOptionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    optionText?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    question?: Prisma.QuizQuestionUpdateOneRequiredWithoutOptionsNestedInput;
    answers?: Prisma.QuizAnswerUpdateManyWithoutOptionNestedInput;
};
export type QuizOptionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    optionText?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answers?: Prisma.QuizAnswerUncheckedUpdateManyWithoutOptionNestedInput;
};
export type QuizOptionCreateManyInput = {
    id?: string;
    questionId: string;
    optionText: string;
    position: number;
    isCorrect?: boolean;
};
export type QuizOptionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    optionText?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type QuizOptionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    optionText?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type QuizOptionListRelationFilter = {
    every?: Prisma.QuizOptionWhereInput;
    some?: Prisma.QuizOptionWhereInput;
    none?: Prisma.QuizOptionWhereInput;
};
export type QuizOptionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type QuizOptionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    optionText?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
};
export type QuizOptionAvgOrderByAggregateInput = {
    position?: Prisma.SortOrder;
};
export type QuizOptionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    optionText?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
};
export type QuizOptionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    optionText?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
};
export type QuizOptionSumOrderByAggregateInput = {
    position?: Prisma.SortOrder;
};
export type QuizOptionNullableScalarRelationFilter = {
    is?: Prisma.QuizOptionWhereInput | null;
    isNot?: Prisma.QuizOptionWhereInput | null;
};
export type QuizOptionCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.QuizOptionCreateWithoutQuestionInput, Prisma.QuizOptionUncheckedCreateWithoutQuestionInput> | Prisma.QuizOptionCreateWithoutQuestionInput[] | Prisma.QuizOptionUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.QuizOptionCreateOrConnectWithoutQuestionInput | Prisma.QuizOptionCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.QuizOptionCreateManyQuestionInputEnvelope;
    connect?: Prisma.QuizOptionWhereUniqueInput | Prisma.QuizOptionWhereUniqueInput[];
};
export type QuizOptionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.QuizOptionCreateWithoutQuestionInput, Prisma.QuizOptionUncheckedCreateWithoutQuestionInput> | Prisma.QuizOptionCreateWithoutQuestionInput[] | Prisma.QuizOptionUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.QuizOptionCreateOrConnectWithoutQuestionInput | Prisma.QuizOptionCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.QuizOptionCreateManyQuestionInputEnvelope;
    connect?: Prisma.QuizOptionWhereUniqueInput | Prisma.QuizOptionWhereUniqueInput[];
};
export type QuizOptionUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.QuizOptionCreateWithoutQuestionInput, Prisma.QuizOptionUncheckedCreateWithoutQuestionInput> | Prisma.QuizOptionCreateWithoutQuestionInput[] | Prisma.QuizOptionUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.QuizOptionCreateOrConnectWithoutQuestionInput | Prisma.QuizOptionCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.QuizOptionUpsertWithWhereUniqueWithoutQuestionInput | Prisma.QuizOptionUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.QuizOptionCreateManyQuestionInputEnvelope;
    set?: Prisma.QuizOptionWhereUniqueInput | Prisma.QuizOptionWhereUniqueInput[];
    disconnect?: Prisma.QuizOptionWhereUniqueInput | Prisma.QuizOptionWhereUniqueInput[];
    delete?: Prisma.QuizOptionWhereUniqueInput | Prisma.QuizOptionWhereUniqueInput[];
    connect?: Prisma.QuizOptionWhereUniqueInput | Prisma.QuizOptionWhereUniqueInput[];
    update?: Prisma.QuizOptionUpdateWithWhereUniqueWithoutQuestionInput | Prisma.QuizOptionUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.QuizOptionUpdateManyWithWhereWithoutQuestionInput | Prisma.QuizOptionUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.QuizOptionScalarWhereInput | Prisma.QuizOptionScalarWhereInput[];
};
export type QuizOptionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.QuizOptionCreateWithoutQuestionInput, Prisma.QuizOptionUncheckedCreateWithoutQuestionInput> | Prisma.QuizOptionCreateWithoutQuestionInput[] | Prisma.QuizOptionUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.QuizOptionCreateOrConnectWithoutQuestionInput | Prisma.QuizOptionCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.QuizOptionUpsertWithWhereUniqueWithoutQuestionInput | Prisma.QuizOptionUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.QuizOptionCreateManyQuestionInputEnvelope;
    set?: Prisma.QuizOptionWhereUniqueInput | Prisma.QuizOptionWhereUniqueInput[];
    disconnect?: Prisma.QuizOptionWhereUniqueInput | Prisma.QuizOptionWhereUniqueInput[];
    delete?: Prisma.QuizOptionWhereUniqueInput | Prisma.QuizOptionWhereUniqueInput[];
    connect?: Prisma.QuizOptionWhereUniqueInput | Prisma.QuizOptionWhereUniqueInput[];
    update?: Prisma.QuizOptionUpdateWithWhereUniqueWithoutQuestionInput | Prisma.QuizOptionUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.QuizOptionUpdateManyWithWhereWithoutQuestionInput | Prisma.QuizOptionUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.QuizOptionScalarWhereInput | Prisma.QuizOptionScalarWhereInput[];
};
export type QuizOptionCreateNestedOneWithoutAnswersInput = {
    create?: Prisma.XOR<Prisma.QuizOptionCreateWithoutAnswersInput, Prisma.QuizOptionUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.QuizOptionCreateOrConnectWithoutAnswersInput;
    connect?: Prisma.QuizOptionWhereUniqueInput;
};
export type QuizOptionUpdateOneWithoutAnswersNestedInput = {
    create?: Prisma.XOR<Prisma.QuizOptionCreateWithoutAnswersInput, Prisma.QuizOptionUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.QuizOptionCreateOrConnectWithoutAnswersInput;
    upsert?: Prisma.QuizOptionUpsertWithoutAnswersInput;
    disconnect?: Prisma.QuizOptionWhereInput | boolean;
    delete?: Prisma.QuizOptionWhereInput | boolean;
    connect?: Prisma.QuizOptionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuizOptionUpdateToOneWithWhereWithoutAnswersInput, Prisma.QuizOptionUpdateWithoutAnswersInput>, Prisma.QuizOptionUncheckedUpdateWithoutAnswersInput>;
};
export type QuizOptionCreateWithoutQuestionInput = {
    id?: string;
    optionText: string;
    position: number;
    isCorrect?: boolean;
    answers?: Prisma.QuizAnswerCreateNestedManyWithoutOptionInput;
};
export type QuizOptionUncheckedCreateWithoutQuestionInput = {
    id?: string;
    optionText: string;
    position: number;
    isCorrect?: boolean;
    answers?: Prisma.QuizAnswerUncheckedCreateNestedManyWithoutOptionInput;
};
export type QuizOptionCreateOrConnectWithoutQuestionInput = {
    where: Prisma.QuizOptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizOptionCreateWithoutQuestionInput, Prisma.QuizOptionUncheckedCreateWithoutQuestionInput>;
};
export type QuizOptionCreateManyQuestionInputEnvelope = {
    data: Prisma.QuizOptionCreateManyQuestionInput | Prisma.QuizOptionCreateManyQuestionInput[];
    skipDuplicates?: boolean;
};
export type QuizOptionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.QuizOptionWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuizOptionUpdateWithoutQuestionInput, Prisma.QuizOptionUncheckedUpdateWithoutQuestionInput>;
    create: Prisma.XOR<Prisma.QuizOptionCreateWithoutQuestionInput, Prisma.QuizOptionUncheckedCreateWithoutQuestionInput>;
};
export type QuizOptionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.QuizOptionWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuizOptionUpdateWithoutQuestionInput, Prisma.QuizOptionUncheckedUpdateWithoutQuestionInput>;
};
export type QuizOptionUpdateManyWithWhereWithoutQuestionInput = {
    where: Prisma.QuizOptionScalarWhereInput;
    data: Prisma.XOR<Prisma.QuizOptionUpdateManyMutationInput, Prisma.QuizOptionUncheckedUpdateManyWithoutQuestionInput>;
};
export type QuizOptionScalarWhereInput = {
    AND?: Prisma.QuizOptionScalarWhereInput | Prisma.QuizOptionScalarWhereInput[];
    OR?: Prisma.QuizOptionScalarWhereInput[];
    NOT?: Prisma.QuizOptionScalarWhereInput | Prisma.QuizOptionScalarWhereInput[];
    id?: Prisma.StringFilter<"QuizOption"> | string;
    questionId?: Prisma.StringFilter<"QuizOption"> | string;
    optionText?: Prisma.StringFilter<"QuizOption"> | string;
    position?: Prisma.IntFilter<"QuizOption"> | number;
    isCorrect?: Prisma.BoolFilter<"QuizOption"> | boolean;
};
export type QuizOptionCreateWithoutAnswersInput = {
    id?: string;
    optionText: string;
    position: number;
    isCorrect?: boolean;
    question: Prisma.QuizQuestionCreateNestedOneWithoutOptionsInput;
};
export type QuizOptionUncheckedCreateWithoutAnswersInput = {
    id?: string;
    questionId: string;
    optionText: string;
    position: number;
    isCorrect?: boolean;
};
export type QuizOptionCreateOrConnectWithoutAnswersInput = {
    where: Prisma.QuizOptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizOptionCreateWithoutAnswersInput, Prisma.QuizOptionUncheckedCreateWithoutAnswersInput>;
};
export type QuizOptionUpsertWithoutAnswersInput = {
    update: Prisma.XOR<Prisma.QuizOptionUpdateWithoutAnswersInput, Prisma.QuizOptionUncheckedUpdateWithoutAnswersInput>;
    create: Prisma.XOR<Prisma.QuizOptionCreateWithoutAnswersInput, Prisma.QuizOptionUncheckedCreateWithoutAnswersInput>;
    where?: Prisma.QuizOptionWhereInput;
};
export type QuizOptionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: Prisma.QuizOptionWhereInput;
    data: Prisma.XOR<Prisma.QuizOptionUpdateWithoutAnswersInput, Prisma.QuizOptionUncheckedUpdateWithoutAnswersInput>;
};
export type QuizOptionUpdateWithoutAnswersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    optionText?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    question?: Prisma.QuizQuestionUpdateOneRequiredWithoutOptionsNestedInput;
};
export type QuizOptionUncheckedUpdateWithoutAnswersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    optionText?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type QuizOptionCreateManyQuestionInput = {
    id?: string;
    optionText: string;
    position: number;
    isCorrect?: boolean;
};
export type QuizOptionUpdateWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    optionText?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answers?: Prisma.QuizAnswerUpdateManyWithoutOptionNestedInput;
};
export type QuizOptionUncheckedUpdateWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    optionText?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answers?: Prisma.QuizAnswerUncheckedUpdateManyWithoutOptionNestedInput;
};
export type QuizOptionUncheckedUpdateManyWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    optionText?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type QuizOptionCountOutputType = {
    answers: number;
};
export type QuizOptionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    answers?: boolean | QuizOptionCountOutputTypeCountAnswersArgs;
};
export type QuizOptionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizOptionCountOutputTypeSelect<ExtArgs> | null;
};
export type QuizOptionCountOutputTypeCountAnswersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizAnswerWhereInput;
};
export type QuizOptionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    questionId?: boolean;
    optionText?: boolean;
    position?: boolean;
    isCorrect?: boolean;
    question?: boolean | Prisma.QuizQuestionDefaultArgs<ExtArgs>;
    answers?: boolean | Prisma.QuizOption$answersArgs<ExtArgs>;
    _count?: boolean | Prisma.QuizOptionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quizOption"]>;
export type QuizOptionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    questionId?: boolean;
    optionText?: boolean;
    position?: boolean;
    isCorrect?: boolean;
    question?: boolean | Prisma.QuizQuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quizOption"]>;
export type QuizOptionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    questionId?: boolean;
    optionText?: boolean;
    position?: boolean;
    isCorrect?: boolean;
    question?: boolean | Prisma.QuizQuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quizOption"]>;
export type QuizOptionSelectScalar = {
    id?: boolean;
    questionId?: boolean;
    optionText?: boolean;
    position?: boolean;
    isCorrect?: boolean;
};
export type QuizOptionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "questionId" | "optionText" | "position" | "isCorrect", ExtArgs["result"]["quizOption"]>;
export type QuizOptionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    question?: boolean | Prisma.QuizQuestionDefaultArgs<ExtArgs>;
    answers?: boolean | Prisma.QuizOption$answersArgs<ExtArgs>;
    _count?: boolean | Prisma.QuizOptionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type QuizOptionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    question?: boolean | Prisma.QuizQuestionDefaultArgs<ExtArgs>;
};
export type QuizOptionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    question?: boolean | Prisma.QuizQuestionDefaultArgs<ExtArgs>;
};
export type $QuizOptionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "QuizOption";
    objects: {
        question: Prisma.$QuizQuestionPayload<ExtArgs>;
        answers: Prisma.$QuizAnswerPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        questionId: string;
        optionText: string;
        position: number;
        isCorrect: boolean;
    }, ExtArgs["result"]["quizOption"]>;
    composites: {};
};
export type QuizOptionGetPayload<S extends boolean | null | undefined | QuizOptionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$QuizOptionPayload, S>;
export type QuizOptionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<QuizOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QuizOptionCountAggregateInputType | true;
};
export interface QuizOptionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['QuizOption'];
        meta: {
            name: 'QuizOption';
        };
    };
    findUnique<T extends QuizOptionFindUniqueArgs>(args: Prisma.SelectSubset<T, QuizOptionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__QuizOptionClient<runtime.Types.Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends QuizOptionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, QuizOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuizOptionClient<runtime.Types.Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends QuizOptionFindFirstArgs>(args?: Prisma.SelectSubset<T, QuizOptionFindFirstArgs<ExtArgs>>): Prisma.Prisma__QuizOptionClient<runtime.Types.Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends QuizOptionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, QuizOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuizOptionClient<runtime.Types.Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends QuizOptionFindManyArgs>(args?: Prisma.SelectSubset<T, QuizOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends QuizOptionCreateArgs>(args: Prisma.SelectSubset<T, QuizOptionCreateArgs<ExtArgs>>): Prisma.Prisma__QuizOptionClient<runtime.Types.Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends QuizOptionCreateManyArgs>(args?: Prisma.SelectSubset<T, QuizOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends QuizOptionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, QuizOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends QuizOptionDeleteArgs>(args: Prisma.SelectSubset<T, QuizOptionDeleteArgs<ExtArgs>>): Prisma.Prisma__QuizOptionClient<runtime.Types.Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends QuizOptionUpdateArgs>(args: Prisma.SelectSubset<T, QuizOptionUpdateArgs<ExtArgs>>): Prisma.Prisma__QuizOptionClient<runtime.Types.Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends QuizOptionDeleteManyArgs>(args?: Prisma.SelectSubset<T, QuizOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends QuizOptionUpdateManyArgs>(args: Prisma.SelectSubset<T, QuizOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends QuizOptionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, QuizOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends QuizOptionUpsertArgs>(args: Prisma.SelectSubset<T, QuizOptionUpsertArgs<ExtArgs>>): Prisma.Prisma__QuizOptionClient<runtime.Types.Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends QuizOptionCountArgs>(args?: Prisma.Subset<T, QuizOptionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], QuizOptionCountAggregateOutputType> : number>;
    aggregate<T extends QuizOptionAggregateArgs>(args: Prisma.Subset<T, QuizOptionAggregateArgs>): Prisma.PrismaPromise<GetQuizOptionAggregateType<T>>;
    groupBy<T extends QuizOptionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: QuizOptionGroupByArgs['orderBy'];
    } : {
        orderBy?: QuizOptionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, QuizOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: QuizOptionFieldRefs;
}
export interface Prisma__QuizOptionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    question<T extends Prisma.QuizQuestionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuizQuestionDefaultArgs<ExtArgs>>): Prisma.Prisma__QuizQuestionClient<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    answers<T extends Prisma.QuizOption$answersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuizOption$answersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface QuizOptionFieldRefs {
    readonly id: Prisma.FieldRef<"QuizOption", 'String'>;
    readonly questionId: Prisma.FieldRef<"QuizOption", 'String'>;
    readonly optionText: Prisma.FieldRef<"QuizOption", 'String'>;
    readonly position: Prisma.FieldRef<"QuizOption", 'Int'>;
    readonly isCorrect: Prisma.FieldRef<"QuizOption", 'Boolean'>;
}
export type QuizOptionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizOptionSelect<ExtArgs> | null;
    omit?: Prisma.QuizOptionOmit<ExtArgs> | null;
    include?: Prisma.QuizOptionInclude<ExtArgs> | null;
    where: Prisma.QuizOptionWhereUniqueInput;
};
export type QuizOptionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizOptionSelect<ExtArgs> | null;
    omit?: Prisma.QuizOptionOmit<ExtArgs> | null;
    include?: Prisma.QuizOptionInclude<ExtArgs> | null;
    where: Prisma.QuizOptionWhereUniqueInput;
};
export type QuizOptionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuizOptionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuizOptionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuizOptionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizOptionSelect<ExtArgs> | null;
    omit?: Prisma.QuizOptionOmit<ExtArgs> | null;
    include?: Prisma.QuizOptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizOptionCreateInput, Prisma.QuizOptionUncheckedCreateInput>;
};
export type QuizOptionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.QuizOptionCreateManyInput | Prisma.QuizOptionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type QuizOptionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizOptionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuizOptionOmit<ExtArgs> | null;
    data: Prisma.QuizOptionCreateManyInput | Prisma.QuizOptionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.QuizOptionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type QuizOptionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizOptionSelect<ExtArgs> | null;
    omit?: Prisma.QuizOptionOmit<ExtArgs> | null;
    include?: Prisma.QuizOptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizOptionUpdateInput, Prisma.QuizOptionUncheckedUpdateInput>;
    where: Prisma.QuizOptionWhereUniqueInput;
};
export type QuizOptionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.QuizOptionUpdateManyMutationInput, Prisma.QuizOptionUncheckedUpdateManyInput>;
    where?: Prisma.QuizOptionWhereInput;
    limit?: number;
};
export type QuizOptionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizOptionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuizOptionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizOptionUpdateManyMutationInput, Prisma.QuizOptionUncheckedUpdateManyInput>;
    where?: Prisma.QuizOptionWhereInput;
    limit?: number;
    include?: Prisma.QuizOptionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type QuizOptionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizOptionSelect<ExtArgs> | null;
    omit?: Prisma.QuizOptionOmit<ExtArgs> | null;
    include?: Prisma.QuizOptionInclude<ExtArgs> | null;
    where: Prisma.QuizOptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizOptionCreateInput, Prisma.QuizOptionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.QuizOptionUpdateInput, Prisma.QuizOptionUncheckedUpdateInput>;
};
export type QuizOptionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizOptionSelect<ExtArgs> | null;
    omit?: Prisma.QuizOptionOmit<ExtArgs> | null;
    include?: Prisma.QuizOptionInclude<ExtArgs> | null;
    where: Prisma.QuizOptionWhereUniqueInput;
};
export type QuizOptionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizOptionWhereInput;
    limit?: number;
};
export type QuizOption$answersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuizOptionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizOptionSelect<ExtArgs> | null;
    omit?: Prisma.QuizOptionOmit<ExtArgs> | null;
    include?: Prisma.QuizOptionInclude<ExtArgs> | null;
};
