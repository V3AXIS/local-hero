'use client';

import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { signIn } from '@/lib/auth/auth-client';
import { toast } from 'sonner';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface FormValues {
  email: string;
  password: string;
}

export default function Page() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FormValues>({
    defaultValues: { email: "", password: "" },
  });

  const handleFormSubmit = async (data: FormValues) => {
    setIsLoading(true);
    await signIn.email(data, {
      onSuccess: () => {
        toast.success("Signed in successfully!");
        router.push('/');
        router.refresh();
      },
      onError: (err: any) => {
        toast.error(err?.error?.message);
      }
    });
    setIsLoading(false);
  };

  return (
    <div className='flex flex-col gap-5'>
      <div className="mb-10">
        <h1 className=' md:text-4xl text-3xl font-bold tracking-tight'>Sign in <br /> your account</h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            rules={{
              required: "Email is required.",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Please enter a valid email address.",
              },
            }}
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="name@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            rules={{
              required: "Password is required.",
            }}
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} autoComplete="on" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-5 mt-6">
            <Button disabled={isLoading} type="submit" className="w-full">
              {isLoading && <Loader2 className="size-3 animate-spin" />}
              Sign In
            </Button>
          </div>
        </form>
      </Form>
      <div className="mt-4 text-center text-sm">
        Don't have an account?{" "}
        <Link href="/signup" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </div>
  );


}