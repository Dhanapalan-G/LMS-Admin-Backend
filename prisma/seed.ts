import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';

import { PrismaClient } from '../src/generated/prisma/client';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

const ids = {
  schools: [
    '10000000-0000-4000-8000-000000000001',
    '10000000-0000-4000-8000-000000000002',
    '10000000-0000-4000-8000-000000000003',
  ],
  roles: [
    '20000000-0000-4000-8000-000000000001',
    '20000000-0000-4000-8000-000000000002',
    '20000000-0000-4000-8000-000000000003',
    '20000000-0000-4000-8000-000000000004',
  ],
  departments: [
    '30000000-0000-4000-8000-000000000001',
    '30000000-0000-4000-8000-000000000002',
    '30000000-0000-4000-8000-000000000003',
    '30000000-0000-4000-8000-000000000004',
    '30000000-0000-4000-8000-000000000005',
    '30000000-0000-4000-8000-000000000006',
  ],
  admins: [
    '40000000-0000-4000-8000-000000000001',
    '40000000-0000-4000-8000-000000000002',
    '40000000-0000-4000-8000-000000000003',
  ],
  learners: Array.from(
    { length: 12 },
    (_, i) => `50000000-0000-4000-8000-${String(i + 1).padStart(12, '0')}`,
  ),
  categories: [
    '60000000-0000-4000-8000-000000000001',
    '60000000-0000-4000-8000-000000000002',
    '60000000-0000-4000-8000-000000000003',
    '60000000-0000-4000-8000-000000000004',
  ],
  courses: [
    '70000000-0000-4000-8000-000000000001',
    '70000000-0000-4000-8000-000000000002',
    '70000000-0000-4000-8000-000000000003',
    '70000000-0000-4000-8000-000000000004',
    '70000000-0000-4000-8000-000000000005',
    '70000000-0000-4000-8000-000000000006',
  ],
};

const moduleId = (course: number, n: number) =>
  `80000000-0000-4000-8000-${String(course * 10 + n).padStart(12, '0')}`;

const lessonId = (course: number, module: number, lesson: number) =>
  `81000000-0000-4000-8000-${String(course * 100 + module * 10 + lesson).padStart(12, '0')}`;

const quizId = (course: number, lesson: number) =>
  `82000000-0000-4000-8000-${String(course * 100 + lesson).padStart(12, '0')}`;

const questionId = (course: number, lesson: number, q: number) =>
  `83000000-0000-4000-8000-${String(course * 1000 + lesson * 10 + q).padStart(12, '0')}`;

const optionId = (course: number, lesson: number, q: number, o: number) =>
  `84000000-0000-4000-8000-${String(course * 10000 + lesson * 100 + q * 10 + o).padStart(12, '0')}`;

