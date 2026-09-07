import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LessonModel = runtime.Types.Result.DefaultSelection<Prisma.$LessonPayload>;
export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null;
    _avg: LessonAvgAggregateOutputType | null;
    _sum: LessonSumAggregateOutputType | null;
    _min: LessonMinAggregateOutputType | null;
    _max: LessonMaxAggregateOutputType | null;
};
export type LessonAvgAggregateOutputType = {
    position: number | null;
    duration: number | null;
};
export type LessonSumAggregateOutputType = {
    position: number | null;
    duration: number | null;
};
export type LessonMinAggregateOutputType = {
    id: string | null;
    moduleId: string | null;
    title: string | null;
    description: string | null;
    type: $Enums.LessonType | null;
    content: string | null;
    position: number | null;
    duration: number | null;
    isRequired: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LessonMaxAggregateOutputType = {
    id: string | null;
    moduleId: string | null;
    title: string | null;
    description: string | null;
    type: $Enums.LessonType | null;
    content: string | null;
    position: number | null;
    duration: number | null;
    isRequired: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LessonCountAggregateOutputType = {
    id: number;
    moduleId: number;
    title: number;
    description: number;
    type: number;
    content: number;
    position: number;
    duration: number;
    isRequired: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LessonAvgAggregateInputType = {
    position?: true;
    duration?: true;
};
export type LessonSumAggregateInputType = {
    position?: true;
    duration?: true;
};
export type LessonMinAggregateInputType = {
    id?: true;
    moduleId?: true;
    title?: true;
    description?: true;
    type?: true;
    content?: true;
    position?: true;
    duration?: true;
    isRequired?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LessonMaxAggregateInputType = {
    id?: true;
    moduleId?: true;
    title?: true;
    description?: true;
    type?: true;
    content?: true;
    position?: true;
    duration?: true;
    isRequired?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LessonCountAggregateInputType = {
    id?: true;
    moduleId?: true;
    title?: true;
    description?: true;
    type?: true;
    content?: true;
    position?: true;
    duration?: true;
    isRequired?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LessonAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonWhereInput;
    orderBy?: Prisma.LessonOrderByWithRelationInput | Prisma.LessonOrderByWithRelationInput[];
    cursor?: Prisma.LessonWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LessonCountAggregateInputType;
    _avg?: LessonAvgAggregateInputType;
    _sum?: LessonSumAggregateInputType;
    _min?: LessonMinAggregateInputType;
    _max?: LessonMaxAggregateInputType;
};
export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
    [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLesson[P]> : Prisma.GetScalarType<T[P], AggregateLesson[P]>;
};
export type LessonGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonWhereInput;
    orderBy?: Prisma.LessonOrderByWithAggregationInput | Prisma.LessonOrderByWithAggregationInput[];
    by: Prisma.LessonScalarFieldEnum[] | Prisma.LessonScalarFieldEnum;
    having?: Prisma.LessonScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LessonCountAggregateInputType | true;
    _avg?: LessonAvgAggregateInputType;
    _sum?: LessonSumAggregateInputType;
    _min?: LessonMinAggregateInputType;
    _max?: LessonMaxAggregateInputType;
};
export type LessonGroupByOutputType = {
    id: string;
    moduleId: string;
    title: string;
    description: string | null;
    type: $Enums.LessonType;
    content: string | null;
    position: number;
    duration: number | null;
    isRequired: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: LessonCountAggregateOutputType | null;
    _avg: LessonAvgAggregateOutputType | null;
    _sum: LessonSumAggregateOutputType | null;
    _min: LessonMinAggregateOutputType | null;
    _max: LessonMaxAggregateOutputType | null;
};
export type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LessonGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LessonGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LessonGroupByOutputType[P]>;
}>>;
export type LessonWhereInput = {
    AND?: Prisma.LessonWhereInput | Prisma.LessonWhereInput[];
    OR?: Prisma.LessonWhereInput[];
    NOT?: Prisma.LessonWhereInput | Prisma.LessonWhereInput[];
    id?: Prisma.StringFilter<"Lesson"> | string;
    moduleId?: Prisma.StringFilter<"Lesson"> | string;
    title?: Prisma.StringFilter<"Lesson"> | string;
    description?: Prisma.StringNullableFilter<"Lesson"> | string | null;
    type?: Prisma.EnumLessonTypeFilter<"Lesson"> | $Enums.LessonType;
    content?: Prisma.StringNullableFilter<"Lesson"> | string | null;
    position?: Prisma.IntFilter<"Lesson"> | number;
    duration?: Prisma.IntNullableFilter<"Lesson"> | number | null;
    isRequired?: Prisma.BoolFilter<"Lesson"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Lesson"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Lesson"> | Date | string;
    module?: Prisma.XOR<Prisma.CourseModuleScalarRelationFilter, Prisma.CourseModuleWhereInput>;
    files?: Prisma.LessonFileListRelationFilter;
    progress?: Prisma.LessonProgressListRelationFilter;
    bookmarks?: Prisma.BookmarkListRelationFilter;
};
export type LessonOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    content?: Prisma.SortOrderInput | Prisma.SortOrder;
    position?: Prisma.SortOrder;
    duration?: Prisma.SortOrderInput | Prisma.SortOrder;
    isRequired?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    module?: Prisma.CourseModuleOrderByWithRelationInput;
    files?: Prisma.LessonFileOrderByRelationAggregateInput;
    progress?: Prisma.LessonProgressOrderByRelationAggregateInput;
    bookmarks?: Prisma.BookmarkOrderByRelationAggregateInput;
};
export type LessonWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LessonWhereInput | Prisma.LessonWhereInput[];
    OR?: Prisma.LessonWhereInput[];
    NOT?: Prisma.LessonWhereInput | Prisma.LessonWhereInput[];
    moduleId?: Prisma.StringFilter<"Lesson"> | string;
    title?: Prisma.StringFilter<"Lesson"> | string;
    description?: Prisma.StringNullableFilter<"Lesson"> | string | null;
    type?: Prisma.EnumLessonTypeFilter<"Lesson"> | $Enums.LessonType;
    content?: Prisma.StringNullableFilter<"Lesson"> | string | null;
    position?: Prisma.IntFilter<"Lesson"> | number;
    duration?: Prisma.IntNullableFilter<"Lesson"> | number | null;
    isRequired?: Prisma.BoolFilter<"Lesson"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Lesson"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Lesson"> | Date | string;
    module?: Prisma.XOR<Prisma.CourseModuleScalarRelationFilter, Prisma.CourseModuleWhereInput>;
    files?: Prisma.LessonFileListRelationFilter;
    progress?: Prisma.LessonProgressListRelationFilter;
    bookmarks?: Prisma.BookmarkListRelationFilter;
}, "id">;
export type LessonOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    content?: Prisma.SortOrderInput | Prisma.SortOrder;
    position?: Prisma.SortOrder;
    duration?: Prisma.SortOrderInput | Prisma.SortOrder;
    isRequired?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LessonCountOrderByAggregateInput;
    _avg?: Prisma.LessonAvgOrderByAggregateInput;
    _max?: Prisma.LessonMaxOrderByAggregateInput;
    _min?: Prisma.LessonMinOrderByAggregateInput;
    _sum?: Prisma.LessonSumOrderByAggregateInput;
};
export type LessonScalarWhereWithAggregatesInput = {
    AND?: Prisma.LessonScalarWhereWithAggregatesInput | Prisma.LessonScalarWhereWithAggregatesInput[];
    OR?: Prisma.LessonScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LessonScalarWhereWithAggregatesInput | Prisma.LessonScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Lesson"> | string;
    moduleId?: Prisma.StringWithAggregatesFilter<"Lesson"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Lesson"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Lesson"> | string | null;
    type?: Prisma.EnumLessonTypeWithAggregatesFilter<"Lesson"> | $Enums.LessonType;
    content?: Prisma.StringNullableWithAggregatesFilter<"Lesson"> | string | null;
    position?: Prisma.IntWithAggregatesFilter<"Lesson"> | number;
    duration?: Prisma.IntNullableWithAggregatesFilter<"Lesson"> | number | null;
    isRequired?: Prisma.BoolWithAggregatesFilter<"Lesson"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Lesson"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Lesson"> | Date | string;
};
export type LessonCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    type: $Enums.LessonType;
    content?: string | null;
    position: number;
    duration?: number | null;
    isRequired?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    module: Prisma.CourseModuleCreateNestedOneWithoutLessonsInput;
    files?: Prisma.LessonFileCreateNestedManyWithoutLessonInput;
    progress?: Prisma.LessonProgressCreateNestedManyWithoutLessonInput;
    bookmarks?: Prisma.BookmarkCreateNestedManyWithoutLessonInput;
};
export type LessonUncheckedCreateInput = {
    id?: string;
    moduleId: string;
    title: string;
    description?: string | null;
    type: $Enums.LessonType;
    content?: string | null;
    position: number;
    duration?: number | null;
    isRequired?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    files?: Prisma.LessonFileUncheckedCreateNestedManyWithoutLessonInput;
    progress?: Prisma.LessonProgressUncheckedCreateNestedManyWithoutLessonInput;
    bookmarks?: Prisma.BookmarkUncheckedCreateNestedManyWithoutLessonInput;
};
export type LessonUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumLessonTypeFieldUpdateOperationsInput | $Enums.LessonType;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    module?: Prisma.CourseModuleUpdateOneRequiredWithoutLessonsNestedInput;
    files?: Prisma.LessonFileUpdateManyWithoutLessonNestedInput;
    progress?: Prisma.LessonProgressUpdateManyWithoutLessonNestedInput;
    bookmarks?: Prisma.BookmarkUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumLessonTypeFieldUpdateOperationsInput | $Enums.LessonType;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    files?: Prisma.LessonFileUncheckedUpdateManyWithoutLessonNestedInput;
    progress?: Prisma.LessonProgressUncheckedUpdateManyWithoutLessonNestedInput;
    bookmarks?: Prisma.BookmarkUncheckedUpdateManyWithoutLessonNestedInput;
};
export type LessonCreateManyInput = {
    id?: string;
    moduleId: string;
    title: string;
    description?: string | null;
    type: $Enums.LessonType;
    content?: string | null;
    position: number;
    duration?: number | null;
    isRequired?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LessonUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumLessonTypeFieldUpdateOperationsInput | $Enums.LessonType;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumLessonTypeFieldUpdateOperationsInput | $Enums.LessonType;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonListRelationFilter = {
    every?: Prisma.LessonWhereInput;
    some?: Prisma.LessonWhereInput;
    none?: Prisma.LessonWhereInput;
};
export type LessonOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LessonCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    isRequired?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LessonAvgOrderByAggregateInput = {
    position?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
};
export type LessonMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    isRequired?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LessonMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    isRequired?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LessonSumOrderByAggregateInput = {
    position?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
};
export type LessonScalarRelationFilter = {
    is?: Prisma.LessonWhereInput;
    isNot?: Prisma.LessonWhereInput;
};
export type LessonCreateNestedManyWithoutModuleInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutModuleInput, Prisma.LessonUncheckedCreateWithoutModuleInput> | Prisma.LessonCreateWithoutModuleInput[] | Prisma.LessonUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutModuleInput | Prisma.LessonCreateOrConnectWithoutModuleInput[];
    createMany?: Prisma.LessonCreateManyModuleInputEnvelope;
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
};
export type LessonUncheckedCreateNestedManyWithoutModuleInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutModuleInput, Prisma.LessonUncheckedCreateWithoutModuleInput> | Prisma.LessonCreateWithoutModuleInput[] | Prisma.LessonUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutModuleInput | Prisma.LessonCreateOrConnectWithoutModuleInput[];
    createMany?: Prisma.LessonCreateManyModuleInputEnvelope;
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
};
export type LessonUpdateManyWithoutModuleNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutModuleInput, Prisma.LessonUncheckedCreateWithoutModuleInput> | Prisma.LessonCreateWithoutModuleInput[] | Prisma.LessonUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutModuleInput | Prisma.LessonCreateOrConnectWithoutModuleInput[];
    upsert?: Prisma.LessonUpsertWithWhereUniqueWithoutModuleInput | Prisma.LessonUpsertWithWhereUniqueWithoutModuleInput[];
    createMany?: Prisma.LessonCreateManyModuleInputEnvelope;
    set?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    disconnect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    delete?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    update?: Prisma.LessonUpdateWithWhereUniqueWithoutModuleInput | Prisma.LessonUpdateWithWhereUniqueWithoutModuleInput[];
    updateMany?: Prisma.LessonUpdateManyWithWhereWithoutModuleInput | Prisma.LessonUpdateManyWithWhereWithoutModuleInput[];
    deleteMany?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
};
export type LessonUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutModuleInput, Prisma.LessonUncheckedCreateWithoutModuleInput> | Prisma.LessonCreateWithoutModuleInput[] | Prisma.LessonUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutModuleInput | Prisma.LessonCreateOrConnectWithoutModuleInput[];
    upsert?: Prisma.LessonUpsertWithWhereUniqueWithoutModuleInput | Prisma.LessonUpsertWithWhereUniqueWithoutModuleInput[];
    createMany?: Prisma.LessonCreateManyModuleInputEnvelope;
    set?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    disconnect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    delete?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    update?: Prisma.LessonUpdateWithWhereUniqueWithoutModuleInput | Prisma.LessonUpdateWithWhereUniqueWithoutModuleInput[];
    updateMany?: Prisma.LessonUpdateManyWithWhereWithoutModuleInput | Prisma.LessonUpdateManyWithWhereWithoutModuleInput[];
    deleteMany?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
};
export type EnumLessonTypeFieldUpdateOperationsInput = {
    set?: $Enums.LessonType;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type LessonCreateNestedOneWithoutFilesInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutFilesInput, Prisma.LessonUncheckedCreateWithoutFilesInput>;
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutFilesInput;
    connect?: Prisma.LessonWhereUniqueInput;
};
export type LessonUpdateOneRequiredWithoutFilesNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutFilesInput, Prisma.LessonUncheckedCreateWithoutFilesInput>;
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutFilesInput;
    upsert?: Prisma.LessonUpsertWithoutFilesInput;
    connect?: Prisma.LessonWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LessonUpdateToOneWithWhereWithoutFilesInput, Prisma.LessonUpdateWithoutFilesInput>, Prisma.LessonUncheckedUpdateWithoutFilesInput>;
};
export type LessonCreateNestedOneWithoutProgressInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutProgressInput, Prisma.LessonUncheckedCreateWithoutProgressInput>;
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutProgressInput;
    connect?: Prisma.LessonWhereUniqueInput;
};
export type LessonUpdateOneRequiredWithoutProgressNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutProgressInput, Prisma.LessonUncheckedCreateWithoutProgressInput>;
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutProgressInput;
    upsert?: Prisma.LessonUpsertWithoutProgressInput;
    connect?: Prisma.LessonWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LessonUpdateToOneWithWhereWithoutProgressInput, Prisma.LessonUpdateWithoutProgressInput>, Prisma.LessonUncheckedUpdateWithoutProgressInput>;
};
export type LessonCreateNestedOneWithoutBookmarksInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutBookmarksInput, Prisma.LessonUncheckedCreateWithoutBookmarksInput>;
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutBookmarksInput;
    connect?: Prisma.LessonWhereUniqueInput;
};
export type LessonUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutBookmarksInput, Prisma.LessonUncheckedCreateWithoutBookmarksInput>;
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutBookmarksInput;
    upsert?: Prisma.LessonUpsertWithoutBookmarksInput;
    connect?: Prisma.LessonWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LessonUpdateToOneWithWhereWithoutBookmarksInput, Prisma.LessonUpdateWithoutBookmarksInput>, Prisma.LessonUncheckedUpdateWithoutBookmarksInput>;
};
export type LessonCreateWithoutModuleInput = {
    id?: string;
    title: string;
    description?: string | null;
    type: $Enums.LessonType;
    content?: string | null;
    position: number;
    duration?: number | null;
    isRequired?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    files?: Prisma.LessonFileCreateNestedManyWithoutLessonInput;
    progress?: Prisma.LessonProgressCreateNestedManyWithoutLessonInput;
    bookmarks?: Prisma.BookmarkCreateNestedManyWithoutLessonInput;
};
export type LessonUncheckedCreateWithoutModuleInput = {
    id?: string;
    title: string;
    description?: string | null;
    type: $Enums.LessonType;
    content?: string | null;
    position: number;
    duration?: number | null;
    isRequired?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    files?: Prisma.LessonFileUncheckedCreateNestedManyWithoutLessonInput;
    progress?: Prisma.LessonProgressUncheckedCreateNestedManyWithoutLessonInput;
    bookmarks?: Prisma.BookmarkUncheckedCreateNestedManyWithoutLessonInput;
};
export type LessonCreateOrConnectWithoutModuleInput = {
    where: Prisma.LessonWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonCreateWithoutModuleInput, Prisma.LessonUncheckedCreateWithoutModuleInput>;
};
export type LessonCreateManyModuleInputEnvelope = {
    data: Prisma.LessonCreateManyModuleInput | Prisma.LessonCreateManyModuleInput[];
    skipDuplicates?: boolean;
};
export type LessonUpsertWithWhereUniqueWithoutModuleInput = {
    where: Prisma.LessonWhereUniqueInput;
    update: Prisma.XOR<Prisma.LessonUpdateWithoutModuleInput, Prisma.LessonUncheckedUpdateWithoutModuleInput>;
    create: Prisma.XOR<Prisma.LessonCreateWithoutModuleInput, Prisma.LessonUncheckedCreateWithoutModuleInput>;
};
export type LessonUpdateWithWhereUniqueWithoutModuleInput = {
    where: Prisma.LessonWhereUniqueInput;
    data: Prisma.XOR<Prisma.LessonUpdateWithoutModuleInput, Prisma.LessonUncheckedUpdateWithoutModuleInput>;
};
export type LessonUpdateManyWithWhereWithoutModuleInput = {
    where: Prisma.LessonScalarWhereInput;
    data: Prisma.XOR<Prisma.LessonUpdateManyMutationInput, Prisma.LessonUncheckedUpdateManyWithoutModuleInput>;
};
export type LessonScalarWhereInput = {
    AND?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
    OR?: Prisma.LessonScalarWhereInput[];
    NOT?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
    id?: Prisma.StringFilter<"Lesson"> | string;
    moduleId?: Prisma.StringFilter<"Lesson"> | string;
    title?: Prisma.StringFilter<"Lesson"> | string;
    description?: Prisma.StringNullableFilter<"Lesson"> | string | null;
    type?: Prisma.EnumLessonTypeFilter<"Lesson"> | $Enums.LessonType;
    content?: Prisma.StringNullableFilter<"Lesson"> | string | null;
    position?: Prisma.IntFilter<"Lesson"> | number;
    duration?: Prisma.IntNullableFilter<"Lesson"> | number | null;
    isRequired?: Prisma.BoolFilter<"Lesson"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Lesson"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Lesson"> | Date | string;
};
export type LessonCreateWithoutFilesInput = {
    id?: string;
    title: string;
    description?: string | null;
    type: $Enums.LessonType;
    content?: string | null;
    position: number;
    duration?: number | null;
    isRequired?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    module: Prisma.CourseModuleCreateNestedOneWithoutLessonsInput;
    progress?: Prisma.LessonProgressCreateNestedManyWithoutLessonInput;
    bookmarks?: Prisma.BookmarkCreateNestedManyWithoutLessonInput;
};
export type LessonUncheckedCreateWithoutFilesInput = {
    id?: string;
    moduleId: string;
    title: string;
    description?: string | null;
    type: $Enums.LessonType;
    content?: string | null;
    position: number;
    duration?: number | null;
    isRequired?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    progress?: Prisma.LessonProgressUncheckedCreateNestedManyWithoutLessonInput;
    bookmarks?: Prisma.BookmarkUncheckedCreateNestedManyWithoutLessonInput;
};
export type LessonCreateOrConnectWithoutFilesInput = {
    where: Prisma.LessonWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonCreateWithoutFilesInput, Prisma.LessonUncheckedCreateWithoutFilesInput>;
};
export type LessonUpsertWithoutFilesInput = {
    update: Prisma.XOR<Prisma.LessonUpdateWithoutFilesInput, Prisma.LessonUncheckedUpdateWithoutFilesInput>;
    create: Prisma.XOR<Prisma.LessonCreateWithoutFilesInput, Prisma.LessonUncheckedCreateWithoutFilesInput>;
    where?: Prisma.LessonWhereInput;
};
export type LessonUpdateToOneWithWhereWithoutFilesInput = {
    where?: Prisma.LessonWhereInput;
    data: Prisma.XOR<Prisma.LessonUpdateWithoutFilesInput, Prisma.LessonUncheckedUpdateWithoutFilesInput>;
};
export type LessonUpdateWithoutFilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumLessonTypeFieldUpdateOperationsInput | $Enums.LessonType;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    module?: Prisma.CourseModuleUpdateOneRequiredWithoutLessonsNestedInput;
    progress?: Prisma.LessonProgressUpdateManyWithoutLessonNestedInput;
    bookmarks?: Prisma.BookmarkUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateWithoutFilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumLessonTypeFieldUpdateOperationsInput | $Enums.LessonType;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    progress?: Prisma.LessonProgressUncheckedUpdateManyWithoutLessonNestedInput;
    bookmarks?: Prisma.BookmarkUncheckedUpdateManyWithoutLessonNestedInput;
};
export type LessonCreateWithoutProgressInput = {
    id?: string;
    title: string;
    description?: string | null;
    type: $Enums.LessonType;
    content?: string | null;
    position: number;
    duration?: number | null;
    isRequired?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    module: Prisma.CourseModuleCreateNestedOneWithoutLessonsInput;
    files?: Prisma.LessonFileCreateNestedManyWithoutLessonInput;
    bookmarks?: Prisma.BookmarkCreateNestedManyWithoutLessonInput;
};
export type LessonUncheckedCreateWithoutProgressInput = {
    id?: string;
    moduleId: string;
    title: string;
    description?: string | null;
    type: $Enums.LessonType;
    content?: string | null;
    position: number;
    duration?: number | null;
    isRequired?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    files?: Prisma.LessonFileUncheckedCreateNestedManyWithoutLessonInput;
    bookmarks?: Prisma.BookmarkUncheckedCreateNestedManyWithoutLessonInput;
};
export type LessonCreateOrConnectWithoutProgressInput = {
    where: Prisma.LessonWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonCreateWithoutProgressInput, Prisma.LessonUncheckedCreateWithoutProgressInput>;
};
export type LessonUpsertWithoutProgressInput = {
    update: Prisma.XOR<Prisma.LessonUpdateWithoutProgressInput, Prisma.LessonUncheckedUpdateWithoutProgressInput>;
    create: Prisma.XOR<Prisma.LessonCreateWithoutProgressInput, Prisma.LessonUncheckedCreateWithoutProgressInput>;
    where?: Prisma.LessonWhereInput;
};
export type LessonUpdateToOneWithWhereWithoutProgressInput = {
    where?: Prisma.LessonWhereInput;
    data: Prisma.XOR<Prisma.LessonUpdateWithoutProgressInput, Prisma.LessonUncheckedUpdateWithoutProgressInput>;
};
export type LessonUpdateWithoutProgressInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumLessonTypeFieldUpdateOperationsInput | $Enums.LessonType;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    module?: Prisma.CourseModuleUpdateOneRequiredWithoutLessonsNestedInput;
    files?: Prisma.LessonFileUpdateManyWithoutLessonNestedInput;
    bookmarks?: Prisma.BookmarkUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateWithoutProgressInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumLessonTypeFieldUpdateOperationsInput | $Enums.LessonType;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    files?: Prisma.LessonFileUncheckedUpdateManyWithoutLessonNestedInput;
    bookmarks?: Prisma.BookmarkUncheckedUpdateManyWithoutLessonNestedInput;
};
export type LessonCreateWithoutBookmarksInput = {
    id?: string;
    title: string;
    description?: string | null;
    type: $Enums.LessonType;
    content?: string | null;
    position: number;
    duration?: number | null;
    isRequired?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    module: Prisma.CourseModuleCreateNestedOneWithoutLessonsInput;
    files?: Prisma.LessonFileCreateNestedManyWithoutLessonInput;
    progress?: Prisma.LessonProgressCreateNestedManyWithoutLessonInput;
};
export type LessonUncheckedCreateWithoutBookmarksInput = {
    id?: string;
    moduleId: string;
    title: string;
    description?: string | null;
    type: $Enums.LessonType;
    content?: string | null;
    position: number;
    duration?: number | null;
    isRequired?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    files?: Prisma.LessonFileUncheckedCreateNestedManyWithoutLessonInput;
    progress?: Prisma.LessonProgressUncheckedCreateNestedManyWithoutLessonInput;
};
export type LessonCreateOrConnectWithoutBookmarksInput = {
    where: Prisma.LessonWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonCreateWithoutBookmarksInput, Prisma.LessonUncheckedCreateWithoutBookmarksInput>;
};
export type LessonUpsertWithoutBookmarksInput = {
    update: Prisma.XOR<Prisma.LessonUpdateWithoutBookmarksInput, Prisma.LessonUncheckedUpdateWithoutBookmarksInput>;
    create: Prisma.XOR<Prisma.LessonCreateWithoutBookmarksInput, Prisma.LessonUncheckedCreateWithoutBookmarksInput>;
    where?: Prisma.LessonWhereInput;
};
export type LessonUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: Prisma.LessonWhereInput;
    data: Prisma.XOR<Prisma.LessonUpdateWithoutBookmarksInput, Prisma.LessonUncheckedUpdateWithoutBookmarksInput>;
};
export type LessonUpdateWithoutBookmarksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumLessonTypeFieldUpdateOperationsInput | $Enums.LessonType;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    module?: Prisma.CourseModuleUpdateOneRequiredWithoutLessonsNestedInput;
    files?: Prisma.LessonFileUpdateManyWithoutLessonNestedInput;
    progress?: Prisma.LessonProgressUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateWithoutBookmarksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumLessonTypeFieldUpdateOperationsInput | $Enums.LessonType;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    files?: Prisma.LessonFileUncheckedUpdateManyWithoutLessonNestedInput;
    progress?: Prisma.LessonProgressUncheckedUpdateManyWithoutLessonNestedInput;
};
export type LessonCreateManyModuleInput = {
    id?: string;
    title: string;
    description?: string | null;
    type: $Enums.LessonType;
    content?: string | null;
    position: number;
    duration?: number | null;
    isRequired?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LessonUpdateWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumLessonTypeFieldUpdateOperationsInput | $Enums.LessonType;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    files?: Prisma.LessonFileUpdateManyWithoutLessonNestedInput;
    progress?: Prisma.LessonProgressUpdateManyWithoutLessonNestedInput;
    bookmarks?: Prisma.BookmarkUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumLessonTypeFieldUpdateOperationsInput | $Enums.LessonType;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    files?: Prisma.LessonFileUncheckedUpdateManyWithoutLessonNestedInput;
    progress?: Prisma.LessonProgressUncheckedUpdateManyWithoutLessonNestedInput;
    bookmarks?: Prisma.BookmarkUncheckedUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateManyWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumLessonTypeFieldUpdateOperationsInput | $Enums.LessonType;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonCountOutputType = {
    files: number;
    progress: number;
    bookmarks: number;
};
export type LessonCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    files?: boolean | LessonCountOutputTypeCountFilesArgs;
    progress?: boolean | LessonCountOutputTypeCountProgressArgs;
    bookmarks?: boolean | LessonCountOutputTypeCountBookmarksArgs;
};
export type LessonCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonCountOutputTypeSelect<ExtArgs> | null;
};
export type LessonCountOutputTypeCountFilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonFileWhereInput;
};
export type LessonCountOutputTypeCountProgressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonProgressWhereInput;
};
export type LessonCountOutputTypeCountBookmarksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookmarkWhereInput;
};
export type LessonSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    moduleId?: boolean;
    title?: boolean;
    description?: boolean;
    type?: boolean;
    content?: boolean;
    position?: boolean;
    duration?: boolean;
    isRequired?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    module?: boolean | Prisma.CourseModuleDefaultArgs<ExtArgs>;
    files?: boolean | Prisma.Lesson$filesArgs<ExtArgs>;
    progress?: boolean | Prisma.Lesson$progressArgs<ExtArgs>;
    bookmarks?: boolean | Prisma.Lesson$bookmarksArgs<ExtArgs>;
    _count?: boolean | Prisma.LessonCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lesson"]>;
