"use client"

import * as z from "zod"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Trash } from "lucide-react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"
import { Heading } from "@/components/ui/heading"
import { useToast } from "@/components/ui/use-toast"
import FileUpload from "@/components/file-upload"
import PageContainer from "@/components/layout/page-container"
import { Breadcrumbs } from "@/components/breadcrumbs"
import axios from "axios"
import { IMG_MAX_LIMIT } from "@/constants/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "page", link: "/dashboard/page" }
]

const Page = ({ initialData = null }) => {
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [analysisResult, setAnalysisResult] = useState(null)

  const title = initialData ? "Edit page" : "Create Analysis"
  const description = initialData
    ? "Edit an page record."
    : "Add a new page record"
  const toastMessage = initialData ? "page updated." : "page created."
  const action = "Send"

  const defaultValues = initialData || {
    imgUrl: [],
    batchId: "588547jejej83j3m44521"
  }

  const form = useForm({
    defaultValues
  })

  const onSubmit = async (data) => {
    try {
      setLoading(true)
  
      const formData = new FormData()
  
      data.imgUrl.forEach((url) => {
        formData.append("url", url.fileUrl)
      })
  
      formData.append("batchId", data.batchId)
  
      const response = await axios.post(
        `http://127.0.0.1:5000/analyse`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      )
  
      setAnalysisResult(response.data)
      toast({
        title: toastMessage,
        description: "Your page sample has been successfully submitted."
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request."
      })
    } finally {
      setLoading(false)
    }
  }

  const onDelete = async () => {
    try {
      setLoading(true)
      router.refresh()
      router.push(`/dashboard/page`)
    } catch (error) {
    } finally {
      setLoading(false)
      setOpen(false)
    }
  }

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const renderAnalysisResult = () => {
    if (!analysisResult) return null;

    const { cleanliness_status, image_dimensions, predictions, summary, timestamp, top_prediction } = analysisResult;

    const chartData = Object.entries(predictions).map(([name, value]) => ({ name, value }));

    return (
      <div className="mt-8 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Analysis Result</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Cleanliness Status:</strong> {cleanliness_status}</p>
            <p><strong>Image Dimensions:</strong> {image_dimensions.width}x{image_dimensions.height}</p>
            <p><strong>Summary:</strong> {summary}</p>
            <p><strong>Timestamp:</strong> {timestamp}</p>
            <p><strong>Top Prediction:</strong> {top_prediction.label} ({top_prediction.confidence_score.toFixed(2)}%)</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Waste Type Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="flex items-center justify-between ">
          <Heading title={title} description={description} />
        </div>
        <Separator />
        <div className="flex flex-col items-center justify-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex w-9/12 flex-col justify-center space-y-8"
            >
              <FormField
                control={form.control}
                name="imgUrl"
                render={({ field }) => (
                  <FormItem>
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
                  <FormItem>
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
              <Button disabled={loading} className="ml-auto" type="submit">
                {action}
              </Button>
            </form>
          </Form>
        </div>
        <Separator />
        {renderAnalysisResult()}
        <div className="overflow-y-scroll">
          {initialData && (
            <Button
              disabled={loading}
              variant="destructive"
              size="sm"
              onClick={() => setOpen(true)}
            >
              <Trash className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </PageContainer>
  )
}

export default Page