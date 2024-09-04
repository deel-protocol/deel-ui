import React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Post() {
  return (
    <div className="flex flex-col items-center justify-center">
      {" "}
      <h1 className="text-4xl font-bold text-center text-gray-900">
        Post your Job
      </h1>
      <Card className="w-[350px] mt-32">
        <CardHeader>
          <CardTitle>Create Job Listing</CardTitle>
          <CardDescription>
            Post your job listing with one simple click
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Category</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Webdesign</SelectItem>
                    <SelectItem value="sveltekit">Code auditing</SelectItem>
                    <SelectItem value="astro">
                      Smart contract development
                    </SelectItem>
                    <SelectItem value="nuxt">Landing page creation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Description</Label>
                <Input id="description" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="fee">Gas Fee Address</Label>
                <Input
                  id="fee"
                  placeholder="Enter the Address to pay Gas fees "
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="payment">Payment Adress</Label>
                <Input
                  id="payment"
                  placeholder="Enter the Address to send the payment from "
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="pricing">Pricing</Label>
                <Input
                  id="pricing"
                  placeholder="Enter the pricing for this job"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Post</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
