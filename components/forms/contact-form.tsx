"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useModalStore } from "@/hooks/use-modal-store";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 chars.",
  }),
  email: z.string().email("Invalid email."),
  message: z.string().min(10, {
    message: "Message is too short.",
  }),
  social: z.string().url().optional().or(z.literal("")),
});

export function ContactForm() {
  const storeModal = useModalStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      social: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.status === 200) {
        form.reset();
        storeModal.onOpen({
          title: "Thank you!",
          description:
            "Your message has been received! I appreciate your contact and will get back to you shortly.",
          icon: Icons.successAnimated,
        });
      }
    } catch (err) {
      console.log("Err!", err);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-3" 
      >
        <div className="mb-2">
          <h3 className="text-lg font-bold leading-none">Get in touch</h3>
          <p className="text-xs text-muted-foreground mt-1">
            Have a question or proposal?
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormControl>
                  <Input 
                    placeholder="Name" 
                    className="h-9 text-sm" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormControl>
                  <Input 
                    placeholder="Email" 
                    className="h-9 text-sm" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />
        </div>


        <FormField
          control={form.control}
          name="social"
          render={({ field }) => (
            <FormItem className="space-y-0">
              <FormControl>
                <Input 
                  placeholder="Social Link (Optional)" 
                  className="h-9 text-sm" 
                  {...field} 
                />
              </FormControl>
              <FormMessage className="text-[10px]" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-0">
              <FormControl>
                <Textarea 
                  placeholder="How can I help you?" 
                  className="min-h-[80px] resize-none text-sm py-2"
                  rows={3} 
                  {...field} 
                />
              </FormControl>
              <FormMessage className="text-[10px]" />
            </FormItem>
          )}
        />


        <Button type="submit" size="sm" className="w-full h-9 text-xs font-semibold">
          Send Message
          <Icons.arrowRight className="ml-2 h-3 w-3" />
        </Button>
      </form>
    </Form>
  );
}