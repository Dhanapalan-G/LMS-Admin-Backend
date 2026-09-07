import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CertificateModel = runtime.Types.Result.DefaultSelection<Prisma.$CertificatePayload>;
export type AggregateCertificate = {
    _count: CertificateCountAggregateOutputType | null;
    _min: CertificateMinAggregateOutputType | null;
    _max: CertificateMaxAggregateOutputType | null;
};
export type CertificateMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    courseId: string | null;
    certificateNumber: string | null;
    fileUrl: string | null;
    issuedAt: Date | null;
};
export type CertificateMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    courseId: string | null;
    certificateNumber: string | null;
    fileUrl: string | null;
    issuedAt: Date | null;
};
export type CertificateCountAggregateOutputType = {
    id: number;
    userId: number;
    courseId: number;
    certificateNumber: number;
    fileUrl: number;
    issuedAt: number;
    _all: number;
};
export type CertificateMinAggregateInputType = {
    id?: true;
    userId?: true;
    courseId?: true;
    certificateNumber?: true;
    fileUrl?: true;
    issuedAt?: true;
};
export type CertificateMaxAggregateInputType = {
    id?: true;
    userId?: true;
    courseId?: true;
    certificateNumber?: true;
    fileUrl?: true;
    issuedAt?: true;
};
export type CertificateCountAggregateInputType = {
    id?: true;
    userId?: true;
    courseId?: true;
    certificateNumber?: true;
    fileUrl?: true;
    issuedAt?: true;
    _all?: true;
};
export type CertificateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CertificateWhereInput;
    orderBy?: Prisma.CertificateOrderByWithRelationInput | Prisma.CertificateOrderByWithRelationInput[];
    cursor?: Prisma.CertificateWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CertificateCountAggregateInputType;
    _min?: CertificateMinAggregateInputType;
    _max?: CertificateMaxAggregateInputType;
};
export type GetCertificateAggregateType<T extends CertificateAggregateArgs> = {
    [P in keyof T & keyof AggregateCertificate]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCertificate[P]> : Prisma.GetScalarType<T[P], AggregateCertificate[P]>;
};
export type CertificateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CertificateWhereInput;
    orderBy?: Prisma.CertificateOrderByWithAggregationInput | Prisma.CertificateOrderByWithAggregationInput[];
    by: Prisma.CertificateScalarFieldEnum[] | Prisma.CertificateScalarFieldEnum;
    having?: Prisma.CertificateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CertificateCountAggregateInputType | true;
    _min?: CertificateMinAggregateInputType;
    _max?: CertificateMaxAggregateInputType;
};
export type CertificateGroupByOutputType = {
    id: string;
    userId: string;
    courseId: string;
    certificateNumber: string;
    fileUrl: string | null;
    issuedAt: Date;
    _count: CertificateCountAggregateOutputType | null;
    _min: CertificateMinAggregateOutputType | null;
    _max: CertificateMaxAggregateOutputType | null;
};
export type GetCertificateGroupByPayload<T extends CertificateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CertificateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CertificateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CertificateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CertificateGroupByOutputType[P]>;
}>>;
export type CertificateWhereInput = {
    AND?: Prisma.CertificateWhereInput | Prisma.CertificateWhereInput[];
    OR?: Prisma.CertificateWhereInput[];
    NOT?: Prisma.CertificateWhereInput | Prisma.CertificateWhereInput[];
    id?: Prisma.StringFilter<"Certificate"> | string;
    userId?: Prisma.StringFilter<"Certificate"> | string;
    courseId?: Prisma.StringFilter<"Certificate"> | string;
    certificateNumber?: Prisma.StringFilter<"Certificate"> | string;
    fileUrl?: Prisma.StringNullableFilter<"Certificate"> | string | null;
    issuedAt?: Prisma.DateTimeFilter<"Certificate"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
};
export type CertificateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    certificateNumber?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    course?: Prisma.CourseOrderByWithRelationInput;
};
export type CertificateWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    certificateNumber?: string;
    userId_courseId?: Prisma.CertificateUserIdCourseIdCompoundUniqueInput;
    AND?: Prisma.CertificateWhereInput | Prisma.CertificateWhereInput[];
    OR?: Prisma.CertificateWhereInput[];
    NOT?: Prisma.CertificateWhereInput | Prisma.CertificateWhereInput[];
    userId?: Prisma.StringFilter<"Certificate"> | string;
    courseId?: Prisma.StringFilter<"Certificate"> | string;
    fileUrl?: Prisma.StringNullableFilter<"Certificate"> | string | null;
    issuedAt?: Prisma.DateTimeFilter<"Certificate"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
}, "id" | "certificateNumber" | "userId_courseId">;
export type CertificateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    certificateNumber?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
    _count?: Prisma.CertificateCountOrderByAggregateInput;
    _max?: Prisma.CertificateMaxOrderByAggregateInput;
    _min?: Prisma.CertificateMinOrderByAggregateInput;
};
export type CertificateScalarWhereWithAggregatesInput = {
    AND?: Prisma.CertificateScalarWhereWithAggregatesInput | Prisma.CertificateScalarWhereWithAggregatesInput[];
    OR?: Prisma.CertificateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CertificateScalarWhereWithAggregatesInput | Prisma.CertificateScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Certificate"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Certificate"> | string;
    courseId?: Prisma.StringWithAggregatesFilter<"Certificate"> | string;
    certificateNumber?: Prisma.StringWithAggregatesFilter<"Certificate"> | string;
    fileUrl?: Prisma.StringNullableWithAggregatesFilter<"Certificate"> | string | null;
    issuedAt?: Prisma.DateTimeWithAggregatesFilter<"Certificate"> | Date | string;
};
export type CertificateCreateInput = {
    id?: string;
    certificateNumber: string;
    fileUrl?: string | null;
    issuedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutCertificatesInput;
    course: Prisma.CourseCreateNestedOneWithoutCertificatesInput;
};
export type CertificateUncheckedCreateInput = {
    id?: string;
    userId: string;
    courseId: string;
    certificateNumber: string;
    fileUrl?: string | null;
    issuedAt?: Date | string;
};
export type CertificateUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutCertificatesNestedInput;
    course?: Prisma.CourseUpdateOneRequiredWithoutCertificatesNestedInput;
};
export type CertificateUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    courseId?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CertificateCreateManyInput = {
    id?: string;
    userId: string;
    courseId: string;
    certificateNumber: string;
    fileUrl?: string | null;
    issuedAt?: Date | string;
};
export type CertificateUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CertificateUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    courseId?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CertificateListRelationFilter = {
    every?: Prisma.CertificateWhereInput;
    some?: Prisma.CertificateWhereInput;
    none?: Prisma.CertificateWhereInput;
};
export type CertificateOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CertificateUserIdCourseIdCompoundUniqueInput = {
    userId: string;
    courseId: string;
};
export type CertificateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    certificateNumber?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
};
export type CertificateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    certificateNumber?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
};
export type CertificateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    certificateNumber?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
};
export type CertificateCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CertificateCreateWithoutUserInput, Prisma.CertificateUncheckedCreateWithoutUserInput> | Prisma.CertificateCreateWithoutUserInput[] | Prisma.CertificateUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CertificateCreateOrConnectWithoutUserInput | Prisma.CertificateCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CertificateCreateManyUserInputEnvelope;
    connect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
};
export type CertificateUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CertificateCreateWithoutUserInput, Prisma.CertificateUncheckedCreateWithoutUserInput> | Prisma.CertificateCreateWithoutUserInput[] | Prisma.CertificateUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CertificateCreateOrConnectWithoutUserInput | Prisma.CertificateCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CertificateCreateManyUserInputEnvelope;
    connect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
};
export type CertificateUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CertificateCreateWithoutUserInput, Prisma.CertificateUncheckedCreateWithoutUserInput> | Prisma.CertificateCreateWithoutUserInput[] | Prisma.CertificateUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CertificateCreateOrConnectWithoutUserInput | Prisma.CertificateCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CertificateUpsertWithWhereUniqueWithoutUserInput | Prisma.CertificateUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CertificateCreateManyUserInputEnvelope;
    set?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    disconnect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    delete?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    connect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    update?: Prisma.CertificateUpdateWithWhereUniqueWithoutUserInput | Prisma.CertificateUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CertificateUpdateManyWithWhereWithoutUserInput | Prisma.CertificateUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CertificateScalarWhereInput | Prisma.CertificateScalarWhereInput[];
};
export type CertificateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CertificateCreateWithoutUserInput, Prisma.CertificateUncheckedCreateWithoutUserInput> | Prisma.CertificateCreateWithoutUserInput[] | Prisma.CertificateUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CertificateCreateOrConnectWithoutUserInput | Prisma.CertificateCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CertificateUpsertWithWhereUniqueWithoutUserInput | Prisma.CertificateUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CertificateCreateManyUserInputEnvelope;
    set?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    disconnect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    delete?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    connect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    update?: Prisma.CertificateUpdateWithWhereUniqueWithoutUserInput | Prisma.CertificateUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CertificateUpdateManyWithWhereWithoutUserInput | Prisma.CertificateUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CertificateScalarWhereInput | Prisma.CertificateScalarWhereInput[];
};
export type CertificateCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.CertificateCreateWithoutCourseInput, Prisma.CertificateUncheckedCreateWithoutCourseInput> | Prisma.CertificateCreateWithoutCourseInput[] | Prisma.CertificateUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.CertificateCreateOrConnectWithoutCourseInput | Prisma.CertificateCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.CertificateCreateManyCourseInputEnvelope;
    connect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
};
export type CertificateUncheckedCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.CertificateCreateWithoutCourseInput, Prisma.CertificateUncheckedCreateWithoutCourseInput> | Prisma.CertificateCreateWithoutCourseInput[] | Prisma.CertificateUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.CertificateCreateOrConnectWithoutCourseInput | Prisma.CertificateCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.CertificateCreateManyCourseInputEnvelope;
    connect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
};
export type CertificateUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.CertificateCreateWithoutCourseInput, Prisma.CertificateUncheckedCreateWithoutCourseInput> | Prisma.CertificateCreateWithoutCourseInput[] | Prisma.CertificateUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.CertificateCreateOrConnectWithoutCourseInput | Prisma.CertificateCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.CertificateUpsertWithWhereUniqueWithoutCourseInput | Prisma.CertificateUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.CertificateCreateManyCourseInputEnvelope;
    set?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    disconnect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    delete?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    connect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    update?: Prisma.CertificateUpdateWithWhereUniqueWithoutCourseInput | Prisma.CertificateUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.CertificateUpdateManyWithWhereWithoutCourseInput | Prisma.CertificateUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.CertificateScalarWhereInput | Prisma.CertificateScalarWhereInput[];
};
export type CertificateUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.CertificateCreateWithoutCourseInput, Prisma.CertificateUncheckedCreateWithoutCourseInput> | Prisma.CertificateCreateWithoutCourseInput[] | Prisma.CertificateUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.CertificateCreateOrConnectWithoutCourseInput | Prisma.CertificateCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.CertificateUpsertWithWhereUniqueWithoutCourseInput | Prisma.CertificateUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.CertificateCreateManyCourseInputEnvelope;
    set?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    disconnect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    delete?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    connect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    update?: Prisma.CertificateUpdateWithWhereUniqueWithoutCourseInput | Prisma.CertificateUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.CertificateUpdateManyWithWhereWithoutCourseInput | Prisma.CertificateUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.CertificateScalarWhereInput | Prisma.CertificateScalarWhereInput[];
};
export type CertificateCreateWithoutUserInput = {
    id?: string;
    certificateNumber: string;
    fileUrl?: string | null;
    issuedAt?: Date | string;
    course: Prisma.CourseCreateNestedOneWithoutCertificatesInput;
};
export type CertificateUncheckedCreateWithoutUserInput = {
    id?: string;
    courseId: string;
    certificateNumber: string;
    fileUrl?: string | null;
    issuedAt?: Date | string;
};
export type CertificateCreateOrConnectWithoutUserInput = {
    where: Prisma.CertificateWhereUniqueInput;
    create: Prisma.XOR<Prisma.CertificateCreateWithoutUserInput, Prisma.CertificateUncheckedCreateWithoutUserInput>;
};
export type CertificateCreateManyUserInputEnvelope = {
    data: Prisma.CertificateCreateManyUserInput | Prisma.CertificateCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type CertificateUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.CertificateWhereUniqueInput;
    update: Prisma.XOR<Prisma.CertificateUpdateWithoutUserInput, Prisma.CertificateUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CertificateCreateWithoutUserInput, Prisma.CertificateUncheckedCreateWithoutUserInput>;
};
export type CertificateUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.CertificateWhereUniqueInput;
    data: Prisma.XOR<Prisma.CertificateUpdateWithoutUserInput, Prisma.CertificateUncheckedUpdateWithoutUserInput>;
};
export type CertificateUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.CertificateScalarWhereInput;
    data: Prisma.XOR<Prisma.CertificateUpdateManyMutationInput, Prisma.CertificateUncheckedUpdateManyWithoutUserInput>;
};
export type CertificateScalarWhereInput = {
    AND?: Prisma.CertificateScalarWhereInput | Prisma.CertificateScalarWhereInput[];
    OR?: Prisma.CertificateScalarWhereInput[];
    NOT?: Prisma.CertificateScalarWhereInput | Prisma.CertificateScalarWhereInput[];
    id?: Prisma.StringFilter<"Certificate"> | string;
    userId?: Prisma.StringFilter<"Certificate"> | string;
    courseId?: Prisma.StringFilter<"Certificate"> | string;
    certificateNumber?: Prisma.StringFilter<"Certificate"> | string;
    fileUrl?: Prisma.StringNullableFilter<"Certificate"> | string | null;
    issuedAt?: Prisma.DateTimeFilter<"Certificate"> | Date | string;
};
export type CertificateCreateWithoutCourseInput = {
    id?: string;
    certificateNumber: string;
    fileUrl?: string | null;
    issuedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutCertificatesInput;
};
export type CertificateUncheckedCreateWithoutCourseInput = {
    id?: string;
    userId: string;
    certificateNumber: string;
    fileUrl?: string | null;
    issuedAt?: Date | string;
};
export type CertificateCreateOrConnectWithoutCourseInput = {
    where: Prisma.CertificateWhereUniqueInput;
    create: Prisma.XOR<Prisma.CertificateCreateWithoutCourseInput, Prisma.CertificateUncheckedCreateWithoutCourseInput>;
};
export type CertificateCreateManyCourseInputEnvelope = {
    data: Prisma.CertificateCreateManyCourseInput | Prisma.CertificateCreateManyCourseInput[];
    skipDuplicates?: boolean;
};
export type CertificateUpsertWithWhereUniqueWithoutCourseInput = {
    where: Prisma.CertificateWhereUniqueInput;
    update: Prisma.XOR<Prisma.CertificateUpdateWithoutCourseInput, Prisma.CertificateUncheckedUpdateWithoutCourseInput>;
    create: Prisma.XOR<Prisma.CertificateCreateWithoutCourseInput, Prisma.CertificateUncheckedCreateWithoutCourseInput>;
};
export type CertificateUpdateWithWhereUniqueWithoutCourseInput = {
    where: Prisma.CertificateWhereUniqueInput;
    data: Prisma.XOR<Prisma.CertificateUpdateWithoutCourseInput, Prisma.CertificateUncheckedUpdateWithoutCourseInput>;
};
export type CertificateUpdateManyWithWhereWithoutCourseInput = {
    where: Prisma.CertificateScalarWhereInput;
    data: Prisma.XOR<Prisma.CertificateUpdateManyMutationInput, Prisma.CertificateUncheckedUpdateManyWithoutCourseInput>;
};
export type CertificateCreateManyUserInput = {
    id?: string;
    courseId: string;
    certificateNumber: string;
    fileUrl?: string | null;
    issuedAt?: Date | string;
};
export type CertificateUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutCertificatesNestedInput;
};
export type CertificateUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    courseId?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CertificateUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    courseId?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CertificateCreateManyCourseInput = {
    id?: string;
    userId: string;
    certificateNumber: string;
    fileUrl?: string | null;
    issuedAt?: Date | string;
};
export type CertificateUpdateWithoutCourseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutCertificatesNestedInput;
};
export type CertificateUncheckedUpdateWithoutCourseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CertificateUncheckedUpdateManyWithoutCourseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CertificateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    courseId?: boolean;
    certificateNumber?: boolean;
    fileUrl?: boolean;
    issuedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["certificate"]>;
