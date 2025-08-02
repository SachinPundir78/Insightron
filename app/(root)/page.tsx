import React from 'react'
import { Button } from "@/Components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { dummyInterviews } from '@/constants';
import InterviewCard from "@/Components/InterviewCard";

const page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-2xl text-primary-100">
          <h2>
            Get Interview-Ready with our AI-powered Interview Practice &
            Feedback
          </h2>
          <p className="text-lg">
            Our AI-powered Interview Practice and Feedback tool will help you
            prepare for interviews with confidence and efficiency. Whether
            you&apos;re a fresher or an experienced professional, our tool will
            provide you with the resources you need to succeed in your
            interviews.
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start An Interview</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}

          {/* <p>You haven&apos;t taken any interviews yet</p> */}
        </div>
      </section>
    </>
  );
}

export default page