async function main() {
  console.log('Seeding current learning-backend schema...');

  // Development seed: remove previous seed data. This intentionally clears
  // application data. Do NOT run this against production.
  await prisma.$transaction(async (tx) => {
    await tx.quizAnswer.deleteMany();
    await tx.quizAttempt.deleteMany();
    await tx.bookmark.deleteMany();
    await tx.lessonProgress.deleteMany();
    await tx.certificate.deleteMany();
    await tx.enrollment.deleteMany();
    await tx.notification.deleteMany();
    await tx.quizMatchPair.deleteMany();
    await tx.quizOption.deleteMany();
    await tx.quizQuestion.deleteMany();
    await tx.quiz.deleteMany();
    await tx.lessonFile.deleteMany();
    await tx.lesson.deleteMany();
    await tx.courseModule.deleteMany();
    await tx.courseAssignmentCourse.deleteMany();
    await tx.courseAssignmentCategory.deleteMany();
    await tx.courseAssignmentDepartment.deleteMany();
    await tx.courseAssignmentRole.deleteMany();
    await tx.courseAssignmentSchool.deleteMany();
    await tx.courseAssignment.deleteMany();
    await tx.courseCategory.deleteMany();
    await tx.course.deleteMany();
    await tx.category.deleteMany();
    await tx.learnerRefreshToken.deleteMany();
    await tx.learnerOtpVerification.deleteMany();
    await tx.learner.deleteMany();
    await tx.schoolLearnerRole.deleteMany();
    await tx.schoolDepartment.deleteMany();
    await tx.adminRefreshToken.deleteMany();
    await tx.adminOtpVerification.deleteMany();
    await tx.importError.deleteMany();
    await tx.importJob.deleteMany();
    await tx.auditLog.deleteMany();
    await tx.adminUser.deleteMany();
    await tx.department.deleteMany();
    await tx.learnerRole.deleteMany();
    await tx.school.deleteMany();

    const password = await bcrypt.hash('Admin@123', 10);

    // ---------------- Schools ----------------
    await tx.school.createMany({
      data: [
        {
          id: ids.schools[0],
          name: 'Green Valley Public School',
          code: 'GVPS',
          board: 'CBSE',
          address: 'Nagercoil',
          phone: '9000000001',
          email: 'admin@gvps.test',
        },
        {
          id: ids.schools[1],
          name: 'Sunrise Matriculation School',
          code: 'SMS',
          board: 'STATE',
          address: 'Kanyakumari',
          phone: '9000000002',
          email: 'admin@sms.test',
        },
        {
          id: ids.schools[2],
          name: 'Horizon Higher Secondary School',
          code: 'HHSS',
          board: 'ICSE',
          address: 'Chennai',
          phone: '9000000003',
          email: 'admin@hhss.test',
        },
      ],
    });

    // ---------------- Global departments ----------------
    await tx.department.createMany({
      data: [
        {
          id: ids.departments[0],
          name: 'Mathematics',
          code: 'MATH',
          description: 'Mathematics department',
        },
        {
          id: ids.departments[1],
          name: 'Science',
          code: 'SCI',
          description: 'Science department',
        },
        {
          id: ids.departments[2],
          name: 'English',
          code: 'ENG',
          description: 'English department',
        },
        {
          id: ids.departments[3],
          name: 'Computer Science',
          code: 'CS',
          description: 'Computer Science department',
        },
        {
          id: ids.departments[4],
          name: 'Administration',
          code: 'ADMIN',
          description: 'Administration department',
        },
        {
          id: ids.departments[5],
          name: 'Social Science',
          code: 'SOCIAL',
          description: 'Social Science department',
        },
      ],
    });

    // ---------------- Global learner roles ----------------
    await tx.learnerRole.createMany({
      data: [
        {
          id: ids.roles[0],
          name: 'Teacher',
          code: 'TEACHER',
          description: 'Teaching staff',
        },
        {
          id: ids.roles[1],
          name: 'Principal',
          code: 'PRINCIPAL',
          description: 'School principal',
        },
        {
          id: ids.roles[2],
          name: 'Faculty',
          code: 'FACULTY',
          description: 'Faculty member',
        },
        {
          id: ids.roles[3],
          name: 'Coordinator',
          code: 'COORDINATOR',
          description: 'Academic coordinator',
        },
      ],
    });

    // Role-school mappings
    await tx.schoolLearnerRole.createMany({
      data: [
        { schoolId: ids.schools[0], learnerRoleId: ids.roles[0] },
        { schoolId: ids.schools[0], learnerRoleId: ids.roles[1] },
        { schoolId: ids.schools[0], learnerRoleId: ids.roles[2] },
        { schoolId: ids.schools[1], learnerRoleId: ids.roles[0] },
        { schoolId: ids.schools[1], learnerRoleId: ids.roles[1] },
        { schoolId: ids.schools[1], learnerRoleId: ids.roles[2] },
        { schoolId: ids.schools[2], learnerRoleId: ids.roles[0] },
        { schoolId: ids.schools[2], learnerRoleId: ids.roles[3] },
      ],
    });

    // Department-school mappings
    await tx.schoolDepartment.createMany({
      data: [
        { schoolId: ids.schools[0], departmentId: ids.departments[0] },
        { schoolId: ids.schools[0], departmentId: ids.departments[1] },
        { schoolId: ids.schools[0], departmentId: ids.departments[2] },
        { schoolId: ids.schools[0], departmentId: ids.departments[3] },
        { schoolId: ids.schools[1], departmentId: ids.departments[0] },
        { schoolId: ids.schools[1], departmentId: ids.departments[1] },
        { schoolId: ids.schools[1], departmentId: ids.departments[2] },
        { schoolId: ids.schools[2], departmentId: ids.departments[3] },
        { schoolId: ids.schools[2], departmentId: ids.departments[5] },
      ],
    });

    // ---------------- Admin users ----------------
    await tx.adminUser.createMany({
      data: [
        {
          id: ids.admins[0],
          employeeId: 'ADM001',
          name: 'Super Admin',
          email: 'superadmin@test.com',
          phone: '9100000001',
          password,
          role: 'SUPER_ADMIN',
          status: 'ACTIVE',
        },
        {
          id: ids.admins[1],
          employeeId: 'ADM002',
          name: 'GVPS Admin',
          email: 'admin.gvps@test.com',
          phone: '9100000002',
          password,
          role: 'ADMIN',
          status: 'ACTIVE',
          schoolId: ids.schools[0],
        },
        {
          id: ids.admins[2],
          employeeId: 'ADM003',
          name: 'SMS Admin',
          email: 'admin.sms@test.com',
          phone: '9100000003',
          password,
          role: 'ADMIN',
          status: 'ACTIVE',
          schoolId: ids.schools[1],
        },
      ],
    });

    // ---------------- Learners ----------------
    const learnerData = [
      [
        'Arun Kumar',
        'arun1@test.com',
        '9001000001',
        'EMP001',
        ids.schools[0],
        ids.departments[0],
        ids.roles[0],
        'ACTIVE',
      ],
      [
        'Priya Devi',
        'priya1@test.com',
        '9001000002',
        'EMP002',
        ids.schools[0],
        ids.departments[1],
        ids.roles[0],
        'ACTIVE',
      ],
      [
        'Karthik Raj',
        'karthik1@test.com',
        '9001000003',
        'EMP003',
        ids.schools[0],
        ids.departments[3],
        ids.roles[2],
        'ACTIVE',
      ],
      [
        'Meena S',
        'meena1@test.com',
        '9001000004',
        'EMP004',
        ids.schools[0],
        ids.departments[2],
        ids.roles[1],
        'ACTIVE',
      ],
      [
        'Vijay Kumar',
        'vijay1@test.com',
        '9001000005',
        'EMP005',
        ids.schools[1],
        ids.departments[0],
        ids.roles[0],
        'ACTIVE',
      ],
      [
        'Divya R',
        'divya1@test.com',
        '9001000006',
        'EMP006',
        ids.schools[1],
        ids.departments[1],
        ids.roles[0],
        'ACTIVE',
      ],
      [
        'Suresh B',
        'suresh1@test.com',
        '9001000007',
        'EMP007',
        ids.schools[1],
        ids.departments[2],
        ids.roles[2],
        'ACTIVE',
      ],
      [
        'Anitha P',
        'anitha1@test.com',
        '9001000008',
        'EMP008',
        ids.schools[1],
        ids.departments[0],
        ids.roles[1],
        'ACTIVE',
      ],
      [
        'Rahul M',
        'rahul1@test.com',
        '9001000009',
        'EMP009',
        ids.schools[2],
        ids.departments[3],
        ids.roles[0],
        'ACTIVE',
      ],
      [
        'Nisha K',
        'nisha1@test.com',
        '9001000010',
        'EMP010',
        ids.schools[2],
        ids.departments[5],
        ids.roles[3],
        'ACTIVE',
      ],
      [
        'Manoj T',
        'manoj1@test.com',
        '9001000011',
        'EMP011',
        ids.schools[2],
        ids.departments[3],
        ids.roles[0],
        'PENDING_APPROVAL',
      ],
      [
        'Lakshmi V',
        'lakshmi1@test.com',
        '9001000012',
        'EMP012',
        ids.schools[0],
        ids.departments[1],
        ids.roles[0],
        'INACTIVE',
      ],
    ];

    await tx.learner.createMany({
      data: learnerData.map((x, i) => ({
        id: ids.learners[i],
        name: x[0],
        email: x[1],
        phone: x[2],
        employeeId: x[3],
        schoolId: x[4],
        departmentId: x[5],
        learnerRoleId: x[6],
        password,
        passwordSet: true,
        status: x[7] as any,
        dateOfJoining: new Date(`202${(i % 4) + 2}-06-01`),
        ...(x[7] === 'ACTIVE'
          ? {
              approvedAt: new Date('2026-01-10T09:00:00Z'),
              approvedBy: ids.admins[0],
            }
          : {}),
      })),
    });

    // ---------------- Categories ----------------
    await tx.category.createMany({
      data: [
        {
          id: ids.categories[0],
          name: 'Teaching Skills',
          description: 'Teaching and classroom skills',
        },
        {
          id: ids.categories[1],
          name: 'Technology',
          description: 'Technology and digital learning',
        },
        {
          id: ids.categories[2],
          name: 'Leadership',
          description: 'Leadership and management',
        },
        {
          id: ids.categories[3],
          name: 'Compliance',
          description: 'Policies and compliance',
        },
      ],
    });

    // ---------------- Courses ----------------
    const now = new Date('2026-09-25T09:00:00Z');
    await tx.course.createMany({
      data: [
        {
          id: ids.courses[0],
          createdById: ids.admins[0],
          title: 'Effective Classroom Management',
          code: 'CRS001',
          description: 'Practical classroom management techniques.',
          status: 'PUBLISHED',
          isMandatory: true,
          durationMinutes: 90,
          dueDate: new Date('2026-10-15T23:59:59Z'),
        },
        {
          id: ids.courses[1],
          createdById: ids.admins[0],
          title: 'Digital Teaching Tools',
          code: 'CRS002',
          description: 'Using modern digital tools for teaching.',
          status: 'PUBLISHED',
          isMandatory: true,
          durationMinutes: 120,
          dueDate: new Date('2026-11-15T23:59:59Z'),
        },
        {
          id: ids.courses[2],
          createdById: ids.admins[1],
          title: 'School Leadership Essentials',
          code: 'CRS003',
          description: 'Leadership skills for school staff.',
          status: 'PUBLISHED',
          isMandatory: false,
          durationMinutes: 100,
        },
        {
          id: ids.courses[3],
          createdById: ids.admins[0],
          title: 'Child Safety and Protection',
          code: 'CRS004',
          description: 'Child safety policies and procedures.',
          status: 'PUBLISHED',
          isMandatory: true,
          durationMinutes: 75,
          dueDate: new Date('2026-09-20T23:59:59Z'),
        },
        {
          id: ids.courses[4],
          createdById: ids.admins[2],
          title: 'Advanced Mathematics Teaching',
          code: 'CRS005',
          description: 'Advanced approaches for mathematics teaching.',
          status: 'DRAFT',
          isMandatory: false,
          durationMinutes: 150,
        },
        {
          id: ids.courses[5],
          createdById: ids.admins[0],
          title: 'Assessment and Feedback',
          code: 'CRS006',
          description: 'Better learner assessment and feedback.',
          status: 'PUBLISHED',
          isMandatory: false,
          durationMinutes: 80,
        },
      ],
    });

    // Course-category many-to-many
    await tx.courseCategory.createMany({
      data: [
        { courseId: ids.courses[0], categoryId: ids.categories[0] },
        { courseId: ids.courses[1], categoryId: ids.categories[1] },
        { courseId: ids.courses[2], categoryId: ids.categories[2] },
        { courseId: ids.courses[3], categoryId: ids.categories[3] },
        { courseId: ids.courses[4], categoryId: ids.categories[0] },
        { courseId: ids.courses[4], categoryId: ids.categories[1] },
        { courseId: ids.courses[5], categoryId: ids.categories[0] },
        { courseId: ids.courses[5], categoryId: ids.categories[3] },
      ],
    });

    // ---------------- Modules, lessons and files ----------------
    const moduleRows: any[] = [];
    const lessonRows: any[] = [];
    const fileRows: any[] = [];

    for (let c = 1; c <= 6; c++) {
      for (let m = 1; m <= 2; m++) {
        const mid = moduleId(c, m);
        moduleRows.push({
          id: mid,
          courseId: ids.courses[c - 1],
          title: `Module ${m}: ${['Foundations', 'Practice'][m - 1]}`,
          description: `Learning module ${m}`,
          status: c === 5 ? 'DRAFT' : 'PUBLISHED',
          orderIndex: m,
        });

        for (let l = 1; l <= 3; l++) {
          const lid = lessonId(c, m, l);
          lessonRows.push({
            id: lid,
            moduleId: mid,
            title: `Lesson ${m}.${l}`,
            description: `Lesson ${m}.${l} for course ${c}`,
            status: c === 5 ? 'DRAFT' : 'PUBLISHED',
            type: l === 1 ? 'VIDEO' : l === 2 ? 'TEXT' : 'PDF',
            content:
              l === 2 ? `Sample learning content for lesson ${m}.${l}.` : null,
            position: l,
            duration: 15 + l * 5,
            isRequired: l !== 3,
          });
          if (l !== 2) {
            fileRows.push({
              id: `85000000-0000-4000-8000-${String(c * 100 + m * 10 + l).padStart(12, '0')}`,
              lessonId: lid,
              fileName: `course-${c}-lesson-${m}-${l}.mp4`,
              fileUrl: `https://example.com/learning/course-${c}/lesson-${m}-${l}`,
              fileType: l === 1 ? 'video' : 'pdf',
              fileSize: BigInt(1024 * (500 + l * 100)),
              mimeType: l === 1 ? 'video/mp4' : 'application/pdf',
            });
          }
        }
      }
    }

    await tx.courseModule.createMany({ data: moduleRows });
    await tx.lesson.createMany({ data: lessonRows });
    await tx.lessonFile.createMany({ data: fileRows });

    // ---------------- Quizzes ----------------
    // One lesson quiz per course (first lesson of first module) + one course quiz.
    for (let c = 1; c <= 6; c++) {
      const lid = lessonId(c, 1, 1);
      const qid = quizId(c, 1);
      await tx.quiz.create({
        data: {
          id: qid,
          lessonId: lid,
          title: `Quiz - Course ${c}`,
          description: 'Test your understanding of the lesson.',
          passingScore: 60,
          status: c === 5 ? 'DRAFT' : 'PUBLISHED',
          questions: {
            create: [
              {
                id: questionId(c, 1, 1),
                question: 'Which statement is correct?',
                questionType: 'MCQ',
                position: 1,
                marks: 2,
                explanation: 'The first option is the correct answer.',
                options: {
                  create: [
                    {
                      id: optionId(c, 1, 1, 1),
                      optionText: 'Correct answer',
                      position: 1,
                      isCorrect: true,
                    },
                    {
                      id: optionId(c, 1, 1, 2),
                      optionText: 'Incorrect answer A',
                      position: 2,
                    },
                    {
                      id: optionId(c, 1, 1, 3),
                      optionText: 'Incorrect answer B',
                      position: 3,
                    },
                    {
                      id: optionId(c, 1, 1, 4),
                      optionText: 'Incorrect answer C',
                      position: 4,
                    },
                  ],
                },
              },
              {
                id: questionId(c, 1, 2),
                question: 'The statement below is true.',
                questionType: 'TRUE_FALSE',
                position: 2,
                marks: 1,
                explanation: 'This is a sample true/false question.',
                options: {
                  create: [
                    {
                      id: optionId(c, 1, 2, 1),
                      optionText: 'True',
                      position: 1,
                      isCorrect: true,
                    },
                    {
                      id: optionId(c, 1, 2, 2),
                      optionText: 'False',
                      position: 2,
                    },
                  ],
                },
              },
              {
                id: questionId(c, 1, 3),
                question: 'Match the concepts.',
                questionType: 'MATCH_THE_FOLLOWING',
                position: 3,
                marks: 2,
                explanation: 'Match each item with its corresponding item.',
                matchPairs: {
                  create: [
                    { columnA: 'Concept A', columnB: 'Meaning A', position: 1 },
                    { columnA: 'Concept B', columnB: 'Meaning B', position: 2 },
                  ],
                },
              },
            ],
          },
        },
      });

      // Course-level quiz for the first four published courses.
      if (c <= 4) {
        await tx.quiz.create({
          data: {
            id: quizId(c, 9),
            courseId: ids.courses[c - 1],
            title: `Final Assessment - Course ${c}`,
            description: 'Course completion assessment.',
            passingScore: 60,
            status: 'PUBLISHED',
            questions: {
              create: [
                {
                  id: questionId(c, 9, 1),
                  question: 'What is the main learning outcome?',
                  questionType: 'MCQ',
                  position: 1,
                  marks: 5,
                  options: {
                    create: [
                      {
                        id: optionId(c, 9, 1, 1),
                        optionText: 'Demonstrate the learned skills',
                        position: 1,
                        isCorrect: true,
                      },
                      {
                        id: optionId(c, 9, 1, 2),
                        optionText: 'Skip the learning material',
                        position: 2,
                      },
                      {
                        id: optionId(c, 9, 1, 3),
                        optionText: 'None of these',
                        position: 3,
                      },
                    ],
                  },
                },
              ],
            },
          },
        });
      }
    }

    // ---------------- Assignments ----------------
    const assignments = [
      {
        id: '90000000-0000-4000-8000-000000000001',
        dueDate: new Date('2026-10-15T23:59:59Z'),
        school: ids.schools[0],
        role: ids.roles[0],
        dept: ids.departments[0],
        course: ids.courses[0],
      },
      {
        id: '90000000-0000-4000-8000-000000000002',
        dueDate: new Date('2026-11-15T23:59:59Z'),
        school: ids.schools[0],
        role: ids.roles[0],
        dept: ids.departments[1],
        course: ids.courses[1],
      },
      {
        id: '90000000-0000-4000-8000-000000000003',
        dueDate: new Date('2026-10-31T23:59:59Z'),
        school: ids.schools[1],
        role: ids.roles[0],
        dept: ids.departments[0],
        course: ids.courses[0],
      },
      {
        id: '90000000-0000-4000-8000-000000000004',
        dueDate: new Date('2026-09-20T23:59:59Z'),
        school: ids.schools[1],
        role: ids.roles[2],
        dept: ids.departments[2],
        course: ids.courses[3],
      },
      {
        id: '90000000-0000-4000-8000-000000000005',
        dueDate: new Date('2026-12-15T23:59:59Z'),
        school: ids.schools[2],
        role: ids.roles[0],
        dept: ids.departments[3],
        course: ids.courses[1],
      },
      {
        id: '90000000-0000-4000-8000-000000000006',
        dueDate: new Date('2026-12-31T23:59:59Z'),
        school: ids.schools[0],
        role: ids.roles[1],
        dept: ids.departments[2],
        course: ids.courses[2],
      },
    ];

    for (const a of assignments) {
      await tx.courseAssignment.create({
        data: {
          id: a.id,
          status: 'ACTIVE',
          dueDate: a.dueDate,
          schools: { create: { schoolId: a.school } },
          roles: { create: { learnerRoleId: a.role } },
          departments: { create: { departmentId: a.dept } },
          courses: { create: { courseId: a.course } },
        },
      });
    }

    // ---------------- Enrollments ----------------
    const enrollments = [
      [0, 0, 'completed'],
      [1, 0, 'progress'],
      [2, 1, 'completed'],
      [3, 2, 'progress'],
      [4, 0, 'overdue'],
      [5, 3, 'progress'],
      [6, 3, 'completed'],
      [7, 2, 'progress'],
      [8, 1, 'completed'],
      [9, 1, 'progress'],
      [10, 5, 'progress'],
      [0, 3, 'completed'],
      [1, 2, 'completed'],
      [4, 1, 'progress'],
      [5, 0, 'progress'],
      [6, 5, 'completed'],
      [7, 3, 'overdue'],
      [8, 5, 'completed'],
      [9, 2, 'progress'],
      [2, 5, 'progress'],
    ] as const;

    const enrollmentIds: string[] = [];
    for (let i = 0; i < enrollments.length; i++) {
      const [li, ci, state] = enrollments[i];
      const id = `91000000-0000-4000-8000-${String(i + 1).padStart(12, '0')}`;
      enrollmentIds.push(id);
      await tx.enrollment.create({
        data: {
          id,
          learnerId: ids.learners[li],
          courseId: ids.courses[ci],
          enrolledAt: new Date('2026-08-01T09:00:00Z'),
          dueDate:
            state === 'overdue'
              ? new Date('2026-09-01T23:59:59Z')
              : new Date('2026-12-15T23:59:59Z'),
          ...(state === 'completed'
            ? { completedAt: new Date('2026-09-10T12:00:00Z') }
            : {}),
        },
      });
    }

    // ---------------- Progress ----------------
    const progressRows: any[] = [];
    let progressCounter = 1;
    for (let i = 0; i < enrollments.length; i++) {
      const [li, ci, state] = enrollments[i];
      const lesson = lessonId(ci + 1, 1, 1);
      const pct = state === 'completed' ? 100 : state === 'progress' ? 50 : 20;
      progressRows.push({
        id: `92000000-0000-4000-8000-${String(progressCounter++).padStart(12, '0')}`,
        learnerId: ids.learners[li],
        lessonId: lesson,
        status:
          state === 'completed'
            ? 'COMPLETED'
            : state === 'progress'
              ? 'IN_PROGRESS'
              : 'IN_PROGRESS',
        position: pct === 100 ? 300 : 120,
        percentage: pct,
        startedAt: new Date('2026-08-05T10:00:00Z'),
        ...(state === 'completed'
          ? { completedAt: new Date('2026-09-09T10:00:00Z') }
          : {}),
      });
    }
    await tx.lessonProgress.createMany({ data: progressRows });

    // ---------------- Quiz attempts + answers ----------------
    const attemptRows: any[] = [];
    const answerRows: any[] = [];
    for (let i = 0; i < 10; i++) {
      const li = i % 10;
      const ci = i % 4;
      const qz = quizId(ci + 1, 1);
      const attemptId = `93000000-0000-4000-8000-${String(i + 1).padStart(12, '0')}`;
      const q1 = questionId(ci + 1, 1, 1);
      const opt = optionId(ci + 1, 1, 1, 1);
      const passed = i % 3 !== 0;
      attemptRows.push({
        id: attemptId,
        learnerId: ids.learners[li],
        quizId: qz,
        score: passed ? 80 : 40,
        passed,
        completed: true,
        startedAt: new Date('2026-09-10T09:00:00Z'),
        completedAt: new Date('2026-09-10T09:20:00Z'),
      });
      answerRows.push({
        id: `94000000-0000-4000-8000-${String(i + 1).padStart(12, '0')}`,
        attemptId,
        questionId: q1,
        optionId: opt,
        isCorrect: passed,
        marks: passed ? 2 : 0,
      });
    }
    await tx.quizAttempt.createMany({ data: attemptRows });
    await tx.quizAnswer.createMany({ data: answerRows });

    // ---------------- Certificates ----------------
    const certs = [
      [0, 0],
      [1, 0],
      [2, 1],
      [6, 3],
      [8, 1],
      [9, 2],
      [0, 3],
      [6, 5],
    ];
    await tx.certificate.createMany({
      data: certs.map(([li, ci], i) => ({
        id: `95000000-0000-4000-8000-${String(i + 1).padStart(12, '0')}`,
        learnerId: ids.learners[li],
        courseId: ids.courses[ci],
        certificateNumber: `CERT-2026-${String(i + 1).padStart(4, '0')}`,
        fileUrl: `https://example.com/certificates/CERT-2026-${String(i + 1).padStart(4, '0')}.pdf`,
        issuedAt: new Date('2026-09-15T10:00:00Z'),
      })),
    });

    // ---------------- Notifications ----------------
    await tx.notification.createMany({
      data: ids.learners.slice(0, 8).map((learnerId, i) => ({
        id: `96000000-0000-4000-8000-${String(i + 1).padStart(12, '0')}`,
        learnerId,
        title: i % 2 ? 'Course reminder' : 'New course assigned',
        message:
          i % 2
            ? 'Please complete your assigned course before the due date.'
            : 'A new learning course has been assigned to you.',
        type: i % 2 ? 'COURSE' : 'SYSTEM',
        isRead: i % 3 === 0,
        ...(i % 3 === 0 ? { readAt: new Date('2026-09-20T10:00:00Z') } : {}),
      })),
    });
  });

  console.log('Seed completed successfully.');
  console.log('Test password for all seeded users: Admin@123');
  console.log('Admin: superadmin@test.com');
  console.log('School admin: admin.gvps@test.com');
  console.log('Learner: arun1@test.com');
}

main()
  .catch((e) => {
    console.error('Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
