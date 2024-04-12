import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-zinc-900">
      <SignUp />
    </main>
  );
}
