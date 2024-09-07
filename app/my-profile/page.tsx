import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Profile() {
  const user = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    role: "Software Engineer",
    company: "Google",
    currentRole: "Frontend Developer",
    address: "0x7427143ce72069f8D6008FA52c87f4773B9A11fa",
    proofOfWork: "https://github.com/johndoe",
    bio: "I'm a software engineer with 5 years of experience. I enjoy building web applications and learning new technologies.",
    avatarUrl: "https://randomuser.me"
  };

  return (
    <div className="container mx-auto py-10">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">My Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center mb-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src={user?.avatarUrl} alt={user?.name} />
              <AvatarFallback>{user?.name?.charAt(0) || 'U'}</AvatarFallback>
            </Avatar>
            <h2 className="mt-4 text-2xl font-semibold">{user?.name || 'User Name'}</h2>
            <p className="text-muted-foreground">{user?.role || 'Role'}</p>
          </div>

          <Separator className="my-6" />

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue={user?.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue={user?.email} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input id="role" defaultValue={user?.role} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" defaultValue={user?.company} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="currentRole">Current Role</Label>
                <Input id="currentRole" defaultValue={user?.currentRole} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Wallet Address</Label>
                <Input id="address" defaultValue={user?.address} />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="proofOfWork">Proof of Work</Label>
              <Input id="proofOfWork" defaultValue={user?.proofOfWork} />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" rows={4} defaultValue={user?.bio} />
            </div>
            
            <Button type="submit" className="w-full">Save Changes</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}