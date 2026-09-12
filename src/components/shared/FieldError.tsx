interface FieldErrorProps {
  id: string;
  message?: string;
}

/** Inline validation message rendered beneath a field, announced by screen readers. */
export function FieldError({ id, message }: FieldErrorProps) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 font-sans text-xs leading-snug text-oxide">
      {message}
    </p>
  );
}