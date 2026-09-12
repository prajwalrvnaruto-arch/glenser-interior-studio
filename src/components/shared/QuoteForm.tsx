import * as React from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FORM_ENDPOINT,
  FORM_ACCESS_KEY,
  waLink,
  BUSINESS_NAME,
} from "@/lib/utils";
import { cn } from "@/lib/utils";
import { FieldError } from "@/components/shared/FieldError";
import { invalidEmailMessage, invalidPhoneMessage } from "@/lib/validation";

export const PROJECT_TYPES = [
  "Residential Interiors",
  "Commercial Interiors",
  "Modular Kitchen",
  "Bedroom Interiors",
  "Full Home Makeover",
  "Renovation",
  "Other",
] as const;

export const BUDGET_RANGES = [
  "Under ₹5 Lakhs",
  "₹5 – ₹10 Lakhs",
  "₹10 – ₹20 Lakhs",
  "₹20 – ₹50 Lakhs",
  "₹50 Lakhs +",
] as const;

interface QuoteFormProps {
  /** Single-column grid for narrower contexts (modal). */
  compact?: boolean;
  className?: string;
  /** Seed the Project Type select (used by per-service CTAs). */
  initialProjectType?: string;
}

export function QuoteForm({ compact = false, className, initialProjectType = "" }: QuoteFormProps) {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "sent">("idle");
  const [projectType, setProjectType] = React.useState<string>(initialProjectType);
  const [budget, setBudget] = React.useState<string>("");
  const [botChecked, setBotChecked] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const nameRef = React.useRef<HTMLInputElement>(null);
  const phoneRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const locationRef = React.useRef<HTMLInputElement>(null);
  const detailsRef = React.useRef<HTMLTextAreaElement>(null);
  const projectTypeTriggerRef = React.useRef<HTMLButtonElement>(null);

  /** Drop one field's error as the visitor corrects it. */
  function clearError(field: string) {
    setErrors((prev) => (prev[field] ? { ...prev, [field]: "" } : prev));
  }

  /** Returns true when the form is valid; surfaces field errors on failure. */
  function validate(): boolean {
    const next: Record<string, string> = {};
    const name = nameRef.current?.value.trim() ?? "";
    const phone = phoneRef.current?.value.trim() ?? "";
    const email = emailRef.current?.value.trim() ?? "";

    if (!name) next.name = "Please tell us your name.";
    else if (name.length < 2) next.name = "Please enter at least two characters.";
    if (!phone) next.phone = "We need a phone number to reach you.";
    else {
      const msg = invalidPhoneMessage(phone);
      if (msg) next.phone = msg;
    }
    if (email) {
      const msg = invalidEmailMessage(email);
      if (msg) next.email = msg;
    }
    if (!projectType) next.projectType = "Please choose a project type.";

    setErrors(next);

    const firstInvalid = (["name", "phone", "email", "projectType"] as const).find((f) => next[f]);
    if (firstInvalid) {
      const refs = { name: nameRef, phone: phoneRef, email: emailRef } as const;
      if (firstInvalid === "projectType") projectTypeTriggerRef.current?.focus();
      else refs[firstInvalid].current?.focus();
    }
    return Object.keys(next).length === 0;
  }

  function summary(): string {
    const rows: string[] = [
      `Hi ${BUSINESS_NAME}, I'd like to request a quote for my project.`,
      "",
      `Name: ${nameRef.current?.value.trim() || ""}`,
    ];
    if (phoneRef.current?.value) rows.push(`Phone: ${phoneRef.current.value.trim()}`);
    if (emailRef.current?.value) rows.push(`Email: ${emailRef.current.value.trim()}`);
    if (projectType) rows.push(`Project Type: ${projectType}`);
    if (locationRef.current?.value) rows.push(`Property Location: ${locationRef.current.value.trim()}`);
    if (budget) rows.push(`Estimated Budget: ${budget}`);
    if (detailsRef.current?.value.trim()) rows.push(`Details: ${detailsRef.current.value.trim()}`);
    return rows.join("\n");
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (botChecked) {
      // Quiet honeypot hit — pretend success, do nothing more.
      setStatus("sent");
      return;
    }

    if (!validate()) return;

    setStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      form.reset();
      setProjectType("");
      setBudget("");
      setStatus("sent");
    } catch {
      // Static fallback: hand the same summary over to WhatsApp.
      setStatus("idle");
      window.open(waLink(summary()), "_blank", "noopener,noreferrer");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-oak/30 bg-cream px-6 py-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-oak" />
        <h3 className="mt-5 font-serif text-2xl font-medium text-charcoal">
          Thank you — request received.
        </h3>
        <p className="mt-3 max-w-sm font-sans text-sm text-muted leading-relaxed">
          Our design team will get back to you within one working day. For anything urgent,
          reach us directly on WhatsApp.
        </p>
        <a
          href={waLink(`Hi ${BUSINESS_NAME}, following up on my quote request.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6"
        >
          <Button variant="outline">Message us on WhatsApp</Button>
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-6", className)}>
      {/* Honeypot hidden from humans — trust-checked by Web3Forms */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        checked={botChecked}
        onChange={(e) => setBotChecked(e.target.checked)}
        className="hidden"
      />
      <input type="hidden" name="access_key" value={FORM_ACCESS_KEY} />
      <input type="hidden" name="subject" value="New Quote Request — Glenser Interior Studio" />
      <input type="hidden" name="from_name" value="Glenser Interior Studio Website" />

      <div className={cn("grid gap-6", !compact && "sm:grid-cols-2")}>
        <div className="space-y-1.5">
          <Label htmlFor="qf-name">Full Name</Label>
          <Input
            id="qf-name"
            name="name"
            ref={nameRef}
            placeholder="Your name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "qf-name-error" : undefined}
            onChange={() => clearError("name")}
          />
          <FieldError id="qf-name-error" message={errors.name} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="qf-phone">Phone Number</Label>
          <Input
            id="qf-phone"
            name="phone"
            type="tel"
            ref={phoneRef}
            placeholder="+91 98xxx xxxxx"
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? "qf-phone-error" : undefined}
            onChange={() => clearError("phone")}
          />
          <FieldError id="qf-phone-error" message={errors.phone} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="qf-email">Email</Label>
          <Input
            id="qf-email"
            name="email"
            type="email"
            ref={emailRef}
            placeholder="you@example.com"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "qf-email-error" : undefined}
            onChange={() => clearError("email")}
          />
          <FieldError id="qf-email-error" message={errors.email} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="qf-type">Project Type</Label>
          <Select value={projectType} onValueChange={(v) => { setProjectType(v); clearError("projectType"); }}>
            <SelectTrigger ref={projectTypeTriggerRef} id="qf-type" name="project_type" aria-invalid={errors.projectType ? true : undefined} aria-describedby={errors.projectType ? "qf-type-error" : undefined}>
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              {PROJECT_TYPES.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FieldError id="qf-type-error" message={errors.projectType} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="qf-location">Property Location</Label>
          <Input
            id="qf-location"
            name="location"
            ref={locationRef}
            placeholder="e.g. Indiranagar, Bengaluru"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="qf-budget">Estimated Budget</Label>
          <Select value={budget} onValueChange={setBudget}>
            <SelectTrigger id="qf-budget" name="budget">
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              {BUDGET_RANGES.map((b) => (
                <SelectItem key={b} value={b}>
                  {b}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="qf-details">Project Details</Label>
        <Textarea
          id="qf-details"
          name="details"
          ref={detailsRef}
          placeholder="Tell us about your space — rooms, size, timeline, or any ideas you already have."
        />
      </div>

      <div className="flex flex-col-reverse gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <a
          href={waLink(summary())}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-charcoal"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Prefer WhatsApp?
        </a>
        <Button type="submit" variant="accent" size="lg" disabled={status === "submitting"}>
          <Send className="h-4 w-4" />
          {status === "submitting" ? "Sending…" : "Submit Request"}
        </Button>
      </div>

      <p className="text-center text-[0.7rem] text-muted/70 sm:text-left">
        We reply within one working day. No spam, ever.
      </p>
    </form>
  );
}