export type CertificateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    courseId?: boolean;
    certificateNumber?: boolean;
    fileUrl?: boolean;
    issuedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["certificate"]>;
export type CertificateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    courseId?: boolean;
    certificateNumber?: boolean;
    fileUrl?: boolean;
    issuedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["certificate"]>;
export type CertificateSelectScalar = {
    id?: boolean;
    userId?: boolean;
    courseId?: boolean;
    certificateNumber?: boolean;
    fileUrl?: boolean;
    issuedAt?: boolean;
};
export type CertificateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "courseId" | "certificateNumber" | "fileUrl" | "issuedAt", ExtArgs["result"]["certificate"]>;
export type CertificateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
};
export type CertificateIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
};
export type CertificateIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
};
export type $CertificatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Certificate";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        course: Prisma.$CoursePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        courseId: string;
        certificateNumber: string;
        fileUrl: string | null;
        issuedAt: Date;
    }, ExtArgs["result"]["certificate"]>;
    composites: {};
};
export type CertificateGetPayload<S extends boolean | null | undefined | CertificateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CertificatePayload, S>;
export type CertificateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CertificateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CertificateCountAggregateInputType | true;
};
export interface CertificateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Certificate'];
        meta: {
            name: 'Certificate';
        };
    };
    findUnique<T extends CertificateFindUniqueArgs>(args: Prisma.SelectSubset<T, CertificateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CertificateClient<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CertificateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CertificateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CertificateClient<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CertificateFindFirstArgs>(args?: Prisma.SelectSubset<T, CertificateFindFirstArgs<ExtArgs>>): Prisma.Prisma__CertificateClient<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CertificateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CertificateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CertificateClient<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CertificateFindManyArgs>(args?: Prisma.SelectSubset<T, CertificateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CertificateCreateArgs>(args: Prisma.SelectSubset<T, CertificateCreateArgs<ExtArgs>>): Prisma.Prisma__CertificateClient<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CertificateCreateManyArgs>(args?: Prisma.SelectSubset<T, CertificateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CertificateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CertificateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CertificateDeleteArgs>(args: Prisma.SelectSubset<T, CertificateDeleteArgs<ExtArgs>>): Prisma.Prisma__CertificateClient<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CertificateUpdateArgs>(args: Prisma.SelectSubset<T, CertificateUpdateArgs<ExtArgs>>): Prisma.Prisma__CertificateClient<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CertificateDeleteManyArgs>(args?: Prisma.SelectSubset<T, CertificateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CertificateUpdateManyArgs>(args: Prisma.SelectSubset<T, CertificateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CertificateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CertificateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CertificateUpsertArgs>(args: Prisma.SelectSubset<T, CertificateUpsertArgs<ExtArgs>>): Prisma.Prisma__CertificateClient<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CertificateCountArgs>(args?: Prisma.Subset<T, CertificateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CertificateCountAggregateOutputType> : number>;
    aggregate<T extends CertificateAggregateArgs>(args: Prisma.Subset<T, CertificateAggregateArgs>): Prisma.PrismaPromise<GetCertificateAggregateType<T>>;
    groupBy<T extends CertificateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CertificateGroupByArgs['orderBy'];
    } : {
        orderBy?: CertificateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CertificateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CertificateFieldRefs;
}
export interface Prisma__CertificateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    course<T extends Prisma.CourseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CourseDefaultArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CertificateFieldRefs {
    readonly id: Prisma.FieldRef<"Certificate", 'String'>;
    readonly userId: Prisma.FieldRef<"Certificate", 'String'>;
    readonly courseId: Prisma.FieldRef<"Certificate", 'String'>;
    readonly certificateNumber: Prisma.FieldRef<"Certificate", 'String'>;
    readonly fileUrl: Prisma.FieldRef<"Certificate", 'String'>;
    readonly issuedAt: Prisma.FieldRef<"Certificate", 'DateTime'>;
}
export type CertificateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificateSelect<ExtArgs> | null;
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    include?: Prisma.CertificateInclude<ExtArgs> | null;
    where: Prisma.CertificateWhereUniqueInput;
};
export type CertificateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificateSelect<ExtArgs> | null;
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    include?: Prisma.CertificateInclude<ExtArgs> | null;
    where: Prisma.CertificateWhereUniqueInput;
};
export type CertificateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificateSelect<ExtArgs> | null;
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    include?: Prisma.CertificateInclude<ExtArgs> | null;
    where?: Prisma.CertificateWhereInput;
    orderBy?: Prisma.CertificateOrderByWithRelationInput | Prisma.CertificateOrderByWithRelationInput[];
    cursor?: Prisma.CertificateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CertificateScalarFieldEnum | Prisma.CertificateScalarFieldEnum[];
};
export type CertificateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificateSelect<ExtArgs> | null;
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    include?: Prisma.CertificateInclude<ExtArgs> | null;
    where?: Prisma.CertificateWhereInput;
    orderBy?: Prisma.CertificateOrderByWithRelationInput | Prisma.CertificateOrderByWithRelationInput[];
    cursor?: Prisma.CertificateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CertificateScalarFieldEnum | Prisma.CertificateScalarFieldEnum[];
};
export type CertificateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificateSelect<ExtArgs> | null;
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    include?: Prisma.CertificateInclude<ExtArgs> | null;
    where?: Prisma.CertificateWhereInput;
    orderBy?: Prisma.CertificateOrderByWithRelationInput | Prisma.CertificateOrderByWithRelationInput[];
    cursor?: Prisma.CertificateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CertificateScalarFieldEnum | Prisma.CertificateScalarFieldEnum[];
};
export type CertificateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificateSelect<ExtArgs> | null;
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    include?: Prisma.CertificateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CertificateCreateInput, Prisma.CertificateUncheckedCreateInput>;
};
export type CertificateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CertificateCreateManyInput | Prisma.CertificateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CertificateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificateSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    data: Prisma.CertificateCreateManyInput | Prisma.CertificateCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CertificateIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CertificateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificateSelect<ExtArgs> | null;
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    include?: Prisma.CertificateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CertificateUpdateInput, Prisma.CertificateUncheckedUpdateInput>;
    where: Prisma.CertificateWhereUniqueInput;
};
export type CertificateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CertificateUpdateManyMutationInput, Prisma.CertificateUncheckedUpdateManyInput>;
    where?: Prisma.CertificateWhereInput;
    limit?: number;
};
export type CertificateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificateSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CertificateUpdateManyMutationInput, Prisma.CertificateUncheckedUpdateManyInput>;
    where?: Prisma.CertificateWhereInput;
    limit?: number;
    include?: Prisma.CertificateIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CertificateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificateSelect<ExtArgs> | null;
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    include?: Prisma.CertificateInclude<ExtArgs> | null;
    where: Prisma.CertificateWhereUniqueInput;
    create: Prisma.XOR<Prisma.CertificateCreateInput, Prisma.CertificateUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CertificateUpdateInput, Prisma.CertificateUncheckedUpdateInput>;
};
export type CertificateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificateSelect<ExtArgs> | null;
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    include?: Prisma.CertificateInclude<ExtArgs> | null;
    where: Prisma.CertificateWhereUniqueInput;
};
export type CertificateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CertificateWhereInput;
    limit?: number;
};
export type CertificateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificateSelect<ExtArgs> | null;
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    include?: Prisma.CertificateInclude<ExtArgs> | null;
};
