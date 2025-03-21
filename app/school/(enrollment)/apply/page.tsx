"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { new_application } from "@/lib/actions/admission.actions";
import { useRouter } from "next/navigation";
import SubmitButton from "@/components/submit-button";
import { useApplicantStore } from "@/store/applicant-store";
import { useUserStore } from "@/store/user-store";
import { toast } from "sonner";
import Register from "@/app/(root)/register";
import NoAccountUser from "./no-account-user";
import { MdArrowLeft } from "react-icons/md";
import { ArrowLeft } from "lucide-react";

const initial = {
  fname: "",
  oname: "",
  lname: "",
  country: "ghana",
  dob: "",
  contact: "",
  gender: "",
  email: "",
  school: "",
  year: "",
  programme: "",
  reason: "",
  balance: "",
  scholarship: "",
  statement: "",
  laptop: "",
  student: "",
  batch: "batch25",
  track: "",
  password: "",
  referralCode: "",
};
const ApplicationPage = () => {
  const [state, action] = useFormState(new_application, undefined);
  const [value, setValue] = useState(initial);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const { setApplicant } = useApplicantStore();
  const { user } = useUserStore();
  // const [countries, setCountries] = useState([]);
  const [openRegister, setOpenRegister] = useState<boolean>(false);
  // useEffect(() => {
  //   // Fetch country list from REST Countries API
  //   fetch("https://restcountries.com/v3.1/all")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // Extract country names and codes
  //       const countryList = data
  //         .map((country: any) => ({
  //           name: country.name.common,
  //           code: country.cca2.toLowerCase(), // Convert to lowercase for consistency
  //         }))
  //         .sort((a: any, b: any) => a.name.localeCompare(b.name)); // Sort alphabetically

  //       setCountries(countryList);
  //     })
  //     .catch((err) => console.error("Error fetching countries:", err));
  // }, []);

  useEffect(() => {
    // console.log(state);
    if (state?.success && state?.data) {
      formRef.current?.reset();
      toast("Application Submitted Successfully");
      formRef.current?.reset();

      setApplicant(state?.data);

      router.push("/dashboard");
    } else if (state?.noAccount) {
      setOpenRegister(true);
    }
  }, [router, state]);
  return (
    <div className="p-4 md:py-5 md:px-10 md:w-2/3 mx-auto">
      {openRegister && (
        <NoAccountUser
          emailAddress={value.email}
          show={openRegister}
          onClose={() => setOpenRegister(false)}
        />
      )}
      <div className="flex flex-col-reverse md:flex-row md:flex-between py-2 md:py-4">
        <span className="flex items-center">
          <ArrowLeft
            className="w-8 h-8 cursor-pointer"
            onClick={() => {
              router.back();
            }}
          />
          <h1 className="text-3xl md:text-4xl font-bold">Application Form</h1>
        </span>
        <Image
          src={"/logo.png"}
          alt="logo"
          width={150}
          height={60}
          className="w-[100px] h-[40px] md:w-[150px] md:h-[60px] object-scale-down"
        />
      </div>
      <p className="font-sm">
        This program provides training in software engineering,
        entrepreneurship, marketing, and product development. We expect our
        trainees to apply these skills to create viable startups that can move
        from concept to launch (from 0 to 1). Our ultimate goal is to ensure
        that every graduate of XCUXION School is equipped not only with
        technical skills but also with the entrepreneurial mindset needed to
        scale their ventures.
      </p>
      <form action={action} ref={formRef} className="">
        <section className="my-4 space-y-3 bg-secondary border border-outline p-4 rounded-md">
          <h2 className="text-2xl font-semibold">Personal Information</h2>
          <p className="text-xs">Fields with * are required</p>
          <div className="grid gap-y-2 md:gap-y-0 md:grid-cols-3 md:gap-x-6">
            <span className="">
              <Label>First name*</Label>
              <Input
                type="text"
                value={value.fname}
                name="fname"
                id="fname"
                onChange={(e) => setValue({ ...value, fname: e.target.value })}
              />
              {state?.errors?.fname && (
                <p className="text-sm text-red-500">{state.errors.fname}</p>
              )}
            </span>
            <span className="">
              <Label>Other name</Label>
              <Input
                type="text"
                value={value.oname}
                name="oname"
                id="oname"
                onChange={(e) => setValue({ ...value, oname: e.target.value })}
              />
              {state?.errors?.oname && (
                <p className="text-sm text-red-500">{state.errors.oname}</p>
              )}
            </span>
            <span className="">
              <Label>Last name*</Label>
              <Input
                type="text"
                value={value.lname}
                name="lname"
                id="lname"
                onChange={(e) => setValue({ ...value, lname: e.target.value })}
              />
              {state?.errors?.lname && (
                <p className="text-sm text-red-500">{state.errors.lname}</p>
              )}
            </span>
          </div>
          <div className="grid gap-y-2 md:gap-y-0 gap-x-4 md:grid-cols-3 md:gap-x-6">
            <span className="w-full">
              <Label>Date of Birth*</Label>
              <Input
                type="date"
                value={value.dob}
                name="dob"
                className=""
                id="dob"
                onChange={(e) => setValue({ ...value, dob: e.target.value })}
              />
              {state?.errors?.dob && (
                <p className="text-sm text-red-500">{state.errors.dob}</p>
              )}
            </span>
            <span className="w-full">
              <Label>Gender</Label>
              <RadioGroup
                defaultValue="male"
                className="flex gap-x-6 h-9 items-center"
                name="gender"
                onValueChange={(choice) => {
                  setValue({ ...value, gender: choice });
                }}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">Female</Label>
                </div>
              </RadioGroup>
            </span>
            <span className="md:col-span-1">
              <Label>Country of Residence</Label>
              <Select
                onValueChange={(choice) =>
                  setValue({ ...value, country: choice })
                }
                name="country"
              >
                <SelectTrigger className="">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-secondary">
                  <SelectItem value="ghana">Ghana</SelectItem>
                </SelectContent>
              </Select>
              {state?.errors?.country && (
                <p className="text-sm text-red-500">{state.errors.country}</p>
              )}
            </span>
            {/* <span className="md:col-span-1">
              <Label>Country</Label>
              <Select
                onValueChange={(choice) =>
                  setValue({ ...value, country: choice })
                }
                name="country"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-secondary">
                  {countries.length > 0 ? (
                    countries.map((country: any) => (
                      <SelectItem key={country.code} value={country.name}>
                        {country.name}
                      </SelectItem>
                    ))
                  ) : (
                    <SelectItem value="null" disabled>
                      Loading...
                    </SelectItem>
                  )}
                </SelectContent>
              </Select>
              {state?.errors?.country && (
                <p className="text-sm text-red-500">{state.errors.country}</p>
              )}
            </span> */}
          </div>

          <div className="grid md:grid-cols-2 gap-y-2 md:gap-y-0 md:gap-x-6">
            <span className="">
              <Label>Email</Label>
              <Input
                type="text"
                value={user?.email as string}
                name="email"
                id="email"
                onChange={(e) => setValue({ ...value, email: e.target.value })}
              />
              {state?.errors?.email && (
                <p className="text-sm text-red-500">{state.errors.email}</p>
              )}
            </span>
            <span className="">
              <Label>WhatsApp Number</Label>
              <Input
                type="text"
                value={value.contact}
                name="contact"
                id="contact"
                onChange={(e) =>
                  setValue({ ...value, contact: e.target.value })
                }
                maxLength={15}
                minLength={10}
              />
              {state?.errors?.contact && (
                <p className="text-sm text-red-500">{state.errors.contact}</p>
              )}
            </span>
          </div>
        </section>
        <section className="bg-secondary  border border-outline rounded-md p-4 md:my-10 space-y-4">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-0 md:gap-x-6 ">
            <span className="col-span-2 md:col-span-1 ">
              <Label>Select Batch</Label>
              <Select
                onValueChange={(choice) =>
                  setValue({ ...value, batch: choice })
                }
                name="batch"
              >
                <SelectTrigger className="">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-secondary">
                  <SelectItem value="batch25">Batch'25</SelectItem>
                </SelectContent>
              </Select>
              {state?.errors?.batch && (
                <p className="text-sm text-red-500">{state.errors.batch}</p>
              )}
            </span>
            <span className="col-span-2 md:col-span-1 ">
              <Label>What track would you prefer?</Label>
              <Select
                onValueChange={(choice) =>
                  setValue({ ...value, track: choice })
                }
                name="track"
              >
                <SelectTrigger className="">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-secondary">
                  <SelectItem value="web">
                    Full-stack Web Development
                  </SelectItem>
                  <SelectItem value="dataanalysis">Data Analysis</SelectItem>
                  <SelectItem value="backend">Backend Engineering</SelectItem>
                  <SelectItem value="mobile">Mobile App Development</SelectItem>
                </SelectContent>
              </Select>
              {state?.errors?.batch && (
                <p className="text-sm text-red-500">{state.errors.batch}</p>
              )}
            </span>
          </div>
          <div className="">
            <p className="font-semibold mt-4">Are you a student?</p>
            <RadioGroup
              name="student"
              defaultValue="no"
              className="flex mt-2 gap-x-10"
              onValueChange={(choice) => {
                setValue({ ...value, student: choice });
              }}
            >
              <span className="flex items-center space-x-2 ">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes">Yes</Label>
              </span>
              <span className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">No</Label>
              </span>
            </RadioGroup>
            {value.student === "yes" ? (
              <div className="grid md:grid-cols-3 gap-y-2 md:gap-y-0 md:gap-x-6 mt-2">
                <span className="">
                  <Select
                    onValueChange={(choice) =>
                      setValue({ ...value, school: choice })
                    }
                    name="school"
                  >
                    <SelectTrigger className="">
                      <SelectValue placeholder="Select school" />
                    </SelectTrigger>
                    <SelectContent className="bg-secondary">
                      <SelectItem value="knust">KNUST</SelectItem>
                      <SelectItem value="ug">
                        University of Ghana - Legon
                      </SelectItem>
                      <SelectItem value="ashesi">Ashesi University</SelectItem>
                      <SelectItem value="ucc">
                        Universit of Cape Coast
                      </SelectItem>
                      <SelectItem value="uds">
                        University of Develomental Studies
                      </SelectItem>
                      <SelectItem value="uhas">
                        University of Health & Allied Sciences
                      </SelectItem>
                      <SelectItem value="aamusted">AAMUSTED</SelectItem>
                      <SelectItem value="uew">University of Winneba</SelectItem>
                      <SelectItem value="none">Other</SelectItem>
                    </SelectContent>
                  </Select>

                  {state?.errors?.school && (
                    <p className="text-sm text-red-500">
                      {state.errors.school}
                    </p>
                  )}
                </span>
                <span className="">
                  <Input
                    type="text"
                    value={value.programme}
                    placeholder="Enter programme"
                    name="programme"
                    id="programme"
                    onChange={(e) =>
                      setValue({ ...value, programme: e.target.value })
                    }
                  />

                  {state?.errors?.programme && (
                    <p className="text-sm text-red-500">
                      {state.errors.programme}
                    </p>
                  )}
                </span>
                <span className="">
                  <Select
                    onValueChange={(choice) =>
                      setValue({ ...value, year: choice })
                    }
                    name="year"
                  >
                    <SelectTrigger className="">
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent className="bg-secondary">
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="6">6</SelectItem>
                    </SelectContent>
                  </Select>
                  {state?.errors?.year && (
                    <p className="text-sm text-red-500">{state.errors.year}</p>
                  )}
                </span>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="">
            <p className="font-semibold">
              Do you have a working laptop of at least 4GB RAM?*
            </p>
            <RadioGroup
              name="laptop"
              defaultValue="no"
              className="flex mt-2 gap-x-10"
              onValueChange={(choice) => {
                setValue({ ...value, laptop: choice });
              }}
            >
              <span className="flex items-center space-x-2 ">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes">Yes</Label>
              </span>
              <span className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">No</Label>
              </span>
            </RadioGroup>
          </div>
          <div className="">
            <p className="font-semibold">
              Will you need a scholarship to join this programme?*
            </p>
            <RadioGroup
              defaultValue="no"
              className="flex flex-col md:flex-row mt-2 gap-y-2 md:gap-y-0 md:gap-x-10"
              name="scholarship"
              onValueChange={(choice) => {
                setValue({ ...value, scholarship: choice });
              }}
            >
              <span className="flex items-center space-x-2 ">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes">Yes, I will need a scholarship</Label>
              </span>
              <span className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">No, I can afford it</Label>
              </span>
            </RadioGroup>
            {state?.errors?.scholarship && (
              <p className="text-sm text-red-500">{state.errors.scholarship}</p>
            )}
          </div>
          <div className="">
            <Input
              type="text"
              value={value.referralCode}
              placeholder="Enter referral code (if any)"
              name="referralCode"
              id="referralCode"
              onChange={(e) =>
                setValue({ ...value, referralCode: e.target.value })
              }
            />
            {state?.errors?.referralCode && (
              <p className="text-sm text-red-500">
                {state.errors.referralCode}
              </p>
            )}
          </div>
        </section>{" "}
        <section className="my-4 space-y-3 border bg-secondary border-outline p-4 rounded-md">
          <h2 className="text-2xl font-semibold">Aspiration</h2>
          <p className="text-xs">Fields with * are required</p>
          <div className="">
            <Label>
              Why do you think you should be accepted into this programme?*
            </Label>
            <Textarea
              value={value.reason}
              name="reason"
              id="reason"
              onChange={(e) => setValue({ ...value, reason: e.target.value })}
              className="h-40"
            />
            <p className="text-xs">Not more than 300 words</p>
            {state?.errors?.reason && (
              <p className="text-sm text-red-500">{state.errors.reason}</p>
            )}
          </div>
          <div className="">
            <Label>
              How do you intend to balance this training programme with your
              academics?*
            </Label>
            <Textarea
              value={value.balance}
              name="balance"
              id="balance"
              onChange={(e) => setValue({ ...value, balance: e.target.value })}
              className="h-40"
            />
            <p className="text-xs">Not more than 300 words</p>
            {state?.errors?.balance && (
              <p className="text-sm text-red-500">{state.errors.balance}</p>
            )}
          </div>

          {value.scholarship === "yes" ? (
            <div className="">
              <Label>Why should we give you this scholarship?*</Label>
              <Textarea
                value={value.statement}
                name="statement"
                id="statement"
                onChange={(e) =>
                  setValue({ ...value, statement: e.target.value })
                }
                className="h-40"
              />
              <p className="text-xs">Not more than 300 words</p>
              {state?.errors?.statement && (
                <p className="text-sm text-red-500">{state.errors.statement}</p>
              )}
            </div>
          ) : (
            ""
          )}
        </section>
        <SubmitButton buttonText="Submit" />
      </form>
    </div>
  );
};

export default ApplicationPage;
