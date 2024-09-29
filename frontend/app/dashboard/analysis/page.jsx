"use client";

import * as z from "zod";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";
import { useToast } from "@/components/ui/use-toast";
import FileUpload from "@/components/file-upload";
import PageContainer from "@/components/layout/page-container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import axios from "axios";
import InputDiv from "@/components/InputDiv";
import { Card, CardContent } from "@/components/ui/card";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Analysis", link: "/dashboard/analysis" },
];

const Page = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);

  const title = "Create Analysis";
  const description = "Add a new page record";
  const toastMessage = "Analysis result has been successfully submitted";
  const action = "Send";

  const defaultValues = {
    email: "ram.sharma@indiapost.gov.in",
    postOfficeNumber: "743136",
    currentLocation: "",
    imgUrl: [],
    batchId: "588547jejej83j3m44521",
  };

  const form = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude}, ${longitude}`);
          form.setValue("currentLocation", `${latitude}, ${longitude}`);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      data.imgUrl.forEach((url) => {
        formData.append("url", url.fileUrl);
      });

      formData.append("batchId", data.batchId);

      const response = await axios.post(
        `http://127.0.0.1:5000/analyse`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setAnalysisResult(response.data);
      toast({
        title: toastMessage,
        description: "Your page sample has been successfully submitted.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    } finally {
      setLoading(false);
    }
  };

  const renderAnalysisResult = () => {};

  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="flex items-center justify-between ">
          <Heading title={title} description={description} />
        </div>
        <Separator />
        <Card className="">
          <CardContent className="p-5 flex flex-col space-y-2">
            <Form className="my-2" {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Enter email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="currentLocation"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      {" "}
                      <FormLabel>Current Location</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Fetching current location..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="postOfficeNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Post Office</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a verified email to display" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="700001">
                            700001-Kolkata GPO
                          </SelectItem>
                          <SelectItem value="400001">
                            400001-Mumbai GPO
                          </SelectItem>
                          <SelectItem value="110001">
                            110001-New Delhi GPO
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="imgUrl"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel>Images</FormLabel>
                      <FormControl>
                        <FileUpload
                          onChange={field.onChange}
                          value={field.value}
                          onRemove={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="batchId"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel>Batch ID</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Enter batch ID"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end ">
                  <Button disabled={loading} type="submit" className="mt-2">
                    {action}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
        <Separator />
        {renderAnalysisResult()}
      </div>
    </PageContainer>
  );
};

export default Page;
