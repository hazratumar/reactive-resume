import { Trans } from "@lingui/react/macro";
import { HandHeartIcon } from "@phosphor-icons/react";
import { Button } from "@resume-builder/ui/components/button";
import { SectionBase } from "../shared/section-base";

export function InformationSectionBuilder() {
	return (
		<SectionBase type="information" className="space-y-4">
			<div className="space-y-2 rounded-md border bg-sky-600 p-5 text-white dark:bg-sky-700">
				<h4 className="font-medium tracking-tight">
					<Trans>Support the app by doing what you can!</Trans>
				</h4>

				<div className="space-y-2 text-xs leading-normal">
					<Trans>
						<p>
							Thank you for using Resume Builder! This app is a labor of love, created mostly in my spare time, with
							wonderful support from open-source contributors around the world.
						</p>
						<p>
							If Resume Builder has been helpful to you, and you'd like to help keep it free and open for everyone,
							please consider making a donation. Every little bit is appreciated!
						</p>
					</Trans>
				</div>

				<Button
					size="sm"
					variant="default"
					nativeButton={false}
					className="mt-2 whitespace-normal px-4! text-xs"
					render={
						<a href="http://opencollective.com/resume-builder" target="_blank" rel="noopener noreferrer">
							<HandHeartIcon />
							<span className="truncate">
								<Trans>Donate to Resume Builder</Trans>
							</span>
						</a>
					}
				/>
			</div>

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

				<Button
					size="sm"
					variant="link"
					className="text-xs"
					nativeButton={false}
					render={
						<a href="https://opencollective.com/resume-builder/donate" target="_blank" rel="noopener noreferrer">
							<Trans>Sponsors</Trans>
						</a>
					}
				/>
			</div>
		</SectionBase>
	);
}
