import { cn } from "@resume-builder/utils/style";

type Props = React.ComponentProps<"div">;

export function Copyright({ className, ...props }: Props) {
	return <div className={cn("text-muted-foreground/80 text-xs", className)} {...props} />;
}
