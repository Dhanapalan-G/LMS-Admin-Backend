import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CourseModuleModel = runtime.Types.Result.DefaultSelection<Prisma.$CourseModulePayload>;
export type AggregateCourseModule = {
    _count: CourseModuleCountAggregateOutputType | null;
    _avg: CourseModuleAvgAggregateOutputType | null;
    _sum: CourseModuleSumAggregateOutputType | null;
    _min: CourseModuleMinAggregateOutputType | null;
    _max: CourseModuleMaxAggregateOutputType | null;
};
export type CourseModuleAvgAggregateOutputType = {
    position: number | null;
};
export type CourseModuleSumAggregateOutputType = {
    position: number | null;
};
export type CourseModuleMinAggregateOutputType = {
    id: string | null;
    courseId: string | null;
    title: string | null;
    description: string | null;
    position: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CourseModuleMaxAggregateOutputType = {
    id: string | null;
    courseId: string | null;
    title: string | null;
    description: string | null;
    position: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CourseModuleCountAggregateOutputType = {
    id: number;
    courseId: number;
    title: number;
    description: number;
    position: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CourseModuleAvgAggregateInputType = {
    position?: true;
};
export type CourseModuleSumAggregateInputType = {
    position?: true;
};
export type CourseModuleMinAggregateInputType = {
    id?: true;
    courseId?: true;
    title?: true;
    description?: true;
    position?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CourseModuleMaxAggregateInputType = {
    id?: true;
    courseId?: true;
    title?: true;
    description?: true;
    position?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CourseModuleCountAggregateInputType = {
    id?: true;
    courseId?: true;
    title?: true;
    description?: true;
    position?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CourseModuleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseModuleWhereInput;
    orderBy?: Prisma.CourseModuleOrderByWithRelationInput | Prisma.CourseModuleOrderByWithRelationInput[];
    cursor?: Prisma.CourseModuleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CourseModuleCountAggregateInputType;
    _avg?: CourseModuleAvgAggregateInputType;
    _sum?: CourseModuleSumAggregateInputType;
    _min?: CourseModuleMinAggregateInputType;
    _max?: CourseModuleMaxAggregateInputType;
};
export type GetCourseModuleAggregateType<T extends CourseModuleAggregateArgs> = {
    [P in keyof T & keyof AggregateCourseModule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCourseModule[P]> : Prisma.GetScalarType<T[P], AggregateCourseModule[P]>;
};
export type CourseModuleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseModuleWhereInput;
    orderBy?: Prisma.CourseModuleOrderByWithAggregationInput | Prisma.CourseModuleOrderByWithAggregationInput[];
    by: Prisma.CourseModuleScalarFieldEnum[] | Prisma.CourseModuleScalarFieldEnum;
    having?: Prisma.CourseModuleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CourseModuleCountAggregateInputType | true;
    _avg?: CourseModuleAvgAggregateInputType;
    _sum?: CourseModuleSumAggregateInputType;
    _min?: CourseModuleMinAggregateInputType;
    _max?: CourseModuleMaxAggregateInputType;
};
export type CourseModuleGroupByOutputType = {
    id: string;
    courseId: string;
    title: string;
    description: string | null;
    position: number;
    createdAt: Date;
    updatedAt: Date;
    _count: CourseModuleCountAggregateOutputType | null;
    _avg: CourseModuleAvgAggregateOutputType | null;
    _sum: CourseModuleSumAggregateOutputType | null;
    _min: CourseModuleMinAggregateOutputType | null;
    _max: CourseModuleMaxAggregateOutputType | null;
};
export type GetCourseModuleGroupByPayload<T extends CourseModuleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CourseModuleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CourseModuleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CourseModuleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CourseModuleGroupByOutputType[P]>;
}>>;
export type CourseModuleWhereInput = {
    AND?: Prisma.CourseModuleWhereInput | Prisma.CourseModuleWhereInput[];
    OR?: Prisma.CourseModuleWhereInput[];
    NOT?: Prisma.CourseModuleWhereInput | Prisma.CourseModuleWhereInput[];
    id?: Prisma.StringFilter<"CourseModule"> | string;
    courseId?: Prisma.StringFilter<"CourseModule"> | string;
    title?: Prisma.StringFilter<"CourseModule"> | string;
    description?: Prisma.StringNullableFilter<"CourseModule"> | string | null;
    position?: Prisma.IntFilter<"CourseModule"> | number;
    createdAt?: Prisma.DateTimeFilter<"CourseModule"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CourseModule"> | Date | string;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
    lessons?: Prisma.LessonListRelationFilter;
};
export type CourseModuleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    course?: Prisma.CourseOrderByWithRelationInput;
    lessons?: Prisma.LessonOrderByRelationAggregateInput;
};
export type CourseModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CourseModuleWhereInput | Prisma.CourseModuleWhereInput[];
    OR?: Prisma.CourseModuleWhereInput[];
    NOT?: Prisma.CourseModuleWhereInput | Prisma.CourseModuleWhereInput[];
    courseId?: Prisma.StringFilter<"CourseModule"> | string;
    title?: Prisma.StringFilter<"CourseModule"> | string;
    description?: Prisma.StringNullableFilter<"CourseModule"> | string | null;
    position?: Prisma.IntFilter<"CourseModule"> | number;
    createdAt?: Prisma.DateTimeFilter<"CourseModule"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CourseModule"> | Date | string;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
    lessons?: Prisma.LessonListRelationFilter;
}, "id">;
export type CourseModuleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CourseModuleCountOrderByAggregateInput;
    _avg?: Prisma.CourseModuleAvgOrderByAggregateInput;
    _max?: Prisma.CourseModuleMaxOrderByAggregateInput;
    _min?: Prisma.CourseModuleMinOrderByAggregateInput;
    _sum?: Prisma.CourseModuleSumOrderByAggregateInput;
};
export type CourseModuleScalarWhereWithAggregatesInput = {
    AND?: Prisma.CourseModuleScalarWhereWithAggregatesInput | Prisma.CourseModuleScalarWhereWithAggregatesInput[];
    OR?: Prisma.CourseModuleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CourseModuleScalarWhereWithAggregatesInput | Prisma.CourseModuleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CourseModule"> | string;
    courseId?: Prisma.StringWithAggregatesFilter<"CourseModule"> | string;
    title?: Prisma.StringWithAggregatesFilter<"CourseModule"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"CourseModule"> | string | null;
    position?: Prisma.IntWithAggregatesFilter<"CourseModule"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CourseModule"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CourseModule"> | Date | string;
};
export type CourseModuleCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    course: Prisma.CourseCreateNestedOneWithoutModulesInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutModuleInput;
};
export type CourseModuleUncheckedCreateInput = {
    id?: string;
    courseId: string;
    title: string;
    description?: string | null;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutModuleInput;
};
export type CourseModuleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutModulesNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutModuleNestedInput;
};
export type CourseModuleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    courseId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutModuleNestedInput;
};
export type CourseModuleCreateManyInput = {
    id?: string;
    courseId: string;
    title: string;
    description?: string | null;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CourseModuleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseModuleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    courseId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseModuleListRelationFilter = {
    every?: Prisma.CourseModuleWhereInput;
    some?: Prisma.CourseModuleWhereInput;
    none?: Prisma.CourseModuleWhereInput;
};
export type CourseModuleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CourseModuleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CourseModuleAvgOrderByAggregateInput = {
    position?: Prisma.SortOrder;
};
export type CourseModuleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CourseModuleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CourseModuleSumOrderByAggregateInput = {
    position?: Prisma.SortOrder;
};
export type CourseModuleScalarRelationFilter = {
    is?: Prisma.CourseModuleWhereInput;
    isNot?: Prisma.CourseModuleWhereInput;
};
export type CourseModuleCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.CourseModuleCreateWithoutCourseInput, Prisma.CourseModuleUncheckedCreateWithoutCourseInput> | Prisma.CourseModuleCreateWithoutCourseInput[] | Prisma.CourseModuleUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.CourseModuleCreateOrConnectWithoutCourseInput | Prisma.CourseModuleCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.CourseModuleCreateManyCourseInputEnvelope;
    connect?: Prisma.CourseModuleWhereUniqueInput | Prisma.CourseModuleWhereUniqueInput[];
};
export type CourseModuleUncheckedCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.CourseModuleCreateWithoutCourseInput, Prisma.CourseModuleUncheckedCreateWithoutCourseInput> | Prisma.CourseModuleCreateWithoutCourseInput[] | Prisma.CourseModuleUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.CourseModuleCreateOrConnectWithoutCourseInput | Prisma.CourseModuleCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.CourseModuleCreateManyCourseInputEnvelope;
    connect?: Prisma.CourseModuleWhereUniqueInput | Prisma.CourseModuleWhereUniqueInput[];
};
export type CourseModuleUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.CourseModuleCreateWithoutCourseInput, Prisma.CourseModuleUncheckedCreateWithoutCourseInput> | Prisma.CourseModuleCreateWithoutCourseInput[] | Prisma.CourseModuleUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.CourseModuleCreateOrConnectWithoutCourseInput | Prisma.CourseModuleCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.CourseModuleUpsertWithWhereUniqueWithoutCourseInput | Prisma.CourseModuleUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.CourseModuleCreateManyCourseInputEnvelope;
    set?: Prisma.CourseModuleWhereUniqueInput | Prisma.CourseModuleWhereUniqueInput[];
    disconnect?: Prisma.CourseModuleWhereUniqueInput | Prisma.CourseModuleWhereUniqueInput[];
    delete?: Prisma.CourseModuleWhereUniqueInput | Prisma.CourseModuleWhereUniqueInput[];
    connect?: Prisma.CourseModuleWhereUniqueInput | Prisma.CourseModuleWhereUniqueInput[];
    update?: Prisma.CourseModuleUpdateWithWhereUniqueWithoutCourseInput | Prisma.CourseModuleUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.CourseModuleUpdateManyWithWhereWithoutCourseInput | Prisma.CourseModuleUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.CourseModuleScalarWhereInput | Prisma.CourseModuleScalarWhereInput[];
};
export type CourseModuleUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.CourseModuleCreateWithoutCourseInput, Prisma.CourseModuleUncheckedCreateWithoutCourseInput> | Prisma.CourseModuleCreateWithoutCourseInput[] | Prisma.CourseModuleUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.CourseModuleCreateOrConnectWithoutCourseInput | Prisma.CourseModuleCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.CourseModuleUpsertWithWhereUniqueWithoutCourseInput | Prisma.CourseModuleUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.CourseModuleCreateManyCourseInputEnvelope;
    set?: Prisma.CourseModuleWhereUniqueInput | Prisma.CourseModuleWhereUniqueInput[];
    disconnect?: Prisma.CourseModuleWhereUniqueInput | Prisma.CourseModuleWhereUniqueInput[];
    delete?: Prisma.CourseModuleWhereUniqueInput | Prisma.CourseModuleWhereUniqueInput[];
    connect?: Prisma.CourseModuleWhereUniqueInput | Prisma.CourseModuleWhereUniqueInput[];
    update?: Prisma.CourseModuleUpdateWithWhereUniqueWithoutCourseInput | Prisma.CourseModuleUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.CourseModuleUpdateManyWithWhereWithoutCourseInput | Prisma.CourseModuleUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.CourseModuleScalarWhereInput | Prisma.CourseModuleScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type CourseModuleCreateNestedOneWithoutLessonsInput = {
    create?: Prisma.XOR<Prisma.CourseModuleCreateWithoutLessonsInput, Prisma.CourseModuleUncheckedCreateWithoutLessonsInput>;
    connectOrCreate?: Prisma.CourseModuleCreateOrConnectWithoutLessonsInput;
    connect?: Prisma.CourseModuleWhereUniqueInput;
};
export type CourseModuleUpdateOneRequiredWithoutLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.CourseModuleCreateWithoutLessonsInput, Prisma.CourseModuleUncheckedCreateWithoutLessonsInput>;
    connectOrCreate?: Prisma.CourseModuleCreateOrConnectWithoutLessonsInput;
    upsert?: Prisma.CourseModuleUpsertWithoutLessonsInput;
    connect?: Prisma.CourseModuleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CourseModuleUpdateToOneWithWhereWithoutLessonsInput, Prisma.CourseModuleUpdateWithoutLessonsInput>, Prisma.CourseModuleUncheckedUpdateWithoutLessonsInput>;
};
export type CourseModuleCreateWithoutCourseInput = {
    id?: string;
    title: string;
    description?: string | null;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lessons?: Prisma.LessonCreateNestedManyWithoutModuleInput;
};
export type CourseModuleUncheckedCreateWithoutCourseInput = {
    id?: string;
    title: string;
    description?: string | null;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutModuleInput;
};
export type CourseModuleCreateOrConnectWithoutCourseInput = {
    where: Prisma.CourseModuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseModuleCreateWithoutCourseInput, Prisma.CourseModuleUncheckedCreateWithoutCourseInput>;
};
export type CourseModuleCreateManyCourseInputEnvelope = {
    data: Prisma.CourseModuleCreateManyCourseInput | Prisma.CourseModuleCreateManyCourseInput[];
    skipDuplicates?: boolean;
};
export type CourseModuleUpsertWithWhereUniqueWithoutCourseInput = {
    where: Prisma.CourseModuleWhereUniqueInput;
    update: Prisma.XOR<Prisma.CourseModuleUpdateWithoutCourseInput, Prisma.CourseModuleUncheckedUpdateWithoutCourseInput>;
    create: Prisma.XOR<Prisma.CourseModuleCreateWithoutCourseInput, Prisma.CourseModuleUncheckedCreateWithoutCourseInput>;
};
export type CourseModuleUpdateWithWhereUniqueWithoutCourseInput = {
    where: Prisma.CourseModuleWhereUniqueInput;
    data: Prisma.XOR<Prisma.CourseModuleUpdateWithoutCourseInput, Prisma.CourseModuleUncheckedUpdateWithoutCourseInput>;
};
export type CourseModuleUpdateManyWithWhereWithoutCourseInput = {
    where: Prisma.CourseModuleScalarWhereInput;
    data: Prisma.XOR<Prisma.CourseModuleUpdateManyMutationInput, Prisma.CourseModuleUncheckedUpdateManyWithoutCourseInput>;
};
export type CourseModuleScalarWhereInput = {
    AND?: Prisma.CourseModuleScalarWhereInput | Prisma.CourseModuleScalarWhereInput[];
    OR?: Prisma.CourseModuleScalarWhereInput[];
    NOT?: Prisma.CourseModuleScalarWhereInput | Prisma.CourseModuleScalarWhereInput[];
    id?: Prisma.StringFilter<"CourseModule"> | string;
    courseId?: Prisma.StringFilter<"CourseModule"> | string;
    title?: Prisma.StringFilter<"CourseModule"> | string;
    description?: Prisma.StringNullableFilter<"CourseModule"> | string | null;
    position?: Prisma.IntFilter<"CourseModule"> | number;
    createdAt?: Prisma.DateTimeFilter<"CourseModule"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CourseModule"> | Date | string;
};
export type CourseModuleCreateWithoutLessonsInput = {
    id?: string;
    title: string;
    description?: string | null;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    course: Prisma.CourseCreateNestedOneWithoutModulesInput;
};
export type CourseModuleUncheckedCreateWithoutLessonsInput = {
    id?: string;
    courseId: string;
    title: string;
    description?: string | null;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CourseModuleCreateOrConnectWithoutLessonsInput = {
    where: Prisma.CourseModuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseModuleCreateWithoutLessonsInput, Prisma.CourseModuleUncheckedCreateWithoutLessonsInput>;
};
export type CourseModuleUpsertWithoutLessonsInput = {
    update: Prisma.XOR<Prisma.CourseModuleUpdateWithoutLessonsInput, Prisma.CourseModuleUncheckedUpdateWithoutLessonsInput>;
    create: Prisma.XOR<Prisma.CourseModuleCreateWithoutLessonsInput, Prisma.CourseModuleUncheckedCreateWithoutLessonsInput>;
    where?: Prisma.CourseModuleWhereInput;
};
export type CourseModuleUpdateToOneWithWhereWithoutLessonsInput = {
    where?: Prisma.CourseModuleWhereInput;
    data: Prisma.XOR<Prisma.CourseModuleUpdateWithoutLessonsInput, Prisma.CourseModuleUncheckedUpdateWithoutLessonsInput>;
};
export type CourseModuleUpdateWithoutLessonsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutModulesNestedInput;
};
export type CourseModuleUncheckedUpdateWithoutLessonsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    courseId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseModuleCreateManyCourseInput = {
    id?: string;
    title: string;
    description?: string | null;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CourseModuleUpdateWithoutCourseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lessons?: Prisma.LessonUpdateManyWithoutModuleNestedInput;
};
export type CourseModuleUncheckedUpdateWithoutCourseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutModuleNestedInput;
};
export type CourseModuleUncheckedUpdateManyWithoutCourseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseModuleCountOutputType = {
    lessons: number;
};
export type CourseModuleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lessons?: boolean | CourseModuleCountOutputTypeCountLessonsArgs;
};
export type CourseModuleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseModuleCountOutputTypeSelect<ExtArgs> | null;
};
export type CourseModuleCountOutputTypeCountLessonsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonWhereInput;
};
export type CourseModuleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    title?: boolean;
    description?: boolean;
    position?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    lessons?: boolean | Prisma.CourseModule$lessonsArgs<ExtArgs>;
    _count?: boolean | Prisma.CourseModuleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["courseModule"]>;
