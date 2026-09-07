import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ImportErrorModel = runtime.Types.Result.DefaultSelection<Prisma.$ImportErrorPayload>;
export type AggregateImportError = {
    _count: ImportErrorCountAggregateOutputType | null;
    _avg: ImportErrorAvgAggregateOutputType | null;
    _sum: ImportErrorSumAggregateOutputType | null;
    _min: ImportErrorMinAggregateOutputType | null;
    _max: ImportErrorMaxAggregateOutputType | null;
};
export type ImportErrorAvgAggregateOutputType = {
    rowNumber: number | null;
};
export type ImportErrorSumAggregateOutputType = {
    rowNumber: number | null;
};
export type ImportErrorMinAggregateOutputType = {
    id: string | null;
    importJobId: string | null;
    rowNumber: number | null;
    fieldName: string | null;
    message: string | null;
    createdAt: Date | null;
};
export type ImportErrorMaxAggregateOutputType = {
    id: string | null;
    importJobId: string | null;
    rowNumber: number | null;
    fieldName: string | null;
    message: string | null;
    createdAt: Date | null;
};
export type ImportErrorCountAggregateOutputType = {
    id: number;
    importJobId: number;
    rowNumber: number;
    fieldName: number;
    message: number;
    createdAt: number;
    _all: number;
};
export type ImportErrorAvgAggregateInputType = {
    rowNumber?: true;
};
export type ImportErrorSumAggregateInputType = {
    rowNumber?: true;
};
export type ImportErrorMinAggregateInputType = {
    id?: true;
    importJobId?: true;
    rowNumber?: true;
    fieldName?: true;
    message?: true;
    createdAt?: true;
};
export type ImportErrorMaxAggregateInputType = {
    id?: true;
    importJobId?: true;
    rowNumber?: true;
    fieldName?: true;
    message?: true;
    createdAt?: true;
};
export type ImportErrorCountAggregateInputType = {
    id?: true;
    importJobId?: true;
    rowNumber?: true;
    fieldName?: true;
    message?: true;
    createdAt?: true;
    _all?: true;
};
export type ImportErrorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImportErrorWhereInput;
    orderBy?: Prisma.ImportErrorOrderByWithRelationInput | Prisma.ImportErrorOrderByWithRelationInput[];
    cursor?: Prisma.ImportErrorWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ImportErrorCountAggregateInputType;
    _avg?: ImportErrorAvgAggregateInputType;
    _sum?: ImportErrorSumAggregateInputType;
    _min?: ImportErrorMinAggregateInputType;
    _max?: ImportErrorMaxAggregateInputType;
};
export type GetImportErrorAggregateType<T extends ImportErrorAggregateArgs> = {
    [P in keyof T & keyof AggregateImportError]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateImportError[P]> : Prisma.GetScalarType<T[P], AggregateImportError[P]>;
};
export type ImportErrorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImportErrorWhereInput;
    orderBy?: Prisma.ImportErrorOrderByWithAggregationInput | Prisma.ImportErrorOrderByWithAggregationInput[];
    by: Prisma.ImportErrorScalarFieldEnum[] | Prisma.ImportErrorScalarFieldEnum;
    having?: Prisma.ImportErrorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ImportErrorCountAggregateInputType | true;
    _avg?: ImportErrorAvgAggregateInputType;
    _sum?: ImportErrorSumAggregateInputType;
    _min?: ImportErrorMinAggregateInputType;
    _max?: ImportErrorMaxAggregateInputType;
};
export type ImportErrorGroupByOutputType = {
    id: string;
    importJobId: string;
    rowNumber: number | null;
    fieldName: string | null;
    message: string;
    createdAt: Date;
    _count: ImportErrorCountAggregateOutputType | null;
    _avg: ImportErrorAvgAggregateOutputType | null;
    _sum: ImportErrorSumAggregateOutputType | null;
    _min: ImportErrorMinAggregateOutputType | null;
    _max: ImportErrorMaxAggregateOutputType | null;
};
export type GetImportErrorGroupByPayload<T extends ImportErrorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ImportErrorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ImportErrorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ImportErrorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ImportErrorGroupByOutputType[P]>;
}>>;
export type ImportErrorWhereInput = {
    AND?: Prisma.ImportErrorWhereInput | Prisma.ImportErrorWhereInput[];
    OR?: Prisma.ImportErrorWhereInput[];
    NOT?: Prisma.ImportErrorWhereInput | Prisma.ImportErrorWhereInput[];
    id?: Prisma.StringFilter<"ImportError"> | string;
    importJobId?: Prisma.StringFilter<"ImportError"> | string;
    rowNumber?: Prisma.IntNullableFilter<"ImportError"> | number | null;
    fieldName?: Prisma.StringNullableFilter<"ImportError"> | string | null;
    message?: Prisma.StringFilter<"ImportError"> | string;
    createdAt?: Prisma.DateTimeFilter<"ImportError"> | Date | string;
    importJob?: Prisma.XOR<Prisma.ImportJobScalarRelationFilter, Prisma.ImportJobWhereInput>;
};
export type ImportErrorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    importJobId?: Prisma.SortOrder;
    rowNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    fieldName?: Prisma.SortOrderInput | Prisma.SortOrder;
    message?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    importJob?: Prisma.ImportJobOrderByWithRelationInput;
};
export type ImportErrorWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ImportErrorWhereInput | Prisma.ImportErrorWhereInput[];
    OR?: Prisma.ImportErrorWhereInput[];
    NOT?: Prisma.ImportErrorWhereInput | Prisma.ImportErrorWhereInput[];
    importJobId?: Prisma.StringFilter<"ImportError"> | string;
    rowNumber?: Prisma.IntNullableFilter<"ImportError"> | number | null;
    fieldName?: Prisma.StringNullableFilter<"ImportError"> | string | null;
    message?: Prisma.StringFilter<"ImportError"> | string;
    createdAt?: Prisma.DateTimeFilter<"ImportError"> | Date | string;
    importJob?: Prisma.XOR<Prisma.ImportJobScalarRelationFilter, Prisma.ImportJobWhereInput>;
}, "id">;
export type ImportErrorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    importJobId?: Prisma.SortOrder;
    rowNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    fieldName?: Prisma.SortOrderInput | Prisma.SortOrder;
    message?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ImportErrorCountOrderByAggregateInput;
    _avg?: Prisma.ImportErrorAvgOrderByAggregateInput;
    _max?: Prisma.ImportErrorMaxOrderByAggregateInput;
    _min?: Prisma.ImportErrorMinOrderByAggregateInput;
    _sum?: Prisma.ImportErrorSumOrderByAggregateInput;
};
export type ImportErrorScalarWhereWithAggregatesInput = {
    AND?: Prisma.ImportErrorScalarWhereWithAggregatesInput | Prisma.ImportErrorScalarWhereWithAggregatesInput[];
    OR?: Prisma.ImportErrorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ImportErrorScalarWhereWithAggregatesInput | Prisma.ImportErrorScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ImportError"> | string;
    importJobId?: Prisma.StringWithAggregatesFilter<"ImportError"> | string;
    rowNumber?: Prisma.IntNullableWithAggregatesFilter<"ImportError"> | number | null;
    fieldName?: Prisma.StringNullableWithAggregatesFilter<"ImportError"> | string | null;
    message?: Prisma.StringWithAggregatesFilter<"ImportError"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ImportError"> | Date | string;
};
export type ImportErrorCreateInput = {
    id?: string;
    rowNumber?: number | null;
    fieldName?: string | null;
    message: string;
    createdAt?: Date | string;
    importJob: Prisma.ImportJobCreateNestedOneWithoutErrorsInput;
};
export type ImportErrorUncheckedCreateInput = {
    id?: string;
    importJobId: string;
    rowNumber?: number | null;
    fieldName?: string | null;
    message: string;
    createdAt?: Date | string;
};
export type ImportErrorUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rowNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fieldName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importJob?: Prisma.ImportJobUpdateOneRequiredWithoutErrorsNestedInput;
};
export type ImportErrorUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importJobId?: Prisma.StringFieldUpdateOperationsInput | string;
    rowNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fieldName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImportErrorCreateManyInput = {
    id?: string;
    importJobId: string;
    rowNumber?: number | null;
    fieldName?: string | null;
    message: string;
    createdAt?: Date | string;
};
export type ImportErrorUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rowNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fieldName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImportErrorUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importJobId?: Prisma.StringFieldUpdateOperationsInput | string;
    rowNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fieldName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImportErrorListRelationFilter = {
    every?: Prisma.ImportErrorWhereInput;
    some?: Prisma.ImportErrorWhereInput;
    none?: Prisma.ImportErrorWhereInput;
};
export type ImportErrorOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ImportErrorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    importJobId?: Prisma.SortOrder;
    rowNumber?: Prisma.SortOrder;
    fieldName?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ImportErrorAvgOrderByAggregateInput = {
    rowNumber?: Prisma.SortOrder;
};
export type ImportErrorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    importJobId?: Prisma.SortOrder;
    rowNumber?: Prisma.SortOrder;
    fieldName?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ImportErrorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    importJobId?: Prisma.SortOrder;
    rowNumber?: Prisma.SortOrder;
    fieldName?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ImportErrorSumOrderByAggregateInput = {
    rowNumber?: Prisma.SortOrder;
};
export type ImportErrorCreateNestedManyWithoutImportJobInput = {
    create?: Prisma.XOR<Prisma.ImportErrorCreateWithoutImportJobInput, Prisma.ImportErrorUncheckedCreateWithoutImportJobInput> | Prisma.ImportErrorCreateWithoutImportJobInput[] | Prisma.ImportErrorUncheckedCreateWithoutImportJobInput[];
    connectOrCreate?: Prisma.ImportErrorCreateOrConnectWithoutImportJobInput | Prisma.ImportErrorCreateOrConnectWithoutImportJobInput[];
    createMany?: Prisma.ImportErrorCreateManyImportJobInputEnvelope;
    connect?: Prisma.ImportErrorWhereUniqueInput | Prisma.ImportErrorWhereUniqueInput[];
};
export type ImportErrorUncheckedCreateNestedManyWithoutImportJobInput = {
    create?: Prisma.XOR<Prisma.ImportErrorCreateWithoutImportJobInput, Prisma.ImportErrorUncheckedCreateWithoutImportJobInput> | Prisma.ImportErrorCreateWithoutImportJobInput[] | Prisma.ImportErrorUncheckedCreateWithoutImportJobInput[];
    connectOrCreate?: Prisma.ImportErrorCreateOrConnectWithoutImportJobInput | Prisma.ImportErrorCreateOrConnectWithoutImportJobInput[];
    createMany?: Prisma.ImportErrorCreateManyImportJobInputEnvelope;
    connect?: Prisma.ImportErrorWhereUniqueInput | Prisma.ImportErrorWhereUniqueInput[];
};
export type ImportErrorUpdateManyWithoutImportJobNestedInput = {
    create?: Prisma.XOR<Prisma.ImportErrorCreateWithoutImportJobInput, Prisma.ImportErrorUncheckedCreateWithoutImportJobInput> | Prisma.ImportErrorCreateWithoutImportJobInput[] | Prisma.ImportErrorUncheckedCreateWithoutImportJobInput[];
    connectOrCreate?: Prisma.ImportErrorCreateOrConnectWithoutImportJobInput | Prisma.ImportErrorCreateOrConnectWithoutImportJobInput[];
    upsert?: Prisma.ImportErrorUpsertWithWhereUniqueWithoutImportJobInput | Prisma.ImportErrorUpsertWithWhereUniqueWithoutImportJobInput[];
    createMany?: Prisma.ImportErrorCreateManyImportJobInputEnvelope;
    set?: Prisma.ImportErrorWhereUniqueInput | Prisma.ImportErrorWhereUniqueInput[];
    disconnect?: Prisma.ImportErrorWhereUniqueInput | Prisma.ImportErrorWhereUniqueInput[];
    delete?: Prisma.ImportErrorWhereUniqueInput | Prisma.ImportErrorWhereUniqueInput[];
    connect?: Prisma.ImportErrorWhereUniqueInput | Prisma.ImportErrorWhereUniqueInput[];
    update?: Prisma.ImportErrorUpdateWithWhereUniqueWithoutImportJobInput | Prisma.ImportErrorUpdateWithWhereUniqueWithoutImportJobInput[];
    updateMany?: Prisma.ImportErrorUpdateManyWithWhereWithoutImportJobInput | Prisma.ImportErrorUpdateManyWithWhereWithoutImportJobInput[];
    deleteMany?: Prisma.ImportErrorScalarWhereInput | Prisma.ImportErrorScalarWhereInput[];
};
export type ImportErrorUncheckedUpdateManyWithoutImportJobNestedInput = {
    create?: Prisma.XOR<Prisma.ImportErrorCreateWithoutImportJobInput, Prisma.ImportErrorUncheckedCreateWithoutImportJobInput> | Prisma.ImportErrorCreateWithoutImportJobInput[] | Prisma.ImportErrorUncheckedCreateWithoutImportJobInput[];
    connectOrCreate?: Prisma.ImportErrorCreateOrConnectWithoutImportJobInput | Prisma.ImportErrorCreateOrConnectWithoutImportJobInput[];
    upsert?: Prisma.ImportErrorUpsertWithWhereUniqueWithoutImportJobInput | Prisma.ImportErrorUpsertWithWhereUniqueWithoutImportJobInput[];
    createMany?: Prisma.ImportErrorCreateManyImportJobInputEnvelope;
    set?: Prisma.ImportErrorWhereUniqueInput | Prisma.ImportErrorWhereUniqueInput[];
    disconnect?: Prisma.ImportErrorWhereUniqueInput | Prisma.ImportErrorWhereUniqueInput[];
    delete?: Prisma.ImportErrorWhereUniqueInput | Prisma.ImportErrorWhereUniqueInput[];
    connect?: Prisma.ImportErrorWhereUniqueInput | Prisma.ImportErrorWhereUniqueInput[];
    update?: Prisma.ImportErrorUpdateWithWhereUniqueWithoutImportJobInput | Prisma.ImportErrorUpdateWithWhereUniqueWithoutImportJobInput[];
    updateMany?: Prisma.ImportErrorUpdateManyWithWhereWithoutImportJobInput | Prisma.ImportErrorUpdateManyWithWhereWithoutImportJobInput[];
    deleteMany?: Prisma.ImportErrorScalarWhereInput | Prisma.ImportErrorScalarWhereInput[];
};
export type ImportErrorCreateWithoutImportJobInput = {
    id?: string;
    rowNumber?: number | null;
    fieldName?: string | null;
    message: string;
    createdAt?: Date | string;
};
export type ImportErrorUncheckedCreateWithoutImportJobInput = {
    id?: string;
    rowNumber?: number | null;
    fieldName?: string | null;
    message: string;
    createdAt?: Date | string;
};
export type ImportErrorCreateOrConnectWithoutImportJobInput = {
    where: Prisma.ImportErrorWhereUniqueInput;
    create: Prisma.XOR<Prisma.ImportErrorCreateWithoutImportJobInput, Prisma.ImportErrorUncheckedCreateWithoutImportJobInput>;
};
export type ImportErrorCreateManyImportJobInputEnvelope = {
    data: Prisma.ImportErrorCreateManyImportJobInput | Prisma.ImportErrorCreateManyImportJobInput[];
    skipDuplicates?: boolean;
};
export type ImportErrorUpsertWithWhereUniqueWithoutImportJobInput = {
    where: Prisma.ImportErrorWhereUniqueInput;
    update: Prisma.XOR<Prisma.ImportErrorUpdateWithoutImportJobInput, Prisma.ImportErrorUncheckedUpdateWithoutImportJobInput>;
    create: Prisma.XOR<Prisma.ImportErrorCreateWithoutImportJobInput, Prisma.ImportErrorUncheckedCreateWithoutImportJobInput>;
};
export type ImportErrorUpdateWithWhereUniqueWithoutImportJobInput = {
    where: Prisma.ImportErrorWhereUniqueInput;
    data: Prisma.XOR<Prisma.ImportErrorUpdateWithoutImportJobInput, Prisma.ImportErrorUncheckedUpdateWithoutImportJobInput>;
};
export type ImportErrorUpdateManyWithWhereWithoutImportJobInput = {
    where: Prisma.ImportErrorScalarWhereInput;
    data: Prisma.XOR<Prisma.ImportErrorUpdateManyMutationInput, Prisma.ImportErrorUncheckedUpdateManyWithoutImportJobInput>;
};
export type ImportErrorScalarWhereInput = {
    AND?: Prisma.ImportErrorScalarWhereInput | Prisma.ImportErrorScalarWhereInput[];
    OR?: Prisma.ImportErrorScalarWhereInput[];
    NOT?: Prisma.ImportErrorScalarWhereInput | Prisma.ImportErrorScalarWhereInput[];
    id?: Prisma.StringFilter<"ImportError"> | string;
    importJobId?: Prisma.StringFilter<"ImportError"> | string;
    rowNumber?: Prisma.IntNullableFilter<"ImportError"> | number | null;
    fieldName?: Prisma.StringNullableFilter<"ImportError"> | string | null;
    message?: Prisma.StringFilter<"ImportError"> | string;
    createdAt?: Prisma.DateTimeFilter<"ImportError"> | Date | string;
};
export type ImportErrorCreateManyImportJobInput = {
    id?: string;
    rowNumber?: number | null;
    fieldName?: string | null;
    message: string;
    createdAt?: Date | string;
};
export type ImportErrorUpdateWithoutImportJobInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rowNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fieldName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImportErrorUncheckedUpdateWithoutImportJobInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rowNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fieldName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImportErrorUncheckedUpdateManyWithoutImportJobInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rowNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fieldName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImportErrorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    importJobId?: boolean;
    rowNumber?: boolean;
    fieldName?: boolean;
    message?: boolean;
    createdAt?: boolean;
    importJob?: boolean | Prisma.ImportJobDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["importError"]>;
