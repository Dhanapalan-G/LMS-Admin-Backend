import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CourseModel = runtime.Types.Result.DefaultSelection<Prisma.$CoursePayload>;
export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null;
    _min: CourseMinAggregateOutputType | null;
    _max: CourseMaxAggregateOutputType | null;
};
export type CourseMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    createdById: string | null;
    title: string | null;
    code: string | null;
    description: string | null;
    thumbnail: string | null;
    status: $Enums.CourseStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CourseMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    createdById: string | null;
    title: string | null;
    code: string | null;
    description: string | null;
    thumbnail: string | null;
    status: $Enums.CourseStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CourseCountAggregateOutputType = {
    id: number;
    schoolId: number;
    createdById: number;
    title: number;
    code: number;
    description: number;
    thumbnail: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CourseMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    createdById?: true;
    title?: true;
    code?: true;
    description?: true;
    thumbnail?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CourseMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    createdById?: true;
    title?: true;
    code?: true;
    description?: true;
    thumbnail?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CourseCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    createdById?: true;
    title?: true;
    code?: true;
    description?: true;
    thumbnail?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CourseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithRelationInput | Prisma.CourseOrderByWithRelationInput[];
    cursor?: Prisma.CourseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CourseCountAggregateInputType;
    _min?: CourseMinAggregateInputType;
    _max?: CourseMaxAggregateInputType;
};
export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
    [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCourse[P]> : Prisma.GetScalarType<T[P], AggregateCourse[P]>;
};
export type CourseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithAggregationInput | Prisma.CourseOrderByWithAggregationInput[];
    by: Prisma.CourseScalarFieldEnum[] | Prisma.CourseScalarFieldEnum;
    having?: Prisma.CourseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CourseCountAggregateInputType | true;
    _min?: CourseMinAggregateInputType;
    _max?: CourseMaxAggregateInputType;
};
export type CourseGroupByOutputType = {
    id: string;
    schoolId: string;
    createdById: string;
    title: string;
    code: string | null;
    description: string | null;
    thumbnail: string | null;
    status: $Enums.CourseStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: CourseCountAggregateOutputType | null;
    _min: CourseMinAggregateOutputType | null;
    _max: CourseMaxAggregateOutputType | null;
};
export type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CourseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CourseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CourseGroupByOutputType[P]>;
}>>;
export type CourseWhereInput = {
    AND?: Prisma.CourseWhereInput | Prisma.CourseWhereInput[];
    OR?: Prisma.CourseWhereInput[];
    NOT?: Prisma.CourseWhereInput | Prisma.CourseWhereInput[];
    id?: Prisma.StringFilter<"Course"> | string;
    schoolId?: Prisma.StringFilter<"Course"> | string;
    createdById?: Prisma.StringFilter<"Course"> | string;
    title?: Prisma.StringFilter<"Course"> | string;
    code?: Prisma.StringNullableFilter<"Course"> | string | null;
    description?: Prisma.StringNullableFilter<"Course"> | string | null;
    thumbnail?: Prisma.StringNullableFilter<"Course"> | string | null;
    status?: Prisma.EnumCourseStatusFilter<"Course"> | $Enums.CourseStatus;
    createdAt?: Prisma.DateTimeFilter<"Course"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Course"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    modules?: Prisma.CourseModuleListRelationFilter;
    enrollments?: Prisma.EnrollmentListRelationFilter;
    quiz?: Prisma.XOR<Prisma.QuizNullableScalarRelationFilter, Prisma.QuizWhereInput> | null;
    certificates?: Prisma.CertificateListRelationFilter;
};
export type CourseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    code?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    thumbnail?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    createdBy?: Prisma.UserOrderByWithRelationInput;
    modules?: Prisma.CourseModuleOrderByRelationAggregateInput;
    enrollments?: Prisma.EnrollmentOrderByRelationAggregateInput;
    quiz?: Prisma.QuizOrderByWithRelationInput;
    certificates?: Prisma.CertificateOrderByRelationAggregateInput;
};
export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CourseWhereInput | Prisma.CourseWhereInput[];
    OR?: Prisma.CourseWhereInput[];
    NOT?: Prisma.CourseWhereInput | Prisma.CourseWhereInput[];
    schoolId?: Prisma.StringFilter<"Course"> | string;
    createdById?: Prisma.StringFilter<"Course"> | string;
    title?: Prisma.StringFilter<"Course"> | string;
    code?: Prisma.StringNullableFilter<"Course"> | string | null;
    description?: Prisma.StringNullableFilter<"Course"> | string | null;
    thumbnail?: Prisma.StringNullableFilter<"Course"> | string | null;
    status?: Prisma.EnumCourseStatusFilter<"Course"> | $Enums.CourseStatus;
    createdAt?: Prisma.DateTimeFilter<"Course"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Course"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    modules?: Prisma.CourseModuleListRelationFilter;
    enrollments?: Prisma.EnrollmentListRelationFilter;
    quiz?: Prisma.XOR<Prisma.QuizNullableScalarRelationFilter, Prisma.QuizWhereInput> | null;
    certificates?: Prisma.CertificateListRelationFilter;
}, "id">;
export type CourseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    code?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    thumbnail?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CourseCountOrderByAggregateInput;
    _max?: Prisma.CourseMaxOrderByAggregateInput;
    _min?: Prisma.CourseMinOrderByAggregateInput;
};
export type CourseScalarWhereWithAggregatesInput = {
    AND?: Prisma.CourseScalarWhereWithAggregatesInput | Prisma.CourseScalarWhereWithAggregatesInput[];
    OR?: Prisma.CourseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CourseScalarWhereWithAggregatesInput | Prisma.CourseScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Course"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"Course"> | string;
    createdById?: Prisma.StringWithAggregatesFilter<"Course"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Course"> | string;
    code?: Prisma.StringNullableWithAggregatesFilter<"Course"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"Course"> | string | null;
    thumbnail?: Prisma.StringNullableWithAggregatesFilter<"Course"> | string | null;
    status?: Prisma.EnumCourseStatusWithAggregatesFilter<"Course"> | $Enums.CourseStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Course"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Course"> | Date | string;
};
export type CourseCreateInput = {
    id?: string;
    title: string;
    code?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    status?: $Enums.CourseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutCoursesInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedCoursesInput;
    modules?: Prisma.CourseModuleCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutCourseInput;
    quiz?: Prisma.QuizCreateNestedOneWithoutCourseInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutCourseInput;
};
export type CourseUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    createdById: string;
    title: string;
    code?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    status?: $Enums.CourseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    modules?: Prisma.CourseModuleUncheckedCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutCourseInput;
    quiz?: Prisma.QuizUncheckedCreateNestedOneWithoutCourseInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutCourseInput;
};
export type CourseUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutCoursesNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedCoursesNestedInput;
    modules?: Prisma.CourseModuleUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutCourseNestedInput;
    quiz?: Prisma.QuizUpdateOneWithoutCourseNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutCourseNestedInput;
};
export type CourseUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modules?: Prisma.CourseModuleUncheckedUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutCourseNestedInput;
    quiz?: Prisma.QuizUncheckedUpdateOneWithoutCourseNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutCourseNestedInput;
};
export type CourseCreateManyInput = {
    id?: string;
    schoolId: string;
    createdById: string;
    title: string;
    code?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    status?: $Enums.CourseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CourseUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseListRelationFilter = {
    every?: Prisma.CourseWhereInput;
    some?: Prisma.CourseWhereInput;
    none?: Prisma.CourseWhereInput;
};
export type CourseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CourseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    thumbnail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CourseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    thumbnail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CourseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    thumbnail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CourseScalarRelationFilter = {
    is?: Prisma.CourseWhereInput;
    isNot?: Prisma.CourseWhereInput;
};
export type CourseCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutSchoolInput, Prisma.CourseUncheckedCreateWithoutSchoolInput> | Prisma.CourseCreateWithoutSchoolInput[] | Prisma.CourseUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutSchoolInput | Prisma.CourseCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.CourseCreateManySchoolInputEnvelope;
    connect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
};
export type CourseUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutSchoolInput, Prisma.CourseUncheckedCreateWithoutSchoolInput> | Prisma.CourseCreateWithoutSchoolInput[] | Prisma.CourseUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutSchoolInput | Prisma.CourseCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.CourseCreateManySchoolInputEnvelope;
    connect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
};
export type CourseUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutSchoolInput, Prisma.CourseUncheckedCreateWithoutSchoolInput> | Prisma.CourseCreateWithoutSchoolInput[] | Prisma.CourseUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutSchoolInput | Prisma.CourseCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.CourseUpsertWithWhereUniqueWithoutSchoolInput | Prisma.CourseUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.CourseCreateManySchoolInputEnvelope;
    set?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    disconnect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    delete?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    connect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    update?: Prisma.CourseUpdateWithWhereUniqueWithoutSchoolInput | Prisma.CourseUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.CourseUpdateManyWithWhereWithoutSchoolInput | Prisma.CourseUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.CourseScalarWhereInput | Prisma.CourseScalarWhereInput[];
};
export type CourseUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutSchoolInput, Prisma.CourseUncheckedCreateWithoutSchoolInput> | Prisma.CourseCreateWithoutSchoolInput[] | Prisma.CourseUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutSchoolInput | Prisma.CourseCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.CourseUpsertWithWhereUniqueWithoutSchoolInput | Prisma.CourseUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.CourseCreateManySchoolInputEnvelope;
    set?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    disconnect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    delete?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    connect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    update?: Prisma.CourseUpdateWithWhereUniqueWithoutSchoolInput | Prisma.CourseUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.CourseUpdateManyWithWhereWithoutSchoolInput | Prisma.CourseUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.CourseScalarWhereInput | Prisma.CourseScalarWhereInput[];
};
export type CourseCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutCreatedByInput, Prisma.CourseUncheckedCreateWithoutCreatedByInput> | Prisma.CourseCreateWithoutCreatedByInput[] | Prisma.CourseUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutCreatedByInput | Prisma.CourseCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.CourseCreateManyCreatedByInputEnvelope;
    connect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
};
export type CourseUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutCreatedByInput, Prisma.CourseUncheckedCreateWithoutCreatedByInput> | Prisma.CourseCreateWithoutCreatedByInput[] | Prisma.CourseUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutCreatedByInput | Prisma.CourseCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.CourseCreateManyCreatedByInputEnvelope;
    connect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
};
export type CourseUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutCreatedByInput, Prisma.CourseUncheckedCreateWithoutCreatedByInput> | Prisma.CourseCreateWithoutCreatedByInput[] | Prisma.CourseUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutCreatedByInput | Prisma.CourseCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.CourseUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.CourseUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.CourseCreateManyCreatedByInputEnvelope;
    set?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    disconnect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    delete?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    connect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    update?: Prisma.CourseUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.CourseUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.CourseUpdateManyWithWhereWithoutCreatedByInput | Prisma.CourseUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.CourseScalarWhereInput | Prisma.CourseScalarWhereInput[];
};
export type CourseUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutCreatedByInput, Prisma.CourseUncheckedCreateWithoutCreatedByInput> | Prisma.CourseCreateWithoutCreatedByInput[] | Prisma.CourseUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutCreatedByInput | Prisma.CourseCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.CourseUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.CourseUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.CourseCreateManyCreatedByInputEnvelope;
    set?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    disconnect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    delete?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    connect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    update?: Prisma.CourseUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.CourseUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.CourseUpdateManyWithWhereWithoutCreatedByInput | Prisma.CourseUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.CourseScalarWhereInput | Prisma.CourseScalarWhereInput[];
};
export type EnumCourseStatusFieldUpdateOperationsInput = {
    set?: $Enums.CourseStatus;
};
export type CourseCreateNestedOneWithoutModulesInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutModulesInput, Prisma.CourseUncheckedCreateWithoutModulesInput>;
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutModulesInput;
    connect?: Prisma.CourseWhereUniqueInput;
};
export type CourseUpdateOneRequiredWithoutModulesNestedInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutModulesInput, Prisma.CourseUncheckedCreateWithoutModulesInput>;
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutModulesInput;
    upsert?: Prisma.CourseUpsertWithoutModulesInput;
    connect?: Prisma.CourseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CourseUpdateToOneWithWhereWithoutModulesInput, Prisma.CourseUpdateWithoutModulesInput>, Prisma.CourseUncheckedUpdateWithoutModulesInput>;
};
export type CourseCreateNestedOneWithoutEnrollmentsInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutEnrollmentsInput, Prisma.CourseUncheckedCreateWithoutEnrollmentsInput>;
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutEnrollmentsInput;
    connect?: Prisma.CourseWhereUniqueInput;
};
export type CourseUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutEnrollmentsInput, Prisma.CourseUncheckedCreateWithoutEnrollmentsInput>;
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutEnrollmentsInput;
    upsert?: Prisma.CourseUpsertWithoutEnrollmentsInput;
    connect?: Prisma.CourseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CourseUpdateToOneWithWhereWithoutEnrollmentsInput, Prisma.CourseUpdateWithoutEnrollmentsInput>, Prisma.CourseUncheckedUpdateWithoutEnrollmentsInput>;
};
export type CourseCreateNestedOneWithoutQuizInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutQuizInput, Prisma.CourseUncheckedCreateWithoutQuizInput>;
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutQuizInput;
    connect?: Prisma.CourseWhereUniqueInput;
};
export type CourseUpdateOneRequiredWithoutQuizNestedInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutQuizInput, Prisma.CourseUncheckedCreateWithoutQuizInput>;
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutQuizInput;
    upsert?: Prisma.CourseUpsertWithoutQuizInput;
    connect?: Prisma.CourseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CourseUpdateToOneWithWhereWithoutQuizInput, Prisma.CourseUpdateWithoutQuizInput>, Prisma.CourseUncheckedUpdateWithoutQuizInput>;
};
export type CourseCreateNestedOneWithoutCertificatesInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutCertificatesInput, Prisma.CourseUncheckedCreateWithoutCertificatesInput>;
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutCertificatesInput;
    connect?: Prisma.CourseWhereUniqueInput;
};
export type CourseUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutCertificatesInput, Prisma.CourseUncheckedCreateWithoutCertificatesInput>;
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutCertificatesInput;
    upsert?: Prisma.CourseUpsertWithoutCertificatesInput;
    connect?: Prisma.CourseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CourseUpdateToOneWithWhereWithoutCertificatesInput, Prisma.CourseUpdateWithoutCertificatesInput>, Prisma.CourseUncheckedUpdateWithoutCertificatesInput>;
};
export type CourseCreateWithoutSchoolInput = {
    id?: string;
    title: string;
    code?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    status?: $Enums.CourseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedCoursesInput;
    modules?: Prisma.CourseModuleCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutCourseInput;
    quiz?: Prisma.QuizCreateNestedOneWithoutCourseInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutCourseInput;
};
export type CourseUncheckedCreateWithoutSchoolInput = {
    id?: string;
    createdById: string;
    title: string;
    code?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    status?: $Enums.CourseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    modules?: Prisma.CourseModuleUncheckedCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutCourseInput;
    quiz?: Prisma.QuizUncheckedCreateNestedOneWithoutCourseInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutCourseInput;
};
export type CourseCreateOrConnectWithoutSchoolInput = {
    where: Prisma.CourseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseCreateWithoutSchoolInput, Prisma.CourseUncheckedCreateWithoutSchoolInput>;
};
export type CourseCreateManySchoolInputEnvelope = {
    data: Prisma.CourseCreateManySchoolInput | Prisma.CourseCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type CourseUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.CourseWhereUniqueInput;
    update: Prisma.XOR<Prisma.CourseUpdateWithoutSchoolInput, Prisma.CourseUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.CourseCreateWithoutSchoolInput, Prisma.CourseUncheckedCreateWithoutSchoolInput>;
};
export type CourseUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.CourseWhereUniqueInput;
    data: Prisma.XOR<Prisma.CourseUpdateWithoutSchoolInput, Prisma.CourseUncheckedUpdateWithoutSchoolInput>;
};
export type CourseUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.CourseScalarWhereInput;
    data: Prisma.XOR<Prisma.CourseUpdateManyMutationInput, Prisma.CourseUncheckedUpdateManyWithoutSchoolInput>;
};
export type CourseScalarWhereInput = {
    AND?: Prisma.CourseScalarWhereInput | Prisma.CourseScalarWhereInput[];
    OR?: Prisma.CourseScalarWhereInput[];
    NOT?: Prisma.CourseScalarWhereInput | Prisma.CourseScalarWhereInput[];
    id?: Prisma.StringFilter<"Course"> | string;
    schoolId?: Prisma.StringFilter<"Course"> | string;
    createdById?: Prisma.StringFilter<"Course"> | string;
    title?: Prisma.StringFilter<"Course"> | string;
    code?: Prisma.StringNullableFilter<"Course"> | string | null;
    description?: Prisma.StringNullableFilter<"Course"> | string | null;
    thumbnail?: Prisma.StringNullableFilter<"Course"> | string | null;
    status?: Prisma.EnumCourseStatusFilter<"Course"> | $Enums.CourseStatus;
    createdAt?: Prisma.DateTimeFilter<"Course"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Course"> | Date | string;
};
export type CourseCreateWithoutCreatedByInput = {
    id?: string;
    title: string;
    code?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    status?: $Enums.CourseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutCoursesInput;
    modules?: Prisma.CourseModuleCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutCourseInput;
    quiz?: Prisma.QuizCreateNestedOneWithoutCourseInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutCourseInput;
};
export type CourseUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    schoolId: string;
    title: string;
    code?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    status?: $Enums.CourseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    modules?: Prisma.CourseModuleUncheckedCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutCourseInput;
    quiz?: Prisma.QuizUncheckedCreateNestedOneWithoutCourseInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutCourseInput;
};
export type CourseCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.CourseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseCreateWithoutCreatedByInput, Prisma.CourseUncheckedCreateWithoutCreatedByInput>;
};
export type CourseCreateManyCreatedByInputEnvelope = {
    data: Prisma.CourseCreateManyCreatedByInput | Prisma.CourseCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type CourseUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.CourseWhereUniqueInput;
    update: Prisma.XOR<Prisma.CourseUpdateWithoutCreatedByInput, Prisma.CourseUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.CourseCreateWithoutCreatedByInput, Prisma.CourseUncheckedCreateWithoutCreatedByInput>;
};
export type CourseUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.CourseWhereUniqueInput;
    data: Prisma.XOR<Prisma.CourseUpdateWithoutCreatedByInput, Prisma.CourseUncheckedUpdateWithoutCreatedByInput>;
};
export type CourseUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.CourseScalarWhereInput;
    data: Prisma.XOR<Prisma.CourseUpdateManyMutationInput, Prisma.CourseUncheckedUpdateManyWithoutCreatedByInput>;
};
export type CourseCreateWithoutModulesInput = {
    id?: string;
    title: string;
    code?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    status?: $Enums.CourseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutCoursesInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedCoursesInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutCourseInput;
    quiz?: Prisma.QuizCreateNestedOneWithoutCourseInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutCourseInput;
};
export type CourseUncheckedCreateWithoutModulesInput = {
    id?: string;
    schoolId: string;
    createdById: string;
    title: string;
    code?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    status?: $Enums.CourseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutCourseInput;
    quiz?: Prisma.QuizUncheckedCreateNestedOneWithoutCourseInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutCourseInput;
};
export type CourseCreateOrConnectWithoutModulesInput = {
    where: Prisma.CourseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseCreateWithoutModulesInput, Prisma.CourseUncheckedCreateWithoutModulesInput>;
};
export type CourseUpsertWithoutModulesInput = {
    update: Prisma.XOR<Prisma.CourseUpdateWithoutModulesInput, Prisma.CourseUncheckedUpdateWithoutModulesInput>;
    create: Prisma.XOR<Prisma.CourseCreateWithoutModulesInput, Prisma.CourseUncheckedCreateWithoutModulesInput>;
    where?: Prisma.CourseWhereInput;
};
export type CourseUpdateToOneWithWhereWithoutModulesInput = {
    where?: Prisma.CourseWhereInput;
    data: Prisma.XOR<Prisma.CourseUpdateWithoutModulesInput, Prisma.CourseUncheckedUpdateWithoutModulesInput>;
};
export type CourseUpdateWithoutModulesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutCoursesNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedCoursesNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutCourseNestedInput;
    quiz?: Prisma.QuizUpdateOneWithoutCourseNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutCourseNestedInput;
};
export type CourseUncheckedUpdateWithoutModulesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutCourseNestedInput;
    quiz?: Prisma.QuizUncheckedUpdateOneWithoutCourseNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutCourseNestedInput;
};
export type CourseCreateWithoutEnrollmentsInput = {
    id?: string;
    title: string;
    code?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    status?: $Enums.CourseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutCoursesInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedCoursesInput;
    modules?: Prisma.CourseModuleCreateNestedManyWithoutCourseInput;
    quiz?: Prisma.QuizCreateNestedOneWithoutCourseInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutCourseInput;
};
export type CourseUncheckedCreateWithoutEnrollmentsInput = {
    id?: string;
    schoolId: string;
    createdById: string;
    title: string;
    code?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    status?: $Enums.CourseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    modules?: Prisma.CourseModuleUncheckedCreateNestedManyWithoutCourseInput;
    quiz?: Prisma.QuizUncheckedCreateNestedOneWithoutCourseInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutCourseInput;
};
export type CourseCreateOrConnectWithoutEnrollmentsInput = {
    where: Prisma.CourseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseCreateWithoutEnrollmentsInput, Prisma.CourseUncheckedCreateWithoutEnrollmentsInput>;
};
export type CourseUpsertWithoutEnrollmentsInput = {
    update: Prisma.XOR<Prisma.CourseUpdateWithoutEnrollmentsInput, Prisma.CourseUncheckedUpdateWithoutEnrollmentsInput>;
    create: Prisma.XOR<Prisma.CourseCreateWithoutEnrollmentsInput, Prisma.CourseUncheckedCreateWithoutEnrollmentsInput>;
    where?: Prisma.CourseWhereInput;
};
export type CourseUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: Prisma.CourseWhereInput;
    data: Prisma.XOR<Prisma.CourseUpdateWithoutEnrollmentsInput, Prisma.CourseUncheckedUpdateWithoutEnrollmentsInput>;
};
export type CourseUpdateWithoutEnrollmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutCoursesNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedCoursesNestedInput;
    modules?: Prisma.CourseModuleUpdateManyWithoutCourseNestedInput;
    quiz?: Prisma.QuizUpdateOneWithoutCourseNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutCourseNestedInput;
};
export type CourseUncheckedUpdateWithoutEnrollmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modules?: Prisma.CourseModuleUncheckedUpdateManyWithoutCourseNestedInput;
    quiz?: Prisma.QuizUncheckedUpdateOneWithoutCourseNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutCourseNestedInput;
};
export type CourseCreateWithoutQuizInput = {
    id?: string;
    title: string;
    code?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    status?: $Enums.CourseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutCoursesInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedCoursesInput;
    modules?: Prisma.CourseModuleCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutCourseInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutCourseInput;
};
export type CourseUncheckedCreateWithoutQuizInput = {
    id?: string;
    schoolId: string;
    createdById: string;
    title: string;
    code?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    status?: $Enums.CourseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    modules?: Prisma.CourseModuleUncheckedCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutCourseInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutCourseInput;
};
export type CourseCreateOrConnectWithoutQuizInput = {
    where: Prisma.CourseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseCreateWithoutQuizInput, Prisma.CourseUncheckedCreateWithoutQuizInput>;
};
export type CourseUpsertWithoutQuizInput = {
    update: Prisma.XOR<Prisma.CourseUpdateWithoutQuizInput, Prisma.CourseUncheckedUpdateWithoutQuizInput>;
    create: Prisma.XOR<Prisma.CourseCreateWithoutQuizInput, Prisma.CourseUncheckedCreateWithoutQuizInput>;
    where?: Prisma.CourseWhereInput;
};
export type CourseUpdateToOneWithWhereWithoutQuizInput = {
    where?: Prisma.CourseWhereInput;
    data: Prisma.XOR<Prisma.CourseUpdateWithoutQuizInput, Prisma.CourseUncheckedUpdateWithoutQuizInput>;
};
export type CourseUpdateWithoutQuizInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutCoursesNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedCoursesNestedInput;
    modules?: Prisma.CourseModuleUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutCourseNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutCourseNestedInput;
};
export type CourseUncheckedUpdateWithoutQuizInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modules?: Prisma.CourseModuleUncheckedUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutCourseNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutCourseNestedInput;
};
export type CourseCreateWithoutCertificatesInput = {
    id?: string;
    title: string;
    code?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    status?: $Enums.CourseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutCoursesInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedCoursesInput;
    modules?: Prisma.CourseModuleCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutCourseInput;
    quiz?: Prisma.QuizCreateNestedOneWithoutCourseInput;
};
export type CourseUncheckedCreateWithoutCertificatesInput = {
    id?: string;
    schoolId: string;
    createdById: string;
    title: string;
    code?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    status?: $Enums.CourseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    modules?: Prisma.CourseModuleUncheckedCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutCourseInput;
    quiz?: Prisma.QuizUncheckedCreateNestedOneWithoutCourseInput;
};
export type CourseCreateOrConnectWithoutCertificatesInput = {
    where: Prisma.CourseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseCreateWithoutCertificatesInput, Prisma.CourseUncheckedCreateWithoutCertificatesInput>;
};
export type CourseUpsertWithoutCertificatesInput = {
    update: Prisma.XOR<Prisma.CourseUpdateWithoutCertificatesInput, Prisma.CourseUncheckedUpdateWithoutCertificatesInput>;
    create: Prisma.XOR<Prisma.CourseCreateWithoutCertificatesInput, Prisma.CourseUncheckedCreateWithoutCertificatesInput>;
    where?: Prisma.CourseWhereInput;
};
export type CourseUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: Prisma.CourseWhereInput;
    data: Prisma.XOR<Prisma.CourseUpdateWithoutCertificatesInput, Prisma.CourseUncheckedUpdateWithoutCertificatesInput>;
};
export type CourseUpdateWithoutCertificatesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutCoursesNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedCoursesNestedInput;
    modules?: Prisma.CourseModuleUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutCourseNestedInput;
    quiz?: Prisma.QuizUpdateOneWithoutCourseNestedInput;
};
export type CourseUncheckedUpdateWithoutCertificatesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modules?: Prisma.CourseModuleUncheckedUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutCourseNestedInput;
    quiz?: Prisma.QuizUncheckedUpdateOneWithoutCourseNestedInput;
};
export type CourseCreateManySchoolInput = {
    id?: string;
    createdById: string;
    title: string;
    code?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    status?: $Enums.CourseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CourseUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedCoursesNestedInput;
    modules?: Prisma.CourseModuleUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutCourseNestedInput;
    quiz?: Prisma.QuizUpdateOneWithoutCourseNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutCourseNestedInput;
};
export type CourseUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modules?: Prisma.CourseModuleUncheckedUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutCourseNestedInput;
    quiz?: Prisma.QuizUncheckedUpdateOneWithoutCourseNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutCourseNestedInput;
};
export type CourseUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseCreateManyCreatedByInput = {
    id?: string;
    schoolId: string;
    title: string;
    code?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    status?: $Enums.CourseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CourseUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutCoursesNestedInput;
    modules?: Prisma.CourseModuleUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutCourseNestedInput;
    quiz?: Prisma.QuizUpdateOneWithoutCourseNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutCourseNestedInput;
};
export type CourseUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modules?: Prisma.CourseModuleUncheckedUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutCourseNestedInput;
    quiz?: Prisma.QuizUncheckedUpdateOneWithoutCourseNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutCourseNestedInput;
};
export type CourseUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseCountOutputType = {
    modules: number;
    enrollments: number;
    certificates: number;
};
export type CourseCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    modules?: boolean | CourseCountOutputTypeCountModulesArgs;
    enrollments?: boolean | CourseCountOutputTypeCountEnrollmentsArgs;
    certificates?: boolean | CourseCountOutputTypeCountCertificatesArgs;
};
export type CourseCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseCountOutputTypeSelect<ExtArgs> | null;
};
export type CourseCountOutputTypeCountModulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseModuleWhereInput;
};
export type CourseCountOutputTypeCountEnrollmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnrollmentWhereInput;
};
export type CourseCountOutputTypeCountCertificatesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CertificateWhereInput;
};
export type CourseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    createdById?: boolean;
    title?: boolean;
    code?: boolean;
    description?: boolean;
    thumbnail?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    modules?: boolean | Prisma.Course$modulesArgs<ExtArgs>;
    enrollments?: boolean | Prisma.Course$enrollmentsArgs<ExtArgs>;
    quiz?: boolean | Prisma.Course$quizArgs<ExtArgs>;
    certificates?: boolean | Prisma.Course$certificatesArgs<ExtArgs>;
    _count?: boolean | Prisma.CourseCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["course"]>;
