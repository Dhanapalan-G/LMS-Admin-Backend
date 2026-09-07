import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ImportJobModel = runtime.Types.Result.DefaultSelection<Prisma.$ImportJobPayload>;
export type AggregateImportJob = {
    _count: ImportJobCountAggregateOutputType | null;
    _avg: ImportJobAvgAggregateOutputType | null;
    _sum: ImportJobSumAggregateOutputType | null;
    _min: ImportJobMinAggregateOutputType | null;
    _max: ImportJobMaxAggregateOutputType | null;
};
export type ImportJobAvgAggregateOutputType = {
    totalRows: number | null;
    successRows: number | null;
    failedRows: number | null;
};
export type ImportJobSumAggregateOutputType = {
    totalRows: number | null;
    successRows: number | null;
    failedRows: number | null;
};
export type ImportJobMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    createdById: string | null;
    fileName: string | null;
    fileUrl: string | null;
    status: $Enums.ImportStatus | null;
    totalRows: number | null;
    successRows: number | null;
    failedRows: number | null;
    startedAt: Date | null;
    completedAt: Date | null;
    createdAt: Date | null;
};
export type ImportJobMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    createdById: string | null;
    fileName: string | null;
    fileUrl: string | null;
    status: $Enums.ImportStatus | null;
    totalRows: number | null;
    successRows: number | null;
    failedRows: number | null;
    startedAt: Date | null;
    completedAt: Date | null;
    createdAt: Date | null;
};
export type ImportJobCountAggregateOutputType = {
    id: number;
    schoolId: number;
    createdById: number;
    fileName: number;
    fileUrl: number;
    status: number;
    totalRows: number;
    successRows: number;
    failedRows: number;
    startedAt: number;
    completedAt: number;
    createdAt: number;
    _all: number;
};
export type ImportJobAvgAggregateInputType = {
    totalRows?: true;
    successRows?: true;
    failedRows?: true;
};
export type ImportJobSumAggregateInputType = {
    totalRows?: true;
    successRows?: true;
    failedRows?: true;
};
export type ImportJobMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    createdById?: true;
    fileName?: true;
    fileUrl?: true;
    status?: true;
    totalRows?: true;
    successRows?: true;
    failedRows?: true;
    startedAt?: true;
    completedAt?: true;
    createdAt?: true;
};
export type ImportJobMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    createdById?: true;
    fileName?: true;
    fileUrl?: true;
    status?: true;
    totalRows?: true;
    successRows?: true;
    failedRows?: true;
    startedAt?: true;
    completedAt?: true;
    createdAt?: true;
};
export type ImportJobCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    createdById?: true;
    fileName?: true;
    fileUrl?: true;
    status?: true;
    totalRows?: true;
    successRows?: true;
    failedRows?: true;
    startedAt?: true;
    completedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type ImportJobAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImportJobWhereInput;
    orderBy?: Prisma.ImportJobOrderByWithRelationInput | Prisma.ImportJobOrderByWithRelationInput[];
    cursor?: Prisma.ImportJobWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ImportJobCountAggregateInputType;
    _avg?: ImportJobAvgAggregateInputType;
    _sum?: ImportJobSumAggregateInputType;
    _min?: ImportJobMinAggregateInputType;
    _max?: ImportJobMaxAggregateInputType;
};
export type GetImportJobAggregateType<T extends ImportJobAggregateArgs> = {
    [P in keyof T & keyof AggregateImportJob]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateImportJob[P]> : Prisma.GetScalarType<T[P], AggregateImportJob[P]>;
};
export type ImportJobGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImportJobWhereInput;
    orderBy?: Prisma.ImportJobOrderByWithAggregationInput | Prisma.ImportJobOrderByWithAggregationInput[];
    by: Prisma.ImportJobScalarFieldEnum[] | Prisma.ImportJobScalarFieldEnum;
    having?: Prisma.ImportJobScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ImportJobCountAggregateInputType | true;
    _avg?: ImportJobAvgAggregateInputType;
    _sum?: ImportJobSumAggregateInputType;
    _min?: ImportJobMinAggregateInputType;
    _max?: ImportJobMaxAggregateInputType;
};
export type ImportJobGroupByOutputType = {
    id: string;
    schoolId: string;
    createdById: string;
    fileName: string;
    fileUrl: string | null;
    status: $Enums.ImportStatus;
    totalRows: number;
    successRows: number;
    failedRows: number;
    startedAt: Date | null;
    completedAt: Date | null;
    createdAt: Date;
    _count: ImportJobCountAggregateOutputType | null;
    _avg: ImportJobAvgAggregateOutputType | null;
    _sum: ImportJobSumAggregateOutputType | null;
    _min: ImportJobMinAggregateOutputType | null;
    _max: ImportJobMaxAggregateOutputType | null;
};
export type GetImportJobGroupByPayload<T extends ImportJobGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ImportJobGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ImportJobGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ImportJobGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ImportJobGroupByOutputType[P]>;
}>>;
export type ImportJobWhereInput = {
    AND?: Prisma.ImportJobWhereInput | Prisma.ImportJobWhereInput[];
    OR?: Prisma.ImportJobWhereInput[];
    NOT?: Prisma.ImportJobWhereInput | Prisma.ImportJobWhereInput[];
    id?: Prisma.StringFilter<"ImportJob"> | string;
    schoolId?: Prisma.StringFilter<"ImportJob"> | string;
    createdById?: Prisma.StringFilter<"ImportJob"> | string;
    fileName?: Prisma.StringFilter<"ImportJob"> | string;
    fileUrl?: Prisma.StringNullableFilter<"ImportJob"> | string | null;
    status?: Prisma.EnumImportStatusFilter<"ImportJob"> | $Enums.ImportStatus;
    totalRows?: Prisma.IntFilter<"ImportJob"> | number;
    successRows?: Prisma.IntFilter<"ImportJob"> | number;
    failedRows?: Prisma.IntFilter<"ImportJob"> | number;
    startedAt?: Prisma.DateTimeNullableFilter<"ImportJob"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"ImportJob"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ImportJob"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    errors?: Prisma.ImportErrorListRelationFilter;
};
export type ImportJobOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    totalRows?: Prisma.SortOrder;
    successRows?: Prisma.SortOrder;
    failedRows?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    createdBy?: Prisma.UserOrderByWithRelationInput;
    errors?: Prisma.ImportErrorOrderByRelationAggregateInput;
};
export type ImportJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ImportJobWhereInput | Prisma.ImportJobWhereInput[];
    OR?: Prisma.ImportJobWhereInput[];
    NOT?: Prisma.ImportJobWhereInput | Prisma.ImportJobWhereInput[];
    schoolId?: Prisma.StringFilter<"ImportJob"> | string;
    createdById?: Prisma.StringFilter<"ImportJob"> | string;
    fileName?: Prisma.StringFilter<"ImportJob"> | string;
    fileUrl?: Prisma.StringNullableFilter<"ImportJob"> | string | null;
    status?: Prisma.EnumImportStatusFilter<"ImportJob"> | $Enums.ImportStatus;
    totalRows?: Prisma.IntFilter<"ImportJob"> | number;
    successRows?: Prisma.IntFilter<"ImportJob"> | number;
    failedRows?: Prisma.IntFilter<"ImportJob"> | number;
    startedAt?: Prisma.DateTimeNullableFilter<"ImportJob"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"ImportJob"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ImportJob"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    errors?: Prisma.ImportErrorListRelationFilter;
}, "id">;
export type ImportJobOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    totalRows?: Prisma.SortOrder;
    successRows?: Prisma.SortOrder;
    failedRows?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ImportJobCountOrderByAggregateInput;
    _avg?: Prisma.ImportJobAvgOrderByAggregateInput;
    _max?: Prisma.ImportJobMaxOrderByAggregateInput;
    _min?: Prisma.ImportJobMinOrderByAggregateInput;
    _sum?: Prisma.ImportJobSumOrderByAggregateInput;
};
export type ImportJobScalarWhereWithAggregatesInput = {
    AND?: Prisma.ImportJobScalarWhereWithAggregatesInput | Prisma.ImportJobScalarWhereWithAggregatesInput[];
    OR?: Prisma.ImportJobScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ImportJobScalarWhereWithAggregatesInput | Prisma.ImportJobScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ImportJob"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"ImportJob"> | string;
    createdById?: Prisma.StringWithAggregatesFilter<"ImportJob"> | string;
    fileName?: Prisma.StringWithAggregatesFilter<"ImportJob"> | string;
    fileUrl?: Prisma.StringNullableWithAggregatesFilter<"ImportJob"> | string | null;
    status?: Prisma.EnumImportStatusWithAggregatesFilter<"ImportJob"> | $Enums.ImportStatus;
    totalRows?: Prisma.IntWithAggregatesFilter<"ImportJob"> | number;
    successRows?: Prisma.IntWithAggregatesFilter<"ImportJob"> | number;
    failedRows?: Prisma.IntWithAggregatesFilter<"ImportJob"> | number;
    startedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ImportJob"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ImportJob"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ImportJob"> | Date | string;
};
export type ImportJobCreateInput = {
    id?: string;
    fileName: string;
    fileUrl?: string | null;
    status?: $Enums.ImportStatus;
    totalRows?: number;
    successRows?: number;
    failedRows?: number;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutImportsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutImportJobsInput;
    errors?: Prisma.ImportErrorCreateNestedManyWithoutImportJobInput;
};
export type ImportJobUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    createdById: string;
    fileName: string;
    fileUrl?: string | null;
    status?: $Enums.ImportStatus;
    totalRows?: number;
    successRows?: number;
    failedRows?: number;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    errors?: Prisma.ImportErrorUncheckedCreateNestedManyWithoutImportJobInput;
};
export type ImportJobUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumImportStatusFieldUpdateOperationsInput | $Enums.ImportStatus;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    successRows?: Prisma.IntFieldUpdateOperationsInput | number;
    failedRows?: Prisma.IntFieldUpdateOperationsInput | number;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutImportsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutImportJobsNestedInput;
    errors?: Prisma.ImportErrorUpdateManyWithoutImportJobNestedInput;
};
export type ImportJobUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumImportStatusFieldUpdateOperationsInput | $Enums.ImportStatus;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    successRows?: Prisma.IntFieldUpdateOperationsInput | number;
    failedRows?: Prisma.IntFieldUpdateOperationsInput | number;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    errors?: Prisma.ImportErrorUncheckedUpdateManyWithoutImportJobNestedInput;
};
export type ImportJobCreateManyInput = {
    id?: string;
    schoolId: string;
    createdById: string;
    fileName: string;
    fileUrl?: string | null;
    status?: $Enums.ImportStatus;
    totalRows?: number;
    successRows?: number;
    failedRows?: number;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ImportJobUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumImportStatusFieldUpdateOperationsInput | $Enums.ImportStatus;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    successRows?: Prisma.IntFieldUpdateOperationsInput | number;
    failedRows?: Prisma.IntFieldUpdateOperationsInput | number;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImportJobUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumImportStatusFieldUpdateOperationsInput | $Enums.ImportStatus;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    successRows?: Prisma.IntFieldUpdateOperationsInput | number;
    failedRows?: Prisma.IntFieldUpdateOperationsInput | number;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImportJobListRelationFilter = {
    every?: Prisma.ImportJobWhereInput;
    some?: Prisma.ImportJobWhereInput;
    none?: Prisma.ImportJobWhereInput;
};
export type ImportJobOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ImportJobCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    totalRows?: Prisma.SortOrder;
    successRows?: Prisma.SortOrder;
    failedRows?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ImportJobAvgOrderByAggregateInput = {
    totalRows?: Prisma.SortOrder;
    successRows?: Prisma.SortOrder;
    failedRows?: Prisma.SortOrder;
};
export type ImportJobMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    totalRows?: Prisma.SortOrder;
    successRows?: Prisma.SortOrder;
    failedRows?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ImportJobMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    totalRows?: Prisma.SortOrder;
    successRows?: Prisma.SortOrder;
    failedRows?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ImportJobSumOrderByAggregateInput = {
    totalRows?: Prisma.SortOrder;
    successRows?: Prisma.SortOrder;
    failedRows?: Prisma.SortOrder;
};
export type ImportJobScalarRelationFilter = {
    is?: Prisma.ImportJobWhereInput;
    isNot?: Prisma.ImportJobWhereInput;
};
export type ImportJobCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.ImportJobCreateWithoutSchoolInput, Prisma.ImportJobUncheckedCreateWithoutSchoolInput> | Prisma.ImportJobCreateWithoutSchoolInput[] | Prisma.ImportJobUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.ImportJobCreateOrConnectWithoutSchoolInput | Prisma.ImportJobCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.ImportJobCreateManySchoolInputEnvelope;
    connect?: Prisma.ImportJobWhereUniqueInput | Prisma.ImportJobWhereUniqueInput[];
};
export type ImportJobUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.ImportJobCreateWithoutSchoolInput, Prisma.ImportJobUncheckedCreateWithoutSchoolInput> | Prisma.ImportJobCreateWithoutSchoolInput[] | Prisma.ImportJobUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.ImportJobCreateOrConnectWithoutSchoolInput | Prisma.ImportJobCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.ImportJobCreateManySchoolInputEnvelope;
    connect?: Prisma.ImportJobWhereUniqueInput | Prisma.ImportJobWhereUniqueInput[];
};
export type ImportJobUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.ImportJobCreateWithoutSchoolInput, Prisma.ImportJobUncheckedCreateWithoutSchoolInput> | Prisma.ImportJobCreateWithoutSchoolInput[] | Prisma.ImportJobUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.ImportJobCreateOrConnectWithoutSchoolInput | Prisma.ImportJobCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.ImportJobUpsertWithWhereUniqueWithoutSchoolInput | Prisma.ImportJobUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.ImportJobCreateManySchoolInputEnvelope;
    set?: Prisma.ImportJobWhereUniqueInput | Prisma.ImportJobWhereUniqueInput[];
    disconnect?: Prisma.ImportJobWhereUniqueInput | Prisma.ImportJobWhereUniqueInput[];
    delete?: Prisma.ImportJobWhereUniqueInput | Prisma.ImportJobWhereUniqueInput[];
    connect?: Prisma.ImportJobWhereUniqueInput | Prisma.ImportJobWhereUniqueInput[];
    update?: Prisma.ImportJobUpdateWithWhereUniqueWithoutSchoolInput | Prisma.ImportJobUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.ImportJobUpdateManyWithWhereWithoutSchoolInput | Prisma.ImportJobUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.ImportJobScalarWhereInput | Prisma.ImportJobScalarWhereInput[];
};
export type ImportJobUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.ImportJobCreateWithoutSchoolInput, Prisma.ImportJobUncheckedCreateWithoutSchoolInput> | Prisma.ImportJobCreateWithoutSchoolInput[] | Prisma.ImportJobUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.ImportJobCreateOrConnectWithoutSchoolInput | Prisma.ImportJobCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.ImportJobUpsertWithWhereUniqueWithoutSchoolInput | Prisma.ImportJobUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.ImportJobCreateManySchoolInputEnvelope;
    set?: Prisma.ImportJobWhereUniqueInput | Prisma.ImportJobWhereUniqueInput[];
    disconnect?: Prisma.ImportJobWhereUniqueInput | Prisma.ImportJobWhereUniqueInput[];
    delete?: Prisma.ImportJobWhereUniqueInput | Prisma.ImportJobWhereUniqueInput[];
    connect?: Prisma.ImportJobWhereUniqueInput | Prisma.ImportJobWhereUniqueInput[];
    update?: Prisma.ImportJobUpdateWithWhereUniqueWithoutSchoolInput | Prisma.ImportJobUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.ImportJobUpdateManyWithWhereWithoutSchoolInput | Prisma.ImportJobUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.ImportJobScalarWhereInput | Prisma.ImportJobScalarWhereInput[];
};
export type ImportJobCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.ImportJobCreateWithoutCreatedByInput, Prisma.ImportJobUncheckedCreateWithoutCreatedByInput> | Prisma.ImportJobCreateWithoutCreatedByInput[] | Prisma.ImportJobUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ImportJobCreateOrConnectWithoutCreatedByInput | Prisma.ImportJobCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.ImportJobCreateManyCreatedByInputEnvelope;
    connect?: Prisma.ImportJobWhereUniqueInput | Prisma.ImportJobWhereUniqueInput[];
};
export type ImportJobUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.ImportJobCreateWithoutCreatedByInput, Prisma.ImportJobUncheckedCreateWithoutCreatedByInput> | Prisma.ImportJobCreateWithoutCreatedByInput[] | Prisma.ImportJobUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ImportJobCreateOrConnectWithoutCreatedByInput | Prisma.ImportJobCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.ImportJobCreateManyCreatedByInputEnvelope;
    connect?: Prisma.ImportJobWhereUniqueInput | Prisma.ImportJobWhereUniqueInput[];
};
export type ImportJobUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.ImportJobCreateWithoutCreatedByInput, Prisma.ImportJobUncheckedCreateWithoutCreatedByInput> | Prisma.ImportJobCreateWithoutCreatedByInput[] | Prisma.ImportJobUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ImportJobCreateOrConnectWithoutCreatedByInput | Prisma.ImportJobCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.ImportJobUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.ImportJobUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.ImportJobCreateManyCreatedByInputEnvelope;
    set?: Prisma.ImportJobWhereUniqueInput | Prisma.ImportJobWhereUniqueInput[];
    disconnect?: Prisma.ImportJobWhereUniqueInput | Prisma.ImportJobWhereUniqueInput[];
    delete?: Prisma.ImportJobWhereUniqueInput | Prisma.ImportJobWhereUniqueInput[];
    connect?: Prisma.ImportJobWhereUniqueInput | Prisma.ImportJobWhereUniqueInput[];
    update?: Prisma.ImportJobUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.ImportJobUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.ImportJobUpdateManyWithWhereWithoutCreatedByInput | Prisma.ImportJobUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.ImportJobScalarWhereInput | Prisma.ImportJobScalarWhereInput[];
};
export type ImportJobUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.ImportJobCreateWithoutCreatedByInput, Prisma.ImportJobUncheckedCreateWithoutCreatedByInput> | Prisma.ImportJobCreateWithoutCreatedByInput[] | Prisma.ImportJobUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ImportJobCreateOrConnectWithoutCreatedByInput | Prisma.ImportJobCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.ImportJobUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.ImportJobUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.ImportJobCreateManyCreatedByInputEnvelope;
    set?: Prisma.ImportJobWhereUniqueInput | Prisma.ImportJobWhereUniqueInput[];
    disconnect?: Prisma.ImportJobWhereUniqueInput | Prisma.ImportJobWhereUniqueInput[];
    delete?: Prisma.ImportJobWhereUniqueInput | Prisma.ImportJobWhereUniqueInput[];
    connect?: Prisma.ImportJobWhereUniqueInput | Prisma.ImportJobWhereUniqueInput[];
    update?: Prisma.ImportJobUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.ImportJobUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.ImportJobUpdateManyWithWhereWithoutCreatedByInput | Prisma.ImportJobUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.ImportJobScalarWhereInput | Prisma.ImportJobScalarWhereInput[];
};
export type EnumImportStatusFieldUpdateOperationsInput = {
    set?: $Enums.ImportStatus;
};
export type ImportJobCreateNestedOneWithoutErrorsInput = {
    create?: Prisma.XOR<Prisma.ImportJobCreateWithoutErrorsInput, Prisma.ImportJobUncheckedCreateWithoutErrorsInput>;
    connectOrCreate?: Prisma.ImportJobCreateOrConnectWithoutErrorsInput;
    connect?: Prisma.ImportJobWhereUniqueInput;
};
export type ImportJobUpdateOneRequiredWithoutErrorsNestedInput = {
    create?: Prisma.XOR<Prisma.ImportJobCreateWithoutErrorsInput, Prisma.ImportJobUncheckedCreateWithoutErrorsInput>;
    connectOrCreate?: Prisma.ImportJobCreateOrConnectWithoutErrorsInput;
    upsert?: Prisma.ImportJobUpsertWithoutErrorsInput;
    connect?: Prisma.ImportJobWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ImportJobUpdateToOneWithWhereWithoutErrorsInput, Prisma.ImportJobUpdateWithoutErrorsInput>, Prisma.ImportJobUncheckedUpdateWithoutErrorsInput>;
};
export type ImportJobCreateWithoutSchoolInput = {
    id?: string;
    fileName: string;
    fileUrl?: string | null;
    status?: $Enums.ImportStatus;
    totalRows?: number;
    successRows?: number;
    failedRows?: number;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    createdBy: Prisma.UserCreateNestedOneWithoutImportJobsInput;
    errors?: Prisma.ImportErrorCreateNestedManyWithoutImportJobInput;
};
export type ImportJobUncheckedCreateWithoutSchoolInput = {
    id?: string;
    createdById: string;
    fileName: string;
    fileUrl?: string | null;
    status?: $Enums.ImportStatus;
    totalRows?: number;
    successRows?: number;
    failedRows?: number;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    errors?: Prisma.ImportErrorUncheckedCreateNestedManyWithoutImportJobInput;
};
export type ImportJobCreateOrConnectWithoutSchoolInput = {
    where: Prisma.ImportJobWhereUniqueInput;
    create: Prisma.XOR<Prisma.ImportJobCreateWithoutSchoolInput, Prisma.ImportJobUncheckedCreateWithoutSchoolInput>;
};
export type ImportJobCreateManySchoolInputEnvelope = {
    data: Prisma.ImportJobCreateManySchoolInput | Prisma.ImportJobCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type ImportJobUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.ImportJobWhereUniqueInput;
    update: Prisma.XOR<Prisma.ImportJobUpdateWithoutSchoolInput, Prisma.ImportJobUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.ImportJobCreateWithoutSchoolInput, Prisma.ImportJobUncheckedCreateWithoutSchoolInput>;
};
export type ImportJobUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.ImportJobWhereUniqueInput;
    data: Prisma.XOR<Prisma.ImportJobUpdateWithoutSchoolInput, Prisma.ImportJobUncheckedUpdateWithoutSchoolInput>;
};
export type ImportJobUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.ImportJobScalarWhereInput;
    data: Prisma.XOR<Prisma.ImportJobUpdateManyMutationInput, Prisma.ImportJobUncheckedUpdateManyWithoutSchoolInput>;
};
export type ImportJobScalarWhereInput = {
    AND?: Prisma.ImportJobScalarWhereInput | Prisma.ImportJobScalarWhereInput[];
    OR?: Prisma.ImportJobScalarWhereInput[];
    NOT?: Prisma.ImportJobScalarWhereInput | Prisma.ImportJobScalarWhereInput[];
    id?: Prisma.StringFilter<"ImportJob"> | string;
    schoolId?: Prisma.StringFilter<"ImportJob"> | string;
    createdById?: Prisma.StringFilter<"ImportJob"> | string;
    fileName?: Prisma.StringFilter<"ImportJob"> | string;
    fileUrl?: Prisma.StringNullableFilter<"ImportJob"> | string | null;
    status?: Prisma.EnumImportStatusFilter<"ImportJob"> | $Enums.ImportStatus;
    totalRows?: Prisma.IntFilter<"ImportJob"> | number;
    successRows?: Prisma.IntFilter<"ImportJob"> | number;
    failedRows?: Prisma.IntFilter<"ImportJob"> | number;
    startedAt?: Prisma.DateTimeNullableFilter<"ImportJob"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"ImportJob"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ImportJob"> | Date | string;
};
export type ImportJobCreateWithoutCreatedByInput = {
    id?: string;
    fileName: string;
    fileUrl?: string | null;
    status?: $Enums.ImportStatus;
    totalRows?: number;
    successRows?: number;
    failedRows?: number;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutImportsInput;
    errors?: Prisma.ImportErrorCreateNestedManyWithoutImportJobInput;
};
export type ImportJobUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    schoolId: string;
    fileName: string;
    fileUrl?: string | null;
    status?: $Enums.ImportStatus;
    totalRows?: number;
    successRows?: number;
    failedRows?: number;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    errors?: Prisma.ImportErrorUncheckedCreateNestedManyWithoutImportJobInput;
};
export type ImportJobCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.ImportJobWhereUniqueInput;
    create: Prisma.XOR<Prisma.ImportJobCreateWithoutCreatedByInput, Prisma.ImportJobUncheckedCreateWithoutCreatedByInput>;
};
export type ImportJobCreateManyCreatedByInputEnvelope = {
    data: Prisma.ImportJobCreateManyCreatedByInput | Prisma.ImportJobCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type ImportJobUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.ImportJobWhereUniqueInput;
    update: Prisma.XOR<Prisma.ImportJobUpdateWithoutCreatedByInput, Prisma.ImportJobUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.ImportJobCreateWithoutCreatedByInput, Prisma.ImportJobUncheckedCreateWithoutCreatedByInput>;
};
export type ImportJobUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.ImportJobWhereUniqueInput;
    data: Prisma.XOR<Prisma.ImportJobUpdateWithoutCreatedByInput, Prisma.ImportJobUncheckedUpdateWithoutCreatedByInput>;
};
export type ImportJobUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.ImportJobScalarWhereInput;
    data: Prisma.XOR<Prisma.ImportJobUpdateManyMutationInput, Prisma.ImportJobUncheckedUpdateManyWithoutCreatedByInput>;
};
export type ImportJobCreateWithoutErrorsInput = {
    id?: string;
    fileName: string;
    fileUrl?: string | null;
    status?: $Enums.ImportStatus;
    totalRows?: number;
    successRows?: number;
    failedRows?: number;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutImportsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutImportJobsInput;
};
export type ImportJobUncheckedCreateWithoutErrorsInput = {
    id?: string;
    schoolId: string;
    createdById: string;
    fileName: string;
    fileUrl?: string | null;
    status?: $Enums.ImportStatus;
    totalRows?: number;
    successRows?: number;
    failedRows?: number;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ImportJobCreateOrConnectWithoutErrorsInput = {
    where: Prisma.ImportJobWhereUniqueInput;
    create: Prisma.XOR<Prisma.ImportJobCreateWithoutErrorsInput, Prisma.ImportJobUncheckedCreateWithoutErrorsInput>;
};
export type ImportJobUpsertWithoutErrorsInput = {
    update: Prisma.XOR<Prisma.ImportJobUpdateWithoutErrorsInput, Prisma.ImportJobUncheckedUpdateWithoutErrorsInput>;
    create: Prisma.XOR<Prisma.ImportJobCreateWithoutErrorsInput, Prisma.ImportJobUncheckedCreateWithoutErrorsInput>;
    where?: Prisma.ImportJobWhereInput;
};
export type ImportJobUpdateToOneWithWhereWithoutErrorsInput = {
    where?: Prisma.ImportJobWhereInput;
    data: Prisma.XOR<Prisma.ImportJobUpdateWithoutErrorsInput, Prisma.ImportJobUncheckedUpdateWithoutErrorsInput>;
};
export type ImportJobUpdateWithoutErrorsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumImportStatusFieldUpdateOperationsInput | $Enums.ImportStatus;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    successRows?: Prisma.IntFieldUpdateOperationsInput | number;
    failedRows?: Prisma.IntFieldUpdateOperationsInput | number;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutImportsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutImportJobsNestedInput;
};
export type ImportJobUncheckedUpdateWithoutErrorsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumImportStatusFieldUpdateOperationsInput | $Enums.ImportStatus;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    successRows?: Prisma.IntFieldUpdateOperationsInput | number;
    failedRows?: Prisma.IntFieldUpdateOperationsInput | number;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImportJobCreateManySchoolInput = {
    id?: string;
    createdById: string;
    fileName: string;
    fileUrl?: string | null;
    status?: $Enums.ImportStatus;
    totalRows?: number;
    successRows?: number;
    failedRows?: number;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ImportJobUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumImportStatusFieldUpdateOperationsInput | $Enums.ImportStatus;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    successRows?: Prisma.IntFieldUpdateOperationsInput | number;
    failedRows?: Prisma.IntFieldUpdateOperationsInput | number;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutImportJobsNestedInput;
    errors?: Prisma.ImportErrorUpdateManyWithoutImportJobNestedInput;
};
export type ImportJobUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumImportStatusFieldUpdateOperationsInput | $Enums.ImportStatus;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    successRows?: Prisma.IntFieldUpdateOperationsInput | number;
    failedRows?: Prisma.IntFieldUpdateOperationsInput | number;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    errors?: Prisma.ImportErrorUncheckedUpdateManyWithoutImportJobNestedInput;
};
export type ImportJobUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumImportStatusFieldUpdateOperationsInput | $Enums.ImportStatus;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    successRows?: Prisma.IntFieldUpdateOperationsInput | number;
    failedRows?: Prisma.IntFieldUpdateOperationsInput | number;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImportJobCreateManyCreatedByInput = {
    id?: string;
    schoolId: string;
    fileName: string;
    fileUrl?: string | null;
    status?: $Enums.ImportStatus;
    totalRows?: number;
    successRows?: number;
    failedRows?: number;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ImportJobUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumImportStatusFieldUpdateOperationsInput | $Enums.ImportStatus;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    successRows?: Prisma.IntFieldUpdateOperationsInput | number;
    failedRows?: Prisma.IntFieldUpdateOperationsInput | number;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutImportsNestedInput;
    errors?: Prisma.ImportErrorUpdateManyWithoutImportJobNestedInput;
};
export type ImportJobUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumImportStatusFieldUpdateOperationsInput | $Enums.ImportStatus;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    successRows?: Prisma.IntFieldUpdateOperationsInput | number;
    failedRows?: Prisma.IntFieldUpdateOperationsInput | number;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    errors?: Prisma.ImportErrorUncheckedUpdateManyWithoutImportJobNestedInput;
};
export type ImportJobUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumImportStatusFieldUpdateOperationsInput | $Enums.ImportStatus;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    successRows?: Prisma.IntFieldUpdateOperationsInput | number;
    failedRows?: Prisma.IntFieldUpdateOperationsInput | number;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImportJobCountOutputType = {
    errors: number;
};
export type ImportJobCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    errors?: boolean | ImportJobCountOutputTypeCountErrorsArgs;
};
export type ImportJobCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportJobCountOutputTypeSelect<ExtArgs> | null;
};
export type ImportJobCountOutputTypeCountErrorsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImportErrorWhereInput;
};
export type ImportJobSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    createdById?: boolean;
    fileName?: boolean;
    fileUrl?: boolean;
    status?: boolean;
    totalRows?: boolean;
    successRows?: boolean;
    failedRows?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    errors?: boolean | Prisma.ImportJob$errorsArgs<ExtArgs>;
    _count?: boolean | Prisma.ImportJobCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["importJob"]>;