export type CourseModuleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    title?: boolean;
    description?: boolean;
    position?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["courseModule"]>;
export type CourseModuleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    title?: boolean;
    description?: boolean;
    position?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["courseModule"]>;
export type CourseModuleSelectScalar = {
    id?: boolean;
    courseId?: boolean;
    title?: boolean;
    description?: boolean;
    position?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CourseModuleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "courseId" | "title" | "description" | "position" | "createdAt" | "updatedAt", ExtArgs["result"]["courseModule"]>;
export type CourseModuleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    lessons?: boolean | Prisma.CourseModule$lessonsArgs<ExtArgs>;
    _count?: boolean | Prisma.CourseModuleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CourseModuleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
};
export type CourseModuleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
};
export type $CourseModulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CourseModule";
    objects: {
        course: Prisma.$CoursePayload<ExtArgs>;
        lessons: Prisma.$LessonPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        courseId: string;
        title: string;
        description: string | null;
        position: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["courseModule"]>;
    composites: {};
};
export type CourseModuleGetPayload<S extends boolean | null | undefined | CourseModuleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CourseModulePayload, S>;
export type CourseModuleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CourseModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CourseModuleCountAggregateInputType | true;
};
export interface CourseModuleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CourseModule'];
        meta: {
            name: 'CourseModule';
        };
    };
    findUnique<T extends CourseModuleFindUniqueArgs>(args: Prisma.SelectSubset<T, CourseModuleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CourseModuleClient<runtime.Types.Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CourseModuleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CourseModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CourseModuleClient<runtime.Types.Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CourseModuleFindFirstArgs>(args?: Prisma.SelectSubset<T, CourseModuleFindFirstArgs<ExtArgs>>): Prisma.Prisma__CourseModuleClient<runtime.Types.Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CourseModuleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CourseModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CourseModuleClient<runtime.Types.Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CourseModuleFindManyArgs>(args?: Prisma.SelectSubset<T, CourseModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CourseModuleCreateArgs>(args: Prisma.SelectSubset<T, CourseModuleCreateArgs<ExtArgs>>): Prisma.Prisma__CourseModuleClient<runtime.Types.Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CourseModuleCreateManyArgs>(args?: Prisma.SelectSubset<T, CourseModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CourseModuleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CourseModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CourseModuleDeleteArgs>(args: Prisma.SelectSubset<T, CourseModuleDeleteArgs<ExtArgs>>): Prisma.Prisma__CourseModuleClient<runtime.Types.Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CourseModuleUpdateArgs>(args: Prisma.SelectSubset<T, CourseModuleUpdateArgs<ExtArgs>>): Prisma.Prisma__CourseModuleClient<runtime.Types.Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CourseModuleDeleteManyArgs>(args?: Prisma.SelectSubset<T, CourseModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CourseModuleUpdateManyArgs>(args: Prisma.SelectSubset<T, CourseModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CourseModuleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CourseModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CourseModuleUpsertArgs>(args: Prisma.SelectSubset<T, CourseModuleUpsertArgs<ExtArgs>>): Prisma.Prisma__CourseModuleClient<runtime.Types.Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CourseModuleCountArgs>(args?: Prisma.Subset<T, CourseModuleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CourseModuleCountAggregateOutputType> : number>;
    aggregate<T extends CourseModuleAggregateArgs>(args: Prisma.Subset<T, CourseModuleAggregateArgs>): Prisma.PrismaPromise<GetCourseModuleAggregateType<T>>;
    groupBy<T extends CourseModuleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CourseModuleGroupByArgs['orderBy'];
    } : {
        orderBy?: CourseModuleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CourseModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CourseModuleFieldRefs;
}
export interface Prisma__CourseModuleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    course<T extends Prisma.CourseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CourseDefaultArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    lessons<T extends Prisma.CourseModule$lessonsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CourseModule$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CourseModuleFieldRefs {
    readonly id: Prisma.FieldRef<"CourseModule", 'String'>;
    readonly courseId: Prisma.FieldRef<"CourseModule", 'String'>;
    readonly title: Prisma.FieldRef<"CourseModule", 'String'>;
    readonly description: Prisma.FieldRef<"CourseModule", 'String'>;
    readonly position: Prisma.FieldRef<"CourseModule", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"CourseModule", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CourseModule", 'DateTime'>;
}
export type CourseModuleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseModuleSelect<ExtArgs> | null;
    omit?: Prisma.CourseModuleOmit<ExtArgs> | null;
    include?: Prisma.CourseModuleInclude<ExtArgs> | null;
    where: Prisma.CourseModuleWhereUniqueInput;
};
export type CourseModuleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseModuleSelect<ExtArgs> | null;
    omit?: Prisma.CourseModuleOmit<ExtArgs> | null;
    include?: Prisma.CourseModuleInclude<ExtArgs> | null;
    where: Prisma.CourseModuleWhereUniqueInput;
};
export type CourseModuleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CourseModuleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CourseModuleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CourseModuleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseModuleSelect<ExtArgs> | null;
    omit?: Prisma.CourseModuleOmit<ExtArgs> | null;
    include?: Prisma.CourseModuleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourseModuleCreateInput, Prisma.CourseModuleUncheckedCreateInput>;
};
export type CourseModuleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CourseModuleCreateManyInput | Prisma.CourseModuleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CourseModuleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseModuleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CourseModuleOmit<ExtArgs> | null;
    data: Prisma.CourseModuleCreateManyInput | Prisma.CourseModuleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CourseModuleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CourseModuleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseModuleSelect<ExtArgs> | null;
    omit?: Prisma.CourseModuleOmit<ExtArgs> | null;
    include?: Prisma.CourseModuleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourseModuleUpdateInput, Prisma.CourseModuleUncheckedUpdateInput>;
    where: Prisma.CourseModuleWhereUniqueInput;
};
export type CourseModuleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CourseModuleUpdateManyMutationInput, Prisma.CourseModuleUncheckedUpdateManyInput>;
    where?: Prisma.CourseModuleWhereInput;
    limit?: number;
};
export type CourseModuleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseModuleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CourseModuleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourseModuleUpdateManyMutationInput, Prisma.CourseModuleUncheckedUpdateManyInput>;
    where?: Prisma.CourseModuleWhereInput;
    limit?: number;
    include?: Prisma.CourseModuleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CourseModuleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseModuleSelect<ExtArgs> | null;
    omit?: Prisma.CourseModuleOmit<ExtArgs> | null;
    include?: Prisma.CourseModuleInclude<ExtArgs> | null;
    where: Prisma.CourseModuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseModuleCreateInput, Prisma.CourseModuleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CourseModuleUpdateInput, Prisma.CourseModuleUncheckedUpdateInput>;
};
export type CourseModuleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseModuleSelect<ExtArgs> | null;
    omit?: Prisma.CourseModuleOmit<ExtArgs> | null;
    include?: Prisma.CourseModuleInclude<ExtArgs> | null;
    where: Prisma.CourseModuleWhereUniqueInput;
};
export type CourseModuleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseModuleWhereInput;
    limit?: number;
};
export type CourseModule$lessonsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    where?: Prisma.LessonWhereInput;
    orderBy?: Prisma.LessonOrderByWithRelationInput | Prisma.LessonOrderByWithRelationInput[];
    cursor?: Prisma.LessonWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LessonScalarFieldEnum | Prisma.LessonScalarFieldEnum[];
};
export type CourseModuleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseModuleSelect<ExtArgs> | null;
    omit?: Prisma.CourseModuleOmit<ExtArgs> | null;
    include?: Prisma.CourseModuleInclude<ExtArgs> | null;
};
