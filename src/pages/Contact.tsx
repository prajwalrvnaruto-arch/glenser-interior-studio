import * as React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock3, Send } from "lucide-react";
import {
  BUSINESS_PHONE,
  BUSINESS_EMAIL,
  BUSINESS_ADDRESS_LINE1,
  BUSINESS_ADDRESS_LINE2,
  BUSINESS_HOURS,
  GOOGLE_MAPS_EMBED_URL,
  FORM_ENDPOINT,
  FORM_ACCESS_KEY,
  waLink,
  BUSINESS_NAME,
} from "@/lib/utils";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
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
import { PROJECT_TYPES } from "@/components/shared/QuoteForm";
import { FieldError } from "@/components/shared/FieldError";
import { invalidEmailMessage, invalidPhoneMessage } from "@/lib/validation";

function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "sent">("idle");
  const [service, setService] = React.useState<string>("");
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  /** Drop one field's error as the visitor corrects it. */
  function clearError(field: string) {
    setErrors((prev) => (prev[field] ? { ...prev, [field]: "" } : prev));
  }

  /** Returns true when the form is valid; surfaces field errors on failure. */
  function validate(form: HTMLFormElement): boolean {
    const next: Record<string, string> = {};
    const name = form.querySelector<HTMLInputElement>('[name="name"]')?.value.trim() ?? "";
    const email = form.querySelector<HTMLInputElement>('[name="email"]')?.value.trim() ?? "";
    const phone = form.querySelector<HTMLInputElement>('[name="phone"]')?.value.trim() ?? "";
    const message = form.querySelector<HTMLTextAreaElement>('[name="message"]')?.value.trim() ?? "";

    if (!name) next.name = "Please tell us your name.";
    else if (name.length < 2) next.name = "Please enter at least two characters.";
    if (phone) {
      const msg = invalidPhoneMessage(phone);
      if (msg) next.phone = msg;
    }
    if (!email) next.email = "We need an email to reply to.";
    else {
      const msg = invalidEmailMessage(email);
      if (msg) next.email = msg;
    }
    if (!message) next.message = "Please add a few words about your project.";
    else if (message.length < 10) next.message = "Please add a little more detail (at least 10 characters).";

    setErrors(next);

    const firstInvalid = (["name", "email", "phone", "message"] as const).find((f) => next[f]);
    if (firstInvalid) {
      form.querySelector<HTMLInputElement | HTMLTextAreaElement>(`[name="${firstInvalid}"]`)?.focus();
    }
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validate(form)) return;
    setStatus("submitting");
    const formData = new FormData(form);
    try {
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      form.reset();
      setService("");
      setErrors({});
      setStatus("sent");
    } catch {
      setErrors((prev) => ({ ...prev, form: "Couldn't send just now. Please try again or message us on WhatsApp." }));
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-cream px-8 py-16 text-center">
        <h3 className="font-serif text-2xl font-medium text-charcoal">Message sent.</h3>
        <p className="mt-3 max-w-sm font-sans text-sm text-muted">
          Thank you for reaching out — we'll reply within one working day.
        </p>
        <Link to="/" className="mt-6 font-sans text-sm font-medium text-oak-dark underline-offset-4 hover:underline">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      <input type="hidden" name="access_key" value={FORM_ACCESS_KEY} />
      <input type="hidden" name="subject" value="New Contact Message — Prakash Interior Decors" />
      <input type="hidden" name="from_name" value="Prakash Interior Decors Website" />
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <div className="grid gap-7 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="ct-name">Name</Label>
          <Input
            id="ct-name"
            name="name"
            placeholder="Your name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "ct-name-error" : undefined}
            onChange={() => clearError("name")}
          />
          <FieldError id="ct-name-error" message={errors.name} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="ct-phone">Phone</Label>
          <Input
            id="ct-phone"
            name="phone"
            type="tel"
            placeholder="+91 98xxx xxxxx"
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? "ct-phone-error" : undefined}
            onChange={() => clearError("phone")}
          />
          <FieldError id="ct-phone-error" message={errors.phone} />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="ct-email">Email</Label>
        <Input
          id="ct-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "ct-email-error" : undefined}
          onChange={() => clearError("email")}
        />
        <FieldError id="ct-email-error" message={errors.email} />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="ct-service">Service Interest</Label>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger id="ct-service" name="service_interest">
            <SelectValue placeholder="What are you interested in?" />
          </SelectTrigger>
          <SelectContent>
            {PROJECT_TYPES.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="ct-message">Message</Label>
        <Textarea
          id="ct-message"
          name="message"
          rows={5}
          placeholder="Tell us about your space and what you're hoping to achieve."
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "ct-message-error" : undefined}
          onChange={() => clearError("message")}
        />
        <FieldError id="ct-message-error" message={errors.message} />
      </div>
      {errors.form && (
        <p id="ct-form-error" role="alert" className="font-sans text-sm text-oxide">
          {errors.form}
        </p>
      )}
      <Button type="submit" variant="accent" size="lg" disabled={status === "submitting"}>
        <Send className="h-4 w-4" />
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}

