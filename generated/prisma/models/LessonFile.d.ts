import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LessonFileModel = runtime.Types.Result.DefaultSelection<Prisma.$LessonFilePayload>;
export type AggregateLessonFile = {
    _count: LessonFileCountAggregateOutputType | null;
    _avg: LessonFileAvgAggregateOutputType | null;
    _sum: LessonFileSumAggregateOutputType | null;
    _min: LessonFileMinAggregateOutputType | null;
    _max: LessonFileMaxAggregateOutputType | null;
};
export type LessonFileAvgAggregateOutputType = {
    fileSize: number | null;
};
export type LessonFileSumAggregateOutputType = {
    fileSize: bigint | null;
};
export type LessonFileMinAggregateOutputType = {
    id: string | null;
    lessonId: string | null;
    fileName: string | null;
    fileUrl: string | null;
    fileType: string | null;
    fileSize: bigint | null;
    mimeType: string | null;
    createdAt: Date | null;
};
export type LessonFileMaxAggregateOutputType = {
    id: string | null;
    lessonId: string | null;
    fileName: string | null;
    fileUrl: string | null;
    fileType: string | null;
    fileSize: bigint | null;
    mimeType: string | null;
    createdAt: Date | null;
};
export type LessonFileCountAggregateOutputType = {
    id: number;
    lessonId: number;
    fileName: number;
    fileUrl: number;
    fileType: number;
    fileSize: number;
    mimeType: number;
    createdAt: number;
    _all: number;
};
export type LessonFileAvgAggregateInputType = {
    fileSize?: true;
};
export type LessonFileSumAggregateInputType = {
    fileSize?: true;
};
export type LessonFileMinAggregateInputType = {
    id?: true;
    lessonId?: true;
    fileName?: true;
    fileUrl?: true;
    fileType?: true;
    fileSize?: true;
    mimeType?: true;
    createdAt?: true;
};
export type LessonFileMaxAggregateInputType = {
    id?: true;
    lessonId?: true;
    fileName?: true;
    fileUrl?: true;
    fileType?: true;
    fileSize?: true;
    mimeType?: true;
    createdAt?: true;
};
export type LessonFileCountAggregateInputType = {
    id?: true;
    lessonId?: true;
    fileName?: true;
    fileUrl?: true;
    fileType?: true;
    fileSize?: true;
    mimeType?: true;
    createdAt?: true;
    _all?: true;
};
export type LessonFileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonFileWhereInput;
    orderBy?: Prisma.LessonFileOrderByWithRelationInput | Prisma.LessonFileOrderByWithRelationInput[];
    cursor?: Prisma.LessonFileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LessonFileCountAggregateInputType;
    _avg?: LessonFileAvgAggregateInputType;
    _sum?: LessonFileSumAggregateInputType;
    _min?: LessonFileMinAggregateInputType;
    _max?: LessonFileMaxAggregateInputType;
};
export type GetLessonFileAggregateType<T extends LessonFileAggregateArgs> = {
    [P in keyof T & keyof AggregateLessonFile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLessonFile[P]> : Prisma.GetScalarType<T[P], AggregateLessonFile[P]>;
};
export type LessonFileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonFileWhereInput;
    orderBy?: Prisma.LessonFileOrderByWithAggregationInput | Prisma.LessonFileOrderByWithAggregationInput[];
    by: Prisma.LessonFileScalarFieldEnum[] | Prisma.LessonFileScalarFieldEnum;
    having?: Prisma.LessonFileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LessonFileCountAggregateInputType | true;
    _avg?: LessonFileAvgAggregateInputType;
    _sum?: LessonFileSumAggregateInputType;
    _min?: LessonFileMinAggregateInputType;
    _max?: LessonFileMaxAggregateInputType;
};
export type LessonFileGroupByOutputType = {
    id: string;
    lessonId: string;
    fileName: string;
    fileUrl: string;
    fileType: string;
    fileSize: bigint | null;
    mimeType: string | null;
    createdAt: Date;
    _count: LessonFileCountAggregateOutputType | null;
    _avg: LessonFileAvgAggregateOutputType | null;
    _sum: LessonFileSumAggregateOutputType | null;
    _min: LessonFileMinAggregateOutputType | null;
    _max: LessonFileMaxAggregateOutputType | null;
};
export type GetLessonFileGroupByPayload<T extends LessonFileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LessonFileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LessonFileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LessonFileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LessonFileGroupByOutputType[P]>;
}>>;
export type LessonFileWhereInput = {
    AND?: Prisma.LessonFileWhereInput | Prisma.LessonFileWhereInput[];
    OR?: Prisma.LessonFileWhereInput[];
    NOT?: Prisma.LessonFileWhereInput | Prisma.LessonFileWhereInput[];
    id?: Prisma.StringFilter<"LessonFile"> | string;
    lessonId?: Prisma.StringFilter<"LessonFile"> | string;
    fileName?: Prisma.StringFilter<"LessonFile"> | string;
    fileUrl?: Prisma.StringFilter<"LessonFile"> | string;
    fileType?: Prisma.StringFilter<"LessonFile"> | string;
    fileSize?: Prisma.BigIntNullableFilter<"LessonFile"> | bigint | number | null;
    mimeType?: Prisma.StringNullableFilter<"LessonFile"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"LessonFile"> | Date | string;
    lesson?: Prisma.XOR<Prisma.LessonScalarRelationFilter, Prisma.LessonWhereInput>;
};
export type LessonFileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    fileType?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrderInput | Prisma.SortOrder;
    mimeType?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    lesson?: Prisma.LessonOrderByWithRelationInput;
};
export type LessonFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LessonFileWhereInput | Prisma.LessonFileWhereInput[];
    OR?: Prisma.LessonFileWhereInput[];
    NOT?: Prisma.LessonFileWhereInput | Prisma.LessonFileWhereInput[];
    lessonId?: Prisma.StringFilter<"LessonFile"> | string;
    fileName?: Prisma.StringFilter<"LessonFile"> | string;
    fileUrl?: Prisma.StringFilter<"LessonFile"> | string;
    fileType?: Prisma.StringFilter<"LessonFile"> | string;
    fileSize?: Prisma.BigIntNullableFilter<"LessonFile"> | bigint | number | null;
    mimeType?: Prisma.StringNullableFilter<"LessonFile"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"LessonFile"> | Date | string;
    lesson?: Prisma.XOR<Prisma.LessonScalarRelationFilter, Prisma.LessonWhereInput>;
}, "id">;
export type LessonFileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    fileType?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrderInput | Prisma.SortOrder;
    mimeType?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LessonFileCountOrderByAggregateInput;
    _avg?: Prisma.LessonFileAvgOrderByAggregateInput;
    _max?: Prisma.LessonFileMaxOrderByAggregateInput;
    _min?: Prisma.LessonFileMinOrderByAggregateInput;
    _sum?: Prisma.LessonFileSumOrderByAggregateInput;
};
export type LessonFileScalarWhereWithAggregatesInput = {
    AND?: Prisma.LessonFileScalarWhereWithAggregatesInput | Prisma.LessonFileScalarWhereWithAggregatesInput[];
    OR?: Prisma.LessonFileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LessonFileScalarWhereWithAggregatesInput | Prisma.LessonFileScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LessonFile"> | string;
    lessonId?: Prisma.StringWithAggregatesFilter<"LessonFile"> | string;
    fileName?: Prisma.StringWithAggregatesFilter<"LessonFile"> | string;
    fileUrl?: Prisma.StringWithAggregatesFilter<"LessonFile"> | string;
    fileType?: Prisma.StringWithAggregatesFilter<"LessonFile"> | string;
    fileSize?: Prisma.BigIntNullableWithAggregatesFilter<"LessonFile"> | bigint | number | null;
    mimeType?: Prisma.StringNullableWithAggregatesFilter<"LessonFile"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LessonFile"> | Date | string;
};
export type LessonFileCreateInput = {
    id?: string;
    fileName: string;
    fileUrl: string;
    fileType: string;
    fileSize?: bigint | number | null;
    mimeType?: string | null;
    createdAt?: Date | string;
    lesson: Prisma.LessonCreateNestedOneWithoutFilesInput;
};
export type LessonFileUncheckedCreateInput = {
    id?: string;
    lessonId: string;
    fileName: string;
    fileUrl: string;
    fileType: string;
    fileSize?: bigint | number | null;
    mimeType?: string | null;
    createdAt?: Date | string;
};
export type LessonFileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    fileType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutFilesNestedInput;
};
export type LessonFileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    fileType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonFileCreateManyInput = {
    id?: string;
    lessonId: string;
    fileName: string;
    fileUrl: string;
    fileType: string;
    fileSize?: bigint | number | null;
    mimeType?: string | null;
    createdAt?: Date | string;
};
export type LessonFileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    fileType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonFileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    fileType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonFileListRelationFilter = {
    every?: Prisma.LessonFileWhereInput;
    some?: Prisma.LessonFileWhereInput;
    none?: Prisma.LessonFileWhereInput;
};
export type LessonFileOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LessonFileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    fileType?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LessonFileAvgOrderByAggregateInput = {
    fileSize?: Prisma.SortOrder;
};
export type LessonFileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    fileType?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LessonFileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    fileType?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LessonFileSumOrderByAggregateInput = {
    fileSize?: Prisma.SortOrder;
};
export type LessonFileCreateNestedManyWithoutLessonInput = {
    create?: Prisma.XOR<Prisma.LessonFileCreateWithoutLessonInput, Prisma.LessonFileUncheckedCreateWithoutLessonInput> | Prisma.LessonFileCreateWithoutLessonInput[] | Prisma.LessonFileUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.LessonFileCreateOrConnectWithoutLessonInput | Prisma.LessonFileCreateOrConnectWithoutLessonInput[];
    createMany?: Prisma.LessonFileCreateManyLessonInputEnvelope;
    connect?: Prisma.LessonFileWhereUniqueInput | Prisma.LessonFileWhereUniqueInput[];
};
export type LessonFileUncheckedCreateNestedManyWithoutLessonInput = {
    create?: Prisma.XOR<Prisma.LessonFileCreateWithoutLessonInput, Prisma.LessonFileUncheckedCreateWithoutLessonInput> | Prisma.LessonFileCreateWithoutLessonInput[] | Prisma.LessonFileUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.LessonFileCreateOrConnectWithoutLessonInput | Prisma.LessonFileCreateOrConnectWithoutLessonInput[];
    createMany?: Prisma.LessonFileCreateManyLessonInputEnvelope;
    connect?: Prisma.LessonFileWhereUniqueInput | Prisma.LessonFileWhereUniqueInput[];
};
export type LessonFileUpdateManyWithoutLessonNestedInput = {
    create?: Prisma.XOR<Prisma.LessonFileCreateWithoutLessonInput, Prisma.LessonFileUncheckedCreateWithoutLessonInput> | Prisma.LessonFileCreateWithoutLessonInput[] | Prisma.LessonFileUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.LessonFileCreateOrConnectWithoutLessonInput | Prisma.LessonFileCreateOrConnectWithoutLessonInput[];
    upsert?: Prisma.LessonFileUpsertWithWhereUniqueWithoutLessonInput | Prisma.LessonFileUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: Prisma.LessonFileCreateManyLessonInputEnvelope;
    set?: Prisma.LessonFileWhereUniqueInput | Prisma.LessonFileWhereUniqueInput[];
    disconnect?: Prisma.LessonFileWhereUniqueInput | Prisma.LessonFileWhereUniqueInput[];
    delete?: Prisma.LessonFileWhereUniqueInput | Prisma.LessonFileWhereUniqueInput[];
    connect?: Prisma.LessonFileWhereUniqueInput | Prisma.LessonFileWhereUniqueInput[];
    update?: Prisma.LessonFileUpdateWithWhereUniqueWithoutLessonInput | Prisma.LessonFileUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?: Prisma.LessonFileUpdateManyWithWhereWithoutLessonInput | Prisma.LessonFileUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?: Prisma.LessonFileScalarWhereInput | Prisma.LessonFileScalarWhereInput[];
};
export type LessonFileUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: Prisma.XOR<Prisma.LessonFileCreateWithoutLessonInput, Prisma.LessonFileUncheckedCreateWithoutLessonInput> | Prisma.LessonFileCreateWithoutLessonInput[] | Prisma.LessonFileUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.LessonFileCreateOrConnectWithoutLessonInput | Prisma.LessonFileCreateOrConnectWithoutLessonInput[];
    upsert?: Prisma.LessonFileUpsertWithWhereUniqueWithoutLessonInput | Prisma.LessonFileUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: Prisma.LessonFileCreateManyLessonInputEnvelope;
    set?: Prisma.LessonFileWhereUniqueInput | Prisma.LessonFileWhereUniqueInput[];
    disconnect?: Prisma.LessonFileWhereUniqueInput | Prisma.LessonFileWhereUniqueInput[];
    delete?: Prisma.LessonFileWhereUniqueInput | Prisma.LessonFileWhereUniqueInput[];
    connect?: Prisma.LessonFileWhereUniqueInput | Prisma.LessonFileWhereUniqueInput[];
    update?: Prisma.LessonFileUpdateWithWhereUniqueWithoutLessonInput | Prisma.LessonFileUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?: Prisma.LessonFileUpdateManyWithWhereWithoutLessonInput | Prisma.LessonFileUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?: Prisma.LessonFileScalarWhereInput | Prisma.LessonFileScalarWhereInput[];
};
export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type LessonFileCreateWithoutLessonInput = {
    id?: string;
    fileName: string;
    fileUrl: string;
    fileType: string;
    fileSize?: bigint | number | null;
    mimeType?: string | null;
    createdAt?: Date | string;
};
export type LessonFileUncheckedCreateWithoutLessonInput = {
    id?: string;
    fileName: string;
    fileUrl: string;
    fileType: string;
    fileSize?: bigint | number | null;
    mimeType?: string | null;
    createdAt?: Date | string;
};
export type LessonFileCreateOrConnectWithoutLessonInput = {
    where: Prisma.LessonFileWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonFileCreateWithoutLessonInput, Prisma.LessonFileUncheckedCreateWithoutLessonInput>;
};
export type LessonFileCreateManyLessonInputEnvelope = {
    data: Prisma.LessonFileCreateManyLessonInput | Prisma.LessonFileCreateManyLessonInput[];
    skipDuplicates?: boolean;
};
export type LessonFileUpsertWithWhereUniqueWithoutLessonInput = {
    where: Prisma.LessonFileWhereUniqueInput;
    update: Prisma.XOR<Prisma.LessonFileUpdateWithoutLessonInput, Prisma.LessonFileUncheckedUpdateWithoutLessonInput>;
    create: Prisma.XOR<Prisma.LessonFileCreateWithoutLessonInput, Prisma.LessonFileUncheckedCreateWithoutLessonInput>;
};
export type LessonFileUpdateWithWhereUniqueWithoutLessonInput = {
    where: Prisma.LessonFileWhereUniqueInput;
    data: Prisma.XOR<Prisma.LessonFileUpdateWithoutLessonInput, Prisma.LessonFileUncheckedUpdateWithoutLessonInput>;
};
export type LessonFileUpdateManyWithWhereWithoutLessonInput = {
    where: Prisma.LessonFileScalarWhereInput;
    data: Prisma.XOR<Prisma.LessonFileUpdateManyMutationInput, Prisma.LessonFileUncheckedUpdateManyWithoutLessonInput>;
};
export type LessonFileScalarWhereInput = {
    AND?: Prisma.LessonFileScalarWhereInput | Prisma.LessonFileScalarWhereInput[];
    OR?: Prisma.LessonFileScalarWhereInput[];
    NOT?: Prisma.LessonFileScalarWhereInput | Prisma.LessonFileScalarWhereInput[];
    id?: Prisma.StringFilter<"LessonFile"> | string;
    lessonId?: Prisma.StringFilter<"LessonFile"> | string;
    fileName?: Prisma.StringFilter<"LessonFile"> | string;
    fileUrl?: Prisma.StringFilter<"LessonFile"> | string;
    fileType?: Prisma.StringFilter<"LessonFile"> | string;
    fileSize?: Prisma.BigIntNullableFilter<"LessonFile"> | bigint | number | null;
    mimeType?: Prisma.StringNullableFilter<"LessonFile"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"LessonFile"> | Date | string;
};
export type LessonFileCreateManyLessonInput = {
    id?: string;
    fileName: string;
    fileUrl: string;
    fileType: string;
    fileSize?: bigint | number | null;
    mimeType?: string | null;
    createdAt?: Date | string;
};
export type LessonFileUpdateWithoutLessonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    fileType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonFileUncheckedUpdateWithoutLessonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    fileType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonFileUncheckedUpdateManyWithoutLessonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    fileType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonFileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lessonId?: boolean;
    fileName?: boolean;
    fileUrl?: boolean;
    fileType?: boolean;
    fileSize?: boolean;
    mimeType?: boolean;
    createdAt?: boolean;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lessonFile"]>;
