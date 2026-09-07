import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LessonProgressModel = runtime.Types.Result.DefaultSelection<Prisma.$LessonProgressPayload>;
export type AggregateLessonProgress = {
    _count: LessonProgressCountAggregateOutputType | null;
    _avg: LessonProgressAvgAggregateOutputType | null;
    _sum: LessonProgressSumAggregateOutputType | null;
    _min: LessonProgressMinAggregateOutputType | null;
    _max: LessonProgressMaxAggregateOutputType | null;
};
export type LessonProgressAvgAggregateOutputType = {
    position: number | null;
    percentage: number | null;
};
export type LessonProgressSumAggregateOutputType = {
    position: number | null;
    percentage: number | null;
};
export type LessonProgressMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    lessonId: string | null;
    status: $Enums.ProgressStatus | null;
    position: number | null;
    percentage: number | null;
    startedAt: Date | null;
    completedAt: Date | null;
    updatedAt: Date | null;
};
export type LessonProgressMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    lessonId: string | null;
    status: $Enums.ProgressStatus | null;
    position: number | null;
    percentage: number | null;
    startedAt: Date | null;
    completedAt: Date | null;
    updatedAt: Date | null;
};
export type LessonProgressCountAggregateOutputType = {
    id: number;
    userId: number;
    lessonId: number;
    status: number;
    position: number;
    percentage: number;
    startedAt: number;
    completedAt: number;
    updatedAt: number;
    _all: number;
};
export type LessonProgressAvgAggregateInputType = {
    position?: true;
    percentage?: true;
};
export type LessonProgressSumAggregateInputType = {
    position?: true;
    percentage?: true;
};
export type LessonProgressMinAggregateInputType = {
    id?: true;
    userId?: true;
    lessonId?: true;
    status?: true;
    position?: true;
    percentage?: true;
    startedAt?: true;
    completedAt?: true;
    updatedAt?: true;
};
export type LessonProgressMaxAggregateInputType = {
    id?: true;
    userId?: true;
    lessonId?: true;
    status?: true;
    position?: true;
    percentage?: true;
    startedAt?: true;
    completedAt?: true;
    updatedAt?: true;
};
export type LessonProgressCountAggregateInputType = {
    id?: true;
    userId?: true;
    lessonId?: true;
    status?: true;
    position?: true;
    percentage?: true;
    startedAt?: true;
    completedAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LessonProgressAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonProgressWhereInput;
    orderBy?: Prisma.LessonProgressOrderByWithRelationInput | Prisma.LessonProgressOrderByWithRelationInput[];
    cursor?: Prisma.LessonProgressWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LessonProgressCountAggregateInputType;
    _avg?: LessonProgressAvgAggregateInputType;
    _sum?: LessonProgressSumAggregateInputType;
    _min?: LessonProgressMinAggregateInputType;
    _max?: LessonProgressMaxAggregateInputType;
};
export type GetLessonProgressAggregateType<T extends LessonProgressAggregateArgs> = {
    [P in keyof T & keyof AggregateLessonProgress]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLessonProgress[P]> : Prisma.GetScalarType<T[P], AggregateLessonProgress[P]>;
};
export type LessonProgressGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonProgressWhereInput;
    orderBy?: Prisma.LessonProgressOrderByWithAggregationInput | Prisma.LessonProgressOrderByWithAggregationInput[];
    by: Prisma.LessonProgressScalarFieldEnum[] | Prisma.LessonProgressScalarFieldEnum;
    having?: Prisma.LessonProgressScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LessonProgressCountAggregateInputType | true;
    _avg?: LessonProgressAvgAggregateInputType;
    _sum?: LessonProgressSumAggregateInputType;
    _min?: LessonProgressMinAggregateInputType;
    _max?: LessonProgressMaxAggregateInputType;
};
export type LessonProgressGroupByOutputType = {
    id: string;
    userId: string;
    lessonId: string;
    status: $Enums.ProgressStatus;
    position: number;
    percentage: number;
    startedAt: Date | null;
    completedAt: Date | null;
    updatedAt: Date;
    _count: LessonProgressCountAggregateOutputType | null;
    _avg: LessonProgressAvgAggregateOutputType | null;
    _sum: LessonProgressSumAggregateOutputType | null;
    _min: LessonProgressMinAggregateOutputType | null;
    _max: LessonProgressMaxAggregateOutputType | null;
};
export type GetLessonProgressGroupByPayload<T extends LessonProgressGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LessonProgressGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LessonProgressGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LessonProgressGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LessonProgressGroupByOutputType[P]>;
}>>;
export type LessonProgressWhereInput = {
    AND?: Prisma.LessonProgressWhereInput | Prisma.LessonProgressWhereInput[];
    OR?: Prisma.LessonProgressWhereInput[];
    NOT?: Prisma.LessonProgressWhereInput | Prisma.LessonProgressWhereInput[];
    id?: Prisma.StringFilter<"LessonProgress"> | string;
    userId?: Prisma.StringFilter<"LessonProgress"> | string;
    lessonId?: Prisma.StringFilter<"LessonProgress"> | string;
    status?: Prisma.EnumProgressStatusFilter<"LessonProgress"> | $Enums.ProgressStatus;
    position?: Prisma.IntFilter<"LessonProgress"> | number;
    percentage?: Prisma.FloatFilter<"LessonProgress"> | number;
    startedAt?: Prisma.DateTimeNullableFilter<"LessonProgress"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"LessonProgress"> | Date | string | null;
    updatedAt?: Prisma.DateTimeFilter<"LessonProgress"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    lesson?: Prisma.XOR<Prisma.LessonScalarRelationFilter, Prisma.LessonWhereInput>;
};
export type LessonProgressOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    lesson?: Prisma.LessonOrderByWithRelationInput;
};
export type LessonProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_lessonId?: Prisma.LessonProgressUserIdLessonIdCompoundUniqueInput;
    AND?: Prisma.LessonProgressWhereInput | Prisma.LessonProgressWhereInput[];
    OR?: Prisma.LessonProgressWhereInput[];
    NOT?: Prisma.LessonProgressWhereInput | Prisma.LessonProgressWhereInput[];
    userId?: Prisma.StringFilter<"LessonProgress"> | string;
    lessonId?: Prisma.StringFilter<"LessonProgress"> | string;
    status?: Prisma.EnumProgressStatusFilter<"LessonProgress"> | $Enums.ProgressStatus;
    position?: Prisma.IntFilter<"LessonProgress"> | number;
    percentage?: Prisma.FloatFilter<"LessonProgress"> | number;
    startedAt?: Prisma.DateTimeNullableFilter<"LessonProgress"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"LessonProgress"> | Date | string | null;
    updatedAt?: Prisma.DateTimeFilter<"LessonProgress"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    lesson?: Prisma.XOR<Prisma.LessonScalarRelationFilter, Prisma.LessonWhereInput>;
}, "id" | "userId_lessonId">;
export type LessonProgressOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LessonProgressCountOrderByAggregateInput;
    _avg?: Prisma.LessonProgressAvgOrderByAggregateInput;
    _max?: Prisma.LessonProgressMaxOrderByAggregateInput;
    _min?: Prisma.LessonProgressMinOrderByAggregateInput;
    _sum?: Prisma.LessonProgressSumOrderByAggregateInput;
};
export type LessonProgressScalarWhereWithAggregatesInput = {
    AND?: Prisma.LessonProgressScalarWhereWithAggregatesInput | Prisma.LessonProgressScalarWhereWithAggregatesInput[];
    OR?: Prisma.LessonProgressScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LessonProgressScalarWhereWithAggregatesInput | Prisma.LessonProgressScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LessonProgress"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"LessonProgress"> | string;
    lessonId?: Prisma.StringWithAggregatesFilter<"LessonProgress"> | string;
    status?: Prisma.EnumProgressStatusWithAggregatesFilter<"LessonProgress"> | $Enums.ProgressStatus;
    position?: Prisma.IntWithAggregatesFilter<"LessonProgress"> | number;
    percentage?: Prisma.FloatWithAggregatesFilter<"LessonProgress"> | number;
    startedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"LessonProgress"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"LessonProgress"> | Date | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"LessonProgress"> | Date | string;
};
export type LessonProgressCreateInput = {
    id?: string;
    status?: $Enums.ProgressStatus;
    position?: number;
    percentage?: number;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutProgressInput;
    lesson: Prisma.LessonCreateNestedOneWithoutProgressInput;
};
export type LessonProgressUncheckedCreateInput = {
    id?: string;
    userId: string;
    lessonId: string;
    status?: $Enums.ProgressStatus;
    position?: number;
    percentage?: number;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    updatedAt?: Date | string;
};
export type LessonProgressUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutProgressNestedInput;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutProgressNestedInput;
};
export type LessonProgressUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonProgressCreateManyInput = {
    id?: string;
    userId: string;
    lessonId: string;
    status?: $Enums.ProgressStatus;
    position?: number;
    percentage?: number;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    updatedAt?: Date | string;
};
export type LessonProgressUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonProgressUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonProgressListRelationFilter = {
    every?: Prisma.LessonProgressWhereInput;
    some?: Prisma.LessonProgressWhereInput;
    none?: Prisma.LessonProgressWhereInput;
};
export type LessonProgressOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LessonProgressUserIdLessonIdCompoundUniqueInput = {
    userId: string;
    lessonId: string;
};
export type LessonProgressCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LessonProgressAvgOrderByAggregateInput = {
    position?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
};
export type LessonProgressMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LessonProgressMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LessonProgressSumOrderByAggregateInput = {
    position?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
};
export type LessonProgressCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LessonProgressCreateWithoutUserInput, Prisma.LessonProgressUncheckedCreateWithoutUserInput> | Prisma.LessonProgressCreateWithoutUserInput[] | Prisma.LessonProgressUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LessonProgressCreateOrConnectWithoutUserInput | Prisma.LessonProgressCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LessonProgressCreateManyUserInputEnvelope;
    connect?: Prisma.LessonProgressWhereUniqueInput | Prisma.LessonProgressWhereUniqueInput[];
};
export type LessonProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LessonProgressCreateWithoutUserInput, Prisma.LessonProgressUncheckedCreateWithoutUserInput> | Prisma.LessonProgressCreateWithoutUserInput[] | Prisma.LessonProgressUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LessonProgressCreateOrConnectWithoutUserInput | Prisma.LessonProgressCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LessonProgressCreateManyUserInputEnvelope;
    connect?: Prisma.LessonProgressWhereUniqueInput | Prisma.LessonProgressWhereUniqueInput[];
};
export type LessonProgressUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LessonProgressCreateWithoutUserInput, Prisma.LessonProgressUncheckedCreateWithoutUserInput> | Prisma.LessonProgressCreateWithoutUserInput[] | Prisma.LessonProgressUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LessonProgressCreateOrConnectWithoutUserInput | Prisma.LessonProgressCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LessonProgressUpsertWithWhereUniqueWithoutUserInput | Prisma.LessonProgressUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LessonProgressCreateManyUserInputEnvelope;
    set?: Prisma.LessonProgressWhereUniqueInput | Prisma.LessonProgressWhereUniqueInput[];
    disconnect?: Prisma.LessonProgressWhereUniqueInput | Prisma.LessonProgressWhereUniqueInput[];
    delete?: Prisma.LessonProgressWhereUniqueInput | Prisma.LessonProgressWhereUniqueInput[];
    connect?: Prisma.LessonProgressWhereUniqueInput | Prisma.LessonProgressWhereUniqueInput[];
    update?: Prisma.LessonProgressUpdateWithWhereUniqueWithoutUserInput | Prisma.LessonProgressUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LessonProgressUpdateManyWithWhereWithoutUserInput | Prisma.LessonProgressUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LessonProgressScalarWhereInput | Prisma.LessonProgressScalarWhereInput[];
};
export type LessonProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LessonProgressCreateWithoutUserInput, Prisma.LessonProgressUncheckedCreateWithoutUserInput> | Prisma.LessonProgressCreateWithoutUserInput[] | Prisma.LessonProgressUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LessonProgressCreateOrConnectWithoutUserInput | Prisma.LessonProgressCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LessonProgressUpsertWithWhereUniqueWithoutUserInput | Prisma.LessonProgressUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LessonProgressCreateManyUserInputEnvelope;
    set?: Prisma.LessonProgressWhereUniqueInput | Prisma.LessonProgressWhereUniqueInput[];
    disconnect?: Prisma.LessonProgressWhereUniqueInput | Prisma.LessonProgressWhereUniqueInput[];
    delete?: Prisma.LessonProgressWhereUniqueInput | Prisma.LessonProgressWhereUniqueInput[];
    connect?: Prisma.LessonProgressWhereUniqueInput | Prisma.LessonProgressWhereUniqueInput[];
    update?: Prisma.LessonProgressUpdateWithWhereUniqueWithoutUserInput | Prisma.LessonProgressUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LessonProgressUpdateManyWithWhereWithoutUserInput | Prisma.LessonProgressUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LessonProgressScalarWhereInput | Prisma.LessonProgressScalarWhereInput[];
};
export type LessonProgressCreateNestedManyWithoutLessonInput = {
    create?: Prisma.XOR<Prisma.LessonProgressCreateWithoutLessonInput, Prisma.LessonProgressUncheckedCreateWithoutLessonInput> | Prisma.LessonProgressCreateWithoutLessonInput[] | Prisma.LessonProgressUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.LessonProgressCreateOrConnectWithoutLessonInput | Prisma.LessonProgressCreateOrConnectWithoutLessonInput[];
    createMany?: Prisma.LessonProgressCreateManyLessonInputEnvelope;
    connect?: Prisma.LessonProgressWhereUniqueInput | Prisma.LessonProgressWhereUniqueInput[];
};
export type LessonProgressUncheckedCreateNestedManyWithoutLessonInput = {
    create?: Prisma.XOR<Prisma.LessonProgressCreateWithoutLessonInput, Prisma.LessonProgressUncheckedCreateWithoutLessonInput> | Prisma.LessonProgressCreateWithoutLessonInput[] | Prisma.LessonProgressUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.LessonProgressCreateOrConnectWithoutLessonInput | Prisma.LessonProgressCreateOrConnectWithoutLessonInput[];
    createMany?: Prisma.LessonProgressCreateManyLessonInputEnvelope;
    connect?: Prisma.LessonProgressWhereUniqueInput | Prisma.LessonProgressWhereUniqueInput[];
};
export type LessonProgressUpdateManyWithoutLessonNestedInput = {
    create?: Prisma.XOR<Prisma.LessonProgressCreateWithoutLessonInput, Prisma.LessonProgressUncheckedCreateWithoutLessonInput> | Prisma.LessonProgressCreateWithoutLessonInput[] | Prisma.LessonProgressUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.LessonProgressCreateOrConnectWithoutLessonInput | Prisma.LessonProgressCreateOrConnectWithoutLessonInput[];
    upsert?: Prisma.LessonProgressUpsertWithWhereUniqueWithoutLessonInput | Prisma.LessonProgressUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: Prisma.LessonProgressCreateManyLessonInputEnvelope;
    set?: Prisma.LessonProgressWhereUniqueInput | Prisma.LessonProgressWhereUniqueInput[];
    disconnect?: Prisma.LessonProgressWhereUniqueInput | Prisma.LessonProgressWhereUniqueInput[];
    delete?: Prisma.LessonProgressWhereUniqueInput | Prisma.LessonProgressWhereUniqueInput[];
    connect?: Prisma.LessonProgressWhereUniqueInput | Prisma.LessonProgressWhereUniqueInput[];
    update?: Prisma.LessonProgressUpdateWithWhereUniqueWithoutLessonInput | Prisma.LessonProgressUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?: Prisma.LessonProgressUpdateManyWithWhereWithoutLessonInput | Prisma.LessonProgressUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?: Prisma.LessonProgressScalarWhereInput | Prisma.LessonProgressScalarWhereInput[];
};
export type LessonProgressUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: Prisma.XOR<Prisma.LessonProgressCreateWithoutLessonInput, Prisma.LessonProgressUncheckedCreateWithoutLessonInput> | Prisma.LessonProgressCreateWithoutLessonInput[] | Prisma.LessonProgressUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.LessonProgressCreateOrConnectWithoutLessonInput | Prisma.LessonProgressCreateOrConnectWithoutLessonInput[];
    upsert?: Prisma.LessonProgressUpsertWithWhereUniqueWithoutLessonInput | Prisma.LessonProgressUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: Prisma.LessonProgressCreateManyLessonInputEnvelope;
    set?: Prisma.LessonProgressWhereUniqueInput | Prisma.LessonProgressWhereUniqueInput[];
    disconnect?: Prisma.LessonProgressWhereUniqueInput | Prisma.LessonProgressWhereUniqueInput[];
    delete?: Prisma.LessonProgressWhereUniqueInput | Prisma.LessonProgressWhereUniqueInput[];
    connect?: Prisma.LessonProgressWhereUniqueInput | Prisma.LessonProgressWhereUniqueInput[];
    update?: Prisma.LessonProgressUpdateWithWhereUniqueWithoutLessonInput | Prisma.LessonProgressUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?: Prisma.LessonProgressUpdateManyWithWhereWithoutLessonInput | Prisma.LessonProgressUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?: Prisma.LessonProgressScalarWhereInput | Prisma.LessonProgressScalarWhereInput[];
};
export type EnumProgressStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProgressStatus;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type LessonProgressCreateWithoutUserInput = {
    id?: string;
    status?: $Enums.ProgressStatus;
    position?: number;
    percentage?: number;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    updatedAt?: Date | string;
    lesson: Prisma.LessonCreateNestedOneWithoutProgressInput;
};
export type LessonProgressUncheckedCreateWithoutUserInput = {
    id?: string;
    lessonId: string;
    status?: $Enums.ProgressStatus;
    position?: number;
    percentage?: number;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    updatedAt?: Date | string;
};
export type LessonProgressCreateOrConnectWithoutUserInput = {
    where: Prisma.LessonProgressWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonProgressCreateWithoutUserInput, Prisma.LessonProgressUncheckedCreateWithoutUserInput>;
};
export type LessonProgressCreateManyUserInputEnvelope = {
    data: Prisma.LessonProgressCreateManyUserInput | Prisma.LessonProgressCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type LessonProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.LessonProgressWhereUniqueInput;
    update: Prisma.XOR<Prisma.LessonProgressUpdateWithoutUserInput, Prisma.LessonProgressUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.LessonProgressCreateWithoutUserInput, Prisma.LessonProgressUncheckedCreateWithoutUserInput>;
};
export type LessonProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.LessonProgressWhereUniqueInput;
    data: Prisma.XOR<Prisma.LessonProgressUpdateWithoutUserInput, Prisma.LessonProgressUncheckedUpdateWithoutUserInput>;
};
export type LessonProgressUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.LessonProgressScalarWhereInput;
    data: Prisma.XOR<Prisma.LessonProgressUpdateManyMutationInput, Prisma.LessonProgressUncheckedUpdateManyWithoutUserInput>;
};
export type LessonProgressScalarWhereInput = {
    AND?: Prisma.LessonProgressScalarWhereInput | Prisma.LessonProgressScalarWhereInput[];
    OR?: Prisma.LessonProgressScalarWhereInput[];
    NOT?: Prisma.LessonProgressScalarWhereInput | Prisma.LessonProgressScalarWhereInput[];
    id?: Prisma.StringFilter<"LessonProgress"> | string;
    userId?: Prisma.StringFilter<"LessonProgress"> | string;
    lessonId?: Prisma.StringFilter<"LessonProgress"> | string;
    status?: Prisma.EnumProgressStatusFilter<"LessonProgress"> | $Enums.ProgressStatus;
    position?: Prisma.IntFilter<"LessonProgress"> | number;
    percentage?: Prisma.FloatFilter<"LessonProgress"> | number;
    startedAt?: Prisma.DateTimeNullableFilter<"LessonProgress"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"LessonProgress"> | Date | string | null;
    updatedAt?: Prisma.DateTimeFilter<"LessonProgress"> | Date | string;
};
export type LessonProgressCreateWithoutLessonInput = {
    id?: string;
    status?: $Enums.ProgressStatus;
    position?: number;
    percentage?: number;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutProgressInput;
};
export type LessonProgressUncheckedCreateWithoutLessonInput = {
    id?: string;
    userId: string;
    status?: $Enums.ProgressStatus;
    position?: number;
    percentage?: number;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    updatedAt?: Date | string;
};
export type LessonProgressCreateOrConnectWithoutLessonInput = {
    where: Prisma.LessonProgressWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonProgressCreateWithoutLessonInput, Prisma.LessonProgressUncheckedCreateWithoutLessonInput>;
};
export type LessonProgressCreateManyLessonInputEnvelope = {
    data: Prisma.LessonProgressCreateManyLessonInput | Prisma.LessonProgressCreateManyLessonInput[];
    skipDuplicates?: boolean;
};
export type LessonProgressUpsertWithWhereUniqueWithoutLessonInput = {
    where: Prisma.LessonProgressWhereUniqueInput;
    update: Prisma.XOR<Prisma.LessonProgressUpdateWithoutLessonInput, Prisma.LessonProgressUncheckedUpdateWithoutLessonInput>;
    create: Prisma.XOR<Prisma.LessonProgressCreateWithoutLessonInput, Prisma.LessonProgressUncheckedCreateWithoutLessonInput>;
};
export type LessonProgressUpdateWithWhereUniqueWithoutLessonInput = {
    where: Prisma.LessonProgressWhereUniqueInput;
    data: Prisma.XOR<Prisma.LessonProgressUpdateWithoutLessonInput, Prisma.LessonProgressUncheckedUpdateWithoutLessonInput>;
};
export type LessonProgressUpdateManyWithWhereWithoutLessonInput = {
    where: Prisma.LessonProgressScalarWhereInput;
    data: Prisma.XOR<Prisma.LessonProgressUpdateManyMutationInput, Prisma.LessonProgressUncheckedUpdateManyWithoutLessonInput>;
};
export type LessonProgressCreateManyUserInput = {
    id?: string;
    lessonId: string;
    status?: $Enums.ProgressStatus;
    position?: number;
    percentage?: number;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    updatedAt?: Date | string;
};
export type LessonProgressUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutProgressNestedInput;
};
export type LessonProgressUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonProgressUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonProgressCreateManyLessonInput = {
    id?: string;
    userId: string;
    status?: $Enums.ProgressStatus;
    position?: number;
    percentage?: number;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    updatedAt?: Date | string;
};
export type LessonProgressUpdateWithoutLessonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutProgressNestedInput;
};
export type LessonProgressUncheckedUpdateWithoutLessonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonProgressUncheckedUpdateManyWithoutLessonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonProgressSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    lessonId?: boolean;
    status?: boolean;
    position?: boolean;
    percentage?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lessonProgress"]>;
