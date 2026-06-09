import type { ResumeData } from "@resume-builder/schema/resume/data";

export const hasTemplatePicture = (picture: ResumeData["picture"]) => !picture.hidden && picture.url.trim() !== "";