export type LessonFileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lessonId?: boolean;
    fileName?: boolean;
    fileUrl?: boolean;
    fileType?: boolean;
    fileSize?: boolean;
    mimeType?: boolean;
    createdAt?: boolean;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lessonFile"]>;
export type LessonFileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lessonId?: boolean;
    fileName?: boolean;
    fileUrl?: boolean;
    fileType?: boolean;
    fileSize?: boolean;
    mimeType?: boolean;
    createdAt?: boolean;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lessonFile"]>;
export type LessonFileSelectScalar = {
    id?: boolean;
    lessonId?: boolean;
    fileName?: boolean;
    fileUrl?: boolean;
    fileType?: boolean;
    fileSize?: boolean;
    mimeType?: boolean;
    createdAt?: boolean;
};
export type LessonFileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "lessonId" | "fileName" | "fileUrl" | "fileType" | "fileSize" | "mimeType" | "createdAt", ExtArgs["result"]["lessonFile"]>;
export type LessonFileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
};
export type LessonFileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
};
export type LessonFileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
};
export type $LessonFilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LessonFile";
    objects: {
        lesson: Prisma.$LessonPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        lessonId: string;
        fileName: string;
        fileUrl: string;
        fileType: string;
        fileSize: bigint | null;
        mimeType: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["lessonFile"]>;
    composites: {};
};
export type LessonFileGetPayload<S extends boolean | null | undefined | LessonFileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LessonFilePayload, S>;
export type LessonFileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LessonFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LessonFileCountAggregateInputType | true;
};
export interface LessonFileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LessonFile'];
        meta: {
            name: 'LessonFile';
        };
    };
    findUnique<T extends LessonFileFindUniqueArgs>(args: Prisma.SelectSubset<T, LessonFileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LessonFileClient<runtime.Types.Result.GetResult<Prisma.$LessonFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LessonFileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LessonFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LessonFileClient<runtime.Types.Result.GetResult<Prisma.$LessonFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LessonFileFindFirstArgs>(args?: Prisma.SelectSubset<T, LessonFileFindFirstArgs<ExtArgs>>): Prisma.Prisma__LessonFileClient<runtime.Types.Result.GetResult<Prisma.$LessonFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LessonFileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LessonFileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LessonFileClient<runtime.Types.Result.GetResult<Prisma.$LessonFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LessonFileFindManyArgs>(args?: Prisma.SelectSubset<T, LessonFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LessonFileCreateArgs>(args: Prisma.SelectSubset<T, LessonFileCreateArgs<ExtArgs>>): Prisma.Prisma__LessonFileClient<runtime.Types.Result.GetResult<Prisma.$LessonFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LessonFileCreateManyArgs>(args?: Prisma.SelectSubset<T, LessonFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LessonFileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LessonFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LessonFileDeleteArgs>(args: Prisma.SelectSubset<T, LessonFileDeleteArgs<ExtArgs>>): Prisma.Prisma__LessonFileClient<runtime.Types.Result.GetResult<Prisma.$LessonFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LessonFileUpdateArgs>(args: Prisma.SelectSubset<T, LessonFileUpdateArgs<ExtArgs>>): Prisma.Prisma__LessonFileClient<runtime.Types.Result.GetResult<Prisma.$LessonFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LessonFileDeleteManyArgs>(args?: Prisma.SelectSubset<T, LessonFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LessonFileUpdateManyArgs>(args: Prisma.SelectSubset<T, LessonFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LessonFileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LessonFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LessonFileUpsertArgs>(args: Prisma.SelectSubset<T, LessonFileUpsertArgs<ExtArgs>>): Prisma.Prisma__LessonFileClient<runtime.Types.Result.GetResult<Prisma.$LessonFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LessonFileCountArgs>(args?: Prisma.Subset<T, LessonFileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LessonFileCountAggregateOutputType> : number>;
    aggregate<T extends LessonFileAggregateArgs>(args: Prisma.Subset<T, LessonFileAggregateArgs>): Prisma.PrismaPromise<GetLessonFileAggregateType<T>>;
    groupBy<T extends LessonFileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LessonFileGroupByArgs['orderBy'];
    } : {
        orderBy?: LessonFileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LessonFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LessonFileFieldRefs;
}
export interface Prisma__LessonFileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    lesson<T extends Prisma.LessonDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LessonDefaultArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LessonFileFieldRefs {
    readonly id: Prisma.FieldRef<"LessonFile", 'String'>;
    readonly lessonId: Prisma.FieldRef<"LessonFile", 'String'>;
    readonly fileName: Prisma.FieldRef<"LessonFile", 'String'>;
    readonly fileUrl: Prisma.FieldRef<"LessonFile", 'String'>;
    readonly fileType: Prisma.FieldRef<"LessonFile", 'String'>;
    readonly fileSize: Prisma.FieldRef<"LessonFile", 'BigInt'>;
    readonly mimeType: Prisma.FieldRef<"LessonFile", 'String'>;
    readonly createdAt: Prisma.FieldRef<"LessonFile", 'DateTime'>;
}
export type LessonFileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonFileSelect<ExtArgs> | null;
    omit?: Prisma.LessonFileOmit<ExtArgs> | null;
    include?: Prisma.LessonFileInclude<ExtArgs> | null;
    where: Prisma.LessonFileWhereUniqueInput;
};
export type LessonFileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonFileSelect<ExtArgs> | null;
    omit?: Prisma.LessonFileOmit<ExtArgs> | null;
    include?: Prisma.LessonFileInclude<ExtArgs> | null;
    where: Prisma.LessonFileWhereUniqueInput;
};
export type LessonFileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonFileSelect<ExtArgs> | null;
    omit?: Prisma.LessonFileOmit<ExtArgs> | null;
    include?: Prisma.LessonFileInclude<ExtArgs> | null;
    where?: Prisma.LessonFileWhereInput;
    orderBy?: Prisma.LessonFileOrderByWithRelationInput | Prisma.LessonFileOrderByWithRelationInput[];
    cursor?: Prisma.LessonFileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LessonFileScalarFieldEnum | Prisma.LessonFileScalarFieldEnum[];
};
export type LessonFileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonFileSelect<ExtArgs> | null;
    omit?: Prisma.LessonFileOmit<ExtArgs> | null;
    include?: Prisma.LessonFileInclude<ExtArgs> | null;
    where?: Prisma.LessonFileWhereInput;
    orderBy?: Prisma.LessonFileOrderByWithRelationInput | Prisma.LessonFileOrderByWithRelationInput[];
    cursor?: Prisma.LessonFileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LessonFileScalarFieldEnum | Prisma.LessonFileScalarFieldEnum[];
};
export type LessonFileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonFileSelect<ExtArgs> | null;
    omit?: Prisma.LessonFileOmit<ExtArgs> | null;
    include?: Prisma.LessonFileInclude<ExtArgs> | null;
    where?: Prisma.LessonFileWhereInput;
    orderBy?: Prisma.LessonFileOrderByWithRelationInput | Prisma.LessonFileOrderByWithRelationInput[];
    cursor?: Prisma.LessonFileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LessonFileScalarFieldEnum | Prisma.LessonFileScalarFieldEnum[];
};
export type LessonFileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonFileSelect<ExtArgs> | null;
    omit?: Prisma.LessonFileOmit<ExtArgs> | null;
    include?: Prisma.LessonFileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonFileCreateInput, Prisma.LessonFileUncheckedCreateInput>;
};
export type LessonFileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LessonFileCreateManyInput | Prisma.LessonFileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LessonFileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonFileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LessonFileOmit<ExtArgs> | null;
    data: Prisma.LessonFileCreateManyInput | Prisma.LessonFileCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LessonFileIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LessonFileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonFileSelect<ExtArgs> | null;
    omit?: Prisma.LessonFileOmit<ExtArgs> | null;
    include?: Prisma.LessonFileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonFileUpdateInput, Prisma.LessonFileUncheckedUpdateInput>;
    where: Prisma.LessonFileWhereUniqueInput;
};
export type LessonFileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LessonFileUpdateManyMutationInput, Prisma.LessonFileUncheckedUpdateManyInput>;
    where?: Prisma.LessonFileWhereInput;
    limit?: number;
};
export type LessonFileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonFileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LessonFileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonFileUpdateManyMutationInput, Prisma.LessonFileUncheckedUpdateManyInput>;
    where?: Prisma.LessonFileWhereInput;
    limit?: number;
    include?: Prisma.LessonFileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LessonFileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonFileSelect<ExtArgs> | null;
    omit?: Prisma.LessonFileOmit<ExtArgs> | null;
    include?: Prisma.LessonFileInclude<ExtArgs> | null;
    where: Prisma.LessonFileWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonFileCreateInput, Prisma.LessonFileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LessonFileUpdateInput, Prisma.LessonFileUncheckedUpdateInput>;
};
export type LessonFileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonFileSelect<ExtArgs> | null;
    omit?: Prisma.LessonFileOmit<ExtArgs> | null;
    include?: Prisma.LessonFileInclude<ExtArgs> | null;
    where: Prisma.LessonFileWhereUniqueInput;
};
export type LessonFileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonFileWhereInput;
    limit?: number;
};
export type LessonFileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonFileSelect<ExtArgs> | null;
    omit?: Prisma.LessonFileOmit<ExtArgs> | null;
    include?: Prisma.LessonFileInclude<ExtArgs> | null;
};
