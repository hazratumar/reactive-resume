import type { ResumeData } from "@resume-builder/schema/resume/data";
import type { Template } from "@resume-builder/schema/templates";
import { useMemo } from "react";
import { createResumePdfBlob as createPdfBlob } from "@resume-builder/pdf/browser";
import { ResumeDocument } from "@resume-builder/pdf/document";
import { createSectionTitleResolverForLocale, useSectionTitleResolver } from "@/libs/resume/section-title-locale";

export const useLocalizedResumeDocument = (data?: ResumeData, template?: Template) => {
	const sectionTitleResolver = useSectionTitleResolver(data?.metadata.page.locale);

	return useMemo(() => {
		if (!data || !sectionTitleResolver) return null;

		return (
			<ResumeDocument
				data={data}
				template={template ?? data.metadata.template}
				resolveSectionTitle={sectionTitleResolver}
			/>
		);
	}, [data, template, sectionTitleResolver]);
};

export const createResumePdfBlob = async (data: ResumeData, template?: Template) => {
	const sectionTitleResolver = await createSectionTitleResolverForLocale(data.metadata.page.locale);

	return createPdfBlob({
		data,
		template,
		resolveSectionTitle: sectionTitleResolver,
	});
};
