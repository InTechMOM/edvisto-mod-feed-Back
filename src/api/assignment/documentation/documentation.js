//Esquema de Assignment

/**
 * @openapi 
 *  components:
 *   schemas:
 *    AssignmentSchema:
 *     type: object
 *     properties:
 *      emailTeacher:
 *        type: string
 *      course:
 *        type: string
 *      name:
 *        type: string
 *      title:
 *        type: string
 *      descriptión:
 *        type: string
 *      emailStudents:
 *        type: [string]
 *      resourcesURL:
 *        type: string
 *      startDate:
 *        type: date
 *      finishDate:
 *        type: date
 *     required:
 *      - emailTeacher
 *      - course
 *      - name
 *      - title
 *      - descriptión
 *      - emailStudents
 *     example:
 *      emailTeacher: some@example.com 
 *      course: QuintoA
 *      name: Inteligencia Artificial
 *      title: Análisis de datos utilizando inteligencia artificial
 *      descriptión: Desarrollar un modelo de aprendizaje automático que pueda predecir la probabilidad de que un cliente abandone un servicio
 *      emailStudents: [some1@example.com]
 *      resourcesURL: [https://www.youtube.com/watch?v=OhEhe2YlzoE]
 *      startDate: "17-11-2023"
 *      finishDate: "27-11-2023"
 */

// API GET

/**
 * @openapi
 * /api/projects:
 *  get:
 *   summary: Return all Projects
 *   tags: [AssignmentSchema]
 *   parameters:
 *    - in: query
 *      name: course
 *      description: Query for course
 *      schema:
 *        type: string
 *    - in: query
 *      name: emailStudents
 *      description: Query for emailStudents
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *     description: All Projects
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/AssignmentSchema'
 *    400:
 *     description: Something went wrong
 *    404:
 *     description: Project Not Found
 *    500:
 *     description: Unknown error 
 */