import { Trans } from "@lingui/react/macro";
import { m } from "motion/react";
import { BrandIcon } from "@resume-builder/ui/components/brand-icon";

export function Footer() {
	return (
		<m.footer
			id="footer"
			className="px-4 py-10 will-change-[opacity] md:px-8"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.45 }}
		>
			{/* Top row — brand */}
			<div className="flex items-center gap-3">
				<BrandIcon variant="logo" className="size-8 shrink-0" />
				<div>
					<p className="font-semibold text-sm leading-tight">Resume Builder</p>
					<p className="text-muted-foreground text-xs leading-snug">
						<Trans>Build. Customize. Share.</Trans>
					</p>
				</div>
			</div>

			{/* Divider */}
			<div className="my-6 border-border border-t" />
		</m.footer>
	);
}
