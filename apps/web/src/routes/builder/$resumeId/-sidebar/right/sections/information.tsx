import { Trans } from "@lingui/react/macro";
import { Button } from "@resume-builder/ui/components/button";
import { SectionBase } from "../shared/section-base";

export function InformationSectionBuilder() {
	return (
		<SectionBase type="information" className="space-y-4">
			<div className="flex flex-wrap gap-0.5">
				<Button
					size="sm"
					variant="link"
					className="text-xs"
					nativeButton={false}
					render={
						<a href="https://docs.resumebuilder.com" target="_blank" rel="noopener noreferrer">
							<Trans>Documentation</Trans>
						</a>
					}
				/>

				<Button
					size="sm"
					variant="link"
					className="text-xs"
					nativeButton={false}
					render={
						<a href="https://github.com/amruthpillai/resume-builder" target="_blank" rel="noopener noreferrer">
							<Trans>Source Code</Trans>
						</a>
					}
				/>

				<Button
					size="sm"
					variant="link"
					className="text-xs"
					nativeButton={false}
					render={
						<a href="https://github.com/amruthpillai/resume-builder/issues" target="_blank" rel="noopener noreferrer">
							<Trans>Report a Bug</Trans>
						</a>
					}
				/>

				<Button
					size="sm"
					variant="link"
					className="text-xs"
					nativeButton={false}
					render={
						<a href="https://crowdin.com/project/resume-builder" target="_blank" rel="noopener noreferrer">
							<Trans>Translations</Trans>
						</a>
					}
				/>
			</div>
		</SectionBase>
	);
}
