/**
 * Generated by orval v7.6.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import {
  z as zod
} from 'zod';


export const loginBody = zod.record(zod.string(), zod.coerce.string())

export const loginResponse = zod.record(zod.string(), zod.string())