export type ImportErrorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    importJobId?: boolean;
    rowNumber?: boolean;
    fieldName?: boolean;
    message?: boolean;
    createdAt?: boolean;
    importJob?: boolean | Prisma.ImportJobDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["importError"]>;
export type ImportErrorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    importJobId?: boolean;
    rowNumber?: boolean;
    fieldName?: boolean;
    message?: boolean;
    createdAt?: boolean;
    importJob?: boolean | Prisma.ImportJobDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["importError"]>;
export type ImportErrorSelectScalar = {
    id?: boolean;
    importJobId?: boolean;
    rowNumber?: boolean;
    fieldName?: boolean;
    message?: boolean;
    createdAt?: boolean;
};
export type ImportErrorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "importJobId" | "rowNumber" | "fieldName" | "message" | "createdAt", ExtArgs["result"]["importError"]>;
export type ImportErrorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    importJob?: boolean | Prisma.ImportJobDefaultArgs<ExtArgs>;
};
export type ImportErrorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    importJob?: boolean | Prisma.ImportJobDefaultArgs<ExtArgs>;
};
export type ImportErrorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    importJob?: boolean | Prisma.ImportJobDefaultArgs<ExtArgs>;
};
export type $ImportErrorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ImportError";
    objects: {
        importJob: Prisma.$ImportJobPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        importJobId: string;
        rowNumber: number | null;
        fieldName: string | null;
        message: string;
        createdAt: Date;
    }, ExtArgs["result"]["importError"]>;
    composites: {};
};
export type ImportErrorGetPayload<S extends boolean | null | undefined | ImportErrorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ImportErrorPayload, S>;
export type ImportErrorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ImportErrorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ImportErrorCountAggregateInputType | true;
};
export interface ImportErrorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ImportError'];
        meta: {
            name: 'ImportError';
        };
    };
    findUnique<T extends ImportErrorFindUniqueArgs>(args: Prisma.SelectSubset<T, ImportErrorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ImportErrorClient<runtime.Types.Result.GetResult<Prisma.$ImportErrorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ImportErrorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ImportErrorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ImportErrorClient<runtime.Types.Result.GetResult<Prisma.$ImportErrorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ImportErrorFindFirstArgs>(args?: Prisma.SelectSubset<T, ImportErrorFindFirstArgs<ExtArgs>>): Prisma.Prisma__ImportErrorClient<runtime.Types.Result.GetResult<Prisma.$ImportErrorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ImportErrorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ImportErrorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ImportErrorClient<runtime.Types.Result.GetResult<Prisma.$ImportErrorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ImportErrorFindManyArgs>(args?: Prisma.SelectSubset<T, ImportErrorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImportErrorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ImportErrorCreateArgs>(args: Prisma.SelectSubset<T, ImportErrorCreateArgs<ExtArgs>>): Prisma.Prisma__ImportErrorClient<runtime.Types.Result.GetResult<Prisma.$ImportErrorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ImportErrorCreateManyArgs>(args?: Prisma.SelectSubset<T, ImportErrorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ImportErrorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ImportErrorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImportErrorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ImportErrorDeleteArgs>(args: Prisma.SelectSubset<T, ImportErrorDeleteArgs<ExtArgs>>): Prisma.Prisma__ImportErrorClient<runtime.Types.Result.GetResult<Prisma.$ImportErrorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ImportErrorUpdateArgs>(args: Prisma.SelectSubset<T, ImportErrorUpdateArgs<ExtArgs>>): Prisma.Prisma__ImportErrorClient<runtime.Types.Result.GetResult<Prisma.$ImportErrorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ImportErrorDeleteManyArgs>(args?: Prisma.SelectSubset<T, ImportErrorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ImportErrorUpdateManyArgs>(args: Prisma.SelectSubset<T, ImportErrorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ImportErrorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ImportErrorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImportErrorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ImportErrorUpsertArgs>(args: Prisma.SelectSubset<T, ImportErrorUpsertArgs<ExtArgs>>): Prisma.Prisma__ImportErrorClient<runtime.Types.Result.GetResult<Prisma.$ImportErrorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ImportErrorCountArgs>(args?: Prisma.Subset<T, ImportErrorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ImportErrorCountAggregateOutputType> : number>;
    aggregate<T extends ImportErrorAggregateArgs>(args: Prisma.Subset<T, ImportErrorAggregateArgs>): Prisma.PrismaPromise<GetImportErrorAggregateType<T>>;
    groupBy<T extends ImportErrorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ImportErrorGroupByArgs['orderBy'];
    } : {
        orderBy?: ImportErrorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ImportErrorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImportErrorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ImportErrorFieldRefs;
}
export interface Prisma__ImportErrorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    importJob<T extends Prisma.ImportJobDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ImportJobDefaultArgs<ExtArgs>>): Prisma.Prisma__ImportJobClient<runtime.Types.Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ImportErrorFieldRefs {
    readonly id: Prisma.FieldRef<"ImportError", 'String'>;
    readonly importJobId: Prisma.FieldRef<"ImportError", 'String'>;
    readonly rowNumber: Prisma.FieldRef<"ImportError", 'Int'>;
    readonly fieldName: Prisma.FieldRef<"ImportError", 'String'>;
    readonly message: Prisma.FieldRef<"ImportError", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ImportError", 'DateTime'>;
}
export type ImportErrorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportErrorSelect<ExtArgs> | null;
    omit?: Prisma.ImportErrorOmit<ExtArgs> | null;
    include?: Prisma.ImportErrorInclude<ExtArgs> | null;
    where: Prisma.ImportErrorWhereUniqueInput;
};
export type ImportErrorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportErrorSelect<ExtArgs> | null;
    omit?: Prisma.ImportErrorOmit<ExtArgs> | null;
    include?: Prisma.ImportErrorInclude<ExtArgs> | null;
    where: Prisma.ImportErrorWhereUniqueInput;
};
export type ImportErrorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ImportErrorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ImportErrorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ImportErrorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportErrorSelect<ExtArgs> | null;
    omit?: Prisma.ImportErrorOmit<ExtArgs> | null;
    include?: Prisma.ImportErrorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ImportErrorCreateInput, Prisma.ImportErrorUncheckedCreateInput>;
};
export type ImportErrorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ImportErrorCreateManyInput | Prisma.ImportErrorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ImportErrorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportErrorSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ImportErrorOmit<ExtArgs> | null;
    data: Prisma.ImportErrorCreateManyInput | Prisma.ImportErrorCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ImportErrorIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ImportErrorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportErrorSelect<ExtArgs> | null;
    omit?: Prisma.ImportErrorOmit<ExtArgs> | null;
    include?: Prisma.ImportErrorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ImportErrorUpdateInput, Prisma.ImportErrorUncheckedUpdateInput>;
    where: Prisma.ImportErrorWhereUniqueInput;
};
export type ImportErrorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ImportErrorUpdateManyMutationInput, Prisma.ImportErrorUncheckedUpdateManyInput>;
    where?: Prisma.ImportErrorWhereInput;
    limit?: number;
};
export type ImportErrorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportErrorSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ImportErrorOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ImportErrorUpdateManyMutationInput, Prisma.ImportErrorUncheckedUpdateManyInput>;
    where?: Prisma.ImportErrorWhereInput;
    limit?: number;
    include?: Prisma.ImportErrorIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ImportErrorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportErrorSelect<ExtArgs> | null;
    omit?: Prisma.ImportErrorOmit<ExtArgs> | null;
    include?: Prisma.ImportErrorInclude<ExtArgs> | null;
    where: Prisma.ImportErrorWhereUniqueInput;
    create: Prisma.XOR<Prisma.ImportErrorCreateInput, Prisma.ImportErrorUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ImportErrorUpdateInput, Prisma.ImportErrorUncheckedUpdateInput>;
};
export type ImportErrorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportErrorSelect<ExtArgs> | null;
    omit?: Prisma.ImportErrorOmit<ExtArgs> | null;
    include?: Prisma.ImportErrorInclude<ExtArgs> | null;
    where: Prisma.ImportErrorWhereUniqueInput;
};
export type ImportErrorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImportErrorWhereInput;
    limit?: number;
};
export type ImportErrorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportErrorSelect<ExtArgs> | null;
    omit?: Prisma.ImportErrorOmit<ExtArgs> | null;
    include?: Prisma.ImportErrorInclude<ExtArgs> | null;
};
