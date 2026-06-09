import type { JsonPatchOperation } from "@resume-builder/resume/patch";
import z from "zod";
import { jsonPatchOperationSchema } from "@resume-builder/resume/patch";

export const resumePatchOperationsSchema = z
	.array(jsonPatchOperationSchema)
	.min(1)
	.describe("Array of JSON Patch (RFC 6902) operations to apply to the resume");

export const resumePatchOperationsInputSchema = z.object({
	operations: resumePatchOperationsSchema,
});

export type ResumePatchOperationsInput = z.infer<typeof resumePatchOperationsInputSchema>;
export type ResumePatchOperation = JsonPatchOperation;