export function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's talk about
            <br />
            <em className="text-oak not-italic">your space.</em>
          </>
        }
        description="Drop by the studio, call, or send a message — we'd love to hear what you're dreaming up."
        image="/assets/contact/contact-bg.png"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Form */}
          <AnimatedSection>
            <h2 className="font-serif text-3xl font-medium text-charcoal">Send a Message</h2>
            <p className="mt-3 font-sans text-sm text-muted">
              We reply within one working day. Prefer WhatsApp?{" "}
              <a
                href={waLink(`Hi ${BUSINESS_NAME}, I'd like to get in touch about a project.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-oak-dark underline-offset-4 hover:underline"
              >
                Message us here
              </a>
              .
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </AnimatedSection>

          {/* Details */}
          <div className="space-y-4">
            <a
              href="tel:+919591344715"
              className="group flex items-start gap-5 rounded-3xl border border-charcoal/8 bg-cream p-7 transition-colors hover:border-oak/40"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-oak/15 text-oak-dark">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="font-sans text-[0.68rem] uppercase tracking-[0.2em] text-muted">Call us</p>
                <p className="mt-1 font-serif text-xl font-medium text-charcoal">{BUSINESS_PHONE}</p>
                <p className="mt-1 font-sans text-xs text-muted">
                  Tap to call — we answer during studio hours.
                </p>
              </div>
            </a>

            <a
              href="mailto:deepakmalviya185@gmail.com"
              className="flex items-start gap-5 rounded-3xl border border-charcoal/8 bg-cream p-7 transition-colors hover:border-oak/40"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-oak/15 text-oak-dark">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="font-sans text-[0.68rem] uppercase tracking-[0.2em] text-muted">Email</p>
                <p className="mt-1 font-serif text-xl font-medium text-charcoal">{BUSINESS_EMAIL}</p>
                <p className="mt-1 font-sans text-xs text-muted">
                  For proposals, collaborations and enquiries.
                </p>
              </div>
            </a>

            <div className="flex items-start gap-5 rounded-3xl border border-charcoal/8 bg-cream p-7">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-oak/15 text-oak-dark">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-sans text-[0.68rem] uppercase tracking-[0.2em] text-muted">Studio</p>
                <p className="mt-1 font-serif text-xl font-medium leading-snug text-charcoal">
                  {BUSINESS_ADDRESS_LINE1}
                  <br />
                  {BUSINESS_ADDRESS_LINE2}
                </p>
                <p className="mt-1 font-sans text-xs text-muted justify-between">
                  View on the map below · appointments recommended.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 rounded-3xl border border-charcoal/8 bg-cream p-7">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-oak/15 text-oak-dark">
                <Clock3 className="h-5 w-5" />
              </span>
              <div>
                <p className="font-sans text-[0.68rem] uppercase tracking-[0.2em] text-muted">Studio Hours</p>
                <p className="mt-1 font-serif text-xl font-medium text-charcoal">{BUSINESS_HOURS}</p>
                <p className="mt-1 font-sans text-xs text-muted">Sunday by appointment only.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <AnimatedSection className="mt-16">
          <div className="overflow-hidden rounded-3xl border border-charcoal/8 shadow-sm">
            <iframe
              title="Prakash Interior Decors — Kalyan Nagar, Bengaluru"
              src={GOOGLE_MAPS_EMBED_URL}
              className="h-[26rem] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}