export type CourseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    createdById?: boolean;
    title?: boolean;
    code?: boolean;
    description?: boolean;
    thumbnail?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["course"]>;
export type CourseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    createdById?: boolean;
    title?: boolean;
    code?: boolean;
    description?: boolean;
    thumbnail?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["course"]>;
export type CourseSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    createdById?: boolean;
    title?: boolean;
    code?: boolean;
    description?: boolean;
    thumbnail?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CourseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "createdById" | "title" | "code" | "description" | "thumbnail" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>;
export type CourseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    modules?: boolean | Prisma.Course$modulesArgs<ExtArgs>;
    enrollments?: boolean | Prisma.Course$enrollmentsArgs<ExtArgs>;
    quiz?: boolean | Prisma.Course$quizArgs<ExtArgs>;
    certificates?: boolean | Prisma.Course$certificatesArgs<ExtArgs>;
    _count?: boolean | Prisma.CourseCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CourseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CourseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $CoursePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Course";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        createdBy: Prisma.$UserPayload<ExtArgs>;
        modules: Prisma.$CourseModulePayload<ExtArgs>[];
        enrollments: Prisma.$EnrollmentPayload<ExtArgs>[];
        quiz: Prisma.$QuizPayload<ExtArgs> | null;
        certificates: Prisma.$CertificatePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        createdById: string;
        title: string;
        code: string | null;
        description: string | null;
        thumbnail: string | null;
        status: $Enums.CourseStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["course"]>;
    composites: {};
};
export type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CoursePayload, S>;
export type CourseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CourseCountAggregateInputType | true;
};
export interface CourseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Course'];
        meta: {
            name: 'Course';
        };
    };
    findUnique<T extends CourseFindUniqueArgs>(args: Prisma.SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CourseFindFirstArgs>(args?: Prisma.SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CourseFindManyArgs>(args?: Prisma.SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CourseCreateArgs>(args: Prisma.SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CourseCreateManyArgs>(args?: Prisma.SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CourseDeleteArgs>(args: Prisma.SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CourseUpdateArgs>(args: Prisma.SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CourseDeleteManyArgs>(args?: Prisma.SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CourseUpdateManyArgs>(args: Prisma.SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CourseUpsertArgs>(args: Prisma.SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CourseCountArgs>(args?: Prisma.Subset<T, CourseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CourseCountAggregateOutputType> : number>;
    aggregate<T extends CourseAggregateArgs>(args: Prisma.Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>;
    groupBy<T extends CourseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CourseGroupByArgs['orderBy'];
    } : {
        orderBy?: CourseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CourseFieldRefs;
}
export interface Prisma__CourseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    modules<T extends Prisma.Course$modulesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Course$modulesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    enrollments<T extends Prisma.Course$enrollmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Course$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    quiz<T extends Prisma.Course$quizArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Course$quizArgs<ExtArgs>>): Prisma.Prisma__QuizClient<runtime.Types.Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    certificates<T extends Prisma.Course$certificatesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Course$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CourseFieldRefs {
    readonly id: Prisma.FieldRef<"Course", 'String'>;
    readonly schoolId: Prisma.FieldRef<"Course", 'String'>;
    readonly createdById: Prisma.FieldRef<"Course", 'String'>;
    readonly title: Prisma.FieldRef<"Course", 'String'>;
    readonly code: Prisma.FieldRef<"Course", 'String'>;
    readonly description: Prisma.FieldRef<"Course", 'String'>;
    readonly thumbnail: Prisma.FieldRef<"Course", 'String'>;
    readonly status: Prisma.FieldRef<"Course", 'CourseStatus'>;
    readonly createdAt: Prisma.FieldRef<"Course", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Course", 'DateTime'>;
}
export type CourseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    include?: Prisma.CourseInclude<ExtArgs> | null;
    where: Prisma.CourseWhereUniqueInput;
};
export type CourseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    include?: Prisma.CourseInclude<ExtArgs> | null;
    where: Prisma.CourseWhereUniqueInput;
};
export type CourseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    include?: Prisma.CourseInclude<ExtArgs> | null;
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithRelationInput | Prisma.CourseOrderByWithRelationInput[];
    cursor?: Prisma.CourseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourseScalarFieldEnum | Prisma.CourseScalarFieldEnum[];
};
export type CourseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    include?: Prisma.CourseInclude<ExtArgs> | null;
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithRelationInput | Prisma.CourseOrderByWithRelationInput[];
    cursor?: Prisma.CourseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourseScalarFieldEnum | Prisma.CourseScalarFieldEnum[];
};
export type CourseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    include?: Prisma.CourseInclude<ExtArgs> | null;
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithRelationInput | Prisma.CourseOrderByWithRelationInput[];
    cursor?: Prisma.CourseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourseScalarFieldEnum | Prisma.CourseScalarFieldEnum[];
};
export type CourseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    include?: Prisma.CourseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourseCreateInput, Prisma.CourseUncheckedCreateInput>;
};
export type CourseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CourseCreateManyInput | Prisma.CourseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CourseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    data: Prisma.CourseCreateManyInput | Prisma.CourseCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CourseIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CourseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    include?: Prisma.CourseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourseUpdateInput, Prisma.CourseUncheckedUpdateInput>;
    where: Prisma.CourseWhereUniqueInput;
};
export type CourseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CourseUpdateManyMutationInput, Prisma.CourseUncheckedUpdateManyInput>;
    where?: Prisma.CourseWhereInput;
    limit?: number;
};
export type CourseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourseUpdateManyMutationInput, Prisma.CourseUncheckedUpdateManyInput>;
    where?: Prisma.CourseWhereInput;
    limit?: number;
    include?: Prisma.CourseIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CourseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    include?: Prisma.CourseInclude<ExtArgs> | null;
    where: Prisma.CourseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseCreateInput, Prisma.CourseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CourseUpdateInput, Prisma.CourseUncheckedUpdateInput>;
};
export type CourseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    include?: Prisma.CourseInclude<ExtArgs> | null;
    where: Prisma.CourseWhereUniqueInput;
};
export type CourseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseWhereInput;
    limit?: number;
};
export type Course$modulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseModuleSelect<ExtArgs> | null;
    omit?: Prisma.CourseModuleOmit<ExtArgs> | null;
    include?: Prisma.CourseModuleInclude<ExtArgs> | null;
    where?: Prisma.CourseModuleWhereInput;
    orderBy?: Prisma.CourseModuleOrderByWithRelationInput | Prisma.CourseModuleOrderByWithRelationInput[];
    cursor?: Prisma.CourseModuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourseModuleScalarFieldEnum | Prisma.CourseModuleScalarFieldEnum[];
};
export type Course$enrollmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnrollmentSelect<ExtArgs> | null;
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    include?: Prisma.EnrollmentInclude<ExtArgs> | null;
    where?: Prisma.EnrollmentWhereInput;
    orderBy?: Prisma.EnrollmentOrderByWithRelationInput | Prisma.EnrollmentOrderByWithRelationInput[];
    cursor?: Prisma.EnrollmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnrollmentScalarFieldEnum | Prisma.EnrollmentScalarFieldEnum[];
};
export type Course$quizArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizSelect<ExtArgs> | null;
    omit?: Prisma.QuizOmit<ExtArgs> | null;
    include?: Prisma.QuizInclude<ExtArgs> | null;
    where?: Prisma.QuizWhereInput;
};
export type Course$certificatesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CourseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    include?: Prisma.CourseInclude<ExtArgs> | null;
};
