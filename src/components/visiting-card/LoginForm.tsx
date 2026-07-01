"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authenticate } from "@/app/visiting-card/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";

export function LoginForm() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(formData: FormData) {
    setIsLoading(true);
    setError("");
    
    const result = await authenticate(formData);
    
    if (result.success) {
      router.refresh(); // Refresh the page to trigger the server component to re-evaluate the cookie
    } else {
      setError(result.error || "Authentication failed");
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 border p-8 rounded-2xl shadow-xl">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-500 rounded-full flex items-center justify-center mb-4">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold">Admin Access Required</h2>
          <p className="text-muted-foreground text-center mt-2">
            Please enter your credentials to access the visiting card generator.
          </p>
        </div>

        <form action={onSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-1 block" htmlFor="username">Username</label>
            <Input 
              id="username" 
              name="username" 
              type="text" 
              required 
              placeholder="Enter username" 
              className="w-full"
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-1 block" htmlFor="password">Password</label>
            <Input 
              id="password" 
              name="password" 
              type="password" 
              required 
              placeholder="Enter password" 
              className="w-full"
            />
          </div>

          {error && (
            <p className="text-sm text-red-500 font-medium">{error}</p>
          )}

          <Button type="submit" className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white" disabled={isLoading}>
            {isLoading ? "Verifying..." : "Access Generator"}
          </Button>
        </form>
      </div>
    </div>
  );
}