export type LessonProgressSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    lessonId?: boolean;
    status?: boolean;
    position?: boolean;
    percentage?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lessonProgress"]>;
export type LessonProgressSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    lessonId?: boolean;
    status?: boolean;
    position?: boolean;
    percentage?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lessonProgress"]>;
export type LessonProgressSelectScalar = {
    id?: boolean;
    userId?: boolean;
    lessonId?: boolean;
    status?: boolean;
    position?: boolean;
    percentage?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    updatedAt?: boolean;
};
export type LessonProgressOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "lessonId" | "status" | "position" | "percentage" | "startedAt" | "completedAt" | "updatedAt", ExtArgs["result"]["lessonProgress"]>;
export type LessonProgressInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
};
export type LessonProgressIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
};
export type LessonProgressIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
};
export type $LessonProgressPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LessonProgress";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        lesson: Prisma.$LessonPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        lessonId: string;
        status: $Enums.ProgressStatus;
        position: number;
        percentage: number;
        startedAt: Date | null;
        completedAt: Date | null;
        updatedAt: Date;
    }, ExtArgs["result"]["lessonProgress"]>;
    composites: {};
};
export type LessonProgressGetPayload<S extends boolean | null | undefined | LessonProgressDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LessonProgressPayload, S>;
export type LessonProgressCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LessonProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LessonProgressCountAggregateInputType | true;
};
export interface LessonProgressDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LessonProgress'];
        meta: {
            name: 'LessonProgress';
        };
    };
    findUnique<T extends LessonProgressFindUniqueArgs>(args: Prisma.SelectSubset<T, LessonProgressFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LessonProgressClient<runtime.Types.Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LessonProgressFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LessonProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LessonProgressClient<runtime.Types.Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LessonProgressFindFirstArgs>(args?: Prisma.SelectSubset<T, LessonProgressFindFirstArgs<ExtArgs>>): Prisma.Prisma__LessonProgressClient<runtime.Types.Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LessonProgressFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LessonProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LessonProgressClient<runtime.Types.Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LessonProgressFindManyArgs>(args?: Prisma.SelectSubset<T, LessonProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LessonProgressCreateArgs>(args: Prisma.SelectSubset<T, LessonProgressCreateArgs<ExtArgs>>): Prisma.Prisma__LessonProgressClient<runtime.Types.Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LessonProgressCreateManyArgs>(args?: Prisma.SelectSubset<T, LessonProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LessonProgressCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LessonProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LessonProgressDeleteArgs>(args: Prisma.SelectSubset<T, LessonProgressDeleteArgs<ExtArgs>>): Prisma.Prisma__LessonProgressClient<runtime.Types.Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LessonProgressUpdateArgs>(args: Prisma.SelectSubset<T, LessonProgressUpdateArgs<ExtArgs>>): Prisma.Prisma__LessonProgressClient<runtime.Types.Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LessonProgressDeleteManyArgs>(args?: Prisma.SelectSubset<T, LessonProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LessonProgressUpdateManyArgs>(args: Prisma.SelectSubset<T, LessonProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LessonProgressUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LessonProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LessonProgressUpsertArgs>(args: Prisma.SelectSubset<T, LessonProgressUpsertArgs<ExtArgs>>): Prisma.Prisma__LessonProgressClient<runtime.Types.Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LessonProgressCountArgs>(args?: Prisma.Subset<T, LessonProgressCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LessonProgressCountAggregateOutputType> : number>;
    aggregate<T extends LessonProgressAggregateArgs>(args: Prisma.Subset<T, LessonProgressAggregateArgs>): Prisma.PrismaPromise<GetLessonProgressAggregateType<T>>;
    groupBy<T extends LessonProgressGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LessonProgressGroupByArgs['orderBy'];
    } : {
        orderBy?: LessonProgressGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LessonProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LessonProgressFieldRefs;
}
export interface Prisma__LessonProgressClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    lesson<T extends Prisma.LessonDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LessonDefaultArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LessonProgressFieldRefs {
    readonly id: Prisma.FieldRef<"LessonProgress", 'String'>;
    readonly userId: Prisma.FieldRef<"LessonProgress", 'String'>;
    readonly lessonId: Prisma.FieldRef<"LessonProgress", 'String'>;
    readonly status: Prisma.FieldRef<"LessonProgress", 'ProgressStatus'>;
    readonly position: Prisma.FieldRef<"LessonProgress", 'Int'>;
    readonly percentage: Prisma.FieldRef<"LessonProgress", 'Float'>;
    readonly startedAt: Prisma.FieldRef<"LessonProgress", 'DateTime'>;
    readonly completedAt: Prisma.FieldRef<"LessonProgress", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"LessonProgress", 'DateTime'>;
}
export type LessonProgressFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonProgressSelect<ExtArgs> | null;
    omit?: Prisma.LessonProgressOmit<ExtArgs> | null;
    include?: Prisma.LessonProgressInclude<ExtArgs> | null;
    where: Prisma.LessonProgressWhereUniqueInput;
};
export type LessonProgressFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonProgressSelect<ExtArgs> | null;
    omit?: Prisma.LessonProgressOmit<ExtArgs> | null;
    include?: Prisma.LessonProgressInclude<ExtArgs> | null;
    where: Prisma.LessonProgressWhereUniqueInput;
};
export type LessonProgressFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonProgressSelect<ExtArgs> | null;
    omit?: Prisma.LessonProgressOmit<ExtArgs> | null;
    include?: Prisma.LessonProgressInclude<ExtArgs> | null;
    where?: Prisma.LessonProgressWhereInput;
    orderBy?: Prisma.LessonProgressOrderByWithRelationInput | Prisma.LessonProgressOrderByWithRelationInput[];
    cursor?: Prisma.LessonProgressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LessonProgressScalarFieldEnum | Prisma.LessonProgressScalarFieldEnum[];
};
export type LessonProgressFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonProgressSelect<ExtArgs> | null;
    omit?: Prisma.LessonProgressOmit<ExtArgs> | null;
    include?: Prisma.LessonProgressInclude<ExtArgs> | null;
    where?: Prisma.LessonProgressWhereInput;
    orderBy?: Prisma.LessonProgressOrderByWithRelationInput | Prisma.LessonProgressOrderByWithRelationInput[];
    cursor?: Prisma.LessonProgressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LessonProgressScalarFieldEnum | Prisma.LessonProgressScalarFieldEnum[];
};
export type LessonProgressFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonProgressSelect<ExtArgs> | null;
    omit?: Prisma.LessonProgressOmit<ExtArgs> | null;
    include?: Prisma.LessonProgressInclude<ExtArgs> | null;
    where?: Prisma.LessonProgressWhereInput;
    orderBy?: Prisma.LessonProgressOrderByWithRelationInput | Prisma.LessonProgressOrderByWithRelationInput[];
    cursor?: Prisma.LessonProgressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LessonProgressScalarFieldEnum | Prisma.LessonProgressScalarFieldEnum[];
};
export type LessonProgressCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonProgressSelect<ExtArgs> | null;
    omit?: Prisma.LessonProgressOmit<ExtArgs> | null;
    include?: Prisma.LessonProgressInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonProgressCreateInput, Prisma.LessonProgressUncheckedCreateInput>;
};
export type LessonProgressCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LessonProgressCreateManyInput | Prisma.LessonProgressCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LessonProgressCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonProgressSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LessonProgressOmit<ExtArgs> | null;
    data: Prisma.LessonProgressCreateManyInput | Prisma.LessonProgressCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LessonProgressIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LessonProgressUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonProgressSelect<ExtArgs> | null;
    omit?: Prisma.LessonProgressOmit<ExtArgs> | null;
    include?: Prisma.LessonProgressInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonProgressUpdateInput, Prisma.LessonProgressUncheckedUpdateInput>;
    where: Prisma.LessonProgressWhereUniqueInput;
};
export type LessonProgressUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LessonProgressUpdateManyMutationInput, Prisma.LessonProgressUncheckedUpdateManyInput>;
    where?: Prisma.LessonProgressWhereInput;
    limit?: number;
};
export type LessonProgressUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonProgressSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LessonProgressOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonProgressUpdateManyMutationInput, Prisma.LessonProgressUncheckedUpdateManyInput>;
    where?: Prisma.LessonProgressWhereInput;
    limit?: number;
    include?: Prisma.LessonProgressIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LessonProgressUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonProgressSelect<ExtArgs> | null;
    omit?: Prisma.LessonProgressOmit<ExtArgs> | null;
    include?: Prisma.LessonProgressInclude<ExtArgs> | null;
    where: Prisma.LessonProgressWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonProgressCreateInput, Prisma.LessonProgressUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LessonProgressUpdateInput, Prisma.LessonProgressUncheckedUpdateInput>;
};
export type LessonProgressDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonProgressSelect<ExtArgs> | null;
    omit?: Prisma.LessonProgressOmit<ExtArgs> | null;
    include?: Prisma.LessonProgressInclude<ExtArgs> | null;
    where: Prisma.LessonProgressWhereUniqueInput;
};
export type LessonProgressDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonProgressWhereInput;
    limit?: number;
};
export type LessonProgressDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonProgressSelect<ExtArgs> | null;
    omit?: Prisma.LessonProgressOmit<ExtArgs> | null;
    include?: Prisma.LessonProgressInclude<ExtArgs> | null;
};
