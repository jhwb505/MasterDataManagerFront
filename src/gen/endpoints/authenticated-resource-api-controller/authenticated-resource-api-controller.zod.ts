/**
 * Generated by orval v7.6.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import {
  z as zod
} from 'zod';


/**
 * ユーザー情報詳細を取得する
 * @summary ユーザー情報詳細取得
 */
export const getUserDetailsQueryParams = zod.object({
  "emailAddress": zod.string(),
  "versionId": zod.number().optional()
})

export const getUserDetailsResponse = zod.object({
  "userName": zod.string().optional(),
  "versionId": zod.string().optional(),
  "lastName": zod.string().optional(),
  "firstName": zod.string().optional(),
  "emailAddress": zod.string().optional(),
  "userNumber": zod.string().optional(),
  "staticUserId": zod.string().optional()
})

