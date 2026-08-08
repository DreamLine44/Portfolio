import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend, FiCheck, FiPhone } from "react-icons/fi";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { socials } from "../data/experience";
import { submitContactForm } from "../services/contactService";

const CONTACT_ITEMS = [
  { icon: FiMail, label: socials.email, href: `mailto:${socials.email}` },
  { icon: FiPhone, label: socials.phone, href: `tel:${socials.phone}` },
  { icon: FiMapPin, label: socials.location, href: null },
  { icon: FiLinkedin, label: "LinkedIn", href: socials.linkedin },
  { icon: FiGithub, label: "GitHub", href: socials.github },
];

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";
    if (!form.message.trim()) next.message = "Message can't be empty";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = Object.keys(next)[0];
      const el = document.getElementsByName(first)[0];
      el?.focus();
    }
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setSubmitMessage("");

    try {
      await submitContactForm(form);
      setStatus("success");
      setSubmitMessage("Thanks — your message was sent successfully.");
      setForm(initialForm);
    } catch (error) {
      const msg = error?.message || "Something went wrong. Please email me directly instead.";
      setStatus("error");
      setSubmitMessage(msg);

      // If contact API isn't configured, open mail client with prefilled message
      if (msg.includes("Contact API is not configured")) {
        const mailto = `mailto:${socials.email}?subject=${encodeURIComponent(form.subject || 'Contact from portfolio')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
        // small delay so user sees the message before mail client opens
        setTimeout(() => (window.location.href = mailto), 700);
      }
    }
  };

  return (
    <section id="contact" className="bg-[var(--color-bg)] py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="// contact"
          title="Get In Touch"
          description="I'm currently open to new opportunities. Let's build something great together."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {CONTACT_ITEMS.map((item) => {
              const Content = (
                <Card className="flex items-center gap-4 p-5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent-purple)]/10 text-[var(--color-primary)]">
                    <item.icon size={18} />
                  </div>
                  <span className="text-sm font-medium text-[var(--color-navy)] dark:text-white break-all">
                    {item.label}
                  </span>
                </Card>
              );
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="focus-ring block"
                >
                  {Content}
                </a>
              ) : (
                <div key={item.label}>{Content}</div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card hover={false} className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-live="polite" role="status">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field
                    label="Your Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    error={errors.name}
                    disabled={status === 'loading' || status === 'success'}
                  />
                  <Field
                    label="Your Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                    disabled={status === 'loading' || status === 'success'}
                  />
                </div>
                <Field
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  disabled={status === 'loading' || status === 'success'}
                />
                <Field
                  label="Your Message"
                  name="message"
                  as="textarea"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  error={errors.message}
                  disabled={status === 'loading' || status === 'success'}
                />

                <Button
                  type="submit"
                  variant="primary"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto disabled:opacity-60"
                  icon={status === "success" ? <FiCheck /> : <FiSend size={14} />}
                >
                  {status === "loading"
                    ? "Sending..."
                    : status === "success"
                    ? "Message Sent"
                    : "Send Message"}
                </Button>
                {status === "error" && (
                  <p className="text-sm text-[var(--color-error)]">{submitMessage}</p>
                )}
                {status === "success" && (
                  <p className="text-sm text-emerald-600 dark:text-emerald-400">{submitMessage}</p>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", as = "input", rows, value, onChange, error }) {
  const Tag = as;
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-[var(--color-text-secondary)]">
        {label}
      </span>
      <Tag
        type={as === "input" ? type : undefined}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        className={`focus-ring w-full rounded-xl border bg-[var(--color-bg-secondary)] px-4 py-3 text-sm text-[var(--color-navy)] dark:text-white placeholder:text-[var(--color-text-secondary)]/60 transition-colors ${
          error ? "border-[var(--color-error)]" : "border-[var(--color-border)] focus:border-[var(--color-primary)]"
        }`}
      />
      {error && <span className="mt-1 block text-xs text-[var(--color-error)]">{error}</span>}
    </label>
  );
}
