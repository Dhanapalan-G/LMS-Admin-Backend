import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SchoolModel = runtime.Types.Result.DefaultSelection<Prisma.$SchoolPayload>;
export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null;
    _min: SchoolMinAggregateOutputType | null;
    _max: SchoolMaxAggregateOutputType | null;
};
export type SchoolMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    code: string | null;
    address: string | null;
    phone: string | null;
    email: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SchoolMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    code: string | null;
    address: string | null;
    phone: string | null;
    email: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SchoolCountAggregateOutputType = {
    id: number;
    name: number;
    code: number;
    address: number;
    phone: number;
    email: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SchoolMinAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    address?: true;
    phone?: true;
    email?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SchoolMaxAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    address?: true;
    phone?: true;
    email?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SchoolCountAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    address?: true;
    phone?: true;
    email?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SchoolAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SchoolWhereInput;
    orderBy?: Prisma.SchoolOrderByWithRelationInput | Prisma.SchoolOrderByWithRelationInput[];
    cursor?: Prisma.SchoolWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SchoolCountAggregateInputType;
    _min?: SchoolMinAggregateInputType;
    _max?: SchoolMaxAggregateInputType;
};
export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
    [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSchool[P]> : Prisma.GetScalarType<T[P], AggregateSchool[P]>;
};
export type SchoolGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SchoolWhereInput;
    orderBy?: Prisma.SchoolOrderByWithAggregationInput | Prisma.SchoolOrderByWithAggregationInput[];
    by: Prisma.SchoolScalarFieldEnum[] | Prisma.SchoolScalarFieldEnum;
    having?: Prisma.SchoolScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SchoolCountAggregateInputType | true;
    _min?: SchoolMinAggregateInputType;
    _max?: SchoolMaxAggregateInputType;
};
export type SchoolGroupByOutputType = {
    id: string;
    name: string;
    code: string;
    address: string | null;
    phone: string | null;
    email: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: SchoolCountAggregateOutputType | null;
    _min: SchoolMinAggregateOutputType | null;
    _max: SchoolMaxAggregateOutputType | null;
};
export type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SchoolGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SchoolGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SchoolGroupByOutputType[P]>;
}>>;
export type SchoolWhereInput = {
    AND?: Prisma.SchoolWhereInput | Prisma.SchoolWhereInput[];
    OR?: Prisma.SchoolWhereInput[];
    NOT?: Prisma.SchoolWhereInput | Prisma.SchoolWhereInput[];
    id?: Prisma.StringFilter<"School"> | string;
    name?: Prisma.StringFilter<"School"> | string;
    code?: Prisma.StringFilter<"School"> | string;
    address?: Prisma.StringNullableFilter<"School"> | string | null;
    phone?: Prisma.StringNullableFilter<"School"> | string | null;
    email?: Prisma.StringNullableFilter<"School"> | string | null;
    isActive?: Prisma.BoolFilter<"School"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"School"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"School"> | Date | string;
    users?: Prisma.UserListRelationFilter;
    courses?: Prisma.CourseListRelationFilter;
    imports?: Prisma.ImportJobListRelationFilter;
};
export type SchoolOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    users?: Prisma.UserOrderByRelationAggregateInput;
    courses?: Prisma.CourseOrderByRelationAggregateInput;
    imports?: Prisma.ImportJobOrderByRelationAggregateInput;
};
export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.SchoolWhereInput | Prisma.SchoolWhereInput[];
    OR?: Prisma.SchoolWhereInput[];
    NOT?: Prisma.SchoolWhereInput | Prisma.SchoolWhereInput[];
    name?: Prisma.StringFilter<"School"> | string;
    address?: Prisma.StringNullableFilter<"School"> | string | null;
    phone?: Prisma.StringNullableFilter<"School"> | string | null;
    email?: Prisma.StringNullableFilter<"School"> | string | null;
    isActive?: Prisma.BoolFilter<"School"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"School"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"School"> | Date | string;
    users?: Prisma.UserListRelationFilter;
    courses?: Prisma.CourseListRelationFilter;
    imports?: Prisma.ImportJobListRelationFilter;
}, "id" | "code">;
export type SchoolOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SchoolCountOrderByAggregateInput;
    _max?: Prisma.SchoolMaxOrderByAggregateInput;
    _min?: Prisma.SchoolMinOrderByAggregateInput;
};
export type SchoolScalarWhereWithAggregatesInput = {
    AND?: Prisma.SchoolScalarWhereWithAggregatesInput | Prisma.SchoolScalarWhereWithAggregatesInput[];
    OR?: Prisma.SchoolScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SchoolScalarWhereWithAggregatesInput | Prisma.SchoolScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"School"> | string;
    name?: Prisma.StringWithAggregatesFilter<"School"> | string;
    code?: Prisma.StringWithAggregatesFilter<"School"> | string;
    address?: Prisma.StringNullableWithAggregatesFilter<"School"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"School"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"School"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"School"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"School"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"School"> | Date | string;
};
export type SchoolCreateInput = {
    id?: string;
    name: string;
    code: string;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutSchoolInput;
    courses?: Prisma.CourseCreateNestedManyWithoutSchoolInput;
    imports?: Prisma.ImportJobCreateNestedManyWithoutSchoolInput;
};
export type SchoolUncheckedCreateInput = {
    id?: string;
    name: string;
    code: string;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutSchoolInput;
    courses?: Prisma.CourseUncheckedCreateNestedManyWithoutSchoolInput;
    imports?: Prisma.ImportJobUncheckedCreateNestedManyWithoutSchoolInput;
};
export type SchoolUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutSchoolNestedInput;
    courses?: Prisma.CourseUpdateManyWithoutSchoolNestedInput;
    imports?: Prisma.ImportJobUpdateManyWithoutSchoolNestedInput;
};
export type SchoolUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutSchoolNestedInput;
    courses?: Prisma.CourseUncheckedUpdateManyWithoutSchoolNestedInput;
    imports?: Prisma.ImportJobUncheckedUpdateManyWithoutSchoolNestedInput;
};
export type SchoolCreateManyInput = {
    id?: string;
    name: string;
    code: string;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SchoolUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SchoolMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SchoolMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SchoolNullableScalarRelationFilter = {
    is?: Prisma.SchoolWhereInput | null;
    isNot?: Prisma.SchoolWhereInput | null;
};
export type SchoolScalarRelationFilter = {
    is?: Prisma.SchoolWhereInput;
    isNot?: Prisma.SchoolWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type SchoolCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutUsersInput, Prisma.SchoolUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutUsersInput;
    connect?: Prisma.SchoolWhereUniqueInput;
};
export type SchoolUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutUsersInput, Prisma.SchoolUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.SchoolUpsertWithoutUsersInput;
    disconnect?: Prisma.SchoolWhereInput | boolean;
    delete?: Prisma.SchoolWhereInput | boolean;
    connect?: Prisma.SchoolWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SchoolUpdateToOneWithWhereWithoutUsersInput, Prisma.SchoolUpdateWithoutUsersInput>, Prisma.SchoolUncheckedUpdateWithoutUsersInput>;
};
export type SchoolCreateNestedOneWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutCoursesInput, Prisma.SchoolUncheckedCreateWithoutCoursesInput>;
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutCoursesInput;
    connect?: Prisma.SchoolWhereUniqueInput;
};
export type SchoolUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutCoursesInput, Prisma.SchoolUncheckedCreateWithoutCoursesInput>;
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutCoursesInput;
    upsert?: Prisma.SchoolUpsertWithoutCoursesInput;
    connect?: Prisma.SchoolWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SchoolUpdateToOneWithWhereWithoutCoursesInput, Prisma.SchoolUpdateWithoutCoursesInput>, Prisma.SchoolUncheckedUpdateWithoutCoursesInput>;
};
export type SchoolCreateNestedOneWithoutImportsInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutImportsInput, Prisma.SchoolUncheckedCreateWithoutImportsInput>;
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutImportsInput;
    connect?: Prisma.SchoolWhereUniqueInput;
};
export type SchoolUpdateOneRequiredWithoutImportsNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutImportsInput, Prisma.SchoolUncheckedCreateWithoutImportsInput>;
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutImportsInput;
    upsert?: Prisma.SchoolUpsertWithoutImportsInput;
    connect?: Prisma.SchoolWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SchoolUpdateToOneWithWhereWithoutImportsInput, Prisma.SchoolUpdateWithoutImportsInput>, Prisma.SchoolUncheckedUpdateWithoutImportsInput>;
};
export type SchoolCreateWithoutUsersInput = {
    id?: string;
    name: string;
    code: string;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    courses?: Prisma.CourseCreateNestedManyWithoutSchoolInput;
    imports?: Prisma.ImportJobCreateNestedManyWithoutSchoolInput;
};
export type SchoolUncheckedCreateWithoutUsersInput = {
    id?: string;
    name: string;
    code: string;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    courses?: Prisma.CourseUncheckedCreateNestedManyWithoutSchoolInput;
    imports?: Prisma.ImportJobUncheckedCreateNestedManyWithoutSchoolInput;
};
export type SchoolCreateOrConnectWithoutUsersInput = {
    where: Prisma.SchoolWhereUniqueInput;
    create: Prisma.XOR<Prisma.SchoolCreateWithoutUsersInput, Prisma.SchoolUncheckedCreateWithoutUsersInput>;
};
export type SchoolUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.SchoolUpdateWithoutUsersInput, Prisma.SchoolUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.SchoolCreateWithoutUsersInput, Prisma.SchoolUncheckedCreateWithoutUsersInput>;
    where?: Prisma.SchoolWhereInput;
};
export type SchoolUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.SchoolWhereInput;
    data: Prisma.XOR<Prisma.SchoolUpdateWithoutUsersInput, Prisma.SchoolUncheckedUpdateWithoutUsersInput>;
};
export type SchoolUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    courses?: Prisma.CourseUpdateManyWithoutSchoolNestedInput;
    imports?: Prisma.ImportJobUpdateManyWithoutSchoolNestedInput;
};
export type SchoolUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    courses?: Prisma.CourseUncheckedUpdateManyWithoutSchoolNestedInput;
    imports?: Prisma.ImportJobUncheckedUpdateManyWithoutSchoolNestedInput;
};
export type SchoolCreateWithoutCoursesInput = {
    id?: string;
    name: string;
    code: string;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutSchoolInput;
    imports?: Prisma.ImportJobCreateNestedManyWithoutSchoolInput;
};
export type SchoolUncheckedCreateWithoutCoursesInput = {
    id?: string;
    name: string;
    code: string;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutSchoolInput;
    imports?: Prisma.ImportJobUncheckedCreateNestedManyWithoutSchoolInput;
};
export type SchoolCreateOrConnectWithoutCoursesInput = {
    where: Prisma.SchoolWhereUniqueInput;
    create: Prisma.XOR<Prisma.SchoolCreateWithoutCoursesInput, Prisma.SchoolUncheckedCreateWithoutCoursesInput>;
};
export type SchoolUpsertWithoutCoursesInput = {
    update: Prisma.XOR<Prisma.SchoolUpdateWithoutCoursesInput, Prisma.SchoolUncheckedUpdateWithoutCoursesInput>;
    create: Prisma.XOR<Prisma.SchoolCreateWithoutCoursesInput, Prisma.SchoolUncheckedCreateWithoutCoursesInput>;
    where?: Prisma.SchoolWhereInput;
};
export type SchoolUpdateToOneWithWhereWithoutCoursesInput = {
    where?: Prisma.SchoolWhereInput;
    data: Prisma.XOR<Prisma.SchoolUpdateWithoutCoursesInput, Prisma.SchoolUncheckedUpdateWithoutCoursesInput>;
};
export type SchoolUpdateWithoutCoursesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutSchoolNestedInput;
    imports?: Prisma.ImportJobUpdateManyWithoutSchoolNestedInput;
};
export type SchoolUncheckedUpdateWithoutCoursesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutSchoolNestedInput;
    imports?: Prisma.ImportJobUncheckedUpdateManyWithoutSchoolNestedInput;
};
export type SchoolCreateWithoutImportsInput = {
    id?: string;
    name: string;
    code: string;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutSchoolInput;
    courses?: Prisma.CourseCreateNestedManyWithoutSchoolInput;
};
export type SchoolUncheckedCreateWithoutImportsInput = {
    id?: string;
    name: string;
    code: string;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutSchoolInput;
    courses?: Prisma.CourseUncheckedCreateNestedManyWithoutSchoolInput;
};
export type SchoolCreateOrConnectWithoutImportsInput = {
    where: Prisma.SchoolWhereUniqueInput;
    create: Prisma.XOR<Prisma.SchoolCreateWithoutImportsInput, Prisma.SchoolUncheckedCreateWithoutImportsInput>;
};
export type SchoolUpsertWithoutImportsInput = {
    update: Prisma.XOR<Prisma.SchoolUpdateWithoutImportsInput, Prisma.SchoolUncheckedUpdateWithoutImportsInput>;
    create: Prisma.XOR<Prisma.SchoolCreateWithoutImportsInput, Prisma.SchoolUncheckedCreateWithoutImportsInput>;
    where?: Prisma.SchoolWhereInput;
};
export type SchoolUpdateToOneWithWhereWithoutImportsInput = {
    where?: Prisma.SchoolWhereInput;
    data: Prisma.XOR<Prisma.SchoolUpdateWithoutImportsInput, Prisma.SchoolUncheckedUpdateWithoutImportsInput>;
};
export type SchoolUpdateWithoutImportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutSchoolNestedInput;
    courses?: Prisma.CourseUpdateManyWithoutSchoolNestedInput;
};
export type SchoolUncheckedUpdateWithoutImportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutSchoolNestedInput;
    courses?: Prisma.CourseUncheckedUpdateManyWithoutSchoolNestedInput;
};
export type SchoolCountOutputType = {
    users: number;
    courses: number;
    imports: number;
};
export type SchoolCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | SchoolCountOutputTypeCountUsersArgs;
    courses?: boolean | SchoolCountOutputTypeCountCoursesArgs;
    imports?: boolean | SchoolCountOutputTypeCountImportsArgs;
};
export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolCountOutputTypeSelect<ExtArgs> | null;
};
export type SchoolCountOutputTypeCountUsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
export type SchoolCountOutputTypeCountCoursesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseWhereInput;
};
export type SchoolCountOutputTypeCountImportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImportJobWhereInput;
};
export type SchoolSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    address?: boolean;
    phone?: boolean;
    email?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    users?: boolean | Prisma.School$usersArgs<ExtArgs>;
    courses?: boolean | Prisma.School$coursesArgs<ExtArgs>;
    imports?: boolean | Prisma.School$importsArgs<ExtArgs>;
    _count?: boolean | Prisma.SchoolCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["school"]>;
