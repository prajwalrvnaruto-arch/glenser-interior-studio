import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QuoteForm } from "./QuoteForm";

interface QuoteModalProps {
  trigger: ReactNode;
  /** Pre-fill the Project Type select (used by per-service CTAs). */
  defaultProjectType?: string;
}

/**
 * "Get a Quote" popup — same 7-field form as the dedicated page,
 * opened from navbar and page CTAs.
 */
export function QuoteModal({ trigger, defaultProjectType }: QuoteModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request a Quote</DialogTitle>
          <DialogDescription>
            Tell us about your project and our design team will get back to you within one
            working day with a tailored estimate.
          </DialogDescription>
        </DialogHeader>
        <QuoteForm compact initialProjectType={defaultProjectType} />
      </DialogContent>
    </Dialog>
  );
}