export type ImportJobSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    createdById?: boolean;
    fileName?: boolean;
    fileUrl?: boolean;
    status?: boolean;
    totalRows?: boolean;
    successRows?: boolean;
    failedRows?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["importJob"]>;
export type ImportJobSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    createdById?: boolean;
    fileName?: boolean;
    fileUrl?: boolean;
    status?: boolean;
    totalRows?: boolean;
    successRows?: boolean;
    failedRows?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["importJob"]>;
export type ImportJobSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    createdById?: boolean;
    fileName?: boolean;
    fileUrl?: boolean;
    status?: boolean;
    totalRows?: boolean;
    successRows?: boolean;
    failedRows?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
};
export type ImportJobOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "createdById" | "fileName" | "fileUrl" | "status" | "totalRows" | "successRows" | "failedRows" | "startedAt" | "completedAt" | "createdAt", ExtArgs["result"]["importJob"]>;
export type ImportJobInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    errors?: boolean | Prisma.ImportJob$errorsArgs<ExtArgs>;
    _count?: boolean | Prisma.ImportJobCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ImportJobIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ImportJobIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ImportJobPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ImportJob";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        createdBy: Prisma.$UserPayload<ExtArgs>;
        errors: Prisma.$ImportErrorPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        createdById: string;
        fileName: string;
        fileUrl: string | null;
        status: $Enums.ImportStatus;
        totalRows: number;
        successRows: number;
        failedRows: number;
        startedAt: Date | null;
        completedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["importJob"]>;
    composites: {};
};
export type ImportJobGetPayload<S extends boolean | null | undefined | ImportJobDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ImportJobPayload, S>;
export type ImportJobCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ImportJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ImportJobCountAggregateInputType | true;
};
export interface ImportJobDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ImportJob'];
        meta: {
            name: 'ImportJob';
        };
    };
    findUnique<T extends ImportJobFindUniqueArgs>(args: Prisma.SelectSubset<T, ImportJobFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ImportJobClient<runtime.Types.Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ImportJobFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ImportJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ImportJobClient<runtime.Types.Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ImportJobFindFirstArgs>(args?: Prisma.SelectSubset<T, ImportJobFindFirstArgs<ExtArgs>>): Prisma.Prisma__ImportJobClient<runtime.Types.Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ImportJobFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ImportJobFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ImportJobClient<runtime.Types.Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ImportJobFindManyArgs>(args?: Prisma.SelectSubset<T, ImportJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ImportJobCreateArgs>(args: Prisma.SelectSubset<T, ImportJobCreateArgs<ExtArgs>>): Prisma.Prisma__ImportJobClient<runtime.Types.Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ImportJobCreateManyArgs>(args?: Prisma.SelectSubset<T, ImportJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ImportJobCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ImportJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ImportJobDeleteArgs>(args: Prisma.SelectSubset<T, ImportJobDeleteArgs<ExtArgs>>): Prisma.Prisma__ImportJobClient<runtime.Types.Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ImportJobUpdateArgs>(args: Prisma.SelectSubset<T, ImportJobUpdateArgs<ExtArgs>>): Prisma.Prisma__ImportJobClient<runtime.Types.Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ImportJobDeleteManyArgs>(args?: Prisma.SelectSubset<T, ImportJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ImportJobUpdateManyArgs>(args: Prisma.SelectSubset<T, ImportJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ImportJobUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ImportJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ImportJobUpsertArgs>(args: Prisma.SelectSubset<T, ImportJobUpsertArgs<ExtArgs>>): Prisma.Prisma__ImportJobClient<runtime.Types.Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ImportJobCountArgs>(args?: Prisma.Subset<T, ImportJobCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ImportJobCountAggregateOutputType> : number>;
    aggregate<T extends ImportJobAggregateArgs>(args: Prisma.Subset<T, ImportJobAggregateArgs>): Prisma.PrismaPromise<GetImportJobAggregateType<T>>;
    groupBy<T extends ImportJobGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ImportJobGroupByArgs['orderBy'];
    } : {
        orderBy?: ImportJobGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ImportJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImportJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ImportJobFieldRefs;
}
export interface Prisma__ImportJobClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    errors<T extends Prisma.ImportJob$errorsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ImportJob$errorsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImportErrorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ImportJobFieldRefs {
    readonly id: Prisma.FieldRef<"ImportJob", 'String'>;
    readonly schoolId: Prisma.FieldRef<"ImportJob", 'String'>;
    readonly createdById: Prisma.FieldRef<"ImportJob", 'String'>;
    readonly fileName: Prisma.FieldRef<"ImportJob", 'String'>;
    readonly fileUrl: Prisma.FieldRef<"ImportJob", 'String'>;
    readonly status: Prisma.FieldRef<"ImportJob", 'ImportStatus'>;
    readonly totalRows: Prisma.FieldRef<"ImportJob", 'Int'>;
    readonly successRows: Prisma.FieldRef<"ImportJob", 'Int'>;
    readonly failedRows: Prisma.FieldRef<"ImportJob", 'Int'>;
    readonly startedAt: Prisma.FieldRef<"ImportJob", 'DateTime'>;
    readonly completedAt: Prisma.FieldRef<"ImportJob", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"ImportJob", 'DateTime'>;
}
export type ImportJobFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportJobSelect<ExtArgs> | null;
    omit?: Prisma.ImportJobOmit<ExtArgs> | null;
    include?: Prisma.ImportJobInclude<ExtArgs> | null;
    where: Prisma.ImportJobWhereUniqueInput;
};
export type ImportJobFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportJobSelect<ExtArgs> | null;
    omit?: Prisma.ImportJobOmit<ExtArgs> | null;
    include?: Prisma.ImportJobInclude<ExtArgs> | null;
    where: Prisma.ImportJobWhereUniqueInput;
};
export type ImportJobFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportJobSelect<ExtArgs> | null;
    omit?: Prisma.ImportJobOmit<ExtArgs> | null;
    include?: Prisma.ImportJobInclude<ExtArgs> | null;
    where?: Prisma.ImportJobWhereInput;
    orderBy?: Prisma.ImportJobOrderByWithRelationInput | Prisma.ImportJobOrderByWithRelationInput[];
    cursor?: Prisma.ImportJobWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ImportJobScalarFieldEnum | Prisma.ImportJobScalarFieldEnum[];
};
export type ImportJobFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportJobSelect<ExtArgs> | null;
    omit?: Prisma.ImportJobOmit<ExtArgs> | null;
    include?: Prisma.ImportJobInclude<ExtArgs> | null;
    where?: Prisma.ImportJobWhereInput;
    orderBy?: Prisma.ImportJobOrderByWithRelationInput | Prisma.ImportJobOrderByWithRelationInput[];
    cursor?: Prisma.ImportJobWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ImportJobScalarFieldEnum | Prisma.ImportJobScalarFieldEnum[];
};
export type ImportJobFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportJobSelect<ExtArgs> | null;
    omit?: Prisma.ImportJobOmit<ExtArgs> | null;
    include?: Prisma.ImportJobInclude<ExtArgs> | null;
    where?: Prisma.ImportJobWhereInput;
    orderBy?: Prisma.ImportJobOrderByWithRelationInput | Prisma.ImportJobOrderByWithRelationInput[];
    cursor?: Prisma.ImportJobWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ImportJobScalarFieldEnum | Prisma.ImportJobScalarFieldEnum[];
};
export type ImportJobCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportJobSelect<ExtArgs> | null;
    omit?: Prisma.ImportJobOmit<ExtArgs> | null;
    include?: Prisma.ImportJobInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ImportJobCreateInput, Prisma.ImportJobUncheckedCreateInput>;
};
export type ImportJobCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ImportJobCreateManyInput | Prisma.ImportJobCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ImportJobCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportJobSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ImportJobOmit<ExtArgs> | null;
    data: Prisma.ImportJobCreateManyInput | Prisma.ImportJobCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ImportJobIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ImportJobUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportJobSelect<ExtArgs> | null;
    omit?: Prisma.ImportJobOmit<ExtArgs> | null;
    include?: Prisma.ImportJobInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ImportJobUpdateInput, Prisma.ImportJobUncheckedUpdateInput>;
    where: Prisma.ImportJobWhereUniqueInput;
};
export type ImportJobUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ImportJobUpdateManyMutationInput, Prisma.ImportJobUncheckedUpdateManyInput>;
    where?: Prisma.ImportJobWhereInput;
    limit?: number;
};
export type ImportJobUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportJobSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ImportJobOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ImportJobUpdateManyMutationInput, Prisma.ImportJobUncheckedUpdateManyInput>;
    where?: Prisma.ImportJobWhereInput;
    limit?: number;
    include?: Prisma.ImportJobIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ImportJobUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportJobSelect<ExtArgs> | null;
    omit?: Prisma.ImportJobOmit<ExtArgs> | null;
    include?: Prisma.ImportJobInclude<ExtArgs> | null;
    where: Prisma.ImportJobWhereUniqueInput;
    create: Prisma.XOR<Prisma.ImportJobCreateInput, Prisma.ImportJobUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ImportJobUpdateInput, Prisma.ImportJobUncheckedUpdateInput>;
};
export type ImportJobDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportJobSelect<ExtArgs> | null;
    omit?: Prisma.ImportJobOmit<ExtArgs> | null;
    include?: Prisma.ImportJobInclude<ExtArgs> | null;
    where: Prisma.ImportJobWhereUniqueInput;
};
export type ImportJobDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImportJobWhereInput;
    limit?: number;
};
export type ImportJob$errorsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportErrorSelect<ExtArgs> | null;
    omit?: Prisma.ImportErrorOmit<ExtArgs> | null;
    include?: Prisma.ImportErrorInclude<ExtArgs> | null;
    where?: Prisma.ImportErrorWhereInput;
    orderBy?: Prisma.ImportErrorOrderByWithRelationInput | Prisma.ImportErrorOrderByWithRelationInput[];
    cursor?: Prisma.ImportErrorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ImportErrorScalarFieldEnum | Prisma.ImportErrorScalarFieldEnum[];
};
export type ImportJobDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportJobSelect<ExtArgs> | null;
    omit?: Prisma.ImportJobOmit<ExtArgs> | null;
    include?: Prisma.ImportJobInclude<ExtArgs> | null;
};
