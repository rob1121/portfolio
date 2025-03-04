"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Schema for contact form validation
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" }),
});

const Contact: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=robinson.legaspi@yahoo.com&su=Hey Rob!&body=Hi Rob, %0A%0AName: ${encodeURIComponent(
        values.name
      )}%0AEmail: ${encodeURIComponent(
        values.email
      )}%0AMessage: ${encodeURIComponent(values.message)}`;
      window.open(gmailLink, "_blank");

      toast.success("Your message has been sent successfully!");
    } catch (error) {
      console.error("Error submitting contact form", error);
      toast.error("Failed to send your message. Please try again.");
    }
  }

  return (
    <section className="flex flex-col items-center gap-6 w-full" id="contact">
      <div className="w-full">
        <h3 className="text-gray-500">Lets get in touch</h3>
        <h2 className="text-7xl font-bold">Contact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p className="text-xl pt-8">
            I'm excited to hear from you. Whether it's a question, a
            collaboration opportunity, or just to say hi, feel free to send me
            an email at{" "}
            <a href="mailto:robinson.legaspi@yahoo.com">
              robinson.legaspi@yahoo.com
            </a>
            .
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4">
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormControl>
                        <Input
                          id="name"
                          placeholder="Name"
                          type="text"
                          autoComplete="name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="Email"
                          type="email"
                          autoComplete="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormControl>
                        <Textarea
                          id="message"
                          placeholder="Your message..."
                          autoComplete="off"
                          className="min-h-[8rem]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" variant={"outline"}>
                  Send Message
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
