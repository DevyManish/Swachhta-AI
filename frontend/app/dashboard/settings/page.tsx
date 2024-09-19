import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { UserClient } from '@/components/tables/user-tables/client';
import { analysisBatches } from '@/constants/data';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import InputDiv from '@/components/InputDiv';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { AlertTriangle } from 'lucide-react';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Settings', link: '/dashboard/settings' }
];
export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-5">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="my-4 grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <CardDescription>General</CardDescription>
                  <div className="grid gap-2">
                    <div>
                      <InputDiv label="PostOffice Number" value="123456" />
                      <InputDiv label="Name" placeholder="" />
                      <InputDiv
                        label="Email"
                        value="testoffice@postoffice.com"
                      />
                      <InputDiv label="Phone" value="7894561230" />
                      <Label htmlFor="address">Address</Label>
                      <Textarea
                        id="address"
                        value="Halisahar Station Road, Nabanagar, Halisahar, West Bengal 743136"
                      />
                      <div className="flex flex-col justify-between md:flex-row md:space-x-10">
                        <InputDiv label="State" value="west bengal" />
                        <InputDiv label="Pin" value="743158" />
                      </div>
                      <div className="flex flex-col justify-between md:flex-row md:space-x-10">
                        <InputDiv label="Latitude" value={'40.7128'} />
                        <InputDiv label="Longitude" value={'-74.0060'} />
                      </div>
                      <InputDiv label="Location" value={'40.7128, -74.0060'} />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="my-10">
        <div className="mb-3 flex text-red-500">
          <AlertTriangle className="mr-3" />
          Danger Zone
        </div>
        <Card className="rounded-lg border-2 border-dotted border-red-500">
          <CardHeader className="text-center font-bold">
            Change Password
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-between md:flex-row md:space-x-6">
              <InputDiv label="New Password" />
              <InputDiv label="Old Password" />
            </div>
          </CardContent>
          <CardFooter className="justify-end">
            <Button variant={'destructive'}>Change Password</Button>
          </CardFooter>
        </Card>
      </div>
    </PageContainer>
  );
}
