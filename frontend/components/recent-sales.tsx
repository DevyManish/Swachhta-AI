import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>PO</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Post Office A</p>
          <p className="text-sm text-muted-foreground">Pin Code: 123456</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="rounded-3xl bg-yellow-400 py-2 hover:bg-yellow-400">
            Cleanliness: 68
          </Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>PO</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Post Office B</p>
          <p className="text-sm text-muted-foreground">Pin Code: 654321</p>
        </div>
        <div className="ml-auto font-medium"></div>
        <Badge className="rounded-3xl bg-green-400 py-2 hover:bg-green-400">
          Cleanliness: 82
        </Badge>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>PO</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Post Office C</p>
          <p className="text-sm text-muted-foreground">Pin Code: 789101</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="rounded-3xl bg-orange-400 py-2 hover:bg-orange-400">
            Cleanliness: 52
          </Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>PO</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Post Office D</p>
          <p className="text-sm text-muted-foreground">Pin Code: 246810</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="rounded-3xl bg-green-500 py-2 hover:bg-green-500">
            Cleanliness: 87
          </Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>PO</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Post Office E</p>
          <p className="text-sm text-muted-foreground">Pin Code: 135790</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="rounded-3xl bg-red-400 py-2 hover:bg-red-400">
            Cleanliness: 37
          </Badge>
        </div>
      </div>
    </div>
  );
}