export type SchoolSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    address?: boolean;
    phone?: boolean;
    email?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["school"]>;
export type SchoolSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    address?: boolean;
    phone?: boolean;
    email?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["school"]>;
export type SchoolSelectScalar = {
    id?: boolean;
    name?: boolean;
    code?: boolean;
    address?: boolean;
    phone?: boolean;
    email?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SchoolOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "code" | "address" | "phone" | "email" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["school"]>;
export type SchoolInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.School$usersArgs<ExtArgs>;
    courses?: boolean | Prisma.School$coursesArgs<ExtArgs>;
    imports?: boolean | Prisma.School$importsArgs<ExtArgs>;
    _count?: boolean | Prisma.SchoolCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SchoolIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type SchoolIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $SchoolPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "School";
    objects: {
        users: Prisma.$UserPayload<ExtArgs>[];
        courses: Prisma.$CoursePayload<ExtArgs>[];
        imports: Prisma.$ImportJobPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        code: string;
        address: string | null;
        phone: string | null;
        email: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["school"]>;
    composites: {};
};
export type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SchoolPayload, S>;
export type SchoolCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SchoolCountAggregateInputType | true;
};
export interface SchoolDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['School'];
        meta: {
            name: 'School';
        };
    };
    findUnique<T extends SchoolFindUniqueArgs>(args: Prisma.SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SchoolFindFirstArgs>(args?: Prisma.SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SchoolFindManyArgs>(args?: Prisma.SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SchoolCreateArgs>(args: Prisma.SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SchoolCreateManyArgs>(args?: Prisma.SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SchoolCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SchoolDeleteArgs>(args: Prisma.SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SchoolUpdateArgs>(args: Prisma.SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SchoolDeleteManyArgs>(args?: Prisma.SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SchoolUpdateManyArgs>(args: Prisma.SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SchoolUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SchoolUpsertArgs>(args: Prisma.SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SchoolCountArgs>(args?: Prisma.Subset<T, SchoolCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SchoolCountAggregateOutputType> : number>;
    aggregate<T extends SchoolAggregateArgs>(args: Prisma.Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>;
    groupBy<T extends SchoolGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SchoolGroupByArgs['orderBy'];
    } : {
        orderBy?: SchoolGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SchoolFieldRefs;
}
export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.School$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.School$usersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    courses<T extends Prisma.School$coursesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.School$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    imports<T extends Prisma.School$importsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.School$importsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SchoolFieldRefs {
    readonly id: Prisma.FieldRef<"School", 'String'>;
    readonly name: Prisma.FieldRef<"School", 'String'>;
    readonly code: Prisma.FieldRef<"School", 'String'>;
    readonly address: Prisma.FieldRef<"School", 'String'>;
    readonly phone: Prisma.FieldRef<"School", 'String'>;
    readonly email: Prisma.FieldRef<"School", 'String'>;
    readonly isActive: Prisma.FieldRef<"School", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"School", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"School", 'DateTime'>;
}
export type SchoolFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    where: Prisma.SchoolWhereUniqueInput;
};
export type SchoolFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    where: Prisma.SchoolWhereUniqueInput;
};
export type SchoolFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    where?: Prisma.SchoolWhereInput;
    orderBy?: Prisma.SchoolOrderByWithRelationInput | Prisma.SchoolOrderByWithRelationInput[];
    cursor?: Prisma.SchoolWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SchoolScalarFieldEnum | Prisma.SchoolScalarFieldEnum[];
};
export type SchoolFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    where?: Prisma.SchoolWhereInput;
    orderBy?: Prisma.SchoolOrderByWithRelationInput | Prisma.SchoolOrderByWithRelationInput[];
    cursor?: Prisma.SchoolWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SchoolScalarFieldEnum | Prisma.SchoolScalarFieldEnum[];
};
export type SchoolFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    where?: Prisma.SchoolWhereInput;
    orderBy?: Prisma.SchoolOrderByWithRelationInput | Prisma.SchoolOrderByWithRelationInput[];
    cursor?: Prisma.SchoolWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SchoolScalarFieldEnum | Prisma.SchoolScalarFieldEnum[];
};
export type SchoolCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SchoolCreateInput, Prisma.SchoolUncheckedCreateInput>;
};
export type SchoolCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SchoolCreateManyInput | Prisma.SchoolCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SchoolCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    data: Prisma.SchoolCreateManyInput | Prisma.SchoolCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SchoolUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SchoolUpdateInput, Prisma.SchoolUncheckedUpdateInput>;
    where: Prisma.SchoolWhereUniqueInput;
};
export type SchoolUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SchoolUpdateManyMutationInput, Prisma.SchoolUncheckedUpdateManyInput>;
    where?: Prisma.SchoolWhereInput;
    limit?: number;
};
export type SchoolUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SchoolUpdateManyMutationInput, Prisma.SchoolUncheckedUpdateManyInput>;
    where?: Prisma.SchoolWhereInput;
    limit?: number;
};
export type SchoolUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    where: Prisma.SchoolWhereUniqueInput;
    create: Prisma.XOR<Prisma.SchoolCreateInput, Prisma.SchoolUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SchoolUpdateInput, Prisma.SchoolUncheckedUpdateInput>;
};
export type SchoolDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    where: Prisma.SchoolWhereUniqueInput;
};
export type SchoolDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SchoolWhereInput;
    limit?: number;
};
export type School$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type School$coursesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type School$importsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SchoolDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    include?: Prisma.SchoolInclude<ExtArgs> | null;
};
