// SPA session lookup. This stays in apps/web because @resume-builder/auth is server-only.

import type { AuthSession } from "@resume-builder/auth/types";
import { authClient } from "./client";

export const getSession = async (): Promise<AuthSession | null> => {
	const { data, error } = await authClient.getSession();
	if (error) return null;
	return data as AuthSession;
};