export type LessonSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    moduleId?: boolean;
    title?: boolean;
    description?: boolean;
    type?: boolean;
    content?: boolean;
    position?: boolean;
    duration?: boolean;
    isRequired?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    module?: boolean | Prisma.CourseModuleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lesson"]>;
export type LessonSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    moduleId?: boolean;
    title?: boolean;
    description?: boolean;
    type?: boolean;
    content?: boolean;
    position?: boolean;
    duration?: boolean;
    isRequired?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    module?: boolean | Prisma.CourseModuleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lesson"]>;
export type LessonSelectScalar = {
    id?: boolean;
    moduleId?: boolean;
    title?: boolean;
    description?: boolean;
    type?: boolean;
    content?: boolean;
    position?: boolean;
    duration?: boolean;
    isRequired?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LessonOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "moduleId" | "title" | "description" | "type" | "content" | "position" | "duration" | "isRequired" | "createdAt" | "updatedAt", ExtArgs["result"]["lesson"]>;
export type LessonInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    module?: boolean | Prisma.CourseModuleDefaultArgs<ExtArgs>;
    files?: boolean | Prisma.Lesson$filesArgs<ExtArgs>;
    progress?: boolean | Prisma.Lesson$progressArgs<ExtArgs>;
    bookmarks?: boolean | Prisma.Lesson$bookmarksArgs<ExtArgs>;
    _count?: boolean | Prisma.LessonCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LessonIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    module?: boolean | Prisma.CourseModuleDefaultArgs<ExtArgs>;
};
export type LessonIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    module?: boolean | Prisma.CourseModuleDefaultArgs<ExtArgs>;
};
export type $LessonPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Lesson";
    objects: {
        module: Prisma.$CourseModulePayload<ExtArgs>;
        files: Prisma.$LessonFilePayload<ExtArgs>[];
        progress: Prisma.$LessonProgressPayload<ExtArgs>[];
        bookmarks: Prisma.$BookmarkPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        moduleId: string;
        title: string;
        description: string | null;
        type: $Enums.LessonType;
        content: string | null;
        position: number;
        duration: number | null;
        isRequired: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["lesson"]>;
    composites: {};
};
export type LessonGetPayload<S extends boolean | null | undefined | LessonDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LessonPayload, S>;
export type LessonCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LessonCountAggregateInputType | true;
};
export interface LessonDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Lesson'];
        meta: {
            name: 'Lesson';
        };
    };
    findUnique<T extends LessonFindUniqueArgs>(args: Prisma.SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LessonFindFirstArgs>(args?: Prisma.SelectSubset<T, LessonFindFirstArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LessonFindManyArgs>(args?: Prisma.SelectSubset<T, LessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LessonCreateArgs>(args: Prisma.SelectSubset<T, LessonCreateArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LessonCreateManyArgs>(args?: Prisma.SelectSubset<T, LessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LessonCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LessonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LessonDeleteArgs>(args: Prisma.SelectSubset<T, LessonDeleteArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LessonUpdateArgs>(args: Prisma.SelectSubset<T, LessonUpdateArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LessonDeleteManyArgs>(args?: Prisma.SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LessonUpdateManyArgs>(args: Prisma.SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LessonUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LessonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LessonUpsertArgs>(args: Prisma.SelectSubset<T, LessonUpsertArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LessonCountArgs>(args?: Prisma.Subset<T, LessonCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LessonCountAggregateOutputType> : number>;
    aggregate<T extends LessonAggregateArgs>(args: Prisma.Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>;
    groupBy<T extends LessonGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LessonGroupByArgs['orderBy'];
    } : {
        orderBy?: LessonGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LessonFieldRefs;
}
export interface Prisma__LessonClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    module<T extends Prisma.CourseModuleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CourseModuleDefaultArgs<ExtArgs>>): Prisma.Prisma__CourseModuleClient<runtime.Types.Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    files<T extends Prisma.Lesson$filesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lesson$filesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    progress<T extends Prisma.Lesson$progressArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lesson$progressArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    bookmarks<T extends Prisma.Lesson$bookmarksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lesson$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LessonFieldRefs {
    readonly id: Prisma.FieldRef<"Lesson", 'String'>;
    readonly moduleId: Prisma.FieldRef<"Lesson", 'String'>;
    readonly title: Prisma.FieldRef<"Lesson", 'String'>;
    readonly description: Prisma.FieldRef<"Lesson", 'String'>;
    readonly type: Prisma.FieldRef<"Lesson", 'LessonType'>;
    readonly content: Prisma.FieldRef<"Lesson", 'String'>;
    readonly position: Prisma.FieldRef<"Lesson", 'Int'>;
    readonly duration: Prisma.FieldRef<"Lesson", 'Int'>;
    readonly isRequired: Prisma.FieldRef<"Lesson", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Lesson", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Lesson", 'DateTime'>;
}
export type LessonFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    where: Prisma.LessonWhereUniqueInput;
};
export type LessonFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    where: Prisma.LessonWhereUniqueInput;
};
export type LessonFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LessonFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LessonFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LessonCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonCreateInput, Prisma.LessonUncheckedCreateInput>;
};
export type LessonCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LessonCreateManyInput | Prisma.LessonCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LessonCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    data: Prisma.LessonCreateManyInput | Prisma.LessonCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LessonIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LessonUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonUpdateInput, Prisma.LessonUncheckedUpdateInput>;
    where: Prisma.LessonWhereUniqueInput;
};
export type LessonUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LessonUpdateManyMutationInput, Prisma.LessonUncheckedUpdateManyInput>;
    where?: Prisma.LessonWhereInput;
    limit?: number;
};
export type LessonUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonUpdateManyMutationInput, Prisma.LessonUncheckedUpdateManyInput>;
    where?: Prisma.LessonWhereInput;
    limit?: number;
    include?: Prisma.LessonIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LessonUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    where: Prisma.LessonWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonCreateInput, Prisma.LessonUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LessonUpdateInput, Prisma.LessonUncheckedUpdateInput>;
};
export type LessonDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    where: Prisma.LessonWhereUniqueInput;
};
export type LessonDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonWhereInput;
    limit?: number;
};
export type Lesson$filesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Lesson$progressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Lesson$bookmarksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookmarkSelect<ExtArgs> | null;
    omit?: Prisma.BookmarkOmit<ExtArgs> | null;
    include?: Prisma.BookmarkInclude<ExtArgs> | null;
    where?: Prisma.BookmarkWhereInput;
    orderBy?: Prisma.BookmarkOrderByWithRelationInput | Prisma.BookmarkOrderByWithRelationInput[];
    cursor?: Prisma.BookmarkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookmarkScalarFieldEnum | Prisma.BookmarkScalarFieldEnum[];
};
export type LessonDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
};
