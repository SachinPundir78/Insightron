import { getCurrentUser } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import InterviewForm from "@/Components/InterviewForm";

const Page = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="container mx-auto flex justify-center align-middle py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Generate New Interview</h1>
          <p className="text-gray-400">
            Fill out the form below to create a custom interview tailored to
            your needs.
          </p>
        </div>

        <InterviewForm userName={user.name!} userId={user.id} />
      </div>
    </div>
  );
};

export default Page;
